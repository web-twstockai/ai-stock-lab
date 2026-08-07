window.IntelligenceOverviewData = {
  "updatedAt": "2026/08/07 18:30",
  "status": "運作中",
  "cards": [
    {
      "label": "今日偵測情報",
      "value": 276,
      "unit": "筆",
      "icon": "file"
    },
    {
      "label": "高重要度訊號",
      "value": 61,
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
          "19 筆"
        ],
        [
          "三大法人同步買",
          "12 筆"
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
          "17 個"
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
      "id": "inst-1216-20260807",
      "type": "institutional",
      "title": "1216 統一",
      "stockCode": "1216",
      "stockName": "統一",
      "sector": "食品工業",
      "group": "食品工業",
      "institutionType": "外資",
      "direction": "連買",
      "days": 9,
      "consecutiveBuyDays": 9,
      "streaks": {
        "外資": 9,
        "投信": 0,
        "自營商": 0
      },
      "latestNetBuy": 20336,
      "buyVolume": 94602,
      "buyAmount": 0,
      "syncCount": 1,
      "importance": "高",
      "timestamp": "2026/08/07 18:20",
      "tags": [
        "外資",
        "連買",
        "食品工業",
        "S&P 台商收成指數",
        "中國"
      ],
      "summary": "外資連買，近 10 個交易日正買合計 94,602 張，估算金額約 0.00 億元。",
      "event": "外資連買 9 日，近 10 個交易日正買合計 94,602 張；最新日外資 20,336 張、投信 -97 張、自營商 -4 張。",
      "ai": "法人買盤集中在 食品工業，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 105701.331,
      "yahooVerification": {
        "status": "matched",
        "source": "https://tw.stock.yahoo.com/quote/1216.TW/institutional-trading",
        "latestNetBuy": 20336,
        "days": 9,
        "latestForeign": 20336,
        "latestTrust": -97,
        "latestDealer": -4
      }
    },
    {
      "id": "inst-1303-20260807",
      "type": "institutional",
      "title": "1303 南亞",
      "stockCode": "1303",
      "stockName": "南亞",
      "sector": "塑膠工業",
      "group": "塑膠工業",
      "institutionType": "自營商",
      "direction": "連買",
      "days": 2,
      "consecutiveBuyDays": 2,
      "streaks": {
        "外資": 0,
        "投信": 1,
        "自營商": 2
      },
      "latestNetBuy": 377,
      "buyVolume": 6993,
      "buyAmount": 12.48,
      "syncCount": 2,
      "importance": "高",
      "timestamp": "2026/08/07 18:20",
      "tags": [
        "自營商",
        "連買",
        "塑膠工業",
        "APPLE概念",
        "越南設廠"
      ],
      "summary": "自營商連買，近 10 個交易日正買合計 6,993 張，估算金額約 12.48 億元。",
      "event": "自營商連買 2 日，近 10 個交易日正買合計 6,993 張；最新日外資 -7,334 張、投信 1,758 張、自營商 377 張。",
      "ai": "法人買盤集中在 塑膠工業，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 72160.103,
      "yahooVerification": {
        "status": "matched",
        "source": "https://tw.stock.yahoo.com/quote/1303.TW/institutional-trading",
        "latestNetBuy": 377,
        "days": 2,
        "latestForeign": -7334,
        "latestTrust": 1758,
        "latestDealer": 377
      }
    },
    {
      "id": "inst-2892-20260807",
      "type": "institutional",
      "title": "2892 第一金",
      "stockCode": "2892",
      "stockName": "第一金",
      "sector": "金融保險",
      "group": "金融保險",
      "institutionType": "投信",
      "direction": "連買",
      "days": 10,
      "consecutiveBuyDays": 10,
      "streaks": {
        "外資": 0,
        "投信": 10,
        "自營商": 0
      },
      "latestNetBuy": 1291,
      "buyVolume": 19098,
      "buyAmount": 0,
      "syncCount": 1,
      "importance": "高",
      "timestamp": "2026/08/07 18:20",
      "tags": [
        "投信",
        "連買",
        "金融保險",
        "官股企業",
        "電子商務及延伸"
      ],
      "summary": "投信連買，近 10 個交易日正買合計 19,098 張，估算金額約 0.00 億元。",
      "event": "投信連買 10 日，近 10 個交易日正買合計 19,098 張；最新日外資 -12,691 張、投信 1,291 張、自營商 -270 張。",
      "ai": "法人買盤集中在 金融保險，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 71511.438,
      "yahooVerification": {
        "status": "days-different",
        "source": "https://tw.stock.yahoo.com/quote/2892.TW/institutional-trading",
        "latestNetBuy": 1291,
        "days": 17,
        "latestForeign": -12691,
        "latestTrust": 1291,
        "latestDealer": -270
      }
    },
    {
      "id": "inst-2887-20260807",
      "type": "institutional",
      "title": "2887 台新新光金",
      "stockCode": "2887",
      "stockName": "台新新光金",
      "sector": "金融保險",
      "group": "金融保險",
      "institutionType": "自營商",
      "direction": "同步買超",
      "days": 2,
      "consecutiveBuyDays": 2,
      "streaks": {
        "外資": 1,
        "投信": 1,
        "自營商": 2
      },
      "latestNetBuy": 232,
      "buyVolume": 19854,
      "buyAmount": 0,
      "syncCount": 3,
      "importance": "高",
      "timestamp": "2026/08/07 18:20",
      "tags": [
        "自營商",
        "同步買超",
        "金融保險",
        "金融業",
        "銀行"
      ],
      "summary": "自營商同步買超，近 10 個交易日正買合計 19,854 張，估算金額約 0.00 億元。",
      "event": "自營商連買 2 日，近 10 個交易日正買合計 19,854 張；最新日外資 14,197 張、投信 55 張、自營商 232 張。",
      "ai": "法人買盤集中在 金融保險，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 131525.608,
      "yahooVerification": {
        "status": "matched",
        "source": "https://tw.stock.yahoo.com/quote/2887.TW/institutional-trading",
        "latestNetBuy": 232,
        "days": 2,
        "latestForeign": 14197,
        "latestTrust": 55,
        "latestDealer": 232
      }
    },
    {
      "id": "macro-kansas-fed-composite-index-jul-20260723",
      "type": "macro",
      "title": "Kansas Fed Composite Index (Jul)",
      "eventName": "Kansas Fed Composite Index (Jul)",
      "originalEventName": "Kansas Fed Composite Index (Jul)",
      "sourcePublishTime": "2026/07/23 23:00 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/07/23 23:00",
      "previous": "11",
      "forecast": "—",
      "actual": "9",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響全球資金成本、美元走勢與風險資產評價。",
      "importance": "中高",
      "timestamp": "2026/07/23 23:00",
      "tags": [
        "美國",
        "Kansas",
        "中性"
      ],
      "summary": "Kansas Fed Composite Index (Jul) 將於 2026/07/23 23:00 公布，市場關注前值 11、預期 —。",
      "event": "美國 Kansas Fed Composite Index (Jul)，前值 11、預期 —、實際 9。",
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
      "id": "macro-kansas-fed-manufacturing-index-jul-20260723",
      "type": "macro",
      "title": "Kansas Fed Manufacturing Index (Jul)",
      "eventName": "Kansas Fed Manufacturing Index (Jul)",
      "originalEventName": "Kansas Fed Manufacturing Index (Jul)",
      "sourcePublishTime": "2026/07/23 23:00 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/07/23 23:00",
      "previous": "19",
      "forecast": "—",
      "actual": "17",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響全球資金成本、美元走勢與風險資產評價。",
      "importance": "中高",
      "timestamp": "2026/07/23 23:00",
      "tags": [
        "美國",
        "Kansas",
        "中性"
      ],
      "summary": "Kansas Fed Manufacturing Index (Jul) 將於 2026/07/23 23:00 公布，市場關注前值 19、預期 —。",
      "event": "美國 Kansas Fed Manufacturing Index (Jul)，前值 19、預期 —、實際 17。",
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
      "id": "macro-initial-jobless-claims-jul-18-20260723",
      "type": "macro",
      "title": "初領失業救濟金人數",
      "eventName": "初領失業救濟金人數",
      "originalEventName": "Initial Jobless Claims (Jul/18)",
      "sourcePublishTime": "2026/07/23 20:30 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/07/23 20:30",
      "previous": "209",
      "forecast": "212",
      "actual": "187",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏空",
      "impact": "影響就業強弱、薪資通膨與聯準會政策預期。",
      "importance": "中高",
      "timestamp": "2026/07/23 20:30",
      "tags": [
        "美國",
        "初領失業救濟金人數",
        "偏空"
      ],
      "summary": "初領失業救濟金人數 將於 2026/07/23 20:30 公布，市場關注前值 209、預期 212。",
      "event": "美國 初領失業救濟金人數，前值 209、預期 212、實際 187。",
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
      "id": "macro-ecb-interest-rate-decision-20260723",
      "type": "macro",
      "title": "ECB 利率決議",
      "eventName": "ECB 利率決議",
      "originalEventName": "ECB Interest Rate Decision",
      "sourcePublishTime": "2026/07/23 20:15 Asia/Taipei",
      "country": "歐元區",
      "publishTime": "2026/07/23 20:15",
      "previous": "2.4",
      "forecast": "2.4",
      "actual": "2.4",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響全球資金成本、美元走勢與風險資產評價。",
      "importance": "中高",
      "timestamp": "2026/07/23 20:15",
      "tags": [
        "歐元區",
        "ECB",
        "中性"
      ],
      "summary": "ECB 利率決議 將於 2026/07/23 20:15 公布，市場關注前值 2.4、預期 2.4。",
      "event": "歐元區 ECB 利率決議，前值 2.4、預期 2.4、實際 2.4。",
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
      "id": "macro-ecb-interest-rate-decision-20260723",
      "type": "macro",
      "title": "ECB 利率決議",
      "eventName": "ECB 利率決議",
      "originalEventName": "ECB Interest Rate Decision",
      "sourcePublishTime": "2026/07/23 20:15 Asia/Taipei",
      "country": "歐元區",
      "publishTime": "2026/07/23 20:15",
      "previous": "2.4",
      "forecast": "2.4",
      "actual": "2.4",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響全球資金成本、美元走勢與風險資產評價。",
      "importance": "中高",
      "timestamp": "2026/07/23 20:15",
      "tags": [
        "歐元區",
        "ECB",
        "中性"
      ],
      "summary": "ECB 利率決議 將於 2026/07/23 20:15 公布，市場關注前值 2.4、預期 2.4。",
      "event": "歐元區 ECB 利率決議，前值 2.4、預期 2.4、實際 2.4。",
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
      "id": "macro-initial-jobless-claims-jul-18-20260723",
      "type": "macro",
      "title": "初領失業救濟金人數",
      "eventName": "初領失業救濟金人數",
      "originalEventName": "Initial Jobless Claims (Jul/18)",
      "sourcePublishTime": "2026/07/23 20:30 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/07/23 20:30",
      "previous": "209",
      "forecast": "212",
      "actual": "187",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏空",
      "impact": "影響就業強弱、薪資通膨與聯準會政策預期。",
      "importance": "中高",
      "timestamp": "2026/07/23 20:30",
      "tags": [
        "美國",
        "初領失業救濟金人數",
        "偏空"
      ],
      "summary": "初領失業救濟金人數 將於 2026/07/23 20:30 公布，市場關注前值 209、預期 212。",
      "event": "美國 初領失業救濟金人數，前值 209、預期 212、實際 187。",
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
      "id": "macro-kansas-fed-composite-index-jul-20260723",
      "type": "macro",
      "title": "Kansas Fed Composite Index (Jul)",
      "eventName": "Kansas Fed Composite Index (Jul)",
      "originalEventName": "Kansas Fed Composite Index (Jul)",
      "sourcePublishTime": "2026/07/23 23:00 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/07/23 23:00",
      "previous": "11",
      "forecast": "—",
      "actual": "9",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響全球資金成本、美元走勢與風險資產評價。",
      "importance": "中高",
      "timestamp": "2026/07/23 23:00",
      "tags": [
        "美國",
        "Kansas",
        "中性"
      ],
      "summary": "Kansas Fed Composite Index (Jul) 將於 2026/07/23 23:00 公布，市場關注前值 11、預期 —。",
      "event": "美國 Kansas Fed Composite Index (Jul)，前值 11、預期 —、實際 9。",
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
      "id": "macro-kansas-fed-manufacturing-index-jul-20260723",
      "type": "macro",
      "title": "Kansas Fed Manufacturing Index (Jul)",
      "eventName": "Kansas Fed Manufacturing Index (Jul)",
      "originalEventName": "Kansas Fed Manufacturing Index (Jul)",
      "sourcePublishTime": "2026/07/23 23:00 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/07/23 23:00",
      "previous": "19",
      "forecast": "—",
      "actual": "17",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響全球資金成本、美元走勢與風險資產評價。",
      "importance": "中高",
      "timestamp": "2026/07/23 23:00",
      "tags": [
        "美國",
        "Kansas",
        "中性"
      ],
      "summary": "Kansas Fed Manufacturing Index (Jul) 將於 2026/07/23 23:00 公布，市場關注前值 19、預期 —。",
      "event": "美國 Kansas Fed Manufacturing Index (Jul)，前值 19、預期 —、實際 17。",
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
      "id": "macro-s-p-global-manufacturing-pmi-flash-jul-20260724",
      "type": "macro",
      "title": "製造業 PMI",
      "eventName": "製造業 PMI",
      "originalEventName": "S&P Global Manufacturing PMI Flash (Jul)",
      "sourcePublishTime": "2026/07/24 15:15 Asia/Taipei",
      "country": "法國",
      "publishTime": "2026/07/24 15:15",
      "previous": "51.2",
      "forecast": "51",
      "actual": "50.0",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏空",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/07/24 15:15",
      "tags": [
        "法國",
        "製造業",
        "中性"
      ],
      "summary": "製造業 PMI 將於 2026/07/24 15:15 公布，市場關注前值 51.2、預期 51.5。",
      "event": "法國 製造業 PMI，前值 51.2、預期 51.5、實際 50.0。",
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
      "id": "macro-s-p-global-composite-pmi-flash-jul-20260724",
      "type": "macro",
      "title": "綜合 PMI",
      "eventName": "綜合 PMI",
      "originalEventName": "S&P Global Composite PMI Flash (Jul)",
      "sourcePublishTime": "2026/07/24 15:15 Asia/Taipei",
      "country": "法國",
      "publishTime": "2026/07/24 15:15",
      "previous": "47.2",
      "forecast": "47.8",
      "actual": "49.6",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/07/24 15:15",
      "tags": [
        "法國",
        "綜合",
        "中性"
      ],
      "summary": "綜合 PMI 將於 2026/07/24 15:15 公布，市場關注前值 47.2、預期 48.4。",
      "event": "法國 綜合 PMI，前值 47.2、預期 48.4、實際 49.6。",
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
      "id": "macro-s-p-global-services-pmi-flash-jul-20260724",
      "type": "macro",
      "title": "服務業 PMI",
      "eventName": "服務業 PMI",
      "originalEventName": "S&P Global Services PMI Flash (Jul)",
      "sourcePublishTime": "2026/07/24 15:15 Asia/Taipei",
      "country": "法國",
      "publishTime": "2026/07/24 15:15",
      "previous": "46.8",
      "forecast": "47.5",
      "actual": "49.8",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/07/24 15:15",
      "tags": [
        "法國",
        "服務業",
        "中性"
      ],
      "summary": "服務業 PMI 將於 2026/07/24 15:15 公布，市場關注前值 46.8、預期 47.5。",
      "event": "法國 服務業 PMI，前值 46.8、預期 47.5、實際 49.8。",
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
      "id": "macro-s-p-global-manufacturing-pmi-flash-jul-20260724",
      "type": "macro",
      "title": "製造業 PMI",
      "eventName": "製造業 PMI",
      "originalEventName": "S&P Global Manufacturing PMI Flash (Jul)",
      "sourcePublishTime": "2026/07/24 15:30 Asia/Taipei",
      "country": "德國",
      "publishTime": "2026/07/24 15:30",
      "previous": "50.3",
      "forecast": "50.5",
      "actual": "52.2",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/07/24 15:30",
      "tags": [
        "德國",
        "製造業",
        "中性"
      ],
      "summary": "製造業 PMI 將於 2026/07/24 15:30 公布，市場關注前值 50.3、預期 50.5。",
      "event": "德國 製造業 PMI，前值 50.3、預期 50.5、實際 52.2。",
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
