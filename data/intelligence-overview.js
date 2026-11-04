window.IntelligenceOverviewData = {
  "updatedAt": "2026/11/04 18:30",
  "status": "運作中",
  "cards": [
    {
      "label": "今日偵測情報",
      "value": 309,
      "unit": "筆",
      "icon": "file"
    },
    {
      "label": "高重要度訊號",
      "value": 96,
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
      "value": "Services Inflation MoM (Sep. 2026)",
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
          "31 筆"
        ],
        [
          "三大法人同步買",
          "16 筆"
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
          "44 個"
        ],
        [
          "下一事件",
          "Services Inflation MoM (Sep. 2026)"
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
      "id": "inst-2317-20261104",
      "type": "institutional",
      "title": "2317 鴻海",
      "stockCode": "2317",
      "stockName": "鴻海",
      "sector": "其他電子業",
      "group": "其他電子業",
      "institutionType": "投信",
      "direction": "連買",
      "days": 7,
      "consecutiveBuyDays": 7,
      "streaks": {
        "外資": 0,
        "投信": 7,
        "自營商": 4
      },
      "latestNetBuy": 333,
      "buyVolume": 6002,
      "buyAmount": 14.74,
      "syncCount": 2,
      "importance": "高",
      "timestamp": "2026/11/04 18:20",
      "tags": [
        "投信",
        "連買",
        "其他電子業",
        "3D技術",
        "3D感測"
      ],
      "summary": "投信連買，近 10 個交易日正買合計 6,002 張，估算金額約 14.74 億元。",
      "event": "投信連買 7 日，近 10 個交易日正買合計 6,002 張；最新日外資 -16,577 張、投信 333 張、自營商 2,113 張。",
      "ai": "法人買盤集中在 其他電子業，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 95597.18,
      "yahooVerification": {
        "status": "matched",
        "source": "https://tw.stock.yahoo.com/quote/2317.TW/institutional-trading",
        "latestNetBuy": 333,
        "days": 7,
        "latestForeign": -16577,
        "latestTrust": 333,
        "latestDealer": 2113
      }
    },
    {
      "id": "inst-2886-20261104",
      "type": "institutional",
      "title": "2886 兆豐金",
      "stockCode": "2886",
      "stockName": "兆豐金",
      "sector": "金融保險",
      "group": "金融保險",
      "institutionType": "自營商",
      "direction": "連買",
      "days": 10,
      "consecutiveBuyDays": 10,
      "streaks": {
        "外資": 0,
        "投信": 2,
        "自營商": 10
      },
      "latestNetBuy": 3808,
      "buyVolume": 21901,
      "buyAmount": 0,
      "syncCount": 2,
      "importance": "高",
      "timestamp": "2026/11/04 18:20",
      "tags": [
        "自營商",
        "連買",
        "金融保險",
        "官股企業",
        "金融業"
      ],
      "summary": "自營商連買，近 10 個交易日正買合計 21,901 張，估算金額約 0.00 億元。",
      "event": "自營商連買 10 日，近 10 個交易日正買合計 21,901 張；最新日外資 -503 張、投信 7,425 張、自營商 3,808 張。",
      "ai": "法人買盤集中在 金融保險，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 70470.182,
      "yahooVerification": {
        "status": "days-different",
        "source": "https://tw.stock.yahoo.com/quote/2886.TW/institutional-trading",
        "latestNetBuy": 3808,
        "days": 32,
        "latestForeign": -503,
        "latestTrust": 7425,
        "latestDealer": 3808
      }
    },
    {
      "id": "inst-2330-20261104",
      "type": "institutional",
      "title": "2330 台積電",
      "stockCode": "2330",
      "stockName": "台積電",
      "sector": "半導體",
      "group": "半導體",
      "institutionType": "投信",
      "direction": "連買",
      "days": 10,
      "consecutiveBuyDays": 10,
      "streaks": {
        "外資": 0,
        "投信": 10,
        "自營商": 4
      },
      "latestNetBuy": 3715,
      "buyVolume": 19082,
      "buyAmount": 437.94,
      "syncCount": 2,
      "importance": "高",
      "timestamp": "2026/11/04 18:20",
      "tags": [
        "投信",
        "連買",
        "半導體",
        "3D技術",
        "3D感測"
      ],
      "summary": "投信連買，近 10 個交易日正買合計 19,082 張，估算金額約 437.94 億元。",
      "event": "投信連買 10 日，近 10 個交易日正買合計 19,082 張；最新日外資 -21,604 張、投信 3,715 張、自營商 5,967 張。",
      "ai": "法人買盤集中在 半導體，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 33880.091,
      "yahooVerification": {
        "status": "days-different",
        "source": "https://tw.stock.yahoo.com/quote/2330.TW/institutional-trading",
        "latestNetBuy": 3715,
        "days": 24,
        "latestForeign": -21604,
        "latestTrust": 3715,
        "latestDealer": 5967
      }
    },
    {
      "id": "inst-1303-20261104",
      "type": "institutional",
      "title": "1303 南亞",
      "stockCode": "1303",
      "stockName": "南亞",
      "sector": "塑膠工業",
      "group": "塑膠工業",
      "institutionType": "投信",
      "direction": "連買",
      "days": 7,
      "consecutiveBuyDays": 7,
      "streaks": {
        "外資": 0,
        "投信": 7,
        "自營商": 1
      },
      "latestNetBuy": 188,
      "buyVolume": 11667,
      "buyAmount": 31.62,
      "syncCount": 2,
      "importance": "高",
      "timestamp": "2026/11/04 18:20",
      "tags": [
        "投信",
        "連買",
        "塑膠工業",
        "APPLE概念",
        "越南設廠"
      ],
      "summary": "投信連買，近 10 個交易日正買合計 11,667 張，估算金額約 31.62 億元。",
      "event": "投信連買 7 日，近 10 個交易日正買合計 11,667 張；最新日外資 -3,888 張、投信 188 張、自營商 1,938 張。",
      "ai": "法人買盤集中在 塑膠工業，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 55905.222,
      "yahooVerification": {
        "status": "matched",
        "source": "https://tw.stock.yahoo.com/quote/1303.TW/institutional-trading",
        "latestNetBuy": 188,
        "days": 7,
        "latestForeign": -3888,
        "latestTrust": 188,
        "latestDealer": 1938
      }
    },
    {
      "id": "macro-consumer-price-index-sep-2026-20261021",
      "type": "macro",
      "title": "Consumer Price Index (Sep. 2026)",
      "eventName": "Consumer Price Index (Sep. 2026)",
      "originalEventName": "Consumer Price Index (Sep. 2026)",
      "sourcePublishTime": "2026/10/21 14:00 Asia/Taipei",
      "country": "英國",
      "publishTime": "2026/10/21 14:00",
      "previous": "143.6",
      "forecast": "—",
      "actual": "144.1",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "importance": "中高",
      "timestamp": "2026/10/21 14:00",
      "tags": [
        "英國",
        "Consumer",
        "中性"
      ],
      "summary": "Consumer Price Index (Sep. 2026) 將於 2026/10/21 14:00 公布，市場關注前值 143.6、預期 —。",
      "event": "英國 Consumer Price Index (Sep. 2026)，前值 143.6、預期 —、實際 144.1。",
      "ai": "目前 AI 判斷為中性觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "https://www.ons.gov.uk",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    },
    {
      "id": "macro-services-inflation-yoy-sep-2026-20261021",
      "type": "macro",
      "title": "Services Inflation YoY (Sep. 2026)",
      "eventName": "Services Inflation YoY (Sep. 2026)",
      "originalEventName": "Services Inflation YoY (Sep. 2026)",
      "sourcePublishTime": "2026/10/21 14:00 Asia/Taipei",
      "country": "英國",
      "publishTime": "2026/10/21 14:00",
      "previous": "3.4",
      "forecast": "3.6",
      "actual": "3.7",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏空",
      "impact": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "importance": "中高",
      "timestamp": "2026/10/21 14:00",
      "tags": [
        "英國",
        "Services",
        "偏空"
      ],
      "summary": "Services Inflation YoY (Sep. 2026) 將於 2026/10/21 14:00 公布，市場關注前值 3.4、預期 3.6。",
      "event": "英國 Services Inflation YoY (Sep. 2026)，前值 3.4、預期 3.6、實際 3.7。",
      "ai": "目前 AI 判斷為偏空觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "https://www.ons.gov.uk",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    },
    {
      "id": "macro-services-inflation-mom-sep-2026-20261021",
      "type": "macro",
      "title": "Services Inflation MoM (Sep. 2026)",
      "eventName": "Services Inflation MoM (Sep. 2026)",
      "originalEventName": "Services Inflation MoM (Sep. 2026)",
      "sourcePublishTime": "2026/10/21 14:00 Asia/Taipei",
      "country": "英國",
      "publishTime": "2026/10/21 14:00",
      "previous": "0.2",
      "forecast": "—",
      "actual": null,
      "status": "等待公布",
      "statusLevel": "upcoming",
      "direction": "中性",
      "impact": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "importance": "中高",
      "timestamp": "2026/10/21 14:00",
      "tags": [
        "英國",
        "Services",
        "中性"
      ],
      "summary": "Services Inflation MoM (Sep. 2026) 將於 2026/10/21 14:00 公布，市場關注前值 0.2、預期 —。",
      "event": "英國 Services Inflation MoM (Sep. 2026)，前值 0.2、預期 —、實際 尚未公布。",
      "ai": "目前 AI 判斷為中性觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "http://www.ons.gov.uk/",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    },
    {
      "id": "macro-core-inflation-rate-mom-sep-2026-20261021",
      "type": "macro",
      "title": "核心通膨率",
      "eventName": "核心通膨率",
      "originalEventName": "Core Inflation Rate MoM (Sep. 2026)",
      "sourcePublishTime": "2026/10/21 14:00 Asia/Taipei",
      "country": "英國",
      "publishTime": "2026/10/21 14:00",
      "previous": "0.3",
      "forecast": "0.2",
      "actual": "0.2",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "importance": "中高",
      "timestamp": "2026/10/21 14:00",
      "tags": [
        "英國",
        "核心通膨率",
        "中性"
      ],
      "summary": "核心通膨率 將於 2026/10/21 14:00 公布，市場關注前值 0.3、預期 0.2。",
      "event": "英國 核心通膨率，前值 0.3、預期 0.2、實際 0.2。",
      "ai": "目前 AI 判斷為中性觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "https://www.ons.gov.uk",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    }
  ],
  "macroEvents": [
    {
      "id": "macro-consumer-price-index-sep-2026-20261021",
      "type": "macro",
      "title": "Consumer Price Index (Sep. 2026)",
      "eventName": "Consumer Price Index (Sep. 2026)",
      "originalEventName": "Consumer Price Index (Sep. 2026)",
      "sourcePublishTime": "2026/10/21 14:00 Asia/Taipei",
      "country": "英國",
      "publishTime": "2026/10/21 14:00",
      "previous": "143.6",
      "forecast": "—",
      "actual": "144.1",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "importance": "中高",
      "timestamp": "2026/10/21 14:00",
      "tags": [
        "英國",
        "Consumer",
        "中性"
      ],
      "summary": "Consumer Price Index (Sep. 2026) 將於 2026/10/21 14:00 公布，市場關注前值 143.6、預期 —。",
      "event": "英國 Consumer Price Index (Sep. 2026)，前值 143.6、預期 —、實際 144.1。",
      "ai": "目前 AI 判斷為中性觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "https://www.ons.gov.uk",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    },
    {
      "id": "macro-services-inflation-yoy-sep-2026-20261021",
      "type": "macro",
      "title": "Services Inflation YoY (Sep. 2026)",
      "eventName": "Services Inflation YoY (Sep. 2026)",
      "originalEventName": "Services Inflation YoY (Sep. 2026)",
      "sourcePublishTime": "2026/10/21 14:00 Asia/Taipei",
      "country": "英國",
      "publishTime": "2026/10/21 14:00",
      "previous": "3.4",
      "forecast": "3.6",
      "actual": "3.7",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏空",
      "impact": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "importance": "中高",
      "timestamp": "2026/10/21 14:00",
      "tags": [
        "英國",
        "Services",
        "偏空"
      ],
      "summary": "Services Inflation YoY (Sep. 2026) 將於 2026/10/21 14:00 公布，市場關注前值 3.4、預期 3.6。",
      "event": "英國 Services Inflation YoY (Sep. 2026)，前值 3.4、預期 3.6、實際 3.7。",
      "ai": "目前 AI 判斷為偏空觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "https://www.ons.gov.uk",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    },
    {
      "id": "macro-services-inflation-mom-sep-2026-20261021",
      "type": "macro",
      "title": "Services Inflation MoM (Sep. 2026)",
      "eventName": "Services Inflation MoM (Sep. 2026)",
      "originalEventName": "Services Inflation MoM (Sep. 2026)",
      "sourcePublishTime": "2026/10/21 14:00 Asia/Taipei",
      "country": "英國",
      "publishTime": "2026/10/21 14:00",
      "previous": "0.2",
      "forecast": "—",
      "actual": null,
      "status": "等待公布",
      "statusLevel": "upcoming",
      "direction": "中性",
      "impact": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "importance": "中高",
      "timestamp": "2026/10/21 14:00",
      "tags": [
        "英國",
        "Services",
        "中性"
      ],
      "summary": "Services Inflation MoM (Sep. 2026) 將於 2026/10/21 14:00 公布，市場關注前值 0.2、預期 —。",
      "event": "英國 Services Inflation MoM (Sep. 2026)，前值 0.2、預期 —、實際 尚未公布。",
      "ai": "目前 AI 判斷為中性觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "http://www.ons.gov.uk/",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    },
    {
      "id": "macro-core-inflation-rate-mom-sep-2026-20261021",
      "type": "macro",
      "title": "核心通膨率",
      "eventName": "核心通膨率",
      "originalEventName": "Core Inflation Rate MoM (Sep. 2026)",
      "sourcePublishTime": "2026/10/21 14:00 Asia/Taipei",
      "country": "英國",
      "publishTime": "2026/10/21 14:00",
      "previous": "0.3",
      "forecast": "0.2",
      "actual": "0.2",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "importance": "中高",
      "timestamp": "2026/10/21 14:00",
      "tags": [
        "英國",
        "核心通膨率",
        "中性"
      ],
      "summary": "核心通膨率 將於 2026/10/21 14:00 公布，市場關注前值 0.3、預期 0.2。",
      "event": "英國 核心通膨率，前值 0.3、預期 0.2、實際 0.2。",
      "ai": "目前 AI 判斷為中性觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "https://www.ons.gov.uk",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    },
    {
      "id": "macro-inflation-rate-mom-sep-2026-20261021",
      "type": "macro",
      "title": "通膨率",
      "eventName": "通膨率",
      "originalEventName": "Inflation Rate MoM (Sep. 2026)",
      "sourcePublishTime": "2026/10/21 14:00 Asia/Taipei",
      "country": "英國",
      "publishTime": "2026/10/21 14:00",
      "previous": "0.5",
      "forecast": "0.3",
      "actual": "0.4",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏空",
      "impact": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "importance": "中高",
      "timestamp": "2026/10/21 14:00",
      "tags": [
        "英國",
        "通膨率",
        "偏空"
      ],
      "summary": "通膨率 將於 2026/10/21 14:00 公布，市場關注前值 0.5、預期 0.3。",
      "event": "英國 通膨率，前值 0.5、預期 0.3、實際 0.4。",
      "ai": "目前 AI 判斷為偏空觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "http://www.ons.gov.uk/",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    },
    {
      "id": "macro-ppi-core-output-mom-sep-2026-20261021",
      "type": "macro",
      "title": "生產者物價指數 PPI",
      "eventName": "生產者物價指數 PPI",
      "originalEventName": "PPI Core Output MoM (Sep. 2026)",
      "sourcePublishTime": "2026/10/21 14:00 Asia/Taipei",
      "country": "英國",
      "publishTime": "2026/10/21 14:00",
      "previous": "0.2",
      "forecast": "7.2",
      "actual": "0.2",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/10/21 14:00",
      "tags": [
        "英國",
        "生產者物價指數",
        "中性"
      ],
      "summary": "生產者物價指數 PPI 將於 2026/10/21 14:00 公布，市場關注前值 0.2、預期 —。",
      "event": "英國 生產者物價指數 PPI，前值 0.2、預期 —、實際 0.2。",
      "ai": "目前 AI 判斷為中性觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響市場風險偏好與資金輪動。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar / 鉅亨網全球經濟指標",
      "sourceUrl": "https://www.ons.gov.uk/",
      "sourceList": [
        "TradingView Economic Calendar",
        "鉅亨網全球經濟指標"
      ]
    },
    {
      "id": "macro-cpi-9-20261021",
      "type": "macro",
      "title": "消費者物價指數 CPI",
      "eventName": "消費者物價指數 CPI",
      "originalEventName": "居民消費價格指數(CPI) (同比) (9月)",
      "sourcePublishTime": "2026/10/21 14:00 Asia/Taipei",
      "country": "英國",
      "publishTime": "2026/10/21 14:00",
      "previous": "3.1%",
      "forecast": "3.4%",
      "actual": "3.5%",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏空",
      "impact": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "importance": "高",
      "timestamp": "2026/10/21 14:00",
      "tags": [
        "英國",
        "消費者物價指數",
        "偏空"
      ],
      "summary": "消費者物價指數 CPI 將於 2026/10/21 14:00 公布，市場關注前值 3.1%、預期 3.4%。",
      "event": "英國 消費者物價指數 CPI，前值 3.1%、預期 3.4%、實際 3.5%。",
      "ai": "目前 AI 判斷為偏空觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "Investing.com Economic Calendar",
      "sourceUrl": "https://hk.investing.com/economic-calendar/558402",
      "sourceList": [
        "Investing.com Economic Calendar"
      ]
    },
    {
      "id": "macro-jobless-claims-4-week-average-w-o-oct-12-2026-20261022",
      "type": "macro",
      "title": "初領失業救濟金人數",
      "eventName": "初領失業救濟金人數",
      "originalEventName": "Jobless Claims 4-week Average (w/o Oct. 12, 2026)",
      "sourcePublishTime": "2026/10/22 20:30 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/10/22 20:30",
      "previous": "198.75",
      "forecast": "200",
      "actual": "198",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響就業強弱、薪資通膨與聯準會政策預期。",
      "importance": "中高",
      "timestamp": "2026/10/22 20:30",
      "tags": [
        "美國",
        "初領失業救濟金人數",
        "中性"
      ],
      "summary": "初領失業救濟金人數 將於 2026/10/22 20:30 公布，市場關注前值 198.75、預期 —。",
      "event": "美國 初領失業救濟金人數，前值 198.75、預期 —、實際 198。",
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
