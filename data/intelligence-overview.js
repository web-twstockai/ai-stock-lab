window.IntelligenceOverviewData = {
  "updatedAt": "2026/06/04 18:30",
  "status": "運作中",
  "cards": [
    {
      "label": "今日偵測情報",
      "value": 270,
      "unit": "筆",
      "icon": "file"
    },
    {
      "label": "高重要度訊號",
      "value": 70,
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
      "value": "服務業 PMI",
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
          "35 筆"
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
          "15 個"
        ],
        [
          "下一事件",
          "服務業 PMI"
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
      "id": "inst-1303-20260604",
      "type": "institutional",
      "title": "1303 南亞",
      "stockCode": "1303",
      "stockName": "南亞",
      "sector": "塑膠工業",
      "group": "塑膠工業",
      "institutionType": "投信",
      "direction": "連買",
      "days": 7,
      "consecutiveBuyDays": 7,
      "streaks": {
        "外資": 0,
        "投信": 7,
        "自營商": 1
      },
      "latestNetBuy": 3863,
      "buyVolume": 13925,
      "buyAmount": 15.46,
      "syncCount": 2,
      "importance": "高",
      "timestamp": "2026/06/04 18:20",
      "tags": [
        "投信",
        "連買",
        "塑膠工業",
        "APPLE概念",
        "越南設廠"
      ],
      "summary": "投信連買，近 10 個交易日正買合計 13,925 張，估算金額約 15.46 億元。",
      "event": "投信連買 7 日，近 10 個交易日正買合計 13,925 張；最新日外資 -763 張、投信 3,863 張、自營商 1 張。",
      "ai": "法人買盤集中在 塑膠工業，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 190295.793,
      "yahooVerification": {
        "status": "matched",
        "source": "https://tw.stock.yahoo.com/quote/1303.TW/institutional-trading",
        "latestNetBuy": 3863,
        "days": 7,
        "latestForeign": -763,
        "latestTrust": 3863,
        "latestDealer": 1
      }
    },
    {
      "id": "inst-3231-20260604",
      "type": "institutional",
      "title": "3231 緯創",
      "stockCode": "3231",
      "stockName": "緯創",
      "sector": "電腦及週邊設備",
      "group": "電腦及週邊設備",
      "institutionType": "投信",
      "direction": "連買",
      "days": 7,
      "consecutiveBuyDays": 7,
      "streaks": {
        "外資": 0,
        "投信": 7,
        "自營商": 0
      },
      "latestNetBuy": 962,
      "buyVolume": 41524,
      "buyAmount": 0,
      "syncCount": 1,
      "importance": "高",
      "timestamp": "2026/06/04 18:20",
      "tags": [
        "投信",
        "連買",
        "電腦及週邊設備",
        "3D技術",
        "3D感測"
      ],
      "summary": "投信連買，近 10 個交易日正買合計 41,524 張，估算金額約 0.00 億元。",
      "event": "投信連買 7 日，近 10 個交易日正買合計 41,524 張；最新日外資 -43,098 張、投信 962 張、自營商 -1,181 張。",
      "ai": "法人買盤集中在 電腦及週邊設備，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 229912.856,
      "yahooVerification": {
        "status": "matched",
        "source": "https://tw.stock.yahoo.com/quote/3231.TW/institutional-trading",
        "latestNetBuy": 962,
        "days": 7,
        "latestForeign": -43098,
        "latestTrust": 962,
        "latestDealer": -1181
      }
    },
    {
      "id": "inst-2892-20260604",
      "type": "institutional",
      "title": "2892 第一金",
      "stockCode": "2892",
      "stockName": "第一金",
      "sector": "金融保險",
      "group": "金融保險",
      "institutionType": "投信",
      "direction": "同步買超",
      "days": 5,
      "consecutiveBuyDays": 5,
      "streaks": {
        "外資": 3,
        "投信": 5,
        "自營商": 2
      },
      "latestNetBuy": 948,
      "buyVolume": 30541,
      "buyAmount": 0,
      "syncCount": 3,
      "importance": "高",
      "timestamp": "2026/06/04 18:20",
      "tags": [
        "投信",
        "同步買超",
        "金融保險",
        "官股企業",
        "電子商務及延伸"
      ],
      "summary": "投信同步買超，近 10 個交易日正買合計 30,541 張，估算金額約 0.00 億元。",
      "event": "投信連買 5 日，近 10 個交易日正買合計 30,541 張；最新日外資 31,431 張、投信 948 張、自營商 602 張。",
      "ai": "法人買盤集中在 金融保險，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 99697.994,
      "yahooVerification": {
        "status": "matched",
        "source": "https://tw.stock.yahoo.com/quote/2892.TW/institutional-trading",
        "latestNetBuy": 948,
        "days": 5,
        "latestForeign": 31431,
        "latestTrust": 948,
        "latestDealer": 602
      }
    },
    {
      "id": "inst-2887-20260604",
      "type": "institutional",
      "title": "2887 台新新光金",
      "stockCode": "2887",
      "stockName": "台新新光金",
      "sector": "金融保險",
      "group": "金融保險",
      "institutionType": "投信",
      "direction": "連買",
      "days": 10,
      "consecutiveBuyDays": 10,
      "streaks": {
        "外資": 0,
        "投信": 10,
        "自營商": 0
      },
      "latestNetBuy": 71704,
      "buyVolume": 535429,
      "buyAmount": 0,
      "syncCount": 1,
      "importance": "高",
      "timestamp": "2026/06/04 18:20",
      "tags": [
        "投信",
        "連買",
        "金融保險",
        "金融業",
        "銀行"
      ],
      "summary": "投信連買，近 10 個交易日正買合計 535,429 張，估算金額約 0.00 億元。",
      "event": "投信連買 10 日，近 10 個交易日正買合計 535,429 張；最新日外資 -12,975 張、投信 71,704 張、自營商 -1,051 張。",
      "ai": "法人買盤集中在 金融保險，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 607987.057,
      "yahooVerification": {
        "status": "days-different",
        "source": "https://tw.stock.yahoo.com/quote/2887.TW/institutional-trading",
        "latestNetBuy": 71704,
        "days": 11,
        "latestForeign": -12975,
        "latestTrust": 71704,
        "latestDealer": -1051
      }
    },
    {
      "id": "macro-s-p-global-services-pmi-flash-may-20260521",
      "type": "macro",
      "title": "服務業 PMI",
      "eventName": "服務業 PMI",
      "originalEventName": "S&P Global Services PMI Flash (May)",
      "sourcePublishTime": "2026/05/21 15:30 Asia/Taipei",
      "country": "德國",
      "publishTime": "2026/05/21 15:30",
      "previous": "46.9",
      "forecast": "47",
      "actual": "47.8",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/05/21 15:30",
      "tags": [
        "德國",
        "服務業",
        "中性"
      ],
      "summary": "服務業 PMI 將於 2026/05/21 15:30 公布，市場關注前值 46.9、預期 47.2。",
      "event": "德國 服務業 PMI，前值 46.9、預期 47.2、實際 47.8。",
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
      "id": "macro-s-p-global-services-pmi-flash-may-20260521",
      "type": "macro",
      "title": "服務業 PMI",
      "eventName": "服務業 PMI",
      "originalEventName": "S&P Global Services PMI Flash (May)",
      "sourcePublishTime": "2026/05/21 15:15 Asia/Taipei",
      "country": "法國",
      "publishTime": "2026/05/21 15:15",
      "previous": "46.5",
      "forecast": "46.6",
      "actual": "42.9",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏空",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/05/21 15:15",
      "tags": [
        "法國",
        "服務業",
        "中性"
      ],
      "summary": "服務業 PMI 將於 2026/05/21 15:15 公布，市場關注前值 46.5、預期 46.4。",
      "event": "法國 服務業 PMI，前值 46.5、預期 46.4、實際 42.9。",
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
      "id": "macro-s-p-global-manufacturing-pmi-flash-may-20260521",
      "type": "macro",
      "title": "製造業 PMI",
      "eventName": "製造業 PMI",
      "originalEventName": "S&P Global Manufacturing PMI Flash (May)",
      "sourcePublishTime": "2026/05/21 15:15 Asia/Taipei",
      "country": "法國",
      "publishTime": "2026/05/21 15:15",
      "previous": "52.8",
      "forecast": "52.2",
      "actual": "48.9",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏空",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/05/21 15:15",
      "tags": [
        "法國",
        "製造業",
        "中性"
      ],
      "summary": "製造業 PMI 將於 2026/05/21 15:15 公布，市場關注前值 52.8、預期 52.2。",
      "event": "法國 製造業 PMI，前值 52.8、預期 52.2、實際 48.9。",
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
      "id": "macro-s-p-global-composite-pmi-flash-may-20260521",
      "type": "macro",
      "title": "綜合 PMI",
      "eventName": "綜合 PMI",
      "originalEventName": "S&P Global Composite PMI Flash (May)",
      "sourcePublishTime": "2026/05/21 15:15 Asia/Taipei",
      "country": "法國",
      "publishTime": "2026/05/21 15:15",
      "previous": "47.6",
      "forecast": "47.7",
      "actual": "43.5",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏空",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/05/21 15:15",
      "tags": [
        "法國",
        "綜合",
        "中性"
      ],
      "summary": "綜合 PMI 將於 2026/05/21 15:15 公布，市場關注前值 47.6、預期 47.1。",
      "event": "法國 綜合 PMI，前值 47.6、預期 47.1、實際 43.5。",
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
      "id": "macro-s-p-global-services-pmi-flash-may-20260521",
      "type": "macro",
      "title": "服務業 PMI",
      "eventName": "服務業 PMI",
      "originalEventName": "S&P Global Services PMI Flash (May)",
      "sourcePublishTime": "2026/05/21 15:15 Asia/Taipei",
      "country": "法國",
      "publishTime": "2026/05/21 15:15",
      "previous": "46.5",
      "forecast": "46.6",
      "actual": "42.9",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏空",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/05/21 15:15",
      "tags": [
        "法國",
        "服務業",
        "中性"
      ],
      "summary": "服務業 PMI 將於 2026/05/21 15:15 公布，市場關注前值 46.5、預期 46.4。",
      "event": "法國 服務業 PMI，前值 46.5、預期 46.4、實際 42.9。",
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
      "id": "macro-s-p-global-manufacturing-pmi-flash-may-20260521",
      "type": "macro",
      "title": "製造業 PMI",
      "eventName": "製造業 PMI",
      "originalEventName": "S&P Global Manufacturing PMI Flash (May)",
      "sourcePublishTime": "2026/05/21 15:15 Asia/Taipei",
      "country": "法國",
      "publishTime": "2026/05/21 15:15",
      "previous": "52.8",
      "forecast": "52.2",
      "actual": "48.9",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏空",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/05/21 15:15",
      "tags": [
        "法國",
        "製造業",
        "中性"
      ],
      "summary": "製造業 PMI 將於 2026/05/21 15:15 公布，市場關注前值 52.8、預期 52.2。",
      "event": "法國 製造業 PMI，前值 52.8、預期 52.2、實際 48.9。",
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
      "id": "macro-s-p-global-composite-pmi-flash-may-20260521",
      "type": "macro",
      "title": "綜合 PMI",
      "eventName": "綜合 PMI",
      "originalEventName": "S&P Global Composite PMI Flash (May)",
      "sourcePublishTime": "2026/05/21 15:15 Asia/Taipei",
      "country": "法國",
      "publishTime": "2026/05/21 15:15",
      "previous": "47.6",
      "forecast": "47.7",
      "actual": "43.5",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏空",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/05/21 15:15",
      "tags": [
        "法國",
        "綜合",
        "中性"
      ],
      "summary": "綜合 PMI 將於 2026/05/21 15:15 公布，市場關注前值 47.6、預期 47.1。",
      "event": "法國 綜合 PMI，前值 47.6、預期 47.1、實際 43.5。",
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
      "id": "macro-s-p-global-services-pmi-flash-may-20260521",
      "type": "macro",
      "title": "服務業 PMI",
      "eventName": "服務業 PMI",
      "originalEventName": "S&P Global Services PMI Flash (May)",
      "sourcePublishTime": "2026/05/21 15:30 Asia/Taipei",
      "country": "德國",
      "publishTime": "2026/05/21 15:30",
      "previous": "46.9",
      "forecast": "47",
      "actual": "47.8",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/05/21 15:30",
      "tags": [
        "德國",
        "服務業",
        "中性"
      ],
      "summary": "服務業 PMI 將於 2026/05/21 15:30 公布，市場關注前值 46.9、預期 47.2。",
      "event": "德國 服務業 PMI，前值 46.9、預期 47.2、實際 47.8。",
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
      "id": "macro-s-p-global-composite-pmi-flash-may-20260521",
      "type": "macro",
      "title": "綜合 PMI",
      "eventName": "綜合 PMI",
      "originalEventName": "S&P Global Composite PMI Flash (May)",
      "sourcePublishTime": "2026/05/21 15:30 Asia/Taipei",
      "country": "德國",
      "publishTime": "2026/05/21 15:30",
      "previous": "48.4",
      "forecast": "48.4",
      "actual": "48.6",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏空",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/05/21 15:30",
      "tags": [
        "德國",
        "綜合",
        "中性"
      ],
      "summary": "綜合 PMI 將於 2026/05/21 15:30 公布，市場關注前值 48.4、預期 48.7。",
      "event": "德國 綜合 PMI，前值 48.4、預期 48.7、實際 48.6。",
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
      "id": "macro-s-p-global-manufacturing-pmi-flash-may-20260521",
      "type": "macro",
      "title": "製造業 PMI",
      "eventName": "製造業 PMI",
      "originalEventName": "S&P Global Manufacturing PMI Flash (May)",
      "sourcePublishTime": "2026/05/21 15:30 Asia/Taipei",
      "country": "德國",
      "publishTime": "2026/05/21 15:30",
      "previous": "51.4",
      "forecast": "51",
      "actual": "49.9",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏空",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/05/21 15:30",
      "tags": [
        "德國",
        "製造業",
        "中性"
      ],
      "summary": "製造業 PMI 將於 2026/05/21 15:30 公布，市場關注前值 51.4、預期 51.1。",
      "event": "德國 製造業 PMI，前值 51.4、預期 51.1、實際 49.9。",
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
      "id": "macro-s-p-global-services-pmi-flash-may-20260521",
      "type": "macro",
      "title": "服務業 PMI",
      "eventName": "服務業 PMI",
      "originalEventName": "S&P Global Services PMI Flash (May)",
      "sourcePublishTime": "2026/05/21 16:00 Asia/Taipei",
      "country": "歐元區",
      "publishTime": "2026/05/21 16:00",
      "previous": "—",
      "forecast": "47.7",
      "actual": null,
      "status": "等待公布",
      "statusLevel": "upcoming",
      "direction": "中性",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/05/21 16:00",
      "tags": [
        "歐元區",
        "服務業",
        "中性"
      ],
      "summary": "服務業 PMI 將於 2026/05/21 16:00 公布，市場關注前值 —、預期 47.7。",
      "event": "歐元區 服務業 PMI，前值 —、預期 47.7、實際 尚未公布。",
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
      "id": "macro-s-p-global-composite-pmi-flash-may-20260521",
      "type": "macro",
      "title": "綜合 PMI",
      "eventName": "綜合 PMI",
      "originalEventName": "S&P Global Composite PMI Flash (May)",
      "sourcePublishTime": "2026/05/21 16:00 Asia/Taipei",
      "country": "歐元區",
      "publishTime": "2026/05/21 16:00",
      "previous": "—",
      "forecast": "48.8",
      "actual": null,
      "status": "等待公布",
      "statusLevel": "upcoming",
      "direction": "中性",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/05/21 16:00",
      "tags": [
        "歐元區",
        "綜合",
        "中性"
      ],
      "summary": "綜合 PMI 將於 2026/05/21 16:00 公布，市場關注前值 —、預期 48.8。",
      "event": "歐元區 綜合 PMI，前值 —、預期 48.8、實際 尚未公布。",
      "ai": "目前 AI 判斷為中性觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響市場風險偏好與資金輪動。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "https://www.pmi.spglobal.com/public",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    }
  ]
};
