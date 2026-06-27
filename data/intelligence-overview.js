window.IntelligenceOverviewData = {
  "updatedAt": "2026/06/26 18:30",
  "status": "運作中",
  "cards": [
    {
      "label": "今日偵測情報",
      "value": 239,
      "unit": "筆",
      "icon": "file"
    },
    {
      "label": "高重要度訊號",
      "value": 68,
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
      "value": "ECB Survey of Monetary Analysts",
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
          "48 筆"
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
          "40 個"
        ],
        [
          "下一事件",
          "ECB Survey of Monetary Analysts"
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
      "id": "inst-2330-20260626",
      "type": "institutional",
      "title": "2330 台積電",
      "stockCode": "2330",
      "stockName": "台積電",
      "sector": "半導體",
      "group": "半導體",
      "institutionType": "投信",
      "direction": "連買",
      "days": 4,
      "consecutiveBuyDays": 4,
      "streaks": {
        "外資": 0,
        "投信": 4,
        "自營商": 1
      },
      "latestNetBuy": 734,
      "buyVolume": 5670,
      "buyAmount": 132.68,
      "syncCount": 2,
      "importance": "高",
      "timestamp": "2026/06/26 18:20",
      "tags": [
        "投信",
        "連買",
        "半導體",
        "3D技術",
        "3D感測"
      ],
      "summary": "投信連買，近 10 個交易日正買合計 5,670 張，估算金額約 132.68 億元。",
      "event": "投信連買 4 日，近 10 個交易日正買合計 5,670 張；最新日外資 -14,281 張、投信 734 張、自營商 1,009 張。",
      "ai": "法人買盤集中在 半導體，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 46586.237,
      "yahooVerification": {
        "status": "matched",
        "source": "https://tw.stock.yahoo.com/quote/2330.TW/institutional-trading",
        "latestNetBuy": 734,
        "days": 4,
        "latestForeign": -14281,
        "latestTrust": 734,
        "latestDealer": 1009
      }
    },
    {
      "id": "inst-2382-20260626",
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
        "自營商": 1
      },
      "latestNetBuy": 2613,
      "buyVolume": 23133,
      "buyAmount": 83.74,
      "syncCount": 2,
      "importance": "高",
      "timestamp": "2026/06/26 18:20",
      "tags": [
        "投信",
        "連買",
        "電腦及週邊設備",
        "5G",
        "APPLE概念"
      ],
      "summary": "投信連買，近 10 個交易日正買合計 23,133 張，估算金額約 83.74 億元。",
      "event": "投信連買 10 日，近 10 個交易日正買合計 23,133 張；最新日外資 -1,216 張、投信 2,613 張、自營商 199 張。",
      "ai": "法人買盤集中在 電腦及週邊設備，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 29928.093,
      "yahooVerification": {
        "status": "days-different",
        "source": "https://tw.stock.yahoo.com/quote/2382.TW/institutional-trading",
        "latestNetBuy": 2613,
        "days": 26,
        "latestForeign": -1216,
        "latestTrust": 2613,
        "latestDealer": 199
      }
    },
    {
      "id": "inst-2344-20260626",
      "type": "institutional",
      "title": "2344 華邦電",
      "stockCode": "2344",
      "stockName": "華邦電",
      "sector": "半導體",
      "group": "半導體",
      "institutionType": "投信",
      "direction": "連買",
      "days": 10,
      "consecutiveBuyDays": 10,
      "streaks": {
        "外資": 0,
        "投信": 10,
        "自營商": 0
      },
      "latestNetBuy": 8023,
      "buyVolume": 191805,
      "buyAmount": 0,
      "syncCount": 1,
      "importance": "高",
      "timestamp": "2026/06/26 18:20",
      "tags": [
        "投信",
        "連買",
        "半導體",
        "ADAS供應鏈",
        "Windows11"
      ],
      "summary": "投信連買，近 10 個交易日正買合計 191,805 張，估算金額約 0.00 億元。",
      "event": "投信連買 10 日，近 10 個交易日正買合計 191,805 張；最新日外資 -18,446 張、投信 8,023 張、自營商 -993 張。",
      "ai": "法人買盤集中在 半導體，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 285098.803,
      "yahooVerification": {
        "status": "days-different",
        "source": "https://tw.stock.yahoo.com/quote/2344.TW/institutional-trading",
        "latestNetBuy": 8023,
        "days": 13,
        "latestForeign": -18446,
        "latestTrust": 8023,
        "latestDealer": -993
      }
    },
    {
      "id": "inst-2884-20260626",
      "type": "institutional",
      "title": "2884 玉山金",
      "stockCode": "2884",
      "stockName": "玉山金",
      "sector": "金融保險",
      "group": "金融保險",
      "institutionType": "投信",
      "direction": "連買",
      "days": 8,
      "consecutiveBuyDays": 8,
      "streaks": {
        "外資": 0,
        "投信": 8,
        "自營商": 1
      },
      "latestNetBuy": 3718,
      "buyVolume": 83650,
      "buyAmount": 0,
      "syncCount": 2,
      "importance": "高",
      "timestamp": "2026/06/26 18:20",
      "tags": [
        "投信",
        "連買",
        "金融保險",
        "電子商務及延伸",
        "金融業"
      ],
      "summary": "投信連買，近 10 個交易日正買合計 83,650 張，估算金額約 0.00 億元。",
      "event": "投信連買 8 日，近 10 個交易日正買合計 83,650 張；最新日外資 -17,609 張、投信 3,718 張、自營商 1,863 張。",
      "ai": "法人買盤集中在 金融保險，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 145755.302,
      "yahooVerification": {
        "status": "matched",
        "source": "https://tw.stock.yahoo.com/quote/2884.TW/institutional-trading",
        "latestNetBuy": 3718,
        "days": 8,
        "latestForeign": -17609,
        "latestTrust": 3718,
        "latestDealer": 1863
      }
    },
    {
      "id": "macro-gdp-3-month-avg-apr-20260612",
      "type": "macro",
      "title": "GDP 經濟成長率",
      "eventName": "GDP 經濟成長率",
      "originalEventName": "GDP 3-Month Avg (Apr)",
      "sourcePublishTime": "2026/06/12 14:00 Asia/Taipei",
      "country": "英國",
      "publishTime": "2026/06/12 14:00",
      "previous": "0.6",
      "forecast": "0.7",
      "actual": "0.7",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響景氣循環、原物料、工業與科技需求預期。",
      "importance": "高",
      "timestamp": "2026/06/12 14:00",
      "tags": [
        "英國",
        "GDP",
        "中性"
      ],
      "summary": "GDP 經濟成長率 將於 2026/06/12 14:00 公布，市場關注前值 0.6、預期 0.7。",
      "event": "英國 GDP 經濟成長率，前值 0.6、預期 0.7、實際 0.7。",
      "ai": "目前 AI 判斷為中性觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
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
      "id": "macro-initial-jobless-claims-jun-06-20260611",
      "type": "macro",
      "title": "初領失業救濟金人數",
      "eventName": "初領失業救濟金人數",
      "originalEventName": "Initial Jobless Claims (Jun/06)",
      "sourcePublishTime": "2026/06/11 20:30 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/06/11 20:30",
      "previous": "225",
      "forecast": "219",
      "actual": "229",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響就業強弱、薪資通膨與聯準會政策預期。",
      "importance": "中高",
      "timestamp": "2026/06/11 20:30",
      "tags": [
        "美國",
        "初領失業救濟金人數",
        "偏多"
      ],
      "summary": "初領失業救濟金人數 將於 2026/06/11 20:30 公布，市場關注前值 225、預期 219。",
      "event": "美國 初領失業救濟金人數，前值 225、預期 219、實際 229。",
      "ai": "目前 AI 判斷為偏多觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響就業強弱、薪資通膨與聯準會政策預期。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "https://www.dol.gov/",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    },
    {
      "id": "macro-core-ppi-mom-may-20260611",
      "type": "macro",
      "title": "生產者物價指數 PPI",
      "eventName": "生產者物價指數 PPI",
      "originalEventName": "Core PPI MoM (May)",
      "sourcePublishTime": "2026/06/11 20:30 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/06/11 20:30",
      "previous": "0.7",
      "forecast": "0.5",
      "actual": "0.4",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏空",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/06/11 20:30",
      "tags": [
        "美國",
        "生產者物價指數",
        "偏空"
      ],
      "summary": "生產者物價指數 PPI 將於 2026/06/11 20:30 公布，市場關注前值 0.7、預期 0.5。",
      "event": "美國 生產者物價指數 PPI，前值 0.7、預期 0.5、實際 0.4。",
      "ai": "目前 AI 判斷為偏空觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
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
      "id": "macro-ecb-interest-rate-decision-20260611",
      "type": "macro",
      "title": "ECB 利率決議",
      "eventName": "ECB 利率決議",
      "originalEventName": "ECB Interest Rate Decision",
      "sourcePublishTime": "2026/06/11 20:15 Asia/Taipei",
      "country": "歐元區",
      "publishTime": "2026/06/11 20:15",
      "previous": "2.15",
      "forecast": "2.4",
      "actual": "2.4",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響全球資金成本、美元走勢與風險資產評價。",
      "importance": "中高",
      "timestamp": "2026/06/11 20:15",
      "tags": [
        "歐元區",
        "ECB",
        "中性"
      ],
      "summary": "ECB 利率決議 將於 2026/06/11 20:15 公布，市場關注前值 2.15、預期 2.4。",
      "event": "歐元區 ECB 利率決議，前值 2.15、預期 2.4、實際 2.4。",
      "ai": "目前 AI 判斷為中性觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響全球資金成本、美元走勢與風險資產評價。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "https://www.ecb.europa.eu",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    }
  ],
  "macroEvents": [
    {
      "id": "macro-ecb-interest-rate-decision-20260611",
      "type": "macro",
      "title": "ECB 利率決議",
      "eventName": "ECB 利率決議",
      "originalEventName": "ECB Interest Rate Decision",
      "sourcePublishTime": "2026/06/11 20:15 Asia/Taipei",
      "country": "歐元區",
      "publishTime": "2026/06/11 20:15",
      "previous": "2.15",
      "forecast": "2.4",
      "actual": "2.4",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響全球資金成本、美元走勢與風險資產評價。",
      "importance": "中高",
      "timestamp": "2026/06/11 20:15",
      "tags": [
        "歐元區",
        "ECB",
        "中性"
      ],
      "summary": "ECB 利率決議 將於 2026/06/11 20:15 公布，市場關注前值 2.15、預期 2.4。",
      "event": "歐元區 ECB 利率決議，前值 2.15、預期 2.4、實際 2.4。",
      "ai": "目前 AI 判斷為中性觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響全球資金成本、美元走勢與風險資產評價。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "https://www.ecb.europa.eu",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    },
    {
      "id": "macro-initial-jobless-claims-jun-06-20260611",
      "type": "macro",
      "title": "初領失業救濟金人數",
      "eventName": "初領失業救濟金人數",
      "originalEventName": "Initial Jobless Claims (Jun/06)",
      "sourcePublishTime": "2026/06/11 20:30 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/06/11 20:30",
      "previous": "225",
      "forecast": "219",
      "actual": "229",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響就業強弱、薪資通膨與聯準會政策預期。",
      "importance": "中高",
      "timestamp": "2026/06/11 20:30",
      "tags": [
        "美國",
        "初領失業救濟金人數",
        "偏多"
      ],
      "summary": "初領失業救濟金人數 將於 2026/06/11 20:30 公布，市場關注前值 225、預期 219。",
      "event": "美國 初領失業救濟金人數，前值 225、預期 219、實際 229。",
      "ai": "目前 AI 判斷為偏多觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響就業強弱、薪資通膨與聯準會政策預期。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "https://www.dol.gov/",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    },
    {
      "id": "macro-core-ppi-mom-may-20260611",
      "type": "macro",
      "title": "生產者物價指數 PPI",
      "eventName": "生產者物價指數 PPI",
      "originalEventName": "Core PPI MoM (May)",
      "sourcePublishTime": "2026/06/11 20:30 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/06/11 20:30",
      "previous": "0.7",
      "forecast": "0.5",
      "actual": "0.4",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏空",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/06/11 20:30",
      "tags": [
        "美國",
        "生產者物價指數",
        "偏空"
      ],
      "summary": "生產者物價指數 PPI 將於 2026/06/11 20:30 公布，市場關注前值 0.7、預期 0.5。",
      "event": "美國 生產者物價指數 PPI，前值 0.7、預期 0.5、實際 0.4。",
      "ai": "目前 AI 判斷為偏空觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
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
      "id": "macro-gdp-3-month-avg-apr-20260612",
      "type": "macro",
      "title": "GDP 經濟成長率",
      "eventName": "GDP 經濟成長率",
      "originalEventName": "GDP 3-Month Avg (Apr)",
      "sourcePublishTime": "2026/06/12 14:00 Asia/Taipei",
      "country": "英國",
      "publishTime": "2026/06/12 14:00",
      "previous": "0.6",
      "forecast": "0.7",
      "actual": "0.7",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響景氣循環、原物料、工業與科技需求預期。",
      "importance": "高",
      "timestamp": "2026/06/12 14:00",
      "tags": [
        "英國",
        "GDP",
        "中性"
      ],
      "summary": "GDP 經濟成長率 將於 2026/06/12 14:00 公布，市場關注前值 0.6、預期 0.7。",
      "event": "英國 GDP 經濟成長率，前值 0.6、預期 0.7、實際 0.7。",
      "ai": "目前 AI 判斷為中性觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
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
      "id": "macro-harmonised-inflation-rate-mom-final-may-20260612",
      "type": "macro",
      "title": "通膨率",
      "eventName": "通膨率",
      "originalEventName": "Harmonised Inflation Rate MoM Final (May)",
      "sourcePublishTime": "2026/06/12 14:00 Asia/Taipei",
      "country": "德國",
      "publishTime": "2026/06/12 14:00",
      "previous": "0.5",
      "forecast": "-0.1",
      "actual": "-0.1",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "importance": "中高",
      "timestamp": "2026/06/12 14:00",
      "tags": [
        "德國",
        "通膨率",
        "中性"
      ],
      "summary": "通膨率 將於 2026/06/12 14:00 公布，市場關注前值 0.5、預期 -0.1。",
      "event": "德國 通膨率，前值 0.5、預期 -0.1、實際 -0.1。",
      "ai": "目前 AI 判斷為中性觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "https://www.destatis.de",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    },
    {
      "id": "macro-harmonised-inflation-rate-mom-final-may-20260612",
      "type": "macro",
      "title": "通膨率",
      "eventName": "通膨率",
      "originalEventName": "Harmonised Inflation Rate MoM Final (May)",
      "sourcePublishTime": "2026/06/12 14:45 Asia/Taipei",
      "country": "法國",
      "publishTime": "2026/06/12 14:45",
      "previous": "1.2",
      "forecast": "0.1",
      "actual": "0.1",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "importance": "中高",
      "timestamp": "2026/06/12 14:45",
      "tags": [
        "法國",
        "通膨率",
        "中性"
      ],
      "summary": "通膨率 將於 2026/06/12 14:45 公布，市場關注前值 1.2、預期 0.1。",
      "event": "法國 通膨率，前值 1.2、預期 0.1、實際 0.1。",
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
      "id": "macro-niesr-monthly-gdp-tracker-may-20260612",
      "type": "macro",
      "title": "GDP 經濟成長率",
      "eventName": "GDP 經濟成長率",
      "originalEventName": "NIESR Monthly GDP Tracker (May)",
      "sourcePublishTime": "2026/06/12 18:50 Asia/Taipei",
      "country": "英國",
      "publishTime": "2026/06/12 18:50",
      "previous": "0.7",
      "forecast": "—",
      "actual": "0.5",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響景氣循環、原物料、工業與科技需求預期。",
      "importance": "高",
      "timestamp": "2026/06/12 18:50",
      "tags": [
        "英國",
        "GDP",
        "中性"
      ],
      "summary": "GDP 經濟成長率 將於 2026/06/12 18:50 公布，市場關注前值 0.7、預期 —。",
      "event": "英國 GDP 經濟成長率，前值 0.7、預期 —、實際 0.5。",
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
      "id": "macro-niesr-gdp-20260612",
      "type": "macro",
      "title": "GDP 經濟成長率",
      "eventName": "GDP 經濟成長率",
      "originalEventName": "NIESR每月GDP追蹤",
      "sourcePublishTime": "2026/06/12 19:00 Asia/Taipei",
      "country": "英國",
      "publishTime": "2026/06/12 19:00",
      "previous": "0.8",
      "forecast": "0.7",
      "actual": "0.5",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏空",
      "impact": "影響景氣循環、原物料、工業與科技需求預期。",
      "importance": "高",
      "timestamp": "2026/06/12 19:00",
      "tags": [
        "英國",
        "GDP",
        "偏空"
      ],
      "summary": "GDP 經濟成長率 將於 2026/06/12 19:00 公布，市場關注前值 0.8、預期 0.7。",
      "event": "英國 GDP 經濟成長率，前值 0.8、預期 0.7、實際 0.5。",
      "ai": "目前 AI 判斷為偏空觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響景氣循環、原物料、工業與科技需求預期。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "鉅亨網全球經濟指標",
      "sourceUrl": "https://www.cnyes.com/economy/indicator",
      "sourceList": [
        "鉅亨網全球經濟指標"
      ]
    }
  ]
};
