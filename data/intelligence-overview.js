window.IntelligenceOverviewData = {
  "updatedAt": "2026/08/31 18:30",
  "status": "運作中",
  "cards": [
    {
      "label": "今日偵測情報",
      "value": 256,
      "unit": "筆",
      "icon": "file"
    },
    {
      "label": "高重要度訊號",
      "value": 44,
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
      "value": "製造業 PMI",
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
          "18 筆"
        ],
        [
          "三大法人同步買",
          "4 筆"
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
          "43 個"
        ],
        [
          "下一事件",
          "製造業 PMI"
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
      "id": "inst-1717-20260831",
      "type": "institutional",
      "title": "1717 長興",
      "stockCode": "1717",
      "stockName": "長興",
      "sector": "化學工業",
      "group": "化學工業",
      "institutionType": "投信",
      "direction": "同步買超",
      "days": 4,
      "consecutiveBuyDays": 4,
      "streaks": {
        "外資": 3,
        "投信": 4,
        "自營商": 4
      },
      "latestNetBuy": 3450,
      "buyVolume": 5652,
      "buyAmount": 0,
      "syncCount": 3,
      "importance": "高",
      "timestamp": "2026/08/31 18:20",
      "tags": [
        "投信",
        "同步買超",
        "化學工業",
        "APPLE概念",
        "S&P 台商收成指數"
      ],
      "summary": "投信同步買超，近 10 個交易日正買合計 5,652 張，估算金額約 0.00 億元。",
      "event": "投信連買 4 日，近 10 個交易日正買合計 5,652 張；最新日外資 12,571 張、投信 3,450 張、自營商 950 張。",
      "ai": "法人買盤集中在 化學工業，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 36164.594,
      "yahooVerification": {
        "status": "matched",
        "source": "https://tw.stock.yahoo.com/quote/1717.TW/institutional-trading",
        "latestNetBuy": 3450,
        "days": 4,
        "latestForeign": 12571,
        "latestTrust": 3450,
        "latestDealer": 950
      }
    },
    {
      "id": "inst-5880-20260831",
      "type": "institutional",
      "title": "5880 合庫金",
      "stockCode": "5880",
      "stockName": "合庫金",
      "sector": "金融保險",
      "group": "金融保險",
      "institutionType": "外資",
      "direction": "連買",
      "days": 7,
      "consecutiveBuyDays": 7,
      "streaks": {
        "外資": 7,
        "投信": 1,
        "自營商": 0
      },
      "latestNetBuy": 8441,
      "buyVolume": 27992,
      "buyAmount": 0,
      "syncCount": 2,
      "importance": "高",
      "timestamp": "2026/08/31 18:20",
      "tags": [
        "外資",
        "連買",
        "金融保險",
        "官股企業",
        "金融業"
      ],
      "summary": "外資連買，近 10 個交易日正買合計 27,992 張，估算金額約 0.00 億元。",
      "event": "外資連買 7 日，近 10 個交易日正買合計 27,992 張；最新日外資 8,441 張、投信 40 張、自營商 -61 張。",
      "ai": "法人買盤集中在 金融保險，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 55379.143,
      "yahooVerification": {
        "status": "matched",
        "source": "https://tw.stock.yahoo.com/quote/5880.TW/institutional-trading",
        "latestNetBuy": 8441,
        "days": 7,
        "latestForeign": 8441,
        "latestTrust": 40,
        "latestDealer": -61
      }
    },
    {
      "id": "inst-2303-20260831",
      "type": "institutional",
      "title": "2303 聯電",
      "stockCode": "2303",
      "stockName": "聯電",
      "sector": "半導體",
      "group": "半導體",
      "institutionType": "投信",
      "direction": "連買",
      "days": 2,
      "consecutiveBuyDays": 2,
      "streaks": {
        "外資": 0,
        "投信": 2,
        "自營商": 0
      },
      "latestNetBuy": 6340,
      "buyVolume": 27647,
      "buyAmount": 35.94,
      "syncCount": 1,
      "importance": "高",
      "timestamp": "2026/08/31 18:20",
      "tags": [
        "投信",
        "連買",
        "半導體",
        "手機",
        "車用電子相關"
      ],
      "summary": "投信連買，近 10 個交易日正買合計 27,647 張，估算金額約 35.94 億元。",
      "event": "投信連買 2 日，近 10 個交易日正買合計 27,647 張；最新日外資 -12,716 張、投信 6,340 張、自營商 -1,126 張。",
      "ai": "法人買盤集中在 半導體，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 172463.812,
      "yahooVerification": {
        "status": "matched",
        "source": "https://tw.stock.yahoo.com/quote/2303.TW/institutional-trading",
        "latestNetBuy": 6340,
        "days": 2,
        "latestForeign": -12716,
        "latestTrust": 6340,
        "latestDealer": -1126
      }
    },
    {
      "id": "inst-2884-20260831",
      "type": "institutional",
      "title": "2884 玉山金",
      "stockCode": "2884",
      "stockName": "玉山金",
      "sector": "金融保險",
      "group": "金融保險",
      "institutionType": "投信",
      "direction": "連買",
      "days": 10,
      "consecutiveBuyDays": 10,
      "streaks": {
        "外資": 1,
        "投信": 10,
        "自營商": 0
      },
      "latestNetBuy": 1252,
      "buyVolume": 54619,
      "buyAmount": 0,
      "syncCount": 2,
      "importance": "高",
      "timestamp": "2026/08/31 18:20",
      "tags": [
        "投信",
        "連買",
        "金融保險",
        "電子商務及延伸",
        "金融業"
      ],
      "summary": "投信連買，近 10 個交易日正買合計 54,619 張，估算金額約 0.00 億元。",
      "event": "投信連買 10 日，近 10 個交易日正買合計 54,619 張；最新日外資 12,894 張、投信 1,252 張、自營商 -2,075 張。",
      "ai": "法人買盤集中在 金融保險，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 79979.053,
      "yahooVerification": {
        "status": "days-different",
        "source": "https://tw.stock.yahoo.com/quote/2884.TW/institutional-trading",
        "latestNetBuy": 1252,
        "days": 18,
        "latestForeign": 12894,
        "latestTrust": 1252,
        "latestDealer": -2075
      }
    },
    {
      "id": "macro-hmrc-payrolls-change-jul-20260818",
      "type": "macro",
      "title": "非農就業人數",
      "eventName": "非農就業人數",
      "originalEventName": "HMRC Payrolls Change (Jul)",
      "sourcePublishTime": "2026/08/18 14:00 Asia/Taipei",
      "country": "英國",
      "publishTime": "2026/08/18 14:00",
      "previous": "-13",
      "forecast": "—",
      "actual": "-13",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響就業強弱、薪資通膨與聯準會政策預期。",
      "importance": "高",
      "timestamp": "2026/08/18 14:00",
      "tags": [
        "英國",
        "非農就業人數",
        "中性"
      ],
      "summary": "非農就業人數 將於 2026/08/18 14:00 公布，市場關注前值 -13、預期 —。",
      "event": "英國 非農就業人數，前值 -13、預期 —、實際 -13。",
      "ai": "目前 AI 判斷為中性觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響就業強弱、薪資通膨與聯準會政策預期。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "http://www.ons.gov.uk/",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    },
    {
      "id": "macro-adp-employment-change-weekly-20260818",
      "type": "macro",
      "title": "ADP 就業人數",
      "eventName": "ADP 就業人數",
      "originalEventName": "ADP Employment Change Weekly",
      "sourcePublishTime": "2026/08/18 20:15 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/08/18 20:15",
      "previous": "8.25",
      "forecast": "—",
      "actual": "9.5",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/08/18 20:15",
      "tags": [
        "美國",
        "ADP",
        "中性"
      ],
      "summary": "ADP 就業人數 將於 2026/08/18 20:15 公布，市場關注前值 8.25、預期 —。",
      "event": "美國 ADP 就業人數，前值 8.25、預期 —、實際 9.5。",
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
      "id": "macro-unemployment-rate-jun-20260818",
      "type": "macro",
      "title": "失業率",
      "eventName": "失業率",
      "originalEventName": "Unemployment Rate (Jun)",
      "sourcePublishTime": "2026/08/18 14:00 Asia/Taipei",
      "country": "英國",
      "publishTime": "2026/08/18 14:00",
      "previous": "4.9",
      "forecast": "4.8",
      "actual": "4.9",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響全球資金成本、美元走勢與風險資產評價。",
      "importance": "中高",
      "timestamp": "2026/08/18 14:00",
      "tags": [
        "英國",
        "失業率",
        "偏多"
      ],
      "summary": "失業率 將於 2026/08/18 14:00 公布，市場關注前值 4.9、預期 4.8。",
      "event": "英國 失業率，前值 4.9、預期 4.8、實際 4.9。",
      "ai": "目前 AI 判斷為偏多觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響全球資金成本、美元走勢與風險資產評價。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "http://www.ons.gov.uk/",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    },
    {
      "id": "macro-employment-change-jun-20260818",
      "type": "macro",
      "title": "就業人數變化",
      "eventName": "就業人數變化",
      "originalEventName": "Employment Change (Jun)",
      "sourcePublishTime": "2026/08/18 14:00 Asia/Taipei",
      "country": "英國",
      "publishTime": "2026/08/18 14:00",
      "previous": "147",
      "forecast": "—",
      "actual": "83",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/08/18 14:00",
      "tags": [
        "英國",
        "就業人數變化",
        "中性"
      ],
      "summary": "就業人數變化 將於 2026/08/18 14:00 公布，市場關注前值 147、預期 —。",
      "event": "英國 就業人數變化，前值 147、預期 —、實際 83。",
      "ai": "目前 AI 判斷為中性觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響市場風險偏好與資金輪動。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "http://www.ons.gov.uk/",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    }
  ],
  "macroEvents": [
    {
      "id": "macro-hmrc-payrolls-change-jul-20260818",
      "type": "macro",
      "title": "非農就業人數",
      "eventName": "非農就業人數",
      "originalEventName": "HMRC Payrolls Change (Jul)",
      "sourcePublishTime": "2026/08/18 14:00 Asia/Taipei",
      "country": "英國",
      "publishTime": "2026/08/18 14:00",
      "previous": "-13",
      "forecast": "—",
      "actual": "-13",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響就業強弱、薪資通膨與聯準會政策預期。",
      "importance": "高",
      "timestamp": "2026/08/18 14:00",
      "tags": [
        "英國",
        "非農就業人數",
        "中性"
      ],
      "summary": "非農就業人數 將於 2026/08/18 14:00 公布，市場關注前值 -13、預期 —。",
      "event": "英國 非農就業人數，前值 -13、預期 —、實際 -13。",
      "ai": "目前 AI 判斷為中性觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響就業強弱、薪資通膨與聯準會政策預期。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "http://www.ons.gov.uk/",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    },
    {
      "id": "macro-unemployment-rate-jun-20260818",
      "type": "macro",
      "title": "失業率",
      "eventName": "失業率",
      "originalEventName": "Unemployment Rate (Jun)",
      "sourcePublishTime": "2026/08/18 14:00 Asia/Taipei",
      "country": "英國",
      "publishTime": "2026/08/18 14:00",
      "previous": "4.9",
      "forecast": "4.8",
      "actual": "4.9",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響全球資金成本、美元走勢與風險資產評價。",
      "importance": "中高",
      "timestamp": "2026/08/18 14:00",
      "tags": [
        "英國",
        "失業率",
        "偏多"
      ],
      "summary": "失業率 將於 2026/08/18 14:00 公布，市場關注前值 4.9、預期 4.8。",
      "event": "英國 失業率，前值 4.9、預期 4.8、實際 4.9。",
      "ai": "目前 AI 判斷為偏多觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響全球資金成本、美元走勢與風險資產評價。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "http://www.ons.gov.uk/",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    },
    {
      "id": "macro-employment-change-jun-20260818",
      "type": "macro",
      "title": "就業人數變化",
      "eventName": "就業人數變化",
      "originalEventName": "Employment Change (Jun)",
      "sourcePublishTime": "2026/08/18 14:00 Asia/Taipei",
      "country": "英國",
      "publishTime": "2026/08/18 14:00",
      "previous": "147",
      "forecast": "—",
      "actual": "83",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/08/18 14:00",
      "tags": [
        "英國",
        "就業人數變化",
        "中性"
      ],
      "summary": "就業人數變化 將於 2026/08/18 14:00 公布，市場關注前值 147、預期 —。",
      "event": "英國 就業人數變化，前值 147、預期 —、實際 83。",
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
      "id": "macro-adp-employment-change-weekly-20260818",
      "type": "macro",
      "title": "ADP 就業人數",
      "eventName": "ADP 就業人數",
      "originalEventName": "ADP Employment Change Weekly",
      "sourcePublishTime": "2026/08/18 20:15 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/08/18 20:15",
      "previous": "8.25",
      "forecast": "—",
      "actual": "9.5",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/08/18 20:15",
      "tags": [
        "美國",
        "ADP",
        "中性"
      ],
      "summary": "ADP 就業人數 將於 2026/08/18 20:15 公布，市場關注前值 8.25、預期 —。",
      "event": "美國 ADP 就業人數，前值 8.25、預期 —、實際 9.5。",
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
      "id": "macro-ppi-core-output-yoy-jul-20260819",
      "type": "macro",
      "title": "生產者物價指數 PPI",
      "eventName": "生產者物價指數 PPI",
      "originalEventName": "PPI Core Output YoY (Jul)",
      "sourcePublishTime": "2026/08/19 14:00 Asia/Taipei",
      "country": "英國",
      "publishTime": "2026/08/19 14:00",
      "previous": "2.6",
      "forecast": "6.6",
      "actual": "2.8",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/08/19 14:00",
      "tags": [
        "英國",
        "生產者物價指數",
        "中性"
      ],
      "summary": "生產者物價指數 PPI 將於 2026/08/19 14:00 公布，市場關注前值 2.6、預期 —。",
      "event": "英國 生產者物價指數 PPI，前值 2.6、預期 —、實際 2.8。",
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
      "id": "macro-core-inflation-rate-yoy-jul-20260819",
      "type": "macro",
      "title": "核心通膨率",
      "eventName": "核心通膨率",
      "originalEventName": "Core Inflation Rate YoY (Jul)",
      "sourcePublishTime": "2026/08/19 14:00 Asia/Taipei",
      "country": "英國",
      "publishTime": "2026/08/19 14:00",
      "previous": "2.6",
      "forecast": "2.5",
      "actual": "2.6",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏空",
      "impact": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "importance": "中高",
      "timestamp": "2026/08/19 14:00",
      "tags": [
        "英國",
        "核心通膨率",
        "偏空"
      ],
      "summary": "核心通膨率 將於 2026/08/19 14:00 公布，市場關注前值 2.6、預期 2.5。",
      "event": "英國 核心通膨率，前值 2.6、預期 2.5、實際 2.6。",
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
      "id": "macro-inflation-rate-mom-jul-20260819",
      "type": "macro",
      "title": "通膨率",
      "eventName": "通膨率",
      "originalEventName": "Inflation Rate MoM (Jul)",
      "sourcePublishTime": "2026/08/19 14:00 Asia/Taipei",
      "country": "英國",
      "publishTime": "2026/08/19 14:00",
      "previous": "0.1",
      "forecast": "0.3",
      "actual": "0.3",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "importance": "中高",
      "timestamp": "2026/08/19 14:00",
      "tags": [
        "英國",
        "通膨率",
        "中性"
      ],
      "summary": "通膨率 將於 2026/08/19 14:00 公布，市場關注前值 0.1、預期 0.3。",
      "event": "英國 通膨率，前值 0.1、預期 0.3、實際 0.3。",
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
      "id": "macro-inflation-rate-mom-final-jul-20260819",
      "type": "macro",
      "title": "通膨率",
      "eventName": "通膨率",
      "originalEventName": "Inflation Rate MoM Final (Jul)",
      "sourcePublishTime": "2026/08/19 17:00 Asia/Taipei",
      "country": "歐元區",
      "publishTime": "2026/08/19 17:00",
      "previous": "-0.1",
      "forecast": "2.9",
      "actual": "0.2",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "importance": "中高",
      "timestamp": "2026/08/19 17:00",
      "tags": [
        "歐元區",
        "通膨率",
        "中性"
      ],
      "summary": "通膨率 將於 2026/08/19 17:00 公布，市場關注前值 -0.1、預期 —。",
      "event": "歐元區 通膨率，前值 -0.1、預期 —、實際 0.2。",
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
