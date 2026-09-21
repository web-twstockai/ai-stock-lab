window.IntelligenceOverviewData = {
  "updatedAt": "2026/09/21 07:46",
  "status": "運作中",
  "cards": [
    {
      "label": "今日偵測情報",
      "value": 224,
      "unit": "筆",
      "icon": "file"
    },
    {
      "label": "高重要度訊號",
      "value": 56,
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
          "25 筆"
        ],
        [
          "三大法人同步買",
          "19 筆"
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
      "id": "inst-1303-20260918",
      "type": "institutional",
      "title": "1303 南亞",
      "stockCode": "1303",
      "stockName": "南亞",
      "sector": "塑膠工業",
      "group": "塑膠工業",
      "institutionType": "投信",
      "direction": "連買",
      "days": 10,
      "consecutiveBuyDays": 10,
      "streaks": {
        "外資": 0,
        "投信": 10,
        "自營商": 3
      },
      "latestNetBuy": 443,
      "buyVolume": 41603,
      "buyAmount": 99.02,
      "syncCount": 2,
      "importance": "高",
      "timestamp": "2026/09/18 18:20",
      "tags": [
        "投信",
        "連買",
        "塑膠工業",
        "APPLE概念",
        "越南設廠"
      ],
      "summary": "投信連買，近 10 個交易日正買合計 41,603 張，估算金額約 99.02 億元。",
      "event": "投信連買 10 日，近 10 個交易日正買合計 41,603 張；最新日外資 -10,939 張、投信 443 張、自營商 31 張。",
      "ai": "法人買盤集中在 塑膠工業，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 50119.676,
      "yahooVerification": {
        "status": "matched",
        "source": "https://tw.stock.yahoo.com/quote/1303.TW/institutional-trading",
        "latestNetBuy": 443,
        "days": 10,
        "latestForeign": -10939,
        "latestTrust": 443,
        "latestDealer": 31
      }
    },
    {
      "id": "inst-2317-20260918",
      "type": "institutional",
      "title": "2317 鴻海",
      "stockCode": "2317",
      "stockName": "鴻海",
      "sector": "其他電子業",
      "group": "其他電子業",
      "institutionType": "自營商",
      "direction": "連買",
      "days": 2,
      "consecutiveBuyDays": 2,
      "streaks": {
        "外資": 0,
        "投信": 0,
        "自營商": 2
      },
      "latestNetBuy": 1213,
      "buyVolume": 2456,
      "buyAmount": 6.15,
      "syncCount": 1,
      "importance": "高",
      "timestamp": "2026/09/18 18:20",
      "tags": [
        "自營商",
        "連買",
        "其他電子業",
        "3D技術",
        "3D感測"
      ],
      "summary": "自營商連買，近 10 個交易日正買合計 2,456 張，估算金額約 6.15 億元。",
      "event": "自營商連買 2 日，近 10 個交易日正買合計 2,456 張；最新日外資 -6,698 張、投信 -544 張、自營商 1,213 張。",
      "ai": "法人買盤集中在 其他電子業，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 18299.422,
      "yahooVerification": {
        "status": "matched",
        "source": "https://tw.stock.yahoo.com/quote/2317.TW/institutional-trading",
        "latestNetBuy": 1213,
        "days": 2,
        "latestForeign": -6698,
        "latestTrust": -544,
        "latestDealer": 1213
      }
    },
    {
      "id": "inst-2303-20260918",
      "type": "institutional",
      "title": "2303 聯電",
      "stockCode": "2303",
      "stockName": "聯電",
      "sector": "半導體",
      "group": "半導體",
      "institutionType": "投信",
      "direction": "同步買超",
      "days": 10,
      "consecutiveBuyDays": 10,
      "streaks": {
        "外資": 3,
        "投信": 10,
        "自營商": 3
      },
      "latestNetBuy": 13630,
      "buyVolume": 98157,
      "buyAmount": 153.13,
      "syncCount": 3,
      "importance": "高",
      "timestamp": "2026/09/18 18:20",
      "tags": [
        "投信",
        "同步買超",
        "半導體",
        "手機",
        "車用電子相關"
      ],
      "summary": "投信同步買超，近 10 個交易日正買合計 98,157 張，估算金額約 153.13 億元。",
      "event": "投信連買 10 日，近 10 個交易日正買合計 98,157 張；最新日外資 28,366 張、投信 13,630 張、自營商 3,574 張。",
      "ai": "法人買盤集中在 半導體，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 221425.748,
      "yahooVerification": {
        "status": "days-different",
        "source": "https://tw.stock.yahoo.com/quote/2303.TW/institutional-trading",
        "latestNetBuy": 13630,
        "days": 11,
        "latestForeign": 28366,
        "latestTrust": 13630,
        "latestDealer": 3574
      }
    },
    {
      "id": "inst-6770-20260918",
      "type": "institutional",
      "title": "6770 力積電",
      "stockCode": "6770",
      "stockName": "力積電",
      "sector": "半導體",
      "group": "半導體",
      "institutionType": "外資",
      "direction": "同步買超",
      "days": 3,
      "consecutiveBuyDays": 3,
      "streaks": {
        "外資": 3,
        "投信": 1,
        "自營商": 3
      },
      "latestNetBuy": 77685,
      "buyVolume": 312337,
      "buyAmount": 0,
      "syncCount": 3,
      "importance": "高",
      "timestamp": "2026/09/18 18:20",
      "tags": [
        "外資",
        "同步買超",
        "半導體",
        "IC製造",
        "晶圓代工"
      ],
      "summary": "外資同步買超，近 10 個交易日正買合計 312,337 張，估算金額約 0.00 億元。",
      "event": "外資連買 3 日，近 10 個交易日正買合計 312,337 張；最新日外資 77,685 張、投信 3,803 張、自營商 7,791 張。",
      "ai": "法人買盤集中在 半導體，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 345511.448,
      "yahooVerification": {
        "status": "matched",
        "source": "https://tw.stock.yahoo.com/quote/6770.TW/institutional-trading",
        "latestNetBuy": 77685,
        "days": 3,
        "latestForeign": 77685,
        "latestTrust": 3803,
        "latestDealer": 7791
      }
    },
    {
      "id": "macro-gdp-growth-rate-yoy-3rd-est-q2-20260907",
      "type": "macro",
      "title": "GDP 經濟成長率",
      "eventName": "GDP 經濟成長率",
      "originalEventName": "GDP Growth Rate YoY 3rd Est (Q2)",
      "sourcePublishTime": "2026/09/07 17:00 Asia/Taipei",
      "country": "歐元區",
      "publishTime": "2026/09/07 17:00",
      "previous": "0.6",
      "forecast": "1",
      "actual": "1.2",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響全球資金成本、美元走勢與風險資產評價。",
      "importance": "高",
      "timestamp": "2026/09/07 17:00",
      "tags": [
        "歐元區",
        "GDP",
        "偏多"
      ],
      "summary": "GDP 經濟成長率 將於 2026/09/07 17:00 公布，市場關注前值 0.6、預期 1。",
      "event": "歐元區 GDP 經濟成長率，前值 0.6、預期 1、實際 1.2。",
      "ai": "目前 AI 判斷為偏多觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響全球資金成本、美元走勢與風險資產評價。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "https://ec.europa.eu/eurostat/",
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
    },
    {
      "id": "macro-employment-change-yoy-final-q2-20260907",
      "type": "macro",
      "title": "就業人數變化",
      "eventName": "就業人數變化",
      "originalEventName": "Employment Change YoY Final (Q2)",
      "sourcePublishTime": "2026/09/07 17:00 Asia/Taipei",
      "country": "歐元區",
      "publishTime": "2026/09/07 17:00",
      "previous": "0.5",
      "forecast": "0.5",
      "actual": "0.5",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/09/07 17:00",
      "tags": [
        "歐元區",
        "就業人數變化",
        "中性"
      ],
      "summary": "就業人數變化 將於 2026/09/07 17:00 公布，市場關注前值 0.5、預期 0.5。",
      "event": "歐元區 就業人數變化，前值 0.5、預期 0.5、實際 0.5。",
      "ai": "目前 AI 判斷為中性觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響市場風險偏好與資金輪動。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "https://ec.europa.eu/eurostat/",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    }
  ],
  "macroEvents": [
    {
      "id": "macro-employment-change-yoy-final-q2-20260907",
      "type": "macro",
      "title": "就業人數變化",
      "eventName": "就業人數變化",
      "originalEventName": "Employment Change YoY Final (Q2)",
      "sourcePublishTime": "2026/09/07 17:00 Asia/Taipei",
      "country": "歐元區",
      "publishTime": "2026/09/07 17:00",
      "previous": "0.5",
      "forecast": "0.5",
      "actual": "0.5",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/09/07 17:00",
      "tags": [
        "歐元區",
        "就業人數變化",
        "中性"
      ],
      "summary": "就業人數變化 將於 2026/09/07 17:00 公布，市場關注前值 0.5、預期 0.5。",
      "event": "歐元區 就業人數變化，前值 0.5、預期 0.5、實際 0.5。",
      "ai": "目前 AI 判斷為中性觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響市場風險偏好與資金輪動。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "https://ec.europa.eu/eurostat/",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    },
    {
      "id": "macro-gdp-growth-rate-yoy-3rd-est-q2-20260907",
      "type": "macro",
      "title": "GDP 經濟成長率",
      "eventName": "GDP 經濟成長率",
      "originalEventName": "GDP Growth Rate YoY 3rd Est (Q2)",
      "sourcePublishTime": "2026/09/07 17:00 Asia/Taipei",
      "country": "歐元區",
      "publishTime": "2026/09/07 17:00",
      "previous": "0.6",
      "forecast": "1",
      "actual": "1.2",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響全球資金成本、美元走勢與風險資產評價。",
      "importance": "高",
      "timestamp": "2026/09/07 17:00",
      "tags": [
        "歐元區",
        "GDP",
        "偏多"
      ],
      "summary": "GDP 經濟成長率 將於 2026/09/07 17:00 公布，市場關注前值 0.6、預期 1。",
      "event": "歐元區 GDP 經濟成長率，前值 0.6、預期 1、實際 1.2。",
      "ai": "目前 AI 判斷為偏多觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響全球資金成本、美元走勢與風險資產評價。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "https://ec.europa.eu/eurostat/",
      "sourceList": [
        "TradingView Economic Calendar"
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
      "id": "macro-harmonised-inflation-rate-mom-final-aug-20260910",
      "type": "macro",
      "title": "通膨率",
      "eventName": "通膨率",
      "originalEventName": "Harmonised Inflation Rate MoM Final (Aug)",
      "sourcePublishTime": "2026/09/10 14:00 Asia/Taipei",
      "country": "德國",
      "publishTime": "2026/09/10 14:00",
      "previous": "0.9",
      "forecast": "0.2",
      "actual": "0.2",
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
      "summary": "通膨率 將於 2026/09/10 14:00 公布，市場關注前值 0.9、預期 0.2。",
      "event": "德國 通膨率，前值 0.9、預期 0.2、實際 0.2。",
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
      "id": "macro-core-ppi-yoy-aug-20260910",
      "type": "macro",
      "title": "生產者物價指數 PPI",
      "eventName": "生產者物價指數 PPI",
      "originalEventName": "Core PPI YoY (Aug)",
      "sourcePublishTime": "2026/09/10 20:30 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/09/10 20:30",
      "previous": "4.3",
      "forecast": "4.6",
      "actual": "4.6",
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
      "summary": "生產者物價指數 PPI 將於 2026/09/10 20:30 公布，市場關注前值 4.3、預期 4.6。",
      "event": "美國 生產者物價指數 PPI，前值 4.3、預期 4.6、實際 4.6。",
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
      "id": "macro-initial-jobless-claims-sep-05-20260910",
      "type": "macro",
      "title": "初領失業救濟金人數",
      "eventName": "初領失業救濟金人數",
      "originalEventName": "Initial Jobless Claims (Sep/05)",
      "sourcePublishTime": "2026/09/10 20:30 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/09/10 20:30",
      "previous": "207",
      "forecast": "205",
      "actual": "206",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響就業強弱、薪資通膨與聯準會政策預期。",
      "importance": "中高",
      "timestamp": "2026/09/10 20:30",
      "tags": [
        "美國",
        "初領失業救濟金人數",
        "偏多"
      ],
      "summary": "初領失業救濟金人數 將於 2026/09/10 20:30 公布，市場關注前值 207、預期 205。",
      "event": "美國 初領失業救濟金人數，前值 207、預期 205、實際 206。",
      "ai": "目前 AI 判斷為偏多觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響就業強弱、薪資通膨與聯準會政策預期。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "https://www.dol.gov/",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    }
  ]
};
