window.IntelligenceOverviewData = {
  "updatedAt": "2026/06/17 18:30",
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
      "value": 30,
      "unit": "筆",
      "icon": "alert",
      "accent": "orange"
    },
    {
      "label": "追蹤標的",
      "value": 78,
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
          "78 筆"
        ],
        [
          "投信連買",
          "17 筆"
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
          "33 個"
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
      "id": "inst-2303-20260617",
      "type": "institutional",
      "title": "2303 聯電",
      "stockCode": "2303",
      "stockName": "聯電",
      "sector": "半導體",
      "group": "半導體",
      "institutionType": "投信",
      "direction": "連買",
      "days": 3,
      "consecutiveBuyDays": 3,
      "streaks": {
        "外資": 0,
        "投信": 3,
        "自營商": 0
      },
      "latestNetBuy": 19568,
      "buyVolume": 52887,
      "buyAmount": 74.57,
      "syncCount": 1,
      "importance": "高",
      "timestamp": "2026/06/17 18:20",
      "tags": [
        "投信",
        "連買",
        "半導體",
        "手機",
        "車用電子相關"
      ],
      "summary": "投信連買，近 4 個交易日正買合計 52,887 張，估算金額約 74.57 億元。",
      "event": "投信連買 3 日，近 4 個交易日正買合計 52,887 張；最新日外資 -45,460 張、投信 19,568 張、自營商 -452 張。",
      "ai": "法人買盤集中在 半導體，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 97838.31,
      "yahooVerification": {
        "status": "days-different",
        "source": "https://tw.stock.yahoo.com/quote/2303.TW/institutional-trading",
        "latestNetBuy": 19568,
        "days": 4,
        "latestForeign": -45460,
        "latestTrust": 19568,
        "latestDealer": -452
      }
    },
    {
      "id": "inst-2408-20260617",
      "type": "institutional",
      "title": "2408 南亞科",
      "stockCode": "2408",
      "stockName": "南亞科",
      "sector": "半導體",
      "group": "半導體",
      "institutionType": "投信",
      "direction": "同步買超",
      "days": 4,
      "consecutiveBuyDays": 4,
      "streaks": {
        "外資": 1,
        "投信": 4,
        "自營商": 1
      },
      "latestNetBuy": 2241,
      "buyVolume": 4959,
      "buyAmount": 0,
      "syncCount": 3,
      "importance": "高",
      "timestamp": "2026/06/17 18:20",
      "tags": [
        "投信",
        "同步買超",
        "半導體",
        "Smart TV",
        "Windows11"
      ],
      "summary": "投信同步買超，近 4 個交易日正買合計 4,959 張，估算金額約 0.00 億元。",
      "event": "投信連買 4 日，近 4 個交易日正買合計 4,959 張；最新日外資 4,146 張、投信 2,241 張、自營商 646 張。",
      "ai": "法人買盤集中在 半導體，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 36596.502,
      "yahooVerification": {
        "status": "days-different",
        "source": "https://tw.stock.yahoo.com/quote/2408.TW/institutional-trading",
        "latestNetBuy": 2241,
        "days": 8,
        "latestForeign": 4146,
        "latestTrust": 2241,
        "latestDealer": 646
      }
    },
    {
      "id": "inst-3596-20260617",
      "type": "institutional",
      "title": "3596 智易",
      "stockCode": "3596",
      "stockName": "智易",
      "sector": "通信網路業",
      "group": "通信網路業",
      "institutionType": "外資",
      "direction": "同步買超",
      "days": 4,
      "consecutiveBuyDays": 4,
      "streaks": {
        "外資": 4,
        "投信": 1,
        "自營商": 3
      },
      "latestNetBuy": 783,
      "buyVolume": 2617,
      "buyAmount": 0,
      "syncCount": 3,
      "importance": "高",
      "timestamp": "2026/06/17 18:20",
      "tags": [
        "外資",
        "同步買超",
        "通信網路業",
        "光纖設備",
        "拜登基礎建設"
      ],
      "summary": "外資同步買超，近 4 個交易日正買合計 2,617 張，估算金額約 0.00 億元。",
      "event": "外資連買 4 日，近 4 個交易日正買合計 2,617 張；最新日外資 783 張、投信 401 張、自營商 28 張。",
      "ai": "法人買盤集中在 通信網路業，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 3064.772,
      "yahooVerification": {
        "status": "days-different",
        "source": "https://tw.stock.yahoo.com/quote/3596.TW/institutional-trading",
        "latestNetBuy": 783,
        "days": 6,
        "latestForeign": 783,
        "latestTrust": 401,
        "latestDealer": 28
      }
    },
    {
      "id": "inst-3026-20260617",
      "type": "institutional",
      "title": "3026 禾伸堂",
      "stockCode": "3026",
      "stockName": "禾伸堂",
      "sector": "電子零組件",
      "group": "電子零組件",
      "institutionType": "投信",
      "direction": "同步買超",
      "days": 4,
      "consecutiveBuyDays": 4,
      "streaks": {
        "外資": 1,
        "投信": 4,
        "自營商": 1
      },
      "latestNetBuy": 2153,
      "buyVolume": 2643,
      "buyAmount": 0,
      "syncCount": 3,
      "importance": "高",
      "timestamp": "2026/06/17 18:20",
      "tags": [
        "投信",
        "同步買超",
        "電子零組件",
        "端子連接器被動元件",
        "被動元件"
      ],
      "summary": "投信同步買超，近 4 個交易日正買合計 2,643 張，估算金額約 0.00 億元。",
      "event": "投信連買 4 日，近 4 個交易日正買合計 2,643 張；最新日外資 102 張、投信 2,153 張、自營商 45 張。",
      "ai": "法人買盤集中在 電子零組件，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 3278.288,
      "yahooVerification": {
        "status": "days-different",
        "source": "https://tw.stock.yahoo.com/quote/3026.TW/institutional-trading",
        "latestNetBuy": 2153,
        "days": 6,
        "latestForeign": 102,
        "latestTrust": 2153,
        "latestDealer": 45
      }
    },
    {
      "id": "macro-s-p-global-composite-pmi-final-may-20260603",
      "type": "macro",
      "title": "綜合 PMI",
      "eventName": "綜合 PMI",
      "originalEventName": "S&P Global Composite PMI Final (May)",
      "sourcePublishTime": "2026/06/03 15:55 Asia/Taipei",
      "country": "德國",
      "publishTime": "2026/06/03 15:55",
      "previous": "48.4",
      "forecast": "48.6",
      "actual": "48.8",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/06/03 15:55",
      "tags": [
        "德國",
        "綜合",
        "中性"
      ],
      "summary": "綜合 PMI 將於 2026/06/03 15:55 公布，市場關注前值 48.4、預期 48.6。",
      "event": "德國 綜合 PMI，前值 48.4、預期 48.6、實際 48.8。",
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
      "id": "macro-s-p-global-services-pmi-final-may-20260603",
      "type": "macro",
      "title": "服務業 PMI",
      "eventName": "服務業 PMI",
      "originalEventName": "S&P Global Services PMI Final (May)",
      "sourcePublishTime": "2026/06/03 15:55 Asia/Taipei",
      "country": "德國",
      "publishTime": "2026/06/03 15:55",
      "previous": "46.9",
      "forecast": "47.8",
      "actual": "48.1",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/06/03 15:55",
      "tags": [
        "德國",
        "服務業",
        "中性"
      ],
      "summary": "服務業 PMI 將於 2026/06/03 15:55 公布，市場關注前值 46.9、預期 47.8。",
      "event": "德國 服務業 PMI，前值 46.9、預期 47.8、實際 48.1。",
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
      "id": "macro-s-p-global-composite-pmi-final-may-20260603",
      "type": "macro",
      "title": "綜合 PMI",
      "eventName": "綜合 PMI",
      "originalEventName": "S&P Global Composite PMI Final (May)",
      "sourcePublishTime": "2026/06/03 15:50 Asia/Taipei",
      "country": "法國",
      "publishTime": "2026/06/03 15:50",
      "previous": "47.6",
      "forecast": "43.5",
      "actual": "44.9",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/06/03 15:50",
      "tags": [
        "法國",
        "綜合",
        "中性"
      ],
      "summary": "綜合 PMI 將於 2026/06/03 15:50 公布，市場關注前值 47.6、預期 43.5。",
      "event": "法國 綜合 PMI，前值 47.6、預期 43.5、實際 44.9。",
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
      "id": "macro-s-p-global-services-pmi-final-may-20260603",
      "type": "macro",
      "title": "服務業 PMI",
      "eventName": "服務業 PMI",
      "originalEventName": "S&P Global Services PMI Final (May)",
      "sourcePublishTime": "2026/06/03 15:50 Asia/Taipei",
      "country": "法國",
      "publishTime": "2026/06/03 15:50",
      "previous": "46.5",
      "forecast": "42.9",
      "actual": "44.3",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/06/03 15:50",
      "tags": [
        "法國",
        "服務業",
        "中性"
      ],
      "summary": "服務業 PMI 將於 2026/06/03 15:50 公布，市場關注前值 46.5、預期 42.9。",
      "event": "法國 服務業 PMI，前值 46.5、預期 42.9、實際 44.3。",
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
  ],
  "macroEvents": [
    {
      "id": "macro-s-p-global-composite-pmi-final-may-20260603",
      "type": "macro",
      "title": "綜合 PMI",
      "eventName": "綜合 PMI",
      "originalEventName": "S&P Global Composite PMI Final (May)",
      "sourcePublishTime": "2026/06/03 15:50 Asia/Taipei",
      "country": "法國",
      "publishTime": "2026/06/03 15:50",
      "previous": "47.6",
      "forecast": "43.5",
      "actual": "44.9",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/06/03 15:50",
      "tags": [
        "法國",
        "綜合",
        "中性"
      ],
      "summary": "綜合 PMI 將於 2026/06/03 15:50 公布，市場關注前值 47.6、預期 43.5。",
      "event": "法國 綜合 PMI，前值 47.6、預期 43.5、實際 44.9。",
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
      "id": "macro-s-p-global-services-pmi-final-may-20260603",
      "type": "macro",
      "title": "服務業 PMI",
      "eventName": "服務業 PMI",
      "originalEventName": "S&P Global Services PMI Final (May)",
      "sourcePublishTime": "2026/06/03 15:50 Asia/Taipei",
      "country": "法國",
      "publishTime": "2026/06/03 15:50",
      "previous": "46.5",
      "forecast": "42.9",
      "actual": "44.3",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/06/03 15:50",
      "tags": [
        "法國",
        "服務業",
        "中性"
      ],
      "summary": "服務業 PMI 將於 2026/06/03 15:50 公布，市場關注前值 46.5、預期 42.9。",
      "event": "法國 服務業 PMI，前值 46.5、預期 42.9、實際 44.3。",
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
      "id": "macro-s-p-global-composite-pmi-final-may-20260603",
      "type": "macro",
      "title": "綜合 PMI",
      "eventName": "綜合 PMI",
      "originalEventName": "S&P Global Composite PMI Final (May)",
      "sourcePublishTime": "2026/06/03 15:55 Asia/Taipei",
      "country": "德國",
      "publishTime": "2026/06/03 15:55",
      "previous": "48.4",
      "forecast": "48.6",
      "actual": "48.8",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/06/03 15:55",
      "tags": [
        "德國",
        "綜合",
        "中性"
      ],
      "summary": "綜合 PMI 將於 2026/06/03 15:55 公布，市場關注前值 48.4、預期 48.6。",
      "event": "德國 綜合 PMI，前值 48.4、預期 48.6、實際 48.8。",
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
      "id": "macro-s-p-global-services-pmi-final-may-20260603",
      "type": "macro",
      "title": "服務業 PMI",
      "eventName": "服務業 PMI",
      "originalEventName": "S&P Global Services PMI Final (May)",
      "sourcePublishTime": "2026/06/03 15:55 Asia/Taipei",
      "country": "德國",
      "publishTime": "2026/06/03 15:55",
      "previous": "46.9",
      "forecast": "47.8",
      "actual": "48.1",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/06/03 15:55",
      "tags": [
        "德國",
        "服務業",
        "中性"
      ],
      "summary": "服務業 PMI 將於 2026/06/03 15:55 公布，市場關注前值 46.9、預期 47.8。",
      "event": "德國 服務業 PMI，前值 46.9、預期 47.8、實際 48.1。",
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
      "id": "macro-s-p-global-composite-pmi-final-may-20260603",
      "type": "macro",
      "title": "綜合 PMI",
      "eventName": "綜合 PMI",
      "originalEventName": "S&P Global Composite PMI Final (May)",
      "sourcePublishTime": "2026/06/03 16:00 Asia/Taipei",
      "country": "歐元區",
      "publishTime": "2026/06/03 16:00",
      "previous": "—",
      "forecast": "47.5",
      "actual": null,
      "status": "等待公布",
      "statusLevel": "upcoming",
      "direction": "中性",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/06/03 16:00",
      "tags": [
        "歐元區",
        "綜合",
        "中性"
      ],
      "summary": "綜合 PMI 將於 2026/06/03 16:00 公布，市場關注前值 —、預期 47.5。",
      "event": "歐元區 綜合 PMI，前值 —、預期 47.5、實際 尚未公布。",
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
      "id": "macro-s-p-global-services-pmi-final-may-20260603",
      "type": "macro",
      "title": "服務業 PMI",
      "eventName": "服務業 PMI",
      "originalEventName": "S&P Global Services PMI Final (May)",
      "sourcePublishTime": "2026/06/03 16:00 Asia/Taipei",
      "country": "歐元區",
      "publishTime": "2026/06/03 16:00",
      "previous": "—",
      "forecast": "46.4",
      "actual": null,
      "status": "等待公布",
      "statusLevel": "upcoming",
      "direction": "中性",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/06/03 16:00",
      "tags": [
        "歐元區",
        "服務業",
        "中性"
      ],
      "summary": "服務業 PMI 將於 2026/06/03 16:00 公布，市場關注前值 —、預期 46.4。",
      "event": "歐元區 服務業 PMI，前值 —、預期 46.4、實際 尚未公布。",
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
      "id": "macro-s-p-global-composite-pmi-final-may-20260603",
      "type": "macro",
      "title": "綜合 PMI",
      "eventName": "綜合 PMI",
      "originalEventName": "S&P Global Composite PMI Final (May)",
      "sourcePublishTime": "2026/06/03 16:30 Asia/Taipei",
      "country": "英國",
      "publishTime": "2026/06/03 16:30",
      "previous": "52.6",
      "forecast": "48.5",
      "actual": "49.7",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/06/03 16:30",
      "tags": [
        "英國",
        "綜合",
        "中性"
      ],
      "summary": "綜合 PMI 將於 2026/06/03 16:30 公布，市場關注前值 52.6、預期 48.5。",
      "event": "英國 綜合 PMI，前值 52.6、預期 48.5、實際 49.7。",
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
      "id": "macro-s-p-global-services-pmi-final-may-20260603",
      "type": "macro",
      "title": "服務業 PMI",
      "eventName": "服務業 PMI",
      "originalEventName": "S&P Global Services PMI Final (May)",
      "sourcePublishTime": "2026/06/03 16:30 Asia/Taipei",
      "country": "英國",
      "publishTime": "2026/06/03 16:30",
      "previous": "52.7",
      "forecast": "47.9",
      "actual": "49.3",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/06/03 16:30",
      "tags": [
        "英國",
        "服務業",
        "中性"
      ],
      "summary": "服務業 PMI 將於 2026/06/03 16:30 公布，市場關注前值 52.7、預期 47.9。",
      "event": "英國 服務業 PMI，前值 52.7、預期 47.9、實際 49.3。",
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
