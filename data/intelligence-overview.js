window.IntelligenceOverviewData = {
  "updatedAt": "2026/07/29 18:30",
  "status": "運作中",
  "cards": [
    {
      "label": "今日偵測情報",
      "value": 254,
      "unit": "筆",
      "icon": "file"
    },
    {
      "label": "高重要度訊號",
      "value": 85,
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
      "value": "ECB Bank Lending Survey",
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
          "28 筆"
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
          "48 個"
        ],
        [
          "下一事件",
          "ECB Bank Lending Survey"
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
      "id": "inst-2317-20260729",
      "type": "institutional",
      "title": "2317 鴻海",
      "stockCode": "2317",
      "stockName": "鴻海",
      "sector": "其他電子業",
      "group": "其他電子業",
      "institutionType": "投信",
      "direction": "連買",
      "days": 8,
      "consecutiveBuyDays": 8,
      "streaks": {
        "外資": 0,
        "投信": 8,
        "自營商": 3
      },
      "latestNetBuy": 1094,
      "buyVolume": 6872,
      "buyAmount": 16.36,
      "syncCount": 2,
      "importance": "高",
      "timestamp": "2026/07/29 18:20",
      "tags": [
        "投信",
        "連買",
        "其他電子業",
        "3D技術",
        "3D感測"
      ],
      "summary": "投信連買，近 10 個交易日正買合計 6,872 張，估算金額約 16.36 億元。",
      "event": "投信連買 8 日，近 10 個交易日正買合計 6,872 張；最新日外資 -1,316 張、投信 1,094 張、自營商 2,249 張。",
      "ai": "法人買盤集中在 其他電子業，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 92743.123,
      "yahooVerification": {
        "status": "matched",
        "source": "https://tw.stock.yahoo.com/quote/2317.TW/institutional-trading",
        "latestNetBuy": 1094,
        "days": 8,
        "latestForeign": -1316,
        "latestTrust": 1094,
        "latestDealer": 2249
      }
    },
    {
      "id": "inst-2412-20260729",
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
        "自營商": 6
      },
      "latestNetBuy": 12934,
      "buyVolume": 96881,
      "buyAmount": 0,
      "syncCount": 2,
      "importance": "高",
      "timestamp": "2026/07/29 18:20",
      "tags": [
        "外資",
        "連買",
        "通信網路業",
        "NFC近場通訊",
        "手機"
      ],
      "summary": "外資連買，近 10 個交易日正買合計 96,881 張，估算金額約 0.00 億元。",
      "event": "外資連買 10 日，近 10 個交易日正買合計 96,881 張；最新日外資 12,934 張、投信 -565 張、自營商 727 張。",
      "ai": "法人買盤集中在 通信網路業，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 105274.484,
      "yahooVerification": {
        "status": "matched",
        "source": "https://tw.stock.yahoo.com/quote/2412.TW/institutional-trading",
        "latestNetBuy": 12934,
        "days": 10,
        "latestForeign": 12934,
        "latestTrust": -565,
        "latestDealer": 727
      }
    },
    {
      "id": "inst-2610-20260729",
      "type": "institutional",
      "title": "2610 華航",
      "stockCode": "2610",
      "stockName": "華航",
      "sector": "航運業",
      "group": "航運業",
      "institutionType": "投信",
      "direction": "連買",
      "days": 9,
      "consecutiveBuyDays": 9,
      "streaks": {
        "外資": 4,
        "投信": 9,
        "自營商": 0
      },
      "latestNetBuy": 509,
      "buyVolume": 25190,
      "buyAmount": 0,
      "syncCount": 2,
      "importance": "高",
      "timestamp": "2026/07/29 18:20",
      "tags": [
        "投信",
        "連買",
        "航運業",
        "三通",
        "官股企業"
      ],
      "summary": "投信連買，近 10 個交易日正買合計 25,190 張，估算金額約 0.00 億元。",
      "event": "投信連買 9 日，近 10 個交易日正買合計 25,190 張；最新日外資 14,106 張、投信 509 張、自營商 -679 張。",
      "ai": "法人買盤集中在 航運業，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 129998.495,
      "yahooVerification": {
        "status": "matched",
        "source": "https://tw.stock.yahoo.com/quote/2610.TW/institutional-trading",
        "latestNetBuy": 509,
        "days": 9,
        "latestForeign": 14106,
        "latestTrust": 509,
        "latestDealer": -679
      }
    },
    {
      "id": "inst-1303-20260729",
      "type": "institutional",
      "title": "1303 南亞",
      "stockCode": "1303",
      "stockName": "南亞",
      "sector": "塑膠工業",
      "group": "塑膠工業",
      "institutionType": "外資",
      "direction": "連買",
      "days": 4,
      "consecutiveBuyDays": 4,
      "streaks": {
        "外資": 4,
        "投信": 0,
        "自營商": 3
      },
      "latestNetBuy": 25498,
      "buyVolume": 48890,
      "buyAmount": 76.76,
      "syncCount": 2,
      "importance": "高",
      "timestamp": "2026/07/29 18:20",
      "tags": [
        "外資",
        "連買",
        "塑膠工業",
        "APPLE概念",
        "越南設廠"
      ],
      "summary": "外資連買，近 10 個交易日正買合計 48,890 張，估算金額約 76.76 億元。",
      "event": "外資連買 4 日，近 10 個交易日正買合計 48,890 張；最新日外資 25,498 張、投信 -14,534 張、自營商 2,119 張。",
      "ai": "法人買盤集中在 塑膠工業，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 181474.646,
      "yahooVerification": {
        "status": "matched",
        "source": "https://tw.stock.yahoo.com/quote/1303.TW/institutional-trading",
        "latestNetBuy": 25498,
        "days": 4,
        "latestForeign": 25498,
        "latestTrust": -14534,
        "latestDealer": 2119
      }
    },
    {
      "id": "macro-niesr-monthly-gdp-tracker-jun-20260716",
      "type": "macro",
      "title": "GDP 經濟成長率",
      "eventName": "GDP 經濟成長率",
      "originalEventName": "NIESR Monthly GDP Tracker (Jun)",
      "sourcePublishTime": "2026/07/16 20:00 Asia/Taipei",
      "country": "英國",
      "publishTime": "2026/07/16 20:00",
      "previous": "0.7",
      "forecast": "0.2",
      "actual": "0.4",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響景氣循環、原物料、工業與科技需求預期。",
      "importance": "高",
      "timestamp": "2026/07/16 20:00",
      "tags": [
        "英國",
        "GDP",
        "中性"
      ],
      "summary": "GDP 經濟成長率 將於 2026/07/16 20:00 公布，市場關注前值 0.7、預期 —。",
      "event": "英國 GDP 經濟成長率，前值 0.7、預期 —、實際 0.4。",
      "ai": "目前 AI 判斷為中性觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響景氣循環、原物料、工業與科技需求預期。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar / 鉅亨網全球經濟指標",
      "sourceUrl": "https://tw.tradingview.com/economic-calendar/",
      "sourceList": [
        "TradingView Economic Calendar",
        "鉅亨網全球經濟指標"
      ]
    },
    {
      "id": "macro-gdp-yoy-may-20260716",
      "type": "macro",
      "title": "GDP 經濟成長率",
      "eventName": "GDP 經濟成長率",
      "originalEventName": "GDP YoY (May)",
      "sourcePublishTime": "2026/07/16 14:00 Asia/Taipei",
      "country": "英國",
      "publishTime": "2026/07/16 14:00",
      "previous": "1.1",
      "forecast": "1.4",
      "actual": "1.3",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏空",
      "impact": "影響景氣循環、原物料、工業與科技需求預期。",
      "importance": "高",
      "timestamp": "2026/07/16 14:00",
      "tags": [
        "英國",
        "GDP",
        "偏空"
      ],
      "summary": "GDP 經濟成長率 將於 2026/07/16 14:00 公布，市場關注前值 1.1、預期 1.4。",
      "event": "英國 GDP 經濟成長率，前值 1.1、預期 1.4、實際 1.3。",
      "ai": "目前 AI 判斷為偏空觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響景氣循環、原物料、工業與科技需求預期。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar / 鉅亨網全球經濟指標",
      "sourceUrl": "http://www.ons.gov.uk/",
      "sourceList": [
        "TradingView Economic Calendar",
        "鉅亨網全球經濟指標"
      ]
    },
    {
      "id": "macro-initial-jobless-claims-jul-11-20260716",
      "type": "macro",
      "title": "初領失業救濟金人數",
      "eventName": "初領失業救濟金人數",
      "originalEventName": "Initial Jobless Claims (Jul/11)",
      "sourcePublishTime": "2026/07/16 20:30 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/07/16 20:30",
      "previous": "216",
      "forecast": "217",
      "actual": "208",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏空",
      "impact": "影響就業強弱、薪資通膨與聯準會政策預期。",
      "importance": "中高",
      "timestamp": "2026/07/16 20:30",
      "tags": [
        "美國",
        "初領失業救濟金人數",
        "偏空"
      ],
      "summary": "初領失業救濟金人數 將於 2026/07/16 20:30 公布，市場關注前值 216、預期 217。",
      "event": "美國 初領失業救濟金人數，前值 216、預期 217、實際 208。",
      "ai": "目前 AI 判斷為偏空觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響就業強弱、薪資通膨與聯準會政策預期。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "https://www.dol.gov/",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    },
    {
      "id": "macro-ppi-mom-jun-20260715",
      "type": "macro",
      "title": "生產者物價指數 PPI",
      "eventName": "生產者物價指數 PPI",
      "originalEventName": "PPI MoM (Jun)",
      "sourcePublishTime": "2026/07/15 20:30 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/07/15 20:30",
      "previous": "0.6",
      "forecast": "6.2",
      "actual": "-0.3",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/07/15 20:30",
      "tags": [
        "美國",
        "生產者物價指數",
        "中性"
      ],
      "summary": "生產者物價指數 PPI 將於 2026/07/15 20:30 公布，市場關注前值 0.6、預期 —。",
      "event": "美國 生產者物價指數 PPI，前值 0.6、預期 —、實際 -0.3。",
      "ai": "目前 AI 判斷為中性觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響市場風險偏好與資金輪動。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar / 鉅亨網全球經濟指標",
      "sourceUrl": "https://www.bls.gov",
      "sourceList": [
        "TradingView Economic Calendar",
        "鉅亨網全球經濟指標"
      ]
    }
  ],
  "macroEvents": [
    {
      "id": "macro-ppi-mom-jun-20260715",
      "type": "macro",
      "title": "生產者物價指數 PPI",
      "eventName": "生產者物價指數 PPI",
      "originalEventName": "PPI MoM (Jun)",
      "sourcePublishTime": "2026/07/15 20:30 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/07/15 20:30",
      "previous": "0.6",
      "forecast": "6.2",
      "actual": "-0.3",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/07/15 20:30",
      "tags": [
        "美國",
        "生產者物價指數",
        "中性"
      ],
      "summary": "生產者物價指數 PPI 將於 2026/07/15 20:30 公布，市場關注前值 0.6、預期 —。",
      "event": "美國 生產者物價指數 PPI，前值 0.6、預期 —、實際 -0.3。",
      "ai": "目前 AI 判斷為中性觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
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
      "id": "macro-gdp-yoy-may-20260716",
      "type": "macro",
      "title": "GDP 經濟成長率",
      "eventName": "GDP 經濟成長率",
      "originalEventName": "GDP YoY (May)",
      "sourcePublishTime": "2026/07/16 14:00 Asia/Taipei",
      "country": "英國",
      "publishTime": "2026/07/16 14:00",
      "previous": "1.1",
      "forecast": "1.4",
      "actual": "1.3",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏空",
      "impact": "影響景氣循環、原物料、工業與科技需求預期。",
      "importance": "高",
      "timestamp": "2026/07/16 14:00",
      "tags": [
        "英國",
        "GDP",
        "偏空"
      ],
      "summary": "GDP 經濟成長率 將於 2026/07/16 14:00 公布，市場關注前值 1.1、預期 1.4。",
      "event": "英國 GDP 經濟成長率，前值 1.1、預期 1.4、實際 1.3。",
      "ai": "目前 AI 判斷為偏空觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響景氣循環、原物料、工業與科技需求預期。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar / 鉅亨網全球經濟指標",
      "sourceUrl": "http://www.ons.gov.uk/",
      "sourceList": [
        "TradingView Economic Calendar",
        "鉅亨網全球經濟指標"
      ]
    },
    {
      "id": "macro-niesr-monthly-gdp-tracker-jun-20260716",
      "type": "macro",
      "title": "GDP 經濟成長率",
      "eventName": "GDP 經濟成長率",
      "originalEventName": "NIESR Monthly GDP Tracker (Jun)",
      "sourcePublishTime": "2026/07/16 20:00 Asia/Taipei",
      "country": "英國",
      "publishTime": "2026/07/16 20:00",
      "previous": "0.7",
      "forecast": "0.2",
      "actual": "0.4",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響景氣循環、原物料、工業與科技需求預期。",
      "importance": "高",
      "timestamp": "2026/07/16 20:00",
      "tags": [
        "英國",
        "GDP",
        "中性"
      ],
      "summary": "GDP 經濟成長率 將於 2026/07/16 20:00 公布，市場關注前值 0.7、預期 —。",
      "event": "英國 GDP 經濟成長率，前值 0.7、預期 —、實際 0.4。",
      "ai": "目前 AI 判斷為中性觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響景氣循環、原物料、工業與科技需求預期。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar / 鉅亨網全球經濟指標",
      "sourceUrl": "https://tw.tradingview.com/economic-calendar/",
      "sourceList": [
        "TradingView Economic Calendar",
        "鉅亨網全球經濟指標"
      ]
    },
    {
      "id": "macro-initial-jobless-claims-jul-11-20260716",
      "type": "macro",
      "title": "初領失業救濟金人數",
      "eventName": "初領失業救濟金人數",
      "originalEventName": "Initial Jobless Claims (Jul/11)",
      "sourcePublishTime": "2026/07/16 20:30 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/07/16 20:30",
      "previous": "216",
      "forecast": "217",
      "actual": "208",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏空",
      "impact": "影響就業強弱、薪資通膨與聯準會政策預期。",
      "importance": "中高",
      "timestamp": "2026/07/16 20:30",
      "tags": [
        "美國",
        "初領失業救濟金人數",
        "偏空"
      ],
      "summary": "初領失業救濟金人數 將於 2026/07/16 20:30 公布，市場關注前值 216、預期 217。",
      "event": "美國 初領失業救濟金人數，前值 216、預期 217、實際 208。",
      "ai": "目前 AI 判斷為偏空觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響就業強弱、薪資通膨與聯準會政策預期。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "https://www.dol.gov/",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    },
    {
      "id": "macro-core-inflation-rate-yoy-final-jun-20260717",
      "type": "macro",
      "title": "核心通膨率",
      "eventName": "核心通膨率",
      "originalEventName": "Core Inflation Rate YoY Final (Jun)",
      "sourcePublishTime": "2026/07/17 17:00 Asia/Taipei",
      "country": "歐元區",
      "publishTime": "2026/07/17 17:00",
      "previous": "2.6",
      "forecast": "2.4",
      "actual": "2.4",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "importance": "中高",
      "timestamp": "2026/07/17 17:00",
      "tags": [
        "歐元區",
        "核心通膨率",
        "中性"
      ],
      "summary": "核心通膨率 將於 2026/07/17 17:00 公布，市場關注前值 2.6、預期 2.4。",
      "event": "歐元區 核心通膨率，前值 2.6、預期 2.4、實際 2.4。",
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
      "id": "macro-inflation-rate-mom-final-jun-20260717",
      "type": "macro",
      "title": "通膨率",
      "eventName": "通膨率",
      "originalEventName": "Inflation Rate MoM Final (Jun)",
      "sourcePublishTime": "2026/07/17 17:00 Asia/Taipei",
      "country": "歐元區",
      "publishTime": "2026/07/17 17:00",
      "previous": "0.1",
      "forecast": "-0.1",
      "actual": "-0.1",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "importance": "中高",
      "timestamp": "2026/07/17 17:00",
      "tags": [
        "歐元區",
        "通膨率",
        "中性"
      ],
      "summary": "通膨率 將於 2026/07/17 17:00 公布，市場關注前值 0.1、預期 -0.1。",
      "event": "歐元區 通膨率，前值 0.1、預期 -0.1、實際 -0.1。",
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
      "id": "macro-cpi-final-jun-20260717",
      "type": "macro",
      "title": "消費者物價指數 CPI",
      "eventName": "消費者物價指數 CPI",
      "originalEventName": "CPI Final (Jun)",
      "sourcePublishTime": "2026/07/17 17:00 Asia/Taipei",
      "country": "歐元區",
      "publishTime": "2026/07/17 17:00",
      "previous": "103.13",
      "forecast": "103.07",
      "actual": "103.02",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "importance": "高",
      "timestamp": "2026/07/17 17:00",
      "tags": [
        "歐元區",
        "消費者物價指數",
        "偏多"
      ],
      "summary": "消費者物價指數 CPI 將於 2026/07/17 17:00 公布，市場關注前值 103.13、預期 103.07。",
      "event": "歐元區 消費者物價指數 CPI，前值 103.13、預期 103.07、實際 103.02。",
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
      "id": "macro-ppi-mom-jun-20260720",
      "type": "macro",
      "title": "生產者物價指數 PPI",
      "eventName": "生產者物價指數 PPI",
      "originalEventName": "PPI MoM (Jun)",
      "sourcePublishTime": "2026/07/20 14:00 Asia/Taipei",
      "country": "德國",
      "publishTime": "2026/07/20 14:00",
      "previous": "0.3",
      "forecast": "-0.2",
      "actual": "-0.3",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏空",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/07/20 14:00",
      "tags": [
        "德國",
        "生產者物價指數",
        "偏空"
      ],
      "summary": "生產者物價指數 PPI 將於 2026/07/20 14:00 公布，市場關注前值 0.3、預期 -0.2。",
      "event": "德國 生產者物價指數 PPI，前值 0.3、預期 -0.2、實際 -0.3。",
      "ai": "目前 AI 判斷為偏空觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響市場風險偏好與資金輪動。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar / 鉅亨網全球經濟指標",
      "sourceUrl": "https://www.destatis.de",
      "sourceList": [
        "TradingView Economic Calendar",
        "鉅亨網全球經濟指標"
      ]
    }
  ]
};
