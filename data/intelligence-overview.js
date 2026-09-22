window.IntelligenceOverviewData = {
  "updatedAt": "2026/09/22 07:46",
  "status": "運作中",
  "cards": [
    {
      "label": "今日偵測情報",
      "value": 225,
      "unit": "筆",
      "icon": "file"
    },
    {
      "label": "高重要度訊號",
      "value": 59,
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
      "value": "ADP 就業人數",
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
          "23 筆"
        ],
        [
          "三大法人同步買",
          "27 筆"
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
          "26 個"
        ],
        [
          "下一事件",
          "ADP 就業人數"
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
      "id": "inst-1303-20260921",
      "type": "institutional",
      "title": "1303 南亞",
      "stockCode": "1303",
      "stockName": "南亞",
      "sector": "塑膠工業",
      "group": "塑膠工業",
      "institutionType": "投信",
      "direction": "同步買超",
      "days": 10,
      "consecutiveBuyDays": 10,
      "streaks": {
        "外資": 1,
        "投信": 10,
        "自營商": 4
      },
      "latestNetBuy": 3134,
      "buyVolume": 39254,
      "buyAmount": 93.42,
      "syncCount": 3,
      "importance": "高",
      "timestamp": "2026/09/21 18:20",
      "tags": [
        "投信",
        "同步買超",
        "塑膠工業",
        "APPLE概念",
        "越南設廠"
      ],
      "summary": "投信同步買超，近 10 個交易日正買合計 39,254 張，估算金額約 93.42 億元。",
      "event": "投信連買 10 日，近 10 個交易日正買合計 39,254 張；最新日外資 2,173 張、投信 3,134 張、自營商 402 張。",
      "ai": "法人買盤集中在 塑膠工業，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 50345.845,
      "yahooVerification": {
        "status": "days-different",
        "source": "https://tw.stock.yahoo.com/quote/1303.TW/institutional-trading",
        "latestNetBuy": 3134,
        "days": 11,
        "latestForeign": 2173,
        "latestTrust": 3134,
        "latestDealer": 402
      }
    },
    {
      "id": "inst-2891-20260921",
      "type": "institutional",
      "title": "2891 中信金",
      "stockCode": "2891",
      "stockName": "中信金",
      "sector": "金融保險",
      "group": "金融保險",
      "institutionType": "外資",
      "direction": "同步買超",
      "days": 7,
      "consecutiveBuyDays": 7,
      "streaks": {
        "外資": 7,
        "投信": 1,
        "自營商": 2
      },
      "latestNetBuy": 5840,
      "buyVolume": 35549,
      "buyAmount": 0,
      "syncCount": 3,
      "importance": "高",
      "timestamp": "2026/09/21 18:20",
      "tags": [
        "外資",
        "同步買超",
        "金融保險",
        "金融業",
        "銀行"
      ],
      "summary": "外資同步買超，近 10 個交易日正買合計 35,549 張，估算金額約 0.00 億元。",
      "event": "外資連買 7 日，近 10 個交易日正買合計 35,549 張；最新日外資 5,840 張、投信 1,043 張、自營商 245 張。",
      "ai": "法人買盤集中在 金融保險，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 69247.492,
      "yahooVerification": {
        "status": "matched",
        "source": "https://tw.stock.yahoo.com/quote/2891.TW/institutional-trading",
        "latestNetBuy": 5840,
        "days": 7,
        "latestForeign": 5840,
        "latestTrust": 1043,
        "latestDealer": 245
      }
    },
    {
      "id": "inst-2382-20260921",
      "type": "institutional",
      "title": "2382 廣達",
      "stockCode": "2382",
      "stockName": "廣達",
      "sector": "電腦及週邊設備",
      "group": "電腦及週邊設備",
      "institutionType": "投信",
      "direction": "連買",
      "days": 7,
      "consecutiveBuyDays": 7,
      "streaks": {
        "外資": 0,
        "投信": 7,
        "自營商": 7
      },
      "latestNetBuy": 1675,
      "buyVolume": 15615,
      "buyAmount": 53.56,
      "syncCount": 2,
      "importance": "高",
      "timestamp": "2026/09/21 18:20",
      "tags": [
        "投信",
        "連買",
        "電腦及週邊設備",
        "5G",
        "APPLE概念"
      ],
      "summary": "投信連買，近 10 個交易日正買合計 15,615 張，估算金額約 53.56 億元。",
      "event": "投信連買 7 日，近 10 個交易日正買合計 15,615 張；最新日外資 -1,255 張、投信 1,675 張、自營商 95 張。",
      "ai": "法人買盤集中在 電腦及週邊設備，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 36985.774,
      "yahooVerification": {
        "status": "matched",
        "source": "https://tw.stock.yahoo.com/quote/2382.TW/institutional-trading",
        "latestNetBuy": 1675,
        "days": 7,
        "latestForeign": -1255,
        "latestTrust": 1675,
        "latestDealer": 95
      }
    },
    {
      "id": "inst-2303-20260921",
      "type": "institutional",
      "title": "2303 聯電",
      "stockCode": "2303",
      "stockName": "聯電",
      "sector": "半導體",
      "group": "半導體",
      "institutionType": "投信",
      "direction": "連買",
      "days": 10,
      "consecutiveBuyDays": 10,
      "streaks": {
        "外資": 0,
        "投信": 10,
        "自營商": 4
      },
      "latestNetBuy": 5633,
      "buyVolume": 88930,
      "buyAmount": 138.73,
      "syncCount": 2,
      "importance": "高",
      "timestamp": "2026/09/21 18:20",
      "tags": [
        "投信",
        "連買",
        "半導體",
        "手機",
        "車用電子相關"
      ],
      "summary": "投信連買，近 10 個交易日正買合計 88,930 張，估算金額約 138.73 億元。",
      "event": "投信連買 10 日，近 10 個交易日正買合計 88,930 張；最新日外資 -5,726 張、投信 5,633 張、自營商 3,607 張。",
      "ai": "法人買盤集中在 半導體，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 177237.15,
      "yahooVerification": {
        "status": "days-different",
        "source": "https://tw.stock.yahoo.com/quote/2303.TW/institutional-trading",
        "latestNetBuy": 5633,
        "days": 12,
        "latestForeign": -5726,
        "latestTrust": 5633,
        "latestDealer": 3607
      }
    },
    {
      "id": "macro-ecb-interest-rate-decision-20260910",
      "type": "macro",
      "title": "ECB 利率決議",
      "eventName": "ECB 利率決議",
      "originalEventName": "ECB Interest Rate Decision",
      "sourcePublishTime": "2026/09/10 20:15 Asia/Taipei",
      "country": "歐元區",
      "publishTime": "2026/09/10 20:15",
      "previous": "2.4",
      "forecast": "2.65",
      "actual": "2.65",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響全球資金成本、美元走勢與風險資產評價。",
      "importance": "中高",
      "timestamp": "2026/09/10 20:15",
      "tags": [
        "歐元區",
        "ECB",
        "中性"
      ],
      "summary": "ECB 利率決議 將於 2026/09/10 20:15 公布，市場關注前值 2.4、預期 2.65。",
      "event": "歐元區 ECB 利率決議，前值 2.4、預期 2.65、實際 2.65。",
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
      "id": "macro-harmonised-inflation-rate-yoy-final-aug-20260910",
      "type": "macro",
      "title": "通膨率",
      "eventName": "通膨率",
      "originalEventName": "Harmonised Inflation Rate YoY Final (Aug)",
      "sourcePublishTime": "2026/09/10 14:00 Asia/Taipei",
      "country": "德國",
      "publishTime": "2026/09/10 14:00",
      "previous": "2.8",
      "forecast": "2.9",
      "actual": "2.9",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "importance": "中高",
      "timestamp": "2026/09/10 14:00",
      "tags": [
        "德國",
        "通膨率",
        "中性"
      ],
      "summary": "通膨率 將於 2026/09/10 14:00 公布，市場關注前值 2.8、預期 2.9。",
      "event": "德國 通膨率，前值 2.8、預期 2.9、實際 2.9。",
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
      "id": "macro-adp-employment-change-weekly-20260909",
      "type": "macro",
      "title": "ADP 就業人數",
      "eventName": "ADP 就業人數",
      "originalEventName": "ADP Employment Change Weekly",
      "sourcePublishTime": "2026/09/09 20:15 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/09/09 20:15",
      "previous": "10",
      "forecast": "—",
      "actual": "12",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/09/09 20:15",
      "tags": [
        "美國",
        "ADP",
        "中性"
      ],
      "summary": "ADP 就業人數 將於 2026/09/09 20:15 公布，市場關注前值 10、預期 —。",
      "event": "美國 ADP 就業人數，前值 10、預期 —、實際 12。",
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
      "id": "macro-adp-20260908",
      "type": "macro",
      "title": "ADP 就業人數",
      "eventName": "ADP 就業人數",
      "originalEventName": "ADP就業人口周變化",
      "sourcePublishTime": "2026/09/08 20:15 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/09/08 20:15",
      "previous": "1.175",
      "forecast": "—",
      "actual": null,
      "status": "等待公布",
      "statusLevel": "upcoming",
      "direction": "中性",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/09/08 20:15",
      "tags": [
        "美國",
        "ADP",
        "中性"
      ],
      "summary": "ADP 就業人數 將於 2026/09/08 20:15 公布，市場關注前值 1.175、預期 —。",
      "event": "美國 ADP 就業人數，前值 1.175、預期 —、實際 尚未公布。",
      "ai": "目前 AI 判斷為中性觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響市場風險偏好與資金輪動。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "鉅亨網全球經濟指標",
      "sourceUrl": "https://www.cnyes.com/economy/indicator",
      "sourceList": [
        "鉅亨網全球經濟指標"
      ]
    }
  ],
  "macroEvents": [
    {
      "id": "macro-adp-20260908",
      "type": "macro",
      "title": "ADP 就業人數",
      "eventName": "ADP 就業人數",
      "originalEventName": "ADP就業人口周變化",
      "sourcePublishTime": "2026/09/08 20:15 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/09/08 20:15",
      "previous": "1.175",
      "forecast": "—",
      "actual": null,
      "status": "等待公布",
      "statusLevel": "upcoming",
      "direction": "中性",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/09/08 20:15",
      "tags": [
        "美國",
        "ADP",
        "中性"
      ],
      "summary": "ADP 就業人數 將於 2026/09/08 20:15 公布，市場關注前值 1.175、預期 —。",
      "event": "美國 ADP 就業人數，前值 1.175、預期 —、實際 尚未公布。",
      "ai": "目前 AI 判斷為中性觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響市場風險偏好與資金輪動。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "鉅亨網全球經濟指標",
      "sourceUrl": "https://www.cnyes.com/economy/indicator",
      "sourceList": [
        "鉅亨網全球經濟指標"
      ]
    },
    {
      "id": "macro-adp-employment-change-weekly-20260909",
      "type": "macro",
      "title": "ADP 就業人數",
      "eventName": "ADP 就業人數",
      "originalEventName": "ADP Employment Change Weekly",
      "sourcePublishTime": "2026/09/09 20:15 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/09/09 20:15",
      "previous": "10",
      "forecast": "—",
      "actual": "12",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/09/09 20:15",
      "tags": [
        "美國",
        "ADP",
        "中性"
      ],
      "summary": "ADP 就業人數 將於 2026/09/09 20:15 公布，市場關注前值 10、預期 —。",
      "event": "美國 ADP 就業人數，前值 10、預期 —、實際 12。",
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
      "id": "macro-harmonised-inflation-rate-yoy-final-aug-20260910",
      "type": "macro",
      "title": "通膨率",
      "eventName": "通膨率",
      "originalEventName": "Harmonised Inflation Rate YoY Final (Aug)",
      "sourcePublishTime": "2026/09/10 14:00 Asia/Taipei",
      "country": "德國",
      "publishTime": "2026/09/10 14:00",
      "previous": "2.8",
      "forecast": "2.9",
      "actual": "2.9",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "importance": "中高",
      "timestamp": "2026/09/10 14:00",
      "tags": [
        "德國",
        "通膨率",
        "中性"
      ],
      "summary": "通膨率 將於 2026/09/10 14:00 公布，市場關注前值 2.8、預期 2.9。",
      "event": "德國 通膨率，前值 2.8、預期 2.9、實際 2.9。",
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
      "id": "macro-ecb-interest-rate-decision-20260910",
      "type": "macro",
      "title": "ECB 利率決議",
      "eventName": "ECB 利率決議",
      "originalEventName": "ECB Interest Rate Decision",
      "sourcePublishTime": "2026/09/10 20:15 Asia/Taipei",
      "country": "歐元區",
      "publishTime": "2026/09/10 20:15",
      "previous": "2.4",
      "forecast": "2.65",
      "actual": "2.65",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響全球資金成本、美元走勢與風險資產評價。",
      "importance": "中高",
      "timestamp": "2026/09/10 20:15",
      "tags": [
        "歐元區",
        "ECB",
        "中性"
      ],
      "summary": "ECB 利率決議 將於 2026/09/10 20:15 公布，市場關注前值 2.4、預期 2.65。",
      "event": "歐元區 ECB 利率決議，前值 2.4、預期 2.65、實際 2.65。",
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
      "id": "macro-jobless-claims-4-week-average-sep-05-20260910",
      "type": "macro",
      "title": "初領失業救濟金人數",
      "eventName": "初領失業救濟金人數",
      "originalEventName": "Jobless Claims 4-week Average (Sep/05)",
      "sourcePublishTime": "2026/09/10 20:30 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/09/10 20:30",
      "previous": "207.5",
      "forecast": "1780",
      "actual": "206",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響就業強弱、薪資通膨與聯準會政策預期。",
      "importance": "中高",
      "timestamp": "2026/09/10 20:30",
      "tags": [
        "美國",
        "初領失業救濟金人數",
        "中性"
      ],
      "summary": "初領失業救濟金人數 將於 2026/09/10 20:30 公布，市場關注前值 207.5、預期 —。",
      "event": "美國 初領失業救濟金人數，前值 207.5、預期 —、實際 206。",
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
      "id": "macro-ppi-ex-food-energy-and-trade-yoy-aug-20260910",
      "type": "macro",
      "title": "生產者物價指數 PPI",
      "eventName": "生產者物價指數 PPI",
      "originalEventName": "PPI Ex Food, Energy and Trade YoY (Aug)",
      "sourcePublishTime": "2026/09/10 20:30 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/09/10 20:30",
      "previous": "4.7",
      "forecast": "4.6",
      "actual": "4.7",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/09/10 20:30",
      "tags": [
        "美國",
        "生產者物價指數",
        "中性"
      ],
      "summary": "生產者物價指數 PPI 將於 2026/09/10 20:30 公布，市場關注前值 4.7、預期 —。",
      "event": "美國 生產者物價指數 PPI，前值 4.7、預期 —、實際 4.7。",
      "ai": "目前 AI 判斷為中性觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
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
      "id": "macro-gdp-yoy-jul-20260911",
      "type": "macro",
      "title": "GDP 經濟成長率",
      "eventName": "GDP 經濟成長率",
      "originalEventName": "GDP YoY (Jul)",
      "sourcePublishTime": "2026/09/11 14:00 Asia/Taipei",
      "country": "英國",
      "publishTime": "2026/09/11 14:00",
      "previous": "1.1",
      "forecast": "1.2",
      "actual": "1.6",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響景氣循環、原物料、工業與科技需求預期。",
      "importance": "高",
      "timestamp": "2026/09/11 14:00",
      "tags": [
        "英國",
        "GDP",
        "偏多"
      ],
      "summary": "GDP 經濟成長率 將於 2026/09/11 14:00 公布，市場關注前值 1.1、預期 1.2。",
      "event": "英國 GDP 經濟成長率，前值 1.1、預期 1.2、實際 1.6。",
      "ai": "目前 AI 判斷為偏多觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
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
      "id": "macro-cpi-s-a-aug-20260911",
      "type": "macro",
      "title": "消費者物價指數 CPI",
      "eventName": "消費者物價指數 CPI",
      "originalEventName": "CPI s.a (Aug)",
      "sourcePublishTime": "2026/09/11 20:30 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/09/11 20:30",
      "previous": "332.81",
      "forecast": "334.85",
      "actual": "334.131",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "importance": "高",
      "timestamp": "2026/09/11 20:30",
      "tags": [
        "美國",
        "消費者物價指數",
        "中性"
      ],
      "summary": "消費者物價指數 CPI 將於 2026/09/11 20:30 公布，市場關注前值 332.81、預期 —。",
      "event": "美國 消費者物價指數 CPI，前值 332.81、預期 —、實際 334.131。",
      "ai": "目前 AI 判斷為中性觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "http://www.bls.gov",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    }
  ]
};
