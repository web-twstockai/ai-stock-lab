window.IntelligenceOverviewData = {
  "updatedAt": "2026/06/30 18:30",
  "status": "運作中",
  "cards": [
    {
      "label": "今日偵測情報",
      "value": 266,
      "unit": "筆",
      "icon": "file"
    },
    {
      "label": "高重要度訊號",
      "value": 80,
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
          "38 筆"
        ],
        [
          "三大法人同步買",
          "13 筆"
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
          "51 個"
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
      "id": "inst-1303-20260630",
      "type": "institutional",
      "title": "1303 南亞",
      "stockCode": "1303",
      "stockName": "南亞",
      "sector": "塑膠工業",
      "group": "塑膠工業",
      "institutionType": "投信",
      "direction": "同步買超",
      "days": 7,
      "consecutiveBuyDays": 7,
      "streaks": {
        "外資": 1,
        "投信": 7,
        "自營商": 1
      },
      "latestNetBuy": 3288,
      "buyVolume": 84578,
      "buyAmount": 128.14,
      "syncCount": 3,
      "importance": "高",
      "timestamp": "2026/06/30 18:20",
      "tags": [
        "投信",
        "同步買超",
        "塑膠工業",
        "APPLE概念",
        "越南設廠"
      ],
      "summary": "投信同步買超，近 9 個交易日正買合計 84,578 張，估算金額約 128.14 億元。",
      "event": "投信連買 7 日，近 9 個交易日正買合計 84,578 張；最新日外資 4,065 張、投信 3,288 張、自營商 489 張。",
      "ai": "法人買盤集中在 塑膠工業，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 126743.39,
      "yahooVerification": {
        "status": "days-different",
        "source": "https://tw.stock.yahoo.com/quote/1303.TW/institutional-trading",
        "latestNetBuy": 3288,
        "days": 8,
        "latestForeign": 4065,
        "latestTrust": 3288,
        "latestDealer": 489
      }
    },
    {
      "id": "inst-2634-20260630",
      "type": "institutional",
      "title": "2634 漢翔",
      "stockCode": "2634",
      "stockName": "漢翔",
      "sector": "航運業",
      "group": "航運業",
      "institutionType": "自營商",
      "direction": "同步買超",
      "days": 2,
      "consecutiveBuyDays": 2,
      "streaks": {
        "外資": 1,
        "投信": 1,
        "自營商": 2
      },
      "latestNetBuy": 649,
      "buyVolume": 2491,
      "buyAmount": 0,
      "syncCount": 3,
      "importance": "高",
      "timestamp": "2026/06/30 18:20",
      "tags": [
        "自營商",
        "同步買超",
        "航運業",
        "官股企業",
        "無人機"
      ],
      "summary": "自營商同步買超，近 9 個交易日正買合計 2,491 張，估算金額約 0.00 億元。",
      "event": "自營商連買 2 日，近 9 個交易日正買合計 2,491 張；最新日外資 18,919 張、投信 5 張、自營商 649 張。",
      "ai": "法人買盤集中在 航運業，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 27035.171,
      "yahooVerification": {
        "status": "days-different",
        "source": "https://tw.stock.yahoo.com/quote/2634.TW/institutional-trading",
        "latestNetBuy": 649,
        "days": 3,
        "latestForeign": 18919,
        "latestTrust": 5,
        "latestDealer": 649
      }
    },
    {
      "id": "inst-3481-20260630",
      "type": "institutional",
      "title": "3481 群創",
      "stockCode": "3481",
      "stockName": "群創",
      "sector": "光電業",
      "group": "光電業",
      "institutionType": "投信",
      "direction": "同步買超",
      "days": 7,
      "consecutiveBuyDays": 7,
      "streaks": {
        "外資": 1,
        "投信": 7,
        "自營商": 4
      },
      "latestNetBuy": 244,
      "buyVolume": 43469,
      "buyAmount": 0,
      "syncCount": 3,
      "importance": "高",
      "timestamp": "2026/06/30 18:20",
      "tags": [
        "投信",
        "同步買超",
        "光電業",
        "Android",
        "AppleCar"
      ],
      "summary": "投信同步買超，近 9 個交易日正買合計 43,469 張，估算金額約 0.00 億元。",
      "event": "投信連買 7 日，近 9 個交易日正買合計 43,469 張；最新日外資 14,821 張、投信 244 張、自營商 6,012 張。",
      "ai": "法人買盤集中在 光電業，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 101000.608,
      "yahooVerification": {
        "status": "days-different",
        "source": "https://tw.stock.yahoo.com/quote/3481.TW/institutional-trading",
        "latestNetBuy": 244,
        "days": 8,
        "latestForeign": 14821,
        "latestTrust": 244,
        "latestDealer": 6012
      }
    },
    {
      "id": "inst-2303-20260630",
      "type": "institutional",
      "title": "2303 聯電",
      "stockCode": "2303",
      "stockName": "聯電",
      "sector": "半導體",
      "group": "半導體",
      "institutionType": "外資",
      "direction": "連買",
      "days": 5,
      "consecutiveBuyDays": 5,
      "streaks": {
        "外資": 5,
        "投信": 0,
        "自營商": 1
      },
      "latestNetBuy": 35206,
      "buyVolume": 187034,
      "buyAmount": 306.74,
      "syncCount": 2,
      "importance": "高",
      "timestamp": "2026/06/30 18:20",
      "tags": [
        "外資",
        "連買",
        "半導體",
        "手機",
        "車用電子相關"
      ],
      "summary": "外資連買，近 9 個交易日正買合計 187,034 張，估算金額約 306.74 億元。",
      "event": "外資連買 5 日，近 9 個交易日正買合計 187,034 張；最新日外資 35,206 張、投信 -74,093 張、自營商 5,133 張。",
      "ai": "法人買盤集中在 半導體，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 249096.909,
      "yahooVerification": {
        "status": "days-different",
        "source": "https://tw.stock.yahoo.com/quote/2303.TW/institutional-trading",
        "latestNetBuy": 35206,
        "days": 2,
        "latestForeign": 35206,
        "latestTrust": -74093,
        "latestDealer": 5133
      }
    },
    {
      "id": "macro-ppi-core-output-mom-may-20260617",
      "type": "macro",
      "title": "生產者物價指數 PPI",
      "eventName": "生產者物價指數 PPI",
      "originalEventName": "PPI Core Output MoM (May)",
      "sourcePublishTime": "2026/06/17 14:00 Asia/Taipei",
      "country": "英國",
      "publishTime": "2026/06/17 14:00",
      "previous": "0.9",
      "forecast": "0.4",
      "actual": "0.8",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/06/17 14:00",
      "tags": [
        "英國",
        "生產者物價指數",
        "偏多"
      ],
      "summary": "生產者物價指數 PPI 將於 2026/06/17 14:00 公布，市場關注前值 0.9、預期 0.4。",
      "event": "英國 生產者物價指數 PPI，前值 0.9、預期 0.4、實際 0.8。",
      "ai": "目前 AI 判斷為偏多觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
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
      "id": "macro-inflation-rate-mom-may-20260617",
      "type": "macro",
      "title": "通膨率",
      "eventName": "通膨率",
      "originalEventName": "Inflation Rate MoM (May)",
      "sourcePublishTime": "2026/06/17 14:00 Asia/Taipei",
      "country": "英國",
      "publishTime": "2026/06/17 14:00",
      "previous": "0.7",
      "forecast": "0.4",
      "actual": "0.2",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "importance": "中高",
      "timestamp": "2026/06/17 14:00",
      "tags": [
        "英國",
        "通膨率",
        "偏多"
      ],
      "summary": "通膨率 將於 2026/06/17 14:00 公布，市場關注前值 0.7、預期 0.4。",
      "event": "英國 通膨率，前值 0.7、預期 0.4、實際 0.2。",
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
      "id": "macro-core-inflation-rate-yoy-may-20260617",
      "type": "macro",
      "title": "核心通膨率",
      "eventName": "核心通膨率",
      "originalEventName": "Core Inflation Rate YoY (May)",
      "sourcePublishTime": "2026/06/17 14:00 Asia/Taipei",
      "country": "英國",
      "publishTime": "2026/06/17 14:00",
      "previous": "2.5",
      "forecast": "2.7",
      "actual": "2.6",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "importance": "中高",
      "timestamp": "2026/06/17 14:00",
      "tags": [
        "英國",
        "核心通膨率",
        "偏多"
      ],
      "summary": "核心通膨率 將於 2026/06/17 14:00 公布，市場關注前值 2.5、預期 2.7。",
      "event": "英國 核心通膨率，前值 2.5、預期 2.7、實際 2.6。",
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
      "id": "macro-adp-employment-change-weekly-20260616",
      "type": "macro",
      "title": "ADP 就業人數",
      "eventName": "ADP 就業人數",
      "originalEventName": "ADP Employment Change Weekly",
      "sourcePublishTime": "2026/06/16 20:15 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/06/16 20:15",
      "previous": "29",
      "forecast": "—",
      "actual": "25.5",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/06/16 20:15",
      "tags": [
        "美國",
        "ADP",
        "中性"
      ],
      "summary": "ADP 就業人數 將於 2026/06/16 20:15 公布，市場關注前值 29、預期 —。",
      "event": "美國 ADP 就業人數，前值 29、預期 —、實際 25.5。",
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
      "id": "macro-adp-employment-change-weekly-20260616",
      "type": "macro",
      "title": "ADP 就業人數",
      "eventName": "ADP 就業人數",
      "originalEventName": "ADP Employment Change Weekly",
      "sourcePublishTime": "2026/06/16 20:15 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/06/16 20:15",
      "previous": "29",
      "forecast": "—",
      "actual": "25.5",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/06/16 20:15",
      "tags": [
        "美國",
        "ADP",
        "中性"
      ],
      "summary": "ADP 就業人數 將於 2026/06/16 20:15 公布，市場關注前值 29、預期 —。",
      "event": "美國 ADP 就業人數，前值 29、預期 —、實際 25.5。",
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
      "id": "macro-ppi-core-output-mom-may-20260617",
      "type": "macro",
      "title": "生產者物價指數 PPI",
      "eventName": "生產者物價指數 PPI",
      "originalEventName": "PPI Core Output MoM (May)",
      "sourcePublishTime": "2026/06/17 14:00 Asia/Taipei",
      "country": "英國",
      "publishTime": "2026/06/17 14:00",
      "previous": "0.9",
      "forecast": "0.4",
      "actual": "0.8",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/06/17 14:00",
      "tags": [
        "英國",
        "生產者物價指數",
        "偏多"
      ],
      "summary": "生產者物價指數 PPI 將於 2026/06/17 14:00 公布，市場關注前值 0.9、預期 0.4。",
      "event": "英國 生產者物價指數 PPI，前值 0.9、預期 0.4、實際 0.8。",
      "ai": "目前 AI 判斷為偏多觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
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
      "id": "macro-inflation-rate-mom-may-20260617",
      "type": "macro",
      "title": "通膨率",
      "eventName": "通膨率",
      "originalEventName": "Inflation Rate MoM (May)",
      "sourcePublishTime": "2026/06/17 14:00 Asia/Taipei",
      "country": "英國",
      "publishTime": "2026/06/17 14:00",
      "previous": "0.7",
      "forecast": "0.4",
      "actual": "0.2",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "importance": "中高",
      "timestamp": "2026/06/17 14:00",
      "tags": [
        "英國",
        "通膨率",
        "偏多"
      ],
      "summary": "通膨率 將於 2026/06/17 14:00 公布，市場關注前值 0.7、預期 0.4。",
      "event": "英國 通膨率，前值 0.7、預期 0.4、實際 0.2。",
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
      "id": "macro-core-inflation-rate-yoy-may-20260617",
      "type": "macro",
      "title": "核心通膨率",
      "eventName": "核心通膨率",
      "originalEventName": "Core Inflation Rate YoY (May)",
      "sourcePublishTime": "2026/06/17 14:00 Asia/Taipei",
      "country": "英國",
      "publishTime": "2026/06/17 14:00",
      "previous": "2.5",
      "forecast": "2.7",
      "actual": "2.6",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "importance": "中高",
      "timestamp": "2026/06/17 14:00",
      "tags": [
        "英國",
        "核心通膨率",
        "偏多"
      ],
      "summary": "核心通膨率 將於 2026/06/17 14:00 公布，市場關注前值 2.5、預期 2.7。",
      "event": "英國 核心通膨率，前值 2.5、預期 2.7、實際 2.6。",
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
      "id": "macro-cpi-5-20260617",
      "type": "macro",
      "title": "消費者物價指數 CPI",
      "eventName": "消費者物價指數 CPI",
      "originalEventName": "居民消費價格指數(CPI) (同比) (5月)",
      "sourcePublishTime": "2026/06/17 14:00 Asia/Taipei",
      "country": "英國",
      "publishTime": "2026/06/17 14:00",
      "previous": "2.8%",
      "forecast": "3.0%",
      "actual": "2.8%",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "importance": "高",
      "timestamp": "2026/06/17 14:00",
      "tags": [
        "英國",
        "消費者物價指數",
        "偏多"
      ],
      "summary": "消費者物價指數 CPI 將於 2026/06/17 14:00 公布，市場關注前值 2.8%、預期 3.0%。",
      "event": "英國 消費者物價指數 CPI，前值 2.8%、預期 3.0%、實際 2.8%。",
      "ai": "目前 AI 判斷為偏多觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "Investing.com Economic Calendar",
      "sourceUrl": "https://hk.investing.com/economic-calendar/550356",
      "sourceList": [
        "Investing.com Economic Calendar"
      ]
    },
    {
      "id": "macro-inflation-rate-mom-final-may-20260617",
      "type": "macro",
      "title": "通膨率",
      "eventName": "通膨率",
      "originalEventName": "Inflation Rate MoM Final (May)",
      "sourcePublishTime": "2026/06/17 17:00 Asia/Taipei",
      "country": "歐元區",
      "publishTime": "2026/06/17 17:00",
      "previous": "1",
      "forecast": "0.1",
      "actual": "0.1",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "importance": "中高",
      "timestamp": "2026/06/17 17:00",
      "tags": [
        "歐元區",
        "通膨率",
        "中性"
      ],
      "summary": "通膨率 將於 2026/06/17 17:00 公布，市場關注前值 1、預期 0.1。",
      "event": "歐元區 通膨率，前值 1、預期 0.1、實際 0.1。",
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
      "id": "macro-cpi-final-may-20260617",
      "type": "macro",
      "title": "消費者物價指數 CPI",
      "eventName": "消費者物價指數 CPI",
      "originalEventName": "CPI Final (May)",
      "sourcePublishTime": "2026/06/17 17:00 Asia/Taipei",
      "country": "歐元區",
      "publishTime": "2026/06/17 17:00",
      "previous": "103.04",
      "forecast": "103.15",
      "actual": "103.13",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "importance": "高",
      "timestamp": "2026/06/17 17:00",
      "tags": [
        "歐元區",
        "消費者物價指數",
        "偏多"
      ],
      "summary": "消費者物價指數 CPI 將於 2026/06/17 17:00 公布，市場關注前值 103.04、預期 103.15。",
      "event": "歐元區 消費者物價指數 CPI，前值 103.04、預期 103.15、實際 103.13。",
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
      "id": "macro-core-inflation-rate-yoy-final-may-20260617",
      "type": "macro",
      "title": "核心通膨率",
      "eventName": "核心通膨率",
      "originalEventName": "Core Inflation Rate YoY Final (May)",
      "sourcePublishTime": "2026/06/17 17:00 Asia/Taipei",
      "country": "歐元區",
      "publishTime": "2026/06/17 17:00",
      "previous": "2.2",
      "forecast": "2.5",
      "actual": "2.6",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏空",
      "impact": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "importance": "中高",
      "timestamp": "2026/06/17 17:00",
      "tags": [
        "歐元區",
        "核心通膨率",
        "偏空"
      ],
      "summary": "核心通膨率 將於 2026/06/17 17:00 公布，市場關注前值 2.2、預期 2.5。",
      "event": "歐元區 核心通膨率，前值 2.2、預期 2.5、實際 2.6。",
      "ai": "目前 AI 判斷為偏空觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
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
