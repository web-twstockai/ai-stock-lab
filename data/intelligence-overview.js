window.IntelligenceOverviewData = {
  "updatedAt": "2026/10/30 18:30",
  "status": "運作中",
  "cards": [
    {
      "label": "今日偵測情報",
      "value": 300,
      "unit": "筆",
      "icon": "file"
    },
    {
      "label": "高重要度訊號",
      "value": 101,
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
          "100 筆"
        ],
        [
          "投信連買",
          "37 筆"
        ],
        [
          "三大法人同步買",
          "17 筆"
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
          "65 個"
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
      "id": "inst-6770-20261030",
      "type": "institutional",
      "title": "6770 力積電",
      "stockCode": "6770",
      "stockName": "力積電",
      "sector": "半導體",
      "group": "半導體",
      "institutionType": "投信",
      "direction": "連買",
      "days": 8,
      "consecutiveBuyDays": 8,
      "streaks": {
        "外資": 0,
        "投信": 8,
        "自營商": 0
      },
      "latestNetBuy": 367,
      "buyVolume": 26824,
      "buyAmount": 0,
      "syncCount": 1,
      "importance": "高",
      "timestamp": "2026/10/30 18:20",
      "tags": [
        "投信",
        "連買",
        "半導體",
        "IC製造",
        "晶圓代工"
      ],
      "summary": "投信連買，近 10 個交易日正買合計 26,824 張，估算金額約 0.00 億元。",
      "event": "投信連買 8 日，近 10 個交易日正買合計 26,824 張；最新日外資 -22,447 張、投信 367 張、自營商 -1,897 張。",
      "ai": "法人買盤集中在 半導體，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 113684.756,
      "yahooVerification": {
        "status": "matched",
        "source": "https://tw.stock.yahoo.com/quote/6770.TW/institutional-trading",
        "latestNetBuy": 367,
        "days": 8,
        "latestForeign": -22447,
        "latestTrust": 367,
        "latestDealer": -1897
      }
    },
    {
      "id": "inst-2317-20261030",
      "type": "institutional",
      "title": "2317 鴻海",
      "stockCode": "2317",
      "stockName": "鴻海",
      "sector": "其他電子業",
      "group": "其他電子業",
      "institutionType": "投信",
      "direction": "連買",
      "days": 4,
      "consecutiveBuyDays": 4,
      "streaks": {
        "外資": 0,
        "投信": 4,
        "自營商": 1
      },
      "latestNetBuy": 1374,
      "buyVolume": 6358,
      "buyAmount": 15.77,
      "syncCount": 2,
      "importance": "高",
      "timestamp": "2026/10/30 18:20",
      "tags": [
        "投信",
        "連買",
        "其他電子業",
        "3D技術",
        "3D感測"
      ],
      "summary": "投信連買，近 10 個交易日正買合計 6,358 張，估算金額約 15.77 億元。",
      "event": "投信連買 4 日，近 10 個交易日正買合計 6,358 張；最新日外資 -3,392 張、投信 1,374 張、自營商 124 張。",
      "ai": "法人買盤集中在 其他電子業，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 90391.332,
      "yahooVerification": {
        "status": "matched",
        "source": "https://tw.stock.yahoo.com/quote/2317.TW/institutional-trading",
        "latestNetBuy": 1374,
        "days": 4,
        "latestForeign": -3392,
        "latestTrust": 1374,
        "latestDealer": 124
      }
    },
    {
      "id": "inst-1303-20261030",
      "type": "institutional",
      "title": "1303 南亞",
      "stockCode": "1303",
      "stockName": "南亞",
      "sector": "塑膠工業",
      "group": "塑膠工業",
      "institutionType": "自營商",
      "direction": "連買",
      "days": 10,
      "consecutiveBuyDays": 10,
      "streaks": {
        "外資": 0,
        "投信": 4,
        "自營商": 10
      },
      "latestNetBuy": 245,
      "buyVolume": 10494,
      "buyAmount": 32.74,
      "syncCount": 2,
      "importance": "高",
      "timestamp": "2026/10/30 18:20",
      "tags": [
        "自營商",
        "連買",
        "塑膠工業",
        "APPLE概念",
        "越南設廠"
      ],
      "summary": "自營商連買，近 10 個交易日正買合計 10,494 張，估算金額約 32.74 億元。",
      "event": "自營商連買 10 日，近 10 個交易日正買合計 10,494 張；最新日外資 -15,974 張、投信 2,245 張、自營商 245 張。",
      "ai": "法人買盤集中在 塑膠工業，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 59705.512,
      "yahooVerification": {
        "status": "matched",
        "source": "https://tw.stock.yahoo.com/quote/1303.TW/institutional-trading",
        "latestNetBuy": 245,
        "days": 10,
        "latestForeign": -15974,
        "latestTrust": 2245,
        "latestDealer": 245
      }
    },
    {
      "id": "inst-2382-20261030",
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
        "自營商": 10
      },
      "latestNetBuy": 1348,
      "buyVolume": 7219,
      "buyAmount": 22.95,
      "syncCount": 2,
      "importance": "高",
      "timestamp": "2026/10/30 18:20",
      "tags": [
        "投信",
        "連買",
        "電腦及週邊設備",
        "5G",
        "APPLE概念"
      ],
      "summary": "投信連買，近 10 個交易日正買合計 7,219 張，估算金額約 22.95 億元。",
      "event": "投信連買 10 日，近 10 個交易日正買合計 7,219 張；最新日外資 -2,927 張、投信 1,348 張、自營商 318 張。",
      "ai": "法人買盤集中在 電腦及週邊設備，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 26692.888,
      "yahooVerification": {
        "status": "days-different",
        "source": "https://tw.stock.yahoo.com/quote/2382.TW/institutional-trading",
        "latestNetBuy": 1348,
        "days": 11,
        "latestForeign": -2927,
        "latestTrust": 1348,
        "latestDealer": 318
      }
    },
    {
      "id": "macro-niesr-monthly-gdp-tracker-sep-20261015",
      "type": "macro",
      "title": "GDP 經濟成長率",
      "eventName": "GDP 經濟成長率",
      "originalEventName": "NIESR Monthly GDP Tracker (Sep)",
      "sourcePublishTime": "2026/10/15 20:00 Asia/Taipei",
      "country": "英國",
      "publishTime": "2026/10/15 20:00",
      "previous": "0.5",
      "forecast": "—",
      "actual": "0.7",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響景氣循環、原物料、工業與科技需求預期。",
      "importance": "高",
      "timestamp": "2026/10/15 20:00",
      "tags": [
        "英國",
        "GDP",
        "中性"
      ],
      "summary": "GDP 經濟成長率 將於 2026/10/15 20:00 公布，市場關注前值 0.5、預期 —。",
      "event": "英國 GDP 經濟成長率，前值 0.5、預期 —、實際 0.7。",
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
      "id": "macro-niesr-gdp-20261015",
      "type": "macro",
      "title": "GDP 經濟成長率",
      "eventName": "GDP 經濟成長率",
      "originalEventName": "NIESR每月GDP追蹤",
      "sourcePublishTime": "2026/10/15 19:00 Asia/Taipei",
      "country": "英國",
      "publishTime": "2026/10/15 19:00",
      "previous": "0.5",
      "forecast": "0.4",
      "actual": "0.7",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響景氣循環、原物料、工業與科技需求預期。",
      "importance": "高",
      "timestamp": "2026/10/15 19:00",
      "tags": [
        "英國",
        "GDP",
        "偏多"
      ],
      "summary": "GDP 經濟成長率 將於 2026/10/15 19:00 公布，市場關注前值 0.5、預期 0.4。",
      "event": "英國 GDP 經濟成長率，前值 0.5、預期 0.4、實際 0.7。",
      "ai": "目前 AI 判斷為偏多觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響景氣循環、原物料、工業與科技需求預期。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "鉅亨網全球經濟指標",
      "sourceUrl": "https://www.cnyes.com/economy/indicator",
      "sourceList": [
        "鉅亨網全球經濟指標"
      ]
    },
    {
      "id": "macro-gdp-mom-aug-20261015",
      "type": "macro",
      "title": "GDP 經濟成長率",
      "eventName": "GDP 經濟成長率",
      "originalEventName": "GDP MoM (Aug)",
      "sourcePublishTime": "2026/10/15 14:00 Asia/Taipei",
      "country": "英國",
      "publishTime": "2026/10/15 14:00",
      "previous": "0.4",
      "forecast": "-0.1",
      "actual": "0.1",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響景氣循環、原物料、工業與科技需求預期。",
      "importance": "高",
      "timestamp": "2026/10/15 14:00",
      "tags": [
        "英國",
        "GDP",
        "偏多"
      ],
      "summary": "GDP 經濟成長率 將於 2026/10/15 14:00 公布，市場關注前值 0.4、預期 -0.1。",
      "event": "英國 GDP 經濟成長率，前值 0.4、預期 -0.1、實際 0.1。",
      "ai": "目前 AI 判斷為偏多觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響景氣循環、原物料、工業與科技需求預期。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar / Investing.com Economic Calendar / 鉅亨網全球經濟指標",
      "sourceUrl": "http://www.ons.gov.uk/",
      "sourceList": [
        "TradingView Economic Calendar",
        "Investing.com Economic Calendar",
        "鉅亨網全球經濟指標"
      ]
    },
    {
      "id": "macro-inflation-rate-mom-final-sep-20261015",
      "type": "macro",
      "title": "通膨率",
      "eventName": "通膨率",
      "originalEventName": "Inflation Rate MoM Final (Sep)",
      "sourcePublishTime": "2026/10/15 14:45 Asia/Taipei",
      "country": "法國",
      "publishTime": "2026/10/15 14:45",
      "previous": "0.7",
      "forecast": "-0.3",
      "actual": "-0.3",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "importance": "中高",
      "timestamp": "2026/10/15 14:45",
      "tags": [
        "法國",
        "通膨率",
        "中性"
      ],
      "summary": "通膨率 將於 2026/10/15 14:45 公布，市場關注前值 0.7、預期 -0.3。",
      "event": "法國 通膨率，前值 0.7、預期 -0.3、實際 -0.3。",
      "ai": "目前 AI 判斷為中性觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "https://www.insee.fr",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    }
  ],
  "macroEvents": [
    {
      "id": "macro-gdp-mom-aug-20261015",
      "type": "macro",
      "title": "GDP 經濟成長率",
      "eventName": "GDP 經濟成長率",
      "originalEventName": "GDP MoM (Aug)",
      "sourcePublishTime": "2026/10/15 14:00 Asia/Taipei",
      "country": "英國",
      "publishTime": "2026/10/15 14:00",
      "previous": "0.4",
      "forecast": "-0.1",
      "actual": "0.1",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響景氣循環、原物料、工業與科技需求預期。",
      "importance": "高",
      "timestamp": "2026/10/15 14:00",
      "tags": [
        "英國",
        "GDP",
        "偏多"
      ],
      "summary": "GDP 經濟成長率 將於 2026/10/15 14:00 公布，市場關注前值 0.4、預期 -0.1。",
      "event": "英國 GDP 經濟成長率，前值 0.4、預期 -0.1、實際 0.1。",
      "ai": "目前 AI 判斷為偏多觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響景氣循環、原物料、工業與科技需求預期。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar / Investing.com Economic Calendar / 鉅亨網全球經濟指標",
      "sourceUrl": "http://www.ons.gov.uk/",
      "sourceList": [
        "TradingView Economic Calendar",
        "Investing.com Economic Calendar",
        "鉅亨網全球經濟指標"
      ]
    },
    {
      "id": "macro-inflation-rate-mom-final-sep-20261015",
      "type": "macro",
      "title": "通膨率",
      "eventName": "通膨率",
      "originalEventName": "Inflation Rate MoM Final (Sep)",
      "sourcePublishTime": "2026/10/15 14:45 Asia/Taipei",
      "country": "法國",
      "publishTime": "2026/10/15 14:45",
      "previous": "0.7",
      "forecast": "-0.3",
      "actual": "-0.3",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "importance": "中高",
      "timestamp": "2026/10/15 14:45",
      "tags": [
        "法國",
        "通膨率",
        "中性"
      ],
      "summary": "通膨率 將於 2026/10/15 14:45 公布，市場關注前值 0.7、預期 -0.3。",
      "event": "法國 通膨率，前值 0.7、預期 -0.3、實際 -0.3。",
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
      "id": "macro-niesr-gdp-20261015",
      "type": "macro",
      "title": "GDP 經濟成長率",
      "eventName": "GDP 經濟成長率",
      "originalEventName": "NIESR每月GDP追蹤",
      "sourcePublishTime": "2026/10/15 19:00 Asia/Taipei",
      "country": "英國",
      "publishTime": "2026/10/15 19:00",
      "previous": "0.5",
      "forecast": "0.4",
      "actual": "0.7",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響景氣循環、原物料、工業與科技需求預期。",
      "importance": "高",
      "timestamp": "2026/10/15 19:00",
      "tags": [
        "英國",
        "GDP",
        "偏多"
      ],
      "summary": "GDP 經濟成長率 將於 2026/10/15 19:00 公布，市場關注前值 0.5、預期 0.4。",
      "event": "英國 GDP 經濟成長率，前值 0.5、預期 0.4、實際 0.7。",
      "ai": "目前 AI 判斷為偏多觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響景氣循環、原物料、工業與科技需求預期。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "鉅亨網全球經濟指標",
      "sourceUrl": "https://www.cnyes.com/economy/indicator",
      "sourceList": [
        "鉅亨網全球經濟指標"
      ]
    },
    {
      "id": "macro-niesr-monthly-gdp-tracker-sep-20261015",
      "type": "macro",
      "title": "GDP 經濟成長率",
      "eventName": "GDP 經濟成長率",
      "originalEventName": "NIESR Monthly GDP Tracker (Sep)",
      "sourcePublishTime": "2026/10/15 20:00 Asia/Taipei",
      "country": "英國",
      "publishTime": "2026/10/15 20:00",
      "previous": "0.5",
      "forecast": "—",
      "actual": "0.7",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響景氣循環、原物料、工業與科技需求預期。",
      "importance": "高",
      "timestamp": "2026/10/15 20:00",
      "tags": [
        "英國",
        "GDP",
        "中性"
      ],
      "summary": "GDP 經濟成長率 將於 2026/10/15 20:00 公布，市場關注前值 0.5、預期 —。",
      "event": "英國 GDP 經濟成長率，前值 0.5、預期 —、實際 0.7。",
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
      "id": "macro-continuing-jobless-claims-oct-03-20261015",
      "type": "macro",
      "title": "初領失業救濟金人數",
      "eventName": "初領失業救濟金人數",
      "originalEventName": "Continuing Jobless Claims (Oct/03)",
      "sourcePublishTime": "2026/10/15 20:30 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/10/15 20:30",
      "previous": "1714",
      "forecast": "1710",
      "actual": "1710",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響就業強弱、薪資通膨與聯準會政策預期。",
      "importance": "中高",
      "timestamp": "2026/10/15 20:30",
      "tags": [
        "美國",
        "初領失業救濟金人數",
        "中性"
      ],
      "summary": "初領失業救濟金人數 將於 2026/10/15 20:30 公布，市場關注前值 1714、預期 1710。",
      "event": "美國 初領失業救濟金人數，前值 1714、預期 1710、實際 1710。",
      "ai": "目前 AI 判斷為中性觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響就業強弱、薪資通膨與聯準會政策預期。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "http://www.dol.gov",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    },
    {
      "id": "macro-ppi-sep-20261015",
      "type": "macro",
      "title": "生產者物價指數 PPI",
      "eventName": "生產者物價指數 PPI",
      "originalEventName": "PPI (Sep)",
      "sourcePublishTime": "2026/10/15 20:30 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/10/15 20:30",
      "previous": "157.411",
      "forecast": "5.3",
      "actual": "159.78",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/10/15 20:30",
      "tags": [
        "美國",
        "生產者物價指數",
        "中性"
      ],
      "summary": "生產者物價指數 PPI 將於 2026/10/15 20:30 公布，市場關注前值 157.411、預期 —。",
      "event": "美國 生產者物價指數 PPI，前值 157.411、預期 —、實際 159.78。",
      "ai": "目前 AI 判斷為中性觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響市場風險偏好與資金輪動。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar / Investing.com Economic Calendar / 鉅亨網全球經濟指標",
      "sourceUrl": "https://www.bls.gov",
      "sourceList": [
        "TradingView Economic Calendar",
        "Investing.com Economic Calendar",
        "鉅亨網全球經濟指標"
      ]
    },
    {
      "id": "macro-gdpnow-20261015",
      "type": "macro",
      "title": "GDP 經濟成長率",
      "eventName": "GDP 經濟成長率",
      "originalEventName": "亞特蘭大聯儲GDPNow",
      "sourcePublishTime": "2026/10/15 23:00 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/10/15 23:00",
      "previous": "3.6",
      "forecast": "3.6",
      "actual": "3.6",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響景氣循環、原物料、工業與科技需求預期。",
      "importance": "高",
      "timestamp": "2026/10/15 23:00",
      "tags": [
        "美國",
        "GDP",
        "中性"
      ],
      "summary": "GDP 經濟成長率 將於 2026/10/15 23:00 公布，市場關注前值 3.6、預期 3.6。",
      "event": "美國 GDP 經濟成長率，前值 3.6、預期 3.6、實際 3.6。",
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
      "id": "macro-atlanta-fed-gdpnow-q3-20261015",
      "type": "macro",
      "title": "GDP 經濟成長率",
      "eventName": "GDP 經濟成長率",
      "originalEventName": "Atlanta Fed GDPNow (Q3)",
      "sourcePublishTime": "2026/10/15 23:30 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/10/15 23:30",
      "previous": "3.6",
      "forecast": "3.6",
      "actual": "3.6",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響全球資金成本、美元走勢與風險資產評價。",
      "importance": "高",
      "timestamp": "2026/10/15 23:30",
      "tags": [
        "美國",
        "GDP",
        "中性"
      ],
      "summary": "GDP 經濟成長率 將於 2026/10/15 23:30 公布，市場關注前值 3.6、預期 3.6。",
      "event": "美國 GDP 經濟成長率，前值 3.6、預期 3.6、實際 3.6。",
      "ai": "目前 AI 判斷為中性觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響全球資金成本、美元走勢與風險資產評價。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "https://www.atlantafed.org/",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    }
  ]
};
