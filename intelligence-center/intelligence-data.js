(function () {
  const watchKey = "aiStockLabWatchlist";
  const readKey = "aiStockLabReadIntelligence";

  function realSection(key) {
    const splitData = {
      overview: window.IntelligenceOverviewData,
      companyInsider: window.CompanyInsiderRobotData,
      institutionalRobot: window.InstitutionalRobotData,
      macroRobot: window.MacroRobotData,
    };
    if (splitData[key]) return splitData[key];
    const realData = window.REAL_INTELLIGENCE_DATA || window.IntelligenceRealData;
    return realData && realData[key] ? realData[key] : null;
  }

  const insiderSignals = [
    {
      id: "insider-2376-20260529",
      type: "company-insider",
      robot: "雙券資比偵測機器人",
      title: "2376 技嘉",
      stockCode: "2376",
      stockName: "技嘉",
      industry: "電腦及週邊設備業",
      marketCap: "2,842 億",
      identity: "董事長",
      action: "增加持股",
      shares: 80,
      amount: 2400,
      importance: "高",
      timestamp: "2026/05/29 17:42",
      tags: ["雙券資比", "空方籌碼", "借券賣出", "融券變化"],
      summary: "董事長近月增加持股 80 張，估算金額約 2,400 萬元。",
      event: "董事長葉培城於 2026/05/26~2026/05/28 增加持股 80 張，估算金額約 2,400 萬元。",
      holdingChange: "持股比率小幅上升，屬近期明顯加碼。",
      ai: "高層持續加碼顯示對公司中長期發展具信心，近期 AI 伺服器需求強勁，營收動能向上。",
      impact: "短期有助市場信心提升，資金關注度提高，股價可能獲得支撐。",
      risk: "產業競爭加劇、匯率波動、AI 需求不如預期等。",
      source: "公開資訊觀測站 / 內部人持股申報",
    },
    {
      id: "insider-3491-20260529",
      type: "company-insider",
      robot: "雙券資比偵測機器人",
      title: "3491 昇達科",
      stockCode: "3491",
      stockName: "昇達科",
      industry: "通信網路業",
      marketCap: "186 億",
      identity: "董事",
      action: "增加持股",
      shares: 65,
      amount: 780,
      importance: "中高",
      timestamp: "2026/05/29 16:58",
      tags: ["董事", "內部人買進", "低軌衛星", "金額達標"],
      summary: "董事增加持股 65 張，低軌衛星題材熱度同步升溫。",
      event: "董事於近三個交易日增加持股 65 張，估算金額約 780 萬元。",
      holdingChange: "中階主管持股增加，買進張數超過偵測門檻。",
      ai: "內部人加碼搭配低軌衛星需求題材，有助提高市場對後續訂單動能的期待。",
      impact: "若成交量同步放大，可能帶動題材型資金關注。",
      risk: "題材反應快速，需留意短線漲多後回檔與訂單認列時點。",
      source: "公開資訊觀測站 / 內部人持股申報",
    },
    {
      id: "insider-3017-20260529",
      type: "company-insider",
      robot: "雙券資比偵測機器人",
      title: "3017 奇鋐",
      stockCode: "3017",
      stockName: "奇鋐",
      industry: "電腦及週邊設備業",
      marketCap: "2,116 億",
      identity: "大股東",
      action: "增加持股",
      shares: 52,
      amount: 1120,
      importance: "中",
      timestamp: "2026/05/29 16:30",
      tags: ["大股東", "散熱", "AI 伺服器", "內部人買進"],
      summary: "大股東增加持股 52 張，買進張數剛越過偵測門檻。",
      event: "大股東申報增加持股 52 張，估算金額約 1,120 萬元。",
      holdingChange: "持股變化符合門檻，但張數仍屬中等規模。",
      ai: "大股東加碼代表對營運韌性有一定信心，散熱供應鏈仍受 AI 伺服器需求支撐。",
      impact: "有助於基本面與題材面的信心，但訊號強度低於董事長直接加碼。",
      risk: "高本益比個股對訂單遞延與市場風險較敏感。",
      source: "公開資訊觀測站 / 內部人持股申報",
    },
    {
      id: "insider-6669-20260529",
      type: "company-insider",
      robot: "雙券資比偵測機器人",
      title: "6669 緯穎",
      stockCode: "6669",
      stockName: "緯穎",
      industry: "電腦及週邊設備業",
      marketCap: "4,822 億",
      identity: "總經理",
      action: "增加持股",
      shares: 50,
      amount: 9850,
      importance: "高",
      timestamp: "2026/05/29 15:47",
      tags: ["董事/經理人", "高層加碼", "金額達標", "AI 伺服器"],
      summary: "總經理增加持股 50 張，估算金額達 9,850 萬元。",
      event: "總經理申報增加持股 50 張，估算金額約 9,850 萬元，金額明顯達標。",
      holdingChange: "買進張數達門檻且估算金額顯著，屬高重要度訊號。",
      ai: "高階經理人以大額資金加碼，通常反映對未來訂單與營運展望具信心。",
      impact: "可能提高法人與市場對 AI 伺服器供應鏈的評價關注。",
      risk: "高價股波動較大，需留意美系雲端客戶資本支出變化。",
      source: "公開資訊觀測站 / 內部人持股申報",
    },
    {
      id: "insider-2382-20260529",
      type: "company-insider",
      robot: "雙券資比偵測機器人",
      title: "2382 廣達",
      stockCode: "2382",
      stockName: "廣達",
      industry: "電腦及週邊設備業",
      marketCap: "1.21 兆",
      identity: "董事",
      action: "增加持股",
      shares: 58,
      amount: 1680,
      importance: "中",
      timestamp: "2026/05/29 15:10",
      tags: ["董事", "AI 伺服器", "內部人買進"],
      summary: "董事增加持股 58 張，AI 伺服器族群同步受到資金關注。",
      event: "董事申報增加持股 58 張，估算金額約 1,680 萬元。",
      holdingChange: "買進張數達標，金額接近大額門檻。",
      ai: "內部人買進與 AI 伺服器熱度同時出現，顯示族群資金仍偏正向。",
      impact: "若外資同步加碼，訊號可信度可進一步提升。",
      risk: "大型權值股受大盤資金與匯率影響較明顯。",
      source: "公開資訊觀測站 / 內部人持股申報",
    },
  ];

  const institutionalSignals = [];

  const macroEvents = [
    {
      id: "macro-us-cpi-20260531",
      type: "macro",
      title: "美國 CPI",
      eventName: "美國 CPI（年增率）",
      publishTime: "2026/05/31 20:30",
      previous: "2.3%",
      forecast: "2.5%",
      actual: null,
      status: "倒數 2 天 13 小時",
      impact: "影響美股、台股電子與利率預期",
      importance: "高",
      timestamp: "2026/05/29 16:30",
      tags: ["總經數據", "CPI", "降息預期", "科技股"],
      summary: "將於 2 天後公布，市場關注降息預期變化。",
      event: "美國 CPI 即將公布，若高於預期可能壓抑降息預期。",
      ai: "目前尚未公布，市場可能提前反映利率預期，科技成長股對數據敏感度較高。",
      impactDetail: "低於預期偏多科技股；高於預期可能使資金轉向防禦型資產。",
      risk: "數據公布前後可能出現匯率與指數波動。",
      source: "總經事件行事曆",
    },
    {
      id: "macro-nfp-20260606",
      type: "macro",
      title: "美國非農就業",
      eventName: "美國非農就業（新增人數）",
      publishTime: "2026/06/06 20:30",
      previous: "17.7 萬",
      forecast: "13.0 萬",
      actual: null,
      status: "倒數 8 天 13 小時",
      impact: "影響美股波動與降息預期",
      importance: "中高",
      timestamp: "2026/05/29 12:00",
      tags: ["總經數據", "就業", "降息預期"],
      summary: "就業數據將影響聯準會政策預期。",
      event: "非農就業將公布，市場預期新增人數放緩。",
      ai: "若就業放緩但未失速，可能有助風險資產；若太弱則需留意景氣疑慮。",
      impactDetail: "科技股、美元、債券殖利率皆可能受到影響。",
      risk: "數據意外常造成短線大幅震盪。",
      source: "總經事件行事曆",
    },
    {
      id: "macro-fomc-20260612",
      type: "macro",
      title: "FOMC 利率決議",
      eventName: "FOMC 利率決議",
      publishTime: "2026/06/12 02:00",
      previous: "4.25% - 4.50%",
      forecast: "4.25% - 4.50%",
      actual: null,
      status: "倒數 14 天 19 小時",
      impact: "影響全球資金成本與風險資產",
      importance: "高",
      timestamp: "2026/05/29 12:00",
      tags: ["總經數據", "FOMC", "利率"],
      summary: "市場等待利率決議與政策聲明。",
      event: "FOMC 將公布最新利率決議與政策聲明。",
      ai: "若政策語氣轉鴿，風險資產偏多；若維持偏鷹，成長股估值承壓。",
      impactDetail: "半導體、AI 伺服器、高估值科技股受影響較明顯。",
      risk: "利率預期反覆可能擴大市場波動。",
      source: "總經事件行事曆",
    },
    {
      id: "macro-tw-rate-20260619",
      type: "macro",
      title: "台灣央行利率決議",
      eventName: "台灣央行利率決議",
      publishTime: "2026/06/19 14:00",
      previous: "2.000%",
      forecast: "2.000%",
      actual: null,
      status: "倒數 21 天 7 小時",
      impact: "影響台股金融與不動產產業",
      importance: "中",
      timestamp: "2026/05/29 12:00",
      tags: ["總經數據", "台灣央行", "金融股"],
      summary: "台灣利率決議將影響金融與不動產相關族群。",
      event: "央行將公布利率決議，市場預期利率維持不變。",
      ai: "利率穩定有助金融股評價維持，但仍需觀察房市與匯率政策。",
      impactDetail: "金融、營建、壽險族群可能受政策語氣影響。",
      risk: "若政策意外偏緊，不動產與高槓桿族群可能承壓。",
      source: "總經事件行事曆",
    },
  ];

  const distribution = [
    ["04/30", 66],
    ["05/03", 28],
    ["05/06", 82],
    ["05/09", 53],
    ["05/12", 184],
    ["05/15", 38],
    ["05/18", 90],
    ["05/21", 65],
    ["05/24", 102],
    ["05/29", 74],
  ];

  function storeArray(key) {
    try {
      return JSON.parse(localStorage.getItem(key) || "[]");
    } catch (_) {
      return [];
    }
  }

  function saveArray(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (_) {}
  }

  function typeLabel(type) {
    return {
      "company-insider": "雙券資比",
      institutional: "法人機構",
      macro: "總經數據",
    }[type] || type;
  }

  function typeIcon(type) {
    return {
      "company-insider": "person",
      institutional: "building",
      macro: "globe",
    }[type] || "file";
  }

  function importanceRank(value) {
    return { "高": 3, "中高": 2, "中": 1 }[value] || 0;
  }

  function withState(items) {
    const read = new Set(storeArray(readKey));
    return items.map((item) => ({ ...item, read: read.has(item.id) }));
  }

  function allIntelligence() {
    return withState([...insiderSignals, ...institutionalSignals, ...macroEvents])
      .sort((a, b) => importanceRank(b.importance) - importanceRank(a.importance));
  }

  function applyShortMarginOverview(overview) {
    const ratioService = window.ShortMarginRatioService;
    const raw = window.ShortMarginRatioMockData;
    if (!ratioService || !raw) return overview;

    const shortMargin = ratioService.prepareShortMarginData(raw);
    const stocks = shortMargin.stocks || [];
    const stats = shortMargin.stats || [];
    const detectedCount = stats[0]?.value ?? stocks.length;
    const highRatioCount = stats[1]?.value ?? stocks.filter((stock) => Number(stock.ratio) >= 100).length;
    const borrowIncreaseCount = stats[3]?.value ?? stocks.filter((stock) => Number(stock.borrowSellChange) > 0).length;
    const institutionalCount = Number(String((overview.robots || [])[1]?.stats?.[0]?.[1] || "").replace(/[^\d.-]/g, "")) || 0;
    const macroCount = Number(String((overview.robots || [])[2]?.stats?.[0]?.[1] || "").replace(/[^\d.-]/g, "")) || 0;
    const baseHighCount = Number(overview.cards?.[1]?.value) || 0;
    const cards = (overview.cards || []).map((card, index) => {
      if (index === 0) return { ...card, value: detectedCount + institutionalCount + macroCount };
      if (index === 1) return { ...card, value: baseHighCount + highRatioCount };
      if (index === 2) return { ...card, value: Math.max(Number(card.value) || 0, detectedCount) };
      return card;
    });
    const robots = (overview.robots || []).map((robot, index) => {
      if (index !== 0 && robot.id !== "company-insider") return robot;
      return {
        ...robot,
        title: "雙券資比偵測機器人",
        href: "company-insider-robot/",
        stats: [
          ["偵測", `${detectedCount} 檔`],
          ["雙券資比 > 100%", `${highRatioCount} 檔`],
          ["借券增加", `${borrowIncreaseCount} 檔`],
        ],
        rule: "雙券資比 = (借券賣出餘額 + 融券餘額) / 融資餘額 × 100%",
      };
    });

    return {
      ...overview,
      cards,
      robots,
    };
  }

  function parseMacroTime(timestamp) {
    const match = String(timestamp || "").match(/^(\d{4})\/(\d{1,2})\/(\d{1,2})\s+(\d{1,2}):(\d{2})/);
    if (!match) return null;
    const [, year, month, day, hour, minute] = match.map(Number);
    const parsed = new Date(year, month - 1, day, hour, minute, 0, 0);
    return Number.isNaN(parsed.getTime()) ? null : parsed;
  }

  function macroHasActual(event) {
    const value = String(event?.actual ?? "").trim();
    return value !== "" && value !== "—" && value !== "-" && value.toLowerCase() !== "n/a";
  }

  function macroCountdownStatus(event, now = new Date()) {
    if (!event || macroHasActual(event)) return "已公布";
    const publishAt = parseMacroTime(event.publishTime || event.timestamp || event.sourcePublishTime);
    if (!publishAt) return event.status || "等待公布";
    const diffMinutes = Math.ceil((publishAt.getTime() - now.getTime()) / 60000);
    if (diffMinutes <= 0) return "等待公布";
    const days = Math.floor(diffMinutes / 1440);
    const hours = Math.floor((diffMinutes % 1440) / 60);
    const minutes = diffMinutes % 60;
    if (days > 0) return `倒數 ${days} 天 ${hours} 小時`;
    if (hours > 0) return `倒數 ${hours} 小時`;
    return `倒數 ${minutes} 分鐘`;
  }

  function nextMacroEvent(macro, now = new Date()) {
    return [...(macro.events || [])]
      .filter((event) => !macroHasActual(event))
      .map((event) => ({ event, time: parseMacroTime(event.publishTime || event.timestamp || event.sourcePublishTime) }))
      .filter(({ time }) => time && time.getTime() > now.getTime())
      .sort((a, b) => a.time - b.time)[0]?.event || null;
  }

  function applyMacroOverview(overview) {
    const macro = realSection("macroRobot");
    if (!macro || !Array.isArray(macro.events)) return overview;
    const upcoming = nextMacroEvent(macro);
    if (!upcoming) return overview;
    const macroSummary = macro.summary || [];
    const weekCount = macroSummary[0]?.value ?? macro.events.length;
    const status = macroCountdownStatus(upcoming);
    const cards = (overview.cards || []).map((card, index) => (
      index === 3 ? { ...card, value: upcoming.eventName, unit: status } : card
    ));
    const robots = (overview.robots || []).map((robot, index) => {
      if (index !== 2 && robot.id !== "macro") return robot;
      return {
        ...robot,
        title: "總經數據雷達機器人",
        href: "macro-robot/",
        stats: [
          ["本週事件", `${weekCount} 個`],
          ["下一事件", upcoming.eventName],
          ["狀態", status],
        ],
      };
    });
    return {
      ...overview,
      updatedAt: [overview.updatedAt, macro.updatedAt].filter(Boolean).sort().at(-1) || overview.updatedAt,
      cards,
      robots,
      macroEvents: macro.events.slice(0, 8),
    };
  }

  function getOverview() {
    const real = realSection("overview");
    if (real) {
      return applyMacroOverview(applyShortMarginOverview({
        ...real,
        items: withState(real.items || []),
        macroEvents: real.macroEvents || [],
      }));
    }
    const items = allIntelligence();
    return applyMacroOverview(applyShortMarginOverview({
      updatedAt: "2026/05/29 18:30",
      status: "運作中",
      cards: [
        { label: "今日偵測情報", value: 28, unit: "筆", icon: "file" },
        { label: "高重要度訊號", value: 6, unit: "筆", icon: "alert", accent: "orange" },
        { label: "追蹤標的", value: 1842, unit: "家", icon: "target" },
        { label: "下一個總經事件", value: "美國 CPI", unit: "倒數 2 天 13 小時", icon: "calendar" },
      ],
      robots: [
        {
          id: "company-insider",
          title: "雙券資比偵測機器人",
          href: "company-insider-robot/",
          stats: [
            ["偵測", "5 筆"],
            ["符合條件", "2 筆"],
            ["高重要度", "1 筆"],
          ],
          rule: "買進 >= 50 張 或 金額 >= 200 萬",
        },
        {
          id: "institutional",
          title: "法人機構動向機器人",
          href: "institutional-robot/",
          stats: [
            ["偵測", "18 筆"],
            ["投信連買", "7 筆"],
            ["三大法人同步買", "4 筆"],
          ],
          rule: "偵測連買、同步加碼與資金偏向",
        },
        {
          id: "macro",
          title: "總經數據雷達機器人",
          href: "macro-robot/",
          stats: [
            ["本週事件", "6 個"],
            ["下一事件", "美國 CPI"],
            ["狀態", "等待公布"],
          ],
          rule: "公布後自動判斷偏多 / 偏空 / 中性",
        },
      ],
      items,
      macroEvents,
    }));
  }

  function getCompanyInsider() {
    const real = realSection("companyInsider");
    if (real) {
      return {
        ...real,
        signals: withState(real.signals || []),
      };
    }
    return {
      updatedAt: "2026/05/29 18:30",
      status: "運作中",
      threshold: "買進 >= 50 張 或 金額 >= 200 萬",
      summary: [
        { label: "今日偵測", value: 18, unit: "筆", icon: "file" },
        { label: "符合條件", value: 5, unit: "筆", icon: "target" },
        { label: "高重要度", value: 2, unit: "筆", icon: "alert", accent: "orange" },
        { label: "偵測門檻", value: "買進 >= 50 張", unit: "或 金額 >= 200 萬", icon: "filter" },
      ],
      signals: withState(insiderSignals),
      distribution,
      sourceCards: [
        ["公開資訊觀測站", "內部人持股異動申報資料，每日盤後更新。"],
        ["內部人持股申報", "依證交所規定 2 日內申報，本系統自動抓取與解析。"],
        ["系統自動比對門檻", "符合「張數 >= 50 張」或「金額 >= 200 萬元」者觸發。"],
        ["重要度評估機制", "依持股身份、金額與連續加碼行為綜合評估。"],
      ],
    };
  }

  function getInstitutionalRobot() {
    const real = realSection("institutionalRobot");
    if (real) {
      return {
        ...real,
        signals: withState(real.signals || []),
      };
    }
    return {
      updatedAt: "--",
      status: "等待資料",
      summary: [
        { label: "今日偵測", value: 0, unit: "筆", icon: "file" },
        { label: "投信連買", value: 0, unit: "筆", icon: "target" },
        { label: "外資連買", value: 0, unit: "筆", icon: "target" },
        { label: "三大法人同步買", value: 0, unit: "筆", icon: "filter", accent: "orange" },
        { label: "高重要度訊號", value: 0, unit: "筆", icon: "alert", accent: "orange" },
      ],
      signals: [],
      trend: [],
      groups: [],
      sourceCards: [
        ["資料來源", "上市使用 TWSE T86，櫃買使用 TPEx dailyTrade，僅保留台股個股，排除 ETF 與基金。"],
        ["偵測邏輯", "統計近 10 個有效交易日外資、投信、自營商買賣超，2 天以上才列為連買。"],
        ["更新頻率", "每日盤後更新，依最新可取得交易日自動回補。"],
        ["重要度判斷", "依買超金額、連買天數、法人同步程度綜合分級。"],
      ],
    };
  }

  function getMacroRobot() {
    const real = realSection("macroRobot");
    if (real) {
      return {
        ...real,
        events: withState(real.events || []),
      };
    }
    const events = withState([
      ...macroEvents,
      {
        id: "macro-pce-20260628",
        type: "macro",
        title: "美國 PCE",
        eventName: "美國 PCE（年增率）",
        country: "美國",
        publishTime: "2026/06/28 20:30",
        previous: "2.8%",
        forecast: "2.7%",
        actual: null,
        status: "等待公布",
        direction: "中性",
        impact: "影響降息預期與科技股估值",
        importance: "中高",
        timestamp: "2026/05/29 12:00",
        tags: ["PCE", "通膨", "降息預期"],
        summary: "PCE 是聯準會重要通膨指標，市場關注回落速度。",
        event: "美國 PCE 將公布，若低於預期，有助降息預期升溫。",
        ai: "目前預期小幅回落，若實際值低於預期，成長股與半導體可能受惠。",
        impactDetail: "科技股、半導體、AI 伺服器與美元指數受影響較明顯。",
        risk: "若通膨黏著，市場可能重新定價降息時間。",
        source: "總經事件行事曆",
      },
      {
        id: "macro-ism-20260603",
        type: "macro",
        title: "美國 ISM 製造業指數",
        eventName: "美國 ISM 製造業指數",
        country: "美國",
        publishTime: "2026/06/03 22:00",
        previous: "49.1",
        forecast: "49.8",
        actual: null,
        status: "等待公布",
        direction: "中性",
        impact: "影響景氣循環與原物料族群",
        importance: "中",
        timestamp: "2026/05/29 12:00",
        tags: ["ISM", "景氣循環", "傳產"],
        summary: "市場觀察製造業是否重新站回擴張區間。",
        event: "ISM 製造業指數將公布，50 以上代表製造業擴張。",
        ai: "若數據明顯改善，景氣循環與原物料族群可能受惠；若低於預期，資金可能轉向防禦。",
        impactDetail: "鋼鐵、塑化、航運、傳產龍頭與美元走勢可同步觀察。",
        risk: "單月數據易受庫存與季節因素干擾。",
        source: "總經事件行事曆",
      },
      {
        id: "macro-gdp-20260627",
        type: "macro",
        title: "美國 GDP",
        eventName: "美國 GDP（季增年率）",
        country: "美國",
        publishTime: "2026/06/27 20:30",
        previous: "1.6%",
        forecast: "1.7%",
        actual: null,
        status: "等待公布",
        direction: "中性",
        impact: "影響景氣預期與風險資產",
        importance: "中",
        timestamp: "2026/05/29 12:00",
        tags: ["GDP", "景氣", "風險資產"],
        summary: "GDP 反映經濟成長動能，影響市場風險偏好。",
        event: "美國 GDP 將公布，市場預期成長小幅回升。",
        ai: "若溫和優於預期，風險資產偏多；若大幅低於預期，需留意景氣下修壓力。",
        impactDetail: "電子、金融與景氣循環股會受市場風險偏好影響。",
        risk: "數據修正常造成後續解讀變化。",
        source: "總經事件行事曆",
      },
    ]).map((event) => ({
      country: event.country || (event.title.includes("台灣") ? "台灣" : event.title.includes("歐") ? "歐洲" : "美國"),
      direction: event.direction || "中性",
      ...event,
    }));

    return {
      updatedAt: "2026/05/29 18:30",
      status: "運作中",
      summary: [
        { label: "本週事件", value: 6, unit: "個", icon: "calendar" },
        { label: "即將公布", value: 2, unit: "個", icon: "file" },
        { label: "已公布（本週）", value: 4, unit: "個", icon: "target" },
        { label: "高影響事件", value: 3, unit: "個", icon: "alert", accent: "orange" },
        { label: "下一個事件", value: "美國 CPI", unit: "倒數 2 天 13 小時", icon: "filter" },
      ],
      events,
      impactGrid: [
        ["通膨數據（CPI/PCE）", "負面", "負面", "中性", "中性", "正面", "正面"],
        ["就業數據（非農/失業率）", "負面", "中性", "中性", "正面", "正面", "正面"],
        ["利率決議（FOMC）", "負面", "負面", "中性", "正面", "正面", "正面"],
        ["GDP 經濟成長", "中性", "中性", "負面", "中性", "正面", "正面"],
        ["ISM 製造業指數", "中性", "正面", "正面", "中性", "正面", "正面"],
      ],
      odds: [
        ["2026/06/19", "利率決議", "維持不變 62.3%", "降 37.7%"],
        ["2026/07/31", "利率決議", "維持不變 41.8%", "降 58.2%"],
        ["2026/09/18", "利率決議", "維持不變 22.5%", "降 77.5%"],
      ],
      sourceCards: [
        ["追蹤範圍", "全球重要總經數據與央行事件，涵蓋美國、台灣、歐洲、亞洲。"],
        ["分析邏輯", "比對前值與預期，判斷數據對外資風險偏好的可能影響。"],
        ["更新頻率", "數據公布即時更新，並產生 AI 分析。"],
        ["影響評估", "依歷史敏感度、相關性與市場反應綜合評估。"],
      ],
    };
  }

  function markRead(id) {
    const read = new Set(storeArray(readKey));
    read.add(id);
    saveArray(readKey, [...read]);
  }

  function toggleWatch(item) {
    const list = storeArray(watchKey);
    const exists = list.some((entry) => entry.stockCode === item.stockCode);
    const next = exists
      ? list.filter((entry) => entry.stockCode !== item.stockCode)
      : [...list, { stockCode: item.stockCode, stockName: item.stockName, source: item.id, addedAt: new Date().toISOString() }];
    saveArray(watchKey, next);
    return !exists;
  }

  function isWatched(stockCode) {
    return storeArray(watchKey).some((entry) => entry.stockCode === stockCode);
  }

  window.IntelligenceService = {
    allIntelligence,
    getOverview,
    getCompanyInsider,
    getInstitutionalRobot,
    getMacroRobot,
    markRead,
    toggleWatch,
    isWatched,
    typeLabel,
    typeIcon,
  };
})();
