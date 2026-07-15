window.IntelligenceOverviewData = {
  "updatedAt": "2026/07/15 07:46",
  "status": "運作中",
  "cards": [
    {
      "label": "今日偵測情報",
      "value": 251,
      "unit": "筆",
      "icon": "file"
    },
    {
      "label": "高重要度訊號",
      "value": 77,
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
          "22 筆"
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
      "id": "inst-1303-20260714",
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
        "自營商": 4
      },
      "latestNetBuy": 12080,
      "buyVolume": 53322,
      "buyAmount": 106.38,
      "syncCount": 2,
      "importance": "高",
      "timestamp": "2026/07/14 18:20",
      "tags": [
        "投信",
        "連買",
        "塑膠工業",
        "APPLE概念",
        "越南設廠"
      ],
      "summary": "投信連買，近 10 個交易日正買合計 53,322 張，估算金額約 106.38 億元。",
      "event": "投信連買 10 日，近 10 個交易日正買合計 53,322 張；最新日外資 -22,778 張、投信 12,080 張、自營商 5,501 張。",
      "ai": "法人買盤集中在 塑膠工業，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 84162.884,
      "yahooVerification": {
        "status": "days-different",
        "source": "https://tw.stock.yahoo.com/quote/1303.TW/institutional-trading",
        "latestNetBuy": 12080,
        "days": 17,
        "latestForeign": -22778,
        "latestTrust": 12080,
        "latestDealer": 5501
      }
    },
    {
      "id": "inst-2303-20260714",
      "type": "institutional",
      "title": "2303 聯電",
      "stockCode": "2303",
      "stockName": "聯電",
      "sector": "半導體",
      "group": "半導體",
      "institutionType": "外資",
      "direction": "連買",
      "days": 2,
      "consecutiveBuyDays": 2,
      "streaks": {
        "外資": 2,
        "投信": 0,
        "自營商": 0
      },
      "latestNetBuy": 15733,
      "buyVolume": 189003,
      "buyAmount": 290.12,
      "syncCount": 1,
      "importance": "高",
      "timestamp": "2026/07/14 18:20",
      "tags": [
        "外資",
        "連買",
        "半導體",
        "手機",
        "車用電子相關"
      ],
      "summary": "外資連買，近 10 個交易日正買合計 189,003 張，估算金額約 290.12 億元。",
      "event": "外資連買 2 日，近 10 個交易日正買合計 189,003 張；最新日外資 15,733 張、投信 -661 張、自營商 -8,900 張。",
      "ai": "法人買盤集中在 半導體，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 207994.039,
      "yahooVerification": {
        "status": "matched",
        "source": "https://tw.stock.yahoo.com/quote/2303.TW/institutional-trading",
        "latestNetBuy": 15733,
        "days": 2,
        "latestForeign": 15733,
        "latestTrust": -661,
        "latestDealer": -8900
      }
    },
    {
      "id": "inst-2382-20260714",
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
        "自營商": 3
      },
      "latestNetBuy": 3555,
      "buyVolume": 21322,
      "buyAmount": 80.6,
      "syncCount": 2,
      "importance": "高",
      "timestamp": "2026/07/14 18:20",
      "tags": [
        "投信",
        "連買",
        "電腦及週邊設備",
        "5G",
        "APPLE概念"
      ],
      "summary": "投信連買，近 10 個交易日正買合計 21,322 張，估算金額約 80.60 億元。",
      "event": "投信連買 10 日，近 10 個交易日正買合計 21,322 張；最新日外資 -6,231 張、投信 3,555 張、自營商 740 張。",
      "ai": "法人買盤集中在 電腦及週邊設備，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 27587.785,
      "yahooVerification": {
        "status": "days-different",
        "source": "https://tw.stock.yahoo.com/quote/2382.TW/institutional-trading",
        "latestNetBuy": 3555,
        "days": 37,
        "latestForeign": -6231,
        "latestTrust": 3555,
        "latestDealer": 740
      }
    },
    {
      "id": "inst-2330-20260714",
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
        "自營商": 4
      },
      "latestNetBuy": 1546,
      "buyVolume": 10358,
      "buyAmount": 252.73,
      "syncCount": 2,
      "importance": "高",
      "timestamp": "2026/07/14 18:20",
      "tags": [
        "投信",
        "連買",
        "半導體",
        "3D技術",
        "3D感測"
      ],
      "summary": "投信連買，近 10 個交易日正買合計 10,358 張，估算金額約 252.73 億元。",
      "event": "投信連買 9 日，近 10 個交易日正買合計 10,358 張；最新日外資 -12,416 張、投信 1,546 張、自營商 2,570 張。",
      "ai": "法人買盤集中在 半導體，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 23232.909,
      "yahooVerification": {
        "status": "matched",
        "source": "https://tw.stock.yahoo.com/quote/2330.TW/institutional-trading",
        "latestNetBuy": 1546,
        "days": 9,
        "latestForeign": -12416,
        "latestTrust": 1546,
        "latestDealer": 2570
      }
    },
    {
      "id": "macro-s-p-global-manufacturing-pmi-final-jun-20260701",
      "type": "macro",
      "title": "製造業 PMI",
      "eventName": "製造業 PMI",
      "originalEventName": "S&P Global Manufacturing PMI Final (Jun)",
      "sourcePublishTime": "2026/07/01 16:00 Asia/Taipei",
      "country": "歐元區",
      "publishTime": "2026/07/01 16:00",
      "previous": "—",
      "forecast": "51.3",
      "actual": null,
      "status": "等待公布",
      "statusLevel": "upcoming",
      "direction": "中性",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/07/01 16:00",
      "tags": [
        "歐元區",
        "製造業",
        "中性"
      ],
      "summary": "製造業 PMI 將於 2026/07/01 16:00 公布，市場關注前值 —、預期 51.3。",
      "event": "歐元區 製造業 PMI，前值 —、預期 51.3、實際 尚未公布。",
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
      "id": "macro-s-p-global-manufacturing-pmi-final-jun-20260701",
      "type": "macro",
      "title": "製造業 PMI",
      "eventName": "製造業 PMI",
      "originalEventName": "S&P Global Manufacturing PMI Final (Jun)",
      "sourcePublishTime": "2026/07/01 15:55 Asia/Taipei",
      "country": "德國",
      "publishTime": "2026/07/01 15:55",
      "previous": "50.1",
      "forecast": "50",
      "actual": "50.3",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/07/01 15:55",
      "tags": [
        "德國",
        "製造業",
        "中性"
      ],
      "summary": "製造業 PMI 將於 2026/07/01 15:55 公布，市場關注前值 50.1、預期 50.0。",
      "event": "德國 製造業 PMI，前值 50.1、預期 50.0、實際 50.3。",
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
      "id": "macro-s-p-global-manufacturing-pmi-final-jun-20260701",
      "type": "macro",
      "title": "製造業 PMI",
      "eventName": "製造業 PMI",
      "originalEventName": "S&P Global Manufacturing PMI Final (Jun)",
      "sourcePublishTime": "2026/07/01 15:50 Asia/Taipei",
      "country": "法國",
      "publishTime": "2026/07/01 15:50",
      "previous": "49.7",
      "forecast": "50.7",
      "actual": "51.2",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/07/01 15:50",
      "tags": [
        "法國",
        "製造業",
        "中性"
      ],
      "summary": "製造業 PMI 將於 2026/07/01 15:50 公布，市場關注前值 49.7、預期 50.7。",
      "event": "法國 製造業 PMI，前值 49.7、預期 50.7、實際 51.2。",
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
      "id": "macro-ecb-forum-on-central-banking-20260701",
      "type": "macro",
      "title": "ECB Forum on Central Banking",
      "eventName": "ECB Forum on Central Banking",
      "originalEventName": "ECB Forum on Central Banking",
      "sourcePublishTime": "2026/07/01 08:00 Asia/Taipei",
      "country": "歐元區",
      "publishTime": "2026/07/01 08:00",
      "previous": "—",
      "forecast": "—",
      "actual": null,
      "status": "等待公布",
      "statusLevel": "upcoming",
      "direction": "中性",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/07/01 08:00",
      "tags": [
        "歐元區",
        "ECB",
        "中性"
      ],
      "summary": "ECB Forum on Central Banking 將於 2026/07/01 08:00 公布，市場關注前值 —、預期 —。",
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
      "id": "macro-ecb-forum-on-central-banking-20260701",
      "type": "macro",
      "title": "ECB Forum on Central Banking",
      "eventName": "ECB Forum on Central Banking",
      "originalEventName": "ECB Forum on Central Banking",
      "sourcePublishTime": "2026/07/01 08:00 Asia/Taipei",
      "country": "歐元區",
      "publishTime": "2026/07/01 08:00",
      "previous": "—",
      "forecast": "—",
      "actual": null,
      "status": "等待公布",
      "statusLevel": "upcoming",
      "direction": "中性",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/07/01 08:00",
      "tags": [
        "歐元區",
        "ECB",
        "中性"
      ],
      "summary": "ECB Forum on Central Banking 將於 2026/07/01 08:00 公布，市場關注前值 —、預期 —。",
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
      "id": "macro-s-p-global-manufacturing-pmi-final-jun-20260701",
      "type": "macro",
      "title": "製造業 PMI",
      "eventName": "製造業 PMI",
      "originalEventName": "S&P Global Manufacturing PMI Final (Jun)",
      "sourcePublishTime": "2026/07/01 15:50 Asia/Taipei",
      "country": "法國",
      "publishTime": "2026/07/01 15:50",
      "previous": "49.7",
      "forecast": "50.7",
      "actual": "51.2",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/07/01 15:50",
      "tags": [
        "法國",
        "製造業",
        "中性"
      ],
      "summary": "製造業 PMI 將於 2026/07/01 15:50 公布，市場關注前值 49.7、預期 50.7。",
      "event": "法國 製造業 PMI，前值 49.7、預期 50.7、實際 51.2。",
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
      "id": "macro-s-p-global-manufacturing-pmi-final-jun-20260701",
      "type": "macro",
      "title": "製造業 PMI",
      "eventName": "製造業 PMI",
      "originalEventName": "S&P Global Manufacturing PMI Final (Jun)",
      "sourcePublishTime": "2026/07/01 15:55 Asia/Taipei",
      "country": "德國",
      "publishTime": "2026/07/01 15:55",
      "previous": "50.1",
      "forecast": "50",
      "actual": "50.3",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/07/01 15:55",
      "tags": [
        "德國",
        "製造業",
        "中性"
      ],
      "summary": "製造業 PMI 將於 2026/07/01 15:55 公布，市場關注前值 50.1、預期 50.0。",
      "event": "德國 製造業 PMI，前值 50.1、預期 50.0、實際 50.3。",
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
      "id": "macro-s-p-global-manufacturing-pmi-final-jun-20260701",
      "type": "macro",
      "title": "製造業 PMI",
      "eventName": "製造業 PMI",
      "originalEventName": "S&P Global Manufacturing PMI Final (Jun)",
      "sourcePublishTime": "2026/07/01 16:00 Asia/Taipei",
      "country": "歐元區",
      "publishTime": "2026/07/01 16:00",
      "previous": "—",
      "forecast": "51.3",
      "actual": null,
      "status": "等待公布",
      "statusLevel": "upcoming",
      "direction": "中性",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/07/01 16:00",
      "tags": [
        "歐元區",
        "製造業",
        "中性"
      ],
      "summary": "製造業 PMI 將於 2026/07/01 16:00 公布，市場關注前值 —、預期 51.3。",
      "event": "歐元區 製造業 PMI，前值 —、預期 51.3、實際 尚未公布。",
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
      "id": "macro-s-p-global-manufacturing-pmi-final-jun-20260701",
      "type": "macro",
      "title": "製造業 PMI",
      "eventName": "製造業 PMI",
      "originalEventName": "S&P Global Manufacturing PMI Final (Jun)",
      "sourcePublishTime": "2026/07/01 16:30 Asia/Taipei",
      "country": "英國",
      "publishTime": "2026/07/01 16:30",
      "previous": "53.9",
      "forecast": "53.1",
      "actual": "52.5",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏空",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/07/01 16:30",
      "tags": [
        "英國",
        "製造業",
        "中性"
      ],
      "summary": "製造業 PMI 將於 2026/07/01 16:30 公布，市場關注前值 53.9、預期 53.1。",
      "event": "英國 製造業 PMI，前值 53.9、預期 53.1、實際 52.5。",
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
      "id": "macro-cpi-flash-jun-20260701",
      "type": "macro",
      "title": "消費者物價指數 CPI",
      "eventName": "消費者物價指數 CPI",
      "originalEventName": "CPI Flash (Jun)",
      "sourcePublishTime": "2026/07/01 17:00 Asia/Taipei",
      "country": "歐元區",
      "publishTime": "2026/07/01 17:00",
      "previous": "103.13",
      "forecast": "103.07",
      "actual": "103.07",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "importance": "高",
      "timestamp": "2026/07/01 17:00",
      "tags": [
        "歐元區",
        "消費者物價指數",
        "中性"
      ],
      "summary": "消費者物價指數 CPI 將於 2026/07/01 17:00 公布，市場關注前值 103.13、預期 103.07。",
      "event": "歐元區 消費者物價指數 CPI，前值 103.13、預期 103.07、實際 103.07。",
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
      "id": "macro-core-inflation-rate-yoy-flash-jun-20260701",
      "type": "macro",
      "title": "核心通膨率",
      "eventName": "核心通膨率",
      "originalEventName": "Core Inflation Rate YoY Flash (Jun)",
      "sourcePublishTime": "2026/07/01 17:00 Asia/Taipei",
      "country": "歐元區",
      "publishTime": "2026/07/01 17:00",
      "previous": "2.6",
      "forecast": "2.6",
      "actual": "2.4",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "importance": "中高",
      "timestamp": "2026/07/01 17:00",
      "tags": [
        "歐元區",
        "核心通膨率",
        "偏多"
      ],
      "summary": "核心通膨率 將於 2026/07/01 17:00 公布，市場關注前值 2.6、預期 2.6。",
      "event": "歐元區 核心通膨率，前值 2.6、預期 2.6、實際 2.4。",
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
      "id": "macro-inflation-rate-yoy-flash-jun-20260701",
      "type": "macro",
      "title": "通膨率",
      "eventName": "通膨率",
      "originalEventName": "Inflation Rate YoY Flash (Jun)",
      "sourcePublishTime": "2026/07/01 17:00 Asia/Taipei",
      "country": "歐元區",
      "publishTime": "2026/07/01 17:00",
      "previous": "3.2",
      "forecast": "3",
      "actual": "2.8",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "importance": "中高",
      "timestamp": "2026/07/01 17:00",
      "tags": [
        "歐元區",
        "通膨率",
        "偏多"
      ],
      "summary": "通膨率 將於 2026/07/01 17:00 公布，市場關注前值 3.2、預期 3。",
      "event": "歐元區 通膨率，前值 3.2、預期 3、實際 2.8。",
      "ai": "目前 AI 判斷為偏多觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
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
