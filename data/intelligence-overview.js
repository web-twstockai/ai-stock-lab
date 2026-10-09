window.IntelligenceOverviewData = {
  "updatedAt": "2026/10/08 18:30",
  "status": "運作中",
  "cards": [
    {
      "label": "今日偵測情報",
      "value": 268,
      "unit": "筆",
      "icon": "file"
    },
    {
      "label": "高重要度訊號",
      "value": 78,
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
      "value": "ECB Non-Monetary Policy Meeting",
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
          "14 筆"
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
          "14 個"
        ],
        [
          "下一事件",
          "ECB Non-Monetary Policy Meeting"
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
      "id": "inst-2891-20261008",
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
      "latestNetBuy": 3187,
      "buyVolume": 17063,
      "buyAmount": 0,
      "syncCount": 2,
      "importance": "高",
      "timestamp": "2026/10/08 18:20",
      "tags": [
        "投信",
        "連買",
        "金融保險",
        "金融業",
        "銀行"
      ],
      "summary": "投信連買，近 10 個交易日正買合計 17,063 張，估算金額約 0.00 億元。",
      "event": "投信連買 10 日，近 10 個交易日正買合計 17,063 張；最新日外資 -16,935 張、投信 3,187 張、自營商 1,309 張。",
      "ai": "法人買盤集中在 金融保險，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 39828.701,
      "yahooVerification": {
        "status": "matched",
        "source": "https://tw.stock.yahoo.com/quote/2891.TW/institutional-trading",
        "latestNetBuy": 3187,
        "days": 10,
        "latestForeign": -16935,
        "latestTrust": 3187,
        "latestDealer": 1309
      }
    },
    {
      "id": "inst-1303-20261008",
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
        "外資": 0,
        "投信": 4,
        "自營商": 0
      },
      "latestNetBuy": 877,
      "buyVolume": 14784,
      "buyAmount": 45.83,
      "syncCount": 1,
      "importance": "高",
      "timestamp": "2026/10/08 18:20",
      "tags": [
        "投信",
        "連買",
        "塑膠工業",
        "APPLE概念",
        "越南設廠"
      ],
      "summary": "投信連買，近 10 個交易日正買合計 14,784 張，估算金額約 45.83 億元。",
      "event": "投信連買 4 日，近 10 個交易日正買合計 14,784 張；最新日外資 -12,940 張、投信 877 張、自營商 -550 張。",
      "ai": "法人買盤集中在 塑膠工業，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 103950.344,
      "yahooVerification": {
        "status": "matched",
        "source": "https://tw.stock.yahoo.com/quote/1303.TW/institutional-trading",
        "latestNetBuy": 877,
        "days": 4,
        "latestForeign": -12940,
        "latestTrust": 877,
        "latestDealer": -550
      }
    },
    {
      "id": "inst-1216-20261008",
      "type": "institutional",
      "title": "1216 統一",
      "stockCode": "1216",
      "stockName": "統一",
      "sector": "食品工業",
      "group": "食品工業",
      "institutionType": "投信",
      "direction": "同步買超",
      "days": 3,
      "consecutiveBuyDays": 3,
      "streaks": {
        "外資": 2,
        "投信": 3,
        "自營商": 3
      },
      "latestNetBuy": 1911,
      "buyVolume": 5041,
      "buyAmount": 0,
      "syncCount": 3,
      "importance": "高",
      "timestamp": "2026/10/08 18:20",
      "tags": [
        "投信",
        "同步買超",
        "食品工業",
        "S&P 台商收成指數",
        "中國"
      ],
      "summary": "投信同步買超，近 10 個交易日正買合計 5,041 張，估算金額約 0.00 億元。",
      "event": "投信連買 3 日，近 10 個交易日正買合計 5,041 張；最新日外資 4,818 張、投信 1,911 張、自營商 387 張。",
      "ai": "法人買盤集中在 食品工業，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 24810.711,
      "yahooVerification": {
        "status": "matched",
        "source": "https://tw.stock.yahoo.com/quote/1216.TW/institutional-trading",
        "latestNetBuy": 1911,
        "days": 3,
        "latestForeign": 4818,
        "latestTrust": 1911,
        "latestDealer": 387
      }
    },
    {
      "id": "inst-2330-20261008",
      "type": "institutional",
      "title": "2330 台積電",
      "stockCode": "2330",
      "stockName": "台積電",
      "sector": "半導體",
      "group": "半導體",
      "institutionType": "自營商",
      "direction": "連買",
      "days": 10,
      "consecutiveBuyDays": 10,
      "streaks": {
        "外資": 0,
        "投信": 8,
        "自營商": 10
      },
      "latestNetBuy": 510,
      "buyVolume": 3848,
      "buyAmount": 98.13,
      "syncCount": 2,
      "importance": "高",
      "timestamp": "2026/10/08 18:20",
      "tags": [
        "自營商",
        "連買",
        "半導體",
        "3D技術",
        "3D感測"
      ],
      "summary": "自營商連買，近 10 個交易日正買合計 3,848 張，估算金額約 98.13 億元。",
      "event": "自營商連買 10 日，近 10 個交易日正買合計 3,848 張；最新日外資 -12,303 張、投信 793 張、自營商 510 張。",
      "ai": "法人買盤集中在 半導體，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 28379.436,
      "yahooVerification": {
        "status": "days-different",
        "source": "https://tw.stock.yahoo.com/quote/2330.TW/institutional-trading",
        "latestNetBuy": 510,
        "days": 17,
        "latestForeign": -12303,
        "latestTrust": 793,
        "latestDealer": 510
      }
    },
    {
      "id": "macro-private-non-farm-payrolls-qoq-final-q2-20260925",
      "type": "macro",
      "title": "非農就業人數",
      "eventName": "非農就業人數",
      "originalEventName": "Private Non Farm Payrolls QoQ Final (Q2)",
      "sourcePublishTime": "2026/09/25 14:45 Asia/Taipei",
      "country": "法國",
      "publishTime": "2026/09/25 14:45",
      "previous": "—",
      "forecast": "-0.1",
      "actual": "-0.1",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響就業強弱、薪資通膨與聯準會政策預期。",
      "importance": "高",
      "timestamp": "2026/09/25 14:45",
      "tags": [
        "法國",
        "非農就業人數",
        "中性"
      ],
      "summary": "非農就業人數 將於 2026/09/25 14:45 公布，市場關注前值 —、預期 -0.1。",
      "event": "法國 非農就業人數，前值 —、預期 -0.1、實際 -0.1。",
      "ai": "目前 AI 判斷為中性觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響就業強弱、薪資通膨與聯準會政策預期。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "https://www.insee.fr",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    },
    {
      "id": "macro-kansas-fed-composite-index-sep-20260924",
      "type": "macro",
      "title": "Kansas Fed Composite Index (Sep)",
      "eventName": "Kansas Fed Composite Index (Sep)",
      "originalEventName": "Kansas Fed Composite Index (Sep)",
      "sourcePublishTime": "2026/09/24 23:00 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/09/24 23:00",
      "previous": "10",
      "forecast": "—",
      "actual": "14",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響全球資金成本、美元走勢與風險資產評價。",
      "importance": "中高",
      "timestamp": "2026/09/24 23:00",
      "tags": [
        "美國",
        "Kansas",
        "中性"
      ],
      "summary": "Kansas Fed Composite Index (Sep) 將於 2026/09/24 23:00 公布，市場關注前值 10、預期 —。",
      "event": "美國 Kansas Fed Composite Index (Sep)，前值 10、預期 —、實際 14。",
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
      "id": "macro-kansas-fed-manufacturing-index-sep-20260924",
      "type": "macro",
      "title": "Kansas Fed Manufacturing Index (Sep)",
      "eventName": "Kansas Fed Manufacturing Index (Sep)",
      "originalEventName": "Kansas Fed Manufacturing Index (Sep)",
      "sourcePublishTime": "2026/09/24 23:00 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/09/24 23:00",
      "previous": "17",
      "forecast": "—",
      "actual": "20",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響全球資金成本、美元走勢與風險資產評價。",
      "importance": "中高",
      "timestamp": "2026/09/24 23:00",
      "tags": [
        "美國",
        "Kansas",
        "中性"
      ],
      "summary": "Kansas Fed Manufacturing Index (Sep) 將於 2026/09/24 23:00 公布，市場關注前值 17、預期 —。",
      "event": "美國 Kansas Fed Manufacturing Index (Sep)，前值 17、預期 —、實際 20。",
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
      "id": "macro-jobless-claims-4-week-average-sep-19-20260924",
      "type": "macro",
      "title": "初領失業救濟金人數",
      "eventName": "初領失業救濟金人數",
      "originalEventName": "Jobless Claims 4-week Average (Sep/19)",
      "sourcePublishTime": "2026/09/24 20:30 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/09/24 20:30",
      "previous": "204",
      "forecast": "1750",
      "actual": "202.25",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響就業強弱、薪資通膨與聯準會政策預期。",
      "importance": "中高",
      "timestamp": "2026/09/24 20:30",
      "tags": [
        "美國",
        "初領失業救濟金人數",
        "中性"
      ],
      "summary": "初領失業救濟金人數 將於 2026/09/24 20:30 公布，市場關注前值 204、預期 —。",
      "event": "美國 初領失業救濟金人數，前值 204、預期 —、實際 202.25。",
      "ai": "目前 AI 判斷為中性觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響就業強弱、薪資通膨與聯準會政策預期。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "http://www.dol.gov",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    }
  ],
  "macroEvents": [
    {
      "id": "macro-jobless-claims-4-week-average-sep-19-20260924",
      "type": "macro",
      "title": "初領失業救濟金人數",
      "eventName": "初領失業救濟金人數",
      "originalEventName": "Jobless Claims 4-week Average (Sep/19)",
      "sourcePublishTime": "2026/09/24 20:30 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/09/24 20:30",
      "previous": "204",
      "forecast": "1750",
      "actual": "202.25",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響就業強弱、薪資通膨與聯準會政策預期。",
      "importance": "中高",
      "timestamp": "2026/09/24 20:30",
      "tags": [
        "美國",
        "初領失業救濟金人數",
        "中性"
      ],
      "summary": "初領失業救濟金人數 將於 2026/09/24 20:30 公布，市場關注前值 204、預期 —。",
      "event": "美國 初領失業救濟金人數，前值 204、預期 —、實際 202.25。",
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
      "id": "macro-kansas-fed-composite-index-sep-20260924",
      "type": "macro",
      "title": "Kansas Fed Composite Index (Sep)",
      "eventName": "Kansas Fed Composite Index (Sep)",
      "originalEventName": "Kansas Fed Composite Index (Sep)",
      "sourcePublishTime": "2026/09/24 23:00 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/09/24 23:00",
      "previous": "10",
      "forecast": "—",
      "actual": "14",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響全球資金成本、美元走勢與風險資產評價。",
      "importance": "中高",
      "timestamp": "2026/09/24 23:00",
      "tags": [
        "美國",
        "Kansas",
        "中性"
      ],
      "summary": "Kansas Fed Composite Index (Sep) 將於 2026/09/24 23:00 公布，市場關注前值 10、預期 —。",
      "event": "美國 Kansas Fed Composite Index (Sep)，前值 10、預期 —、實際 14。",
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
      "id": "macro-kansas-fed-manufacturing-index-sep-20260924",
      "type": "macro",
      "title": "Kansas Fed Manufacturing Index (Sep)",
      "eventName": "Kansas Fed Manufacturing Index (Sep)",
      "originalEventName": "Kansas Fed Manufacturing Index (Sep)",
      "sourcePublishTime": "2026/09/24 23:00 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/09/24 23:00",
      "previous": "17",
      "forecast": "—",
      "actual": "20",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響全球資金成本、美元走勢與風險資產評價。",
      "importance": "中高",
      "timestamp": "2026/09/24 23:00",
      "tags": [
        "美國",
        "Kansas",
        "中性"
      ],
      "summary": "Kansas Fed Manufacturing Index (Sep) 將於 2026/09/24 23:00 公布，市場關注前值 17、預期 —。",
      "event": "美國 Kansas Fed Manufacturing Index (Sep)，前值 17、預期 —、實際 20。",
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
      "id": "macro-private-non-farm-payrolls-qoq-final-q2-20260925",
      "type": "macro",
      "title": "非農就業人數",
      "eventName": "非農就業人數",
      "originalEventName": "Private Non Farm Payrolls QoQ Final (Q2)",
      "sourcePublishTime": "2026/09/25 14:45 Asia/Taipei",
      "country": "法國",
      "publishTime": "2026/09/25 14:45",
      "previous": "—",
      "forecast": "-0.1",
      "actual": "-0.1",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響就業強弱、薪資通膨與聯準會政策預期。",
      "importance": "高",
      "timestamp": "2026/09/25 14:45",
      "tags": [
        "法國",
        "非農就業人數",
        "中性"
      ],
      "summary": "非農就業人數 將於 2026/09/25 14:45 公布，市場關注前值 —、預期 -0.1。",
      "event": "法國 非農就業人數，前值 —、預期 -0.1、實際 -0.1。",
      "ai": "目前 AI 判斷為中性觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響就業強弱、薪資通膨與聯準會政策預期。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "https://www.insee.fr",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    },
    {
      "id": "macro-dallas-fed-manufacturing-index-sep-20260928",
      "type": "macro",
      "title": "Dallas Fed Manufacturing Index (Sep)",
      "eventName": "Dallas Fed Manufacturing Index (Sep)",
      "originalEventName": "Dallas Fed Manufacturing Index (Sep)",
      "sourcePublishTime": "2026/09/28 22:30 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/09/28 22:30",
      "previous": "11.6",
      "forecast": "—",
      "actual": "9.8",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響全球資金成本、美元走勢與風險資產評價。",
      "importance": "中高",
      "timestamp": "2026/09/28 22:30",
      "tags": [
        "美國",
        "Dallas",
        "中性"
      ],
      "summary": "Dallas Fed Manufacturing Index (Sep) 將於 2026/09/28 22:30 公布，市場關注前值 11.6、預期 —。",
      "event": "美國 Dallas Fed Manufacturing Index (Sep)，前值 11.6、預期 —、實際 9.8。",
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
      "id": "macro-brc-shop-price-inflation-sep-20260929",
      "type": "macro",
      "title": "BRC Shop Price Inflation (Sep)",
      "eventName": "BRC Shop Price Inflation (Sep)",
      "originalEventName": "BRC Shop Price Inflation (Sep)",
      "sourcePublishTime": "2026/09/29 07:01 Asia/Taipei",
      "country": "英國",
      "publishTime": "2026/09/29 07:01",
      "previous": "1.5",
      "forecast": "1.5",
      "actual": "1.4",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "importance": "中高",
      "timestamp": "2026/09/29 07:01",
      "tags": [
        "英國",
        "BRC",
        "偏多"
      ],
      "summary": "BRC Shop Price Inflation (Sep) 將於 2026/09/29 07:01 公布，市場關注前值 1.5、預期 1.5。",
      "event": "英國 BRC Shop Price Inflation (Sep)，前值 1.5、預期 1.5、實際 1.4。",
      "ai": "目前 AI 判斷為偏多觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "https://brc.org.uk/",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    },
    {
      "id": "macro-services-sentiment-sep-20260929",
      "type": "macro",
      "title": "Services Sentiment (Sep)",
      "eventName": "Services Sentiment (Sep)",
      "originalEventName": "Services Sentiment (Sep)",
      "sourcePublishTime": "2026/09/29 17:00 Asia/Taipei",
      "country": "歐元區",
      "publishTime": "2026/09/29 17:00",
      "previous": "5.6",
      "forecast": "6.5",
      "actual": "6.1",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏空",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/09/29 17:00",
      "tags": [
        "歐元區",
        "Services",
        "偏空"
      ],
      "summary": "Services Sentiment (Sep) 將於 2026/09/29 17:00 公布，市場關注前值 5.6、預期 6.5。",
      "event": "歐元區 Services Sentiment (Sep)，前值 5.6、預期 6.5、實際 6.1。",
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
      "id": "macro-unemployment-benefit-claims-aug-20260929",
      "type": "macro",
      "title": "Unemployment Benefit Claims (Aug)",
      "eventName": "Unemployment Benefit Claims (Aug)",
      "originalEventName": "Unemployment Benefit Claims (Aug)",
      "sourcePublishTime": "2026/09/29 18:00 Asia/Taipei",
      "country": "法國",
      "publishTime": "2026/09/29 18:00",
      "previous": "21.5",
      "forecast": "—",
      "actual": "-61.3",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響就業強弱、薪資通膨與聯準會政策預期。",
      "importance": "中高",
      "timestamp": "2026/09/29 18:00",
      "tags": [
        "法國",
        "Unemployment",
        "中性"
      ],
      "summary": "Unemployment Benefit Claims (Aug) 將於 2026/09/29 18:00 公布，市場關注前值 21.5、預期 —。",
      "event": "法國 Unemployment Benefit Claims (Aug)，前值 21.5、預期 —、實際 -61.3。",
      "ai": "目前 AI 判斷為中性觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響就業強弱、薪資通膨與聯準會政策預期。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "https://dares.travail-emploi.gouv.fr",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    }
  ]
};
