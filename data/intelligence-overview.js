window.IntelligenceOverviewData = {
  "updatedAt": "2026/08/28 18:30",
  "status": "運作中",
  "cards": [
    {
      "label": "今日偵測情報",
      "value": 245,
      "unit": "筆",
      "icon": "file"
    },
    {
      "label": "高重要度訊號",
      "value": 56,
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
      "value": "GDP 經濟成長率",
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
          "19 筆"
        ],
        [
          "三大法人同步買",
          "12 筆"
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
          "49 個"
        ],
        [
          "下一事件",
          "GDP 經濟成長率"
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
      "id": "inst-2892-20260828",
      "type": "institutional",
      "title": "2892 第一金",
      "stockCode": "2892",
      "stockName": "第一金",
      "sector": "金融保險",
      "group": "金融保險",
      "institutionType": "外資",
      "direction": "連買",
      "days": 8,
      "consecutiveBuyDays": 8,
      "streaks": {
        "外資": 8,
        "投信": 0,
        "自營商": 5
      },
      "latestNetBuy": 43365,
      "buyVolume": 131794,
      "buyAmount": 0,
      "syncCount": 2,
      "importance": "高",
      "timestamp": "2026/08/28 18:20",
      "tags": [
        "外資",
        "連買",
        "金融保險",
        "官股企業",
        "電子商務及延伸"
      ],
      "summary": "外資連買，近 10 個交易日正買合計 131,794 張，估算金額約 0.00 億元。",
      "event": "外資連買 8 日，近 10 個交易日正買合計 131,794 張；最新日外資 43,365 張、投信 -927 張、自營商 11 張。",
      "ai": "法人買盤集中在 金融保險，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 161527.386,
      "yahooVerification": {
        "status": "matched",
        "source": "https://tw.stock.yahoo.com/quote/2892.TW/institutional-trading",
        "latestNetBuy": 43365,
        "days": 8,
        "latestForeign": 43365,
        "latestTrust": -927,
        "latestDealer": 11
      }
    },
    {
      "id": "inst-2330-20260828",
      "type": "institutional",
      "title": "2330 台積電",
      "stockCode": "2330",
      "stockName": "台積電",
      "sector": "半導體",
      "group": "半導體",
      "institutionType": "外資",
      "direction": "連買",
      "days": 3,
      "consecutiveBuyDays": 3,
      "streaks": {
        "外資": 3,
        "投信": 0,
        "自營商": 0
      },
      "latestNetBuy": 3032,
      "buyVolume": 23707,
      "buyAmount": 573.72,
      "syncCount": 1,
      "importance": "高",
      "timestamp": "2026/08/28 18:20",
      "tags": [
        "外資",
        "連買",
        "半導體",
        "3D技術",
        "3D感測"
      ],
      "summary": "外資連買，近 10 個交易日正買合計 23,707 張，估算金額約 573.72 億元。",
      "event": "外資連買 3 日，近 10 個交易日正買合計 23,707 張；最新日外資 3,032 張、投信 -1,765 張、自營商 -23 張。",
      "ai": "法人買盤集中在 半導體，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 28019.157,
      "yahooVerification": {
        "status": "matched",
        "source": "https://tw.stock.yahoo.com/quote/2330.TW/institutional-trading",
        "latestNetBuy": 3032,
        "days": 3,
        "latestForeign": 3032,
        "latestTrust": -1765,
        "latestDealer": -23
      }
    },
    {
      "id": "inst-3481-20260828",
      "type": "institutional",
      "title": "3481 群創",
      "stockCode": "3481",
      "stockName": "群創",
      "sector": "光電業",
      "group": "光電業",
      "institutionType": "自營商",
      "direction": "同步買超",
      "days": 4,
      "consecutiveBuyDays": 4,
      "streaks": {
        "外資": 1,
        "投信": 1,
        "自營商": 4
      },
      "latestNetBuy": 4454,
      "buyVolume": 14884,
      "buyAmount": 0,
      "syncCount": 3,
      "importance": "高",
      "timestamp": "2026/08/28 18:20",
      "tags": [
        "自營商",
        "同步買超",
        "光電業",
        "Android",
        "AppleCar"
      ],
      "summary": "自營商同步買超，近 10 個交易日正買合計 14,884 張，估算金額約 0.00 億元。",
      "event": "自營商連買 4 日，近 10 個交易日正買合計 14,884 張；最新日外資 23,715 張、投信 188 張、自營商 4,454 張。",
      "ai": "法人買盤集中在 光電業，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 74362.553,
      "yahooVerification": {
        "status": "matched",
        "source": "https://tw.stock.yahoo.com/quote/3481.TW/institutional-trading",
        "latestNetBuy": 4454,
        "days": 4,
        "latestForeign": 23715,
        "latestTrust": 188,
        "latestDealer": 4454
      }
    },
    {
      "id": "inst-2317-20260828",
      "type": "institutional",
      "title": "2317 鴻海",
      "stockCode": "2317",
      "stockName": "鴻海",
      "sector": "其他電子業",
      "group": "其他電子業",
      "institutionType": "外資",
      "direction": "連買",
      "days": 2,
      "consecutiveBuyDays": 2,
      "streaks": {
        "外資": 2,
        "投信": 1,
        "自營商": 0
      },
      "latestNetBuy": 1192,
      "buyVolume": 19441,
      "buyAmount": 49.19,
      "syncCount": 2,
      "importance": "高",
      "timestamp": "2026/08/28 18:20",
      "tags": [
        "外資",
        "連買",
        "其他電子業",
        "3D技術",
        "3D感測"
      ],
      "summary": "外資連買，近 10 個交易日正買合計 19,441 張，估算金額約 49.19 億元。",
      "event": "外資連買 2 日，近 10 個交易日正買合計 19,441 張；最新日外資 1,192 張、投信 308 張、自營商 -724 張。",
      "ai": "法人買盤集中在 其他電子業，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 24098.537,
      "yahooVerification": {
        "status": "matched",
        "source": "https://tw.stock.yahoo.com/quote/2317.TW/institutional-trading",
        "latestNetBuy": 1192,
        "days": 2,
        "latestForeign": 1192,
        "latestTrust": 308,
        "latestDealer": -724
      }
    },
    {
      "id": "macro-niesr-monthly-gdp-tracker-jul-20260813",
      "type": "macro",
      "title": "GDP 經濟成長率",
      "eventName": "GDP 經濟成長率",
      "originalEventName": "NIESR Monthly GDP Tracker (Jul)",
      "sourcePublishTime": "2026/08/13 19:30 Asia/Taipei",
      "country": "英國",
      "publishTime": "2026/08/13 19:30",
      "previous": "0.4",
      "forecast": "—",
      "actual": "0.2",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響景氣循環、原物料、工業與科技需求預期。",
      "importance": "高",
      "timestamp": "2026/08/13 19:30",
      "tags": [
        "英國",
        "GDP",
        "中性"
      ],
      "summary": "GDP 經濟成長率 將於 2026/08/13 19:30 公布，市場關注前值 0.4、預期 —。",
      "event": "英國 GDP 經濟成長率，前值 0.4、預期 —、實際 0.2。",
      "ai": "目前 AI 判斷為中性觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響景氣循環、原物料、工業與科技需求預期。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "https://tw.tradingview.com/economic-calendar/",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    },
    {
      "id": "macro-niesr-gdp-20260813",
      "type": "macro",
      "title": "GDP 經濟成長率",
      "eventName": "GDP 經濟成長率",
      "originalEventName": "NIESR每月GDP追蹤",
      "sourcePublishTime": "2026/08/13 19:00 Asia/Taipei",
      "country": "英國",
      "publishTime": "2026/08/13 19:00",
      "previous": "0.4",
      "forecast": "0.4",
      "actual": null,
      "status": "等待公布",
      "statusLevel": "upcoming",
      "direction": "中性",
      "impact": "影響景氣循環、原物料、工業與科技需求預期。",
      "importance": "高",
      "timestamp": "2026/08/13 19:00",
      "tags": [
        "英國",
        "GDP",
        "中性"
      ],
      "summary": "GDP 經濟成長率 將於 2026/08/13 19:00 公布，市場關注前值 0.4、預期 0.4。",
      "event": "英國 GDP 經濟成長率，前值 0.4、預期 0.4、實際 尚未公布。",
      "ai": "目前 AI 判斷為中性觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響景氣循環、原物料、工業與科技需求預期。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "鉅亨網全球經濟指標",
      "sourceUrl": "https://www.cnyes.com/economy/indicator",
      "sourceList": [
        "鉅亨網全球經濟指標"
      ]
    },
    {
      "id": "macro-gdp-yoy-jun-20260813",
      "type": "macro",
      "title": "GDP 經濟成長率",
      "eventName": "GDP 經濟成長率",
      "originalEventName": "GDP YoY (Jun)",
      "sourcePublishTime": "2026/08/13 14:00 Asia/Taipei",
      "country": "英國",
      "publishTime": "2026/08/13 14:00",
      "previous": "1.2",
      "forecast": "0.8",
      "actual": "1.1",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響景氣循環、原物料、工業與科技需求預期。",
      "importance": "高",
      "timestamp": "2026/08/13 14:00",
      "tags": [
        "英國",
        "GDP",
        "偏多"
      ],
      "summary": "GDP 經濟成長率 將於 2026/08/13 14:00 公布，市場關注前值 1.2、預期 0.8。",
      "event": "英國 GDP 經濟成長率，前值 1.2、預期 0.8、實際 1.1。",
      "ai": "目前 AI 判斷為偏多觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
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
      "id": "macro-ppi-mom-jul-20260813",
      "type": "macro",
      "title": "生產者物價指數 PPI",
      "eventName": "生產者物價指數 PPI",
      "originalEventName": "PPI MoM (Jul)",
      "sourcePublishTime": "2026/08/13 20:30 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/08/13 20:30",
      "previous": "-0.1",
      "forecast": "0.2",
      "actual": "4.2",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/08/13 20:30",
      "tags": [
        "美國",
        "生產者物價指數",
        "中性"
      ],
      "summary": "生產者物價指數 PPI 將於 2026/08/13 20:30 公布，市場關注前值 4.7、預期 4.2。",
      "event": "美國 生產者物價指數 PPI，前值 4.7、預期 4.2、實際 4.2。",
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
      "id": "macro-gdp-yoy-jun-20260813",
      "type": "macro",
      "title": "GDP 經濟成長率",
      "eventName": "GDP 經濟成長率",
      "originalEventName": "GDP YoY (Jun)",
      "sourcePublishTime": "2026/08/13 14:00 Asia/Taipei",
      "country": "英國",
      "publishTime": "2026/08/13 14:00",
      "previous": "1.2",
      "forecast": "0.8",
      "actual": "1.1",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響景氣循環、原物料、工業與科技需求預期。",
      "importance": "高",
      "timestamp": "2026/08/13 14:00",
      "tags": [
        "英國",
        "GDP",
        "偏多"
      ],
      "summary": "GDP 經濟成長率 將於 2026/08/13 14:00 公布，市場關注前值 1.2、預期 0.8。",
      "event": "英國 GDP 經濟成長率，前值 1.2、預期 0.8、實際 1.1。",
      "ai": "目前 AI 判斷為偏多觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
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
      "id": "macro-niesr-gdp-20260813",
      "type": "macro",
      "title": "GDP 經濟成長率",
      "eventName": "GDP 經濟成長率",
      "originalEventName": "NIESR每月GDP追蹤",
      "sourcePublishTime": "2026/08/13 19:00 Asia/Taipei",
      "country": "英國",
      "publishTime": "2026/08/13 19:00",
      "previous": "0.4",
      "forecast": "0.4",
      "actual": null,
      "status": "等待公布",
      "statusLevel": "upcoming",
      "direction": "中性",
      "impact": "影響景氣循環、原物料、工業與科技需求預期。",
      "importance": "高",
      "timestamp": "2026/08/13 19:00",
      "tags": [
        "英國",
        "GDP",
        "中性"
      ],
      "summary": "GDP 經濟成長率 將於 2026/08/13 19:00 公布，市場關注前值 0.4、預期 0.4。",
      "event": "英國 GDP 經濟成長率，前值 0.4、預期 0.4、實際 尚未公布。",
      "ai": "目前 AI 判斷為中性觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響景氣循環、原物料、工業與科技需求預期。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "鉅亨網全球經濟指標",
      "sourceUrl": "https://www.cnyes.com/economy/indicator",
      "sourceList": [
        "鉅亨網全球經濟指標"
      ]
    },
    {
      "id": "macro-niesr-monthly-gdp-tracker-jul-20260813",
      "type": "macro",
      "title": "GDP 經濟成長率",
      "eventName": "GDP 經濟成長率",
      "originalEventName": "NIESR Monthly GDP Tracker (Jul)",
      "sourcePublishTime": "2026/08/13 19:30 Asia/Taipei",
      "country": "英國",
      "publishTime": "2026/08/13 19:30",
      "previous": "0.4",
      "forecast": "—",
      "actual": "0.2",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響景氣循環、原物料、工業與科技需求預期。",
      "importance": "高",
      "timestamp": "2026/08/13 19:30",
      "tags": [
        "英國",
        "GDP",
        "中性"
      ],
      "summary": "GDP 經濟成長率 將於 2026/08/13 19:30 公布，市場關注前值 0.4、預期 —。",
      "event": "英國 GDP 經濟成長率，前值 0.4、預期 —、實際 0.2。",
      "ai": "目前 AI 判斷為中性觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響景氣循環、原物料、工業與科技需求預期。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "https://tw.tradingview.com/economic-calendar/",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    },
    {
      "id": "macro-ppi-mom-jul-20260813",
      "type": "macro",
      "title": "生產者物價指數 PPI",
      "eventName": "生產者物價指數 PPI",
      "originalEventName": "PPI MoM (Jul)",
      "sourcePublishTime": "2026/08/13 20:30 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/08/13 20:30",
      "previous": "-0.1",
      "forecast": "0.2",
      "actual": "4.2",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/08/13 20:30",
      "tags": [
        "美國",
        "生產者物價指數",
        "中性"
      ],
      "summary": "生產者物價指數 PPI 將於 2026/08/13 20:30 公布，市場關注前值 4.7、預期 4.2。",
      "event": "美國 生產者物價指數 PPI，前值 4.7、預期 4.2、實際 4.2。",
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
      "id": "macro-continuing-jobless-claims-aug-01-20260813",
      "type": "macro",
      "title": "初領失業救濟金人數",
      "eventName": "初領失業救濟金人數",
      "originalEventName": "Continuing Jobless Claims (Aug/01)",
      "sourcePublishTime": "2026/08/13 20:30 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/08/13 20:30",
      "previous": "1799",
      "forecast": "1800",
      "actual": "1777",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏空",
      "impact": "影響就業強弱、薪資通膨與聯準會政策預期。",
      "importance": "中高",
      "timestamp": "2026/08/13 20:30",
      "tags": [
        "美國",
        "初領失業救濟金人數",
        "偏空"
      ],
      "summary": "初領失業救濟金人數 將於 2026/08/13 20:30 公布，市場關注前值 1799、預期 1800。",
      "event": "美國 初領失業救濟金人數，前值 1799、預期 1800、實際 1777。",
      "ai": "目前 AI 判斷為偏空觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響就業強弱、薪資通膨與聯準會政策預期。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "http://www.dol.gov",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    },
    {
      "id": "macro-harmonised-inflation-rate-mom-final-jul-20260814",
      "type": "macro",
      "title": "通膨率",
      "eventName": "通膨率",
      "originalEventName": "Harmonised Inflation Rate MoM Final (Jul)",
      "sourcePublishTime": "2026/08/14 14:45 Asia/Taipei",
      "country": "法國",
      "publishTime": "2026/08/14 14:45",
      "previous": "-0.3",
      "forecast": "0.6",
      "actual": "0.6",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "importance": "中高",
      "timestamp": "2026/08/14 14:45",
      "tags": [
        "法國",
        "通膨率",
        "中性"
      ],
      "summary": "通膨率 將於 2026/08/14 14:45 公布，市場關注前值 -0.3、預期 0.6。",
      "event": "法國 通膨率，前值 -0.3、預期 0.6、實際 0.6。",
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
      "id": "macro-gdp-growth-rate-yoy-2nd-est-q2-20260814",
      "type": "macro",
      "title": "GDP 經濟成長率",
      "eventName": "GDP 經濟成長率",
      "originalEventName": "GDP Growth Rate YoY 2nd Est (Q2)",
      "sourcePublishTime": "2026/08/14 17:00 Asia/Taipei",
      "country": "歐元區",
      "publishTime": "2026/08/14 17:00",
      "previous": "0.5",
      "forecast": "1",
      "actual": "1",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響全球資金成本、美元走勢與風險資產評價。",
      "importance": "高",
      "timestamp": "2026/08/14 17:00",
      "tags": [
        "歐元區",
        "GDP",
        "中性"
      ],
      "summary": "GDP 經濟成長率 將於 2026/08/14 17:00 公布，市場關注前值 0.5、預期 1。",
      "event": "歐元區 GDP 經濟成長率，前值 0.5、預期 1、實際 1。",
      "ai": "目前 AI 判斷為中性觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響全球資金成本、美元走勢與風險資產評價。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "https://ec.europa.eu/eurostat/",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    },
    {
      "id": "macro-employment-change-yoy-prel-q2-20260814",
      "type": "macro",
      "title": "就業人數變化",
      "eventName": "就業人數變化",
      "originalEventName": "Employment Change YoY Prel (Q2)",
      "sourcePublishTime": "2026/08/14 17:00 Asia/Taipei",
      "country": "歐元區",
      "publishTime": "2026/08/14 17:00",
      "previous": "0.5",
      "forecast": "0.6",
      "actual": "0.5",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏空",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/08/14 17:00",
      "tags": [
        "歐元區",
        "就業人數變化",
        "偏空"
      ],
      "summary": "就業人數變化 將於 2026/08/14 17:00 公布，市場關注前值 0.5、預期 0.6。",
      "event": "歐元區 就業人數變化，前值 0.5、預期 0.6、實際 0.5。",
      "ai": "目前 AI 判斷為偏空觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響市場風險偏好與資金輪動。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "https://ec.europa.eu/eurostat/",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    }
  ]
};
