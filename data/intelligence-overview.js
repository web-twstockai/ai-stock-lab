window.IntelligenceOverviewData = {
  "updatedAt": "2026/07/26 07:47",
  "status": "運作中",
  "cards": [
    {
      "label": "今日偵測情報",
      "value": 244,
      "unit": "筆",
      "icon": "file"
    },
    {
      "label": "高重要度訊號",
      "value": 77,
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
      "value": "ECB Bank Lending Survey",
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
          "34 筆"
        ],
        [
          "三大法人同步買",
          "20 筆"
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
          "27 個"
        ],
        [
          "下一事件",
          "ECB Bank Lending Survey"
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
      "id": "inst-3231-20260724",
      "type": "institutional",
      "title": "3231 緯創",
      "stockCode": "3231",
      "stockName": "緯創",
      "sector": "電腦及週邊設備",
      "group": "電腦及週邊設備",
      "institutionType": "自營商",
      "direction": "同步買超",
      "days": 6,
      "consecutiveBuyDays": 6,
      "streaks": {
        "外資": 5,
        "投信": 2,
        "自營商": 6
      },
      "latestNetBuy": 1175,
      "buyVolume": 9395,
      "buyAmount": 0,
      "syncCount": 3,
      "importance": "高",
      "timestamp": "2026/07/24 18:20",
      "tags": [
        "自營商",
        "同步買超",
        "電腦及週邊設備",
        "3D技術",
        "3D感測"
      ],
      "summary": "自營商同步買超，近 10 個交易日正買合計 9,395 張，估算金額約 0.00 億元。",
      "event": "自營商連買 6 日，近 10 個交易日正買合計 9,395 張；最新日外資 32,435 張、投信 10,843 張、自營商 1,175 張。",
      "ai": "法人買盤集中在 電腦及週邊設備，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 192203.664,
      "yahooVerification": {
        "status": "matched",
        "source": "https://tw.stock.yahoo.com/quote/3231.TW/institutional-trading",
        "latestNetBuy": 1175,
        "days": 6,
        "latestForeign": 32435,
        "latestTrust": 10843,
        "latestDealer": 1175
      }
    },
    {
      "id": "inst-2330-20260724",
      "type": "institutional",
      "title": "2330 台積電",
      "stockCode": "2330",
      "stockName": "台積電",
      "sector": "半導體",
      "group": "半導體",
      "institutionType": "自營商",
      "direction": "連買",
      "days": 2,
      "consecutiveBuyDays": 2,
      "streaks": {
        "外資": 0,
        "投信": 1,
        "自營商": 2
      },
      "latestNetBuy": 305,
      "buyVolume": 12653,
      "buyAmount": 297.33,
      "syncCount": 2,
      "importance": "高",
      "timestamp": "2026/07/24 18:20",
      "tags": [
        "自營商",
        "連買",
        "半導體",
        "3D技術",
        "3D感測"
      ],
      "summary": "自營商連買，近 10 個交易日正買合計 12,653 張，估算金額約 297.33 億元。",
      "event": "自營商連買 2 日，近 10 個交易日正買合計 12,653 張；最新日外資 -9,637 張、投信 550 張、自營商 305 張。",
      "ai": "法人買盤集中在 半導體，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 26150.581,
      "yahooVerification": {
        "status": "matched",
        "source": "https://tw.stock.yahoo.com/quote/2330.TW/institutional-trading",
        "latestNetBuy": 305,
        "days": 2,
        "latestForeign": -9637,
        "latestTrust": 550,
        "latestDealer": 305
      }
    },
    {
      "id": "inst-2317-20260724",
      "type": "institutional",
      "title": "2317 鴻海",
      "stockCode": "2317",
      "stockName": "鴻海",
      "sector": "其他電子業",
      "group": "其他電子業",
      "institutionType": "投信",
      "direction": "連買",
      "days": 5,
      "consecutiveBuyDays": 5,
      "streaks": {
        "外資": 0,
        "投信": 5,
        "自營商": 0
      },
      "latestNetBuy": 76,
      "buyVolume": 5164,
      "buyAmount": 13.04,
      "syncCount": 1,
      "importance": "高",
      "timestamp": "2026/07/24 18:20",
      "tags": [
        "投信",
        "連買",
        "其他電子業",
        "3D技術",
        "3D感測"
      ],
      "summary": "投信連買，近 10 個交易日正買合計 5,164 張，估算金額約 13.04 億元。",
      "event": "投信連買 5 日，近 10 個交易日正買合計 5,164 張；最新日外資 -5,515 張、投信 76 張、自營商 -534 張。",
      "ai": "法人買盤集中在 其他電子業，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 94564.393,
      "yahooVerification": {
        "status": "matched",
        "source": "https://tw.stock.yahoo.com/quote/2317.TW/institutional-trading",
        "latestNetBuy": 76,
        "days": 5,
        "latestForeign": -5515,
        "latestTrust": 76,
        "latestDealer": -534
      }
    },
    {
      "id": "inst-2002-20260724",
      "type": "institutional",
      "title": "2002 中鋼",
      "stockCode": "2002",
      "stockName": "中鋼",
      "sector": "鋼鐵工業",
      "group": "鋼鐵工業",
      "institutionType": "外資",
      "direction": "連買",
      "days": 9,
      "consecutiveBuyDays": 9,
      "streaks": {
        "外資": 9,
        "投信": 0,
        "自營商": 5
      },
      "latestNetBuy": 30431,
      "buyVolume": 170573,
      "buyAmount": 0,
      "syncCount": 2,
      "importance": "高",
      "timestamp": "2026/07/24 18:20",
      "tags": [
        "外資",
        "連買",
        "鋼鐵工業",
        "印度設廠",
        "官股企業"
      ],
      "summary": "外資連買，近 10 個交易日正買合計 170,573 張，估算金額約 0.00 億元。",
      "event": "外資連買 9 日，近 10 個交易日正買合計 170,573 張；最新日外資 30,431 張、投信 0 張、自營商 322 張。",
      "ai": "法人買盤集中在 鋼鐵工業，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 177196.829,
      "yahooVerification": {
        "status": "matched",
        "source": "https://tw.stock.yahoo.com/quote/2002.TW/institutional-trading",
        "latestNetBuy": 30431,
        "days": 9,
        "latestForeign": 30431,
        "latestTrust": 0,
        "latestDealer": 322
      }
    },
    {
      "id": "macro-cpi-jun-20260714",
      "type": "macro",
      "title": "消費者物價指數 CPI",
      "eventName": "消費者物價指數 CPI",
      "originalEventName": "CPI (Jun)",
      "sourcePublishTime": "2026/07/14 20:30 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/07/14 20:30",
      "previous": "335.12",
      "forecast": "334.7",
      "actual": "333.95",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "importance": "高",
      "timestamp": "2026/07/14 20:30",
      "tags": [
        "美國",
        "消費者物價指數",
        "偏多"
      ],
      "summary": "消費者物價指數 CPI 將於 2026/07/14 20:30 公布，市場關注前值 335.12、預期 334.7。",
      "event": "美國 消費者物價指數 CPI，前值 335.12、預期 334.7、實際 333.95。",
      "ai": "目前 AI 判斷為偏多觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "http://www.bls.gov",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    },
    {
      "id": "macro-core-inflation-rate-yoy-jun-20260714",
      "type": "macro",
      "title": "核心通膨率",
      "eventName": "核心通膨率",
      "originalEventName": "Core Inflation Rate YoY (Jun)",
      "sourcePublishTime": "2026/07/14 20:30 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/07/14 20:30",
      "previous": "2.9",
      "forecast": "2.8",
      "actual": "2.6",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "importance": "中高",
      "timestamp": "2026/07/14 20:30",
      "tags": [
        "美國",
        "核心通膨率",
        "偏多"
      ],
      "summary": "核心通膨率 將於 2026/07/14 20:30 公布，市場關注前值 2.9、預期 2.8。",
      "event": "美國 核心通膨率，前值 2.9、預期 2.8、實際 2.6。",
      "ai": "目前 AI 判斷為偏多觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "https://www.bls.gov",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    },
    {
      "id": "macro-inflation-rate-yoy-jun-20260714",
      "type": "macro",
      "title": "通膨率",
      "eventName": "通膨率",
      "originalEventName": "Inflation Rate YoY (Jun)",
      "sourcePublishTime": "2026/07/14 20:30 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/07/14 20:30",
      "previous": "4.2",
      "forecast": "3.8",
      "actual": "3.5",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "importance": "中高",
      "timestamp": "2026/07/14 20:30",
      "tags": [
        "美國",
        "通膨率",
        "偏多"
      ],
      "summary": "通膨率 將於 2026/07/14 20:30 公布，市場關注前值 4.2、預期 3.8。",
      "event": "美國 通膨率，前值 4.2、預期 3.8、實際 3.5。",
      "ai": "目前 AI 判斷為偏多觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "http://www.bls.gov/",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    },
    {
      "id": "macro-adp-employment-change-weekly-20260714",
      "type": "macro",
      "title": "ADP 就業人數",
      "eventName": "ADP 就業人數",
      "originalEventName": "ADP Employment Change Weekly",
      "sourcePublishTime": "2026/07/14 20:15 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/07/14 20:15",
      "previous": "21",
      "forecast": "—",
      "actual": "19.75",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/07/14 20:15",
      "tags": [
        "美國",
        "ADP",
        "中性"
      ],
      "summary": "ADP 就業人數 將於 2026/07/14 20:15 公布，市場關注前值 21、預期 —。",
      "event": "美國 ADP 就業人數，前值 21、預期 —、實際 19.75。",
      "ai": "目前 AI 判斷為中性觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響市場風險偏好與資金輪動。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar / 鉅亨網全球經濟指標",
      "sourceUrl": "https://adpemploymentreport.com/",
      "sourceList": [
        "TradingView Economic Calendar",
        "鉅亨網全球經濟指標"
      ]
    }
  ],
  "macroEvents": [
    {
      "id": "macro-adp-employment-change-weekly-20260714",
      "type": "macro",
      "title": "ADP 就業人數",
      "eventName": "ADP 就業人數",
      "originalEventName": "ADP Employment Change Weekly",
      "sourcePublishTime": "2026/07/14 20:15 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/07/14 20:15",
      "previous": "21",
      "forecast": "—",
      "actual": "19.75",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/07/14 20:15",
      "tags": [
        "美國",
        "ADP",
        "中性"
      ],
      "summary": "ADP 就業人數 將於 2026/07/14 20:15 公布，市場關注前值 21、預期 —。",
      "event": "美國 ADP 就業人數，前值 21、預期 —、實際 19.75。",
      "ai": "目前 AI 判斷為中性觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響市場風險偏好與資金輪動。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar / 鉅亨網全球經濟指標",
      "sourceUrl": "https://adpemploymentreport.com/",
      "sourceList": [
        "TradingView Economic Calendar",
        "鉅亨網全球經濟指標"
      ]
    },
    {
      "id": "macro-core-inflation-rate-yoy-jun-20260714",
      "type": "macro",
      "title": "核心通膨率",
      "eventName": "核心通膨率",
      "originalEventName": "Core Inflation Rate YoY (Jun)",
      "sourcePublishTime": "2026/07/14 20:30 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/07/14 20:30",
      "previous": "2.9",
      "forecast": "2.8",
      "actual": "2.6",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "importance": "中高",
      "timestamp": "2026/07/14 20:30",
      "tags": [
        "美國",
        "核心通膨率",
        "偏多"
      ],
      "summary": "核心通膨率 將於 2026/07/14 20:30 公布，市場關注前值 2.9、預期 2.8。",
      "event": "美國 核心通膨率，前值 2.9、預期 2.8、實際 2.6。",
      "ai": "目前 AI 判斷為偏多觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "https://www.bls.gov",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    },
    {
      "id": "macro-cpi-jun-20260714",
      "type": "macro",
      "title": "消費者物價指數 CPI",
      "eventName": "消費者物價指數 CPI",
      "originalEventName": "CPI (Jun)",
      "sourcePublishTime": "2026/07/14 20:30 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/07/14 20:30",
      "previous": "335.12",
      "forecast": "334.7",
      "actual": "333.95",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "importance": "高",
      "timestamp": "2026/07/14 20:30",
      "tags": [
        "美國",
        "消費者物價指數",
        "偏多"
      ],
      "summary": "消費者物價指數 CPI 將於 2026/07/14 20:30 公布，市場關注前值 335.12、預期 334.7。",
      "event": "美國 消費者物價指數 CPI，前值 335.12、預期 334.7、實際 333.95。",
      "ai": "目前 AI 判斷為偏多觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "http://www.bls.gov",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    },
    {
      "id": "macro-inflation-rate-yoy-jun-20260714",
      "type": "macro",
      "title": "通膨率",
      "eventName": "通膨率",
      "originalEventName": "Inflation Rate YoY (Jun)",
      "sourcePublishTime": "2026/07/14 20:30 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/07/14 20:30",
      "previous": "4.2",
      "forecast": "3.8",
      "actual": "3.5",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "importance": "中高",
      "timestamp": "2026/07/14 20:30",
      "tags": [
        "美國",
        "通膨率",
        "偏多"
      ],
      "summary": "通膨率 將於 2026/07/14 20:30 公布，市場關注前值 4.2、預期 3.8。",
      "event": "美國 通膨率，前值 4.2、預期 3.8、實際 3.5。",
      "ai": "目前 AI 判斷為偏多觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "http://www.bls.gov/",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    },
    {
      "id": "macro-ppi-mom-jun-20260715",
      "type": "macro",
      "title": "生產者物價指數 PPI",
      "eventName": "生產者物價指數 PPI",
      "originalEventName": "PPI MoM (Jun)",
      "sourcePublishTime": "2026/07/15 20:30 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/07/15 20:30",
      "previous": "0.6",
      "forecast": "6.2",
      "actual": "-0.3",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/07/15 20:30",
      "tags": [
        "美國",
        "生產者物價指數",
        "中性"
      ],
      "summary": "生產者物價指數 PPI 將於 2026/07/15 20:30 公布，市場關注前值 0.6、預期 —。",
      "event": "美國 生產者物價指數 PPI，前值 0.6、預期 —、實際 -0.3。",
      "ai": "目前 AI 判斷為中性觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響市場風險偏好與資金輪動。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar / 鉅亨網全球經濟指標",
      "sourceUrl": "https://www.bls.gov",
      "sourceList": [
        "TradingView Economic Calendar",
        "鉅亨網全球經濟指標"
      ]
    },
    {
      "id": "macro-gdp-yoy-may-20260716",
      "type": "macro",
      "title": "GDP 經濟成長率",
      "eventName": "GDP 經濟成長率",
      "originalEventName": "GDP YoY (May)",
      "sourcePublishTime": "2026/07/16 14:00 Asia/Taipei",
      "country": "英國",
      "publishTime": "2026/07/16 14:00",
      "previous": "1.1",
      "forecast": "1.4",
      "actual": "1.3",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏空",
      "impact": "影響景氣循環、原物料、工業與科技需求預期。",
      "importance": "高",
      "timestamp": "2026/07/16 14:00",
      "tags": [
        "英國",
        "GDP",
        "偏空"
      ],
      "summary": "GDP 經濟成長率 將於 2026/07/16 14:00 公布，市場關注前值 1.1、預期 1.4。",
      "event": "英國 GDP 經濟成長率，前值 1.1、預期 1.4、實際 1.3。",
      "ai": "目前 AI 判斷為偏空觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響景氣循環、原物料、工業與科技需求預期。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar / 鉅亨網全球經濟指標",
      "sourceUrl": "http://www.ons.gov.uk/",
      "sourceList": [
        "TradingView Economic Calendar",
        "鉅亨網全球經濟指標"
      ]
    },
    {
      "id": "macro-niesr-monthly-gdp-tracker-jun-20260716",
      "type": "macro",
      "title": "GDP 經濟成長率",
      "eventName": "GDP 經濟成長率",
      "originalEventName": "NIESR Monthly GDP Tracker (Jun)",
      "sourcePublishTime": "2026/07/16 20:00 Asia/Taipei",
      "country": "英國",
      "publishTime": "2026/07/16 20:00",
      "previous": "0.7",
      "forecast": "0.2",
      "actual": "0.4",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響景氣循環、原物料、工業與科技需求預期。",
      "importance": "高",
      "timestamp": "2026/07/16 20:00",
      "tags": [
        "英國",
        "GDP",
        "中性"
      ],
      "summary": "GDP 經濟成長率 將於 2026/07/16 20:00 公布，市場關注前值 0.7、預期 —。",
      "event": "英國 GDP 經濟成長率，前值 0.7、預期 —、實際 0.4。",
      "ai": "目前 AI 判斷為中性觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響景氣循環、原物料、工業與科技需求預期。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar / 鉅亨網全球經濟指標",
      "sourceUrl": "https://tw.tradingview.com/economic-calendar/",
      "sourceList": [
        "TradingView Economic Calendar",
        "鉅亨網全球經濟指標"
      ]
    },
    {
      "id": "macro-initial-jobless-claims-jul-11-20260716",
      "type": "macro",
      "title": "初領失業救濟金人數",
      "eventName": "初領失業救濟金人數",
      "originalEventName": "Initial Jobless Claims (Jul/11)",
      "sourcePublishTime": "2026/07/16 20:30 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/07/16 20:30",
      "previous": "216",
      "forecast": "217",
      "actual": "208",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏空",
      "impact": "影響就業強弱、薪資通膨與聯準會政策預期。",
      "importance": "中高",
      "timestamp": "2026/07/16 20:30",
      "tags": [
        "美國",
        "初領失業救濟金人數",
        "偏空"
      ],
      "summary": "初領失業救濟金人數 將於 2026/07/16 20:30 公布，市場關注前值 216、預期 217。",
      "event": "美國 初領失業救濟金人數，前值 216、預期 217、實際 208。",
      "ai": "目前 AI 判斷為偏空觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響就業強弱、薪資通膨與聯準會政策預期。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "https://www.dol.gov/",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    }
  ]
};
