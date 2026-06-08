(function () {
  const TWSE_BASE_URL = "https://www.twse.com.tw/rwd/zh";
  const MIN_BORROW_MARGIN_BALANCE = 30000;
  const FINANCIAL_STOCK_CODES = new Set(["5871", "5876", "5880", "6005", "6024"]);

  const industryMap = {
    2330: "電子上游・半導體",
    2308: "電子零組件・電源",
    2317: "電子下游・代工",
    2409: "電子中游・面板",
    2618: "航運・航空",
    2881: "金融保險",
    3231: "電子下游・代工",
    3481: "電子中游・面板",
  };

  function stripHtml(value) {
    return String(value ?? "").replace(/<[^>]*>/g, "").trim();
  }

  function toNumber(value) {
    const number = Number(stripHtml(value).replace(/,/g, "").replace(/[^\d.+-]/g, ""));
    return Number.isFinite(number) ? number : null;
  }

  function round2(value) {
    return Math.round(value * 100) / 100;
  }

  function calculateDoubleShortMarginRatio({ borrowSellBalance, shortBalance, marginBalance }) {
    const borrow = toNumber(borrowSellBalance);
    const short = toNumber(shortBalance);
    const margin = toNumber(marginBalance);
    if (!margin || borrow === null || short === null) return null;
    return round2(((borrow + short) / margin) * 100);
  }

  function getRatioLevel(ratio) {
    if (ratio === null || ratio === undefined) return "N/A";
    if (ratio >= 150) return "極端空方 / 軋空燃料";
    if (ratio >= 100) return "空方重壓";
    if (ratio >= 70) return "空方偏重";
    if (ratio >= 30) return "正常";
    return "空方低";
  }

  function getRiskLevel(ratio) {
    if (ratio >= 150) return "極高";
    if (ratio >= 100) return "高";
    if (ratio >= 70) return "中高";
    if (ratio >= 30) return "中";
    return "低";
  }

  function generateAiStatus(stock) {
    const ratio = calculateDoubleShortMarginRatio(stock);
    const priceUp = Number(stock.changePercent) > 0;
    const priceSurge = Number(stock.changePercent) >= 3;
    const volumeUp = Number(stock.volume) >= Number(stock.averageVolume || 0);
    const ratioUp = Number(stock.ratioChange) > 0;
    const marginUp = Number(stock.marginChange) > 0;
    const marginHot = Number(stock.marginChange) >= 1000;
    const shortDown = Number(stock.shortChange) < 0;
    const borrowDown = Number(stock.borrowSellChange) < 0;
    const borrowUp = Number(stock.borrowSellChange) > 0;

    if (ratio !== null && ratio >= 150) return "極端空方 / 軋空燃料";
    if (priceUp && shortDown && borrowDown && !ratioUp) return "空方回補轉強";
    if (priceUp && volumeUp && (shortDown || borrowDown)) return "軋空觀察";
    if (priceSurge && ratioUp && borrowUp) return "高檔空方加壓";
    if (marginHot && priceUp && !ratioUp) return "融資追價偏熱";
    if (ratio !== null && ratio > 100) return "空方籌碼偏重";
    return getRatioLevel(ratio);
  }

  function generateShortMarginAnalysis(stock) {
    if (stock.analysis) return stock.analysis;
    const ratio = calculateDoubleShortMarginRatio(stock);
    const priceUp = Number(stock.changePercent) > 0;
    const ratioUp = Number(stock.ratioChange) > 0;

    if (priceUp && ratioUp) return "股價上漲且雙券資比同步上升，代表空方仍在加壓，需注意高檔震盪與籌碼對作風險。";
    if (priceUp && !ratioUp) return "股價上漲且雙券資比下降，代表空方回補壓力增加，走勢偏向軋空轉強觀察。";
    if (!priceUp && ratioUp) return "股價下跌但雙券資比上升，代表空方持續追擊，短線走勢偏弱。";
    if (!priceUp && !ratioUp) return "股價下跌且雙券資比下降，可能是空方獲利回補，後續可觀察是否進入止跌區。";
    return `雙券資比位於${getRatioLevel(ratio)}區間，仍需搭配股價位置、成交量與融資增減判斷。`;
  }

  function toApiDate(value) {
    const raw = String(value || getTodayApiDate()).replace(/\D/g, "");
    if (raw.length === 8) return raw;
    return getTodayApiDate();
  }

  function getTodayApiDate() {
    const parts = new Intl.DateTimeFormat("en-CA", {
      timeZone: "Asia/Taipei",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).formatToParts(new Date());
    const values = Object.fromEntries(parts.map((part) => [part.type, part.value]));
    return `${values.year}${values.month}${values.day}`;
  }

  function toDisplayDate(apiDate) {
    return `${apiDate.slice(0, 4)}/${apiDate.slice(4, 6)}/${apiDate.slice(6, 8)}`;
  }

  async function fetchJson(url) {
    const response = await fetch(url, { headers: { Accept: "application/json" } });
    if (!response.ok) throw new Error(`TWSE request failed: ${response.status}`);
    const json = await response.json();
    if (json.stat && json.stat !== "OK") throw new Error(json.stat);
    return json;
  }

  function isCommonStockCode(code) {
    return /^[1-9]\d{3}$/.test(String(code || ""));
  }

  function passesBorrowMarginThreshold(stock) {
    return (Number(stock.borrowSellBalance) || 0) + (Number(stock.marginBalance) || 0) > MIN_BORROW_MARGIN_BALANCE;
  }

  function isFinancialStock(stock) {
    const stockId = String(stock.stockId || "");
    return stockId.startsWith("28") || FINANCIAL_STOCK_CODES.has(stockId) || String(stock.industry || "").includes("金融");
  }

  function getClosingPriceTable(priceJson) {
    return (priceJson.tables || []).find((table) => table.title && table.title.includes("每日收盤行情"));
  }

  function signedPriceChange(signHtml, diffValue) {
    const sign = stripHtml(signHtml);
    const diff = toNumber(diffValue) || 0;
    return sign.includes("-") ? -Math.abs(diff) : Math.abs(diff);
  }

  function buildPriceMap(priceJson) {
    const table = getClosingPriceTable(priceJson);
    const map = new Map();
    (table?.data || []).forEach((row) => {
      const stockId = row[0];
      if (!isCommonStockCode(stockId)) return;
      const closePrice = toNumber(row[8]);
      const changeValue = signedPriceChange(row[9], row[10]);
      const previousClose = closePrice !== null ? closePrice - changeValue : null;
      map.set(stockId, {
        closePrice,
        changePercent: previousClose ? round2((changeValue / previousClose) * 100) : null,
        volume: Math.floor((toNumber(row[2]) || 0) / 1000),
      });
    });
    return map;
  }

  function buildBorrowMap(borrowJson) {
    const map = new Map();
    (borrowJson.data || []).forEach((row) => {
      const stockId = row[0];
      if (!isCommonStockCode(stockId)) return;
      const previousBalance = (toNumber(row[8]) || 0) / 1000;
      const currentBalance = (toNumber(row[12]) || 0) / 1000;
      map.set(stockId, {
        borrowSellBalance: Math.floor(currentBalance),
        borrowSellChange: Math.floor(currentBalance - previousBalance),
      });
    });
    return map;
  }

  function buildStocks(marginJson, borrowMap, priceMap, apiDate) {
    const marginTable = (marginJson.tables || [])[1];
    return (marginTable?.data || [])
      .filter((row) => isCommonStockCode(row[0]))
      .map((row) => {
        const stockId = row[0];
        const price = priceMap.get(stockId) || {};
        const borrow = borrowMap.get(stockId) || {};
        const marginBalance = toNumber(row[6]) || 0;
        const marginPrevious = toNumber(row[5]) || 0;
        const shortBalance = toNumber(row[12]) || 0;
        const shortPrevious = toNumber(row[11]) || 0;
        const stock = {
          stockId,
          stockName: row[1],
          industry: industryMap[stockId] || "上市股票",
          date: toDisplayDate(apiDate),
          closePrice: price.closePrice,
          changePercent: price.changePercent,
          volume: price.volume || 0,
          marginBalance,
          marginChange: marginBalance - marginPrevious,
          shortBalance,
          shortChange: shortBalance - shortPrevious,
          borrowSellBalance: borrow.borrowSellBalance || 0,
          borrowSellChange: borrow.borrowSellChange || 0,
          time: "18:30",
          source: "TWSE",
        };
        const ratio = calculateDoubleShortMarginRatio(stock);
        const enriched = {
          ...stock,
          ratio,
          ratioChange: null,
          status: generateAiStatus({ ...stock, ratio }),
          riskLevel: getRiskLevel(ratio),
          possibleImpact: "真實資料已依官方總餘額計算，短線影響需搭配股價位置、量能與借券變化交叉觀察。",
          riskNote: "雙券資比高不等於一定上漲或下跌，請搭配價格趨勢與成交量審慎評估。",
        };
        return {
          ...enriched,
          analysis: generateShortMarginAnalysis(enriched),
        };
      })
      .filter((stock) => stock.marginBalance > 0 && passesBorrowMarginThreshold(stock) && !isFinancialStock(stock))
      .sort((a, b) => (b.ratio || -1) - (a.ratio || -1));
  }

  function buildStats(stocks) {
    return [
      { title: "今日偵測", value: stocks.length, unit: "筆", icon: "file", tone: "blue" },
      { title: "空方重壓", value: stocks.filter((stock) => (stock.ratio || 0) >= 100).length, unit: "筆", icon: "alert", tone: "red" },
      { title: "軋空觀察", value: stocks.filter((stock) => stock.status === "軋空觀察").length, unit: "筆", icon: "rocket", tone: "purple" },
      { title: "借券增加", value: stocks.filter((stock) => stock.borrowSellChange > 0).length, unit: "筆", icon: "trend", tone: "orange" },
      { title: "融資追價", value: stocks.filter((stock) => stock.marginChange > 0 && Number(stock.changePercent) >= 0).length, unit: "筆", icon: "users", tone: "green" },
    ];
  }

  function buildCharts(stocks) {
    const displayPercent = (stock) => `${stock.ratio?.toFixed(2) || "N/A"}%`;
    const displayChange = (value) => `${value > 0 ? "+" : ""}${Math.round(value).toLocaleString("zh-TW")} 張`;
    const topBy = (getter, count = 5) => [...stocks].sort((a, b) => getter(b) - getter(a)).slice(0, count);
    return {
      ratioTop5: topBy((stock) => stock.ratio || 0).map((stock) => ({ label: `${stock.stockId} ${stock.stockName}`, value: stock.ratio || 0, display: displayPercent(stock) })),
      borrowTop5: topBy((stock) => stock.borrowSellChange || 0).map((stock) => ({ label: `${stock.stockId} ${stock.stockName}`, value: stock.borrowSellChange || 0, display: displayChange(stock.borrowSellChange || 0) })),
      squeezeTop5: [...stocks]
        .filter((stock) => stock.shortChange < 0 || stock.borrowSellChange < 0)
        .sort((a, b) => (a.shortChange + a.borrowSellChange) - (b.shortChange + b.borrowSellChange))
        .slice(0, 5)
        .map((stock) => ({ label: `${stock.stockId} ${stock.stockName}`, value: Math.abs(stock.shortChange + stock.borrowSellChange), display: displayChange(stock.shortChange + stock.borrowSellChange) })),
    };
  }

  async function fetchOfficialShortMarginData(dateValue) {
    const apiDate = toApiDate(dateValue);
    const [marginJson, borrowJson, priceJson] = await Promise.all([
      fetchJson(`${TWSE_BASE_URL}/marginTrading/MI_MARGN?date=${apiDate}&selectType=ALL&response=json`),
      fetchJson(`${TWSE_BASE_URL}/marginTrading/TWT93U?date=${apiDate}&response=json`),
      fetchJson(`${TWSE_BASE_URL}/afterTrading/MI_INDEX?date=${apiDate}&type=ALLBUT0999&response=json`),
    ]);
    const stocks = buildStocks(marginJson, buildBorrowMap(borrowJson), buildPriceMap(priceJson), apiDate);
    return {
      updatedAt: `${toDisplayDate(apiDate)} 18:30`,
      date: toDisplayDate(apiDate),
      source: "臺灣證券交易所",
      stats: buildStats(stocks),
      stocks,
      charts: buildCharts(stocks),
    };
  }

  function enrichStock(stock) {
    const calculatedRatio = calculateDoubleShortMarginRatio(stock);
    const ratio = calculatedRatio ?? stock.ratio ?? null;
    return {
      ...stock,
      ratio,
      status: stock.status || generateAiStatus({ ...stock, ratio }),
      riskLevel: stock.riskLevel || getRiskLevel(ratio),
      analysis: generateShortMarginAnalysis({ ...stock, ratio }),
    };
  }

  function prepareShortMarginData(rawData) {
    const stocks = (rawData.stocks || [])
      .map(enrichStock)
      .filter(passesBorrowMarginThreshold)
      .filter((stock) => !isFinancialStock(stock))
      .sort((a, b) => (b.ratio || -1) - (a.ratio || -1));
    return {
      ...rawData,
      stats: buildStats(stocks),
      stocks,
      charts: rawData.charts || buildCharts(stocks),
    };
  }

  window.ShortMarginRatioService = {
    calculateDoubleShortMarginRatio,
    getRatioLevel,
    generateShortMarginAnalysis,
    fetchOfficialShortMarginData,
    prepareShortMarginData,
  };
})();
