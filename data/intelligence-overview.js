window.IntelligenceOverviewData = {
  "updatedAt": "2026/11/12 18:30",
  "status": "運作中",
  "cards": [
    {
      "label": "今日偵測情報",
      "value": 302,
      "unit": "筆",
      "icon": "file"
    },
    {
      "label": "高重要度訊號",
      "value": 87,
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
      "value": "FOMC 利率決議",
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
          "26 筆"
        ],
        [
          "三大法人同步買",
          "10 筆"
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
          "27 個"
        ],
        [
          "下一事件",
          "FOMC 利率決議"
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
      "id": "inst-2317-20261112",
      "type": "institutional",
      "title": "2317 鴻海",
      "stockCode": "2317",
      "stockName": "鴻海",
      "sector": "其他電子業",
      "group": "其他電子業",
      "institutionType": "投信",
      "direction": "連買",
      "days": 10,
      "consecutiveBuyDays": 10,
      "streaks": {
        "外資": 1,
        "投信": 10,
        "自營商": 0
      },
      "latestNetBuy": 29,
      "buyVolume": 13368,
      "buyAmount": 32.35,
      "syncCount": 2,
      "importance": "高",
      "timestamp": "2026/11/12 18:20",
      "tags": [
        "投信",
        "連買",
        "其他電子業",
        "3D技術",
        "3D感測"
      ],
      "summary": "投信連買，近 10 個交易日正買合計 13,368 張，估算金額約 32.35 億元。",
      "event": "投信連買 10 日，近 10 個交易日正買合計 13,368 張；最新日外資 8,391 張、投信 29 張、自營商 -92 張。",
      "ai": "法人買盤集中在 其他電子業，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 67264.908,
      "yahooVerification": {
        "status": "days-different",
        "source": "https://tw.stock.yahoo.com/quote/2317.TW/institutional-trading",
        "latestNetBuy": 29,
        "days": 13,
        "latestForeign": 8391,
        "latestTrust": 29,
        "latestDealer": -92
      }
    },
    {
      "id": "inst-2303-20261112",
      "type": "institutional",
      "title": "2303 聯電",
      "stockCode": "2303",
      "stockName": "聯電",
      "sector": "半導體",
      "group": "半導體",
      "institutionType": "自營商",
      "direction": "連買",
      "days": 3,
      "consecutiveBuyDays": 3,
      "streaks": {
        "外資": 2,
        "投信": 0,
        "自營商": 3
      },
      "latestNetBuy": 229,
      "buyVolume": 10339,
      "buyAmount": 10.75,
      "syncCount": 2,
      "importance": "高",
      "timestamp": "2026/11/12 18:20",
      "tags": [
        "自營商",
        "連買",
        "半導體",
        "手機",
        "車用電子相關"
      ],
      "summary": "自營商連買，近 10 個交易日正買合計 10,339 張，估算金額約 10.75 億元。",
      "event": "自營商連買 3 日，近 10 個交易日正買合計 10,339 張；最新日外資 5,729 張、投信 -7,465 張、自營商 229 張。",
      "ai": "法人買盤集中在 半導體，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 57248.169,
      "yahooVerification": {
        "status": "matched",
        "source": "https://tw.stock.yahoo.com/quote/2303.TW/institutional-trading",
        "latestNetBuy": 229,
        "days": 3,
        "latestForeign": 5729,
        "latestTrust": -7465,
        "latestDealer": 229
      }
    },
    {
      "id": "inst-2891-20261112",
      "type": "institutional",
      "title": "2891 中信金",
      "stockCode": "2891",
      "stockName": "中信金",
      "sector": "金融保險",
      "group": "金融保險",
      "institutionType": "投信",
      "direction": "連買",
      "days": 10,
      "consecutiveBuyDays": 10,
      "streaks": {
        "外資": 0,
        "投信": 10,
        "自營商": 10
      },
      "latestNetBuy": 12226,
      "buyVolume": 101397,
      "buyAmount": 0,
      "syncCount": 2,
      "importance": "高",
      "timestamp": "2026/11/12 18:20",
      "tags": [
        "投信",
        "連買",
        "金融保險",
        "金融業",
        "銀行"
      ],
      "summary": "投信連買，近 10 個交易日正買合計 101,397 張，估算金額約 0.00 億元。",
      "event": "投信連買 10 日，近 10 個交易日正買合計 101,397 張；最新日外資 -2,249 張、投信 12,226 張、自營商 318 張。",
      "ai": "法人買盤集中在 金融保險，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 141962.851,
      "yahooVerification": {
        "status": "matched",
        "source": "https://tw.stock.yahoo.com/quote/2891.TW/institutional-trading",
        "latestNetBuy": 12226,
        "days": 10,
        "latestForeign": -2249,
        "latestTrust": 12226,
        "latestDealer": 318
      }
    },
    {
      "id": "inst-2382-20261112",
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
        "自營商": 0
      },
      "latestNetBuy": 907,
      "buyVolume": 9581,
      "buyAmount": 28.55,
      "syncCount": 1,
      "importance": "高",
      "timestamp": "2026/11/12 18:20",
      "tags": [
        "投信",
        "連買",
        "電腦及週邊設備",
        "5G",
        "APPLE概念"
      ],
      "summary": "投信連買，近 10 個交易日正買合計 9,581 張，估算金額約 28.55 億元。",
      "event": "投信連買 10 日，近 10 個交易日正買合計 9,581 張；最新日外資 -13,463 張、投信 907 張、自營商 -21 張。",
      "ai": "法人買盤集中在 電腦及週邊設備，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 15833.524,
      "yahooVerification": {
        "status": "days-different",
        "source": "https://tw.stock.yahoo.com/quote/2382.TW/institutional-trading",
        "latestNetBuy": 907,
        "days": 20,
        "latestForeign": -13463,
        "latestTrust": 907,
        "latestDealer": -21
      }
    },
    {
      "id": "macro-core-pce-price-index-yoy-sep-2026-20261029",
      "type": "macro",
      "title": "核心 PCE 物價指數",
      "eventName": "核心 PCE 物價指數",
      "originalEventName": "Core PCE Price Index YoY (Sep. 2026)",
      "sourcePublishTime": "2026/10/29 20:30 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/10/29 20:30",
      "previous": "3",
      "forecast": "3.1",
      "actual": "3.1",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "importance": "高",
      "timestamp": "2026/10/29 20:30",
      "tags": [
        "美國",
        "核心",
        "中性"
      ],
      "summary": "核心 PCE 物價指數 將於 2026/10/29 20:30 公布，市場關注前值 3、預期 3.1。",
      "event": "美國 核心 PCE 物價指數，前值 3、預期 3.1、實際 3.1。",
      "ai": "目前 AI 判斷為中性觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar / Investing.com Economic Calendar / 鉅亨網全球經濟指標",
      "sourceUrl": "http://www.bea.gov/",
      "sourceList": [
        "TradingView Economic Calendar",
        "Investing.com Economic Calendar",
        "鉅亨網全球經濟指標"
      ]
    },
    {
      "id": "macro-fomc-20261029",
      "type": "macro",
      "title": "FOMC 利率決議",
      "eventName": "FOMC 利率決議",
      "originalEventName": "美聯儲(FOMC)新聞發布會",
      "sourcePublishTime": "2026/10/29 02:30 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/10/29 02:30",
      "previous": "—",
      "forecast": "—",
      "actual": null,
      "status": "等待公布",
      "statusLevel": "upcoming",
      "direction": "中性",
      "impact": "影響全球資金成本、美元走勢與風險資產評價。",
      "importance": "高",
      "timestamp": "2026/10/29 02:30",
      "tags": [
        "美國",
        "FOMC",
        "中性"
      ],
      "summary": "FOMC 利率決議 將於 2026/10/29 02:30 公布，市場關注前值 —、預期 —。",
      "event": "美國 FOMC 利率決議，前值 —、預期 —、實際 尚未公布。",
      "ai": "目前 AI 判斷為中性觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響全球資金成本、美元走勢與風險資產評價。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "Investing.com Economic Calendar",
      "sourceUrl": "https://hk.investing.com/economic-calendar/559671",
      "sourceList": [
        "Investing.com Economic Calendar"
      ]
    },
    {
      "id": "macro-fomc-20261029",
      "type": "macro",
      "title": "FOMC 利率決議",
      "eventName": "FOMC 利率決議",
      "originalEventName": "FOMC聲明",
      "sourcePublishTime": "2026/10/29 02:00 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/10/29 02:00",
      "previous": "—",
      "forecast": "—",
      "actual": null,
      "status": "等待公布",
      "statusLevel": "upcoming",
      "direction": "中性",
      "impact": "影響全球資金成本、美元走勢與風險資產評價。",
      "importance": "高",
      "timestamp": "2026/10/29 02:00",
      "tags": [
        "美國",
        "FOMC",
        "中性"
      ],
      "summary": "FOMC 利率決議 將於 2026/10/29 02:00 公布，市場關注前值 —、預期 —。",
      "event": "美國 FOMC 利率決議，前值 —、預期 —、實際 尚未公布。",
      "ai": "目前 AI 判斷為中性觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響全球資金成本、美元走勢與風險資產評價。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "Investing.com Economic Calendar",
      "sourceUrl": "https://hk.investing.com/economic-calendar/559863",
      "sourceList": [
        "Investing.com Economic Calendar"
      ]
    },
    {
      "id": "macro-services-sentiment-oct-2026-20261029",
      "type": "macro",
      "title": "Services Sentiment (Oct. 2026)",
      "eventName": "Services Sentiment (Oct. 2026)",
      "originalEventName": "Services Sentiment (Oct. 2026)",
      "sourcePublishTime": "2026/10/29 18:00 Asia/Taipei",
      "country": "歐元區",
      "publishTime": "2026/10/29 18:00",
      "previous": "5.9",
      "forecast": "5.9",
      "actual": "5.3",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏空",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/10/29 18:00",
      "tags": [
        "歐元區",
        "Services",
        "偏空"
      ],
      "summary": "Services Sentiment (Oct. 2026) 將於 2026/10/29 18:00 公布，市場關注前值 5.9、預期 5.9。",
      "event": "歐元區 Services Sentiment (Oct. 2026)，前值 5.9、預期 5.9、實際 5.3。",
      "ai": "目前 AI 判斷為偏空觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響市場風險偏好與資金輪動。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "http://ec.europa.eu",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    }
  ],
  "macroEvents": [
    {
      "id": "macro-fomc-20261029",
      "type": "macro",
      "title": "FOMC 利率決議",
      "eventName": "FOMC 利率決議",
      "originalEventName": "FOMC聲明",
      "sourcePublishTime": "2026/10/29 02:00 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/10/29 02:00",
      "previous": "—",
      "forecast": "—",
      "actual": null,
      "status": "等待公布",
      "statusLevel": "upcoming",
      "direction": "中性",
      "impact": "影響全球資金成本、美元走勢與風險資產評價。",
      "importance": "高",
      "timestamp": "2026/10/29 02:00",
      "tags": [
        "美國",
        "FOMC",
        "中性"
      ],
      "summary": "FOMC 利率決議 將於 2026/10/29 02:00 公布，市場關注前值 —、預期 —。",
      "event": "美國 FOMC 利率決議，前值 —、預期 —、實際 尚未公布。",
      "ai": "目前 AI 判斷為中性觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響全球資金成本、美元走勢與風險資產評價。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "Investing.com Economic Calendar",
      "sourceUrl": "https://hk.investing.com/economic-calendar/559863",
      "sourceList": [
        "Investing.com Economic Calendar"
      ]
    },
    {
      "id": "macro-fomc-20261029",
      "type": "macro",
      "title": "FOMC 利率決議",
      "eventName": "FOMC 利率決議",
      "originalEventName": "美聯儲(FOMC)新聞發布會",
      "sourcePublishTime": "2026/10/29 02:30 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/10/29 02:30",
      "previous": "—",
      "forecast": "—",
      "actual": null,
      "status": "等待公布",
      "statusLevel": "upcoming",
      "direction": "中性",
      "impact": "影響全球資金成本、美元走勢與風險資產評價。",
      "importance": "高",
      "timestamp": "2026/10/29 02:30",
      "tags": [
        "美國",
        "FOMC",
        "中性"
      ],
      "summary": "FOMC 利率決議 將於 2026/10/29 02:30 公布，市場關注前值 —、預期 —。",
      "event": "美國 FOMC 利率決議，前值 —、預期 —、實際 尚未公布。",
      "ai": "目前 AI 判斷為中性觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響全球資金成本、美元走勢與風險資產評價。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "Investing.com Economic Calendar",
      "sourceUrl": "https://hk.investing.com/economic-calendar/559671",
      "sourceList": [
        "Investing.com Economic Calendar"
      ]
    },
    {
      "id": "macro-services-sentiment-oct-2026-20261029",
      "type": "macro",
      "title": "Services Sentiment (Oct. 2026)",
      "eventName": "Services Sentiment (Oct. 2026)",
      "originalEventName": "Services Sentiment (Oct. 2026)",
      "sourcePublishTime": "2026/10/29 18:00 Asia/Taipei",
      "country": "歐元區",
      "publishTime": "2026/10/29 18:00",
      "previous": "5.9",
      "forecast": "5.9",
      "actual": "5.3",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏空",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/10/29 18:00",
      "tags": [
        "歐元區",
        "Services",
        "偏空"
      ],
      "summary": "Services Sentiment (Oct. 2026) 將於 2026/10/29 18:00 公布，市場關注前值 5.9、預期 5.9。",
      "event": "歐元區 Services Sentiment (Oct. 2026)，前值 5.9、預期 5.9、實際 5.3。",
      "ai": "目前 AI 判斷為偏空觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響市場風險偏好與資金輪動。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "http://ec.europa.eu",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    },
    {
      "id": "macro-core-pce-price-index-yoy-sep-2026-20261029",
      "type": "macro",
      "title": "核心 PCE 物價指數",
      "eventName": "核心 PCE 物價指數",
      "originalEventName": "Core PCE Price Index YoY (Sep. 2026)",
      "sourcePublishTime": "2026/10/29 20:30 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/10/29 20:30",
      "previous": "3",
      "forecast": "3.1",
      "actual": "3.1",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "importance": "高",
      "timestamp": "2026/10/29 20:30",
      "tags": [
        "美國",
        "核心",
        "中性"
      ],
      "summary": "核心 PCE 物價指數 將於 2026/10/29 20:30 公布，市場關注前值 3、預期 3.1。",
      "event": "美國 核心 PCE 物價指數，前值 3、預期 3.1、實際 3.1。",
      "ai": "目前 AI 判斷為中性觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar / Investing.com Economic Calendar / 鉅亨網全球經濟指標",
      "sourceUrl": "http://www.bea.gov/",
      "sourceList": [
        "TradingView Economic Calendar",
        "Investing.com Economic Calendar",
        "鉅亨網全球經濟指標"
      ]
    },
    {
      "id": "macro-pce-price-index-mom-sep-2026-20261029",
      "type": "macro",
      "title": "PCE 物價指數",
      "eventName": "PCE 物價指數",
      "originalEventName": "PCE Price Index MoM (Sep. 2026)",
      "sourcePublishTime": "2026/10/29 20:30 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/10/29 20:30",
      "previous": "0.3",
      "forecast": "0.5",
      "actual": "0.5",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "importance": "高",
      "timestamp": "2026/10/29 20:30",
      "tags": [
        "美國",
        "PCE",
        "中性"
      ],
      "summary": "PCE 物價指數 將於 2026/10/29 20:30 公布，市場關注前值 0.3、預期 0.5。",
      "event": "美國 PCE 物價指數，前值 0.3、預期 0.5、實際 0.5。",
      "ai": "目前 AI 判斷為中性觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar / 鉅亨網全球經濟指標",
      "sourceUrl": "http://www.bea.gov/",
      "sourceList": [
        "TradingView Economic Calendar",
        "鉅亨網全球經濟指標"
      ]
    },
    {
      "id": "macro-gdp-price-index-qoq-adv-q3-2026-20261029",
      "type": "macro",
      "title": "GDP 經濟成長率",
      "eventName": "GDP 經濟成長率",
      "originalEventName": "GDP Price Index QoQ Adv (Q3 2026)",
      "sourcePublishTime": "2026/10/29 20:30 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/10/29 20:30",
      "previous": "6.3",
      "forecast": "3.5",
      "actual": "2.2",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "importance": "高",
      "timestamp": "2026/10/29 20:30",
      "tags": [
        "美國",
        "GDP",
        "偏多"
      ],
      "summary": "GDP 經濟成長率 將於 2026/10/29 20:30 公布，市場關注前值 6.3、預期 3.5。",
      "event": "美國 GDP 經濟成長率，前值 6.3、預期 3.5、實際 2.2。",
      "ai": "目前 AI 判斷為偏多觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar / Investing.com Economic Calendar / 鉅亨網全球經濟指標",
      "sourceUrl": "http://www.bea.gov",
      "sourceList": [
        "TradingView Economic Calendar",
        "Investing.com Economic Calendar",
        "鉅亨網全球經濟指標"
      ]
    },
    {
      "id": "macro-jobless-claims-4-week-average-w-o-oct-19-2026-20261029",
      "type": "macro",
      "title": "初領失業救濟金人數",
      "eventName": "初領失業救濟金人數",
      "originalEventName": "Jobless Claims 4-week Average (w/o Oct. 19, 2026)",
      "sourcePublishTime": "2026/10/29 20:30 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/10/29 20:30",
      "previous": "198",
      "forecast": "199",
      "actual": "197",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響就業強弱、薪資通膨與聯準會政策預期。",
      "importance": "中高",
      "timestamp": "2026/10/29 20:30",
      "tags": [
        "美國",
        "初領失業救濟金人數",
        "中性"
      ],
      "summary": "初領失業救濟金人數 將於 2026/10/29 20:30 公布，市場關注前值 198、預期 —。",
      "event": "美國 初領失業救濟金人數，前值 198、預期 —、實際 197。",
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
      "id": "macro-ecb-interest-rate-decision-oct-2026-20261029",
      "type": "macro",
      "title": "ECB 利率決議",
      "eventName": "ECB 利率決議",
      "originalEventName": "ECB Interest Rate Decision (Oct. 2026)",
      "sourcePublishTime": "2026/10/29 21:15 Asia/Taipei",
      "country": "歐元區",
      "publishTime": "2026/10/29 21:15",
      "previous": "2.65",
      "forecast": "2.65",
      "actual": "2.65",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響全球資金成本、美元走勢與風險資產評價。",
      "importance": "中高",
      "timestamp": "2026/10/29 21:15",
      "tags": [
        "歐元區",
        "ECB",
        "中性"
      ],
      "summary": "ECB 利率決議 將於 2026/10/29 21:15 公布，市場關注前值 2.65、預期 2.65。",
      "event": "歐元區 ECB 利率決議，前值 2.65、預期 2.65、實際 2.65。",
      "ai": "目前 AI 判斷為中性觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響全球資金成本、美元走勢與風險資產評價。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "https://www.ecb.europa.eu",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    }
  ]
};
