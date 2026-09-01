window.IntelligenceOverviewData = {
  "updatedAt": "2026/09/01 18:30",
  "status": "運作中",
  "cards": [
    {
      "label": "今日偵測情報",
      "value": 288,
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
          "28 筆"
        ],
        [
          "三大法人同步買",
          "22 筆"
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
          "41 個"
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
      "id": "inst-1717-20260901",
      "type": "institutional",
      "title": "1717 長興",
      "stockCode": "1717",
      "stockName": "長興",
      "sector": "化學工業",
      "group": "化學工業",
      "institutionType": "自營商",
      "direction": "同步買超",
      "days": 5,
      "consecutiveBuyDays": 5,
      "streaks": {
        "外資": 4,
        "投信": 5,
        "自營商": 5
      },
      "latestNetBuy": 1220,
      "buyVolume": 4043,
      "buyAmount": 0,
      "syncCount": 3,
      "importance": "高",
      "timestamp": "2026/09/01 18:20",
      "tags": [
        "自營商",
        "同步買超",
        "化學工業",
        "APPLE概念",
        "S&P 台商收成指數"
      ],
      "summary": "自營商同步買超，近 10 個交易日正買合計 4,043 張，估算金額約 0.00 億元。",
      "event": "自營商連買 5 日，近 10 個交易日正買合計 4,043 張；最新日外資 10,852 張、投信 301 張、自營商 1,220 張。",
      "ai": "法人買盤集中在 化學工業，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 48538.129,
      "yahooVerification": {
        "status": "matched",
        "source": "https://tw.stock.yahoo.com/quote/1717.TW/institutional-trading",
        "latestNetBuy": 1220,
        "days": 5,
        "latestForeign": 10852,
        "latestTrust": 301,
        "latestDealer": 1220
      }
    },
    {
      "id": "inst-2382-20260901",
      "type": "institutional",
      "title": "2382 廣達",
      "stockCode": "2382",
      "stockName": "廣達",
      "sector": "電腦及週邊設備",
      "group": "電腦及週邊設備",
      "institutionType": "投信",
      "direction": "同步買超",
      "days": 3,
      "consecutiveBuyDays": 3,
      "streaks": {
        "外資": 2,
        "投信": 3,
        "自營商": 1
      },
      "latestNetBuy": 2311,
      "buyVolume": 5505,
      "buyAmount": 18.63,
      "syncCount": 3,
      "importance": "高",
      "timestamp": "2026/09/01 18:20",
      "tags": [
        "投信",
        "同步買超",
        "電腦及週邊設備",
        "5G",
        "APPLE概念"
      ],
      "summary": "投信同步買超，近 10 個交易日正買合計 5,505 張，估算金額約 18.63 億元。",
      "event": "投信連買 3 日，近 10 個交易日正買合計 5,505 張；最新日外資 1,618 張、投信 2,311 張、自營商 188 張。",
      "ai": "法人買盤集中在 電腦及週邊設備，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 23046.962,
      "yahooVerification": {
        "status": "matched",
        "source": "https://tw.stock.yahoo.com/quote/2382.TW/institutional-trading",
        "latestNetBuy": 2311,
        "days": 3,
        "latestForeign": 1618,
        "latestTrust": 2311,
        "latestDealer": 188
      }
    },
    {
      "id": "inst-2303-20260901",
      "type": "institutional",
      "title": "2303 聯電",
      "stockCode": "2303",
      "stockName": "聯電",
      "sector": "半導體",
      "group": "半導體",
      "institutionType": "投信",
      "direction": "連買",
      "days": 3,
      "consecutiveBuyDays": 3,
      "streaks": {
        "外資": 0,
        "投信": 3,
        "自營商": 1
      },
      "latestNetBuy": 9028,
      "buyVolume": 35522,
      "buyAmount": 45.82,
      "syncCount": 2,
      "importance": "高",
      "timestamp": "2026/09/01 18:20",
      "tags": [
        "投信",
        "連買",
        "半導體",
        "手機",
        "車用電子相關"
      ],
      "summary": "投信連買，近 10 個交易日正買合計 35,522 張，估算金額約 45.82 億元。",
      "event": "投信連買 3 日，近 10 個交易日正買合計 35,522 張；最新日外資 -33,937 張、投信 9,028 張、自營商 2,713 張。",
      "ai": "法人買盤集中在 半導體，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 183052.137,
      "yahooVerification": {
        "status": "matched",
        "source": "https://tw.stock.yahoo.com/quote/2303.TW/institutional-trading",
        "latestNetBuy": 9028,
        "days": 3,
        "latestForeign": -33937,
        "latestTrust": 9028,
        "latestDealer": 2713
      }
    },
    {
      "id": "inst-2317-20260901",
      "type": "institutional",
      "title": "2317 鴻海",
      "stockCode": "2317",
      "stockName": "鴻海",
      "sector": "其他電子業",
      "group": "其他電子業",
      "institutionType": "投信",
      "direction": "同步買超",
      "days": 3,
      "consecutiveBuyDays": 3,
      "streaks": {
        "外資": 1,
        "投信": 3,
        "自營商": 1
      },
      "latestNetBuy": 699,
      "buyVolume": 2614,
      "buyAmount": 6.53,
      "syncCount": 3,
      "importance": "高",
      "timestamp": "2026/09/01 18:20",
      "tags": [
        "投信",
        "同步買超",
        "其他電子業",
        "3D技術",
        "3D感測"
      ],
      "summary": "投信同步買超，近 10 個交易日正買合計 2,614 張，估算金額約 6.53 億元。",
      "event": "投信連買 3 日，近 10 個交易日正買合計 2,614 張；最新日外資 13,474 張、投信 699 張、自營商 938 張。",
      "ai": "法人買盤集中在 其他電子業，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 38892.826,
      "yahooVerification": {
        "status": "matched",
        "source": "https://tw.stock.yahoo.com/quote/2317.TW/institutional-trading",
        "latestNetBuy": 699,
        "days": 3,
        "latestForeign": 13474,
        "latestTrust": 699,
        "latestDealer": 938
      }
    },
    {
      "id": "macro-hmrc-payrolls-change-jul-20260818",
      "type": "macro",
      "title": "非農就業人數",
      "eventName": "非農就業人數",
      "originalEventName": "HMRC Payrolls Change (Jul)",
      "sourcePublishTime": "2026/08/18 14:00 Asia/Taipei",
      "country": "英國",
      "publishTime": "2026/08/18 14:00",
      "previous": "-13",
      "forecast": "—",
      "actual": "-13",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響就業強弱、薪資通膨與聯準會政策預期。",
      "importance": "高",
      "timestamp": "2026/08/18 14:00",
      "tags": [
        "英國",
        "非農就業人數",
        "中性"
      ],
      "summary": "非農就業人數 將於 2026/08/18 14:00 公布，市場關注前值 -13、預期 —。",
      "event": "英國 非農就業人數，前值 -13、預期 —、實際 -13。",
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
      "id": "macro-adp-employment-change-weekly-20260818",
      "type": "macro",
      "title": "ADP 就業人數",
      "eventName": "ADP 就業人數",
      "originalEventName": "ADP Employment Change Weekly",
      "sourcePublishTime": "2026/08/18 20:15 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/08/18 20:15",
      "previous": "8.25",
      "forecast": "—",
      "actual": "9.5",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/08/18 20:15",
      "tags": [
        "美國",
        "ADP",
        "中性"
      ],
      "summary": "ADP 就業人數 將於 2026/08/18 20:15 公布，市場關注前值 8.25、預期 —。",
      "event": "美國 ADP 就業人數，前值 8.25、預期 —、實際 9.5。",
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
      "id": "macro-employment-change-jun-20260818",
      "type": "macro",
      "title": "就業人數變化",
      "eventName": "就業人數變化",
      "originalEventName": "Employment Change (Jun)",
      "sourcePublishTime": "2026/08/18 14:00 Asia/Taipei",
      "country": "英國",
      "publishTime": "2026/08/18 14:00",
      "previous": "147",
      "forecast": "—",
      "actual": "83",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/08/18 14:00",
      "tags": [
        "英國",
        "就業人數變化",
        "中性"
      ],
      "summary": "就業人數變化 將於 2026/08/18 14:00 公布，市場關注前值 147、預期 —。",
      "event": "英國 就業人數變化，前值 147、預期 —、實際 83。",
      "ai": "目前 AI 判斷為中性觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響市場風險偏好與資金輪動。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "http://www.ons.gov.uk/",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    },
    {
      "id": "macro-unemployment-rate-jun-20260818",
      "type": "macro",
      "title": "失業率",
      "eventName": "失業率",
      "originalEventName": "Unemployment Rate (Jun)",
      "sourcePublishTime": "2026/08/18 14:00 Asia/Taipei",
      "country": "英國",
      "publishTime": "2026/08/18 14:00",
      "previous": "4.9",
      "forecast": "4.8",
      "actual": "4.9",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響全球資金成本、美元走勢與風險資產評價。",
      "importance": "中高",
      "timestamp": "2026/08/18 14:00",
      "tags": [
        "英國",
        "失業率",
        "偏多"
      ],
      "summary": "失業率 將於 2026/08/18 14:00 公布，市場關注前值 4.9、預期 4.8。",
      "event": "英國 失業率，前值 4.9、預期 4.8、實際 4.9。",
      "ai": "目前 AI 判斷為偏多觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響全球資金成本、美元走勢與風險資產評價。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "http://www.ons.gov.uk/",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    }
  ],
  "macroEvents": [
    {
      "id": "macro-employment-change-jun-20260818",
      "type": "macro",
      "title": "就業人數變化",
      "eventName": "就業人數變化",
      "originalEventName": "Employment Change (Jun)",
      "sourcePublishTime": "2026/08/18 14:00 Asia/Taipei",
      "country": "英國",
      "publishTime": "2026/08/18 14:00",
      "previous": "147",
      "forecast": "—",
      "actual": "83",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/08/18 14:00",
      "tags": [
        "英國",
        "就業人數變化",
        "中性"
      ],
      "summary": "就業人數變化 將於 2026/08/18 14:00 公布，市場關注前值 147、預期 —。",
      "event": "英國 就業人數變化，前值 147、預期 —、實際 83。",
      "ai": "目前 AI 判斷為中性觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響市場風險偏好與資金輪動。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "http://www.ons.gov.uk/",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    },
    {
      "id": "macro-hmrc-payrolls-change-jul-20260818",
      "type": "macro",
      "title": "非農就業人數",
      "eventName": "非農就業人數",
      "originalEventName": "HMRC Payrolls Change (Jul)",
      "sourcePublishTime": "2026/08/18 14:00 Asia/Taipei",
      "country": "英國",
      "publishTime": "2026/08/18 14:00",
      "previous": "-13",
      "forecast": "—",
      "actual": "-13",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響就業強弱、薪資通膨與聯準會政策預期。",
      "importance": "高",
      "timestamp": "2026/08/18 14:00",
      "tags": [
        "英國",
        "非農就業人數",
        "中性"
      ],
      "summary": "非農就業人數 將於 2026/08/18 14:00 公布，市場關注前值 -13、預期 —。",
      "event": "英國 非農就業人數，前值 -13、預期 —、實際 -13。",
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
      "id": "macro-unemployment-rate-jun-20260818",
      "type": "macro",
      "title": "失業率",
      "eventName": "失業率",
      "originalEventName": "Unemployment Rate (Jun)",
      "sourcePublishTime": "2026/08/18 14:00 Asia/Taipei",
      "country": "英國",
      "publishTime": "2026/08/18 14:00",
      "previous": "4.9",
      "forecast": "4.8",
      "actual": "4.9",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響全球資金成本、美元走勢與風險資產評價。",
      "importance": "中高",
      "timestamp": "2026/08/18 14:00",
      "tags": [
        "英國",
        "失業率",
        "偏多"
      ],
      "summary": "失業率 將於 2026/08/18 14:00 公布，市場關注前值 4.9、預期 4.8。",
      "event": "英國 失業率，前值 4.9、預期 4.8、實際 4.9。",
      "ai": "目前 AI 判斷為偏多觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響全球資金成本、美元走勢與風險資產評價。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "http://www.ons.gov.uk/",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    },
    {
      "id": "macro-adp-employment-change-weekly-20260818",
      "type": "macro",
      "title": "ADP 就業人數",
      "eventName": "ADP 就業人數",
      "originalEventName": "ADP Employment Change Weekly",
      "sourcePublishTime": "2026/08/18 20:15 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/08/18 20:15",
      "previous": "8.25",
      "forecast": "—",
      "actual": "9.5",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/08/18 20:15",
      "tags": [
        "美國",
        "ADP",
        "中性"
      ],
      "summary": "ADP 就業人數 將於 2026/08/18 20:15 公布，市場關注前值 8.25、預期 —。",
      "event": "美國 ADP 就業人數，前值 8.25、預期 —、實際 9.5。",
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
      "id": "macro-ppi-core-output-mom-jul-20260819",
      "type": "macro",
      "title": "生產者物價指數 PPI",
      "eventName": "生產者物價指數 PPI",
      "originalEventName": "PPI Core Output MoM (Jul)",
      "sourcePublishTime": "2026/08/19 14:00 Asia/Taipei",
      "country": "英國",
      "publishTime": "2026/08/19 14:00",
      "previous": "0.5",
      "forecast": "6.6",
      "actual": "0.6",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/08/19 14:00",
      "tags": [
        "英國",
        "生產者物價指數",
        "中性"
      ],
      "summary": "生產者物價指數 PPI 將於 2026/08/19 14:00 公布，市場關注前值 0.5、預期 —。",
      "event": "英國 生產者物價指數 PPI，前值 0.5、預期 —、實際 0.6。",
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
      "id": "macro-inflation-rate-mom-jul-20260819",
      "type": "macro",
      "title": "通膨率",
      "eventName": "通膨率",
      "originalEventName": "Inflation Rate MoM (Jul)",
      "sourcePublishTime": "2026/08/19 14:00 Asia/Taipei",
      "country": "英國",
      "publishTime": "2026/08/19 14:00",
      "previous": "0.1",
      "forecast": "0.3",
      "actual": "0.3",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "importance": "中高",
      "timestamp": "2026/08/19 14:00",
      "tags": [
        "英國",
        "通膨率",
        "中性"
      ],
      "summary": "通膨率 將於 2026/08/19 14:00 公布，市場關注前值 0.1、預期 0.3。",
      "event": "英國 通膨率，前值 0.1、預期 0.3、實際 0.3。",
      "ai": "目前 AI 判斷為中性觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "http://www.ons.gov.uk/",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    },
    {
      "id": "macro-core-inflation-rate-mom-jul-20260819",
      "type": "macro",
      "title": "核心通膨率",
      "eventName": "核心通膨率",
      "originalEventName": "Core Inflation Rate MoM (Jul)",
      "sourcePublishTime": "2026/08/19 14:00 Asia/Taipei",
      "country": "英國",
      "publishTime": "2026/08/19 14:00",
      "previous": "0.3",
      "forecast": "0.1",
      "actual": "0.2",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏空",
      "impact": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "importance": "中高",
      "timestamp": "2026/08/19 14:00",
      "tags": [
        "英國",
        "核心通膨率",
        "偏空"
      ],
      "summary": "核心通膨率 將於 2026/08/19 14:00 公布，市場關注前值 0.3、預期 0.1。",
      "event": "英國 核心通膨率，前值 0.3、預期 0.1、實際 0.2。",
      "ai": "目前 AI 判斷為偏空觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "http://www.ons.gov.uk/",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    },
    {
      "id": "macro-inflation-rate-yoy-final-jul-20260819",
      "type": "macro",
      "title": "通膨率",
      "eventName": "通膨率",
      "originalEventName": "Inflation Rate YoY Final (Jul)",
      "sourcePublishTime": "2026/08/19 17:00 Asia/Taipei",
      "country": "歐元區",
      "publishTime": "2026/08/19 17:00",
      "previous": "2.8",
      "forecast": "2.9",
      "actual": "2.9",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "importance": "中高",
      "timestamp": "2026/08/19 17:00",
      "tags": [
        "歐元區",
        "通膨率",
        "中性"
      ],
      "summary": "通膨率 將於 2026/08/19 17:00 公布，市場關注前值 2.8、預期 2.9。",
      "event": "歐元區 通膨率，前值 2.8、預期 2.9、實際 2.9。",
      "ai": "目前 AI 判斷為中性觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "https://ec.europa.eu/eurostat/",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    }
  ]
};
