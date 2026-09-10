window.IntelligenceOverviewData = {
  "updatedAt": "2026/09/10 18:30",
  "status": "運作中",
  "cards": [
    {
      "label": "今日偵測情報",
      "value": 262,
      "unit": "筆",
      "icon": "file"
    },
    {
      "label": "高重要度訊號",
      "value": 52,
      "unit": "筆",
      "icon": "alert",
      "accent": "orange"
    },
    {
      "label": "追蹤標的",
      "value": 95,
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
          "95 筆"
        ],
        [
          "投信連買",
          "24 筆"
        ],
        [
          "三大法人同步買",
          "7 筆"
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
          "23 個"
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
      "id": "inst-2412-20260910",
      "type": "institutional",
      "title": "2412 中華電",
      "stockCode": "2412",
      "stockName": "中華電",
      "sector": "通信網路業",
      "group": "通信網路業",
      "institutionType": "外資",
      "direction": "連買",
      "days": 8,
      "consecutiveBuyDays": 8,
      "streaks": {
        "外資": 8,
        "投信": 2,
        "自營商": 0
      },
      "latestNetBuy": 3915,
      "buyVolume": 29476,
      "buyAmount": 0,
      "syncCount": 2,
      "importance": "高",
      "timestamp": "2026/09/10 18:20",
      "tags": [
        "外資",
        "連買",
        "通信網路業",
        "NFC近場通訊",
        "手機"
      ],
      "summary": "外資連買，近 10 個交易日正買合計 29,476 張，估算金額約 0.00 億元。",
      "event": "外資連買 8 日，近 10 個交易日正買合計 29,476 張；最新日外資 3,915 張、投信 99 張、自營商 -79 張。",
      "ai": "法人買盤集中在 通信網路業，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 31439.891,
      "yahooVerification": {
        "status": "matched",
        "source": "https://tw.stock.yahoo.com/quote/2412.TW/institutional-trading",
        "latestNetBuy": 3915,
        "days": 8,
        "latestForeign": 3915,
        "latestTrust": 99,
        "latestDealer": -79
      }
    },
    {
      "id": "inst-1303-20260910",
      "type": "institutional",
      "title": "1303 南亞",
      "stockCode": "1303",
      "stockName": "南亞",
      "sector": "塑膠工業",
      "group": "塑膠工業",
      "institutionType": "投信",
      "direction": "連買",
      "days": 4,
      "consecutiveBuyDays": 4,
      "streaks": {
        "外資": 1,
        "投信": 4,
        "自營商": 0
      },
      "latestNetBuy": 1925,
      "buyVolume": 29145,
      "buyAmount": 68.93,
      "syncCount": 2,
      "importance": "高",
      "timestamp": "2026/09/10 18:20",
      "tags": [
        "投信",
        "連買",
        "塑膠工業",
        "APPLE概念",
        "越南設廠"
      ],
      "summary": "投信連買，近 10 個交易日正買合計 29,145 張，估算金額約 68.93 億元。",
      "event": "投信連買 4 日，近 10 個交易日正買合計 29,145 張；最新日外資 7,356 張、投信 1,925 張、自營商 -30 張。",
      "ai": "法人買盤集中在 塑膠工業，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 64142.781,
      "yahooVerification": {
        "status": "matched",
        "source": "https://tw.stock.yahoo.com/quote/1303.TW/institutional-trading",
        "latestNetBuy": 1925,
        "days": 4,
        "latestForeign": 7356,
        "latestTrust": 1925,
        "latestDealer": -30
      }
    },
    {
      "id": "inst-2884-20260910",
      "type": "institutional",
      "title": "2884 玉山金",
      "stockCode": "2884",
      "stockName": "玉山金",
      "sector": "金融保險",
      "group": "金融保險",
      "institutionType": "投信",
      "direction": "連買",
      "days": 10,
      "consecutiveBuyDays": 10,
      "streaks": {
        "外資": 1,
        "投信": 10,
        "自營商": 0
      },
      "latestNetBuy": 6110,
      "buyVolume": 46825,
      "buyAmount": 0,
      "syncCount": 2,
      "importance": "高",
      "timestamp": "2026/09/10 18:20",
      "tags": [
        "投信",
        "連買",
        "金融保險",
        "電子商務及延伸",
        "金融業"
      ],
      "summary": "投信連買，近 10 個交易日正買合計 46,825 張，估算金額約 0.00 億元。",
      "event": "投信連買 10 日，近 10 個交易日正買合計 46,825 張；最新日外資 1,375 張、投信 6,110 張、自營商 -166 張。",
      "ai": "法人買盤集中在 金融保險，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 92785.261,
      "yahooVerification": {
        "status": "days-different",
        "source": "https://tw.stock.yahoo.com/quote/2884.TW/institutional-trading",
        "latestNetBuy": 6110,
        "days": 26,
        "latestForeign": 1375,
        "latestTrust": 6110,
        "latestDealer": -166
      }
    },
    {
      "id": "inst-2303-20260910",
      "type": "institutional",
      "title": "2303 聯電",
      "stockCode": "2303",
      "stockName": "聯電",
      "sector": "半導體",
      "group": "半導體",
      "institutionType": "投信",
      "direction": "連買",
      "days": 5,
      "consecutiveBuyDays": 5,
      "streaks": {
        "外資": 0,
        "投信": 5,
        "自營商": 0
      },
      "latestNetBuy": 12518,
      "buyVolume": 61050,
      "buyAmount": 86.39,
      "syncCount": 1,
      "importance": "高",
      "timestamp": "2026/09/10 18:20",
      "tags": [
        "投信",
        "連買",
        "半導體",
        "手機",
        "車用電子相關"
      ],
      "summary": "投信連買，近 10 個交易日正買合計 61,050 張，估算金額約 86.39 億元。",
      "event": "投信連買 5 日，近 10 個交易日正買合計 61,050 張；最新日外資 -10,293 張、投信 12,518 張、自營商 -978 張。",
      "ai": "法人買盤集中在 半導體，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 261184.184,
      "yahooVerification": {
        "status": "matched",
        "source": "https://tw.stock.yahoo.com/quote/2303.TW/institutional-trading",
        "latestNetBuy": 12518,
        "days": 5,
        "latestForeign": -10293,
        "latestTrust": 12518,
        "latestDealer": -978
      }
    },
    {
      "id": "macro-initial-jobless-claims-aug-22-20260827",
      "type": "macro",
      "title": "初領失業救濟金人數",
      "eventName": "初領失業救濟金人數",
      "originalEventName": "Initial Jobless Claims (Aug/22)",
      "sourcePublishTime": "2026/08/27 20:30 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/08/27 20:30",
      "previous": "207",
      "forecast": "208",
      "actual": "203",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏空",
      "impact": "影響就業強弱、薪資通膨與聯準會政策預期。",
      "importance": "中高",
      "timestamp": "2026/08/27 20:30",
      "tags": [
        "美國",
        "初領失業救濟金人數",
        "偏空"
      ],
      "summary": "初領失業救濟金人數 將於 2026/08/27 20:30 公布，市場關注前值 207、預期 208。",
      "event": "美國 初領失業救濟金人數，前值 207、預期 208、實際 203。",
      "ai": "目前 AI 判斷為偏空觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響就業強弱、薪資通膨與聯準會政策預期。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "https://www.dol.gov/",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    },
    {
      "id": "macro-ecb-monetary-policy-meeting-accounts-20260827",
      "type": "macro",
      "title": "ECB Monetary Policy Meeting Accounts",
      "eventName": "ECB Monetary Policy Meeting Accounts",
      "originalEventName": "ECB Monetary Policy Meeting Accounts",
      "sourcePublishTime": "2026/08/27 19:30 Asia/Taipei",
      "country": "歐元區",
      "publishTime": "2026/08/27 19:30",
      "previous": "—",
      "forecast": "—",
      "actual": null,
      "status": "等待公布",
      "statusLevel": "upcoming",
      "direction": "中性",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/08/27 19:30",
      "tags": [
        "歐元區",
        "ECB",
        "中性"
      ],
      "summary": "ECB Monetary Policy Meeting Accounts 將於 2026/08/27 19:30 公布，市場關注前值 —、預期 —。",
      "event": "歐元區 ECB Monetary Policy Meeting Accounts，前值 —、預期 —、實際 尚未公布。",
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
      "id": "macro-unemployment-benefit-claims-jul-20260827",
      "type": "macro",
      "title": "Unemployment Benefit Claims (Jul)",
      "eventName": "Unemployment Benefit Claims (Jul)",
      "originalEventName": "Unemployment Benefit Claims (Jul)",
      "sourcePublishTime": "2026/08/27 18:00 Asia/Taipei",
      "country": "法國",
      "publishTime": "2026/08/27 18:00",
      "previous": "5.9",
      "forecast": "—",
      "actual": "21.5",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響就業強弱、薪資通膨與聯準會政策預期。",
      "importance": "中高",
      "timestamp": "2026/08/27 18:00",
      "tags": [
        "法國",
        "Unemployment",
        "中性"
      ],
      "summary": "Unemployment Benefit Claims (Jul) 將於 2026/08/27 18:00 公布，市場關注前值 5.9、預期 —。",
      "event": "法國 Unemployment Benefit Claims (Jul)，前值 5.9、預期 —、實際 21.5。",
      "ai": "目前 AI 判斷為中性觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響就業強弱、薪資通膨與聯準會政策預期。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "https://dares.travail-emploi.gouv.fr",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    },
    {
      "id": "macro-ppi-mom-jul-20260827",
      "type": "macro",
      "title": "生產者物價指數 PPI",
      "eventName": "生產者物價指數 PPI",
      "originalEventName": "PPI MoM (Jul)",
      "sourcePublishTime": "2026/08/27 14:45 Asia/Taipei",
      "country": "法國",
      "publishTime": "2026/08/27 14:45",
      "previous": "-0.4",
      "forecast": "0.6",
      "actual": "1.1",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/08/27 14:45",
      "tags": [
        "法國",
        "生產者物價指數",
        "中性"
      ],
      "summary": "生產者物價指數 PPI 將於 2026/08/27 14:45 公布，市場關注前值 -0.4、預期 —。",
      "event": "法國 生產者物價指數 PPI，前值 -0.4、預期 —、實際 1.1。",
      "ai": "目前 AI 判斷為中性觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響市場風險偏好與資金輪動。",
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
      "id": "macro-ppi-mom-jul-20260827",
      "type": "macro",
      "title": "生產者物價指數 PPI",
      "eventName": "生產者物價指數 PPI",
      "originalEventName": "PPI MoM (Jul)",
      "sourcePublishTime": "2026/08/27 14:45 Asia/Taipei",
      "country": "法國",
      "publishTime": "2026/08/27 14:45",
      "previous": "-0.4",
      "forecast": "0.6",
      "actual": "1.1",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/08/27 14:45",
      "tags": [
        "法國",
        "生產者物價指數",
        "中性"
      ],
      "summary": "生產者物價指數 PPI 將於 2026/08/27 14:45 公布，市場關注前值 -0.4、預期 —。",
      "event": "法國 生產者物價指數 PPI，前值 -0.4、預期 —、實際 1.1。",
      "ai": "目前 AI 判斷為中性觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響市場風險偏好與資金輪動。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar / 鉅亨網全球經濟指標",
      "sourceUrl": "https://www.insee.fr",
      "sourceList": [
        "TradingView Economic Calendar",
        "鉅亨網全球經濟指標"
      ]
    },
    {
      "id": "macro-unemployment-benefit-claims-jul-20260827",
      "type": "macro",
      "title": "Unemployment Benefit Claims (Jul)",
      "eventName": "Unemployment Benefit Claims (Jul)",
      "originalEventName": "Unemployment Benefit Claims (Jul)",
      "sourcePublishTime": "2026/08/27 18:00 Asia/Taipei",
      "country": "法國",
      "publishTime": "2026/08/27 18:00",
      "previous": "5.9",
      "forecast": "—",
      "actual": "21.5",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響就業強弱、薪資通膨與聯準會政策預期。",
      "importance": "中高",
      "timestamp": "2026/08/27 18:00",
      "tags": [
        "法國",
        "Unemployment",
        "中性"
      ],
      "summary": "Unemployment Benefit Claims (Jul) 將於 2026/08/27 18:00 公布，市場關注前值 5.9、預期 —。",
      "event": "法國 Unemployment Benefit Claims (Jul)，前值 5.9、預期 —、實際 21.5。",
      "ai": "目前 AI 判斷為中性觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響就業強弱、薪資通膨與聯準會政策預期。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "https://dares.travail-emploi.gouv.fr",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    },
    {
      "id": "macro-ecb-monetary-policy-meeting-accounts-20260827",
      "type": "macro",
      "title": "ECB Monetary Policy Meeting Accounts",
      "eventName": "ECB Monetary Policy Meeting Accounts",
      "originalEventName": "ECB Monetary Policy Meeting Accounts",
      "sourcePublishTime": "2026/08/27 19:30 Asia/Taipei",
      "country": "歐元區",
      "publishTime": "2026/08/27 19:30",
      "previous": "—",
      "forecast": "—",
      "actual": null,
      "status": "等待公布",
      "statusLevel": "upcoming",
      "direction": "中性",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/08/27 19:30",
      "tags": [
        "歐元區",
        "ECB",
        "中性"
      ],
      "summary": "ECB Monetary Policy Meeting Accounts 將於 2026/08/27 19:30 公布，市場關注前值 —、預期 —。",
      "event": "歐元區 ECB Monetary Policy Meeting Accounts，前值 —、預期 —、實際 尚未公布。",
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
      "id": "macro-initial-jobless-claims-aug-22-20260827",
      "type": "macro",
      "title": "初領失業救濟金人數",
      "eventName": "初領失業救濟金人數",
      "originalEventName": "Initial Jobless Claims (Aug/22)",
      "sourcePublishTime": "2026/08/27 20:30 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/08/27 20:30",
      "previous": "207",
      "forecast": "208",
      "actual": "203",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏空",
      "impact": "影響就業強弱、薪資通膨與聯準會政策預期。",
      "importance": "中高",
      "timestamp": "2026/08/27 20:30",
      "tags": [
        "美國",
        "初領失業救濟金人數",
        "偏空"
      ],
      "summary": "初領失業救濟金人數 將於 2026/08/27 20:30 公布，市場關注前值 207、預期 208。",
      "event": "美國 初領失業救濟金人數，前值 207、預期 208、實際 203。",
      "ai": "目前 AI 判斷為偏空觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響就業強弱、薪資通膨與聯準會政策預期。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "https://www.dol.gov/",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    },
    {
      "id": "macro-kansas-fed-manufacturing-index-aug-20260827",
      "type": "macro",
      "title": "Kansas Fed Manufacturing Index (Aug)",
      "eventName": "Kansas Fed Manufacturing Index (Aug)",
      "originalEventName": "Kansas Fed Manufacturing Index (Aug)",
      "sourcePublishTime": "2026/08/27 23:00 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/08/27 23:00",
      "previous": "17",
      "forecast": "—",
      "actual": "17",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響全球資金成本、美元走勢與風險資產評價。",
      "importance": "中高",
      "timestamp": "2026/08/27 23:00",
      "tags": [
        "美國",
        "Kansas",
        "中性"
      ],
      "summary": "Kansas Fed Manufacturing Index (Aug) 將於 2026/08/27 23:00 公布，市場關注前值 17、預期 —。",
      "event": "美國 Kansas Fed Manufacturing Index (Aug)，前值 17、預期 —、實際 17。",
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
      "id": "macro-kansas-fed-composite-index-aug-20260827",
      "type": "macro",
      "title": "Kansas Fed Composite Index (Aug)",
      "eventName": "Kansas Fed Composite Index (Aug)",
      "originalEventName": "Kansas Fed Composite Index (Aug)",
      "sourcePublishTime": "2026/08/27 23:00 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/08/27 23:00",
      "previous": "9",
      "forecast": "—",
      "actual": "10",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響全球資金成本、美元走勢與風險資產評價。",
      "importance": "中高",
      "timestamp": "2026/08/27 23:00",
      "tags": [
        "美國",
        "Kansas",
        "中性"
      ],
      "summary": "Kansas Fed Composite Index (Aug) 將於 2026/08/27 23:00 公布，市場關注前值 9、預期 —。",
      "event": "美國 Kansas Fed Composite Index (Aug)，前值 9、預期 —、實際 10。",
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
      "id": "macro-harmonised-inflation-rate-mom-prel-aug-20260828",
      "type": "macro",
      "title": "通膨率",
      "eventName": "通膨率",
      "originalEventName": "Harmonised Inflation Rate MoM Prel (Aug)",
      "sourcePublishTime": "2026/08/28 14:45 Asia/Taipei",
      "country": "法國",
      "publishTime": "2026/08/28 14:45",
      "previous": "0.6",
      "forecast": "0.6",
      "actual": "0.8",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "importance": "中高",
      "timestamp": "2026/08/28 14:45",
      "tags": [
        "法國",
        "通膨率",
        "中性"
      ],
      "summary": "通膨率 將於 2026/08/28 14:45 公布，市場關注前值 0.6、預期 —。",
      "event": "法國 通膨率，前值 0.6、預期 —、實際 0.8。",
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
      "id": "macro-gdp-growth-rate-yoy-final-q2-20260828",
      "type": "macro",
      "title": "GDP 經濟成長率",
      "eventName": "GDP 經濟成長率",
      "originalEventName": "GDP Growth Rate YoY Final (Q2)",
      "sourcePublishTime": "2026/08/28 14:45 Asia/Taipei",
      "country": "法國",
      "publishTime": "2026/08/28 14:45",
      "previous": "0.8",
      "forecast": "0.7",
      "actual": "0.7",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響全球資金成本、美元走勢與風險資產評價。",
      "importance": "高",
      "timestamp": "2026/08/28 14:45",
      "tags": [
        "法國",
        "GDP",
        "中性"
      ],
      "summary": "GDP 經濟成長率 將於 2026/08/28 14:45 公布，市場關注前值 0.8、預期 0.7。",
      "event": "法國 GDP 經濟成長率，前值 0.8、預期 0.7、實際 0.7。",
      "ai": "目前 AI 判斷為中性觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響全球資金成本、美元走勢與風險資產評價。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar / 鉅亨網全球經濟指標",
      "sourceUrl": "https://www.insee.fr",
      "sourceList": [
        "TradingView Economic Calendar",
        "鉅亨網全球經濟指標"
      ]
    }
  ]
};
