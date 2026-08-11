window.IntelligenceOverviewData = {
  "updatedAt": "2026/08/11 18:30",
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
      "value": 67,
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
          "16 個"
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
      "id": "inst-2330-20260811",
      "type": "institutional",
      "title": "2330 台積電",
      "stockCode": "2330",
      "stockName": "台積電",
      "sector": "半導體",
      "group": "半導體",
      "institutionType": "外資",
      "direction": "連買",
      "days": 3,
      "consecutiveBuyDays": 3,
      "streaks": {
        "外資": 3,
        "投信": 3,
        "自營商": 0
      },
      "latestNetBuy": 3498,
      "buyVolume": 30290,
      "buyAmount": 720.91,
      "syncCount": 2,
      "importance": "高",
      "timestamp": "2026/08/11 18:20",
      "tags": [
        "外資",
        "連買",
        "半導體",
        "3D技術",
        "3D感測"
      ],
      "summary": "外資連買，近 10 個交易日正買合計 30,290 張，估算金額約 720.91 億元。",
      "event": "外資連買 3 日，近 10 個交易日正買合計 30,290 張；最新日外資 3,498 張、投信 357 張、自營商 -189 張。",
      "ai": "法人買盤集中在 半導體，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 52284.852,
      "yahooVerification": {
        "status": "matched",
        "source": "https://tw.stock.yahoo.com/quote/2330.TW/institutional-trading",
        "latestNetBuy": 3498,
        "days": 3,
        "latestForeign": 3498,
        "latestTrust": 357,
        "latestDealer": -189
      }
    },
    {
      "id": "inst-8112-20260811",
      "type": "institutional",
      "title": "8112 至上",
      "stockCode": "8112",
      "stockName": "至上",
      "sector": "電子通路業",
      "group": "電子通路業",
      "institutionType": "外資",
      "direction": "連買",
      "days": 8,
      "consecutiveBuyDays": 8,
      "streaks": {
        "外資": 8,
        "投信": 0,
        "自營商": 1
      },
      "latestNetBuy": 33079,
      "buyVolume": 66689,
      "buyAmount": 0,
      "syncCount": 2,
      "importance": "高",
      "timestamp": "2026/08/11 18:20",
      "tags": [
        "外資",
        "連買",
        "電子通路業",
        "OPPO",
        "鋰電池"
      ],
      "summary": "外資連買，近 10 個交易日正買合計 66,689 張，估算金額約 0.00 億元。",
      "event": "外資連買 8 日，近 10 個交易日正買合計 66,689 張；最新日外資 33,079 張、投信 -5 張、自營商 551 張。",
      "ai": "法人買盤集中在 電子通路業，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 68044.792,
      "yahooVerification": {
        "status": "matched",
        "source": "https://tw.stock.yahoo.com/quote/8112.TW/institutional-trading",
        "latestNetBuy": 33079,
        "days": 8,
        "latestForeign": 33079,
        "latestTrust": -5,
        "latestDealer": 551
      }
    },
    {
      "id": "inst-2317-20260811",
      "type": "institutional",
      "title": "2317 鴻海",
      "stockCode": "2317",
      "stockName": "鴻海",
      "sector": "其他電子業",
      "group": "其他電子業",
      "institutionType": "投信",
      "direction": "連買",
      "days": 2,
      "consecutiveBuyDays": 2,
      "streaks": {
        "外資": 0,
        "投信": 2,
        "自營商": 0
      },
      "latestNetBuy": 398,
      "buyVolume": 5791,
      "buyAmount": 15.32,
      "syncCount": 1,
      "importance": "高",
      "timestamp": "2026/08/11 18:20",
      "tags": [
        "投信",
        "連買",
        "其他電子業",
        "3D技術",
        "3D感測"
      ],
      "summary": "投信連買，近 10 個交易日正買合計 5,791 張，估算金額約 15.32 億元。",
      "event": "投信連買 2 日，近 10 個交易日正買合計 5,791 張；最新日外資 -1,139 張、投信 398 張、自營商 -79 張。",
      "ai": "法人買盤集中在 其他電子業，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 141559.416,
      "yahooVerification": {
        "status": "matched",
        "source": "https://tw.stock.yahoo.com/quote/2317.TW/institutional-trading",
        "latestNetBuy": 398,
        "days": 2,
        "latestForeign": -1139,
        "latestTrust": 398,
        "latestDealer": -79
      }
    },
    {
      "id": "inst-2303-20260811",
      "type": "institutional",
      "title": "2303 聯電",
      "stockCode": "2303",
      "stockName": "聯電",
      "sector": "半導體",
      "group": "半導體",
      "institutionType": "外資",
      "direction": "連買",
      "days": 2,
      "consecutiveBuyDays": 2,
      "streaks": {
        "外資": 2,
        "投信": 0,
        "自營商": 2
      },
      "latestNetBuy": 9600,
      "buyVolume": 90663,
      "buyAmount": 111.52,
      "syncCount": 2,
      "importance": "高",
      "timestamp": "2026/08/11 18:20",
      "tags": [
        "外資",
        "連買",
        "半導體",
        "手機",
        "車用電子相關"
      ],
      "summary": "外資連買，近 10 個交易日正買合計 90,663 張，估算金額約 111.52 億元。",
      "event": "外資連買 2 日，近 10 個交易日正買合計 90,663 張；最新日外資 9,600 張、投信 -3,983 張、自營商 1,007 張。",
      "ai": "法人買盤集中在 半導體，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 118601.532,
      "yahooVerification": {
        "status": "matched",
        "source": "https://tw.stock.yahoo.com/quote/2303.TW/institutional-trading",
        "latestNetBuy": 9600,
        "days": 2,
        "latestForeign": 9600,
        "latestTrust": -3983,
        "latestDealer": 1007
      }
    },
    {
      "id": "macro-richmond-fed-manufacturing-shipments-index-jul-20260728",
      "type": "macro",
      "title": "Richmond Fed Manufacturing Shipments Index (Jul)",
      "eventName": "Richmond Fed Manufacturing Shipments Index (Jul)",
      "originalEventName": "Richmond Fed Manufacturing Shipments Index (Jul)",
      "sourcePublishTime": "2026/07/28 22:00 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/07/28 22:00",
      "previous": "4",
      "forecast": "—",
      "actual": "8",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響全球資金成本、美元走勢與風險資產評價。",
      "importance": "中高",
      "timestamp": "2026/07/28 22:00",
      "tags": [
        "美國",
        "Richmond",
        "中性"
      ],
      "summary": "Richmond Fed Manufacturing Shipments Index (Jul) 將於 2026/07/28 22:00 公布，市場關注前值 4、預期 —。",
      "event": "美國 Richmond Fed Manufacturing Shipments Index (Jul)，前值 4、預期 —、實際 8。",
      "ai": "目前 AI 判斷為中性觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響全球資金成本、美元走勢與風險資產評價。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "https://www.richmondfed.org",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    },
    {
      "id": "macro-richmond-fed-manufacturing-index-jul-20260728",
      "type": "macro",
      "title": "Richmond Fed Manufacturing Index (Jul)",
      "eventName": "Richmond Fed Manufacturing Index (Jul)",
      "originalEventName": "Richmond Fed Manufacturing Index (Jul)",
      "sourcePublishTime": "2026/07/28 22:00 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/07/28 22:00",
      "previous": "4",
      "forecast": "10",
      "actual": "5",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏空",
      "impact": "影響全球資金成本、美元走勢與風險資產評價。",
      "importance": "中高",
      "timestamp": "2026/07/28 22:00",
      "tags": [
        "美國",
        "Richmond",
        "偏空"
      ],
      "summary": "Richmond Fed Manufacturing Index (Jul) 將於 2026/07/28 22:00 公布，市場關注前值 4、預期 10。",
      "event": "美國 Richmond Fed Manufacturing Index (Jul)，前值 4、預期 10、實際 5。",
      "ai": "目前 AI 判斷為偏空觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響全球資金成本、美元走勢與風險資產評價。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "https://www.richmondfed.org",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    },
    {
      "id": "macro-adp-employment-change-weekly-20260728",
      "type": "macro",
      "title": "ADP 就業人數",
      "eventName": "ADP 就業人數",
      "originalEventName": "ADP Employment Change Weekly",
      "sourcePublishTime": "2026/07/28 20:15 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/07/28 20:15",
      "previous": "16.25",
      "forecast": "—",
      "actual": "15",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/07/28 20:15",
      "tags": [
        "美國",
        "ADP",
        "中性"
      ],
      "summary": "ADP 就業人數 將於 2026/07/28 20:15 公布，市場關注前值 16.25、預期 —。",
      "event": "美國 ADP 就業人數，前值 16.25、預期 —、實際 15。",
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
      "id": "macro-unemployment-benefit-claims-jun-20260728",
      "type": "macro",
      "title": "Unemployment Benefit Claims (Jun)",
      "eventName": "Unemployment Benefit Claims (Jun)",
      "originalEventName": "Unemployment Benefit Claims (Jun)",
      "sourcePublishTime": "2026/07/28 18:00 Asia/Taipei",
      "country": "法國",
      "publishTime": "2026/07/28 18:00",
      "previous": "15.5",
      "forecast": "—",
      "actual": "5.9",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響就業強弱、薪資通膨與聯準會政策預期。",
      "importance": "中高",
      "timestamp": "2026/07/28 18:00",
      "tags": [
        "法國",
        "Unemployment",
        "中性"
      ],
      "summary": "Unemployment Benefit Claims (Jun) 將於 2026/07/28 18:00 公布，市場關注前值 15.5、預期 —。",
      "event": "法國 Unemployment Benefit Claims (Jun)，前值 15.5、預期 —、實際 5.9。",
      "ai": "目前 AI 判斷為中性觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響就業強弱、薪資通膨與聯準會政策預期。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "https://dares.travail-emploi.gouv.fr",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    }
  ],
  "macroEvents": [
    {
      "id": "macro-unemployment-benefit-claims-jun-20260728",
      "type": "macro",
      "title": "Unemployment Benefit Claims (Jun)",
      "eventName": "Unemployment Benefit Claims (Jun)",
      "originalEventName": "Unemployment Benefit Claims (Jun)",
      "sourcePublishTime": "2026/07/28 18:00 Asia/Taipei",
      "country": "法國",
      "publishTime": "2026/07/28 18:00",
      "previous": "15.5",
      "forecast": "—",
      "actual": "5.9",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響就業強弱、薪資通膨與聯準會政策預期。",
      "importance": "中高",
      "timestamp": "2026/07/28 18:00",
      "tags": [
        "法國",
        "Unemployment",
        "中性"
      ],
      "summary": "Unemployment Benefit Claims (Jun) 將於 2026/07/28 18:00 公布，市場關注前值 15.5、預期 —。",
      "event": "法國 Unemployment Benefit Claims (Jun)，前值 15.5、預期 —、實際 5.9。",
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
      "id": "macro-adp-employment-change-weekly-20260728",
      "type": "macro",
      "title": "ADP 就業人數",
      "eventName": "ADP 就業人數",
      "originalEventName": "ADP Employment Change Weekly",
      "sourcePublishTime": "2026/07/28 20:15 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/07/28 20:15",
      "previous": "16.25",
      "forecast": "—",
      "actual": "15",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/07/28 20:15",
      "tags": [
        "美國",
        "ADP",
        "中性"
      ],
      "summary": "ADP 就業人數 將於 2026/07/28 20:15 公布，市場關注前值 16.25、預期 —。",
      "event": "美國 ADP 就業人數，前值 16.25、預期 —、實際 15。",
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
      "id": "macro-richmond-fed-manufacturing-shipments-index-jul-20260728",
      "type": "macro",
      "title": "Richmond Fed Manufacturing Shipments Index (Jul)",
      "eventName": "Richmond Fed Manufacturing Shipments Index (Jul)",
      "originalEventName": "Richmond Fed Manufacturing Shipments Index (Jul)",
      "sourcePublishTime": "2026/07/28 22:00 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/07/28 22:00",
      "previous": "4",
      "forecast": "—",
      "actual": "8",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響全球資金成本、美元走勢與風險資產評價。",
      "importance": "中高",
      "timestamp": "2026/07/28 22:00",
      "tags": [
        "美國",
        "Richmond",
        "中性"
      ],
      "summary": "Richmond Fed Manufacturing Shipments Index (Jul) 將於 2026/07/28 22:00 公布，市場關注前值 4、預期 —。",
      "event": "美國 Richmond Fed Manufacturing Shipments Index (Jul)，前值 4、預期 —、實際 8。",
      "ai": "目前 AI 判斷為中性觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響全球資金成本、美元走勢與風險資產評價。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "https://www.richmondfed.org",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    },
    {
      "id": "macro-richmond-fed-manufacturing-index-jul-20260728",
      "type": "macro",
      "title": "Richmond Fed Manufacturing Index (Jul)",
      "eventName": "Richmond Fed Manufacturing Index (Jul)",
      "originalEventName": "Richmond Fed Manufacturing Index (Jul)",
      "sourcePublishTime": "2026/07/28 22:00 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/07/28 22:00",
      "previous": "4",
      "forecast": "10",
      "actual": "5",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏空",
      "impact": "影響全球資金成本、美元走勢與風險資產評價。",
      "importance": "中高",
      "timestamp": "2026/07/28 22:00",
      "tags": [
        "美國",
        "Richmond",
        "偏空"
      ],
      "summary": "Richmond Fed Manufacturing Index (Jul) 將於 2026/07/28 22:00 公布，市場關注前值 4、預期 10。",
      "event": "美國 Richmond Fed Manufacturing Index (Jul)，前值 4、預期 10、實際 5。",
      "ai": "目前 AI 判斷為偏空觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響全球資金成本、美元走勢與風險資產評價。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "https://www.richmondfed.org",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    },
    {
      "id": "macro-fed-interest-rate-decision-20260730",
      "type": "macro",
      "title": "FOMC 利率決議",
      "eventName": "FOMC 利率決議",
      "originalEventName": "Fed Interest Rate Decision",
      "sourcePublishTime": "2026/07/30 02:00 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/07/30 02:00",
      "previous": "3.75",
      "forecast": "3.75",
      "actual": "3.75",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響全球資金成本、美元走勢與風險資產評價。",
      "importance": "中高",
      "timestamp": "2026/07/30 02:00",
      "tags": [
        "美國",
        "FOMC",
        "中性"
      ],
      "summary": "FOMC 利率決議 將於 2026/07/30 02:00 公布，市場關注前值 3.75、預期 3.75。",
      "event": "美國 FOMC 利率決議，前值 3.75、預期 3.75、實際 3.75。",
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
      "id": "macro-gdp-growth-rate-yoy-prel-q2-20260730",
      "type": "macro",
      "title": "GDP 經濟成長率",
      "eventName": "GDP 經濟成長率",
      "originalEventName": "GDP Growth Rate YoY Prel (Q2)",
      "sourcePublishTime": "2026/07/30 13:30 Asia/Taipei",
      "country": "法國",
      "publishTime": "2026/07/30 13:30",
      "previous": "0.8",
      "forecast": "0.8",
      "actual": "0.7",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏空",
      "impact": "影響全球資金成本、美元走勢與風險資產評價。",
      "importance": "高",
      "timestamp": "2026/07/30 13:30",
      "tags": [
        "法國",
        "GDP",
        "偏空"
      ],
      "summary": "GDP 經濟成長率 將於 2026/07/30 13:30 公布，市場關注前值 0.8、預期 0.8。",
      "event": "法國 GDP 經濟成長率，前值 0.8、預期 0.8、實際 0.7。",
      "ai": "目前 AI 判斷為偏空觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響全球資金成本、美元走勢與風險資產評價。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar / 鉅亨網全球經濟指標",
      "sourceUrl": "https://www.insee.fr",
      "sourceList": [
        "TradingView Economic Calendar",
        "鉅亨網全球經濟指標"
      ]
    },
    {
      "id": "macro-hesse-cpi-yoy-jul-20260730",
      "type": "macro",
      "title": "消費者物價指數 CPI",
      "eventName": "消費者物價指數 CPI",
      "originalEventName": "Hesse CPI YoY (Jul)",
      "sourcePublishTime": "2026/07/30 16:00 Asia/Taipei",
      "country": "德國",
      "publishTime": "2026/07/30 16:00",
      "previous": "2.3",
      "forecast": "—",
      "actual": "2.7",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "importance": "高",
      "timestamp": "2026/07/30 16:00",
      "tags": [
        "德國",
        "消費者物價指數",
        "中性"
      ],
      "summary": "消費者物價指數 CPI 將於 2026/07/30 16:00 公布，市場關注前值 2.3、預期 —。",
      "event": "德國 消費者物價指數 CPI，前值 2.3、預期 —、實際 2.7。",
      "ai": "目前 AI 判斷為中性觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "https://statistik.hessen.de/",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    },
    {
      "id": "macro-gdp-growth-rate-qoq-flash-q2-20260730",
      "type": "macro",
      "title": "GDP 經濟成長率",
      "eventName": "GDP 經濟成長率",
      "originalEventName": "GDP Growth Rate QoQ Flash (Q2)",
      "sourcePublishTime": "2026/07/30 16:00 Asia/Taipei",
      "country": "德國",
      "publishTime": "2026/07/30 16:00",
      "previous": "0.4",
      "forecast": "0.1",
      "actual": "0.2",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響全球資金成本、美元走勢與風險資產評價。",
      "importance": "高",
      "timestamp": "2026/07/30 16:00",
      "tags": [
        "德國",
        "GDP",
        "偏多"
      ],
      "summary": "GDP 經濟成長率 將於 2026/07/30 16:00 公布，市場關注前值 0.4、預期 0.1。",
      "event": "德國 GDP 經濟成長率，前值 0.4、預期 0.1、實際 0.2。",
      "ai": "目前 AI 判斷為偏多觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響全球資金成本、美元走勢與風險資產評價。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar / 鉅亨網全球經濟指標",
      "sourceUrl": "https://www.destatis.de",
      "sourceList": [
        "TradingView Economic Calendar",
        "鉅亨網全球經濟指標"
      ]
    }
  ]
};
