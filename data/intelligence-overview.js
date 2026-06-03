window.IntelligenceOverviewData = {
  "updatedAt": "2026/06/03 14:25",
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
      "value": 73,
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
      "value": "ECB Non-Monetary Policy Meeting",
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
          "33 筆"
        ],
        [
          "三大法人同步買",
          "14 筆"
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
          "30 個"
        ],
        [
          "下一事件",
          "ECB Non-Monetary Policy Meeting"
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
      "id": "inst-2887-20260602",
      "type": "institutional",
      "title": "2887 台新新光金",
      "stockCode": "2887",
      "stockName": "台新新光金",
      "sector": "金融保險",
      "group": "金融保險",
      "institutionType": "投信",
      "direction": "連買",
      "days": 9,
      "consecutiveBuyDays": 9,
      "streaks": {
        "外資": 0,
        "投信": 9,
        "自營商": 0
      },
      "latestNetBuy": 134577,
      "buyVolume": 443917,
      "buyAmount": 0,
      "syncCount": 1,
      "importance": "高",
      "timestamp": "2026/06/02 18:20",
      "tags": [
        "投信",
        "連買",
        "金融保險",
        "金融業",
        "銀行"
      ],
      "summary": "投信連買，近 10 個交易日正買合計 443,917 張，估算金額約 0.00 億元。",
      "event": "投信連買 9 日，近 10 個交易日正買合計 443,917 張；最新日外資 -51,522 張、投信 134,577 張、自營商 -8,511 張。",
      "ai": "法人買盤集中在 金融保險，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 525702.17,
      "yahooVerification": {
        "status": "matched",
        "source": "https://tw.stock.yahoo.com/quote/2887.TW/institutional-trading",
        "latestNetBuy": 134577,
        "days": 9,
        "latestForeign": -51522,
        "latestTrust": 134577,
        "latestDealer": -8511
      }
    },
    {
      "id": "inst-1303-20260602",
      "type": "institutional",
      "title": "1303 南亞",
      "stockCode": "1303",
      "stockName": "南亞",
      "sector": "塑膠工業",
      "group": "塑膠工業",
      "institutionType": "投信",
      "direction": "連買",
      "days": 5,
      "consecutiveBuyDays": 5,
      "streaks": {
        "外資": 3,
        "投信": 5,
        "自營商": 0
      },
      "latestNetBuy": 2133,
      "buyVolume": 7279,
      "buyAmount": 8.19,
      "syncCount": 2,
      "importance": "高",
      "timestamp": "2026/06/02 18:20",
      "tags": [
        "投信",
        "連買",
        "塑膠工業",
        "APPLE概念",
        "越南設廠"
      ],
      "summary": "投信連買，近 10 個交易日正買合計 7,279 張，估算金額約 8.19 億元。",
      "event": "投信連買 5 日，近 10 個交易日正買合計 7,279 張；最新日外資 16,576 張、投信 2,133 張、自營商 -1,292 張。",
      "ai": "法人買盤集中在 塑膠工業，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 216781.761,
      "yahooVerification": {
        "status": "matched",
        "source": "https://tw.stock.yahoo.com/quote/1303.TW/institutional-trading",
        "latestNetBuy": 2133,
        "days": 5,
        "latestForeign": 16576,
        "latestTrust": 2133,
        "latestDealer": -1292
      }
    },
    {
      "id": "inst-3231-20260602",
      "type": "institutional",
      "title": "3231 緯創",
      "stockCode": "3231",
      "stockName": "緯創",
      "sector": "電腦及週邊設備",
      "group": "電腦及週邊設備",
      "institutionType": "外資",
      "direction": "同步買超",
      "days": 5,
      "consecutiveBuyDays": 5,
      "streaks": {
        "外資": 5,
        "投信": 5,
        "自營商": 1
      },
      "latestNetBuy": 91903,
      "buyVolume": 210604,
      "buyAmount": 0,
      "syncCount": 3,
      "importance": "高",
      "timestamp": "2026/06/02 18:20",
      "tags": [
        "外資",
        "同步買超",
        "電腦及週邊設備",
        "3D技術",
        "3D感測"
      ],
      "summary": "外資同步買超，近 10 個交易日正買合計 210,604 張，估算金額約 0.00 億元。",
      "event": "外資連買 5 日，近 10 個交易日正買合計 210,604 張；最新日外資 91,903 張、投信 17,001 張、自營商 1,263 張。",
      "ai": "法人買盤集中在 電腦及週邊設備，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 240400.819,
      "yahooVerification": {
        "status": "matched",
        "source": "https://tw.stock.yahoo.com/quote/3231.TW/institutional-trading",
        "latestNetBuy": 91903,
        "days": 5,
        "latestForeign": 91903,
        "latestTrust": 17001,
        "latestDealer": 1263
      }
    },
    {
      "id": "inst-2382-20260602",
      "type": "institutional",
      "title": "2382 廣達",
      "stockCode": "2382",
      "stockName": "廣達",
      "sector": "電腦及週邊設備",
      "group": "電腦及週邊設備",
      "institutionType": "投信",
      "direction": "連買",
      "days": 9,
      "consecutiveBuyDays": 9,
      "streaks": {
        "外資": 0,
        "投信": 9,
        "自營商": 0
      },
      "latestNetBuy": 37188,
      "buyVolume": 129716,
      "buyAmount": 519.51,
      "syncCount": 1,
      "importance": "高",
      "timestamp": "2026/06/02 18:20",
      "tags": [
        "投信",
        "連買",
        "電腦及週邊設備",
        "5G",
        "APPLE概念"
      ],
      "summary": "投信連買，近 10 個交易日正買合計 129,716 張，估算金額約 519.51 億元。",
      "event": "投信連買 9 日，近 10 個交易日正買合計 129,716 張；最新日外資 -14,582 張、投信 37,188 張、自營商 -712 張。",
      "ai": "法人買盤集中在 電腦及週邊設備，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 135598.097,
      "yahooVerification": {
        "status": "matched",
        "source": "https://tw.stock.yahoo.com/quote/2382.TW/institutional-trading",
        "latestNetBuy": 37188,
        "days": 9,
        "latestForeign": -14582,
        "latestTrust": 37188,
        "latestDealer": -712
      }
    },
    {
      "id": "macro-ppi-core-output-mom-apr-20260520",
      "type": "macro",
      "title": "生產者物價指數 PPI",
      "eventName": "生產者物價指數 PPI",
      "originalEventName": "PPI Core Output MoM (Apr)",
      "sourcePublishTime": "2026/05/20 14:00 Asia/Taipei",
      "country": "英國",
      "publishTime": "2026/05/20 14:00",
      "previous": "0.2",
      "forecast": "1",
      "actual": "0.7",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/05/20 14:00",
      "tags": [
        "英國",
        "生產者物價指數",
        "中性"
      ],
      "summary": "生產者物價指數 PPI 將於 2026/05/20 14:00 公布，市場關注前值 0.2、預期 —。",
      "event": "英國 生產者物價指數 PPI，前值 0.2、預期 —、實際 0.7。",
      "ai": "目前 AI 判斷為中性觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響市場風險偏好與資金輪動。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar / 鉅亨網全球經濟指標",
      "sourceUrl": "http://www.ons.gov.uk/",
      "sourceList": [
        "TradingView Economic Calendar",
        "鉅亨網全球經濟指標"
      ]
    },
    {
      "id": "macro-inflation-rate-yoy-apr-20260520",
      "type": "macro",
      "title": "通膨率",
      "eventName": "通膨率",
      "originalEventName": "Inflation Rate YoY (Apr)",
      "sourcePublishTime": "2026/05/20 14:00 Asia/Taipei",
      "country": "英國",
      "publishTime": "2026/05/20 14:00",
      "previous": "3.3",
      "forecast": "3",
      "actual": "2.8",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "importance": "中高",
      "timestamp": "2026/05/20 14:00",
      "tags": [
        "英國",
        "通膨率",
        "偏多"
      ],
      "summary": "通膨率 將於 2026/05/20 14:00 公布，市場關注前值 3.3、預期 3。",
      "event": "英國 通膨率，前值 3.3、預期 3、實際 2.8。",
      "ai": "目前 AI 判斷為偏多觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "http://www.ons.gov.uk/",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    },
    {
      "id": "macro-core-inflation-rate-yoy-apr-20260520",
      "type": "macro",
      "title": "核心通膨率",
      "eventName": "核心通膨率",
      "originalEventName": "Core Inflation Rate YoY (Apr)",
      "sourcePublishTime": "2026/05/20 14:00 Asia/Taipei",
      "country": "英國",
      "publishTime": "2026/05/20 14:00",
      "previous": "3.1",
      "forecast": "2.6",
      "actual": "2.5",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "importance": "中高",
      "timestamp": "2026/05/20 14:00",
      "tags": [
        "英國",
        "核心通膨率",
        "偏多"
      ],
      "summary": "核心通膨率 將於 2026/05/20 14:00 公布，市場關注前值 3.1、預期 2.6。",
      "event": "英國 核心通膨率，前值 3.1、預期 2.6、實際 2.5。",
      "ai": "目前 AI 判斷為偏多觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "http://www.ons.gov.uk/",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    },
    {
      "id": "macro-ppi-mom-apr-20260520",
      "type": "macro",
      "title": "生產者物價指數 PPI",
      "eventName": "生產者物價指數 PPI",
      "originalEventName": "PPI MoM (Apr)",
      "sourcePublishTime": "2026/05/20 14:00 Asia/Taipei",
      "country": "德國",
      "publishTime": "2026/05/20 14:00",
      "previous": "2.5",
      "forecast": "1",
      "actual": "1.2",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/05/20 14:00",
      "tags": [
        "德國",
        "生產者物價指數",
        "偏多"
      ],
      "summary": "生產者物價指數 PPI 將於 2026/05/20 14:00 公布，市場關注前值 2.5、預期 1。",
      "event": "德國 生產者物價指數 PPI，前值 2.5、預期 1、實際 1.2。",
      "ai": "目前 AI 判斷為偏多觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響市場風險偏好與資金輪動。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar / 鉅亨網全球經濟指標",
      "sourceUrl": "https://www.destatis.de",
      "sourceList": [
        "TradingView Economic Calendar",
        "鉅亨網全球經濟指標"
      ]
    }
  ],
  "macroEvents": [
    {
      "id": "macro-ppi-core-output-mom-apr-20260520",
      "type": "macro",
      "title": "生產者物價指數 PPI",
      "eventName": "生產者物價指數 PPI",
      "originalEventName": "PPI Core Output MoM (Apr)",
      "sourcePublishTime": "2026/05/20 14:00 Asia/Taipei",
      "country": "英國",
      "publishTime": "2026/05/20 14:00",
      "previous": "0.2",
      "forecast": "1",
      "actual": "0.7",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/05/20 14:00",
      "tags": [
        "英國",
        "生產者物價指數",
        "中性"
      ],
      "summary": "生產者物價指數 PPI 將於 2026/05/20 14:00 公布，市場關注前值 0.2、預期 —。",
      "event": "英國 生產者物價指數 PPI，前值 0.2、預期 —、實際 0.7。",
      "ai": "目前 AI 判斷為中性觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響市場風險偏好與資金輪動。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar / 鉅亨網全球經濟指標",
      "sourceUrl": "http://www.ons.gov.uk/",
      "sourceList": [
        "TradingView Economic Calendar",
        "鉅亨網全球經濟指標"
      ]
    },
    {
      "id": "macro-inflation-rate-yoy-apr-20260520",
      "type": "macro",
      "title": "通膨率",
      "eventName": "通膨率",
      "originalEventName": "Inflation Rate YoY (Apr)",
      "sourcePublishTime": "2026/05/20 14:00 Asia/Taipei",
      "country": "英國",
      "publishTime": "2026/05/20 14:00",
      "previous": "3.3",
      "forecast": "3",
      "actual": "2.8",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "importance": "中高",
      "timestamp": "2026/05/20 14:00",
      "tags": [
        "英國",
        "通膨率",
        "偏多"
      ],
      "summary": "通膨率 將於 2026/05/20 14:00 公布，市場關注前值 3.3、預期 3。",
      "event": "英國 通膨率，前值 3.3、預期 3、實際 2.8。",
      "ai": "目前 AI 判斷為偏多觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "http://www.ons.gov.uk/",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    },
    {
      "id": "macro-core-inflation-rate-yoy-apr-20260520",
      "type": "macro",
      "title": "核心通膨率",
      "eventName": "核心通膨率",
      "originalEventName": "Core Inflation Rate YoY (Apr)",
      "sourcePublishTime": "2026/05/20 14:00 Asia/Taipei",
      "country": "英國",
      "publishTime": "2026/05/20 14:00",
      "previous": "3.1",
      "forecast": "2.6",
      "actual": "2.5",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "importance": "中高",
      "timestamp": "2026/05/20 14:00",
      "tags": [
        "英國",
        "核心通膨率",
        "偏多"
      ],
      "summary": "核心通膨率 將於 2026/05/20 14:00 公布，市場關注前值 3.1、預期 2.6。",
      "event": "英國 核心通膨率，前值 3.1、預期 2.6、實際 2.5。",
      "ai": "目前 AI 判斷為偏多觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "http://www.ons.gov.uk/",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    },
    {
      "id": "macro-ppi-mom-apr-20260520",
      "type": "macro",
      "title": "生產者物價指數 PPI",
      "eventName": "生產者物價指數 PPI",
      "originalEventName": "PPI MoM (Apr)",
      "sourcePublishTime": "2026/05/20 14:00 Asia/Taipei",
      "country": "德國",
      "publishTime": "2026/05/20 14:00",
      "previous": "2.5",
      "forecast": "1",
      "actual": "1.2",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/05/20 14:00",
      "tags": [
        "德國",
        "生產者物價指數",
        "偏多"
      ],
      "summary": "生產者物價指數 PPI 將於 2026/05/20 14:00 公布，市場關注前值 2.5、預期 1。",
      "event": "德國 生產者物價指數 PPI，前值 2.5、預期 1、實際 1.2。",
      "ai": "目前 AI 判斷為偏多觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響市場風險偏好與資金輪動。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar / 鉅亨網全球經濟指標",
      "sourceUrl": "https://www.destatis.de",
      "sourceList": [
        "TradingView Economic Calendar",
        "鉅亨網全球經濟指標"
      ]
    },
    {
      "id": "macro-ecb-non-monetary-policy-meeting-20260520",
      "type": "macro",
      "title": "ECB Non-Monetary Policy Meeting",
      "eventName": "ECB Non-Monetary Policy Meeting",
      "originalEventName": "ECB Non-Monetary Policy Meeting",
      "sourcePublishTime": "2026/05/20 15:00 Asia/Taipei",
      "country": "歐元區",
      "publishTime": "2026/05/20 15:00",
      "previous": "—",
      "forecast": "—",
      "actual": null,
      "status": "等待公布",
      "statusLevel": "upcoming",
      "direction": "中性",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/05/20 15:00",
      "tags": [
        "歐元區",
        "ECB",
        "中性"
      ],
      "summary": "ECB Non-Monetary Policy Meeting 將於 2026/05/20 15:00 公布，市場關注前值 —、預期 —。",
      "event": "歐元區 ECB Non-Monetary Policy Meeting，前值 —、預期 —、實際 尚未公布。",
      "ai": "目前 AI 判斷為中性觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響市場風險偏好與資金輪動。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "https://www.ecb.europa.eu",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    },
    {
      "id": "macro-core-inflation-rate-yoy-final-apr-20260520",
      "type": "macro",
      "title": "核心通膨率",
      "eventName": "核心通膨率",
      "originalEventName": "Core Inflation Rate YoY Final (Apr)",
      "sourcePublishTime": "2026/05/20 17:00 Asia/Taipei",
      "country": "歐元區",
      "publishTime": "2026/05/20 17:00",
      "previous": "2.3",
      "forecast": "2.2",
      "actual": "2.2",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "importance": "中高",
      "timestamp": "2026/05/20 17:00",
      "tags": [
        "歐元區",
        "核心通膨率",
        "中性"
      ],
      "summary": "核心通膨率 將於 2026/05/20 17:00 公布，市場關注前值 2.3、預期 2.2。",
      "event": "歐元區 核心通膨率，前值 2.3、預期 2.2、實際 2.2。",
      "ai": "目前 AI 判斷為中性觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "https://ec.europa.eu/eurostat/",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    },
    {
      "id": "macro-cpi-final-apr-20260520",
      "type": "macro",
      "title": "消費者物價指數 CPI",
      "eventName": "消費者物價指數 CPI",
      "originalEventName": "CPI Final (Apr)",
      "sourcePublishTime": "2026/05/20 17:00 Asia/Taipei",
      "country": "歐元區",
      "publishTime": "2026/05/20 17:00",
      "previous": "101.99",
      "forecast": "103.05",
      "actual": "103.04",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "importance": "高",
      "timestamp": "2026/05/20 17:00",
      "tags": [
        "歐元區",
        "消費者物價指數",
        "偏多"
      ],
      "summary": "消費者物價指數 CPI 將於 2026/05/20 17:00 公布，市場關注前值 101.99、預期 103.05。",
      "event": "歐元區 消費者物價指數 CPI，前值 101.99、預期 103.05、實際 103.04。",
      "ai": "目前 AI 判斷為偏多觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "https://ec.europa.eu/eurostat/",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    },
    {
      "id": "macro-inflation-rate-mom-final-apr-20260520",
      "type": "macro",
      "title": "通膨率",
      "eventName": "通膨率",
      "originalEventName": "Inflation Rate MoM Final (Apr)",
      "sourcePublishTime": "2026/05/20 17:00 Asia/Taipei",
      "country": "歐元區",
      "publishTime": "2026/05/20 17:00",
      "previous": "1.3",
      "forecast": "1",
      "actual": "1",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "importance": "中高",
      "timestamp": "2026/05/20 17:00",
      "tags": [
        "歐元區",
        "通膨率",
        "中性"
      ],
      "summary": "通膨率 將於 2026/05/20 17:00 公布，市場關注前值 1.3、預期 1。",
      "event": "歐元區 通膨率，前值 1.3、預期 1、實際 1。",
      "ai": "目前 AI 判斷為中性觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "https://ec.europa.eu/eurostat/",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    }
  ]
};
