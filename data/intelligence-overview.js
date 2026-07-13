window.IntelligenceOverviewData = {
  "updatedAt": "2026/07/13 18:30",
  "status": "運作中",
  "cards": [
    {
      "label": "今日偵測情報",
      "value": 257,
      "unit": "筆",
      "icon": "file"
    },
    {
      "label": "高重要度訊號",
      "value": 76,
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
      "value": "ECB Forum on Central Banking",
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
          "37 筆"
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
          "12 個"
        ],
        [
          "下一事件",
          "ECB Forum on Central Banking"
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
      "id": "inst-2891-20260713",
      "type": "institutional",
      "title": "2891 中信金",
      "stockCode": "2891",
      "stockName": "中信金",
      "sector": "金融保險",
      "group": "金融保險",
      "institutionType": "投信",
      "direction": "連買",
      "days": 7,
      "consecutiveBuyDays": 7,
      "streaks": {
        "外資": 1,
        "投信": 7,
        "自營商": 0
      },
      "latestNetBuy": 71,
      "buyVolume": 28994,
      "buyAmount": 0,
      "syncCount": 2,
      "importance": "高",
      "timestamp": "2026/07/13 18:20",
      "tags": [
        "投信",
        "連買",
        "金融保險",
        "金融業",
        "銀行"
      ],
      "summary": "投信連買，近 8 個交易日正買合計 28,994 張，估算金額約 0.00 億元。",
      "event": "投信連買 7 日，近 8 個交易日正買合計 28,994 張；最新日外資 41,021 張、投信 71 張、自營商 -15,363 張。",
      "ai": "法人買盤集中在 金融保險，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 82018.279,
      "yahooVerification": {
        "status": "matched",
        "source": "https://tw.stock.yahoo.com/quote/2891.TW/institutional-trading",
        "latestNetBuy": 71,
        "days": 7,
        "latestForeign": 41021,
        "latestTrust": 71,
        "latestDealer": -15363
      }
    },
    {
      "id": "inst-1402-20260713",
      "type": "institutional",
      "title": "1402 遠東新",
      "stockCode": "1402",
      "stockName": "遠東新",
      "sector": "紡織纖維",
      "group": "紡織纖維",
      "institutionType": "投信",
      "direction": "連買",
      "days": 8,
      "consecutiveBuyDays": 8,
      "streaks": {
        "外資": 0,
        "投信": 8,
        "自營商": 0
      },
      "latestNetBuy": 5302,
      "buyVolume": 24335,
      "buyAmount": 0,
      "syncCount": 1,
      "importance": "高",
      "timestamp": "2026/07/13 18:20",
      "tags": [
        "投信",
        "連買",
        "紡織纖維",
        "S&P 台商收成指數",
        "中國"
      ],
      "summary": "投信連買，近 8 個交易日正買合計 24,335 張，估算金額約 0.00 億元。",
      "event": "投信連買 8 日，近 8 個交易日正買合計 24,335 張；最新日外資 -18,749 張、投信 5,302 張、自營商 -3,363 張。",
      "ai": "法人買盤集中在 紡織纖維，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 34390.462,
      "yahooVerification": {
        "status": "matched",
        "source": "https://tw.stock.yahoo.com/quote/1402.TW/institutional-trading",
        "latestNetBuy": 5302,
        "days": 8,
        "latestForeign": -18749,
        "latestTrust": 5302,
        "latestDealer": -3363
      }
    },
    {
      "id": "inst-4958-20260713",
      "type": "institutional",
      "title": "4958 臻鼎-KY",
      "stockCode": "4958",
      "stockName": "臻鼎-KY",
      "sector": "電子零組件",
      "group": "電子零組件",
      "institutionType": "外資",
      "direction": "同步買超",
      "days": 3,
      "consecutiveBuyDays": 3,
      "streaks": {
        "外資": 3,
        "投信": 2,
        "自營商": 1
      },
      "latestNetBuy": 21045,
      "buyVolume": 23558,
      "buyAmount": 0,
      "syncCount": 3,
      "importance": "高",
      "timestamp": "2026/07/13 18:20",
      "tags": [
        "外資",
        "同步買超",
        "電子零組件",
        "iPad Pro",
        "iPhone"
      ],
      "summary": "外資同步買超，近 8 個交易日正買合計 23,558 張，估算金額約 0.00 億元。",
      "event": "外資連買 3 日，近 8 個交易日正買合計 23,558 張；最新日外資 21,045 張、投信 4,007 張、自營商 443 張。",
      "ai": "法人買盤集中在 電子零組件，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 29593.747,
      "yahooVerification": {
        "status": "matched",
        "source": "https://tw.stock.yahoo.com/quote/4958.TW/institutional-trading",
        "latestNetBuy": 21045,
        "days": 3,
        "latestForeign": 21045,
        "latestTrust": 4007,
        "latestDealer": 443
      }
    },
    {
      "id": "inst-2382-20260713",
      "type": "institutional",
      "title": "2382 廣達",
      "stockCode": "2382",
      "stockName": "廣達",
      "sector": "電腦及週邊設備",
      "group": "電腦及週邊設備",
      "institutionType": "投信",
      "direction": "同步買超",
      "days": 8,
      "consecutiveBuyDays": 8,
      "streaks": {
        "外資": 1,
        "投信": 8,
        "自營商": 2
      },
      "latestNetBuy": 2054,
      "buyVolume": 15994,
      "buyAmount": 59.74,
      "syncCount": 3,
      "importance": "高",
      "timestamp": "2026/07/13 18:20",
      "tags": [
        "投信",
        "同步買超",
        "電腦及週邊設備",
        "5G",
        "APPLE概念"
      ],
      "summary": "投信同步買超，近 8 個交易日正買合計 15,994 張，估算金額約 59.74 億元。",
      "event": "投信連買 8 日，近 8 個交易日正買合計 15,994 張；最新日外資 479 張、投信 2,054 張、自營商 185 張。",
      "ai": "法人買盤集中在 電腦及週邊設備，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 21331.387,
      "yahooVerification": {
        "status": "days-different",
        "source": "https://tw.stock.yahoo.com/quote/2382.TW/institutional-trading",
        "latestNetBuy": 2054,
        "days": 36,
        "latestForeign": 479,
        "latestTrust": 2054,
        "latestDealer": 185
      }
    },
    {
      "id": "macro-brc-shop-price-inflation-jun-20260630",
      "type": "macro",
      "title": "BRC Shop Price Inflation (Jun)",
      "eventName": "BRC Shop Price Inflation (Jun)",
      "originalEventName": "BRC Shop Price Inflation (Jun)",
      "sourcePublishTime": "2026/06/30 07:01 Asia/Taipei",
      "country": "英國",
      "publishTime": "2026/06/30 07:01",
      "previous": "1.2",
      "forecast": "1.3",
      "actual": "1.2",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "importance": "中高",
      "timestamp": "2026/06/30 07:01",
      "tags": [
        "英國",
        "BRC",
        "偏多"
      ],
      "summary": "BRC Shop Price Inflation (Jun) 將於 2026/06/30 07:01 公布，市場關注前值 1.2、預期 1.3。",
      "event": "英國 BRC Shop Price Inflation (Jun)，前值 1.2、預期 1.3、實際 1.2。",
      "ai": "目前 AI 判斷為偏多觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "https://brc.org.uk/",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    },
    {
      "id": "macro-dallas-fed-manufacturing-index-jun-20260629",
      "type": "macro",
      "title": "Dallas Fed Manufacturing Index (Jun)",
      "eventName": "Dallas Fed Manufacturing Index (Jun)",
      "originalEventName": "Dallas Fed Manufacturing Index (Jun)",
      "sourcePublishTime": "2026/06/29 22:30 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/06/29 22:30",
      "previous": "0.4",
      "forecast": "—",
      "actual": null,
      "status": "等待公布",
      "statusLevel": "upcoming",
      "direction": "中性",
      "impact": "影響全球資金成本、美元走勢與風險資產評價。",
      "importance": "中高",
      "timestamp": "2026/06/29 22:30",
      "tags": [
        "美國",
        "Dallas",
        "中性"
      ],
      "summary": "Dallas Fed Manufacturing Index (Jun) 將於 2026/06/29 22:30 公布，市場關注前值 0.4、預期 —。",
      "event": "美國 Dallas Fed Manufacturing Index (Jun)，前值 0.4、預期 —、實際 尚未公布。",
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
      "id": "macro-services-sentiment-jun-20260629",
      "type": "macro",
      "title": "Services Sentiment (Jun)",
      "eventName": "Services Sentiment (Jun)",
      "originalEventName": "Services Sentiment (Jun)",
      "sourcePublishTime": "2026/06/29 17:00 Asia/Taipei",
      "country": "歐元區",
      "publishTime": "2026/06/29 17:00",
      "previous": "2.6",
      "forecast": "3",
      "actual": "3.2",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/06/29 17:00",
      "tags": [
        "歐元區",
        "Services",
        "偏多"
      ],
      "summary": "Services Sentiment (Jun) 將於 2026/06/29 17:00 公布，市場關注前值 2.6、預期 3。",
      "event": "歐元區 Services Sentiment (Jun)，前值 2.6、預期 3、實際 3.2。",
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
      "id": "macro-ecb-forum-on-central-banking-20260629",
      "type": "macro",
      "title": "ECB Forum on Central Banking",
      "eventName": "ECB Forum on Central Banking",
      "originalEventName": "ECB Forum on Central Banking",
      "sourcePublishTime": "2026/06/29 08:00 Asia/Taipei",
      "country": "歐元區",
      "publishTime": "2026/06/29 08:00",
      "previous": "—",
      "forecast": "—",
      "actual": null,
      "status": "等待公布",
      "statusLevel": "upcoming",
      "direction": "中性",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/06/29 08:00",
      "tags": [
        "歐元區",
        "ECB",
        "中性"
      ],
      "summary": "ECB Forum on Central Banking 將於 2026/06/29 08:00 公布，市場關注前值 —、預期 —。",
      "event": "歐元區 ECB Forum on Central Banking，前值 —、預期 —、實際 尚未公布。",
      "ai": "目前 AI 判斷為中性觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響市場風險偏好與資金輪動。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "https://www.ecb.europa.eu",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    }
  ],
  "macroEvents": [
    {
      "id": "macro-ecb-forum-on-central-banking-20260629",
      "type": "macro",
      "title": "ECB Forum on Central Banking",
      "eventName": "ECB Forum on Central Banking",
      "originalEventName": "ECB Forum on Central Banking",
      "sourcePublishTime": "2026/06/29 08:00 Asia/Taipei",
      "country": "歐元區",
      "publishTime": "2026/06/29 08:00",
      "previous": "—",
      "forecast": "—",
      "actual": null,
      "status": "等待公布",
      "statusLevel": "upcoming",
      "direction": "中性",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/06/29 08:00",
      "tags": [
        "歐元區",
        "ECB",
        "中性"
      ],
      "summary": "ECB Forum on Central Banking 將於 2026/06/29 08:00 公布，市場關注前值 —、預期 —。",
      "event": "歐元區 ECB Forum on Central Banking，前值 —、預期 —、實際 尚未公布。",
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
      "id": "macro-services-sentiment-jun-20260629",
      "type": "macro",
      "title": "Services Sentiment (Jun)",
      "eventName": "Services Sentiment (Jun)",
      "originalEventName": "Services Sentiment (Jun)",
      "sourcePublishTime": "2026/06/29 17:00 Asia/Taipei",
      "country": "歐元區",
      "publishTime": "2026/06/29 17:00",
      "previous": "2.6",
      "forecast": "3",
      "actual": "3.2",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/06/29 17:00",
      "tags": [
        "歐元區",
        "Services",
        "偏多"
      ],
      "summary": "Services Sentiment (Jun) 將於 2026/06/29 17:00 公布，市場關注前值 2.6、預期 3。",
      "event": "歐元區 Services Sentiment (Jun)，前值 2.6、預期 3、實際 3.2。",
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
      "id": "macro-dallas-fed-manufacturing-index-jun-20260629",
      "type": "macro",
      "title": "Dallas Fed Manufacturing Index (Jun)",
      "eventName": "Dallas Fed Manufacturing Index (Jun)",
      "originalEventName": "Dallas Fed Manufacturing Index (Jun)",
      "sourcePublishTime": "2026/06/29 22:30 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/06/29 22:30",
      "previous": "0.4",
      "forecast": "—",
      "actual": null,
      "status": "等待公布",
      "statusLevel": "upcoming",
      "direction": "中性",
      "impact": "影響全球資金成本、美元走勢與風險資產評價。",
      "importance": "中高",
      "timestamp": "2026/06/29 22:30",
      "tags": [
        "美國",
        "Dallas",
        "中性"
      ],
      "summary": "Dallas Fed Manufacturing Index (Jun) 將於 2026/06/29 22:30 公布，市場關注前值 0.4、預期 —。",
      "event": "美國 Dallas Fed Manufacturing Index (Jun)，前值 0.4、預期 —、實際 尚未公布。",
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
      "id": "macro-brc-shop-price-inflation-jun-20260630",
      "type": "macro",
      "title": "BRC Shop Price Inflation (Jun)",
      "eventName": "BRC Shop Price Inflation (Jun)",
      "originalEventName": "BRC Shop Price Inflation (Jun)",
      "sourcePublishTime": "2026/06/30 07:01 Asia/Taipei",
      "country": "英國",
      "publishTime": "2026/06/30 07:01",
      "previous": "1.2",
      "forecast": "1.3",
      "actual": "1.2",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "importance": "中高",
      "timestamp": "2026/06/30 07:01",
      "tags": [
        "英國",
        "BRC",
        "偏多"
      ],
      "summary": "BRC Shop Price Inflation (Jun) 將於 2026/06/30 07:01 公布，市場關注前值 1.2、預期 1.3。",
      "event": "英國 BRC Shop Price Inflation (Jun)，前值 1.2、預期 1.3、實際 1.2。",
      "ai": "目前 AI 判斷為偏多觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "https://brc.org.uk/",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    },
    {
      "id": "macro-ecb-forum-on-central-banking-20260630",
      "type": "macro",
      "title": "ECB Forum on Central Banking",
      "eventName": "ECB Forum on Central Banking",
      "originalEventName": "ECB Forum on Central Banking",
      "sourcePublishTime": "2026/06/30 08:00 Asia/Taipei",
      "country": "歐元區",
      "publishTime": "2026/06/30 08:00",
      "previous": "—",
      "forecast": "—",
      "actual": null,
      "status": "等待公布",
      "statusLevel": "upcoming",
      "direction": "中性",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/06/30 08:00",
      "tags": [
        "歐元區",
        "ECB",
        "中性"
      ],
      "summary": "ECB Forum on Central Banking 將於 2026/06/30 08:00 公布，市場關注前值 —、預期 —。",
      "event": "歐元區 ECB Forum on Central Banking，前值 —、預期 —、實際 尚未公布。",
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
      "id": "macro-gdp-growth-rate-yoy-final-q1-20260630",
      "type": "macro",
      "title": "GDP 經濟成長率",
      "eventName": "GDP 經濟成長率",
      "originalEventName": "GDP Growth Rate YoY Final (Q1)",
      "sourcePublishTime": "2026/06/30 14:00 Asia/Taipei",
      "country": "英國",
      "publishTime": "2026/06/30 14:00",
      "previous": "0.9",
      "forecast": "1.1",
      "actual": "0.9",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏空",
      "impact": "影響全球資金成本、美元走勢與風險資產評價。",
      "importance": "高",
      "timestamp": "2026/06/30 14:00",
      "tags": [
        "英國",
        "GDP",
        "偏空"
      ],
      "summary": "GDP 經濟成長率 將於 2026/06/30 14:00 公布，市場關注前值 0.9、預期 1.1。",
      "event": "英國 GDP 經濟成長率，前值 0.9、預期 1.1、實際 0.9。",
      "ai": "目前 AI 判斷為偏空觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響全球資金成本、美元走勢與風險資產評價。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar / 鉅亨網全球經濟指標",
      "sourceUrl": "http://www.ons.gov.uk/",
      "sourceList": [
        "TradingView Economic Calendar",
        "鉅亨網全球經濟指標"
      ]
    },
    {
      "id": "macro-harmonised-inflation-rate-mom-prel-jun-20260630",
      "type": "macro",
      "title": "通膨率",
      "eventName": "通膨率",
      "originalEventName": "Harmonised Inflation Rate MoM Prel (Jun)",
      "sourcePublishTime": "2026/06/30 14:45 Asia/Taipei",
      "country": "法國",
      "publishTime": "2026/06/30 14:45",
      "previous": "0.1",
      "forecast": "2.1",
      "actual": "-0.3",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "importance": "中高",
      "timestamp": "2026/06/30 14:45",
      "tags": [
        "法國",
        "通膨率",
        "中性"
      ],
      "summary": "通膨率 將於 2026/06/30 14:45 公布，市場關注前值 0.1、預期 —。",
      "event": "法國 通膨率，前值 0.1、預期 —、實際 -0.3。",
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
      "id": "macro-ppi-yoy-may-20260630",
      "type": "macro",
      "title": "生產者物價指數 PPI",
      "eventName": "生產者物價指數 PPI",
      "originalEventName": "PPI YoY (May)",
      "sourcePublishTime": "2026/06/30 14:45 Asia/Taipei",
      "country": "法國",
      "publishTime": "2026/06/30 14:45",
      "previous": "2.3",
      "forecast": "1.5",
      "actual": "3",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/06/30 14:45",
      "tags": [
        "法國",
        "生產者物價指數",
        "中性"
      ],
      "summary": "生產者物價指數 PPI 將於 2026/06/30 14:45 公布，市場關注前值 2.3、預期 —。",
      "event": "法國 生產者物價指數 PPI，前值 2.3、預期 —、實際 3。",
      "ai": "目前 AI 判斷為中性觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響市場風險偏好與資金輪動。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar / 鉅亨網全球經濟指標",
      "sourceUrl": "https://www.insee.fr",
      "sourceList": [
        "TradingView Economic Calendar",
        "鉅亨網全球經濟指標"
      ]
    }
  ]
};
