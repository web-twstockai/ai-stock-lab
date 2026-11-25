window.IntelligenceOverviewData = {
  "updatedAt": "2026/11/25 07:47",
  "status": "運作中",
  "cards": [
    {
      "label": "今日偵測情報",
      "value": 278,
      "unit": "筆",
      "icon": "file"
    },
    {
      "label": "高重要度訊號",
      "value": 68,
      "unit": "筆",
      "icon": "alert",
      "accent": "orange"
    },
    {
      "label": "追蹤標的",
      "value": 100,
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
          "100 筆"
        ],
        [
          "投信連買",
          "17 筆"
        ],
        [
          "三大法人同步買",
          "3 筆"
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
      "id": "inst-2610-20261124",
      "type": "institutional",
      "title": "2610 華航",
      "stockCode": "2610",
      "stockName": "華航",
      "sector": "航運業",
      "group": "航運業",
      "institutionType": "外資",
      "direction": "同步買超",
      "days": 10,
      "consecutiveBuyDays": 10,
      "streaks": {
        "外資": 10,
        "投信": 1,
        "自營商": 1
      },
      "latestNetBuy": 15908,
      "buyVolume": 111165,
      "buyAmount": 0,
      "syncCount": 3,
      "importance": "高",
      "timestamp": "2026/11/24 18:20",
      "tags": [
        "外資",
        "同步買超",
        "航運業",
        "三通",
        "官股企業"
      ],
      "summary": "外資同步買超，近 10 個交易日正買合計 111,165 張，估算金額約 0.00 億元。",
      "event": "外資連買 10 日，近 10 個交易日正買合計 111,165 張；最新日外資 15,908 張、投信 9,767 張、自營商 822 張。",
      "ai": "法人買盤集中在 航運業，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 128987.841,
      "yahooVerification": {
        "status": "days-different",
        "source": "https://tw.stock.yahoo.com/quote/2610.TW/institutional-trading",
        "latestNetBuy": 15908,
        "days": 19,
        "latestForeign": 15908,
        "latestTrust": 9767,
        "latestDealer": 822
      }
    },
    {
      "id": "inst-2618-20261124",
      "type": "institutional",
      "title": "2618 長榮航",
      "stockCode": "2618",
      "stockName": "長榮航",
      "sector": "航運業",
      "group": "航運業",
      "institutionType": "自營商",
      "direction": "連買",
      "days": 8,
      "consecutiveBuyDays": 8,
      "streaks": {
        "外資": 0,
        "投信": 1,
        "自營商": 8
      },
      "latestNetBuy": 84,
      "buyVolume": 6221,
      "buyAmount": 0,
      "syncCount": 2,
      "importance": "高",
      "timestamp": "2026/11/24 18:20",
      "tags": [
        "自營商",
        "連買",
        "航運業",
        "三通",
        "運輸事業"
      ],
      "summary": "自營商連買，近 10 個交易日正買合計 6,221 張，估算金額約 0.00 億元。",
      "event": "自營商連買 8 日，近 10 個交易日正買合計 6,221 張；最新日外資 -2,755 張、投信 14,712 張、自營商 84 張。",
      "ai": "法人買盤集中在 航運業，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 94054.047,
      "yahooVerification": {
        "status": "matched",
        "source": "https://tw.stock.yahoo.com/quote/2618.TW/institutional-trading",
        "latestNetBuy": 84,
        "days": 8,
        "latestForeign": -2755,
        "latestTrust": 14712,
        "latestDealer": 84
      }
    },
    {
      "id": "inst-2382-20261124",
      "type": "institutional",
      "title": "2382 廣達",
      "stockCode": "2382",
      "stockName": "廣達",
      "sector": "電腦及週邊設備",
      "group": "電腦及週邊設備",
      "institutionType": "投信",
      "direction": "連買",
      "days": 6,
      "consecutiveBuyDays": 6,
      "streaks": {
        "外資": 0,
        "投信": 6,
        "自營商": 0
      },
      "latestNetBuy": 4331,
      "buyVolume": 14667,
      "buyAmount": 37.7,
      "syncCount": 1,
      "importance": "高",
      "timestamp": "2026/11/24 18:20",
      "tags": [
        "投信",
        "連買",
        "電腦及週邊設備",
        "5G",
        "APPLE概念"
      ],
      "summary": "投信連買，近 10 個交易日正買合計 14,667 張，估算金額約 37.70 億元。",
      "event": "投信連買 6 日，近 10 個交易日正買合計 14,667 張；最新日外資 -12,734 張、投信 4,331 張、自營商 -474 張。",
      "ai": "法人買盤集中在 電腦及週邊設備，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 26711.214,
      "yahooVerification": {
        "status": "matched",
        "source": "https://tw.stock.yahoo.com/quote/2382.TW/institutional-trading",
        "latestNetBuy": 4331,
        "days": 6,
        "latestForeign": -12734,
        "latestTrust": 4331,
        "latestDealer": -474
      }
    },
    {
      "id": "inst-2027-20261124",
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
        "自營商": 0
      },
      "latestNetBuy": 4830,
      "buyVolume": 82767,
      "buyAmount": 0,
      "syncCount": 1,
      "importance": "高",
      "timestamp": "2026/11/24 18:20",
      "tags": [
        "投信",
        "連買",
        "鋼鐵工業",
        "拜登基礎建設",
        "美中貿易戰受惠"
      ],
      "summary": "投信連買，近 10 個交易日正買合計 82,767 張，估算金額約 0.00 億元。",
      "event": "投信連買 10 日，近 10 個交易日正買合計 82,767 張；最新日外資 -17,457 張、投信 4,830 張、自營商 -95 張。",
      "ai": "法人買盤集中在 鋼鐵工業，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 87169.652,
      "yahooVerification": {
        "status": "days-different",
        "source": "https://tw.stock.yahoo.com/quote/2027.TW/institutional-trading",
        "latestNetBuy": 4830,
        "days": 12,
        "latestForeign": -17457,
        "latestTrust": 4830,
        "latestDealer": -95
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
