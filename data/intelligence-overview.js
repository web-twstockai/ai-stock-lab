window.IntelligenceOverviewData = {
  "updatedAt": "2026/11/02 07:46",
  "status": "運作中",
  "cards": [
    {
      "label": "今日偵測情報",
      "value": 299,
      "unit": "筆",
      "icon": "file"
    },
    {
      "label": "高重要度訊號",
      "value": 96,
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
          "36 筆"
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
          "50 個"
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
      "id": "inst-2330-20261030",
      "type": "institutional",
      "title": "2330 台積電",
      "stockCode": "2330",
      "stockName": "台積電",
      "sector": "半導體",
      "group": "半導體",
      "institutionType": "投信",
      "direction": "連買",
      "days": 10,
      "consecutiveBuyDays": 10,
      "streaks": {
        "外資": 0,
        "投信": 10,
        "自營商": 1
      },
      "latestNetBuy": 1855,
      "buyVolume": 17169,
      "buyAmount": 406.91,
      "syncCount": 2,
      "importance": "高",
      "timestamp": "2026/10/30 18:20",
      "tags": [
        "投信",
        "連買",
        "半導體",
        "3D技術",
        "3D感測"
      ],
      "summary": "投信連買，近 10 個交易日正買合計 17,169 張，估算金額約 406.91 億元。",
      "event": "投信連買 10 日，近 10 個交易日正買合計 17,169 張；最新日外資 -8,633 張、投信 1,855 張、自營商 922 張。",
      "ai": "法人買盤集中在 半導體，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 30217.994,
      "yahooVerification": {
        "status": "days-different",
        "source": "https://tw.stock.yahoo.com/quote/2330.TW/institutional-trading",
        "latestNetBuy": 1855,
        "days": 21,
        "latestForeign": -8633,
        "latestTrust": 1855,
        "latestDealer": 922
      }
    },
    {
      "id": "inst-2492-20261030",
      "type": "institutional",
      "title": "2492 華新科",
      "stockCode": "2492",
      "stockName": "華新科",
      "sector": "電子零組件",
      "group": "電子零組件",
      "institutionType": "投信",
      "direction": "連買",
      "days": 7,
      "consecutiveBuyDays": 7,
      "streaks": {
        "外資": 0,
        "投信": 7,
        "自營商": 0
      },
      "latestNetBuy": 11,
      "buyVolume": 12510,
      "buyAmount": 0,
      "syncCount": 1,
      "importance": "高",
      "timestamp": "2026/10/30 18:20",
      "tags": [
        "投信",
        "連買",
        "電子零組件",
        "AppleCar",
        "S&P 台商收成指數"
      ],
      "summary": "投信連買，近 10 個交易日正買合計 12,510 張，估算金額約 0.00 億元。",
      "event": "投信連買 7 日，近 10 個交易日正買合計 12,510 張；最新日外資 -9,229 張、投信 11 張、自營商 -1,254 張。",
      "ai": "法人買盤集中在 電子零組件，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 21985.285,
      "yahooVerification": {
        "status": "matched",
        "source": "https://tw.stock.yahoo.com/quote/2492.TW/institutional-trading",
        "latestNetBuy": 11,
        "days": 7,
        "latestForeign": -9229,
        "latestTrust": 11,
        "latestDealer": -1254
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
      "id": "macro-hmrc-payrolls-change-sep-20261020",
      "type": "macro",
      "title": "非農就業人數",
      "eventName": "非農就業人數",
      "originalEventName": "HMRC Payrolls Change (Sep)",
      "sourcePublishTime": "2026/10/20 14:00 Asia/Taipei",
      "country": "英國",
      "publishTime": "2026/10/20 14:00",
      "previous": "1",
      "forecast": "—",
      "actual": "13",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響就業強弱、薪資通膨與聯準會政策預期。",
      "importance": "高",
      "timestamp": "2026/10/20 14:00",
      "tags": [
        "英國",
        "非農就業人數",
        "中性"
      ],
      "summary": "非農就業人數 將於 2026/10/20 14:00 公布，市場關注前值 1、預期 —。",
      "event": "英國 非農就業人數，前值 1、預期 —、實際 13。",
      "ai": "目前 AI 判斷為中性觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響就業強弱、薪資通膨與聯準會政策預期。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "http://www.ons.gov.uk/",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    },
    {
      "id": "macro-employment-change-aug-20261020",
      "type": "macro",
      "title": "就業人數變化",
      "eventName": "就業人數變化",
      "originalEventName": "Employment Change (Aug)",
      "sourcePublishTime": "2026/10/20 14:00 Asia/Taipei",
      "country": "英國",
      "publishTime": "2026/10/20 14:00",
      "previous": "67",
      "forecast": "20",
      "actual": "102",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/10/20 14:00",
      "tags": [
        "英國",
        "就業人數變化",
        "偏多"
      ],
      "summary": "就業人數變化 將於 2026/10/20 14:00 公布，市場關注前值 67、預期 20。",
      "event": "英國 就業人數變化，前值 67、預期 20、實際 102。",
      "ai": "目前 AI 判斷為偏多觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響市場風險偏好與資金輪動。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "http://www.ons.gov.uk/",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    },
    {
      "id": "macro-unemployment-rate-aug-20261020",
      "type": "macro",
      "title": "失業率",
      "eventName": "失業率",
      "originalEventName": "Unemployment Rate (Aug)",
      "sourcePublishTime": "2026/10/20 14:00 Asia/Taipei",
      "country": "英國",
      "publishTime": "2026/10/20 14:00",
      "previous": "4.9",
      "forecast": "4.9",
      "actual": "4.7",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏空",
      "impact": "影響全球資金成本、美元走勢與風險資產評價。",
      "importance": "中高",
      "timestamp": "2026/10/20 14:00",
      "tags": [
        "英國",
        "失業率",
        "偏空"
      ],
      "summary": "失業率 將於 2026/10/20 14:00 公布，市場關注前值 4.9、預期 4.9。",
      "event": "英國 失業率，前值 4.9、預期 4.9、實際 4.7。",
      "ai": "目前 AI 判斷為偏空觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響全球資金成本、美元走勢與風險資產評價。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "http://www.ons.gov.uk/",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    },
    {
      "id": "macro-ppi-yoy-sep-20261020",
      "type": "macro",
      "title": "生產者物價指數 PPI",
      "eventName": "生產者物價指數 PPI",
      "originalEventName": "PPI YoY (Sep)",
      "sourcePublishTime": "2026/10/20 14:00 Asia/Taipei",
      "country": "德國",
      "publishTime": "2026/10/20 14:00",
      "previous": "4.6",
      "forecast": "0.8",
      "actual": "6.7",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/10/20 14:00",
      "tags": [
        "德國",
        "生產者物價指數",
        "中性"
      ],
      "summary": "生產者物價指數 PPI 將於 2026/10/20 14:00 公布，市場關注前值 4.6、預期 —。",
      "event": "德國 生產者物價指數 PPI，前值 4.6、預期 —、實際 6.7。",
      "ai": "目前 AI 判斷為中性觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響市場風險偏好與資金輪動。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar / 鉅亨網全球經濟指標",
      "sourceUrl": "https://www.destatis.de",
      "sourceList": [
        "TradingView Economic Calendar",
        "鉅亨網全球經濟指標"
      ]
    }
  ],
  "macroEvents": [
    {
      "id": "macro-hmrc-payrolls-change-sep-20261020",
      "type": "macro",
      "title": "非農就業人數",
      "eventName": "非農就業人數",
      "originalEventName": "HMRC Payrolls Change (Sep)",
      "sourcePublishTime": "2026/10/20 14:00 Asia/Taipei",
      "country": "英國",
      "publishTime": "2026/10/20 14:00",
      "previous": "1",
      "forecast": "—",
      "actual": "13",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響就業強弱、薪資通膨與聯準會政策預期。",
      "importance": "高",
      "timestamp": "2026/10/20 14:00",
      "tags": [
        "英國",
        "非農就業人數",
        "中性"
      ],
      "summary": "非農就業人數 將於 2026/10/20 14:00 公布，市場關注前值 1、預期 —。",
      "event": "英國 非農就業人數，前值 1、預期 —、實際 13。",
      "ai": "目前 AI 判斷為中性觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響就業強弱、薪資通膨與聯準會政策預期。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "http://www.ons.gov.uk/",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    },
    {
      "id": "macro-employment-change-aug-20261020",
      "type": "macro",
      "title": "就業人數變化",
      "eventName": "就業人數變化",
      "originalEventName": "Employment Change (Aug)",
      "sourcePublishTime": "2026/10/20 14:00 Asia/Taipei",
      "country": "英國",
      "publishTime": "2026/10/20 14:00",
      "previous": "67",
      "forecast": "20",
      "actual": "102",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/10/20 14:00",
      "tags": [
        "英國",
        "就業人數變化",
        "偏多"
      ],
      "summary": "就業人數變化 將於 2026/10/20 14:00 公布，市場關注前值 67、預期 20。",
      "event": "英國 就業人數變化，前值 67、預期 20、實際 102。",
      "ai": "目前 AI 判斷為偏多觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響市場風險偏好與資金輪動。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "http://www.ons.gov.uk/",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    },
    {
      "id": "macro-unemployment-rate-aug-20261020",
      "type": "macro",
      "title": "失業率",
      "eventName": "失業率",
      "originalEventName": "Unemployment Rate (Aug)",
      "sourcePublishTime": "2026/10/20 14:00 Asia/Taipei",
      "country": "英國",
      "publishTime": "2026/10/20 14:00",
      "previous": "4.9",
      "forecast": "4.9",
      "actual": "4.7",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏空",
      "impact": "影響全球資金成本、美元走勢與風險資產評價。",
      "importance": "中高",
      "timestamp": "2026/10/20 14:00",
      "tags": [
        "英國",
        "失業率",
        "偏空"
      ],
      "summary": "失業率 將於 2026/10/20 14:00 公布，市場關注前值 4.9、預期 4.9。",
      "event": "英國 失業率，前值 4.9、預期 4.9、實際 4.7。",
      "ai": "目前 AI 判斷為偏空觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響全球資金成本、美元走勢與風險資產評價。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "http://www.ons.gov.uk/",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    },
    {
      "id": "macro-ppi-yoy-sep-20261020",
      "type": "macro",
      "title": "生產者物價指數 PPI",
      "eventName": "生產者物價指數 PPI",
      "originalEventName": "PPI YoY (Sep)",
      "sourcePublishTime": "2026/10/20 14:00 Asia/Taipei",
      "country": "德國",
      "publishTime": "2026/10/20 14:00",
      "previous": "4.6",
      "forecast": "0.8",
      "actual": "6.7",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/10/20 14:00",
      "tags": [
        "德國",
        "生產者物價指數",
        "中性"
      ],
      "summary": "生產者物價指數 PPI 將於 2026/10/20 14:00 公布，市場關注前值 4.6、預期 —。",
      "event": "德國 生產者物價指數 PPI，前值 4.6、預期 —、實際 6.7。",
      "ai": "目前 AI 判斷為中性觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響市場風險偏好與資金輪動。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar / 鉅亨網全球經濟指標",
      "sourceUrl": "https://www.destatis.de",
      "sourceList": [
        "TradingView Economic Calendar",
        "鉅亨網全球經濟指標"
      ]
    },
    {
      "id": "macro-adp-employment-change-weekly-20261020",
      "type": "macro",
      "title": "ADP 就業人數",
      "eventName": "ADP 就業人數",
      "originalEventName": "ADP Employment Change Weekly",
      "sourcePublishTime": "2026/10/20 20:15 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/10/20 20:15",
      "previous": "24.75",
      "forecast": "—",
      "actual": "18.5",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/10/20 20:15",
      "tags": [
        "美國",
        "ADP",
        "中性"
      ],
      "summary": "ADP 就業人數 將於 2026/10/20 20:15 公布，市場關注前值 24.75、預期 —。",
      "event": "美國 ADP 就業人數，前值 24.75、預期 —、實際 18.5。",
      "ai": "目前 AI 判斷為中性觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響市場風險偏好與資金輪動。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar / 鉅亨網全球經濟指標",
      "sourceUrl": "https://adpemploymentreport.com/",
      "sourceList": [
        "TradingView Economic Calendar",
        "鉅亨網全球經濟指標"
      ]
    },
    {
      "id": "macro-atlanta-fed-gdpnow-q3-20261020",
      "type": "macro",
      "title": "GDP 經濟成長率",
      "eventName": "GDP 經濟成長率",
      "originalEventName": "Atlanta Fed GDPNow (Q3)",
      "sourcePublishTime": "2026/10/20 23:00 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/10/20 23:00",
      "previous": "3.6",
      "forecast": "—",
      "actual": "3.5",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響全球資金成本、美元走勢與風險資產評價。",
      "importance": "高",
      "timestamp": "2026/10/20 23:00",
      "tags": [
        "美國",
        "GDP",
        "中性"
      ],
      "summary": "GDP 經濟成長率 將於 2026/10/20 23:00 公布，市場關注前值 3.6、預期 —。",
      "event": "美國 GDP 經濟成長率，前值 3.6、預期 —、實際 3.5。",
      "ai": "目前 AI 判斷為中性觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響全球資金成本、美元走勢與風險資產評價。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar / 鉅亨網全球經濟指標",
      "sourceUrl": "https://www.atlantafed.org/",
      "sourceList": [
        "TradingView Economic Calendar",
        "鉅亨網全球經濟指標"
      ]
    },
    {
      "id": "macro-core-inflation-rate-yoy-sep-20261021",
      "type": "macro",
      "title": "核心通膨率",
      "eventName": "核心通膨率",
      "originalEventName": "Core Inflation Rate YoY (Sep)",
      "sourcePublishTime": "2026/10/21 14:00 Asia/Taipei",
      "country": "英國",
      "publishTime": "2026/10/21 14:00",
      "previous": "2.6",
      "forecast": "2.7",
      "actual": "2.8",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏空",
      "impact": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "importance": "中高",
      "timestamp": "2026/10/21 14:00",
      "tags": [
        "英國",
        "核心通膨率",
        "偏空"
      ],
      "summary": "核心通膨率 將於 2026/10/21 14:00 公布，市場關注前值 2.6、預期 2.7。",
      "event": "英國 核心通膨率，前值 2.6、預期 2.7、實際 2.8。",
      "ai": "目前 AI 判斷為偏空觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "http://www.ons.gov.uk/",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    },
    {
      "id": "macro-inflation-rate-yoy-sep-20261021",
      "type": "macro",
      "title": "通膨率",
      "eventName": "通膨率",
      "originalEventName": "Inflation Rate YoY (Sep)",
      "sourcePublishTime": "2026/10/21 14:00 Asia/Taipei",
      "country": "英國",
      "publishTime": "2026/10/21 14:00",
      "previous": "3.1",
      "forecast": "3.4",
      "actual": "3.5",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏空",
      "impact": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "importance": "中高",
      "timestamp": "2026/10/21 14:00",
      "tags": [
        "英國",
        "通膨率",
        "偏空"
      ],
      "summary": "通膨率 將於 2026/10/21 14:00 公布，市場關注前值 3.1、預期 3.4。",
      "event": "英國 通膨率，前值 3.1、預期 3.4、實際 3.5。",
      "ai": "目前 AI 判斷為偏空觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "http://www.ons.gov.uk/",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    }
  ]
};
