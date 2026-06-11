window.IntelligenceOverviewData = {
  "updatedAt": "2026/06/11 18:30",
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
      "value": 90,
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
      "value": "ECB Monetary Policy Meeting Accounts",
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
          "20 個"
        ],
        [
          "下一事件",
          "ECB Monetary Policy Meeting Accounts"
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
      "id": "inst-2890-20260611",
      "type": "institutional",
      "title": "2890 永豐金",
      "stockCode": "2890",
      "stockName": "永豐金",
      "sector": "金融保險",
      "group": "金融保險",
      "institutionType": "投信",
      "direction": "同步買超",
      "days": 10,
      "consecutiveBuyDays": 10,
      "streaks": {
        "外資": 1,
        "投信": 10,
        "自營商": 3
      },
      "latestNetBuy": 1021,
      "buyVolume": 5818,
      "buyAmount": 0,
      "syncCount": 3,
      "importance": "高",
      "timestamp": "2026/06/11 18:20",
      "tags": [
        "投信",
        "同步買超",
        "金融保險",
        "電子商務及延伸",
        "金融業"
      ],
      "summary": "投信同步買超，近 10 個交易日正買合計 5,818 張，估算金額約 0.00 億元。",
      "event": "投信連買 10 日，近 10 個交易日正買合計 5,818 張；最新日外資 13,608 張、投信 1,021 張、自營商 1,848 張。",
      "ai": "法人買盤集中在 金融保險，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 211771.147,
      "yahooVerification": {
        "status": "days-different",
        "source": "https://tw.stock.yahoo.com/quote/2890.TW/institutional-trading",
        "latestNetBuy": 1021,
        "days": 12,
        "latestForeign": 13608,
        "latestTrust": 1021,
        "latestDealer": 1848
      }
    },
    {
      "id": "inst-2002-20260611",
      "type": "institutional",
      "title": "2002 中鋼",
      "stockCode": "2002",
      "stockName": "中鋼",
      "sector": "鋼鐵工業",
      "group": "鋼鐵工業",
      "institutionType": "投信",
      "direction": "連買",
      "days": 10,
      "consecutiveBuyDays": 10,
      "streaks": {
        "外資": 0,
        "投信": 10,
        "自營商": 2
      },
      "latestNetBuy": 399,
      "buyVolume": 2978,
      "buyAmount": 0,
      "syncCount": 2,
      "importance": "高",
      "timestamp": "2026/06/11 18:20",
      "tags": [
        "投信",
        "連買",
        "鋼鐵工業",
        "印度設廠",
        "官股企業"
      ],
      "summary": "投信連買，近 10 個交易日正買合計 2,978 張，估算金額約 0.00 億元。",
      "event": "投信連買 10 日，近 10 個交易日正買合計 2,978 張；最新日外資 -15,979 張、投信 399 張、自營商 1,076 張。",
      "ai": "法人買盤集中在 鋼鐵工業，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 42336.159,
      "yahooVerification": {
        "status": "matched",
        "source": "https://tw.stock.yahoo.com/quote/2002.TW/institutional-trading",
        "latestNetBuy": 399,
        "days": 10,
        "latestForeign": -15979,
        "latestTrust": 399,
        "latestDealer": 1076
      }
    },
    {
      "id": "inst-1303-20260611",
      "type": "institutional",
      "title": "1303 南亞",
      "stockCode": "1303",
      "stockName": "南亞",
      "sector": "塑膠工業",
      "group": "塑膠工業",
      "institutionType": "投信",
      "direction": "連買",
      "days": 10,
      "consecutiveBuyDays": 10,
      "streaks": {
        "外資": 0,
        "投信": 10,
        "自營商": 0
      },
      "latestNetBuy": 2381,
      "buyVolume": 18143,
      "buyAmount": 17.2,
      "syncCount": 1,
      "importance": "高",
      "timestamp": "2026/06/11 18:20",
      "tags": [
        "投信",
        "連買",
        "塑膠工業",
        "APPLE概念",
        "越南設廠"
      ],
      "summary": "投信連買，近 10 個交易日正買合計 18,143 張，估算金額約 17.20 億元。",
      "event": "投信連買 10 日，近 10 個交易日正買合計 18,143 張；最新日外資 -2,997 張、投信 2,381 張、自營商 -340 張。",
      "ai": "法人買盤集中在 塑膠工業，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 118602.802,
      "yahooVerification": {
        "status": "days-different",
        "source": "https://tw.stock.yahoo.com/quote/1303.TW/institutional-trading",
        "latestNetBuy": 2381,
        "days": 12,
        "latestForeign": -2997,
        "latestTrust": 2381,
        "latestDealer": -340
      }
    },
    {
      "id": "inst-2892-20260611",
      "type": "institutional",
      "title": "2892 第一金",
      "stockCode": "2892",
      "stockName": "第一金",
      "sector": "金融保險",
      "group": "金融保險",
      "institutionType": "投信",
      "direction": "同步買超",
      "days": 10,
      "consecutiveBuyDays": 10,
      "streaks": {
        "外資": 4,
        "投信": 10,
        "自營商": 2
      },
      "latestNetBuy": 512,
      "buyVolume": 25254,
      "buyAmount": 0,
      "syncCount": 3,
      "importance": "高",
      "timestamp": "2026/06/11 18:20",
      "tags": [
        "投信",
        "同步買超",
        "金融保險",
        "官股企業",
        "電子商務及延伸"
      ],
      "summary": "投信同步買超，近 10 個交易日正買合計 25,254 張，估算金額約 0.00 億元。",
      "event": "投信連買 10 日，近 10 個交易日正買合計 25,254 張；最新日外資 19,414 張、投信 512 張、自營商 1,701 張。",
      "ai": "法人買盤集中在 金融保險，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 210614.684,
      "yahooVerification": {
        "status": "matched",
        "source": "https://tw.stock.yahoo.com/quote/2892.TW/institutional-trading",
        "latestNetBuy": 512,
        "days": 10,
        "latestForeign": 19414,
        "latestTrust": 512,
        "latestDealer": 1701
      }
    },
    {
      "id": "macro-continuing-jobless-claims-may-16-20260528",
      "type": "macro",
      "title": "初領失業救濟金人數",
      "eventName": "初領失業救濟金人數",
      "originalEventName": "Continuing Jobless Claims (May/16)",
      "sourcePublishTime": "2026/05/28 20:30 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/05/28 20:30",
      "previous": "1771",
      "forecast": "1780",
      "actual": "1786",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響就業強弱、薪資通膨與聯準會政策預期。",
      "importance": "中高",
      "timestamp": "2026/05/28 20:30",
      "tags": [
        "美國",
        "初領失業救濟金人數",
        "偏多"
      ],
      "summary": "初領失業救濟金人數 將於 2026/05/28 20:30 公布，市場關注前值 1771、預期 1780。",
      "event": "美國 初領失業救濟金人數，前值 1771、預期 1780、實際 1786。",
      "ai": "目前 AI 判斷為偏多觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響就業強弱、薪資通膨與聯準會政策預期。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "http://www.dol.gov",
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
    }
  ],
  "macroEvents": [
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
    },
    {
      "id": "macro-continuing-jobless-claims-may-16-20260528",
      "type": "macro",
      "title": "初領失業救濟金人數",
      "eventName": "初領失業救濟金人數",
      "originalEventName": "Continuing Jobless Claims (May/16)",
      "sourcePublishTime": "2026/05/28 20:30 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/05/28 20:30",
      "previous": "1771",
      "forecast": "1780",
      "actual": "1786",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響就業強弱、薪資通膨與聯準會政策預期。",
      "importance": "中高",
      "timestamp": "2026/05/28 20:30",
      "tags": [
        "美國",
        "初領失業救濟金人數",
        "偏多"
      ],
      "summary": "初領失業救濟金人數 將於 2026/05/28 20:30 公布，市場關注前值 1771、預期 1780。",
      "event": "美國 初領失業救濟金人數，前值 1771、預期 1780、實際 1786。",
      "ai": "目前 AI 判斷為偏多觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響就業強弱、薪資通膨與聯準會政策預期。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "http://www.dol.gov",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    },
    {
      "id": "macro-gdp-price-index-qoq-2nd-est-q1-20260528",
      "type": "macro",
      "title": "GDP 經濟成長率",
      "eventName": "GDP 經濟成長率",
      "originalEventName": "GDP Price Index QoQ 2nd Est (Q1)",
      "sourcePublishTime": "2026/05/28 20:30 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/05/28 20:30",
      "previous": "3.6",
      "forecast": "4.5",
      "actual": "3.5",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "importance": "高",
      "timestamp": "2026/05/28 20:30",
      "tags": [
        "美國",
        "GDP",
        "偏多"
      ],
      "summary": "GDP 經濟成長率 將於 2026/05/28 20:30 公布，市場關注前值 3.6、預期 4.5。",
      "event": "美國 GDP 經濟成長率，前值 3.6、預期 4.5、實際 3.5。",
      "ai": "目前 AI 判斷為偏多觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar / 鉅亨網全球經濟指標",
      "sourceUrl": "http://www.bea.gov",
      "sourceList": [
        "TradingView Economic Calendar",
        "鉅亨網全球經濟指標"
      ]
    },
    {
      "id": "macro-core-pce-prices-qoq-2nd-est-q1-20260528",
      "type": "macro",
      "title": "核心 PCE 物價指數",
      "eventName": "核心 PCE 物價指數",
      "originalEventName": "Core PCE Prices QoQ 2nd Est (Q1)",
      "sourcePublishTime": "2026/05/28 20:30 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/05/28 20:30",
      "previous": "2.7",
      "forecast": "4.3",
      "actual": "4.4",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏空",
      "impact": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "importance": "高",
      "timestamp": "2026/05/28 20:30",
      "tags": [
        "美國",
        "核心",
        "偏空"
      ],
      "summary": "核心 PCE 物價指數 將於 2026/05/28 20:30 公布，市場關注前值 2.7、預期 4.3。",
      "event": "美國 核心 PCE 物價指數，前值 2.7、預期 4.3、實際 4.4。",
      "ai": "目前 AI 判斷為偏空觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar / 鉅亨網全球經濟指標",
      "sourceUrl": "http://www.bea.gov",
      "sourceList": [
        "TradingView Economic Calendar",
        "鉅亨網全球經濟指標"
      ]
    },
    {
      "id": "macro-pce-price-index-mom-apr-20260528",
      "type": "macro",
      "title": "PCE 物價指數",
      "eventName": "PCE 物價指數",
      "originalEventName": "PCE Price Index MoM (Apr)",
      "sourcePublishTime": "2026/05/28 20:30 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/05/28 20:30",
      "previous": "0.7",
      "forecast": "0.5",
      "actual": "0.4",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "importance": "高",
      "timestamp": "2026/05/28 20:30",
      "tags": [
        "美國",
        "PCE",
        "偏多"
      ],
      "summary": "PCE 物價指數 將於 2026/05/28 20:30 公布，市場關注前值 0.7、預期 0.5。",
      "event": "美國 PCE 物價指數，前值 0.7、預期 0.5、實際 0.4。",
      "ai": "目前 AI 判斷為偏多觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar / 鉅亨網全球經濟指標",
      "sourceUrl": "http://www.bea.gov/",
      "sourceList": [
        "TradingView Economic Calendar",
        "鉅亨網全球經濟指標"
      ]
    },
    {
      "id": "macro-harmonised-inflation-rate-yoy-prel-may-20260529",
      "type": "macro",
      "title": "通膨率",
      "eventName": "通膨率",
      "originalEventName": "Harmonised Inflation Rate YoY Prel (May)",
      "sourcePublishTime": "2026/05/29 14:45 Asia/Taipei",
      "country": "法國",
      "publishTime": "2026/05/29 14:45",
      "previous": "2.5",
      "forecast": "2.9",
      "actual": "2.8",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "importance": "中高",
      "timestamp": "2026/05/29 14:45",
      "tags": [
        "法國",
        "通膨率",
        "偏多"
      ],
      "summary": "通膨率 將於 2026/05/29 14:45 公布，市場關注前值 2.5、預期 2.9。",
      "event": "法國 通膨率，前值 2.5、預期 2.9、實際 2.8。",
      "ai": "目前 AI 判斷為偏多觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "https://www.insee.fr",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    }
  ]
};
