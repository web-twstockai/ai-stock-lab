window.IntelligenceOverviewData = {
  "updatedAt": "2026/09/30 07:46",
  "status": "運作中",
  "cards": [
    {
      "label": "今日偵測情報",
      "value": 250,
      "unit": "筆",
      "icon": "file"
    },
    {
      "label": "高重要度訊號",
      "value": 55,
      "unit": "筆",
      "icon": "alert",
      "accent": "orange"
    },
    {
      "label": "追蹤標的",
      "value": 96,
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
          "96 筆"
        ],
        [
          "投信連買",
          "19 筆"
        ],
        [
          "三大法人同步買",
          "11 筆"
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
          "51 個"
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
      "id": "inst-3231-20260929",
      "type": "institutional",
      "title": "3231 緯創",
      "stockCode": "3231",
      "stockName": "緯創",
      "sector": "電腦及週邊設備",
      "group": "電腦及週邊設備",
      "institutionType": "自營商",
      "direction": "同步買超",
      "days": 3,
      "consecutiveBuyDays": 3,
      "streaks": {
        "外資": 2,
        "投信": 1,
        "自營商": 3
      },
      "latestNetBuy": 439,
      "buyVolume": 2678,
      "buyAmount": 0,
      "syncCount": 3,
      "importance": "高",
      "timestamp": "2026/09/29 18:20",
      "tags": [
        "自營商",
        "同步買超",
        "電腦及週邊設備",
        "3D技術",
        "3D感測"
      ],
      "summary": "自營商同步買超，近 10 個交易日正買合計 2,678 張，估算金額約 0.00 億元。",
      "event": "自營商連買 3 日，近 10 個交易日正買合計 2,678 張；最新日外資 8,080 張、投信 31 張、自營商 439 張。",
      "ai": "法人買盤集中在 電腦及週邊設備，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 38828.493,
      "yahooVerification": {
        "status": "matched",
        "source": "https://tw.stock.yahoo.com/quote/3231.TW/institutional-trading",
        "latestNetBuy": 439,
        "days": 3,
        "latestForeign": 8080,
        "latestTrust": 31,
        "latestDealer": 439
      }
    },
    {
      "id": "inst-1303-20260929",
      "type": "institutional",
      "title": "1303 南亞",
      "stockCode": "1303",
      "stockName": "南亞",
      "sector": "塑膠工業",
      "group": "塑膠工業",
      "institutionType": "自營商",
      "direction": "同步買超",
      "days": 3,
      "consecutiveBuyDays": 3,
      "streaks": {
        "外資": 2,
        "投信": 1,
        "自營商": 3
      },
      "latestNetBuy": 1793,
      "buyVolume": 4744,
      "buyAmount": 11.29,
      "syncCount": 3,
      "importance": "高",
      "timestamp": "2026/09/29 18:20",
      "tags": [
        "自營商",
        "同步買超",
        "塑膠工業",
        "APPLE概念",
        "越南設廠"
      ],
      "summary": "自營商同步買超，近 10 個交易日正買合計 4,744 張，估算金額約 11.29 億元。",
      "event": "自營商連買 3 日，近 10 個交易日正買合計 4,744 張；最新日外資 30,203 張、投信 1,825 張、自營商 1,793 張。",
      "ai": "法人買盤集中在 塑膠工業，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 89899.545,
      "yahooVerification": {
        "status": "matched",
        "source": "https://tw.stock.yahoo.com/quote/1303.TW/institutional-trading",
        "latestNetBuy": 1793,
        "days": 3,
        "latestForeign": 30203,
        "latestTrust": 1825,
        "latestDealer": 1793
      }
    },
    {
      "id": "inst-2303-20260929",
      "type": "institutional",
      "title": "2303 聯電",
      "stockCode": "2303",
      "stockName": "聯電",
      "sector": "半導體",
      "group": "半導體",
      "institutionType": "自營商",
      "direction": "連買",
      "days": 2,
      "consecutiveBuyDays": 2,
      "streaks": {
        "外資": 0,
        "投信": 1,
        "自營商": 2
      },
      "latestNetBuy": 1097,
      "buyVolume": 15400,
      "buyAmount": 23.72,
      "syncCount": 2,
      "importance": "高",
      "timestamp": "2026/09/29 18:20",
      "tags": [
        "自營商",
        "連買",
        "半導體",
        "手機",
        "車用電子相關"
      ],
      "summary": "自營商連買，近 10 個交易日正買合計 15,400 張，估算金額約 23.72 億元。",
      "event": "自營商連買 2 日，近 10 個交易日正買合計 15,400 張；最新日外資 -12,783 張、投信 9,537 張、自營商 1,097 張。",
      "ai": "法人買盤集中在 半導體，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 209919.506,
      "yahooVerification": {
        "status": "matched",
        "source": "https://tw.stock.yahoo.com/quote/2303.TW/institutional-trading",
        "latestNetBuy": 1097,
        "days": 2,
        "latestForeign": -12783,
        "latestTrust": 9537,
        "latestDealer": 1097
      }
    },
    {
      "id": "inst-2633-20260929",
      "type": "institutional",
      "title": "2633 台灣高鐵",
      "stockCode": "2633",
      "stockName": "台灣高鐵",
      "sector": "航運業",
      "group": "航運業",
      "institutionType": "投信",
      "direction": "連買",
      "days": 10,
      "consecutiveBuyDays": 10,
      "streaks": {
        "外資": 0,
        "投信": 10,
        "自營商": 1
      },
      "latestNetBuy": 80,
      "buyVolume": 6967,
      "buyAmount": 0,
      "syncCount": 2,
      "importance": "高",
      "timestamp": "2026/09/29 18:20",
      "tags": [
        "投信",
        "連買",
        "航運業",
        "五倍券",
        "官股企業"
      ],
      "summary": "投信連買，近 10 個交易日正買合計 6,967 張，估算金額約 0.00 億元。",
      "event": "投信連買 10 日，近 10 個交易日正買合計 6,967 張；最新日外資 -5,167 張、投信 80 張、自營商 5 張。",
      "ai": "法人買盤集中在 航運業，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 7313.475,
      "yahooVerification": {
        "status": "days-different",
        "source": "https://tw.stock.yahoo.com/quote/2633.TW/institutional-trading",
        "latestNetBuy": 80,
        "days": 20,
        "latestForeign": -5167,
        "latestTrust": 80,
        "latestDealer": 5
      }
    },
    {
      "id": "macro-interest-rate-projection-3rd-yr-20260917",
      "type": "macro",
      "title": "FOMC 利率決議",
      "eventName": "FOMC 利率決議",
      "originalEventName": "Interest Rate Projection - 3rd Yr",
      "sourcePublishTime": "2026/09/17 02:00 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/09/17 02:00",
      "previous": "3.1",
      "forecast": "4",
      "actual": "3.6",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響全球資金成本、美元走勢與風險資產評價。",
      "importance": "中高",
      "timestamp": "2026/09/17 02:00",
      "tags": [
        "美國",
        "FOMC",
        "中性"
      ],
      "summary": "FOMC 利率決議 將於 2026/09/17 02:00 公布，市場關注前值 3.1、預期 —。",
      "event": "美國 FOMC 利率決議，前值 3.1、預期 —、實際 3.6。",
      "ai": "目前 AI 判斷為中性觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響全球資金成本、美元走勢與風險資產評價。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "http://www.federalreserve.gov/",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    },
    {
      "id": "macro-ppi-output-mom-aug-20260916",
      "type": "macro",
      "title": "生產者物價指數 PPI",
      "eventName": "生產者物價指數 PPI",
      "originalEventName": "PPI Output MoM (Aug)",
      "sourcePublishTime": "2026/09/16 14:00 Asia/Taipei",
      "country": "英國",
      "publishTime": "2026/09/16 14:00",
      "previous": "0.4",
      "forecast": "0.3",
      "actual": "0.7",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/09/16 14:00",
      "tags": [
        "英國",
        "生產者物價指數",
        "偏多"
      ],
      "summary": "生產者物價指數 PPI 將於 2026/09/16 14:00 公布，市場關注前值 0.4、預期 0.3。",
      "event": "英國 生產者物價指數 PPI，前值 0.4、預期 0.3、實際 0.7。",
      "ai": "目前 AI 判斷為偏多觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響市場風險偏好與資金輪動。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar / 鉅亨網全球經濟指標",
      "sourceUrl": "http://www.ons.gov.uk/",
      "sourceList": [
        "TradingView Economic Calendar",
        "鉅亨網全球經濟指標"
      ]
    },
    {
      "id": "macro-core-inflation-rate-mom-aug-20260916",
      "type": "macro",
      "title": "核心通膨率",
      "eventName": "核心通膨率",
      "originalEventName": "Core Inflation Rate MoM (Aug)",
      "sourcePublishTime": "2026/09/16 14:00 Asia/Taipei",
      "country": "英國",
      "publishTime": "2026/09/16 14:00",
      "previous": "0.2",
      "forecast": "0.3",
      "actual": "0.3",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "importance": "中高",
      "timestamp": "2026/09/16 14:00",
      "tags": [
        "英國",
        "核心通膨率",
        "中性"
      ],
      "summary": "核心通膨率 將於 2026/09/16 14:00 公布，市場關注前值 0.2、預期 0.3。",
      "event": "英國 核心通膨率，前值 0.2、預期 0.3、實際 0.3。",
      "ai": "目前 AI 判斷為中性觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "http://www.ons.gov.uk/",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    },
    {
      "id": "macro-inflation-rate-mom-aug-20260916",
      "type": "macro",
      "title": "通膨率",
      "eventName": "通膨率",
      "originalEventName": "Inflation Rate MoM (Aug)",
      "sourcePublishTime": "2026/09/16 14:00 Asia/Taipei",
      "country": "英國",
      "publishTime": "2026/09/16 14:00",
      "previous": "0.3",
      "forecast": "0.5",
      "actual": "0.5",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "importance": "中高",
      "timestamp": "2026/09/16 14:00",
      "tags": [
        "英國",
        "通膨率",
        "中性"
      ],
      "summary": "通膨率 將於 2026/09/16 14:00 公布，市場關注前值 0.3、預期 0.5。",
      "event": "英國 通膨率，前值 0.3、預期 0.5、實際 0.5。",
      "ai": "目前 AI 判斷為中性觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "http://www.ons.gov.uk/",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    }
  ],
  "macroEvents": [
    {
      "id": "macro-ppi-output-mom-aug-20260916",
      "type": "macro",
      "title": "生產者物價指數 PPI",
      "eventName": "生產者物價指數 PPI",
      "originalEventName": "PPI Output MoM (Aug)",
      "sourcePublishTime": "2026/09/16 14:00 Asia/Taipei",
      "country": "英國",
      "publishTime": "2026/09/16 14:00",
      "previous": "0.4",
      "forecast": "0.3",
      "actual": "0.7",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/09/16 14:00",
      "tags": [
        "英國",
        "生產者物價指數",
        "偏多"
      ],
      "summary": "生產者物價指數 PPI 將於 2026/09/16 14:00 公布，市場關注前值 0.4、預期 0.3。",
      "event": "英國 生產者物價指數 PPI，前值 0.4、預期 0.3、實際 0.7。",
      "ai": "目前 AI 判斷為偏多觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響市場風險偏好與資金輪動。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar / 鉅亨網全球經濟指標",
      "sourceUrl": "http://www.ons.gov.uk/",
      "sourceList": [
        "TradingView Economic Calendar",
        "鉅亨網全球經濟指標"
      ]
    },
    {
      "id": "macro-core-inflation-rate-mom-aug-20260916",
      "type": "macro",
      "title": "核心通膨率",
      "eventName": "核心通膨率",
      "originalEventName": "Core Inflation Rate MoM (Aug)",
      "sourcePublishTime": "2026/09/16 14:00 Asia/Taipei",
      "country": "英國",
      "publishTime": "2026/09/16 14:00",
      "previous": "0.2",
      "forecast": "0.3",
      "actual": "0.3",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "importance": "中高",
      "timestamp": "2026/09/16 14:00",
      "tags": [
        "英國",
        "核心通膨率",
        "中性"
      ],
      "summary": "核心通膨率 將於 2026/09/16 14:00 公布，市場關注前值 0.2、預期 0.3。",
      "event": "英國 核心通膨率，前值 0.2、預期 0.3、實際 0.3。",
      "ai": "目前 AI 判斷為中性觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "http://www.ons.gov.uk/",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    },
    {
      "id": "macro-inflation-rate-mom-aug-20260916",
      "type": "macro",
      "title": "通膨率",
      "eventName": "通膨率",
      "originalEventName": "Inflation Rate MoM (Aug)",
      "sourcePublishTime": "2026/09/16 14:00 Asia/Taipei",
      "country": "英國",
      "publishTime": "2026/09/16 14:00",
      "previous": "0.3",
      "forecast": "0.5",
      "actual": "0.5",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "importance": "中高",
      "timestamp": "2026/09/16 14:00",
      "tags": [
        "英國",
        "通膨率",
        "中性"
      ],
      "summary": "通膨率 將於 2026/09/16 14:00 公布，市場關注前值 0.3、預期 0.5。",
      "event": "英國 通膨率，前值 0.3、預期 0.5、實際 0.5。",
      "ai": "目前 AI 判斷為中性觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "http://www.ons.gov.uk/",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    },
    {
      "id": "macro-interest-rate-projection-3rd-yr-20260917",
      "type": "macro",
      "title": "FOMC 利率決議",
      "eventName": "FOMC 利率決議",
      "originalEventName": "Interest Rate Projection - 3rd Yr",
      "sourcePublishTime": "2026/09/17 02:00 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/09/17 02:00",
      "previous": "3.1",
      "forecast": "4",
      "actual": "3.6",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響全球資金成本、美元走勢與風險資產評價。",
      "importance": "中高",
      "timestamp": "2026/09/17 02:00",
      "tags": [
        "美國",
        "FOMC",
        "中性"
      ],
      "summary": "FOMC 利率決議 將於 2026/09/17 02:00 公布，市場關注前值 3.1、預期 —。",
      "event": "美國 FOMC 利率決議，前值 3.1、預期 —、實際 3.6。",
      "ai": "目前 AI 判斷為中性觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響全球資金成本、美元走勢與風險資產評價。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "http://www.federalreserve.gov/",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    },
    {
      "id": "macro-cpi-final-aug-20260917",
      "type": "macro",
      "title": "消費者物價指數 CPI",
      "eventName": "消費者物價指數 CPI",
      "originalEventName": "CPI Final (Aug)",
      "sourcePublishTime": "2026/09/17 17:00 Asia/Taipei",
      "country": "歐元區",
      "publishTime": "2026/09/17 17:00",
      "previous": "103.24",
      "forecast": "103.7",
      "actual": "103.69",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "importance": "高",
      "timestamp": "2026/09/17 17:00",
      "tags": [
        "歐元區",
        "消費者物價指數",
        "偏多"
      ],
      "summary": "消費者物價指數 CPI 將於 2026/09/17 17:00 公布，市場關注前值 103.24、預期 103.7。",
      "event": "歐元區 消費者物價指數 CPI，前值 103.24、預期 103.7、實際 103.69。",
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
      "id": "macro-inflation-rate-mom-final-aug-20260917",
      "type": "macro",
      "title": "通膨率",
      "eventName": "通膨率",
      "originalEventName": "Inflation Rate MoM Final (Aug)",
      "sourcePublishTime": "2026/09/17 17:00 Asia/Taipei",
      "country": "歐元區",
      "publishTime": "2026/09/17 17:00",
      "previous": "0.2",
      "forecast": "0.4",
      "actual": "0.4",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "importance": "中高",
      "timestamp": "2026/09/17 17:00",
      "tags": [
        "歐元區",
        "通膨率",
        "中性"
      ],
      "summary": "通膨率 將於 2026/09/17 17:00 公布，市場關注前值 0.2、預期 0.4。",
      "event": "歐元區 通膨率，前值 0.2、預期 0.4、實際 0.4。",
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
      "id": "macro-core-inflation-rate-yoy-final-aug-20260917",
      "type": "macro",
      "title": "核心通膨率",
      "eventName": "核心通膨率",
      "originalEventName": "Core Inflation Rate YoY Final (Aug)",
      "sourcePublishTime": "2026/09/17 17:00 Asia/Taipei",
      "country": "歐元區",
      "publishTime": "2026/09/17 17:00",
      "previous": "2.5",
      "forecast": "2.4",
      "actual": "2.4",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "importance": "中高",
      "timestamp": "2026/09/17 17:00",
      "tags": [
        "歐元區",
        "核心通膨率",
        "中性"
      ],
      "summary": "核心通膨率 將於 2026/09/17 17:00 公布，市場關注前值 2.5、預期 2.4。",
      "event": "歐元區 核心通膨率，前值 2.5、預期 2.4、實際 2.4。",
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
      "id": "macro-boe-interest-rate-decision-20260917",
      "type": "macro",
      "title": "英國央行利率決議",
      "eventName": "英國央行利率決議",
      "originalEventName": "BoE Interest Rate Decision",
      "sourcePublishTime": "2026/09/17 19:00 Asia/Taipei",
      "country": "英國",
      "publishTime": "2026/09/17 19:00",
      "previous": "3.75",
      "forecast": "3.75",
      "actual": "3.75",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響全球資金成本、美元走勢與風險資產評價。",
      "importance": "中高",
      "timestamp": "2026/09/17 19:00",
      "tags": [
        "英國",
        "英國央行利率決議",
        "中性"
      ],
      "summary": "英國央行利率決議 將於 2026/09/17 19:00 公布，市場關注前值 3.75、預期 3.75。",
      "event": "英國 英國央行利率決議，前值 3.75、預期 3.75、實際 3.75。",
      "ai": "目前 AI 判斷為中性觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響全球資金成本、美元走勢與風險資產評價。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "https://www.bankofengland.co.uk",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    }
  ]
};
