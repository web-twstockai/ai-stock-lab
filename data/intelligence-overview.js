window.IntelligenceOverviewData = {
  "updatedAt": "2026/07/20 18:30",
  "status": "運作中",
  "cards": [
    {
      "label": "今日偵測情報",
      "value": 236,
      "unit": "筆",
      "icon": "file"
    },
    {
      "label": "高重要度訊號",
      "value": 75,
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
          "18 筆"
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
          "29 個"
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
      "id": "inst-2330-20260720",
      "type": "institutional",
      "title": "2330 台積電",
      "stockCode": "2330",
      "stockName": "台積電",
      "sector": "半導體",
      "group": "半導體",
      "institutionType": "自營商",
      "direction": "連買",
      "days": 8,
      "consecutiveBuyDays": 8,
      "streaks": {
        "外資": 0,
        "投信": 3,
        "自營商": 8
      },
      "latestNetBuy": 4626,
      "buyVolume": 12773,
      "buyAmount": 292.49,
      "syncCount": 2,
      "importance": "高",
      "timestamp": "2026/07/20 18:20",
      "tags": [
        "自營商",
        "連買",
        "半導體",
        "3D技術",
        "3D感測"
      ],
      "summary": "自營商連買，近 10 個交易日正買合計 12,773 張，估算金額約 292.49 億元。",
      "event": "自營商連買 8 日，近 10 個交易日正買合計 12,773 張；最新日外資 -1,672 張、投信 1,047 張、自營商 4,626 張。",
      "ai": "法人買盤集中在 半導體，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 19983.111,
      "yahooVerification": {
        "status": "matched",
        "source": "https://tw.stock.yahoo.com/quote/2330.TW/institutional-trading",
        "latestNetBuy": 4626,
        "days": 8,
        "latestForeign": -1672,
        "latestTrust": 1047,
        "latestDealer": 4626
      }
    },
    {
      "id": "inst-2884-20260720",
      "type": "institutional",
      "title": "2884 玉山金",
      "stockCode": "2884",
      "stockName": "玉山金",
      "sector": "金融保險",
      "group": "金融保險",
      "institutionType": "外資",
      "direction": "同步買超",
      "days": 10,
      "consecutiveBuyDays": 10,
      "streaks": {
        "外資": 10,
        "投信": 3,
        "自營商": 3
      },
      "latestNetBuy": 24102,
      "buyVolume": 150405,
      "buyAmount": 0,
      "syncCount": 3,
      "importance": "高",
      "timestamp": "2026/07/20 18:20",
      "tags": [
        "外資",
        "同步買超",
        "金融保險",
        "電子商務及延伸",
        "金融業"
      ],
      "summary": "外資同步買超，近 10 個交易日正買合計 150,405 張，估算金額約 0.00 億元。",
      "event": "外資連買 10 日，近 10 個交易日正買合計 150,405 張；最新日外資 24,102 張、投信 527 張、自營商 5,560 張。",
      "ai": "法人買盤集中在 金融保險，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 175930.057,
      "yahooVerification": {
        "status": "days-different",
        "source": "https://tw.stock.yahoo.com/quote/2884.TW/institutional-trading",
        "latestNetBuy": 24102,
        "days": 11,
        "latestForeign": 24102,
        "latestTrust": 527,
        "latestDealer": 5560
      }
    },
    {
      "id": "inst-6505-20260720",
      "type": "institutional",
      "title": "6505 台塑化",
      "stockCode": "6505",
      "stockName": "台塑化",
      "sector": "油電燃氣業",
      "group": "油電燃氣業",
      "institutionType": "外資",
      "direction": "同步買超",
      "days": 10,
      "consecutiveBuyDays": 10,
      "streaks": {
        "外資": 10,
        "投信": 4,
        "自營商": 6
      },
      "latestNetBuy": 11002,
      "buyVolume": 64683,
      "buyAmount": 0,
      "syncCount": 3,
      "importance": "高",
      "timestamp": "2026/07/20 18:20",
      "tags": [
        "外資",
        "同步買超",
        "油電燃氣業",
        "塑化原料",
        "烯烴類"
      ],
      "summary": "外資同步買超，近 10 個交易日正買合計 64,683 張，估算金額約 0.00 億元。",
      "event": "外資連買 10 日，近 10 個交易日正買合計 64,683 張；最新日外資 11,002 張、投信 76 張、自營商 38 張。",
      "ai": "法人買盤集中在 油電燃氣業，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 83689.017,
      "yahooVerification": {
        "status": "matched",
        "source": "https://tw.stock.yahoo.com/quote/6505.TW/institutional-trading",
        "latestNetBuy": 11002,
        "days": 10,
        "latestForeign": 11002,
        "latestTrust": 76,
        "latestDealer": 38
      }
    },
    {
      "id": "inst-2317-20260720",
      "type": "institutional",
      "title": "2317 鴻海",
      "stockCode": "2317",
      "stockName": "鴻海",
      "sector": "其他電子業",
      "group": "其他電子業",
      "institutionType": "自營商",
      "direction": "同步買超",
      "days": 5,
      "consecutiveBuyDays": 5,
      "streaks": {
        "外資": 1,
        "投信": 1,
        "自營商": 5
      },
      "latestNetBuy": 3412,
      "buyVolume": 8890,
      "buyAmount": 20.8,
      "syncCount": 3,
      "importance": "高",
      "timestamp": "2026/07/20 18:20",
      "tags": [
        "自營商",
        "同步買超",
        "其他電子業",
        "3D技術",
        "3D感測"
      ],
      "summary": "自營商同步買超，近 10 個交易日正買合計 8,890 張，估算金額約 20.80 億元。",
      "event": "自營商連買 5 日，近 10 個交易日正買合計 8,890 張；最新日外資 61 張、投信 450 張、自營商 3,412 張。",
      "ai": "法人買盤集中在 其他電子業，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 35215.72,
      "yahooVerification": {
        "status": "matched",
        "source": "https://tw.stock.yahoo.com/quote/2317.TW/institutional-trading",
        "latestNetBuy": 3412,
        "days": 5,
        "latestForeign": 61,
        "latestTrust": 450,
        "latestDealer": 3412
      }
    },
    {
      "id": "macro-ppi-yoy-may-20260706",
      "type": "macro",
      "title": "生產者物價指數 PPI",
      "eventName": "生產者物價指數 PPI",
      "originalEventName": "PPI YoY (May)",
      "sourcePublishTime": "2026/07/06 17:00 Asia/Taipei",
      "country": "歐元區",
      "publishTime": "2026/07/06 17:00",
      "previous": "5",
      "forecast": "5.7",
      "actual": "5.9",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/07/06 17:00",
      "tags": [
        "歐元區",
        "生產者物價指數",
        "偏多"
      ],
      "summary": "生產者物價指數 PPI 將於 2026/07/06 17:00 公布，市場關注前值 5、預期 5.7。",
      "event": "歐元區 生產者物價指數 PPI，前值 5、預期 5.7、實際 5.9。",
      "ai": "目前 AI 判斷為偏多觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響市場風險偏好與資金輪動。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "https://ec.europa.eu/eurostat/",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    },
    {
      "id": "macro-s-p-global-pmi-20260706",
      "type": "macro",
      "title": "PMI 採購經理人指數",
      "eventName": "PMI 採購經理人指數",
      "originalEventName": "S&P Global營建業PMI",
      "sourcePublishTime": "2026/07/06 16:30 Asia/Taipei",
      "country": "英國",
      "publishTime": "2026/07/06 16:30",
      "previous": "38.2",
      "forecast": "41.0",
      "actual": "38.4",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏空",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/07/06 16:30",
      "tags": [
        "英國",
        "PMI",
        "偏空"
      ],
      "summary": "PMI 採購經理人指數 將於 2026/07/06 16:30 公布，市場關注前值 38.2、預期 41.0。",
      "event": "英國 PMI 採購經理人指數，前值 38.2、預期 41.0、實際 38.4。",
      "ai": "目前 AI 判斷為偏空觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響市場風險偏好與資金輪動。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "鉅亨網全球經濟指標",
      "sourceUrl": "https://www.cnyes.com/economy/indicator",
      "sourceList": [
        "鉅亨網全球經濟指標"
      ]
    },
    {
      "id": "macro-s-p-global-pmi-20260706",
      "type": "macro",
      "title": "PMI 採購經理人指數",
      "eventName": "PMI 採購經理人指數",
      "originalEventName": "S&P Global營建業PMI",
      "sourcePublishTime": "2026/07/06 15:30 Asia/Taipei",
      "country": "法國",
      "publishTime": "2026/07/06 15:30",
      "previous": "39.6",
      "forecast": "39.4",
      "actual": "38.2",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏空",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/07/06 15:30",
      "tags": [
        "法國",
        "PMI",
        "偏空"
      ],
      "summary": "PMI 採購經理人指數 將於 2026/07/06 15:30 公布，市場關注前值 39.6、預期 39.4。",
      "event": "法國 PMI 採購經理人指數，前值 39.6、預期 39.4、實際 38.2。",
      "ai": "目前 AI 判斷為偏空觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響市場風險偏好與資金輪動。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "鉅亨網全球經濟指標",
      "sourceUrl": "https://www.cnyes.com/economy/indicator",
      "sourceList": [
        "鉅亨網全球經濟指標"
      ]
    },
    {
      "id": "macro-s-p-global-pmi-20260706",
      "type": "macro",
      "title": "PMI 採購經理人指數",
      "eventName": "PMI 採購經理人指數",
      "originalEventName": "S&P Global營建業PMI",
      "sourcePublishTime": "2026/07/06 15:30 Asia/Taipei",
      "country": "德國",
      "publishTime": "2026/07/06 15:30",
      "previous": "42.4",
      "forecast": "42.0",
      "actual": "44.8",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/07/06 15:30",
      "tags": [
        "德國",
        "PMI",
        "偏多"
      ],
      "summary": "PMI 採購經理人指數 將於 2026/07/06 15:30 公布，市場關注前值 42.4、預期 42.0。",
      "event": "德國 PMI 採購經理人指數，前值 42.4、預期 42.0、實際 44.8。",
      "ai": "目前 AI 判斷為偏多觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響市場風險偏好與資金輪動。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "鉅亨網全球經濟指標",
      "sourceUrl": "https://www.cnyes.com/economy/indicator",
      "sourceList": [
        "鉅亨網全球經濟指標"
      ]
    }
  ],
  "macroEvents": [
    {
      "id": "macro-s-p-global-pmi-20260706",
      "type": "macro",
      "title": "PMI 採購經理人指數",
      "eventName": "PMI 採購經理人指數",
      "originalEventName": "S&P Global營建業PMI",
      "sourcePublishTime": "2026/07/06 15:30 Asia/Taipei",
      "country": "法國",
      "publishTime": "2026/07/06 15:30",
      "previous": "39.6",
      "forecast": "39.4",
      "actual": "38.2",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏空",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/07/06 15:30",
      "tags": [
        "法國",
        "PMI",
        "偏空"
      ],
      "summary": "PMI 採購經理人指數 將於 2026/07/06 15:30 公布，市場關注前值 39.6、預期 39.4。",
      "event": "法國 PMI 採購經理人指數，前值 39.6、預期 39.4、實際 38.2。",
      "ai": "目前 AI 判斷為偏空觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響市場風險偏好與資金輪動。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "鉅亨網全球經濟指標",
      "sourceUrl": "https://www.cnyes.com/economy/indicator",
      "sourceList": [
        "鉅亨網全球經濟指標"
      ]
    },
    {
      "id": "macro-s-p-global-pmi-20260706",
      "type": "macro",
      "title": "PMI 採購經理人指數",
      "eventName": "PMI 採購經理人指數",
      "originalEventName": "S&P Global營建業PMI",
      "sourcePublishTime": "2026/07/06 15:30 Asia/Taipei",
      "country": "德國",
      "publishTime": "2026/07/06 15:30",
      "previous": "42.4",
      "forecast": "42.0",
      "actual": "44.8",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/07/06 15:30",
      "tags": [
        "德國",
        "PMI",
        "偏多"
      ],
      "summary": "PMI 採購經理人指數 將於 2026/07/06 15:30 公布，市場關注前值 42.4、預期 42.0。",
      "event": "德國 PMI 採購經理人指數，前值 42.4、預期 42.0、實際 44.8。",
      "ai": "目前 AI 判斷為偏多觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響市場風險偏好與資金輪動。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "鉅亨網全球經濟指標",
      "sourceUrl": "https://www.cnyes.com/economy/indicator",
      "sourceList": [
        "鉅亨網全球經濟指標"
      ]
    },
    {
      "id": "macro-s-p-global-pmi-20260706",
      "type": "macro",
      "title": "PMI 採購經理人指數",
      "eventName": "PMI 採購經理人指數",
      "originalEventName": "S&P Global營建業PMI",
      "sourcePublishTime": "2026/07/06 16:30 Asia/Taipei",
      "country": "英國",
      "publishTime": "2026/07/06 16:30",
      "previous": "38.2",
      "forecast": "41.0",
      "actual": "38.4",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏空",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/07/06 16:30",
      "tags": [
        "英國",
        "PMI",
        "偏空"
      ],
      "summary": "PMI 採購經理人指數 將於 2026/07/06 16:30 公布，市場關注前值 38.2、預期 41.0。",
      "event": "英國 PMI 採購經理人指數，前值 38.2、預期 41.0、實際 38.4。",
      "ai": "目前 AI 判斷為偏空觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響市場風險偏好與資金輪動。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "鉅亨網全球經濟指標",
      "sourceUrl": "https://www.cnyes.com/economy/indicator",
      "sourceList": [
        "鉅亨網全球經濟指標"
      ]
    },
    {
      "id": "macro-ppi-yoy-may-20260706",
      "type": "macro",
      "title": "生產者物價指數 PPI",
      "eventName": "生產者物價指數 PPI",
      "originalEventName": "PPI YoY (May)",
      "sourcePublishTime": "2026/07/06 17:00 Asia/Taipei",
      "country": "歐元區",
      "publishTime": "2026/07/06 17:00",
      "previous": "5",
      "forecast": "5.7",
      "actual": "5.9",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/07/06 17:00",
      "tags": [
        "歐元區",
        "生產者物價指數",
        "偏多"
      ],
      "summary": "生產者物價指數 PPI 將於 2026/07/06 17:00 公布，市場關注前值 5、預期 5.7。",
      "event": "歐元區 生產者物價指數 PPI，前值 5、預期 5.7、實際 5.9。",
      "ai": "目前 AI 判斷為偏多觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響市場風險偏好與資金輪動。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "https://ec.europa.eu/eurostat/",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    },
    {
      "id": "macro-s-p-global-services-pmi-final-jun-20260706",
      "type": "macro",
      "title": "服務業 PMI",
      "eventName": "服務業 PMI",
      "originalEventName": "S&P Global Services PMI Final (Jun)",
      "sourcePublishTime": "2026/07/06 21:45 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/07/06 21:45",
      "previous": "50.7",
      "forecast": "51.4",
      "actual": "51.2",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏空",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/07/06 21:45",
      "tags": [
        "美國",
        "服務業",
        "中性"
      ],
      "summary": "服務業 PMI 將於 2026/07/06 21:45 公布，市場關注前值 50.7、預期 51.3。",
      "event": "美國 服務業 PMI，前值 50.7、預期 51.3、實際 51.2。",
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
      "id": "macro-s-p-global-composite-pmi-final-jun-20260706",
      "type": "macro",
      "title": "綜合 PMI",
      "eventName": "綜合 PMI",
      "originalEventName": "S&P Global Composite PMI Final (Jun)",
      "sourcePublishTime": "2026/07/06 21:45 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/07/06 21:45",
      "previous": "51.5",
      "forecast": "52.2",
      "actual": "51.9",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏空",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/07/06 21:45",
      "tags": [
        "美國",
        "綜合",
        "中性"
      ],
      "summary": "綜合 PMI 將於 2026/07/06 21:45 公布，市場關注前值 51.5、預期 52.2。",
      "event": "美國 綜合 PMI，前值 51.5、預期 52.2、實際 51.9。",
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
      "id": "macro-ism-services-employment-jun-20260706",
      "type": "macro",
      "title": "ISM 製造業就業",
      "eventName": "ISM 製造業就業",
      "originalEventName": "ISM Services Employment (Jun)",
      "sourcePublishTime": "2026/07/06 22:00 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/07/06 22:00",
      "previous": "47.9",
      "forecast": "48.6",
      "actual": "51.2",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響景氣循環、原物料、工業與科技需求預期。",
      "importance": "中高",
      "timestamp": "2026/07/06 22:00",
      "tags": [
        "美國",
        "ISM",
        "中性"
      ],
      "summary": "ISM 製造業就業 將於 2026/07/06 22:00 公布，市場關注前值 47.9、預期 —。",
      "event": "美國 ISM 製造業就業，前值 47.9、預期 —、實際 51.2。",
      "ai": "目前 AI 判斷為中性觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響景氣循環、原物料、工業與科技需求預期。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar / 鉅亨網全球經濟指標",
      "sourceUrl": "https://www.ismworld.org",
      "sourceList": [
        "TradingView Economic Calendar",
        "鉅亨網全球經濟指標"
      ]
    },
    {
      "id": "macro-ism-services-new-orders-jun-20260706",
      "type": "macro",
      "title": "ISM 製造業新訂單",
      "eventName": "ISM 製造業新訂單",
      "originalEventName": "ISM Services New Orders (Jun)",
      "sourcePublishTime": "2026/07/06 22:00 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/07/06 22:00",
      "previous": "57.3",
      "forecast": "57.0",
      "actual": "55.1",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響景氣循環、原物料、工業與科技需求預期。",
      "importance": "中高",
      "timestamp": "2026/07/06 22:00",
      "tags": [
        "美國",
        "ISM",
        "中性"
      ],
      "summary": "ISM 製造業新訂單 將於 2026/07/06 22:00 公布，市場關注前值 57.3、預期 —。",
      "event": "美國 ISM 製造業新訂單，前值 57.3、預期 —、實際 55.1。",
      "ai": "目前 AI 判斷為中性觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響景氣循環、原物料、工業與科技需求預期。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar / 鉅亨網全球經濟指標",
      "sourceUrl": "https://www.ismworld.org",
      "sourceList": [
        "TradingView Economic Calendar",
        "鉅亨網全球經濟指標"
      ]
    }
  ]
};
