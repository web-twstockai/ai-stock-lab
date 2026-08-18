window.IntelligenceOverviewData = {
  "updatedAt": "2026/08/18 07:47",
  "status": "運作中",
  "cards": [
    {
      "label": "今日偵測情報",
      "value": 249,
      "unit": "筆",
      "icon": "file"
    },
    {
      "label": "高重要度訊號",
      "value": 63,
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
          "22 筆"
        ],
        [
          "三大法人同步買",
          "11 筆"
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
          "32 個"
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
      "id": "inst-2886-20260817",
      "type": "institutional",
      "title": "2886 兆豐金",
      "stockCode": "2886",
      "stockName": "兆豐金",
      "sector": "金融保險",
      "group": "金融保險",
      "institutionType": "投信",
      "direction": "同步買超",
      "days": 10,
      "consecutiveBuyDays": 10,
      "streaks": {
        "外資": 3,
        "投信": 10,
        "自營商": 1
      },
      "latestNetBuy": 8109,
      "buyVolume": 52548,
      "buyAmount": 0,
      "syncCount": 3,
      "importance": "高",
      "timestamp": "2026/08/17 18:20",
      "tags": [
        "投信",
        "同步買超",
        "金融保險",
        "官股企業",
        "金融業"
      ],
      "summary": "投信同步買超，近 10 個交易日正買合計 52,548 張，估算金額約 0.00 億元。",
      "event": "投信連買 10 日，近 10 個交易日正買合計 52,548 張；最新日外資 13,834 張、投信 8,109 張、自營商 193 張。",
      "ai": "法人買盤集中在 金融保險，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 108369.929,
      "yahooVerification": {
        "status": "days-different",
        "source": "https://tw.stock.yahoo.com/quote/2886.TW/institutional-trading",
        "latestNetBuy": 8109,
        "days": 22,
        "latestForeign": 13834,
        "latestTrust": 8109,
        "latestDealer": 193
      }
    },
    {
      "id": "inst-2603-20260817",
      "type": "institutional",
      "title": "2603 長榮",
      "stockCode": "2603",
      "stockName": "長榮",
      "sector": "航運業",
      "group": "航運業",
      "institutionType": "投信",
      "direction": "同步買超",
      "days": 7,
      "consecutiveBuyDays": 7,
      "streaks": {
        "外資": 3,
        "投信": 7,
        "自營商": 2
      },
      "latestNetBuy": 122,
      "buyVolume": 4019,
      "buyAmount": 0,
      "syncCount": 3,
      "importance": "高",
      "timestamp": "2026/08/17 18:20",
      "tags": [
        "投信",
        "同步買超",
        "航運業",
        "三通",
        "運輸事業"
      ],
      "summary": "投信同步買超，近 10 個交易日正買合計 4,019 張，估算金額約 0.00 億元。",
      "event": "投信連買 7 日，近 10 個交易日正買合計 4,019 張；最新日外資 24,586 張、投信 122 張、自營商 1,678 張。",
      "ai": "法人買盤集中在 航運業，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 59285.399,
      "yahooVerification": {
        "status": "matched",
        "source": "https://tw.stock.yahoo.com/quote/2603.TW/institutional-trading",
        "latestNetBuy": 122,
        "days": 7,
        "latestForeign": 24586,
        "latestTrust": 122,
        "latestDealer": 1678
      }
    },
    {
      "id": "inst-1402-20260817",
      "type": "institutional",
      "title": "1402 遠東新",
      "stockCode": "1402",
      "stockName": "遠東新",
      "sector": "紡織纖維",
      "group": "紡織纖維",
      "institutionType": "投信",
      "direction": "同步買超",
      "days": 9,
      "consecutiveBuyDays": 9,
      "streaks": {
        "外資": 1,
        "投信": 9,
        "自營商": 1
      },
      "latestNetBuy": 554,
      "buyVolume": 2468,
      "buyAmount": 0,
      "syncCount": 3,
      "importance": "高",
      "timestamp": "2026/08/17 18:20",
      "tags": [
        "投信",
        "同步買超",
        "紡織纖維",
        "S&P 台商收成指數",
        "中國"
      ],
      "summary": "投信同步買超，近 10 個交易日正買合計 2,468 張，估算金額約 0.00 億元。",
      "event": "投信連買 9 日，近 10 個交易日正買合計 2,468 張；最新日外資 6,225 張、投信 554 張、自營商 64 張。",
      "ai": "法人買盤集中在 紡織纖維，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 74416.435,
      "yahooVerification": {
        "status": "matched",
        "source": "https://tw.stock.yahoo.com/quote/1402.TW/institutional-trading",
        "latestNetBuy": 554,
        "days": 9,
        "latestForeign": 6225,
        "latestTrust": 554,
        "latestDealer": 64
      }
    },
    {
      "id": "inst-2382-20260817",
      "type": "institutional",
      "title": "2382 廣達",
      "stockCode": "2382",
      "stockName": "廣達",
      "sector": "電腦及週邊設備",
      "group": "電腦及週邊設備",
      "institutionType": "外資",
      "direction": "連買",
      "days": 2,
      "consecutiveBuyDays": 2,
      "streaks": {
        "外資": 2,
        "投信": 0,
        "自營商": 1
      },
      "latestNetBuy": 5525,
      "buyVolume": 15122,
      "buyAmount": 49.52,
      "syncCount": 2,
      "importance": "高",
      "timestamp": "2026/08/17 18:20",
      "tags": [
        "外資",
        "連買",
        "電腦及週邊設備",
        "5G",
        "APPLE概念"
      ],
      "summary": "外資連買，近 10 個交易日正買合計 15,122 張，估算金額約 49.52 億元。",
      "event": "外資連買 2 日，近 10 個交易日正買合計 15,122 張；最新日外資 5,525 張、投信 -569 張、自營商 37 張。",
      "ai": "法人買盤集中在 電腦及週邊設備，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 18327.311,
      "yahooVerification": {
        "status": "matched",
        "source": "https://tw.stock.yahoo.com/quote/2382.TW/institutional-trading",
        "latestNetBuy": 5525,
        "days": 2,
        "latestForeign": 5525,
        "latestTrust": -569,
        "latestDealer": 37
      }
    },
    {
      "id": "macro-s-p-global-composite-pmi-final-jul-20260805",
      "type": "macro",
      "title": "綜合 PMI",
      "eventName": "綜合 PMI",
      "originalEventName": "S&P Global Composite PMI Final (Jul)",
      "sourcePublishTime": "2026/08/05 15:55 Asia/Taipei",
      "country": "德國",
      "publishTime": "2026/08/05 15:55",
      "previous": "49.5",
      "forecast": "51.2",
      "actual": "51.3",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/08/05 15:55",
      "tags": [
        "德國",
        "綜合",
        "中性"
      ],
      "summary": "綜合 PMI 將於 2026/08/05 15:55 公布，市場關注前值 49.5、預期 51.2。",
      "event": "德國 綜合 PMI，前值 49.5、預期 51.2、實際 51.3。",
      "ai": "目前 AI 判斷為偏多觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響市場風險偏好與資金輪動。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar / 鉅亨網全球經濟指標",
      "sourceUrl": "https://www.pmi.spglobal.com/public",
      "sourceList": [
        "TradingView Economic Calendar",
        "鉅亨網全球經濟指標"
      ]
    },
    {
      "id": "macro-s-p-global-services-pmi-final-jul-20260805",
      "type": "macro",
      "title": "服務業 PMI",
      "eventName": "服務業 PMI",
      "originalEventName": "S&P Global Services PMI Final (Jul)",
      "sourcePublishTime": "2026/08/05 15:55 Asia/Taipei",
      "country": "德國",
      "publishTime": "2026/08/05 15:55",
      "previous": "48.6",
      "forecast": "49.6",
      "actual": "49.8",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/08/05 15:55",
      "tags": [
        "德國",
        "服務業",
        "中性"
      ],
      "summary": "服務業 PMI 將於 2026/08/05 15:55 公布，市場關注前值 48.6、預期 49.6。",
      "event": "德國 服務業 PMI，前值 48.6、預期 49.6、實際 49.8。",
      "ai": "目前 AI 判斷為偏多觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響市場風險偏好與資金輪動。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar / 鉅亨網全球經濟指標",
      "sourceUrl": "https://www.pmi.spglobal.com/public",
      "sourceList": [
        "TradingView Economic Calendar",
        "鉅亨網全球經濟指標"
      ]
    },
    {
      "id": "macro-s-p-global-services-pmi-final-jul-20260805",
      "type": "macro",
      "title": "服務業 PMI",
      "eventName": "服務業 PMI",
      "originalEventName": "S&P Global Services PMI Final (Jul)",
      "sourcePublishTime": "2026/08/05 15:50 Asia/Taipei",
      "country": "法國",
      "publishTime": "2026/08/05 15:50",
      "previous": "46.8",
      "forecast": "49.8",
      "actual": "49.6",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏空",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/08/05 15:50",
      "tags": [
        "法國",
        "服務業",
        "中性"
      ],
      "summary": "服務業 PMI 將於 2026/08/05 15:50 公布，市場關注前值 46.8、預期 49.8。",
      "event": "法國 服務業 PMI，前值 46.8、預期 49.8、實際 49.6。",
      "ai": "目前 AI 判斷為偏空觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響市場風險偏好與資金輪動。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar / 鉅亨網全球經濟指標",
      "sourceUrl": "https://www.pmi.spglobal.com/public",
      "sourceList": [
        "TradingView Economic Calendar",
        "鉅亨網全球經濟指標"
      ]
    },
    {
      "id": "macro-s-p-global-composite-pmi-final-jul-20260805",
      "type": "macro",
      "title": "綜合 PMI",
      "eventName": "綜合 PMI",
      "originalEventName": "S&P Global Composite PMI Final (Jul)",
      "sourcePublishTime": "2026/08/05 15:50 Asia/Taipei",
      "country": "法國",
      "publishTime": "2026/08/05 15:50",
      "previous": "47.2",
      "forecast": "49.6",
      "actual": "49.4",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏空",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/08/05 15:50",
      "tags": [
        "法國",
        "綜合",
        "中性"
      ],
      "summary": "綜合 PMI 將於 2026/08/05 15:50 公布，市場關注前值 47.2、預期 49.6。",
      "event": "法國 綜合 PMI，前值 47.2、預期 49.6、實際 49.4。",
      "ai": "目前 AI 判斷為偏空觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響市場風險偏好與資金輪動。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar / 鉅亨網全球經濟指標",
      "sourceUrl": "https://www.pmi.spglobal.com/public",
      "sourceList": [
        "TradingView Economic Calendar",
        "鉅亨網全球經濟指標"
      ]
    }
  ],
  "macroEvents": [
    {
      "id": "macro-s-p-global-services-pmi-final-jul-20260805",
      "type": "macro",
      "title": "服務業 PMI",
      "eventName": "服務業 PMI",
      "originalEventName": "S&P Global Services PMI Final (Jul)",
      "sourcePublishTime": "2026/08/05 15:50 Asia/Taipei",
      "country": "法國",
      "publishTime": "2026/08/05 15:50",
      "previous": "46.8",
      "forecast": "49.8",
      "actual": "49.6",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏空",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/08/05 15:50",
      "tags": [
        "法國",
        "服務業",
        "中性"
      ],
      "summary": "服務業 PMI 將於 2026/08/05 15:50 公布，市場關注前值 46.8、預期 49.8。",
      "event": "法國 服務業 PMI，前值 46.8、預期 49.8、實際 49.6。",
      "ai": "目前 AI 判斷為偏空觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響市場風險偏好與資金輪動。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar / 鉅亨網全球經濟指標",
      "sourceUrl": "https://www.pmi.spglobal.com/public",
      "sourceList": [
        "TradingView Economic Calendar",
        "鉅亨網全球經濟指標"
      ]
    },
    {
      "id": "macro-s-p-global-composite-pmi-final-jul-20260805",
      "type": "macro",
      "title": "綜合 PMI",
      "eventName": "綜合 PMI",
      "originalEventName": "S&P Global Composite PMI Final (Jul)",
      "sourcePublishTime": "2026/08/05 15:50 Asia/Taipei",
      "country": "法國",
      "publishTime": "2026/08/05 15:50",
      "previous": "47.2",
      "forecast": "49.6",
      "actual": "49.4",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏空",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/08/05 15:50",
      "tags": [
        "法國",
        "綜合",
        "中性"
      ],
      "summary": "綜合 PMI 將於 2026/08/05 15:50 公布，市場關注前值 47.2、預期 49.6。",
      "event": "法國 綜合 PMI，前值 47.2、預期 49.6、實際 49.4。",
      "ai": "目前 AI 判斷為偏空觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響市場風險偏好與資金輪動。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar / 鉅亨網全球經濟指標",
      "sourceUrl": "https://www.pmi.spglobal.com/public",
      "sourceList": [
        "TradingView Economic Calendar",
        "鉅亨網全球經濟指標"
      ]
    },
    {
      "id": "macro-s-p-global-composite-pmi-final-jul-20260805",
      "type": "macro",
      "title": "綜合 PMI",
      "eventName": "綜合 PMI",
      "originalEventName": "S&P Global Composite PMI Final (Jul)",
      "sourcePublishTime": "2026/08/05 15:55 Asia/Taipei",
      "country": "德國",
      "publishTime": "2026/08/05 15:55",
      "previous": "49.5",
      "forecast": "51.2",
      "actual": "51.3",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/08/05 15:55",
      "tags": [
        "德國",
        "綜合",
        "中性"
      ],
      "summary": "綜合 PMI 將於 2026/08/05 15:55 公布，市場關注前值 49.5、預期 51.2。",
      "event": "德國 綜合 PMI，前值 49.5、預期 51.2、實際 51.3。",
      "ai": "目前 AI 判斷為偏多觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響市場風險偏好與資金輪動。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar / 鉅亨網全球經濟指標",
      "sourceUrl": "https://www.pmi.spglobal.com/public",
      "sourceList": [
        "TradingView Economic Calendar",
        "鉅亨網全球經濟指標"
      ]
    },
    {
      "id": "macro-s-p-global-services-pmi-final-jul-20260805",
      "type": "macro",
      "title": "服務業 PMI",
      "eventName": "服務業 PMI",
      "originalEventName": "S&P Global Services PMI Final (Jul)",
      "sourcePublishTime": "2026/08/05 15:55 Asia/Taipei",
      "country": "德國",
      "publishTime": "2026/08/05 15:55",
      "previous": "48.6",
      "forecast": "49.6",
      "actual": "49.8",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/08/05 15:55",
      "tags": [
        "德國",
        "服務業",
        "中性"
      ],
      "summary": "服務業 PMI 將於 2026/08/05 15:55 公布，市場關注前值 48.6、預期 49.6。",
      "event": "德國 服務業 PMI，前值 48.6、預期 49.6、實際 49.8。",
      "ai": "目前 AI 判斷為偏多觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響市場風險偏好與資金輪動。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar / 鉅亨網全球經濟指標",
      "sourceUrl": "https://www.pmi.spglobal.com/public",
      "sourceList": [
        "TradingView Economic Calendar",
        "鉅亨網全球經濟指標"
      ]
    },
    {
      "id": "macro-s-p-global-composite-pmi-final-jul-20260805",
      "type": "macro",
      "title": "綜合 PMI",
      "eventName": "綜合 PMI",
      "originalEventName": "S&P Global Composite PMI Final (Jul)",
      "sourcePublishTime": "2026/08/05 16:00 Asia/Taipei",
      "country": "歐元區",
      "publishTime": "2026/08/05 16:00",
      "previous": "—",
      "forecast": "51.9",
      "actual": null,
      "status": "等待公布",
      "statusLevel": "upcoming",
      "direction": "中性",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/08/05 16:00",
      "tags": [
        "歐元區",
        "綜合",
        "中性"
      ],
      "summary": "綜合 PMI 將於 2026/08/05 16:00 公布，市場關注前值 —、預期 51.9。",
      "event": "歐元區 綜合 PMI，前值 —、預期 51.9、實際 尚未公布。",
      "ai": "目前 AI 判斷為中性觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響市場風險偏好與資金輪動。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "https://www.pmi.spglobal.com/public",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    },
    {
      "id": "macro-s-p-global-services-pmi-final-jul-20260805",
      "type": "macro",
      "title": "服務業 PMI",
      "eventName": "服務業 PMI",
      "originalEventName": "S&P Global Services PMI Final (Jul)",
      "sourcePublishTime": "2026/08/05 16:00 Asia/Taipei",
      "country": "歐元區",
      "publishTime": "2026/08/05 16:00",
      "previous": "—",
      "forecast": "51.6",
      "actual": null,
      "status": "等待公布",
      "statusLevel": "upcoming",
      "direction": "中性",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/08/05 16:00",
      "tags": [
        "歐元區",
        "服務業",
        "中性"
      ],
      "summary": "服務業 PMI 將於 2026/08/05 16:00 公布，市場關注前值 —、預期 51.6。",
      "event": "歐元區 服務業 PMI，前值 —、預期 51.6、實際 尚未公布。",
      "ai": "目前 AI 判斷為中性觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響市場風險偏好與資金輪動。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "https://www.pmi.spglobal.com/public",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    },
    {
      "id": "macro-s-p-global-composite-pmi-final-jul-20260805",
      "type": "macro",
      "title": "綜合 PMI",
      "eventName": "綜合 PMI",
      "originalEventName": "S&P Global Composite PMI Final (Jul)",
      "sourcePublishTime": "2026/08/05 16:30 Asia/Taipei",
      "country": "英國",
      "publishTime": "2026/08/05 16:30",
      "previous": "49.3",
      "forecast": "52.1",
      "actual": "52.2",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/08/05 16:30",
      "tags": [
        "英國",
        "綜合",
        "中性"
      ],
      "summary": "綜合 PMI 將於 2026/08/05 16:30 公布，市場關注前值 49.3、預期 52.1。",
      "event": "英國 綜合 PMI，前值 49.3、預期 52.1、實際 52.2。",
      "ai": "目前 AI 判斷為偏多觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響市場風險偏好與資金輪動。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar / 鉅亨網全球經濟指標",
      "sourceUrl": "https://www.pmi.spglobal.com/public",
      "sourceList": [
        "TradingView Economic Calendar",
        "鉅亨網全球經濟指標"
      ]
    },
    {
      "id": "macro-s-p-global-services-pmi-final-jul-20260805",
      "type": "macro",
      "title": "服務業 PMI",
      "eventName": "服務業 PMI",
      "originalEventName": "S&P Global Services PMI Final (Jul)",
      "sourcePublishTime": "2026/08/05 16:30 Asia/Taipei",
      "country": "英國",
      "publishTime": "2026/08/05 16:30",
      "previous": "48.8",
      "forecast": "51.8",
      "actual": "52.1",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/08/05 16:30",
      "tags": [
        "英國",
        "服務業",
        "中性"
      ],
      "summary": "服務業 PMI 將於 2026/08/05 16:30 公布，市場關注前值 48.8、預期 51.8。",
      "event": "英國 服務業 PMI，前值 48.8、預期 51.8、實際 52.1。",
      "ai": "目前 AI 判斷為偏多觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響市場風險偏好與資金輪動。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar / 鉅亨網全球經濟指標",
      "sourceUrl": "https://www.pmi.spglobal.com/public",
      "sourceList": [
        "TradingView Economic Calendar",
        "鉅亨網全球經濟指標"
      ]
    }
  ]
};
