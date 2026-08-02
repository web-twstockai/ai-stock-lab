window.IntelligenceOverviewData = {
  "updatedAt": "2026/08/02 12:27",
  "status": "運作中",
  "cards": [
    {
      "label": "今日偵測情報",
      "value": 264,
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
          "52 筆"
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
          "35 個"
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
      "id": "inst-2330-20260731",
      "type": "institutional",
      "title": "2330 台積電",
      "stockCode": "2330",
      "stockName": "台積電",
      "sector": "半導體",
      "group": "半導體",
      "institutionType": "自營商",
      "direction": "同步買超",
      "days": 7,
      "consecutiveBuyDays": 7,
      "streaks": {
        "外資": 1,
        "投信": 6,
        "自營商": 7
      },
      "latestNetBuy": 2725,
      "buyVolume": 20973,
      "buyAmount": 508.58,
      "syncCount": 3,
      "importance": "高",
      "timestamp": "2026/07/31 18:20",
      "tags": [
        "自營商",
        "同步買超",
        "半導體",
        "3D技術",
        "3D感測"
      ],
      "summary": "自營商同步買超，近 10 個交易日正買合計 20,973 張，估算金額約 508.58 億元。",
      "event": "自營商連買 7 日，近 10 個交易日正買合計 20,973 張；最新日外資 13,780 張、投信 7,064 張、自營商 2,725 張。",
      "ai": "法人買盤集中在 半導體，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 54369.488,
      "yahooVerification": {
        "status": "matched",
        "source": "https://tw.stock.yahoo.com/quote/2330.TW/institutional-trading",
        "latestNetBuy": 2725,
        "days": 7,
        "latestForeign": 13780,
        "latestTrust": 7064,
        "latestDealer": 2725
      }
    },
    {
      "id": "inst-2890-20260731",
      "type": "institutional",
      "title": "2890 永豐金",
      "stockCode": "2890",
      "stockName": "永豐金",
      "sector": "金融保險",
      "group": "金融保險",
      "institutionType": "投信",
      "direction": "同步買超",
      "days": 10,
      "consecutiveBuyDays": 10,
      "streaks": {
        "外資": 3,
        "投信": 10,
        "自營商": 5
      },
      "latestNetBuy": 2455,
      "buyVolume": 46986,
      "buyAmount": 0,
      "syncCount": 3,
      "importance": "高",
      "timestamp": "2026/07/31 18:20",
      "tags": [
        "投信",
        "同步買超",
        "金融保險",
        "電子商務及延伸",
        "金融業"
      ],
      "summary": "投信同步買超，近 10 個交易日正買合計 46,986 張，估算金額約 0.00 億元。",
      "event": "投信連買 10 日，近 10 個交易日正買合計 46,986 張；最新日外資 22,905 張、投信 2,455 張、自營商 503 張。",
      "ai": "法人買盤集中在 金融保險，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 114588.097,
      "yahooVerification": {
        "status": "days-different",
        "source": "https://tw.stock.yahoo.com/quote/2890.TW/institutional-trading",
        "latestNetBuy": 2455,
        "days": 11,
        "latestForeign": 22905,
        "latestTrust": 2455,
        "latestDealer": 503
      }
    },
    {
      "id": "inst-2382-20260731",
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
        "自營商": 2
      },
      "latestNetBuy": 840,
      "buyVolume": 9460,
      "buyAmount": 27.58,
      "syncCount": 2,
      "importance": "高",
      "timestamp": "2026/07/31 18:20",
      "tags": [
        "投信",
        "連買",
        "電腦及週邊設備",
        "5G",
        "APPLE概念"
      ],
      "summary": "投信連買，近 10 個交易日正買合計 9,460 張，估算金額約 27.58 億元。",
      "event": "投信連買 10 日，近 10 個交易日正買合計 9,460 張；最新日外資 -4,083 張、投信 840 張、自營商 131 張。",
      "ai": "法人買盤集中在 電腦及週邊設備，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 27823.133,
      "yahooVerification": {
        "status": "matched",
        "source": "https://tw.stock.yahoo.com/quote/2382.TW/institutional-trading",
        "latestNetBuy": 840,
        "days": 10,
        "latestForeign": -4083,
        "latestTrust": 840,
        "latestDealer": 131
      }
    },
    {
      "id": "inst-2610-20260731",
      "type": "institutional",
      "title": "2610 華航",
      "stockCode": "2610",
      "stockName": "華航",
      "sector": "航運業",
      "group": "航運業",
      "institutionType": "投信",
      "direction": "同步買超",
      "days": 10,
      "consecutiveBuyDays": 10,
      "streaks": {
        "外資": 6,
        "投信": 10,
        "自營商": 2
      },
      "latestNetBuy": 389,
      "buyVolume": 19185,
      "buyAmount": 0,
      "syncCount": 3,
      "importance": "高",
      "timestamp": "2026/07/31 18:20",
      "tags": [
        "投信",
        "同步買超",
        "航運業",
        "三通",
        "官股企業"
      ],
      "summary": "投信同步買超，近 10 個交易日正買合計 19,185 張，估算金額約 0.00 億元。",
      "event": "投信連買 10 日，近 10 個交易日正買合計 19,185 張；最新日外資 37,781 張、投信 389 張、自營商 1,952 張。",
      "ai": "法人買盤集中在 航運業，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 149343.72,
      "yahooVerification": {
        "status": "days-different",
        "source": "https://tw.stock.yahoo.com/quote/2610.TW/institutional-trading",
        "latestNetBuy": 389,
        "days": 11,
        "latestForeign": 37781,
        "latestTrust": 389,
        "latestDealer": 1952
      }
    },
    {
      "id": "macro-hmrc-payrolls-change-jun-20260721",
      "type": "macro",
      "title": "非農就業人數",
      "eventName": "非農就業人數",
      "originalEventName": "HMRC Payrolls Change (Jun)",
      "sourcePublishTime": "2026/07/21 14:00 Asia/Taipei",
      "country": "英國",
      "publishTime": "2026/07/21 14:00",
      "previous": "3",
      "forecast": "—",
      "actual": "-4",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響就業強弱、薪資通膨與聯準會政策預期。",
      "importance": "高",
      "timestamp": "2026/07/21 14:00",
      "tags": [
        "英國",
        "非農就業人數",
        "中性"
      ],
      "summary": "非農就業人數 將於 2026/07/21 14:00 公布，市場關注前值 3、預期 —。",
      "event": "英國 非農就業人數，前值 3、預期 —、實際 -4。",
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
      "id": "macro-unemployment-rate-may-20260721",
      "type": "macro",
      "title": "失業率",
      "eventName": "失業率",
      "originalEventName": "Unemployment Rate (May)",
      "sourcePublishTime": "2026/07/21 14:00 Asia/Taipei",
      "country": "英國",
      "publishTime": "2026/07/21 14:00",
      "previous": "4.9",
      "forecast": "5",
      "actual": "4.9",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏空",
      "impact": "影響全球資金成本、美元走勢與風險資產評價。",
      "importance": "中高",
      "timestamp": "2026/07/21 14:00",
      "tags": [
        "英國",
        "失業率",
        "偏空"
      ],
      "summary": "失業率 將於 2026/07/21 14:00 公布，市場關注前值 4.9、預期 5。",
      "event": "英國 失業率，前值 4.9、預期 5、實際 4.9。",
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
      "id": "macro-employment-change-may-20260721",
      "type": "macro",
      "title": "就業人數變化",
      "eventName": "就業人數變化",
      "originalEventName": "Employment Change (May)",
      "sourcePublishTime": "2026/07/21 14:00 Asia/Taipei",
      "country": "英國",
      "publishTime": "2026/07/21 14:00",
      "previous": "99",
      "forecast": "85",
      "actual": "147",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/07/21 14:00",
      "tags": [
        "英國",
        "就業人數變化",
        "偏多"
      ],
      "summary": "就業人數變化 將於 2026/07/21 14:00 公布，市場關注前值 99、預期 85。",
      "event": "英國 就業人數變化，前值 99、預期 85、實際 147。",
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
  ],
  "macroEvents": [
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
    },
    {
      "id": "macro-unemployment-rate-may-20260721",
      "type": "macro",
      "title": "失業率",
      "eventName": "失業率",
      "originalEventName": "Unemployment Rate (May)",
      "sourcePublishTime": "2026/07/21 14:00 Asia/Taipei",
      "country": "英國",
      "publishTime": "2026/07/21 14:00",
      "previous": "4.9",
      "forecast": "5",
      "actual": "4.9",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏空",
      "impact": "影響全球資金成本、美元走勢與風險資產評價。",
      "importance": "中高",
      "timestamp": "2026/07/21 14:00",
      "tags": [
        "英國",
        "失業率",
        "偏空"
      ],
      "summary": "失業率 將於 2026/07/21 14:00 公布，市場關注前值 4.9、預期 5。",
      "event": "英國 失業率，前值 4.9、預期 5、實際 4.9。",
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
      "id": "macro-hmrc-payrolls-change-jun-20260721",
      "type": "macro",
      "title": "非農就業人數",
      "eventName": "非農就業人數",
      "originalEventName": "HMRC Payrolls Change (Jun)",
      "sourcePublishTime": "2026/07/21 14:00 Asia/Taipei",
      "country": "英國",
      "publishTime": "2026/07/21 14:00",
      "previous": "3",
      "forecast": "—",
      "actual": "-4",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響就業強弱、薪資通膨與聯準會政策預期。",
      "importance": "高",
      "timestamp": "2026/07/21 14:00",
      "tags": [
        "英國",
        "非農就業人數",
        "中性"
      ],
      "summary": "非農就業人數 將於 2026/07/21 14:00 公布，市場關注前值 3、預期 —。",
      "event": "英國 非農就業人數，前值 3、預期 —、實際 -4。",
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
      "id": "macro-employment-change-may-20260721",
      "type": "macro",
      "title": "就業人數變化",
      "eventName": "就業人數變化",
      "originalEventName": "Employment Change (May)",
      "sourcePublishTime": "2026/07/21 14:00 Asia/Taipei",
      "country": "英國",
      "publishTime": "2026/07/21 14:00",
      "previous": "99",
      "forecast": "85",
      "actual": "147",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/07/21 14:00",
      "tags": [
        "英國",
        "就業人數變化",
        "偏多"
      ],
      "summary": "就業人數變化 將於 2026/07/21 14:00 公布，市場關注前值 99、預期 85。",
      "event": "英國 就業人數變化，前值 99、預期 85、實際 147。",
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
      "id": "macro-ecb-bank-lending-survey-20260721",
      "type": "macro",
      "title": "ECB Bank Lending Survey",
      "eventName": "ECB Bank Lending Survey",
      "originalEventName": "ECB Bank Lending Survey",
      "sourcePublishTime": "2026/07/21 16:00 Asia/Taipei",
      "country": "歐元區",
      "publishTime": "2026/07/21 16:00",
      "previous": "—",
      "forecast": "—",
      "actual": null,
      "status": "等待公布",
      "statusLevel": "upcoming",
      "direction": "中性",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/07/21 16:00",
      "tags": [
        "歐元區",
        "ECB",
        "中性"
      ],
      "summary": "ECB Bank Lending Survey 將於 2026/07/21 16:00 公布，市場關注前值 —、預期 —。",
      "event": "歐元區 ECB Bank Lending Survey，前值 —、預期 —、實際 尚未公布。",
      "ai": "目前 AI 判斷為中性觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響市場風險偏好與資金輪動。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "https://www.ecb.europa.eu",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    },
    {
      "id": "macro-adp-employment-change-weekly-20260721",
      "type": "macro",
      "title": "ADP 就業人數",
      "eventName": "ADP 就業人數",
      "originalEventName": "ADP Employment Change Weekly",
      "sourcePublishTime": "2026/07/21 20:15 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/07/21 20:15",
      "previous": "19.25",
      "forecast": "—",
      "actual": "16.5",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/07/21 20:15",
      "tags": [
        "美國",
        "ADP",
        "中性"
      ],
      "summary": "ADP 就業人數 將於 2026/07/21 20:15 公布，市場關注前值 19.25、預期 —。",
      "event": "美國 ADP 就業人數，前值 19.25、預期 —、實際 16.5。",
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
      "id": "macro-ppi-core-output-mom-jun-20260722",
      "type": "macro",
      "title": "生產者物價指數 PPI",
      "eventName": "生產者物價指數 PPI",
      "originalEventName": "PPI Core Output MoM (Jun)",
      "sourcePublishTime": "2026/07/22 14:00 Asia/Taipei",
      "country": "英國",
      "publishTime": "2026/07/22 14:00",
      "previous": "0.7",
      "forecast": "0.2",
      "actual": "0.5",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/07/22 14:00",
      "tags": [
        "英國",
        "生產者物價指數",
        "中性"
      ],
      "summary": "生產者物價指數 PPI 將於 2026/07/22 14:00 公布，市場關注前值 0.7、預期 —。",
      "event": "英國 生產者物價指數 PPI，前值 0.7、預期 —、實際 0.5。",
      "ai": "目前 AI 判斷為中性觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響市場風險偏好與資金輪動。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar / 鉅亨網全球經濟指標",
      "sourceUrl": "https://www.ons.gov.uk/",
      "sourceList": [
        "TradingView Economic Calendar",
        "鉅亨網全球經濟指標"
      ]
    },
    {
      "id": "macro-core-inflation-rate-mom-jun-20260722",
      "type": "macro",
      "title": "核心通膨率",
      "eventName": "核心通膨率",
      "originalEventName": "Core Inflation Rate MoM (Jun)",
      "sourcePublishTime": "2026/07/22 14:00 Asia/Taipei",
      "country": "英國",
      "publishTime": "2026/07/22 14:00",
      "previous": "0.3",
      "forecast": "2.5",
      "actual": "0.3",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "importance": "中高",
      "timestamp": "2026/07/22 14:00",
      "tags": [
        "英國",
        "核心通膨率",
        "中性"
      ],
      "summary": "核心通膨率 將於 2026/07/22 14:00 公布，市場關注前值 0.3、預期 —。",
      "event": "英國 核心通膨率，前值 0.3、預期 —、實際 0.3。",
      "ai": "目前 AI 判斷為中性觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
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
