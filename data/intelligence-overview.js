window.IntelligenceOverviewData = {
  "updatedAt": "2026/09/15 18:30",
  "status": "運作中",
  "cards": [
    {
      "label": "今日偵測情報",
      "value": 233,
      "unit": "筆",
      "icon": "file"
    },
    {
      "label": "高重要度訊號",
      "value": 45,
      "unit": "筆",
      "icon": "alert",
      "accent": "orange"
    },
    {
      "label": "追蹤標的",
      "value": 76,
      "unit": "家",
      "icon": "target"
    },
    {
      "label": "下一個總經事件",
      "value": "製造業 PMI",
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
          "76 筆"
        ],
        [
          "投信連買",
          "26 筆"
        ],
        [
          "三大法人同步買",
          "9 筆"
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
          "18 個"
        ],
        [
          "下一事件",
          "製造業 PMI"
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
      "id": "inst-2412-20260915",
      "type": "institutional",
      "title": "2412 中華電",
      "stockCode": "2412",
      "stockName": "中華電",
      "sector": "通信網路業",
      "group": "通信網路業",
      "institutionType": "外資",
      "direction": "連買",
      "days": 10,
      "consecutiveBuyDays": 10,
      "streaks": {
        "外資": 10,
        "投信": 0,
        "自營商": 1
      },
      "latestNetBuy": 11836,
      "buyVolume": 60926,
      "buyAmount": 0,
      "syncCount": 2,
      "importance": "高",
      "timestamp": "2026/09/15 18:20",
      "tags": [
        "外資",
        "連買",
        "通信網路業",
        "NFC近場通訊",
        "手機"
      ],
      "summary": "外資連買，近 10 個交易日正買合計 60,926 張，估算金額約 0.00 億元。",
      "event": "外資連買 10 日，近 10 個交易日正買合計 60,926 張；最新日外資 11,836 張、投信 -33 張、自營商 99 張。",
      "ai": "法人買盤集中在 通信網路業，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 62738.53,
      "yahooVerification": {
        "status": "days-different",
        "source": "https://tw.stock.yahoo.com/quote/2412.TW/institutional-trading",
        "latestNetBuy": 11836,
        "days": 11,
        "latestForeign": 11836,
        "latestTrust": -33,
        "latestDealer": 99
      }
    },
    {
      "id": "inst-3105-20260915",
      "type": "institutional",
      "title": "3105 穩懋",
      "stockCode": "3105",
      "stockName": "穩懋",
      "sector": "半導體",
      "group": "半導體",
      "institutionType": "投信",
      "direction": "連買",
      "days": 7,
      "consecutiveBuyDays": 7,
      "streaks": {
        "外資": 2,
        "投信": 7,
        "自營商": 0
      },
      "latestNetBuy": 1866,
      "buyVolume": 11207,
      "buyAmount": 0,
      "syncCount": 2,
      "importance": "高",
      "timestamp": "2026/09/15 18:20",
      "tags": [
        "投信",
        "連買",
        "半導體",
        "3D技術",
        "3D感測"
      ],
      "summary": "投信連買，近 10 個交易日正買合計 11,207 張，估算金額約 0.00 億元。",
      "event": "投信連買 7 日，近 10 個交易日正買合計 11,207 張；最新日外資 3,170 張、投信 1,866 張、自營商 -365 張。",
      "ai": "法人買盤集中在 半導體，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 20686.188,
      "yahooVerification": {
        "status": "matched",
        "source": "https://tw.stock.yahoo.com/quote/3105.TW/institutional-trading",
        "latestNetBuy": 1866,
        "days": 7,
        "latestForeign": 3170,
        "latestTrust": 1866,
        "latestDealer": -365
      }
    },
    {
      "id": "inst-2382-20260915",
      "type": "institutional",
      "title": "2382 廣達",
      "stockCode": "2382",
      "stockName": "廣達",
      "sector": "電腦及週邊設備",
      "group": "電腦及週邊設備",
      "institutionType": "外資",
      "direction": "同步買超",
      "days": 3,
      "consecutiveBuyDays": 3,
      "streaks": {
        "外資": 3,
        "投信": 3,
        "自營商": 3
      },
      "latestNetBuy": 522,
      "buyVolume": 31199,
      "buyAmount": 103.74,
      "syncCount": 3,
      "importance": "高",
      "timestamp": "2026/09/15 18:20",
      "tags": [
        "外資",
        "同步買超",
        "電腦及週邊設備",
        "5G",
        "APPLE概念"
      ],
      "summary": "外資同步買超，近 10 個交易日正買合計 31,199 張，估算金額約 103.74 億元。",
      "event": "外資連買 3 日，近 10 個交易日正買合計 31,199 張；最新日外資 522 張、投信 433 張、自營商 86 張。",
      "ai": "法人買盤集中在 電腦及週邊設備，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 36170.688,
      "yahooVerification": {
        "status": "matched",
        "source": "https://tw.stock.yahoo.com/quote/2382.TW/institutional-trading",
        "latestNetBuy": 522,
        "days": 3,
        "latestForeign": 522,
        "latestTrust": 433,
        "latestDealer": 86
      }
    },
    {
      "id": "inst-2801-20260915",
      "type": "institutional",
      "title": "2801 彰銀",
      "stockCode": "2801",
      "stockName": "彰銀",
      "sector": "金融保險",
      "group": "金融保險",
      "institutionType": "投信",
      "direction": "連買",
      "days": 8,
      "consecutiveBuyDays": 8,
      "streaks": {
        "外資": 0,
        "投信": 8,
        "自營商": 1
      },
      "latestNetBuy": 3842,
      "buyVolume": 44219,
      "buyAmount": 0,
      "syncCount": 2,
      "importance": "高",
      "timestamp": "2026/09/15 18:20",
      "tags": [
        "投信",
        "連買",
        "金融保險",
        "官股企業",
        "金融業"
      ],
      "summary": "投信連買，近 10 個交易日正買合計 44,219 張，估算金額約 0.00 億元。",
      "event": "投信連買 8 日，近 10 個交易日正買合計 44,219 張；最新日外資 -21,978 張、投信 3,842 張、自營商 225 張。",
      "ai": "法人買盤集中在 金融保險，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 68969.089,
      "yahooVerification": {
        "status": "matched",
        "source": "https://tw.stock.yahoo.com/quote/2801.TW/institutional-trading",
        "latestNetBuy": 3842,
        "days": 8,
        "latestForeign": -21978,
        "latestTrust": 3842,
        "latestDealer": 225
      }
    },
    {
      "id": "macro-s-p-global-manufacturing-pmi-final-aug-20260901",
      "type": "macro",
      "title": "製造業 PMI",
      "eventName": "製造業 PMI",
      "originalEventName": "S&P Global Manufacturing PMI Final (Aug)",
      "sourcePublishTime": "2026/09/01 16:30 Asia/Taipei",
      "country": "英國",
      "publishTime": "2026/09/01 16:30",
      "previous": "51.9",
      "forecast": "51.5",
      "actual": "51.7",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/09/01 16:30",
      "tags": [
        "英國",
        "製造業",
        "中性"
      ],
      "summary": "製造業 PMI 將於 2026/09/01 16:30 公布，市場關注前值 51.9、預期 51.5。",
      "event": "英國 製造業 PMI，前值 51.9、預期 51.5、實際 51.7。",
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
      "id": "macro-s-p-global-manufacturing-pmi-final-aug-20260901",
      "type": "macro",
      "title": "製造業 PMI",
      "eventName": "製造業 PMI",
      "originalEventName": "S&P Global Manufacturing PMI Final (Aug)",
      "sourcePublishTime": "2026/09/01 16:00 Asia/Taipei",
      "country": "歐元區",
      "publishTime": "2026/09/01 16:00",
      "previous": "—",
      "forecast": "52.8",
      "actual": null,
      "status": "等待公布",
      "statusLevel": "upcoming",
      "direction": "中性",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/09/01 16:00",
      "tags": [
        "歐元區",
        "製造業",
        "中性"
      ],
      "summary": "製造業 PMI 將於 2026/09/01 16:00 公布，市場關注前值 —、預期 52.8。",
      "event": "歐元區 製造業 PMI，前值 —、預期 52.8、實際 尚未公布。",
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
      "id": "macro-s-p-global-manufacturing-pmi-final-aug-20260901",
      "type": "macro",
      "title": "製造業 PMI",
      "eventName": "製造業 PMI",
      "originalEventName": "S&P Global Manufacturing PMI Final (Aug)",
      "sourcePublishTime": "2026/09/01 15:55 Asia/Taipei",
      "country": "德國",
      "publishTime": "2026/09/01 15:55",
      "previous": "52.2",
      "forecast": "54.1",
      "actual": "54.3",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/09/01 15:55",
      "tags": [
        "德國",
        "製造業",
        "中性"
      ],
      "summary": "製造業 PMI 將於 2026/09/01 15:55 公布，市場關注前值 52.2、預期 54.1。",
      "event": "德國 製造業 PMI，前值 52.2、預期 54.1、實際 54.3。",
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
      "id": "macro-s-p-global-manufacturing-pmi-final-aug-20260901",
      "type": "macro",
      "title": "製造業 PMI",
      "eventName": "製造業 PMI",
      "originalEventName": "S&P Global Manufacturing PMI Final (Aug)",
      "sourcePublishTime": "2026/09/01 15:50 Asia/Taipei",
      "country": "法國",
      "publishTime": "2026/09/01 15:50",
      "previous": "49.8",
      "forecast": "51.5",
      "actual": "51.1",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏空",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/09/01 15:50",
      "tags": [
        "法國",
        "製造業",
        "中性"
      ],
      "summary": "製造業 PMI 將於 2026/09/01 15:50 公布，市場關注前值 49.8、預期 51.5。",
      "event": "法國 製造業 PMI，前值 49.8、預期 51.5、實際 51.1。",
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
      "id": "macro-s-p-global-manufacturing-pmi-final-aug-20260901",
      "type": "macro",
      "title": "製造業 PMI",
      "eventName": "製造業 PMI",
      "originalEventName": "S&P Global Manufacturing PMI Final (Aug)",
      "sourcePublishTime": "2026/09/01 15:50 Asia/Taipei",
      "country": "法國",
      "publishTime": "2026/09/01 15:50",
      "previous": "49.8",
      "forecast": "51.5",
      "actual": "51.1",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏空",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/09/01 15:50",
      "tags": [
        "法國",
        "製造業",
        "中性"
      ],
      "summary": "製造業 PMI 將於 2026/09/01 15:50 公布，市場關注前值 49.8、預期 51.5。",
      "event": "法國 製造業 PMI，前值 49.8、預期 51.5、實際 51.1。",
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
      "id": "macro-s-p-global-manufacturing-pmi-final-aug-20260901",
      "type": "macro",
      "title": "製造業 PMI",
      "eventName": "製造業 PMI",
      "originalEventName": "S&P Global Manufacturing PMI Final (Aug)",
      "sourcePublishTime": "2026/09/01 15:55 Asia/Taipei",
      "country": "德國",
      "publishTime": "2026/09/01 15:55",
      "previous": "52.2",
      "forecast": "54.1",
      "actual": "54.3",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/09/01 15:55",
      "tags": [
        "德國",
        "製造業",
        "中性"
      ],
      "summary": "製造業 PMI 將於 2026/09/01 15:55 公布，市場關注前值 52.2、預期 54.1。",
      "event": "德國 製造業 PMI，前值 52.2、預期 54.1、實際 54.3。",
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
      "id": "macro-s-p-global-manufacturing-pmi-final-aug-20260901",
      "type": "macro",
      "title": "製造業 PMI",
      "eventName": "製造業 PMI",
      "originalEventName": "S&P Global Manufacturing PMI Final (Aug)",
      "sourcePublishTime": "2026/09/01 16:00 Asia/Taipei",
      "country": "歐元區",
      "publishTime": "2026/09/01 16:00",
      "previous": "—",
      "forecast": "52.8",
      "actual": null,
      "status": "等待公布",
      "statusLevel": "upcoming",
      "direction": "中性",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/09/01 16:00",
      "tags": [
        "歐元區",
        "製造業",
        "中性"
      ],
      "summary": "製造業 PMI 將於 2026/09/01 16:00 公布，市場關注前值 —、預期 52.8。",
      "event": "歐元區 製造業 PMI，前值 —、預期 52.8、實際 尚未公布。",
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
      "id": "macro-s-p-global-manufacturing-pmi-final-aug-20260901",
      "type": "macro",
      "title": "製造業 PMI",
      "eventName": "製造業 PMI",
      "originalEventName": "S&P Global Manufacturing PMI Final (Aug)",
      "sourcePublishTime": "2026/09/01 16:30 Asia/Taipei",
      "country": "英國",
      "publishTime": "2026/09/01 16:30",
      "previous": "51.9",
      "forecast": "51.5",
      "actual": "51.7",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/09/01 16:30",
      "tags": [
        "英國",
        "製造業",
        "中性"
      ],
      "summary": "製造業 PMI 將於 2026/09/01 16:30 公布，市場關注前值 51.9、預期 51.5。",
      "event": "英國 製造業 PMI，前值 51.9、預期 51.5、實際 51.7。",
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
      "id": "macro-inflation-rate-mom-flash-aug-20260901",
      "type": "macro",
      "title": "通膨率",
      "eventName": "通膨率",
      "originalEventName": "Inflation Rate MoM Flash (Aug)",
      "sourcePublishTime": "2026/09/01 17:00 Asia/Taipei",
      "country": "歐元區",
      "publishTime": "2026/09/01 17:00",
      "previous": "0.2",
      "forecast": "3.3",
      "actual": "0.4",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "importance": "中高",
      "timestamp": "2026/09/01 17:00",
      "tags": [
        "歐元區",
        "通膨率",
        "中性"
      ],
      "summary": "通膨率 將於 2026/09/01 17:00 公布，市場關注前值 0.2、預期 —。",
      "event": "歐元區 通膨率，前值 0.2、預期 —、實際 0.4。",
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
      "id": "macro-core-inflation-rate-yoy-flash-aug-20260901",
      "type": "macro",
      "title": "核心通膨率",
      "eventName": "核心通膨率",
      "originalEventName": "Core Inflation Rate YoY Flash (Aug)",
      "sourcePublishTime": "2026/09/01 17:00 Asia/Taipei",
      "country": "歐元區",
      "publishTime": "2026/09/01 17:00",
      "previous": "2.5",
      "forecast": "2.5",
      "actual": "2.4",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "importance": "中高",
      "timestamp": "2026/09/01 17:00",
      "tags": [
        "歐元區",
        "核心通膨率",
        "偏多"
      ],
      "summary": "核心通膨率 將於 2026/09/01 17:00 公布，市場關注前值 2.5、預期 2.5。",
      "event": "歐元區 核心通膨率，前值 2.5、預期 2.5、實際 2.4。",
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
      "id": "macro-unemployment-rate-jul-20260901",
      "type": "macro",
      "title": "失業率",
      "eventName": "失業率",
      "originalEventName": "Unemployment Rate (Jul)",
      "sourcePublishTime": "2026/09/01 17:00 Asia/Taipei",
      "country": "歐元區",
      "publishTime": "2026/09/01 17:00",
      "previous": "6.4",
      "forecast": "6.3",
      "actual": "6.4",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響全球資金成本、美元走勢與風險資產評價。",
      "importance": "中高",
      "timestamp": "2026/09/01 17:00",
      "tags": [
        "歐元區",
        "失業率",
        "偏多"
      ],
      "summary": "失業率 將於 2026/09/01 17:00 公布，市場關注前值 6.4、預期 6.3。",
      "event": "歐元區 失業率，前值 6.4、預期 6.3、實際 6.4。",
      "ai": "目前 AI 判斷為偏多觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響全球資金成本、美元走勢與風險資產評價。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "https://ec.europa.eu/eurostat/",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    },
    {
      "id": "macro-cpi-flash-aug-20260901",
      "type": "macro",
      "title": "消費者物價指數 CPI",
      "eventName": "消費者物價指數 CPI",
      "originalEventName": "CPI Flash (Aug)",
      "sourcePublishTime": "2026/09/01 17:00 Asia/Taipei",
      "country": "歐元區",
      "publishTime": "2026/09/01 17:00",
      "previous": "103.24",
      "forecast": "—",
      "actual": "103.7",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "importance": "高",
      "timestamp": "2026/09/01 17:00",
      "tags": [
        "歐元區",
        "消費者物價指數",
        "中性"
      ],
      "summary": "消費者物價指數 CPI 將於 2026/09/01 17:00 公布，市場關注前值 103.24、預期 —。",
      "event": "歐元區 消費者物價指數 CPI，前值 103.24、預期 —、實際 103.7。",
      "ai": "目前 AI 判斷為中性觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
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
