window.IntelligenceOverviewData = {
  "updatedAt": "2026/06/23 18:30",
  "status": "運作中",
  "cards": [
    {
      "label": "今日偵測情報",
      "value": 226,
      "unit": "筆",
      "icon": "file"
    },
    {
      "label": "高重要度訊號",
      "value": 58,
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
      "value": "ECB Survey of Monetary Analysts",
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
          "40 個"
        ],
        [
          "下一事件",
          "ECB Survey of Monetary Analysts"
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
      "id": "inst-1303-20260623",
      "type": "institutional",
      "title": "1303 南亞",
      "stockCode": "1303",
      "stockName": "南亞",
      "sector": "塑膠工業",
      "group": "塑膠工業",
      "institutionType": "投信",
      "direction": "連買",
      "days": 3,
      "consecutiveBuyDays": 3,
      "streaks": {
        "外資": 0,
        "投信": 3,
        "自營商": 0
      },
      "latestNetBuy": 40656,
      "buyVolume": 49135,
      "buyAmount": 74.93,
      "syncCount": 1,
      "importance": "高",
      "timestamp": "2026/06/23 18:20",
      "tags": [
        "投信",
        "連買",
        "塑膠工業",
        "APPLE概念",
        "越南設廠"
      ],
      "summary": "投信連買，近 10 個交易日正買合計 49,135 張，估算金額約 74.93 億元。",
      "event": "投信連買 3 日，近 10 個交易日正買合計 49,135 張；最新日外資 -16,415 張、投信 40,656 張、自營商 -1,268 張。",
      "ai": "法人買盤集中在 塑膠工業，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 120999.172,
      "yahooVerification": {
        "status": "matched",
        "source": "https://tw.stock.yahoo.com/quote/1303.TW/institutional-trading",
        "latestNetBuy": 40656,
        "days": 3,
        "latestForeign": -16415,
        "latestTrust": 40656,
        "latestDealer": -1268
      }
    },
    {
      "id": "inst-2382-20260623",
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
        "自營商": 1
      },
      "latestNetBuy": 2059,
      "buyVolume": 63164,
      "buyAmount": 237.5,
      "syncCount": 2,
      "importance": "高",
      "timestamp": "2026/06/23 18:20",
      "tags": [
        "投信",
        "連買",
        "電腦及週邊設備",
        "5G",
        "APPLE概念"
      ],
      "summary": "投信連買，近 10 個交易日正買合計 63,164 張，估算金額約 237.50 億元。",
      "event": "投信連買 10 日，近 10 個交易日正買合計 63,164 張；最新日外資 -4,409 張、投信 2,059 張、自營商 74 張。",
      "ai": "法人買盤集中在 電腦及週邊設備，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 69941.377,
      "yahooVerification": {
        "status": "days-different",
        "source": "https://tw.stock.yahoo.com/quote/2382.TW/institutional-trading",
        "latestNetBuy": 2059,
        "days": 23,
        "latestForeign": -4409,
        "latestTrust": 2059,
        "latestDealer": 74
      }
    },
    {
      "id": "inst-2610-20260623",
      "type": "institutional",
      "title": "2610 華航",
      "stockCode": "2610",
      "stockName": "華航",
      "sector": "航運業",
      "group": "航運業",
      "institutionType": "投信",
      "direction": "同步買超",
      "days": 5,
      "consecutiveBuyDays": 5,
      "streaks": {
        "外資": 1,
        "投信": 5,
        "自營商": 2
      },
      "latestNetBuy": 172,
      "buyVolume": 4282,
      "buyAmount": 0,
      "syncCount": 3,
      "importance": "高",
      "timestamp": "2026/06/23 18:20",
      "tags": [
        "投信",
        "同步買超",
        "航運業",
        "三通",
        "官股企業"
      ],
      "summary": "投信同步買超，近 10 個交易日正買合計 4,282 張，估算金額約 0.00 億元。",
      "event": "投信連買 5 日，近 10 個交易日正買合計 4,282 張；最新日外資 33,755 張、投信 172 張、自營商 3,814 張。",
      "ai": "法人買盤集中在 航運業，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 156819.085,
      "yahooVerification": {
        "status": "matched",
        "source": "https://tw.stock.yahoo.com/quote/2610.TW/institutional-trading",
        "latestNetBuy": 172,
        "days": 5,
        "latestForeign": 33755,
        "latestTrust": 172,
        "latestDealer": 3814
      }
    },
    {
      "id": "inst-2801-20260623",
      "type": "institutional",
      "title": "2801 彰銀",
      "stockCode": "2801",
      "stockName": "彰銀",
      "sector": "金融保險",
      "group": "金融保險",
      "institutionType": "外資",
      "direction": "同步買超",
      "days": 10,
      "consecutiveBuyDays": 10,
      "streaks": {
        "外資": 10,
        "投信": 1,
        "自營商": 3
      },
      "latestNetBuy": 18510,
      "buyVolume": 166757,
      "buyAmount": 0,
      "syncCount": 3,
      "importance": "高",
      "timestamp": "2026/06/23 18:20",
      "tags": [
        "外資",
        "同步買超",
        "金融保險",
        "官股企業",
        "金融業"
      ],
      "summary": "外資同步買超，近 10 個交易日正買合計 166,757 張，估算金額約 0.00 億元。",
      "event": "外資連買 10 日，近 10 個交易日正買合計 166,757 張；最新日外資 18,510 張、投信 1 張、自營商 46 張。",
      "ai": "法人買盤集中在 金融保險，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 169318.692,
      "yahooVerification": {
        "status": "matched",
        "source": "https://tw.stock.yahoo.com/quote/2801.TW/institutional-trading",
        "latestNetBuy": 18510,
        "days": 10,
        "latestForeign": 18510,
        "latestTrust": 1,
        "latestDealer": 46
      }
    },
    {
      "id": "macro-cpi-may-20260610",
      "type": "macro",
      "title": "消費者物價指數 CPI",
      "eventName": "消費者物價指數 CPI",
      "originalEventName": "CPI (May)",
      "sourcePublishTime": "2026/06/10 20:30 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/06/10 20:30",
      "previous": "333.02",
      "forecast": "335.11",
      "actual": "335.12",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏空",
      "impact": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "importance": "高",
      "timestamp": "2026/06/10 20:30",
      "tags": [
        "美國",
        "消費者物價指數",
        "偏空"
      ],
      "summary": "消費者物價指數 CPI 將於 2026/06/10 20:30 公布，市場關注前值 333.02、預期 335.11。",
      "event": "美國 消費者物價指數 CPI，前值 333.02、預期 335.11、實際 335.12。",
      "ai": "目前 AI 判斷為偏空觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "http://www.bls.gov",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    },
    {
      "id": "macro-core-inflation-rate-mom-may-20260610",
      "type": "macro",
      "title": "核心通膨率",
      "eventName": "核心通膨率",
      "originalEventName": "Core Inflation Rate MoM (May)",
      "sourcePublishTime": "2026/06/10 20:30 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/06/10 20:30",
      "previous": "0.4",
      "forecast": "0.3",
      "actual": "0.2",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "importance": "中高",
      "timestamp": "2026/06/10 20:30",
      "tags": [
        "美國",
        "核心通膨率",
        "偏多"
      ],
      "summary": "核心通膨率 將於 2026/06/10 20:30 公布，市場關注前值 0.4、預期 0.3。",
      "event": "美國 核心通膨率，前值 0.4、預期 0.3、實際 0.2。",
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
      "id": "macro-inflation-rate-mom-may-20260610",
      "type": "macro",
      "title": "通膨率",
      "eventName": "通膨率",
      "originalEventName": "Inflation Rate MoM (May)",
      "sourcePublishTime": "2026/06/10 20:30 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/06/10 20:30",
      "previous": "0.6",
      "forecast": "0.5",
      "actual": "0.5",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "importance": "中高",
      "timestamp": "2026/06/10 20:30",
      "tags": [
        "美國",
        "通膨率",
        "中性"
      ],
      "summary": "通膨率 將於 2026/06/10 20:30 公布，市場關注前值 0.6、預期 0.5。",
      "event": "美國 通膨率，前值 0.6、預期 0.5、實際 0.5。",
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
      "id": "macro-adp-employment-change-weekly-20260609",
      "type": "macro",
      "title": "ADP 就業人數",
      "eventName": "ADP 就業人數",
      "originalEventName": "ADP Employment Change Weekly",
      "sourcePublishTime": "2026/06/09 20:15 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/06/09 20:15",
      "previous": "30.5",
      "forecast": "—",
      "actual": "29",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/06/09 20:15",
      "tags": [
        "美國",
        "ADP",
        "中性"
      ],
      "summary": "ADP 就業人數 將於 2026/06/09 20:15 公布，市場關注前值 30.5、預期 —。",
      "event": "美國 ADP 就業人數，前值 30.5、預期 —、實際 29。",
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
      "id": "macro-adp-employment-change-weekly-20260609",
      "type": "macro",
      "title": "ADP 就業人數",
      "eventName": "ADP 就業人數",
      "originalEventName": "ADP Employment Change Weekly",
      "sourcePublishTime": "2026/06/09 20:15 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/06/09 20:15",
      "previous": "30.5",
      "forecast": "—",
      "actual": "29",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/06/09 20:15",
      "tags": [
        "美國",
        "ADP",
        "中性"
      ],
      "summary": "ADP 就業人數 將於 2026/06/09 20:15 公布，市場關注前值 30.5、預期 —。",
      "event": "美國 ADP 就業人數，前值 30.5、預期 —、實際 29。",
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
      "id": "macro-core-inflation-rate-mom-may-20260610",
      "type": "macro",
      "title": "核心通膨率",
      "eventName": "核心通膨率",
      "originalEventName": "Core Inflation Rate MoM (May)",
      "sourcePublishTime": "2026/06/10 20:30 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/06/10 20:30",
      "previous": "0.4",
      "forecast": "0.3",
      "actual": "0.2",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "importance": "中高",
      "timestamp": "2026/06/10 20:30",
      "tags": [
        "美國",
        "核心通膨率",
        "偏多"
      ],
      "summary": "核心通膨率 將於 2026/06/10 20:30 公布，市場關注前值 0.4、預期 0.3。",
      "event": "美國 核心通膨率，前值 0.4、預期 0.3、實際 0.2。",
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
      "id": "macro-inflation-rate-mom-may-20260610",
      "type": "macro",
      "title": "通膨率",
      "eventName": "通膨率",
      "originalEventName": "Inflation Rate MoM (May)",
      "sourcePublishTime": "2026/06/10 20:30 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/06/10 20:30",
      "previous": "0.6",
      "forecast": "0.5",
      "actual": "0.5",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "importance": "中高",
      "timestamp": "2026/06/10 20:30",
      "tags": [
        "美國",
        "通膨率",
        "中性"
      ],
      "summary": "通膨率 將於 2026/06/10 20:30 公布，市場關注前值 0.6、預期 0.5。",
      "event": "美國 通膨率，前值 0.6、預期 0.5、實際 0.5。",
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
      "id": "macro-cpi-may-20260610",
      "type": "macro",
      "title": "消費者物價指數 CPI",
      "eventName": "消費者物價指數 CPI",
      "originalEventName": "CPI (May)",
      "sourcePublishTime": "2026/06/10 20:30 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/06/10 20:30",
      "previous": "333.02",
      "forecast": "335.11",
      "actual": "335.12",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏空",
      "impact": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "importance": "高",
      "timestamp": "2026/06/10 20:30",
      "tags": [
        "美國",
        "消費者物價指數",
        "偏空"
      ],
      "summary": "消費者物價指數 CPI 將於 2026/06/10 20:30 公布，市場關注前值 333.02、預期 335.11。",
      "event": "美國 消費者物價指數 CPI，前值 333.02、預期 335.11、實際 335.12。",
      "ai": "目前 AI 判斷為偏空觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "http://www.bls.gov",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    },
    {
      "id": "macro-ecb-interest-rate-decision-20260611",
      "type": "macro",
      "title": "ECB 利率決議",
      "eventName": "ECB 利率決議",
      "originalEventName": "ECB Interest Rate Decision",
      "sourcePublishTime": "2026/06/11 20:15 Asia/Taipei",
      "country": "歐元區",
      "publishTime": "2026/06/11 20:15",
      "previous": "2.15",
      "forecast": "2.4",
      "actual": "2.4",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響全球資金成本、美元走勢與風險資產評價。",
      "importance": "中高",
      "timestamp": "2026/06/11 20:15",
      "tags": [
        "歐元區",
        "ECB",
        "中性"
      ],
      "summary": "ECB 利率決議 將於 2026/06/11 20:15 公布，市場關注前值 2.15、預期 2.4。",
      "event": "歐元區 ECB 利率決議，前值 2.15、預期 2.4、實際 2.4。",
      "ai": "目前 AI 判斷為中性觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響全球資金成本、美元走勢與風險資產評價。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "https://www.ecb.europa.eu",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    },
    {
      "id": "macro-initial-jobless-claims-jun-06-20260611",
      "type": "macro",
      "title": "初領失業救濟金人數",
      "eventName": "初領失業救濟金人數",
      "originalEventName": "Initial Jobless Claims (Jun/06)",
      "sourcePublishTime": "2026/06/11 20:30 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/06/11 20:30",
      "previous": "225",
      "forecast": "219",
      "actual": "229",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響就業強弱、薪資通膨與聯準會政策預期。",
      "importance": "中高",
      "timestamp": "2026/06/11 20:30",
      "tags": [
        "美國",
        "初領失業救濟金人數",
        "偏多"
      ],
      "summary": "初領失業救濟金人數 將於 2026/06/11 20:30 公布，市場關注前值 225、預期 219。",
      "event": "美國 初領失業救濟金人數，前值 225、預期 219、實際 229。",
      "ai": "目前 AI 判斷為偏多觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響就業強弱、薪資通膨與聯準會政策預期。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "https://www.dol.gov/",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    },
    {
      "id": "macro-core-ppi-mom-may-20260611",
      "type": "macro",
      "title": "生產者物價指數 PPI",
      "eventName": "生產者物價指數 PPI",
      "originalEventName": "Core PPI MoM (May)",
      "sourcePublishTime": "2026/06/11 20:30 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/06/11 20:30",
      "previous": "0.7",
      "forecast": "0.5",
      "actual": "0.4",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏空",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/06/11 20:30",
      "tags": [
        "美國",
        "生產者物價指數",
        "偏空"
      ],
      "summary": "生產者物價指數 PPI 將於 2026/06/11 20:30 公布，市場關注前值 0.7、預期 0.5。",
      "event": "美國 生產者物價指數 PPI，前值 0.7、預期 0.5、實際 0.4。",
      "ai": "目前 AI 判斷為偏空觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
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
      "id": "macro-gdp-3-month-avg-apr-20260612",
      "type": "macro",
      "title": "GDP 經濟成長率",
      "eventName": "GDP 經濟成長率",
      "originalEventName": "GDP 3-Month Avg (Apr)",
      "sourcePublishTime": "2026/06/12 14:00 Asia/Taipei",
      "country": "英國",
      "publishTime": "2026/06/12 14:00",
      "previous": "0.6",
      "forecast": "0.7",
      "actual": "0.7",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響景氣循環、原物料、工業與科技需求預期。",
      "importance": "高",
      "timestamp": "2026/06/12 14:00",
      "tags": [
        "英國",
        "GDP",
        "中性"
      ],
      "summary": "GDP 經濟成長率 將於 2026/06/12 14:00 公布，市場關注前值 0.6、預期 0.7。",
      "event": "英國 GDP 經濟成長率，前值 0.6、預期 0.7、實際 0.7。",
      "ai": "目前 AI 判斷為中性觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響景氣循環、原物料、工業與科技需求預期。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar / 鉅亨網全球經濟指標",
      "sourceUrl": "http://www.ons.gov.uk/",
      "sourceList": [
        "TradingView Economic Calendar",
        "鉅亨網全球經濟指標"
      ]
    }
  ]
};
