window.IntelligenceOverviewData = {
  "updatedAt": "2026/06/09 07:46",
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
      "value": 69,
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
      "value": "ECB Financial Stability Review",
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
          "32 筆"
        ],
        [
          "三大法人同步買",
          "8 筆"
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
          "12 個"
        ],
        [
          "下一事件",
          "ECB Financial Stability Review"
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
      "id": "inst-2382-20260608",
      "type": "institutional",
      "title": "2382 廣達",
      "stockCode": "2382",
      "stockName": "廣達",
      "sector": "電腦及週邊設備",
      "group": "電腦及週邊設備",
      "institutionType": "投信",
      "direction": "連買",
      "days": 10,
      "consecutiveBuyDays": 10,
      "streaks": {
        "外資": 0,
        "投信": 10,
        "自營商": 2
      },
      "latestNetBuy": 17760,
      "buyVolume": 202687,
      "buyAmount": 791.49,
      "syncCount": 2,
      "importance": "高",
      "timestamp": "2026/06/08 18:20",
      "tags": [
        "投信",
        "連買",
        "電腦及週邊設備",
        "5G",
        "APPLE概念"
      ],
      "summary": "投信連買，近 10 個交易日正買合計 202,687 張，估算金額約 791.49 億元。",
      "event": "投信連買 10 日，近 10 個交易日正買合計 202,687 張；最新日外資 -16,265 張、投信 17,760 張、自營商 147 張。",
      "ai": "法人買盤集中在 電腦及週邊設備，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 206696.615,
      "yahooVerification": {
        "status": "days-different",
        "source": "https://tw.stock.yahoo.com/quote/2382.TW/institutional-trading",
        "latestNetBuy": 17760,
        "days": 13,
        "latestForeign": -16265,
        "latestTrust": 17760,
        "latestDealer": 147
      }
    },
    {
      "id": "inst-2330-20260608",
      "type": "institutional",
      "title": "2330 台積電",
      "stockCode": "2330",
      "stockName": "台積電",
      "sector": "半導體",
      "group": "半導體",
      "institutionType": "投信",
      "direction": "連買",
      "days": 4,
      "consecutiveBuyDays": 4,
      "streaks": {
        "外資": 0,
        "投信": 4,
        "自營商": 0
      },
      "latestNetBuy": 730,
      "buyVolume": 6090,
      "buyAmount": 144.03,
      "syncCount": 1,
      "importance": "高",
      "timestamp": "2026/06/08 18:20",
      "tags": [
        "投信",
        "連買",
        "半導體",
        "3D技術",
        "3D感測"
      ],
      "summary": "投信連買，近 10 個交易日正買合計 6,090 張，估算金額約 144.03 億元。",
      "event": "投信連買 4 日，近 10 個交易日正買合計 6,090 張；最新日外資 -20,465 張、投信 730 張、自營商 -214 張。",
      "ai": "法人買盤集中在 半導體，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 33158.559,
      "yahooVerification": {
        "status": "matched",
        "source": "https://tw.stock.yahoo.com/quote/2330.TW/institutional-trading",
        "latestNetBuy": 730,
        "days": 4,
        "latestForeign": -20465,
        "latestTrust": 730,
        "latestDealer": -214
      }
    },
    {
      "id": "inst-2002-20260608",
      "type": "institutional",
      "title": "2002 中鋼",
      "stockCode": "2002",
      "stockName": "中鋼",
      "sector": "鋼鐵工業",
      "group": "鋼鐵工業",
      "institutionType": "投信",
      "direction": "連買",
      "days": 7,
      "consecutiveBuyDays": 7,
      "streaks": {
        "外資": 0,
        "投信": 7,
        "自營商": 0
      },
      "latestNetBuy": 311,
      "buyVolume": 2163,
      "buyAmount": 0,
      "syncCount": 1,
      "importance": "高",
      "timestamp": "2026/06/08 18:20",
      "tags": [
        "投信",
        "連買",
        "鋼鐵工業",
        "印度設廠",
        "官股企業"
      ],
      "summary": "投信連買，近 10 個交易日正買合計 2,163 張，估算金額約 0.00 億元。",
      "event": "投信連買 7 日，近 10 個交易日正買合計 2,163 張；最新日外資 -32,274 張、投信 311 張、自營商 -581 張。",
      "ai": "法人買盤集中在 鋼鐵工業，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 35120.788,
      "yahooVerification": {
        "status": "matched",
        "source": "https://tw.stock.yahoo.com/quote/2002.TW/institutional-trading",
        "latestNetBuy": 311,
        "days": 7,
        "latestForeign": -32274,
        "latestTrust": 311,
        "latestDealer": -581
      }
    },
    {
      "id": "inst-2609-20260608",
      "type": "institutional",
      "title": "2609 陽明",
      "stockCode": "2609",
      "stockName": "陽明",
      "sector": "航運業",
      "group": "航運業",
      "institutionType": "外資",
      "direction": "連買",
      "days": 10,
      "consecutiveBuyDays": 10,
      "streaks": {
        "外資": 10,
        "投信": 0,
        "自營商": 0
      },
      "latestNetBuy": 11897,
      "buyVolume": 168704,
      "buyAmount": 0,
      "syncCount": 1,
      "importance": "高",
      "timestamp": "2026/06/08 18:20",
      "tags": [
        "外資",
        "連買",
        "航運業",
        "三通",
        "官股企業"
      ],
      "summary": "外資連買，近 10 個交易日正買合計 168,704 張，估算金額約 0.00 億元。",
      "event": "外資連買 10 日，近 10 個交易日正買合計 168,704 張；最新日外資 11,897 張、投信 -28,955 張、自營商 -146 張。",
      "ai": "法人買盤集中在 航運業，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 171058.604,
      "yahooVerification": {
        "status": "matched",
        "source": "https://tw.stock.yahoo.com/quote/2609.TW/institutional-trading",
        "latestNetBuy": 11897,
        "days": 10,
        "latestForeign": 11897,
        "latestTrust": -28955,
        "latestDealer": -146
      }
    },
    {
      "id": "macro-richmond-fed-manufacturing-index-may-20260527",
      "type": "macro",
      "title": "Richmond Fed Manufacturing Index (May)",
      "eventName": "Richmond Fed Manufacturing Index (May)",
      "originalEventName": "Richmond Fed Manufacturing Index (May)",
      "sourcePublishTime": "2026/05/27 22:00 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/05/27 22:00",
      "previous": "3",
      "forecast": "4",
      "actual": "13",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響全球資金成本、美元走勢與風險資產評價。",
      "importance": "中高",
      "timestamp": "2026/05/27 22:00",
      "tags": [
        "美國",
        "Richmond",
        "偏多"
      ],
      "summary": "Richmond Fed Manufacturing Index (May) 將於 2026/05/27 22:00 公布，市場關注前值 3、預期 4。",
      "event": "美國 Richmond Fed Manufacturing Index (May)，前值 3、預期 4、實際 13。",
      "ai": "目前 AI 判斷為偏多觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響全球資金成本、美元走勢與風險資產評價。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "https://www.richmondfed.org",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    },
    {
      "id": "macro-adp-employment-change-weekly-20260527",
      "type": "macro",
      "title": "ADP 就業人數",
      "eventName": "ADP 就業人數",
      "originalEventName": "ADP Employment Change Weekly",
      "sourcePublishTime": "2026/05/27 20:15 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/05/27 20:15",
      "previous": "40.75",
      "forecast": "—",
      "actual": "35.75",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/05/27 20:15",
      "tags": [
        "美國",
        "ADP",
        "中性"
      ],
      "summary": "ADP 就業人數 將於 2026/05/27 20:15 公布，市場關注前值 40.75、預期 —。",
      "event": "美國 ADP 就業人數，前值 40.75、預期 —、實際 35.75。",
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
      "id": "macro-ecb-financial-stability-review-20260527",
      "type": "macro",
      "title": "ECB Financial Stability Review",
      "eventName": "ECB Financial Stability Review",
      "originalEventName": "ECB Financial Stability Review",
      "sourcePublishTime": "2026/05/27 16:00 Asia/Taipei",
      "country": "歐元區",
      "publishTime": "2026/05/27 16:00",
      "previous": "—",
      "forecast": "—",
      "actual": null,
      "status": "等待公布",
      "statusLevel": "upcoming",
      "direction": "中性",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/05/27 16:00",
      "tags": [
        "歐元區",
        "ECB",
        "中性"
      ],
      "summary": "ECB Financial Stability Review 將於 2026/05/27 16:00 公布，市場關注前值 —、預期 —。",
      "event": "歐元區 ECB Financial Stability Review，前值 —、預期 —、實際 尚未公布。",
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
      "id": "macro-dallas-fed-manufacturing-index-may-20260526",
      "type": "macro",
      "title": "Dallas Fed Manufacturing Index (May)",
      "eventName": "Dallas Fed Manufacturing Index (May)",
      "originalEventName": "Dallas Fed Manufacturing Index (May)",
      "sourcePublishTime": "2026/05/26 22:30 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/05/26 22:30",
      "previous": "-2.3",
      "forecast": "—",
      "actual": "0.4",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響全球資金成本、美元走勢與風險資產評價。",
      "importance": "中高",
      "timestamp": "2026/05/26 22:30",
      "tags": [
        "美國",
        "Dallas",
        "中性"
      ],
      "summary": "Dallas Fed Manufacturing Index (May) 將於 2026/05/26 22:30 公布，市場關注前值 -2.3、預期 —。",
      "event": "美國 Dallas Fed Manufacturing Index (May)，前值 -2.3、預期 —、實際 0.4。",
      "ai": "目前 AI 判斷為中性觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響全球資金成本、美元走勢與風險資產評價。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "https://www.dallasfed.org",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    }
  ],
  "macroEvents": [
    {
      "id": "macro-dallas-fed-manufacturing-index-may-20260526",
      "type": "macro",
      "title": "Dallas Fed Manufacturing Index (May)",
      "eventName": "Dallas Fed Manufacturing Index (May)",
      "originalEventName": "Dallas Fed Manufacturing Index (May)",
      "sourcePublishTime": "2026/05/26 22:30 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/05/26 22:30",
      "previous": "-2.3",
      "forecast": "—",
      "actual": "0.4",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響全球資金成本、美元走勢與風險資產評價。",
      "importance": "中高",
      "timestamp": "2026/05/26 22:30",
      "tags": [
        "美國",
        "Dallas",
        "中性"
      ],
      "summary": "Dallas Fed Manufacturing Index (May) 將於 2026/05/26 22:30 公布，市場關注前值 -2.3、預期 —。",
      "event": "美國 Dallas Fed Manufacturing Index (May)，前值 -2.3、預期 —、實際 0.4。",
      "ai": "目前 AI 判斷為中性觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響全球資金成本、美元走勢與風險資產評價。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "https://www.dallasfed.org",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    },
    {
      "id": "macro-ecb-financial-stability-review-20260527",
      "type": "macro",
      "title": "ECB Financial Stability Review",
      "eventName": "ECB Financial Stability Review",
      "originalEventName": "ECB Financial Stability Review",
      "sourcePublishTime": "2026/05/27 16:00 Asia/Taipei",
      "country": "歐元區",
      "publishTime": "2026/05/27 16:00",
      "previous": "—",
      "forecast": "—",
      "actual": null,
      "status": "等待公布",
      "statusLevel": "upcoming",
      "direction": "中性",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/05/27 16:00",
      "tags": [
        "歐元區",
        "ECB",
        "中性"
      ],
      "summary": "ECB Financial Stability Review 將於 2026/05/27 16:00 公布，市場關注前值 —、預期 —。",
      "event": "歐元區 ECB Financial Stability Review，前值 —、預期 —、實際 尚未公布。",
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
      "id": "macro-adp-employment-change-weekly-20260527",
      "type": "macro",
      "title": "ADP 就業人數",
      "eventName": "ADP 就業人數",
      "originalEventName": "ADP Employment Change Weekly",
      "sourcePublishTime": "2026/05/27 20:15 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/05/27 20:15",
      "previous": "40.75",
      "forecast": "—",
      "actual": "35.75",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/05/27 20:15",
      "tags": [
        "美國",
        "ADP",
        "中性"
      ],
      "summary": "ADP 就業人數 將於 2026/05/27 20:15 公布，市場關注前值 40.75、預期 —。",
      "event": "美國 ADP 就業人數，前值 40.75、預期 —、實際 35.75。",
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
      "id": "macro-richmond-fed-manufacturing-index-may-20260527",
      "type": "macro",
      "title": "Richmond Fed Manufacturing Index (May)",
      "eventName": "Richmond Fed Manufacturing Index (May)",
      "originalEventName": "Richmond Fed Manufacturing Index (May)",
      "sourcePublishTime": "2026/05/27 22:00 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/05/27 22:00",
      "previous": "3",
      "forecast": "4",
      "actual": "13",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響全球資金成本、美元走勢與風險資產評價。",
      "importance": "中高",
      "timestamp": "2026/05/27 22:00",
      "tags": [
        "美國",
        "Richmond",
        "偏多"
      ],
      "summary": "Richmond Fed Manufacturing Index (May) 將於 2026/05/27 22:00 公布，市場關注前值 3、預期 4。",
      "event": "美國 Richmond Fed Manufacturing Index (May)，前值 3、預期 4、實際 13。",
      "ai": "目前 AI 判斷為偏多觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響全球資金成本、美元走勢與風險資產評價。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "https://www.richmondfed.org",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    },
    {
      "id": "macro-richmond-fed-manufacturing-shipments-index-may-20260527",
      "type": "macro",
      "title": "Richmond Fed Manufacturing Shipments Index (May)",
      "eventName": "Richmond Fed Manufacturing Shipments Index (May)",
      "originalEventName": "Richmond Fed Manufacturing Shipments Index (May)",
      "sourcePublishTime": "2026/05/27 22:00 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/05/27 22:00",
      "previous": "-2",
      "forecast": "—",
      "actual": "16",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響全球資金成本、美元走勢與風險資產評價。",
      "importance": "中高",
      "timestamp": "2026/05/27 22:00",
      "tags": [
        "美國",
        "Richmond",
        "中性"
      ],
      "summary": "Richmond Fed Manufacturing Shipments Index (May) 將於 2026/05/27 22:00 公布，市場關注前值 -2、預期 —。",
      "event": "美國 Richmond Fed Manufacturing Shipments Index (May)，前值 -2、預期 —、實際 16。",
      "ai": "目前 AI 判斷為中性觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響全球資金成本、美元走勢與風險資產評價。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "https://www.richmondfed.org",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    },
    {
      "id": "macro-ppi-mom-apr-20260528",
      "type": "macro",
      "title": "生產者物價指數 PPI",
      "eventName": "生產者物價指數 PPI",
      "originalEventName": "PPI MoM (Apr)",
      "sourcePublishTime": "2026/05/28 14:45 Asia/Taipei",
      "country": "法國",
      "publishTime": "2026/05/28 14:45",
      "previous": "1.9",
      "forecast": "1.1",
      "actual": "-2.1",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/05/28 14:45",
      "tags": [
        "法國",
        "生產者物價指數",
        "中性"
      ],
      "summary": "生產者物價指數 PPI 將於 2026/05/28 14:45 公布，市場關注前值 1.9、預期 —。",
      "event": "法國 生產者物價指數 PPI，前值 1.9、預期 —、實際 -2.1。",
      "ai": "目前 AI 判斷為中性觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響市場風險偏好與資金輪動。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar / 鉅亨網全球經濟指標",
      "sourceUrl": "https://www.insee.fr",
      "sourceList": [
        "TradingView Economic Calendar",
        "鉅亨網全球經濟指標"
      ]
    },
    {
      "id": "macro-services-sentiment-may-20260528",
      "type": "macro",
      "title": "Services Sentiment (May)",
      "eventName": "Services Sentiment (May)",
      "originalEventName": "Services Sentiment (May)",
      "sourcePublishTime": "2026/05/28 17:00 Asia/Taipei",
      "country": "歐元區",
      "publishTime": "2026/05/28 17:00",
      "previous": "1.4",
      "forecast": "0.2",
      "actual": "2.2",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/05/28 17:00",
      "tags": [
        "歐元區",
        "Services",
        "偏多"
      ],
      "summary": "Services Sentiment (May) 將於 2026/05/28 17:00 公布，市場關注前值 1.4、預期 0.2。",
      "event": "歐元區 Services Sentiment (May)，前值 1.4、預期 0.2、實際 2.2。",
      "ai": "目前 AI 判斷為偏多觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響市場風險偏好與資金輪動。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "http://ec.europa.eu",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    },
    {
      "id": "macro-ecb-monetary-policy-meeting-accounts-20260528",
      "type": "macro",
      "title": "ECB Monetary Policy Meeting Accounts",
      "eventName": "ECB Monetary Policy Meeting Accounts",
      "originalEventName": "ECB Monetary Policy Meeting Accounts",
      "sourcePublishTime": "2026/05/28 19:30 Asia/Taipei",
      "country": "歐元區",
      "publishTime": "2026/05/28 19:30",
      "previous": "—",
      "forecast": "—",
      "actual": null,
      "status": "等待公布",
      "statusLevel": "upcoming",
      "direction": "中性",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/05/28 19:30",
      "tags": [
        "歐元區",
        "ECB",
        "中性"
      ],
      "summary": "ECB Monetary Policy Meeting Accounts 將於 2026/05/28 19:30 公布，市場關注前值 —、預期 —。",
      "event": "歐元區 ECB Monetary Policy Meeting Accounts，前值 —、預期 —、實際 尚未公布。",
      "ai": "目前 AI 判斷為中性觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響市場風險偏好與資金輪動。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "https://www.ecb.europa.eu",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    }
  ]
};
