window.IntelligenceOverviewData = {
  "updatedAt": "2026/07/08 07:47",
  "status": "運作中",
  "cards": [
    {
      "label": "今日偵測情報",
      "value": 261,
      "unit": "筆",
      "icon": "file"
    },
    {
      "label": "高重要度訊號",
      "value": 99,
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
      "value": "ECB General Council Meeting",
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
          "53 筆"
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
          "9 個"
        ],
        [
          "下一事件",
          "ECB General Council Meeting"
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
      "id": "inst-2330-20260707",
      "type": "institutional",
      "title": "2330 台積電",
      "stockCode": "2330",
      "stockName": "台積電",
      "sector": "半導體",
      "group": "半導體",
      "institutionType": "投信",
      "direction": "連買",
      "days": 5,
      "consecutiveBuyDays": 5,
      "streaks": {
        "外資": 1,
        "投信": 5,
        "自營商": 0
      },
      "latestNetBuy": 558,
      "buyVolume": 10018,
      "buyAmount": 246.44,
      "syncCount": 2,
      "importance": "高",
      "timestamp": "2026/07/07 18:20",
      "tags": [
        "投信",
        "連買",
        "半導體",
        "3D技術",
        "3D感測"
      ],
      "summary": "投信連買，近 10 個交易日正買合計 10,018 張，估算金額約 246.44 億元。",
      "event": "投信連買 5 日，近 10 個交易日正買合計 10,018 張；最新日外資 83 張、投信 558 張、自營商 -237 張。",
      "ai": "法人買盤集中在 半導體，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 22226.254,
      "yahooVerification": {
        "status": "matched",
        "source": "https://tw.stock.yahoo.com/quote/2330.TW/institutional-trading",
        "latestNetBuy": 558,
        "days": 5,
        "latestForeign": 83,
        "latestTrust": 558,
        "latestDealer": -237
      }
    },
    {
      "id": "inst-2317-20260707",
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
        "自營商": 0
      },
      "latestNetBuy": 1754,
      "buyVolume": 11533,
      "buyAmount": 27.91,
      "syncCount": 1,
      "importance": "高",
      "timestamp": "2026/07/07 18:20",
      "tags": [
        "投信",
        "連買",
        "其他電子業",
        "3D技術",
        "3D感測"
      ],
      "summary": "投信連買，近 10 個交易日正買合計 11,533 張，估算金額約 27.91 億元。",
      "event": "投信連買 4 日，近 10 個交易日正買合計 11,533 張；最新日外資 -17,934 張、投信 1,754 張、自營商 -417 張。",
      "ai": "法人買盤集中在 其他電子業，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 15322.178,
      "yahooVerification": {
        "status": "matched",
        "source": "https://tw.stock.yahoo.com/quote/2317.TW/institutional-trading",
        "latestNetBuy": 1754,
        "days": 4,
        "latestForeign": -17934,
        "latestTrust": 1754,
        "latestDealer": -417
      }
    },
    {
      "id": "inst-2382-20260707",
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
        "自營商": 8
      },
      "latestNetBuy": 2344,
      "buyVolume": 24452,
      "buyAmount": 92.43,
      "syncCount": 2,
      "importance": "高",
      "timestamp": "2026/07/07 18:20",
      "tags": [
        "投信",
        "連買",
        "電腦及週邊設備",
        "5G",
        "APPLE概念"
      ],
      "summary": "投信連買，近 10 個交易日正買合計 24,452 張，估算金額約 92.43 億元。",
      "event": "投信連買 10 日，近 10 個交易日正買合計 24,452 張；最新日外資 -4,991 張、投信 2,344 張、自營商 189 張。",
      "ai": "法人買盤集中在 電腦及週邊設備，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 29585.693,
      "yahooVerification": {
        "status": "days-different",
        "source": "https://tw.stock.yahoo.com/quote/2382.TW/institutional-trading",
        "latestNetBuy": 2344,
        "days": 33,
        "latestForeign": -4991,
        "latestTrust": 2344,
        "latestDealer": 189
      }
    },
    {
      "id": "inst-2303-20260707",
      "type": "institutional",
      "title": "2303 聯電",
      "stockCode": "2303",
      "stockName": "聯電",
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
      "latestNetBuy": 2889,
      "buyVolume": 174499,
      "buyAmount": 289.67,
      "syncCount": 1,
      "importance": "高",
      "timestamp": "2026/07/07 18:20",
      "tags": [
        "外資",
        "連買",
        "半導體",
        "手機",
        "車用電子相關"
      ],
      "summary": "外資連買，近 10 個交易日正買合計 174,499 張，估算金額約 289.67 億元。",
      "event": "外資連買 3 日，近 10 個交易日正買合計 174,499 張；最新日外資 2,889 張、投信 -13,842 張、自營商 -8,857 張。",
      "ai": "法人買盤集中在 半導體，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 203397.319,
      "yahooVerification": {
        "status": "matched",
        "source": "https://tw.stock.yahoo.com/quote/2303.TW/institutional-trading",
        "latestNetBuy": 2889,
        "days": 3,
        "latestForeign": 2889,
        "latestTrust": -13842,
        "latestDealer": -8857
      }
    },
    {
      "id": "macro-pce-price-index-mom-may-20260625",
      "type": "macro",
      "title": "PCE 物價指數",
      "eventName": "PCE 物價指數",
      "originalEventName": "PCE Price Index MoM (May)",
      "sourcePublishTime": "2026/06/25 20:30 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/06/25 20:30",
      "previous": "0.4",
      "forecast": "0.5",
      "actual": "0.4",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "importance": "高",
      "timestamp": "2026/06/25 20:30",
      "tags": [
        "美國",
        "PCE",
        "偏多"
      ],
      "summary": "PCE 物價指數 將於 2026/06/25 20:30 公布，市場關注前值 0.4、預期 0.5。",
      "event": "美國 PCE 物價指數，前值 0.4、預期 0.5、實際 0.4。",
      "ai": "目前 AI 判斷為偏多觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
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
      "id": "macro-continuing-jobless-claims-jun-13-20260625",
      "type": "macro",
      "title": "初領失業救濟金人數",
      "eventName": "初領失業救濟金人數",
      "originalEventName": "Continuing Jobless Claims (Jun/13)",
      "sourcePublishTime": "2026/06/25 20:30 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/06/25 20:30",
      "previous": "1800",
      "forecast": "1800",
      "actual": "1821",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響就業強弱、薪資通膨與聯準會政策預期。",
      "importance": "中高",
      "timestamp": "2026/06/25 20:30",
      "tags": [
        "美國",
        "初領失業救濟金人數",
        "偏多"
      ],
      "summary": "初領失業救濟金人數 將於 2026/06/25 20:30 公布，市場關注前值 1800、預期 1800。",
      "event": "美國 初領失業救濟金人數，前值 1800、預期 1800、實際 1821。",
      "ai": "目前 AI 判斷為偏多觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響就業強弱、薪資通膨與聯準會政策預期。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "http://www.dol.gov",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    },
    {
      "id": "macro-ecb-bulletin-20260625",
      "type": "macro",
      "title": "ECB Bulletin",
      "eventName": "ECB Bulletin",
      "originalEventName": "ECB Bulletin",
      "sourcePublishTime": "2026/06/25 16:00 Asia/Taipei",
      "country": "歐元區",
      "publishTime": "2026/06/25 16:00",
      "previous": "—",
      "forecast": "—",
      "actual": null,
      "status": "等待公布",
      "statusLevel": "upcoming",
      "direction": "中性",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/06/25 16:00",
      "tags": [
        "歐元區",
        "ECB",
        "中性"
      ],
      "summary": "ECB Bulletin 將於 2026/06/25 16:00 公布，市場關注前值 —、預期 —。",
      "event": "歐元區 ECB Bulletin，前值 —、預期 —、實際 尚未公布。",
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
      "id": "macro-ecb-general-council-meeting-20260625",
      "type": "macro",
      "title": "ECB General Council Meeting",
      "eventName": "ECB General Council Meeting",
      "originalEventName": "ECB General Council Meeting",
      "sourcePublishTime": "2026/06/25 15:00 Asia/Taipei",
      "country": "歐元區",
      "publishTime": "2026/06/25 15:00",
      "previous": "—",
      "forecast": "—",
      "actual": null,
      "status": "等待公布",
      "statusLevel": "upcoming",
      "direction": "中性",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/06/25 15:00",
      "tags": [
        "歐元區",
        "ECB",
        "中性"
      ],
      "summary": "ECB General Council Meeting 將於 2026/06/25 15:00 公布，市場關注前值 —、預期 —。",
      "event": "歐元區 ECB General Council Meeting，前值 —、預期 —、實際 尚未公布。",
      "ai": "目前 AI 判斷為中性觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響市場風險偏好與資金輪動。",
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
      "id": "macro-ecb-general-council-meeting-20260625",
      "type": "macro",
      "title": "ECB General Council Meeting",
      "eventName": "ECB General Council Meeting",
      "originalEventName": "ECB General Council Meeting",
      "sourcePublishTime": "2026/06/25 15:00 Asia/Taipei",
      "country": "歐元區",
      "publishTime": "2026/06/25 15:00",
      "previous": "—",
      "forecast": "—",
      "actual": null,
      "status": "等待公布",
      "statusLevel": "upcoming",
      "direction": "中性",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/06/25 15:00",
      "tags": [
        "歐元區",
        "ECB",
        "中性"
      ],
      "summary": "ECB General Council Meeting 將於 2026/06/25 15:00 公布，市場關注前值 —、預期 —。",
      "event": "歐元區 ECB General Council Meeting，前值 —、預期 —、實際 尚未公布。",
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
      "id": "macro-ecb-bulletin-20260625",
      "type": "macro",
      "title": "ECB Bulletin",
      "eventName": "ECB Bulletin",
      "originalEventName": "ECB Bulletin",
      "sourcePublishTime": "2026/06/25 16:00 Asia/Taipei",
      "country": "歐元區",
      "publishTime": "2026/06/25 16:00",
      "previous": "—",
      "forecast": "—",
      "actual": null,
      "status": "等待公布",
      "statusLevel": "upcoming",
      "direction": "中性",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/06/25 16:00",
      "tags": [
        "歐元區",
        "ECB",
        "中性"
      ],
      "summary": "ECB Bulletin 將於 2026/06/25 16:00 公布，市場關注前值 —、預期 —。",
      "event": "歐元區 ECB Bulletin，前值 —、預期 —、實際 尚未公布。",
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
      "id": "macro-continuing-jobless-claims-jun-13-20260625",
      "type": "macro",
      "title": "初領失業救濟金人數",
      "eventName": "初領失業救濟金人數",
      "originalEventName": "Continuing Jobless Claims (Jun/13)",
      "sourcePublishTime": "2026/06/25 20:30 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/06/25 20:30",
      "previous": "1800",
      "forecast": "1800",
      "actual": "1821",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響就業強弱、薪資通膨與聯準會政策預期。",
      "importance": "中高",
      "timestamp": "2026/06/25 20:30",
      "tags": [
        "美國",
        "初領失業救濟金人數",
        "偏多"
      ],
      "summary": "初領失業救濟金人數 將於 2026/06/25 20:30 公布，市場關注前值 1800、預期 1800。",
      "event": "美國 初領失業救濟金人數，前值 1800、預期 1800、實際 1821。",
      "ai": "目前 AI 判斷為偏多觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響就業強弱、薪資通膨與聯準會政策預期。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "http://www.dol.gov",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    },
    {
      "id": "macro-pce-price-index-mom-may-20260625",
      "type": "macro",
      "title": "PCE 物價指數",
      "eventName": "PCE 物價指數",
      "originalEventName": "PCE Price Index MoM (May)",
      "sourcePublishTime": "2026/06/25 20:30 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/06/25 20:30",
      "previous": "0.4",
      "forecast": "0.5",
      "actual": "0.4",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "importance": "高",
      "timestamp": "2026/06/25 20:30",
      "tags": [
        "美國",
        "PCE",
        "偏多"
      ],
      "summary": "PCE 物價指數 將於 2026/06/25 20:30 公布，市場關注前值 0.4、預期 0.5。",
      "event": "美國 PCE 物價指數，前值 0.4、預期 0.5、實際 0.4。",
      "ai": "目前 AI 判斷為偏多觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
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
      "id": "macro-gdp-sales-qoq-final-q1-20260625",
      "type": "macro",
      "title": "GDP 經濟成長率",
      "eventName": "GDP 經濟成長率",
      "originalEventName": "GDP Sales QoQ Final (Q1)",
      "sourcePublishTime": "2026/06/25 20:30 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/06/25 20:30",
      "previous": "0.3",
      "forecast": "1.5",
      "actual": "1.9",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響景氣循環、原物料、工業與科技需求預期。",
      "importance": "高",
      "timestamp": "2026/06/25 20:30",
      "tags": [
        "美國",
        "GDP",
        "偏多"
      ],
      "summary": "GDP 經濟成長率 將於 2026/06/25 20:30 公布，市場關注前值 0.3、預期 1.5。",
      "event": "美國 GDP 經濟成長率，前值 0.3、預期 1.5、實際 1.9。",
      "ai": "目前 AI 判斷為偏多觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響景氣循環、原物料、工業與科技需求預期。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar / 鉅亨網全球經濟指標",
      "sourceUrl": "http://www.bea.gov",
      "sourceList": [
        "TradingView Economic Calendar",
        "鉅亨網全球經濟指標"
      ]
    },
    {
      "id": "macro-core-pce-price-index-yoy-may-20260625",
      "type": "macro",
      "title": "核心 PCE 物價指數",
      "eventName": "核心 PCE 物價指數",
      "originalEventName": "Core PCE Price Index YoY (May)",
      "sourcePublishTime": "2026/06/25 20:30 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/06/25 20:30",
      "previous": "3.3",
      "forecast": "3.4",
      "actual": "3.4",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "importance": "高",
      "timestamp": "2026/06/25 20:30",
      "tags": [
        "美國",
        "核心",
        "中性"
      ],
      "summary": "核心 PCE 物價指數 將於 2026/06/25 20:30 公布，市場關注前值 3.3、預期 3.4。",
      "event": "美國 核心 PCE 物價指數，前值 3.3、預期 3.4、實際 3.4。",
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
      "id": "macro-kansas-fed-composite-index-jun-20260625",
      "type": "macro",
      "title": "Kansas Fed Composite Index (Jun)",
      "eventName": "Kansas Fed Composite Index (Jun)",
      "originalEventName": "Kansas Fed Composite Index (Jun)",
      "sourcePublishTime": "2026/06/25 23:00 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/06/25 23:00",
      "previous": "8",
      "forecast": "—",
      "actual": "11",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響全球資金成本、美元走勢與風險資產評價。",
      "importance": "中高",
      "timestamp": "2026/06/25 23:00",
      "tags": [
        "美國",
        "Kansas",
        "中性"
      ],
      "summary": "Kansas Fed Composite Index (Jun) 將於 2026/06/25 23:00 公布，市場關注前值 8、預期 —。",
      "event": "美國 Kansas Fed Composite Index (Jun)，前值 8、預期 —、實際 11。",
      "ai": "目前 AI 判斷為中性觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響全球資金成本、美元走勢與風險資產評價。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "https://kansascityfed.org",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    },
    {
      "id": "macro-kansas-fed-manufacturing-index-jun-20260625",
      "type": "macro",
      "title": "Kansas Fed Manufacturing Index (Jun)",
      "eventName": "Kansas Fed Manufacturing Index (Jun)",
      "originalEventName": "Kansas Fed Manufacturing Index (Jun)",
      "sourcePublishTime": "2026/06/25 23:00 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/06/25 23:00",
      "previous": "9",
      "forecast": "—",
      "actual": "19",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響全球資金成本、美元走勢與風險資產評價。",
      "importance": "中高",
      "timestamp": "2026/06/25 23:00",
      "tags": [
        "美國",
        "Kansas",
        "中性"
      ],
      "summary": "Kansas Fed Manufacturing Index (Jun) 將於 2026/06/25 23:00 公布，市場關注前值 9、預期 —。",
      "event": "美國 Kansas Fed Manufacturing Index (Jun)，前值 9、預期 —、實際 19。",
      "ai": "目前 AI 判斷為中性觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響全球資金成本、美元走勢與風險資產評價。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "https://kansascityfed.org",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    }
  ]
};
