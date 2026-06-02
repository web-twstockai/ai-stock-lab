(function () {
  function numberOrZero(value) {
    const number = Number(value);
    return Number.isFinite(number) ? number : 0;
  }

  function round2(value) {
    return Math.round(value * 100) / 100;
  }

  function getMarginBalance(record) {
    return numberOrZero(record.marginBalance);
  }

  function getShortBalance(record) {
    return numberOrZero(record.shortBalance);
  }

  function getBorrowSellBalance(record) {
    return numberOrZero(record.borrowSellBalance);
  }

  function calculateDoubleShortMarginRatio(record) {
    const marginBalance = getMarginBalance(record);
    if (marginBalance === 0) return null;
    return round2(((getBorrowSellBalance(record) + getShortBalance(record)) / marginBalance) * 100);
  }

  function classifyDoubleShortMarginRatio(ratio) {
    if (ratio === null) return "N/A";
    if (ratio >= 150) return "極端空方 / 軋空燃料";
    if (ratio >= 100) return "空方重壓";
    if (ratio >= 70) return "空方偏重";
    if (ratio >= 30) return "正常";
    return "空方低";
  }

  function getRatioChange(current, previous) {
    const currentRatio = calculateDoubleShortMarginRatio(current);
    const previousRatio = previous ? calculateDoubleShortMarginRatio(previous) : null;
    if (currentRatio === null || previousRatio === null) return null;
    return round2(currentRatio - previousRatio);
  }

  function isPriceUp(record) {
    return numberOrZero(record.priceChangePercent) > 0;
  }

  function isPriceDown(record) {
    return numberOrZero(record.priceChangePercent) < 0;
  }

  function isVolumeExpanded(record) {
    return numberOrZero(record.volumeChangePercent) > 10;
  }

  function isBigPriceUp(record) {
    return numberOrZero(record.priceChangePercent) >= 5;
  }

  function createAiStatus(record, previous) {
    const ratio = calculateDoubleShortMarginRatio(record);
    const ratioChange = getRatioChange(record, previous);
    const priceUp = isPriceUp(record);
    const shortDown = numberOrZero(record.shortBalanceChange) < 0;
    const borrowDown = numberOrZero(record.borrowSellBalanceChange) < 0;

    if (ratio !== null && ratio > 150) return "極端空方 / 軋空燃料";
    if (priceUp && shortDown && borrowDown && ratioChange !== null && ratioChange < 0) return "空方回補轉強";
    if (isBigPriceUp(record) && ratioChange !== null && ratioChange > 0 && numberOrZero(record.borrowSellBalanceChange) > 0) return "高檔空方加壓";
    if (numberOrZero(record.marginBalanceChange) >= 10000 && priceUp && ratioChange !== null && ratioChange < 0) return "融資追價偏熱";
    if (priceUp && isVolumeExpanded(record) && (shortDown || borrowDown)) return "軋空觀察";
    if (ratio !== null && ratio > 100) return "空方籌碼偏重";
    return classifyDoubleShortMarginRatio(ratio);
  }

  function createAiComment(current, previous) {
    const ratioChange = getRatioChange(current, previous);
    if (ratioChange === null) return "融資餘額為 0，雙券資比暫無法計算，先觀察後續資料是否恢復。";
    if (isPriceUp(current) && ratioChange > 0) return "股價上漲且雙券資比同步上升，代表空方仍在加壓，注意高檔震盪。";
    if (isPriceUp(current) && ratioChange < 0) return "股價上漲且雙券資比下降，空方回補跡象明確，偏軋空轉強。";
    if (isPriceDown(current) && ratioChange > 0) return "股價下跌且雙券資比上升，空方追擊力道增加，走勢偏弱。";
    if (isPriceDown(current) && ratioChange < 0) return "股價下跌但雙券資比下降，空方可能獲利回補，可進入止跌觀察。";
    return "股價與雙券資比變化相對中性，短線先觀察量能與券資餘額是否同步轉向。";
  }

  function enrichStock(stock) {
    const history = (stock.history || []).map((record, index, records) => {
      const previous = records[index - 1];
      const ratio = calculateDoubleShortMarginRatio(record);
      return {
        ...record,
        doubleShortMarginRatio: ratio,
        doubleShortMarginRatioChange: getRatioChange(record, previous),
        ratioLevel: classifyDoubleShortMarginRatio(ratio),
      };
    });
    const latest = history[history.length - 1] || {};
    const previous = history[history.length - 2] || null;

    return {
      ...stock,
      history,
      latest: {
        ...latest,
        aiStatus: createAiStatus(latest, previous),
        aiComment: createAiComment(latest, previous),
      },
    };
  }

  function prepareRobotData(rawData) {
    const stocks = (rawData.stocks || []).map(enrichStock);
    const ranked = [...stocks].sort((a, b) => (b.latest.doubleShortMarginRatio || -1) - (a.latest.doubleShortMarginRatio || -1));
    const highest = ranked[0]?.latest.doubleShortMarginRatio;
    const heavyCount = stocks.filter((stock) => (stock.latest.doubleShortMarginRatio || 0) > 100).length;
    const borrowIncreaseCount = stocks.filter((stock) => numberOrZero(stock.latest.borrowSellBalanceChange) > 0).length;

    return {
      ...rawData,
      stocks,
      summary: [
        { label: "追蹤檔數", value: stocks.length, unit: "檔", icon: "file" },
        { label: "最高雙券資比", value: highest === null || highest === undefined ? "N/A" : highest.toFixed(2), unit: "%", icon: "target", accent: "orange" },
        { label: "雙券資比 > 100%", value: heavyCount, unit: "檔", icon: "alert", accent: "orange" },
        { label: "借券賣出增加", value: borrowIncreaseCount, unit: "檔", icon: "filter" },
      ],
    };
  }

  window.ShortMarginService = {
    getMarginBalance,
    getShortBalance,
    getBorrowSellBalance,
    calculateDoubleShortMarginRatio,
    classifyDoubleShortMarginRatio,
    createAiStatus,
    createAiComment,
    prepareRobotData,
  };
})();
