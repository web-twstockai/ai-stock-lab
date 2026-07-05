window.IntelligenceOverviewData = {
  "updatedAt": "2026/07/05 07:46",
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
      "value": 67,
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
          "48 筆"
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
          "17 個"
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
      "id": "inst-2330-20260703",
      "type": "institutional",
      "title": "2330 台積電",
      "stockCode": "2330",
      "stockName": "台積電",
      "sector": "半導體",
      "group": "半導體",
      "institutionType": "投信",
      "direction": "連買",
      "days": 2,
      "consecutiveBuyDays": 2,
      "streaks": {
        "外資": 0,
        "投信": 2,
        "自營商": 1
      },
      "latestNetBuy": 821,
      "buyVolume": 8219,
      "buyAmount": 200.95,
      "syncCount": 2,
      "importance": "高",
      "timestamp": "2026/07/03 18:20",
      "tags": [
        "投信",
        "連買",
        "半導體",
        "3D技術",
        "3D感測"
      ],
      "summary": "投信連買，近 10 個交易日正買合計 8,219 張，估算金額約 200.95 億元。",
      "event": "投信連買 2 日，近 10 個交易日正買合計 8,219 張；最新日外資 -12,537 張、投信 821 張、自營商 653 張。",
      "ai": "法人買盤集中在 半導體，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 44259.722,
      "yahooVerification": {
        "status": "days-different",
        "source": "https://tw.stock.yahoo.com/quote/2330.TW/institutional-trading",
        "latestNetBuy": 821,
        "days": 3,
        "latestForeign": -12537,
        "latestTrust": 821,
        "latestDealer": 653
      }
    },
    {
      "id": "inst-2609-20260703",
      "type": "institutional",
      "title": "2609 陽明",
      "stockCode": "2609",
      "stockName": "陽明",
      "sector": "航運業",
      "group": "航運業",
      "institutionType": "自營商",
      "direction": "同步買超",
      "days": 4,
      "consecutiveBuyDays": 4,
      "streaks": {
        "外資": 1,
        "投信": 3,
        "自營商": 4
      },
      "latestNetBuy": 1602,
      "buyVolume": 2585,
      "buyAmount": 0,
      "syncCount": 3,
      "importance": "高",
      "timestamp": "2026/07/03 18:20",
      "tags": [
        "自營商",
        "同步買超",
        "航運業",
        "三通",
        "官股企業"
      ],
      "summary": "自營商同步買超，近 10 個交易日正買合計 2,585 張，估算金額約 0.00 億元。",
      "event": "自營商連買 4 日，近 10 個交易日正買合計 2,585 張；最新日外資 12,553 張、投信 38 張、自營商 1,602 張。",
      "ai": "法人買盤集中在 航運業，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 40886.214,
      "yahooVerification": {
        "status": "days-different",
        "source": "https://tw.stock.yahoo.com/quote/2609.TW/institutional-trading",
        "latestNetBuy": 1602,
        "days": 5,
        "latestForeign": 12553,
        "latestTrust": 38,
        "latestDealer": 1602
      }
    },
    {
      "id": "inst-1314-20260703",
      "type": "institutional",
      "title": "1314 中石化",
      "stockCode": "1314",
      "stockName": "中石化",
      "sector": "塑膠工業",
      "group": "塑膠工業",
      "institutionType": "外資",
      "direction": "連買",
      "days": 7,
      "consecutiveBuyDays": 7,
      "streaks": {
        "外資": 7,
        "投信": 0,
        "自營商": 1
      },
      "latestNetBuy": 34371,
      "buyVolume": 113236,
      "buyAmount": 0,
      "syncCount": 2,
      "importance": "高",
      "timestamp": "2026/07/03 18:20",
      "tags": [
        "外資",
        "連買",
        "塑膠工業",
        "高雄經貿園區",
        "資產"
      ],
      "summary": "外資連買，近 10 個交易日正買合計 113,236 張，估算金額約 0.00 億元。",
      "event": "外資連買 7 日，近 10 個交易日正買合計 113,236 張；最新日外資 34,371 張、投信 0 張、自營商 1,217 張。",
      "ai": "法人買盤集中在 塑膠工業，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 114707.614,
      "yahooVerification": {
        "status": "days-different",
        "source": "https://tw.stock.yahoo.com/quote/1314.TW/institutional-trading",
        "latestNetBuy": 34371,
        "days": 8,
        "latestForeign": 34371,
        "latestTrust": 0,
        "latestDealer": 1217
      }
    },
    {
      "id": "inst-1303-20260703",
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
        "自營商": 1
      },
      "latestNetBuy": 3443,
      "buyVolume": 95673,
      "buyAmount": 188.48,
      "syncCount": 2,
      "importance": "高",
      "timestamp": "2026/07/03 18:20",
      "tags": [
        "投信",
        "連買",
        "塑膠工業",
        "APPLE概念",
        "越南設廠"
      ],
      "summary": "投信連買，近 10 個交易日正買合計 95,673 張，估算金額約 188.48 億元。",
      "event": "投信連買 10 日，近 10 個交易日正買合計 95,673 張；最新日外資 -2,697 張、投信 3,443 張、自營商 219 張。",
      "ai": "法人買盤集中在 塑膠工業，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 116460.65,
      "yahooVerification": {
        "status": "days-different",
        "source": "https://tw.stock.yahoo.com/quote/1303.TW/institutional-trading",
        "latestNetBuy": 3443,
        "days": 11,
        "latestForeign": -2697,
        "latestTrust": 3443,
        "latestDealer": 219
      }
    },
    {
      "id": "macro-s-p-global-manufacturing-pmi-flash-jun-20260623",
      "type": "macro",
      "title": "製造業 PMI",
      "eventName": "製造業 PMI",
      "originalEventName": "S&P Global Manufacturing PMI Flash (Jun)",
      "sourcePublishTime": "2026/06/23 15:30 Asia/Taipei",
      "country": "德國",
      "publishTime": "2026/06/23 15:30",
      "previous": "50.1",
      "forecast": "50.5",
      "actual": "50.0",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/06/23 15:30",
      "tags": [
        "德國",
        "製造業",
        "中性"
      ],
      "summary": "製造業 PMI 將於 2026/06/23 15:30 公布，市場關注前值 50.1、預期 49.8。",
      "event": "德國 製造業 PMI，前值 50.1、預期 49.8、實際 50.0。",
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
      "id": "macro-s-p-global-composite-pmi-flash-jun-20260623",
      "type": "macro",
      "title": "綜合 PMI",
      "eventName": "綜合 PMI",
      "originalEventName": "S&P Global Composite PMI Flash (Jun)",
      "sourcePublishTime": "2026/06/23 15:15 Asia/Taipei",
      "country": "法國",
      "publishTime": "2026/06/23 15:15",
      "previous": "44.9",
      "forecast": "46",
      "actual": "47.6",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/06/23 15:15",
      "tags": [
        "法國",
        "綜合",
        "中性"
      ],
      "summary": "綜合 PMI 將於 2026/06/23 15:15 公布，市場關注前值 44.9、預期 46.4。",
      "event": "法國 綜合 PMI，前值 44.9、預期 46.4、實際 47.6。",
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
      "id": "macro-s-p-global-manufacturing-pmi-flash-jun-20260623",
      "type": "macro",
      "title": "製造業 PMI",
      "eventName": "製造業 PMI",
      "originalEventName": "S&P Global Manufacturing PMI Flash (Jun)",
      "sourcePublishTime": "2026/06/23 15:15 Asia/Taipei",
      "country": "法國",
      "publishTime": "2026/06/23 15:15",
      "previous": "49.7",
      "forecast": "50",
      "actual": "50.7",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/06/23 15:15",
      "tags": [
        "法國",
        "製造業",
        "中性"
      ],
      "summary": "製造業 PMI 將於 2026/06/23 15:15 公布，市場關注前值 49.7、預期 50.1。",
      "event": "法國 製造業 PMI，前值 49.7、預期 50.1、實際 50.7。",
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
      "id": "macro-s-p-global-services-pmi-flash-jun-20260623",
      "type": "macro",
      "title": "服務業 PMI",
      "eventName": "服務業 PMI",
      "originalEventName": "S&P Global Services PMI Flash (Jun)",
      "sourcePublishTime": "2026/06/23 15:15 Asia/Taipei",
      "country": "法國",
      "publishTime": "2026/06/23 15:15",
      "previous": "44.3",
      "forecast": "45.5",
      "actual": "47.4",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/06/23 15:15",
      "tags": [
        "法國",
        "服務業",
        "中性"
      ],
      "summary": "服務業 PMI 將於 2026/06/23 15:15 公布，市場關注前值 44.3、預期 46.0。",
      "event": "法國 服務業 PMI，前值 44.3、預期 46.0、實際 47.4。",
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
      "id": "macro-s-p-global-composite-pmi-flash-jun-20260623",
      "type": "macro",
      "title": "綜合 PMI",
      "eventName": "綜合 PMI",
      "originalEventName": "S&P Global Composite PMI Flash (Jun)",
      "sourcePublishTime": "2026/06/23 15:15 Asia/Taipei",
      "country": "法國",
      "publishTime": "2026/06/23 15:15",
      "previous": "44.9",
      "forecast": "46",
      "actual": "47.6",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/06/23 15:15",
      "tags": [
        "法國",
        "綜合",
        "中性"
      ],
      "summary": "綜合 PMI 將於 2026/06/23 15:15 公布，市場關注前值 44.9、預期 46.4。",
      "event": "法國 綜合 PMI，前值 44.9、預期 46.4、實際 47.6。",
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
      "id": "macro-s-p-global-manufacturing-pmi-flash-jun-20260623",
      "type": "macro",
      "title": "製造業 PMI",
      "eventName": "製造業 PMI",
      "originalEventName": "S&P Global Manufacturing PMI Flash (Jun)",
      "sourcePublishTime": "2026/06/23 15:15 Asia/Taipei",
      "country": "法國",
      "publishTime": "2026/06/23 15:15",
      "previous": "49.7",
      "forecast": "50",
      "actual": "50.7",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/06/23 15:15",
      "tags": [
        "法國",
        "製造業",
        "中性"
      ],
      "summary": "製造業 PMI 將於 2026/06/23 15:15 公布，市場關注前值 49.7、預期 50.1。",
      "event": "法國 製造業 PMI，前值 49.7、預期 50.1、實際 50.7。",
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
      "id": "macro-s-p-global-services-pmi-flash-jun-20260623",
      "type": "macro",
      "title": "服務業 PMI",
      "eventName": "服務業 PMI",
      "originalEventName": "S&P Global Services PMI Flash (Jun)",
      "sourcePublishTime": "2026/06/23 15:15 Asia/Taipei",
      "country": "法國",
      "publishTime": "2026/06/23 15:15",
      "previous": "44.3",
      "forecast": "45.5",
      "actual": "47.4",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/06/23 15:15",
      "tags": [
        "法國",
        "服務業",
        "中性"
      ],
      "summary": "服務業 PMI 將於 2026/06/23 15:15 公布，市場關注前值 44.3、預期 46.0。",
      "event": "法國 服務業 PMI，前值 44.3、預期 46.0、實際 47.4。",
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
      "id": "macro-s-p-global-manufacturing-pmi-flash-jun-20260623",
      "type": "macro",
      "title": "製造業 PMI",
      "eventName": "製造業 PMI",
      "originalEventName": "S&P Global Manufacturing PMI Flash (Jun)",
      "sourcePublishTime": "2026/06/23 15:30 Asia/Taipei",
      "country": "德國",
      "publishTime": "2026/06/23 15:30",
      "previous": "50.1",
      "forecast": "50.5",
      "actual": "50.0",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/06/23 15:30",
      "tags": [
        "德國",
        "製造業",
        "中性"
      ],
      "summary": "製造業 PMI 將於 2026/06/23 15:30 公布，市場關注前值 50.1、預期 49.8。",
      "event": "德國 製造業 PMI，前值 50.1、預期 49.8、實際 50.0。",
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
      "id": "macro-s-p-global-composite-pmi-flash-jun-20260623",
      "type": "macro",
      "title": "綜合 PMI",
      "eventName": "綜合 PMI",
      "originalEventName": "S&P Global Composite PMI Flash (Jun)",
      "sourcePublishTime": "2026/06/23 15:30 Asia/Taipei",
      "country": "德國",
      "publishTime": "2026/06/23 15:30",
      "previous": "48.8",
      "forecast": "49.9",
      "actual": "48.0",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏空",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/06/23 15:30",
      "tags": [
        "德國",
        "綜合",
        "中性"
      ],
      "summary": "綜合 PMI 將於 2026/06/23 15:30 公布，市場關注前值 48.8、預期 49.5。",
      "event": "德國 綜合 PMI，前值 48.8、預期 49.5、實際 48.0。",
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
      "id": "macro-s-p-global-services-pmi-flash-jun-20260623",
      "type": "macro",
      "title": "服務業 PMI",
      "eventName": "服務業 PMI",
      "originalEventName": "S&P Global Services PMI Flash (Jun)",
      "sourcePublishTime": "2026/06/23 15:30 Asia/Taipei",
      "country": "德國",
      "publishTime": "2026/06/23 15:30",
      "previous": "48.1",
      "forecast": "49",
      "actual": "46.8",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏空",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/06/23 15:30",
      "tags": [
        "德國",
        "服務業",
        "中性"
      ],
      "summary": "服務業 PMI 將於 2026/06/23 15:30 公布，市場關注前值 48.1、預期 48.5。",
      "event": "德國 服務業 PMI，前值 48.1、預期 48.5、實際 46.8。",
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
      "id": "macro-s-p-global-composite-pmi-flash-jun-20260623",
      "type": "macro",
      "title": "綜合 PMI",
      "eventName": "綜合 PMI",
      "originalEventName": "S&P Global Composite PMI Flash (Jun)",
      "sourcePublishTime": "2026/06/23 16:00 Asia/Taipei",
      "country": "歐元區",
      "publishTime": "2026/06/23 16:00",
      "previous": "—",
      "forecast": "49.1",
      "actual": null,
      "status": "等待公布",
      "statusLevel": "upcoming",
      "direction": "中性",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/06/23 16:00",
      "tags": [
        "歐元區",
        "綜合",
        "中性"
      ],
      "summary": "綜合 PMI 將於 2026/06/23 16:00 公布，市場關注前值 —、預期 49.1。",
      "event": "歐元區 綜合 PMI，前值 —、預期 49.1、實際 尚未公布。",
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
      "id": "macro-s-p-global-manufacturing-pmi-flash-jun-20260623",
      "type": "macro",
      "title": "製造業 PMI",
      "eventName": "製造業 PMI",
      "originalEventName": "S&P Global Manufacturing PMI Flash (Jun)",
      "sourcePublishTime": "2026/06/23 16:00 Asia/Taipei",
      "country": "歐元區",
      "publishTime": "2026/06/23 16:00",
      "previous": "—",
      "forecast": "51.6",
      "actual": null,
      "status": "等待公布",
      "statusLevel": "upcoming",
      "direction": "中性",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/06/23 16:00",
      "tags": [
        "歐元區",
        "製造業",
        "中性"
      ],
      "summary": "製造業 PMI 將於 2026/06/23 16:00 公布，市場關注前值 —、預期 51.6。",
      "event": "歐元區 製造業 PMI，前值 —、預期 51.6、實際 尚未公布。",
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
