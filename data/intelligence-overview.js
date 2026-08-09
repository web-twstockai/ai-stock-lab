window.IntelligenceOverviewData = {
  "updatedAt": "2026/08/09 07:46",
  "status": "運作中",
  "cards": [
    {
      "label": "今日偵測情報",
      "value": 260,
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
          "21 筆"
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
          "12 個"
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
      "buyAmount": 13.15,
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
      "summary": "自營商連買，近 10 個交易日正買合計 6,993 張，估算金額約 13.15 億元。",
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
      "id": "inst-2867-20260807",
      "type": "institutional",
      "title": "2867 三商壽",
      "stockCode": "2867",
      "stockName": "三商壽",
      "sector": "金融保險",
      "group": "金融保險",
      "institutionType": "外資",
      "direction": "連買",
      "days": 10,
      "consecutiveBuyDays": 10,
      "streaks": {
        "外資": 10,
        "投信": 0,
        "自營商": 1
      },
      "latestNetBuy": 6381,
      "buyVolume": 77358,
      "buyAmount": 0,
      "syncCount": 2,
      "importance": "高",
      "timestamp": "2026/08/07 18:20",
      "tags": [
        "外資",
        "連買",
        "金融保險",
        "金融業",
        "壽險"
      ],
      "summary": "外資連買，近 10 個交易日正買合計 77,358 張，估算金額約 0.00 億元。",
      "event": "外資連買 10 日，近 10 個交易日正買合計 77,358 張；最新日外資 6,381 張、投信 0 張、自營商 361 張。",
      "ai": "法人買盤集中在 金融保險，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 87349.446,
      "yahooVerification": {
        "status": "days-different",
        "source": "https://tw.stock.yahoo.com/quote/2867.TW/institutional-trading",
        "latestNetBuy": 6381,
        "days": 12,
        "latestForeign": 6381,
        "latestTrust": 0,
        "latestDealer": 361
      }
    },
    {
      "id": "inst-2618-20260807",
      "type": "institutional",
      "title": "2618 長榮航",
      "stockCode": "2618",
      "stockName": "長榮航",
      "sector": "航運業",
      "group": "航運業",
      "institutionType": "外資",
      "direction": "同步買超",
      "days": 10,
      "consecutiveBuyDays": 10,
      "streaks": {
        "外資": 10,
        "投信": 1,
        "自營商": 1
      },
      "latestNetBuy": 22000,
      "buyVolume": 209322,
      "buyAmount": 0,
      "syncCount": 3,
      "importance": "高",
      "timestamp": "2026/08/07 18:20",
      "tags": [
        "外資",
        "同步買超",
        "航運業",
        "三通",
        "運輸事業"
      ],
      "summary": "外資同步買超，近 10 個交易日正買合計 209,322 張，估算金額約 0.00 億元。",
      "event": "外資連買 10 日，近 10 個交易日正買合計 209,322 張；最新日外資 22,000 張、投信 127 張、自營商 496 張。",
      "ai": "法人買盤集中在 航運業，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 217547.977,
      "yahooVerification": {
        "status": "days-different",
        "source": "https://tw.stock.yahoo.com/quote/2618.TW/institutional-trading",
        "latestNetBuy": 22000,
        "days": 23,
        "latestForeign": 22000,
        "latestTrust": 127,
        "latestDealer": 496
      }
    },
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
    },
    {
      "id": "macro-brc-shop-price-inflation-jul-20260728",
      "type": "macro",
      "title": "BRC Shop Price Inflation (Jul)",
      "eventName": "BRC Shop Price Inflation (Jul)",
      "originalEventName": "BRC Shop Price Inflation (Jul)",
      "sourcePublishTime": "2026/07/28 07:01 Asia/Taipei",
      "country": "英國",
      "publishTime": "2026/07/28 07:01",
      "previous": "1.2",
      "forecast": "1.2",
      "actual": "0.9",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "importance": "中高",
      "timestamp": "2026/07/28 07:01",
      "tags": [
        "英國",
        "BRC",
        "偏多"
      ],
      "summary": "BRC Shop Price Inflation (Jul) 將於 2026/07/28 07:01 公布，市場關注前值 1.2、預期 1.2。",
      "event": "英國 BRC Shop Price Inflation (Jul)，前值 1.2、預期 1.2、實際 0.9。",
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
      "id": "macro-dallas-fed-manufacturing-index-jul-20260727",
      "type": "macro",
      "title": "Dallas Fed Manufacturing Index (Jul)",
      "eventName": "Dallas Fed Manufacturing Index (Jul)",
      "originalEventName": "Dallas Fed Manufacturing Index (Jul)",
      "sourcePublishTime": "2026/07/27 22:30 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/07/27 22:30",
      "previous": "—",
      "forecast": "—",
      "actual": "1.3",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響全球資金成本、美元走勢與風險資產評價。",
      "importance": "中高",
      "timestamp": "2026/07/27 22:30",
      "tags": [
        "美國",
        "Dallas",
        "中性"
      ],
      "summary": "Dallas Fed Manufacturing Index (Jul) 將於 2026/07/27 22:30 公布，市場關注前值 —、預期 —。",
      "event": "美國 Dallas Fed Manufacturing Index (Jul)，前值 —、預期 —、實際 1.3。",
      "ai": "目前 AI 判斷為中性觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響全球資金成本、美元走勢與風險資產評價。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "https://www.dallasfed.org",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    }
  ],
  "macroEvents": [
    {
      "id": "macro-dallas-fed-manufacturing-index-jul-20260727",
      "type": "macro",
      "title": "Dallas Fed Manufacturing Index (Jul)",
      "eventName": "Dallas Fed Manufacturing Index (Jul)",
      "originalEventName": "Dallas Fed Manufacturing Index (Jul)",
      "sourcePublishTime": "2026/07/27 22:30 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/07/27 22:30",
      "previous": "—",
      "forecast": "—",
      "actual": "1.3",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響全球資金成本、美元走勢與風險資產評價。",
      "importance": "中高",
      "timestamp": "2026/07/27 22:30",
      "tags": [
        "美國",
        "Dallas",
        "中性"
      ],
      "summary": "Dallas Fed Manufacturing Index (Jul) 將於 2026/07/27 22:30 公布，市場關注前值 —、預期 —。",
      "event": "美國 Dallas Fed Manufacturing Index (Jul)，前值 —、預期 —、實際 1.3。",
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
      "id": "macro-brc-shop-price-inflation-jul-20260728",
      "type": "macro",
      "title": "BRC Shop Price Inflation (Jul)",
      "eventName": "BRC Shop Price Inflation (Jul)",
      "originalEventName": "BRC Shop Price Inflation (Jul)",
      "sourcePublishTime": "2026/07/28 07:01 Asia/Taipei",
      "country": "英國",
      "publishTime": "2026/07/28 07:01",
      "previous": "1.2",
      "forecast": "1.2",
      "actual": "0.9",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "importance": "中高",
      "timestamp": "2026/07/28 07:01",
      "tags": [
        "英國",
        "BRC",
        "偏多"
      ],
      "summary": "BRC Shop Price Inflation (Jul) 將於 2026/07/28 07:01 公布，市場關注前值 1.2、預期 1.2。",
      "event": "英國 BRC Shop Price Inflation (Jul)，前值 1.2、預期 1.2、實際 0.9。",
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
    }
  ]
};
