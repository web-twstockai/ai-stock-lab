window.IntelligenceOverviewData = {
  "updatedAt": "2026/11/25 18:30",
  "status": "運作中",
  "cards": [
    {
      "label": "今日偵測情報",
      "value": 262,
      "unit": "筆",
      "icon": "file"
    },
    {
      "label": "高重要度訊號",
      "value": 64,
      "unit": "筆",
      "icon": "alert",
      "accent": "orange"
    },
    {
      "label": "追蹤標的",
      "value": 84,
      "unit": "家",
      "icon": "target"
    },
    {
      "label": "下一個總經事件",
      "value": "FOMC 利率決議",
      "unit": "等待公布",
      "icon": "calendar"
    }
  ],
  "robots": [
    {
      "id": "company-insider",
      "title": "公司派持股機器人",
      "href": "company-insider-robot/",
      "stats": [
        [
          "偵測",
          "0 檔"
        ],
        [
          "符合條件",
          "0 筆"
        ],
        [
          "高重要度",
          "0 筆"
        ]
      ],
      "rule": "雙券資比 = (借券賣出餘額 + 融券餘額) / 融資餘額 × 100%；資料單位：張"
    },
    {
      "id": "institutional",
      "title": "法人機構動向機器人",
      "href": "institutional-robot/",
      "stats": [
        [
          "偵測",
          "84 筆"
        ],
        [
          "投信連買",
          "16 筆"
        ],
        [
          "三大法人同步買",
          "1 筆"
        ]
      ],
      "rule": "偵測外資、投信、自營商買賣超，僅保留台股個股並排除 ETF 與基金。"
    },
    {
      "id": "macro",
      "title": "總經數據雷達機器人",
      "href": "macro-robot/",
      "stats": [
        [
          "本週事件",
          "31 個"
        ],
        [
          "下一事件",
          "FOMC 利率決議"
        ],
        [
          "狀態",
          "等待公布"
        ]
      ],
      "rule": "追蹤 CPI、PCE、FOMC、GDP、ISM 等重大總經數據。"
    }
  ],
  "items": [
    {
      "id": "inst-1303-20261125",
      "type": "institutional",
      "title": "1303 南亞",
      "stockCode": "1303",
      "stockName": "南亞",
      "sector": "塑膠工業",
      "group": "塑膠工業",
      "institutionType": "自營商",
      "direction": "連買",
      "days": 2,
      "consecutiveBuyDays": 2,
      "streaks": {
        "外資": 0,
        "投信": 1,
        "自營商": 2
      },
      "latestNetBuy": 1808,
      "buyVolume": 8981,
      "buyAmount": 22.36,
      "syncCount": 2,
      "importance": "高",
      "timestamp": "2026/11/25 18:20",
      "tags": [
        "自營商",
        "連買",
        "塑膠工業",
        "APPLE概念",
        "越南設廠"
      ],
      "summary": "自營商連買，近 10 個交易日正買合計 8,981 張，估算金額約 22.36 億元。",
      "event": "自營商連買 2 日，近 10 個交易日正買合計 8,981 張；最新日外資 -11,818 張、投信 6,566 張、自營商 1,808 張。",
      "ai": "法人買盤集中在 塑膠工業，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 36101.26,
      "yahooVerification": {
        "status": "matched",
        "source": "https://tw.stock.yahoo.com/quote/1303.TW/institutional-trading",
        "latestNetBuy": 1808,
        "days": 2,
        "latestForeign": -11818,
        "latestTrust": 6566,
        "latestDealer": 1808
      }
    },
    {
      "id": "inst-2610-20261125",
      "type": "institutional",
      "title": "2610 華航",
      "stockCode": "2610",
      "stockName": "華航",
      "sector": "航運業",
      "group": "航運業",
      "institutionType": "外資",
      "direction": "連買",
      "days": 10,
      "consecutiveBuyDays": 10,
      "streaks": {
        "外資": 10,
        "投信": 2,
        "自營商": 0
      },
      "latestNetBuy": 12063,
      "buyVolume": 101353,
      "buyAmount": 0,
      "syncCount": 2,
      "importance": "高",
      "timestamp": "2026/11/25 18:20",
      "tags": [
        "外資",
        "連買",
        "航運業",
        "三通",
        "官股企業"
      ],
      "summary": "外資連買，近 10 個交易日正買合計 101,353 張，估算金額約 0.00 億元。",
      "event": "外資連買 10 日，近 10 個交易日正買合計 101,353 張；最新日外資 12,063 張、投信 238 張、自營商 -202 張。",
      "ai": "法人買盤集中在 航運業，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 118616.704,
      "yahooVerification": {
        "status": "days-different",
        "source": "https://tw.stock.yahoo.com/quote/2610.TW/institutional-trading",
        "latestNetBuy": 12063,
        "days": 20,
        "latestForeign": 12063,
        "latestTrust": 238,
        "latestDealer": -202
      }
    },
    {
      "id": "inst-2618-20261125",
      "type": "institutional",
      "title": "2618 長榮航",
      "stockCode": "2618",
      "stockName": "長榮航",
      "sector": "航運業",
      "group": "航運業",
      "institutionType": "自營商",
      "direction": "連買",
      "days": 9,
      "consecutiveBuyDays": 9,
      "streaks": {
        "外資": 0,
        "投信": 0,
        "自營商": 9
      },
      "latestNetBuy": 1293,
      "buyVolume": 6447,
      "buyAmount": 0,
      "syncCount": 1,
      "importance": "高",
      "timestamp": "2026/11/25 18:20",
      "tags": [
        "自營商",
        "連買",
        "航運業",
        "三通",
        "運輸事業"
      ],
      "summary": "自營商連買，近 10 個交易日正買合計 6,447 張，估算金額約 0.00 億元。",
      "event": "自營商連買 9 日，近 10 個交易日正買合計 6,447 張；最新日外資 -3,537 張、投信 -2,853 張、自營商 1,293 張。",
      "ai": "法人買盤集中在 航運業，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 66335.017,
      "yahooVerification": {
        "status": "matched",
        "source": "https://tw.stock.yahoo.com/quote/2618.TW/institutional-trading",
        "latestNetBuy": 1293,
        "days": 9,
        "latestForeign": -3537,
        "latestTrust": -2853,
        "latestDealer": 1293
      }
    },
    {
      "id": "inst-2027-20261125",
      "type": "institutional",
      "title": "2027 大成鋼",
      "stockCode": "2027",
      "stockName": "大成鋼",
      "sector": "鋼鐵工業",
      "group": "鋼鐵工業",
      "institutionType": "投信",
      "direction": "連買",
      "days": 10,
      "consecutiveBuyDays": 10,
      "streaks": {
        "外資": 0,
        "投信": 10,
        "自營商": 1
      },
      "latestNetBuy": 689,
      "buyVolume": 101986,
      "buyAmount": 0,
      "syncCount": 2,
      "importance": "高",
      "timestamp": "2026/11/25 18:20",
      "tags": [
        "投信",
        "連買",
        "鋼鐵工業",
        "拜登基礎建設",
        "美中貿易戰受惠"
      ],
      "summary": "投信連買，近 10 個交易日正買合計 101,986 張，估算金額約 0.00 億元。",
      "event": "投信連買 10 日，近 10 個交易日正買合計 101,986 張；最新日外資 -10,268 張、投信 689 張、自營商 286 張。",
      "ai": "法人買盤集中在 鋼鐵工業，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 104812.619,
      "yahooVerification": {
        "status": "days-different",
        "source": "https://tw.stock.yahoo.com/quote/2027.TW/institutional-trading",
        "latestNetBuy": 689,
        "days": 13,
        "latestForeign": -10268,
        "latestTrust": 689,
        "latestDealer": 286
      }
    },
    {
      "id": "macro-gdp-growth-rate-qoq-prel-q3-2026-20261112",
      "type": "macro",
      "title": "GDP 經濟成長率",
      "eventName": "GDP 經濟成長率",
      "originalEventName": "GDP Growth Rate QoQ Prel (Q3 2026)",
      "sourcePublishTime": "2026/11/12 15:00 Asia/Taipei",
      "country": "英國",
      "publishTime": "2026/11/12 15:00",
      "previous": "0.4",
      "forecast": "0.7",
      "actual": "0.7",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響全球資金成本、美元走勢與風險資產評價。",
      "importance": "高",
      "timestamp": "2026/11/12 15:00",
      "tags": [
        "英國",
        "GDP",
        "中性"
      ],
      "summary": "GDP 經濟成長率 將於 2026/11/12 15:00 公布，市場關注前值 0.4、預期 0.7。",
      "event": "英國 GDP 經濟成長率，前值 0.4、預期 0.7、實際 0.7。",
      "ai": "目前 AI 判斷為中性觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響全球資金成本、美元走勢與風險資產評價。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar / Investing.com Economic Calendar / 鉅亨網全球經濟指標",
      "sourceUrl": "http://www.ons.gov.uk/",
      "sourceList": [
        "TradingView Economic Calendar",
        "Investing.com Economic Calendar",
        "鉅亨網全球經濟指標"
      ]
    },
    {
      "id": "macro-cpi-10-20261111",
      "type": "macro",
      "title": "消費者物價指數 CPI",
      "eventName": "消費者物價指數 CPI",
      "originalEventName": "德國居民消費價格指數(CPI) (月環比) (10月)",
      "sourcePublishTime": "2026/11/11 15:00 Asia/Taipei",
      "country": "德國",
      "publishTime": "2026/11/11 15:00",
      "previous": "0.6%",
      "forecast": "-0.2%",
      "actual": "-0.2%",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "importance": "高",
      "timestamp": "2026/11/11 15:00",
      "tags": [
        "德國",
        "消費者物價指數",
        "中性"
      ],
      "summary": "消費者物價指數 CPI 將於 2026/11/11 15:00 公布，市場關注前值 0.6%、預期 -0.2%。",
      "event": "德國 消費者物價指數 CPI，前值 0.6%、預期 -0.2%、實際 -0.2%。",
      "ai": "目前 AI 判斷為中性觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "Investing.com Economic Calendar",
      "sourceUrl": "https://hk.investing.com/economic-calendar/559763",
      "sourceList": [
        "Investing.com Economic Calendar"
      ]
    },
    {
      "id": "macro-inflation-rate-mom-final-oct-2026-20261111",
      "type": "macro",
      "title": "通膨率",
      "eventName": "通膨率",
      "originalEventName": "Inflation Rate MoM Final (Oct. 2026)",
      "sourcePublishTime": "2026/11/11 15:00 Asia/Taipei",
      "country": "德國",
      "publishTime": "2026/11/11 15:00",
      "previous": "0.6",
      "forecast": "-0.2",
      "actual": "-0.2",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "importance": "中高",
      "timestamp": "2026/11/11 15:00",
      "tags": [
        "德國",
        "通膨率",
        "中性"
      ],
      "summary": "通膨率 將於 2026/11/11 15:00 公布，市場關注前值 0.6、預期 -0.2。",
      "event": "德國 通膨率，前值 0.6、預期 -0.2、實際 -0.2。",
      "ai": "目前 AI 判斷為中性觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "https://www.destatis.de",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    },
    {
      "id": "macro-consumer-price-index-final-oct-2026-20261111",
      "type": "macro",
      "title": "Consumer Price Index Final (Oct. 2026)",
      "eventName": "Consumer Price Index Final (Oct. 2026)",
      "originalEventName": "Consumer Price Index Final (Oct. 2026)",
      "sourcePublishTime": "2026/11/11 15:00 Asia/Taipei",
      "country": "德國",
      "publishTime": "2026/11/11 15:00",
      "previous": "126.6",
      "forecast": "—",
      "actual": "126.4",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "importance": "中高",
      "timestamp": "2026/11/11 15:00",
      "tags": [
        "德國",
        "Consumer",
        "中性"
      ],
      "summary": "Consumer Price Index Final (Oct. 2026) 將於 2026/11/11 15:00 公布，市場關注前值 126.6、預期 —。",
      "event": "德國 Consumer Price Index Final (Oct. 2026)，前值 126.6、預期 —、實際 126.4。",
      "ai": "目前 AI 判斷為中性觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "https://www.destatis.de",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    }
  ],
  "macroEvents": [
    {
      "id": "macro-inflation-rate-mom-final-oct-2026-20261111",
      "type": "macro",
      "title": "通膨率",
      "eventName": "通膨率",
      "originalEventName": "Inflation Rate MoM Final (Oct. 2026)",
      "sourcePublishTime": "2026/11/11 15:00 Asia/Taipei",
      "country": "德國",
      "publishTime": "2026/11/11 15:00",
      "previous": "0.6",
      "forecast": "-0.2",
      "actual": "-0.2",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "importance": "中高",
      "timestamp": "2026/11/11 15:00",
      "tags": [
        "德國",
        "通膨率",
        "中性"
      ],
      "summary": "通膨率 將於 2026/11/11 15:00 公布，市場關注前值 0.6、預期 -0.2。",
      "event": "德國 通膨率，前值 0.6、預期 -0.2、實際 -0.2。",
      "ai": "目前 AI 判斷為中性觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "https://www.destatis.de",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    },
    {
      "id": "macro-consumer-price-index-final-oct-2026-20261111",
      "type": "macro",
      "title": "Consumer Price Index Final (Oct. 2026)",
      "eventName": "Consumer Price Index Final (Oct. 2026)",
      "originalEventName": "Consumer Price Index Final (Oct. 2026)",
      "sourcePublishTime": "2026/11/11 15:00 Asia/Taipei",
      "country": "德國",
      "publishTime": "2026/11/11 15:00",
      "previous": "126.6",
      "forecast": "—",
      "actual": "126.4",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "importance": "中高",
      "timestamp": "2026/11/11 15:00",
      "tags": [
        "德國",
        "Consumer",
        "中性"
      ],
      "summary": "Consumer Price Index Final (Oct. 2026) 將於 2026/11/11 15:00 公布，市場關注前值 126.6、預期 —。",
      "event": "德國 Consumer Price Index Final (Oct. 2026)，前值 126.6、預期 —、實際 126.4。",
      "ai": "目前 AI 判斷為中性觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "https://www.destatis.de",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    },
    {
      "id": "macro-cpi-10-20261111",
      "type": "macro",
      "title": "消費者物價指數 CPI",
      "eventName": "消費者物價指數 CPI",
      "originalEventName": "德國居民消費價格指數(CPI) (月環比) (10月)",
      "sourcePublishTime": "2026/11/11 15:00 Asia/Taipei",
      "country": "德國",
      "publishTime": "2026/11/11 15:00",
      "previous": "0.6%",
      "forecast": "-0.2%",
      "actual": "-0.2%",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "importance": "高",
      "timestamp": "2026/11/11 15:00",
      "tags": [
        "德國",
        "消費者物價指數",
        "中性"
      ],
      "summary": "消費者物價指數 CPI 將於 2026/11/11 15:00 公布，市場關注前值 0.6%、預期 -0.2%。",
      "event": "德國 消費者物價指數 CPI，前值 0.6%、預期 -0.2%、實際 -0.2%。",
      "ai": "目前 AI 判斷為中性觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "Investing.com Economic Calendar",
      "sourceUrl": "https://hk.investing.com/economic-calendar/559763",
      "sourceList": [
        "Investing.com Economic Calendar"
      ]
    },
    {
      "id": "macro-gdp-growth-rate-qoq-prel-q3-2026-20261112",
      "type": "macro",
      "title": "GDP 經濟成長率",
      "eventName": "GDP 經濟成長率",
      "originalEventName": "GDP Growth Rate QoQ Prel (Q3 2026)",
      "sourcePublishTime": "2026/11/12 15:00 Asia/Taipei",
      "country": "英國",
      "publishTime": "2026/11/12 15:00",
      "previous": "0.4",
      "forecast": "0.7",
      "actual": "0.7",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響全球資金成本、美元走勢與風險資產評價。",
      "importance": "高",
      "timestamp": "2026/11/12 15:00",
      "tags": [
        "英國",
        "GDP",
        "中性"
      ],
      "summary": "GDP 經濟成長率 將於 2026/11/12 15:00 公布，市場關注前值 0.4、預期 0.7。",
      "event": "英國 GDP 經濟成長率，前值 0.4、預期 0.7、實際 0.7。",
      "ai": "目前 AI 判斷為中性觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響全球資金成本、美元走勢與風險資產評價。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar / Investing.com Economic Calendar / 鉅亨網全球經濟指標",
      "sourceUrl": "http://www.ons.gov.uk/",
      "sourceList": [
        "TradingView Economic Calendar",
        "Investing.com Economic Calendar",
        "鉅亨網全球經濟指標"
      ]
    },
    {
      "id": "macro-services-output-mom-sep-2026-20261112",
      "type": "macro",
      "title": "Services Output MoM (Sep. 2026)",
      "eventName": "Services Output MoM (Sep. 2026)",
      "originalEventName": "Services Output MoM (Sep. 2026)",
      "sourcePublishTime": "2026/11/12 15:00 Asia/Taipei",
      "country": "英國",
      "publishTime": "2026/11/12 15:00",
      "previous": "-0.1",
      "forecast": "—",
      "actual": "0.2",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/11/12 15:00",
      "tags": [
        "英國",
        "Services",
        "中性"
      ],
      "summary": "Services Output MoM (Sep. 2026) 將於 2026/11/12 15:00 公布，市場關注前值 -0.1、預期 —。",
      "event": "英國 Services Output MoM (Sep. 2026)，前值 -0.1、預期 —、實際 0.2。",
      "ai": "目前 AI 判斷為中性觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響市場風險偏好與資金輪動。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "http://www.ons.gov.uk/",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    },
    {
      "id": "macro-services-output-yoy-sep-2026-20261112",
      "type": "macro",
      "title": "Services Output YoY (Sep. 2026)",
      "eventName": "Services Output YoY (Sep. 2026)",
      "originalEventName": "Services Output YoY (Sep. 2026)",
      "sourcePublishTime": "2026/11/12 15:00 Asia/Taipei",
      "country": "英國",
      "publishTime": "2026/11/12 15:00",
      "previous": "2.4",
      "forecast": "2.2",
      "actual": "2.2",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/11/12 15:00",
      "tags": [
        "英國",
        "Services",
        "中性"
      ],
      "summary": "Services Output YoY (Sep. 2026) 將於 2026/11/12 15:00 公布，市場關注前值 2.4、預期 2.2。",
      "event": "英國 Services Output YoY (Sep. 2026)，前值 2.4、預期 2.2、實際 2.2。",
      "ai": "目前 AI 判斷為中性觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響市場風險偏好與資金輪動。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "http://www.ons.gov.uk/",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    },
    {
      "id": "macro-niesr-gdp-20261112",
      "type": "macro",
      "title": "GDP 經濟成長率",
      "eventName": "GDP 經濟成長率",
      "originalEventName": "NIESR每月GDP追蹤",
      "sourcePublishTime": "2026/11/12 20:00 Asia/Taipei",
      "country": "英國",
      "publishTime": "2026/11/12 20:00",
      "previous": "0.7",
      "forecast": "0.5",
      "actual": "0.6",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響景氣循環、原物料、工業與科技需求預期。",
      "importance": "高",
      "timestamp": "2026/11/12 20:00",
      "tags": [
        "英國",
        "GDP",
        "偏多"
      ],
      "summary": "GDP 經濟成長率 將於 2026/11/12 20:00 公布，市場關注前值 0.7、預期 0.5。",
      "event": "英國 GDP 經濟成長率，前值 0.7、預期 0.5、實際 0.6。",
      "ai": "目前 AI 判斷為偏多觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響景氣循環、原物料、工業與科技需求預期。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "鉅亨網全球經濟指標",
      "sourceUrl": "https://www.cnyes.com/economy/indicator",
      "sourceList": [
        "鉅亨網全球經濟指標"
      ]
    },
    {
      "id": "macro-jobless-claims-4-week-average-w-o-nov-2-2026-20261112",
      "type": "macro",
      "title": "初領失業救濟金人數",
      "eventName": "初領失業救濟金人數",
      "originalEventName": "Jobless Claims 4-week Average (w/o Nov. 2, 2026)",
      "sourcePublishTime": "2026/11/12 21:30 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/11/12 21:30",
      "previous": "195.25",
      "forecast": "195",
      "actual": "195.75",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響就業強弱、薪資通膨與聯準會政策預期。",
      "importance": "中高",
      "timestamp": "2026/11/12 21:30",
      "tags": [
        "美國",
        "初領失業救濟金人數",
        "中性"
      ],
      "summary": "初領失業救濟金人數 將於 2026/11/12 21:30 公布，市場關注前值 195.25、預期 —。",
      "event": "美國 初領失業救濟金人數，前值 195.25、預期 —、實際 195.75。",
      "ai": "目前 AI 判斷為中性觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響就業強弱、薪資通膨與聯準會政策預期。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "http://www.dol.gov",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    }
  ]
};
