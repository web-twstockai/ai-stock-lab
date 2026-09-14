window.IntelligenceOverviewData = {
  "updatedAt": "2026/09/14 18:30",
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
          "33 筆"
        ],
        [
          "三大法人同步買",
          "15 筆"
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
      "id": "inst-2382-20260914",
      "type": "institutional",
      "title": "2382 廣達",
      "stockCode": "2382",
      "stockName": "廣達",
      "sector": "電腦及週邊設備",
      "group": "電腦及週邊設備",
      "institutionType": "外資",
      "direction": "同步買超",
      "days": 2,
      "consecutiveBuyDays": 2,
      "streaks": {
        "外資": 2,
        "投信": 2,
        "自營商": 2
      },
      "latestNetBuy": 300,
      "buyVolume": 32295,
      "buyAmount": 108.67,
      "syncCount": 3,
      "importance": "高",
      "timestamp": "2026/09/14 18:20",
      "tags": [
        "外資",
        "同步買超",
        "電腦及週邊設備",
        "5G",
        "APPLE概念"
      ],
      "summary": "外資同步買超，近 10 個交易日正買合計 32,295 張，估算金額約 108.67 億元。",
      "event": "外資連買 2 日，近 10 個交易日正買合計 32,295 張；最新日外資 300 張、投信 248 張、自營商 11 張。",
      "ai": "法人買盤集中在 電腦及週邊設備，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 39253.535,
      "yahooVerification": {
        "status": "matched",
        "source": "https://tw.stock.yahoo.com/quote/2382.TW/institutional-trading",
        "latestNetBuy": 300,
        "days": 2,
        "latestForeign": 300,
        "latestTrust": 248,
        "latestDealer": 11
      }
    },
    {
      "id": "inst-2303-20260914",
      "type": "institutional",
      "title": "2303 聯電",
      "stockCode": "2303",
      "stockName": "聯電",
      "sector": "半導體",
      "group": "半導體",
      "institutionType": "投信",
      "direction": "同步買超",
      "days": 7,
      "consecutiveBuyDays": 7,
      "streaks": {
        "外資": 1,
        "投信": 7,
        "自營商": 2
      },
      "latestNetBuy": 3721,
      "buyVolume": 56132,
      "buyAmount": 78.87,
      "syncCount": 3,
      "importance": "高",
      "timestamp": "2026/09/14 18:20",
      "tags": [
        "投信",
        "同步買超",
        "半導體",
        "手機",
        "車用電子相關"
      ],
      "summary": "投信同步買超，近 10 個交易日正買合計 56,132 張，估算金額約 78.87 億元。",
      "event": "投信連買 7 日，近 10 個交易日正買合計 56,132 張；最新日外資 13,699 張、投信 3,721 張、自營商 131 張。",
      "ai": "法人買盤集中在 半導體，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 180756.18,
      "yahooVerification": {
        "status": "matched",
        "source": "https://tw.stock.yahoo.com/quote/2303.TW/institutional-trading",
        "latestNetBuy": 3721,
        "days": 7,
        "latestForeign": 13699,
        "latestTrust": 3721,
        "latestDealer": 131
      }
    },
    {
      "id": "inst-2317-20260914",
      "type": "institutional",
      "title": "2317 鴻海",
      "stockCode": "2317",
      "stockName": "鴻海",
      "sector": "其他電子業",
      "group": "其他電子業",
      "institutionType": "投信",
      "direction": "同步買超",
      "days": 3,
      "consecutiveBuyDays": 3,
      "streaks": {
        "外資": 1,
        "投信": 3,
        "自營商": 1
      },
      "latestNetBuy": 797,
      "buyVolume": 4314,
      "buyAmount": 10.7,
      "syncCount": 3,
      "importance": "高",
      "timestamp": "2026/09/14 18:20",
      "tags": [
        "投信",
        "同步買超",
        "其他電子業",
        "3D技術",
        "3D感測"
      ],
      "summary": "投信同步買超，近 10 個交易日正買合計 4,314 張，估算金額約 10.70 億元。",
      "event": "投信連買 3 日，近 10 個交易日正買合計 4,314 張；最新日外資 179 張、投信 797 張、自營商 99 張。",
      "ai": "法人買盤集中在 其他電子業，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 49915.365,
      "yahooVerification": {
        "status": "matched",
        "source": "https://tw.stock.yahoo.com/quote/2317.TW/institutional-trading",
        "latestNetBuy": 797,
        "days": 3,
        "latestForeign": 179,
        "latestTrust": 797,
        "latestDealer": 99
      }
    },
    {
      "id": "inst-2887-20260914",
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
        "外資": 2,
        "投信": 10,
        "自營商": 0
      },
      "latestNetBuy": 5449,
      "buyVolume": 89668,
      "buyAmount": 0,
      "syncCount": 2,
      "importance": "高",
      "timestamp": "2026/09/14 18:20",
      "tags": [
        "投信",
        "連買",
        "金融保險",
        "金融業",
        "銀行"
      ],
      "summary": "投信連買，近 10 個交易日正買合計 89,668 張，估算金額約 0.00 億元。",
      "event": "投信連買 10 日，近 10 個交易日正買合計 89,668 張；最新日外資 8,494 張、投信 5,449 張、自營商 -103 張。",
      "ai": "法人買盤集中在 金融保險，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 143151.069,
      "yahooVerification": {
        "status": "days-different",
        "source": "https://tw.stock.yahoo.com/quote/2887.TW/institutional-trading",
        "latestNetBuy": 5449,
        "days": 15,
        "latestForeign": 8494,
        "latestTrust": 5449,
        "latestDealer": -103
      }
    },
    {
      "id": "macro-baden-wuerttemberg-cpi-yoy-aug-20260831",
      "type": "macro",
      "title": "消費者物價指數 CPI",
      "eventName": "消費者物價指數 CPI",
      "originalEventName": "Baden Wuerttemberg CPI YoY (Aug)",
      "sourcePublishTime": "2026/08/31 16:00 Asia/Taipei",
      "country": "德國",
      "publishTime": "2026/08/31 16:00",
      "previous": "2.5",
      "forecast": "—",
      "actual": "2.6",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "importance": "高",
      "timestamp": "2026/08/31 16:00",
      "tags": [
        "德國",
        "消費者物價指數",
        "中性"
      ],
      "summary": "消費者物價指數 CPI 將於 2026/08/31 16:00 公布，市場關注前值 2.5、預期 —。",
      "event": "德國 消費者物價指數 CPI，前值 2.5、預期 —、實際 2.6。",
      "ai": "目前 AI 判斷為中性觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "https://www.statistik-bw.de/",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    },
    {
      "id": "macro-brc-shop-price-inflation-aug-20260901",
      "type": "macro",
      "title": "BRC Shop Price Inflation (Aug)",
      "eventName": "BRC Shop Price Inflation (Aug)",
      "originalEventName": "BRC Shop Price Inflation (Aug)",
      "sourcePublishTime": "2026/09/01 07:01 Asia/Taipei",
      "country": "英國",
      "publishTime": "2026/09/01 07:01",
      "previous": "0.9",
      "forecast": "—",
      "actual": "1.5",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "importance": "中高",
      "timestamp": "2026/09/01 07:01",
      "tags": [
        "英國",
        "BRC",
        "中性"
      ],
      "summary": "BRC Shop Price Inflation (Aug) 將於 2026/09/01 07:01 公布，市場關注前值 0.9、預期 —。",
      "event": "英國 BRC Shop Price Inflation (Aug)，前值 0.9、預期 —、實際 1.5。",
      "ai": "目前 AI 判斷為中性觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "https://brc.org.uk/",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    },
    {
      "id": "macro-dallas-fed-manufacturing-index-aug-20260831",
      "type": "macro",
      "title": "Dallas Fed Manufacturing Index (Aug)",
      "eventName": "Dallas Fed Manufacturing Index (Aug)",
      "originalEventName": "Dallas Fed Manufacturing Index (Aug)",
      "sourcePublishTime": "2026/08/31 22:30 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/08/31 22:30",
      "previous": "1.3",
      "forecast": "—",
      "actual": "11.6",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響全球資金成本、美元走勢與風險資產評價。",
      "importance": "中高",
      "timestamp": "2026/08/31 22:30",
      "tags": [
        "美國",
        "Dallas",
        "中性"
      ],
      "summary": "Dallas Fed Manufacturing Index (Aug) 將於 2026/08/31 22:30 公布，市場關注前值 1.3、預期 —。",
      "event": "美國 Dallas Fed Manufacturing Index (Aug)，前值 1.3、預期 —、實際 11.6。",
      "ai": "目前 AI 判斷為中性觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響全球資金成本、美元走勢與風險資產評價。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "https://www.dallasfed.org",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    },
    {
      "id": "macro-harmonised-inflation-rate-yoy-prel-aug-20260831",
      "type": "macro",
      "title": "通膨率",
      "eventName": "通膨率",
      "originalEventName": "Harmonised Inflation Rate YoY Prel (Aug)",
      "sourcePublishTime": "2026/08/31 20:00 Asia/Taipei",
      "country": "德國",
      "publishTime": "2026/08/31 20:00",
      "previous": "2.8",
      "forecast": "3.1",
      "actual": "2.9",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "importance": "中高",
      "timestamp": "2026/08/31 20:00",
      "tags": [
        "德國",
        "通膨率",
        "偏多"
      ],
      "summary": "通膨率 將於 2026/08/31 20:00 公布，市場關注前值 2.8、預期 3.1。",
      "event": "德國 通膨率，前值 2.8、預期 3.1、實際 2.9。",
      "ai": "目前 AI 判斷為偏多觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "https://www.destatis.de",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    }
  ],
  "macroEvents": [
    {
      "id": "macro-baden-wuerttemberg-cpi-yoy-aug-20260831",
      "type": "macro",
      "title": "消費者物價指數 CPI",
      "eventName": "消費者物價指數 CPI",
      "originalEventName": "Baden Wuerttemberg CPI YoY (Aug)",
      "sourcePublishTime": "2026/08/31 16:00 Asia/Taipei",
      "country": "德國",
      "publishTime": "2026/08/31 16:00",
      "previous": "2.5",
      "forecast": "—",
      "actual": "2.6",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "importance": "高",
      "timestamp": "2026/08/31 16:00",
      "tags": [
        "德國",
        "消費者物價指數",
        "中性"
      ],
      "summary": "消費者物價指數 CPI 將於 2026/08/31 16:00 公布，市場關注前值 2.5、預期 —。",
      "event": "德國 消費者物價指數 CPI，前值 2.5、預期 —、實際 2.6。",
      "ai": "目前 AI 判斷為中性觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "https://www.statistik-bw.de/",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    },
    {
      "id": "macro-harmonised-inflation-rate-yoy-prel-aug-20260831",
      "type": "macro",
      "title": "通膨率",
      "eventName": "通膨率",
      "originalEventName": "Harmonised Inflation Rate YoY Prel (Aug)",
      "sourcePublishTime": "2026/08/31 20:00 Asia/Taipei",
      "country": "德國",
      "publishTime": "2026/08/31 20:00",
      "previous": "2.8",
      "forecast": "3.1",
      "actual": "2.9",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "importance": "中高",
      "timestamp": "2026/08/31 20:00",
      "tags": [
        "德國",
        "通膨率",
        "偏多"
      ],
      "summary": "通膨率 將於 2026/08/31 20:00 公布，市場關注前值 2.8、預期 3.1。",
      "event": "德國 通膨率，前值 2.8、預期 3.1、實際 2.9。",
      "ai": "目前 AI 判斷為偏多觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "https://www.destatis.de",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    },
    {
      "id": "macro-dallas-fed-manufacturing-index-aug-20260831",
      "type": "macro",
      "title": "Dallas Fed Manufacturing Index (Aug)",
      "eventName": "Dallas Fed Manufacturing Index (Aug)",
      "originalEventName": "Dallas Fed Manufacturing Index (Aug)",
      "sourcePublishTime": "2026/08/31 22:30 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/08/31 22:30",
      "previous": "1.3",
      "forecast": "—",
      "actual": "11.6",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響全球資金成本、美元走勢與風險資產評價。",
      "importance": "中高",
      "timestamp": "2026/08/31 22:30",
      "tags": [
        "美國",
        "Dallas",
        "中性"
      ],
      "summary": "Dallas Fed Manufacturing Index (Aug) 將於 2026/08/31 22:30 公布，市場關注前值 1.3、預期 —。",
      "event": "美國 Dallas Fed Manufacturing Index (Aug)，前值 1.3、預期 —、實際 11.6。",
      "ai": "目前 AI 判斷為中性觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響全球資金成本、美元走勢與風險資產評價。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "https://www.dallasfed.org",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    },
    {
      "id": "macro-brc-shop-price-inflation-aug-20260901",
      "type": "macro",
      "title": "BRC Shop Price Inflation (Aug)",
      "eventName": "BRC Shop Price Inflation (Aug)",
      "originalEventName": "BRC Shop Price Inflation (Aug)",
      "sourcePublishTime": "2026/09/01 07:01 Asia/Taipei",
      "country": "英國",
      "publishTime": "2026/09/01 07:01",
      "previous": "0.9",
      "forecast": "—",
      "actual": "1.5",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "importance": "中高",
      "timestamp": "2026/09/01 07:01",
      "tags": [
        "英國",
        "BRC",
        "中性"
      ],
      "summary": "BRC Shop Price Inflation (Aug) 將於 2026/09/01 07:01 公布，市場關注前值 0.9、預期 —。",
      "event": "英國 BRC Shop Price Inflation (Aug)，前值 0.9、預期 —、實際 1.5。",
      "ai": "目前 AI 判斷為中性觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "https://brc.org.uk/",
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
    }
  ]
};
