window.IntelligenceOverviewData = {
  "updatedAt": "2026/08/14 18:30",
  "status": "運作中",
  "cards": [
    {
      "label": "今日偵測情報",
      "value": 263,
      "unit": "筆",
      "icon": "file"
    },
    {
      "label": "高重要度訊號",
      "value": 65,
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
          "23 筆"
        ],
        [
          "三大法人同步買",
          "8 筆"
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
          "20 個"
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
      "id": "inst-2303-20260814",
      "type": "institutional",
      "title": "2303 聯電",
      "stockCode": "2303",
      "stockName": "聯電",
      "sector": "半導體",
      "group": "半導體",
      "institutionType": "自營商",
      "direction": "連買",
      "days": 5,
      "consecutiveBuyDays": 5,
      "streaks": {
        "外資": 0,
        "投信": 0,
        "自營商": 5
      },
      "latestNetBuy": 1041,
      "buyVolume": 18668,
      "buyAmount": 22.59,
      "syncCount": 1,
      "importance": "高",
      "timestamp": "2026/08/14 18:20",
      "tags": [
        "自營商",
        "連買",
        "半導體",
        "手機",
        "車用電子相關"
      ],
      "summary": "自營商連買，近 10 個交易日正買合計 18,668 張，估算金額約 22.59 億元。",
      "event": "自營商連買 5 日，近 10 個交易日正買合計 18,668 張；最新日外資 -4,510 張、投信 -8,594 張、自營商 1,041 張。",
      "ai": "法人買盤集中在 半導體，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 98184.58,
      "yahooVerification": {
        "status": "matched",
        "source": "https://tw.stock.yahoo.com/quote/2303.TW/institutional-trading",
        "latestNetBuy": 1041,
        "days": 5,
        "latestForeign": -4510,
        "latestTrust": -8594,
        "latestDealer": 1041
      }
    },
    {
      "id": "inst-2603-20260814",
      "type": "institutional",
      "title": "2603 長榮",
      "stockCode": "2603",
      "stockName": "長榮",
      "sector": "航運業",
      "group": "航運業",
      "institutionType": "投信",
      "direction": "同步買超",
      "days": 6,
      "consecutiveBuyDays": 6,
      "streaks": {
        "外資": 2,
        "投信": 6,
        "自營商": 1
      },
      "latestNetBuy": 8,
      "buyVolume": 3897,
      "buyAmount": 0,
      "syncCount": 3,
      "importance": "高",
      "timestamp": "2026/08/14 18:20",
      "tags": [
        "投信",
        "同步買超",
        "航運業",
        "三通",
        "運輸事業"
      ],
      "summary": "投信同步買超，近 10 個交易日正買合計 3,897 張，估算金額約 0.00 億元。",
      "event": "投信連買 6 日，近 10 個交易日正買合計 3,897 張；最新日外資 7,906 張、投信 8 張、自營商 155 張。",
      "ai": "法人買盤集中在 航運業，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 37038.854,
      "yahooVerification": {
        "status": "matched",
        "source": "https://tw.stock.yahoo.com/quote/2603.TW/institutional-trading",
        "latestNetBuy": 8,
        "days": 6,
        "latestForeign": 7906,
        "latestTrust": 8,
        "latestDealer": 155
      }
    },
    {
      "id": "inst-3706-20260814",
      "type": "institutional",
      "title": "3706 神達",
      "stockCode": "3706",
      "stockName": "神達",
      "sector": "電腦及週邊設備",
      "group": "電腦及週邊設備",
      "institutionType": "外資",
      "direction": "同步買超",
      "days": 3,
      "consecutiveBuyDays": 3,
      "streaks": {
        "外資": 3,
        "投信": 1,
        "自營商": 1
      },
      "latestNetBuy": 9690,
      "buyVolume": 47822,
      "buyAmount": 0,
      "syncCount": 3,
      "importance": "高",
      "timestamp": "2026/08/14 18:20",
      "tags": [
        "外資",
        "同步買超",
        "電腦及週邊設備",
        "ADAS供應鏈",
        "車聯網"
      ],
      "summary": "外資同步買超，近 10 個交易日正買合計 47,822 張，估算金額約 0.00 億元。",
      "event": "外資連買 3 日，近 10 個交易日正買合計 47,822 張；最新日外資 9,690 張、投信 1 張、自營商 375 張。",
      "ai": "法人買盤集中在 電腦及週邊設備，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 49761.845,
      "yahooVerification": {
        "status": "matched",
        "source": "https://tw.stock.yahoo.com/quote/3706.TW/institutional-trading",
        "latestNetBuy": 9690,
        "days": 3,
        "latestForeign": 9690,
        "latestTrust": 1,
        "latestDealer": 375
      }
    },
    {
      "id": "inst-2382-20260814",
      "type": "institutional",
      "title": "2382 廣達",
      "stockCode": "2382",
      "stockName": "廣達",
      "sector": "電腦及週邊設備",
      "group": "電腦及週邊設備",
      "institutionType": "投信",
      "direction": "連買",
      "days": 6,
      "consecutiveBuyDays": 6,
      "streaks": {
        "外資": 1,
        "投信": 6,
        "自營商": 0
      },
      "latestNetBuy": 148,
      "buyVolume": 2513,
      "buyAmount": 8.23,
      "syncCount": 2,
      "importance": "高",
      "timestamp": "2026/08/14 18:20",
      "tags": [
        "投信",
        "連買",
        "電腦及週邊設備",
        "5G",
        "APPLE概念"
      ],
      "summary": "投信連買，近 10 個交易日正買合計 2,513 張，估算金額約 8.23 億元。",
      "event": "投信連買 6 日，近 10 個交易日正買合計 2,513 張；最新日外資 6,634 張、投信 148 張、自營商 -543 張。",
      "ai": "法人買盤集中在 電腦及週邊設備，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 14775.078,
      "yahooVerification": {
        "status": "matched",
        "source": "https://tw.stock.yahoo.com/quote/2382.TW/institutional-trading",
        "latestNetBuy": 148,
        "days": 6,
        "latestForeign": 6634,
        "latestTrust": 148,
        "latestDealer": -543
      }
    },
    {
      "id": "macro-gdp-growth-rate-yoy-flash-q2-20260730",
      "type": "macro",
      "title": "GDP 經濟成長率",
      "eventName": "GDP 經濟成長率",
      "originalEventName": "GDP Growth Rate YoY Flash (Q2)",
      "sourcePublishTime": "2026/07/30 17:00 Asia/Taipei",
      "country": "歐元區",
      "publishTime": "2026/07/30 17:00",
      "previous": "0.5",
      "forecast": "0.5",
      "actual": "1",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響全球資金成本、美元走勢與風險資產評價。",
      "importance": "高",
      "timestamp": "2026/07/30 17:00",
      "tags": [
        "歐元區",
        "GDP",
        "偏多"
      ],
      "summary": "GDP 經濟成長率 將於 2026/07/30 17:00 公布，市場關注前值 0.5、預期 0.5。",
      "event": "歐元區 GDP 經濟成長率，前值 0.5、預期 0.5、實際 1。",
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
      "id": "macro-hesse-cpi-yoy-jul-20260730",
      "type": "macro",
      "title": "消費者物價指數 CPI",
      "eventName": "消費者物價指數 CPI",
      "originalEventName": "Hesse CPI YoY (Jul)",
      "sourcePublishTime": "2026/07/30 16:00 Asia/Taipei",
      "country": "德國",
      "publishTime": "2026/07/30 16:00",
      "previous": "2.3",
      "forecast": "—",
      "actual": "2.7",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "importance": "高",
      "timestamp": "2026/07/30 16:00",
      "tags": [
        "德國",
        "消費者物價指數",
        "中性"
      ],
      "summary": "消費者物價指數 CPI 將於 2026/07/30 16:00 公布，市場關注前值 2.3、預期 —。",
      "event": "德國 消費者物價指數 CPI，前值 2.3、預期 —、實際 2.7。",
      "ai": "目前 AI 判斷為中性觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "https://statistik.hessen.de/",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    },
    {
      "id": "macro-gdp-growth-rate-qoq-flash-q2-20260730",
      "type": "macro",
      "title": "GDP 經濟成長率",
      "eventName": "GDP 經濟成長率",
      "originalEventName": "GDP Growth Rate QoQ Flash (Q2)",
      "sourcePublishTime": "2026/07/30 16:00 Asia/Taipei",
      "country": "德國",
      "publishTime": "2026/07/30 16:00",
      "previous": "0.4",
      "forecast": "0.1",
      "actual": "0.2",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響全球資金成本、美元走勢與風險資產評價。",
      "importance": "高",
      "timestamp": "2026/07/30 16:00",
      "tags": [
        "德國",
        "GDP",
        "偏多"
      ],
      "summary": "GDP 經濟成長率 將於 2026/07/30 16:00 公布，市場關注前值 0.4、預期 0.1。",
      "event": "德國 GDP 經濟成長率，前值 0.4、預期 0.1、實際 0.2。",
      "ai": "目前 AI 判斷為偏多觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響全球資金成本、美元走勢與風險資產評價。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar / 鉅亨網全球經濟指標",
      "sourceUrl": "https://www.destatis.de",
      "sourceList": [
        "TradingView Economic Calendar",
        "鉅亨網全球經濟指標"
      ]
    },
    {
      "id": "macro-gdp-growth-rate-yoy-prel-q2-20260730",
      "type": "macro",
      "title": "GDP 經濟成長率",
      "eventName": "GDP 經濟成長率",
      "originalEventName": "GDP Growth Rate YoY Prel (Q2)",
      "sourcePublishTime": "2026/07/30 13:30 Asia/Taipei",
      "country": "法國",
      "publishTime": "2026/07/30 13:30",
      "previous": "0.8",
      "forecast": "0.8",
      "actual": "0.7",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏空",
      "impact": "影響全球資金成本、美元走勢與風險資產評價。",
      "importance": "高",
      "timestamp": "2026/07/30 13:30",
      "tags": [
        "法國",
        "GDP",
        "偏空"
      ],
      "summary": "GDP 經濟成長率 將於 2026/07/30 13:30 公布，市場關注前值 0.8、預期 0.8。",
      "event": "法國 GDP 經濟成長率，前值 0.8、預期 0.8、實際 0.7。",
      "ai": "目前 AI 判斷為偏空觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響全球資金成本、美元走勢與風險資產評價。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar / 鉅亨網全球經濟指標",
      "sourceUrl": "https://www.insee.fr",
      "sourceList": [
        "TradingView Economic Calendar",
        "鉅亨網全球經濟指標"
      ]
    }
  ],
  "macroEvents": [
    {
      "id": "macro-gdp-growth-rate-yoy-prel-q2-20260730",
      "type": "macro",
      "title": "GDP 經濟成長率",
      "eventName": "GDP 經濟成長率",
      "originalEventName": "GDP Growth Rate YoY Prel (Q2)",
      "sourcePublishTime": "2026/07/30 13:30 Asia/Taipei",
      "country": "法國",
      "publishTime": "2026/07/30 13:30",
      "previous": "0.8",
      "forecast": "0.8",
      "actual": "0.7",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏空",
      "impact": "影響全球資金成本、美元走勢與風險資產評價。",
      "importance": "高",
      "timestamp": "2026/07/30 13:30",
      "tags": [
        "法國",
        "GDP",
        "偏空"
      ],
      "summary": "GDP 經濟成長率 將於 2026/07/30 13:30 公布，市場關注前值 0.8、預期 0.8。",
      "event": "法國 GDP 經濟成長率，前值 0.8、預期 0.8、實際 0.7。",
      "ai": "目前 AI 判斷為偏空觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響全球資金成本、美元走勢與風險資產評價。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar / 鉅亨網全球經濟指標",
      "sourceUrl": "https://www.insee.fr",
      "sourceList": [
        "TradingView Economic Calendar",
        "鉅亨網全球經濟指標"
      ]
    },
    {
      "id": "macro-hesse-cpi-yoy-jul-20260730",
      "type": "macro",
      "title": "消費者物價指數 CPI",
      "eventName": "消費者物價指數 CPI",
      "originalEventName": "Hesse CPI YoY (Jul)",
      "sourcePublishTime": "2026/07/30 16:00 Asia/Taipei",
      "country": "德國",
      "publishTime": "2026/07/30 16:00",
      "previous": "2.3",
      "forecast": "—",
      "actual": "2.7",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "importance": "高",
      "timestamp": "2026/07/30 16:00",
      "tags": [
        "德國",
        "消費者物價指數",
        "中性"
      ],
      "summary": "消費者物價指數 CPI 將於 2026/07/30 16:00 公布，市場關注前值 2.3、預期 —。",
      "event": "德國 消費者物價指數 CPI，前值 2.3、預期 —、實際 2.7。",
      "ai": "目前 AI 判斷為中性觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "https://statistik.hessen.de/",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    },
    {
      "id": "macro-gdp-growth-rate-qoq-flash-q2-20260730",
      "type": "macro",
      "title": "GDP 經濟成長率",
      "eventName": "GDP 經濟成長率",
      "originalEventName": "GDP Growth Rate QoQ Flash (Q2)",
      "sourcePublishTime": "2026/07/30 16:00 Asia/Taipei",
      "country": "德國",
      "publishTime": "2026/07/30 16:00",
      "previous": "0.4",
      "forecast": "0.1",
      "actual": "0.2",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響全球資金成本、美元走勢與風險資產評價。",
      "importance": "高",
      "timestamp": "2026/07/30 16:00",
      "tags": [
        "德國",
        "GDP",
        "偏多"
      ],
      "summary": "GDP 經濟成長率 將於 2026/07/30 16:00 公布，市場關注前值 0.4、預期 0.1。",
      "event": "德國 GDP 經濟成長率，前值 0.4、預期 0.1、實際 0.2。",
      "ai": "目前 AI 判斷為偏多觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響全球資金成本、美元走勢與風險資產評價。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar / 鉅亨網全球經濟指標",
      "sourceUrl": "https://www.destatis.de",
      "sourceList": [
        "TradingView Economic Calendar",
        "鉅亨網全球經濟指標"
      ]
    },
    {
      "id": "macro-gdp-growth-rate-yoy-flash-q2-20260730",
      "type": "macro",
      "title": "GDP 經濟成長率",
      "eventName": "GDP 經濟成長率",
      "originalEventName": "GDP Growth Rate YoY Flash (Q2)",
      "sourcePublishTime": "2026/07/30 17:00 Asia/Taipei",
      "country": "歐元區",
      "publishTime": "2026/07/30 17:00",
      "previous": "0.5",
      "forecast": "0.5",
      "actual": "1",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響全球資金成本、美元走勢與風險資產評價。",
      "importance": "高",
      "timestamp": "2026/07/30 17:00",
      "tags": [
        "歐元區",
        "GDP",
        "偏多"
      ],
      "summary": "GDP 經濟成長率 將於 2026/07/30 17:00 公布，市場關注前值 0.5、預期 0.5。",
      "event": "歐元區 GDP 經濟成長率，前值 0.5、預期 0.5、實際 1。",
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
      "id": "macro-unemployment-rate-jun-20260730",
      "type": "macro",
      "title": "失業率",
      "eventName": "失業率",
      "originalEventName": "Unemployment Rate (Jun)",
      "sourcePublishTime": "2026/07/30 17:00 Asia/Taipei",
      "country": "歐元區",
      "publishTime": "2026/07/30 17:00",
      "previous": "6.3",
      "forecast": "6.2",
      "actual": "6.3",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響全球資金成本、美元走勢與風險資產評價。",
      "importance": "中高",
      "timestamp": "2026/07/30 17:00",
      "tags": [
        "歐元區",
        "失業率",
        "偏多"
      ],
      "summary": "失業率 將於 2026/07/30 17:00 公布，市場關注前值 6.3、預期 6.2。",
      "event": "歐元區 失業率，前值 6.3、預期 6.2、實際 6.3。",
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
      "id": "macro-services-sentiment-jul-20260730",
      "type": "macro",
      "title": "Services Sentiment (Jul)",
      "eventName": "Services Sentiment (Jul)",
      "originalEventName": "Services Sentiment (Jul)",
      "sourcePublishTime": "2026/07/30 17:00 Asia/Taipei",
      "country": "歐元區",
      "publishTime": "2026/07/30 17:00",
      "previous": "4.2",
      "forecast": "3.8",
      "actual": "4.7",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/07/30 17:00",
      "tags": [
        "歐元區",
        "Services",
        "偏多"
      ],
      "summary": "Services Sentiment (Jul) 將於 2026/07/30 17:00 公布，市場關注前值 4.2、預期 3.8。",
      "event": "歐元區 Services Sentiment (Jul)，前值 4.2、預期 3.8、實際 4.7。",
      "ai": "目前 AI 判斷為偏多觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響市場風險偏好與資金輪動。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "http://ec.europa.eu",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    },
    {
      "id": "macro-boe-interest-rate-decision-20260730",
      "type": "macro",
      "title": "英國央行利率決議",
      "eventName": "英國央行利率決議",
      "originalEventName": "BoE Interest Rate Decision",
      "sourcePublishTime": "2026/07/30 19:00 Asia/Taipei",
      "country": "英國",
      "publishTime": "2026/07/30 19:00",
      "previous": "3.75",
      "forecast": "3.75",
      "actual": "3.75",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響全球資金成本、美元走勢與風險資產評價。",
      "importance": "中高",
      "timestamp": "2026/07/30 19:00",
      "tags": [
        "英國",
        "英國央行利率決議",
        "中性"
      ],
      "summary": "英國央行利率決議 將於 2026/07/30 19:00 公布，市場關注前值 3.75、預期 3.75。",
      "event": "英國 英國央行利率決議，前值 3.75、預期 3.75、實際 3.75。",
      "ai": "目前 AI 判斷為中性觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響全球資金成本、美元走勢與風險資產評價。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "https://www.bankofengland.co.uk",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    },
    {
      "id": "macro-harmonised-inflation-rate-mom-prel-jul-20260730",
      "type": "macro",
      "title": "通膨率",
      "eventName": "通膨率",
      "originalEventName": "Harmonised Inflation Rate MoM Prel (Jul)",
      "sourcePublishTime": "2026/07/30 20:00 Asia/Taipei",
      "country": "德國",
      "publishTime": "2026/07/30 20:00",
      "previous": "-0.2",
      "forecast": "0.8",
      "actual": "0.9",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏空",
      "impact": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "importance": "中高",
      "timestamp": "2026/07/30 20:00",
      "tags": [
        "德國",
        "通膨率",
        "偏空"
      ],
      "summary": "通膨率 將於 2026/07/30 20:00 公布，市場關注前值 -0.2、預期 0.8。",
      "event": "德國 通膨率，前值 -0.2、預期 0.8、實際 0.9。",
      "ai": "目前 AI 判斷為偏空觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "https://www.destatis.de",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    }
  ]
};
