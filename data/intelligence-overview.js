window.IntelligenceOverviewData = {
  "updatedAt": "2026/10/26 07:47",
  "status": "運作中",
  "cards": [
    {
      "label": "今日偵測情報",
      "value": 267,
      "unit": "筆",
      "icon": "file"
    },
    {
      "label": "高重要度訊號",
      "value": 100,
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
      "value": "綜合 PMI",
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
          "27 筆"
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
          "38 個"
        ],
        [
          "下一事件",
          "綜合 PMI"
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
      "id": "inst-1303-20261022",
      "type": "institutional",
      "title": "1303 南亞",
      "stockCode": "1303",
      "stockName": "南亞",
      "sector": "塑膠工業",
      "group": "塑膠工業",
      "institutionType": "自營商",
      "direction": "連買",
      "days": 6,
      "consecutiveBuyDays": 6,
      "streaks": {
        "外資": 0,
        "投信": 0,
        "自營商": 6
      },
      "latestNetBuy": 178,
      "buyVolume": 10746,
      "buyAmount": 32.34,
      "syncCount": 1,
      "importance": "高",
      "timestamp": "2026/10/22 18:20",
      "tags": [
        "自營商",
        "連買",
        "塑膠工業",
        "APPLE概念",
        "越南設廠"
      ],
      "summary": "自營商連買，近 9 個交易日正買合計 10,746 張，估算金額約 32.34 億元。",
      "event": "自營商連買 6 日，近 9 個交易日正買合計 10,746 張；最新日外資 -20,416 張、投信 -475 張、自營商 178 張。",
      "ai": "法人買盤集中在 塑膠工業，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 72910.707,
      "yahooVerification": {
        "status": "matched",
        "source": "https://tw.stock.yahoo.com/quote/1303.TW/institutional-trading",
        "latestNetBuy": 178,
        "days": 6,
        "latestForeign": -20416,
        "latestTrust": -475,
        "latestDealer": 178
      }
    },
    {
      "id": "inst-2002-20261022",
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
        "投信": 6,
        "自營商": 0
      },
      "latestNetBuy": 24665,
      "buyVolume": 222439,
      "buyAmount": 0,
      "syncCount": 2,
      "importance": "高",
      "timestamp": "2026/10/22 18:20",
      "tags": [
        "外資",
        "連買",
        "鋼鐵工業",
        "印度設廠",
        "官股企業"
      ],
      "summary": "外資連買，近 9 個交易日正買合計 222,439 張，估算金額約 0.00 億元。",
      "event": "外資連買 9 日，近 9 個交易日正買合計 222,439 張；最新日外資 24,665 張、投信 650 張、自營商 -387 張。",
      "ai": "法人買盤集中在 鋼鐵工業，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 240929.359,
      "yahooVerification": {
        "status": "days-different",
        "source": "https://tw.stock.yahoo.com/quote/2002.TW/institutional-trading",
        "latestNetBuy": 24665,
        "days": 10,
        "latestForeign": 24665,
        "latestTrust": 650,
        "latestDealer": -387
      }
    },
    {
      "id": "inst-2330-20261022",
      "type": "institutional",
      "title": "2330 台積電",
      "stockCode": "2330",
      "stockName": "台積電",
      "sector": "半導體",
      "group": "半導體",
      "institutionType": "投信",
      "direction": "連買",
      "days": 9,
      "consecutiveBuyDays": 9,
      "streaks": {
        "外資": 0,
        "投信": 9,
        "自營商": 1
      },
      "latestNetBuy": 1350,
      "buyVolume": 16001,
      "buyAmount": 381.62,
      "syncCount": 2,
      "importance": "高",
      "timestamp": "2026/10/22 18:20",
      "tags": [
        "投信",
        "連買",
        "半導體",
        "3D技術",
        "3D感測"
      ],
      "summary": "投信連買，近 9 個交易日正買合計 16,001 張，估算金額約 381.62 億元。",
      "event": "投信連買 9 日，近 9 個交易日正買合計 16,001 張；最新日外資 -12,695 張、投信 1,350 張、自營商 1,196 張。",
      "ai": "法人買盤集中在 半導體，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 30356.937,
      "yahooVerification": {
        "status": "days-different",
        "source": "https://tw.stock.yahoo.com/quote/2330.TW/institutional-trading",
        "latestNetBuy": 1350,
        "days": 17,
        "latestForeign": -12695,
        "latestTrust": 1350,
        "latestDealer": 1196
      }
    },
    {
      "id": "inst-1802-20261022",
      "type": "institutional",
      "title": "1802 台玻",
      "stockCode": "1802",
      "stockName": "台玻",
      "sector": "玻璃陶瓷",
      "group": "玻璃陶瓷",
      "institutionType": "投信",
      "direction": "同步買超",
      "days": 8,
      "consecutiveBuyDays": 8,
      "streaks": {
        "外資": 1,
        "投信": 8,
        "自營商": 1
      },
      "latestNetBuy": 2968,
      "buyVolume": 3940,
      "buyAmount": 0,
      "syncCount": 3,
      "importance": "高",
      "timestamp": "2026/10/22 18:20",
      "tags": [
        "投信",
        "同步買超",
        "玻璃陶瓷",
        "太陽能",
        "建材"
      ],
      "summary": "投信同步買超，近 9 個交易日正買合計 3,940 張，估算金額約 0.00 億元。",
      "event": "投信連買 8 日，近 9 個交易日正買合計 3,940 張；最新日外資 25,236 張、投信 2,968 張、自營商 321 張。",
      "ai": "法人買盤集中在 玻璃陶瓷，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 115162.083,
      "yahooVerification": {
        "status": "matched",
        "source": "https://tw.stock.yahoo.com/quote/1802.TW/institutional-trading",
        "latestNetBuy": 2968,
        "days": 8,
        "latestForeign": 25236,
        "latestTrust": 2968,
        "latestDealer": 321
      }
    },
    {
      "id": "macro-cpi-s-a-sep-20261014",
      "type": "macro",
      "title": "消費者物價指數 CPI",
      "eventName": "消費者物價指數 CPI",
      "originalEventName": "CPI s.a (Sep)",
      "sourcePublishTime": "2026/10/14 20:30 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/10/14 20:30",
      "previous": "334.13",
      "forecast": "336.65",
      "actual": "336.3",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "importance": "高",
      "timestamp": "2026/10/14 20:30",
      "tags": [
        "美國",
        "消費者物價指數",
        "中性"
      ],
      "summary": "消費者物價指數 CPI 將於 2026/10/14 20:30 公布，市場關注前值 334.13、預期 —。",
      "event": "美國 消費者物價指數 CPI，前值 334.13、預期 —、實際 336.3。",
      "ai": "目前 AI 判斷為中性觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "http://www.bls.gov",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    },
    {
      "id": "macro-inflation-rate-mom-sep-20261014",
      "type": "macro",
      "title": "通膨率",
      "eventName": "通膨率",
      "originalEventName": "Inflation Rate MoM (Sep)",
      "sourcePublishTime": "2026/10/14 20:30 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/10/14 20:30",
      "previous": "0.4",
      "forecast": "0.6",
      "actual": "0.6",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "importance": "中高",
      "timestamp": "2026/10/14 20:30",
      "tags": [
        "美國",
        "通膨率",
        "中性"
      ],
      "summary": "通膨率 將於 2026/10/14 20:30 公布，市場關注前值 0.4、預期 0.6。",
      "event": "美國 通膨率，前值 0.4、預期 0.6、實際 0.6。",
      "ai": "目前 AI 判斷為中性觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "http://www.bls.gov/",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    },
    {
      "id": "macro-adp-employment-change-weekly-20261013",
      "type": "macro",
      "title": "ADP 就業人數",
      "eventName": "ADP 就業人數",
      "originalEventName": "ADP Employment Change Weekly",
      "sourcePublishTime": "2026/10/13 20:15 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/10/13 20:15",
      "previous": "23.75",
      "forecast": "—",
      "actual": "24.75",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/10/13 20:15",
      "tags": [
        "美國",
        "ADP",
        "中性"
      ],
      "summary": "ADP 就業人數 將於 2026/10/13 20:15 公布，市場關注前值 23.75、預期 —。",
      "event": "美國 ADP 就業人數，前值 23.75、預期 —、實際 24.75。",
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
      "id": "macro-inflation-rate-yoy-final-sep-20261013",
      "type": "macro",
      "title": "通膨率",
      "eventName": "通膨率",
      "originalEventName": "Inflation Rate YoY Final (Sep)",
      "sourcePublishTime": "2026/10/13 14:00 Asia/Taipei",
      "country": "德國",
      "publishTime": "2026/10/13 14:00",
      "previous": "2.9",
      "forecast": "3.3",
      "actual": "3.3",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "importance": "中高",
      "timestamp": "2026/10/13 14:00",
      "tags": [
        "德國",
        "通膨率",
        "中性"
      ],
      "summary": "通膨率 將於 2026/10/13 14:00 公布，市場關注前值 2.9、預期 3.3。",
      "event": "德國 通膨率，前值 2.9、預期 3.3、實際 3.3。",
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
      "id": "macro-inflation-rate-yoy-final-sep-20261013",
      "type": "macro",
      "title": "通膨率",
      "eventName": "通膨率",
      "originalEventName": "Inflation Rate YoY Final (Sep)",
      "sourcePublishTime": "2026/10/13 14:00 Asia/Taipei",
      "country": "德國",
      "publishTime": "2026/10/13 14:00",
      "previous": "2.9",
      "forecast": "3.3",
      "actual": "3.3",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "importance": "中高",
      "timestamp": "2026/10/13 14:00",
      "tags": [
        "德國",
        "通膨率",
        "中性"
      ],
      "summary": "通膨率 將於 2026/10/13 14:00 公布，市場關注前值 2.9、預期 3.3。",
      "event": "德國 通膨率，前值 2.9、預期 3.3、實際 3.3。",
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
      "id": "macro-adp-employment-change-weekly-20261013",
      "type": "macro",
      "title": "ADP 就業人數",
      "eventName": "ADP 就業人數",
      "originalEventName": "ADP Employment Change Weekly",
      "sourcePublishTime": "2026/10/13 20:15 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/10/13 20:15",
      "previous": "23.75",
      "forecast": "—",
      "actual": "24.75",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/10/13 20:15",
      "tags": [
        "美國",
        "ADP",
        "中性"
      ],
      "summary": "ADP 就業人數 將於 2026/10/13 20:15 公布，市場關注前值 23.75、預期 —。",
      "event": "美國 ADP 就業人數，前值 23.75、預期 —、實際 24.75。",
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
      "id": "macro-cpi-s-a-sep-20261014",
      "type": "macro",
      "title": "消費者物價指數 CPI",
      "eventName": "消費者物價指數 CPI",
      "originalEventName": "CPI s.a (Sep)",
      "sourcePublishTime": "2026/10/14 20:30 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/10/14 20:30",
      "previous": "334.13",
      "forecast": "336.65",
      "actual": "336.3",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "importance": "高",
      "timestamp": "2026/10/14 20:30",
      "tags": [
        "美國",
        "消費者物價指數",
        "中性"
      ],
      "summary": "消費者物價指數 CPI 將於 2026/10/14 20:30 公布，市場關注前值 334.13、預期 —。",
      "event": "美國 消費者物價指數 CPI，前值 334.13、預期 —、實際 336.3。",
      "ai": "目前 AI 判斷為中性觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "http://www.bls.gov",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    },
    {
      "id": "macro-inflation-rate-mom-sep-20261014",
      "type": "macro",
      "title": "通膨率",
      "eventName": "通膨率",
      "originalEventName": "Inflation Rate MoM (Sep)",
      "sourcePublishTime": "2026/10/14 20:30 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/10/14 20:30",
      "previous": "0.4",
      "forecast": "0.6",
      "actual": "0.6",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "importance": "中高",
      "timestamp": "2026/10/14 20:30",
      "tags": [
        "美國",
        "通膨率",
        "中性"
      ],
      "summary": "通膨率 將於 2026/10/14 20:30 公布，市場關注前值 0.4、預期 0.6。",
      "event": "美國 通膨率，前值 0.4、預期 0.6、實際 0.6。",
      "ai": "目前 AI 判斷為中性觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "http://www.bls.gov/",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    },
    {
      "id": "macro-core-inflation-rate-yoy-sep-20261014",
      "type": "macro",
      "title": "核心通膨率",
      "eventName": "核心通膨率",
      "originalEventName": "Core Inflation Rate YoY (Sep)",
      "sourcePublishTime": "2026/10/14 20:30 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/10/14 20:30",
      "previous": "2.4",
      "forecast": "2.5",
      "actual": "2.6",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏空",
      "impact": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "importance": "中高",
      "timestamp": "2026/10/14 20:30",
      "tags": [
        "美國",
        "核心通膨率",
        "偏空"
      ],
      "summary": "核心通膨率 將於 2026/10/14 20:30 公布，市場關注前值 2.4、預期 2.5。",
      "event": "美國 核心通膨率，前值 2.4、預期 2.5、實際 2.6。",
      "ai": "目前 AI 判斷為偏空觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "https://www.bls.gov",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    },
    {
      "id": "macro-gdp-mom-aug-20261015",
      "type": "macro",
      "title": "GDP 經濟成長率",
      "eventName": "GDP 經濟成長率",
      "originalEventName": "GDP MoM (Aug)",
      "sourcePublishTime": "2026/10/15 14:00 Asia/Taipei",
      "country": "英國",
      "publishTime": "2026/10/15 14:00",
      "previous": "0.4",
      "forecast": "-0.1",
      "actual": "0.1",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響景氣循環、原物料、工業與科技需求預期。",
      "importance": "高",
      "timestamp": "2026/10/15 14:00",
      "tags": [
        "英國",
        "GDP",
        "偏多"
      ],
      "summary": "GDP 經濟成長率 將於 2026/10/15 14:00 公布，市場關注前值 0.4、預期 -0.1。",
      "event": "英國 GDP 經濟成長率，前值 0.4、預期 -0.1、實際 0.1。",
      "ai": "目前 AI 判斷為偏多觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
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
      "id": "macro-inflation-rate-mom-final-sep-20261015",
      "type": "macro",
      "title": "通膨率",
      "eventName": "通膨率",
      "originalEventName": "Inflation Rate MoM Final (Sep)",
      "sourcePublishTime": "2026/10/15 14:45 Asia/Taipei",
      "country": "法國",
      "publishTime": "2026/10/15 14:45",
      "previous": "0.7",
      "forecast": "-0.3",
      "actual": "-0.3",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "importance": "中高",
      "timestamp": "2026/10/15 14:45",
      "tags": [
        "法國",
        "通膨率",
        "中性"
      ],
      "summary": "通膨率 將於 2026/10/15 14:45 公布，市場關注前值 0.7、預期 -0.3。",
      "event": "法國 通膨率，前值 0.7、預期 -0.3、實際 -0.3。",
      "ai": "目前 AI 判斷為中性觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "https://www.insee.fr",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    },
    {
      "id": "macro-niesr-gdp-20261015",
      "type": "macro",
      "title": "GDP 經濟成長率",
      "eventName": "GDP 經濟成長率",
      "originalEventName": "NIESR每月GDP追蹤",
      "sourcePublishTime": "2026/10/15 19:00 Asia/Taipei",
      "country": "英國",
      "publishTime": "2026/10/15 19:00",
      "previous": "0.5",
      "forecast": "0.4",
      "actual": "0.7",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響景氣循環、原物料、工業與科技需求預期。",
      "importance": "高",
      "timestamp": "2026/10/15 19:00",
      "tags": [
        "英國",
        "GDP",
        "偏多"
      ],
      "summary": "GDP 經濟成長率 將於 2026/10/15 19:00 公布，市場關注前值 0.5、預期 0.4。",
      "event": "英國 GDP 經濟成長率，前值 0.5、預期 0.4、實際 0.7。",
      "ai": "目前 AI 判斷為偏多觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響景氣循環、原物料、工業與科技需求預期。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "鉅亨網全球經濟指標",
      "sourceUrl": "https://www.cnyes.com/economy/indicator",
      "sourceList": [
        "鉅亨網全球經濟指標"
      ]
    }
  ]
};
