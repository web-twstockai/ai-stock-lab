window.IntelligenceOverviewData = {
  "updatedAt": "2026/11/03 18:30",
  "status": "運作中",
  "cards": [
    {
      "label": "今日偵測情報",
      "value": 321,
      "unit": "筆",
      "icon": "file"
    },
    {
      "label": "高重要度訊號",
      "value": 90,
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
      "value": "Services Inflation MoM (Sep. 2026)",
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
          "31 筆"
        ],
        [
          "三大法人同步買",
          "10 筆"
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
          "46 個"
        ],
        [
          "下一事件",
          "Services Inflation MoM (Sep. 2026)"
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
      "id": "inst-1303-20261103",
      "type": "institutional",
      "title": "1303 南亞",
      "stockCode": "1303",
      "stockName": "南亞",
      "sector": "塑膠工業",
      "group": "塑膠工業",
      "institutionType": "投信",
      "direction": "連買",
      "days": 6,
      "consecutiveBuyDays": 6,
      "streaks": {
        "外資": 0,
        "投信": 6,
        "自營商": 0
      },
      "latestNetBuy": 1258,
      "buyVolume": 13419,
      "buyAmount": 40.39,
      "syncCount": 1,
      "importance": "高",
      "timestamp": "2026/11/03 18:20",
      "tags": [
        "投信",
        "連買",
        "塑膠工業",
        "APPLE概念",
        "越南設廠"
      ],
      "summary": "投信連買，近 10 個交易日正買合計 13,419 張，估算金額約 40.39 億元。",
      "event": "投信連買 6 日，近 10 個交易日正買合計 13,419 張；最新日外資 -27,189 張、投信 1,258 張、自營商 -354 張。",
      "ai": "法人買盤集中在 塑膠工業，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 57283.919,
      "yahooVerification": {
        "status": "matched",
        "source": "https://tw.stock.yahoo.com/quote/1303.TW/institutional-trading",
        "latestNetBuy": 1258,
        "days": 6,
        "latestForeign": -27189,
        "latestTrust": 1258,
        "latestDealer": -354
      }
    },
    {
      "id": "inst-2618-20261103",
      "type": "institutional",
      "title": "2618 長榮航",
      "stockCode": "2618",
      "stockName": "長榮航",
      "sector": "航運業",
      "group": "航運業",
      "institutionType": "外資",
      "direction": "同步買超",
      "days": 4,
      "consecutiveBuyDays": 4,
      "streaks": {
        "外資": 4,
        "投信": 3,
        "自營商": 4
      },
      "latestNetBuy": 15648,
      "buyVolume": 47178,
      "buyAmount": 0,
      "syncCount": 3,
      "importance": "高",
      "timestamp": "2026/11/03 18:20",
      "tags": [
        "外資",
        "同步買超",
        "航運業",
        "三通",
        "運輸事業"
      ],
      "summary": "外資同步買超，近 10 個交易日正買合計 47,178 張，估算金額約 0.00 億元。",
      "event": "外資連買 4 日，近 10 個交易日正買合計 47,178 張；最新日外資 15,648 張、投信 1,487 張、自營商 1,609 張。",
      "ai": "法人買盤集中在 航運業，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 59543.054,
      "yahooVerification": {
        "status": "matched",
        "source": "https://tw.stock.yahoo.com/quote/2618.TW/institutional-trading",
        "latestNetBuy": 15648,
        "days": 4,
        "latestForeign": 15648,
        "latestTrust": 1487,
        "latestDealer": 1609
      }
    },
    {
      "id": "inst-2317-20261103",
      "type": "institutional",
      "title": "2317 鴻海",
      "stockCode": "2317",
      "stockName": "鴻海",
      "sector": "其他電子業",
      "group": "其他電子業",
      "institutionType": "投信",
      "direction": "同步買超",
      "days": 6,
      "consecutiveBuyDays": 6,
      "streaks": {
        "外資": 2,
        "投信": 6,
        "自營商": 3
      },
      "latestNetBuy": 427,
      "buyVolume": 6487,
      "buyAmount": 16.28,
      "syncCount": 3,
      "importance": "高",
      "timestamp": "2026/11/03 18:20",
      "tags": [
        "投信",
        "同步買超",
        "其他電子業",
        "3D技術",
        "3D感測"
      ],
      "summary": "投信同步買超，近 10 個交易日正買合計 6,487 張，估算金額約 16.28 億元。",
      "event": "投信連買 6 日，近 10 個交易日正買合計 6,487 張；最新日外資 2,394 張、投信 427 張、自營商 806 張。",
      "ai": "法人買盤集中在 其他電子業，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 94514.95,
      "yahooVerification": {
        "status": "matched",
        "source": "https://tw.stock.yahoo.com/quote/2317.TW/institutional-trading",
        "latestNetBuy": 427,
        "days": 6,
        "latestForeign": 2394,
        "latestTrust": 427,
        "latestDealer": 806
      }
    },
    {
      "id": "inst-6770-20261103",
      "type": "institutional",
      "title": "6770 力積電",
      "stockCode": "6770",
      "stockName": "力積電",
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
      "latestNetBuy": 255,
      "buyVolume": 28161,
      "buyAmount": 0,
      "syncCount": 1,
      "importance": "高",
      "timestamp": "2026/11/03 18:20",
      "tags": [
        "投信",
        "連買",
        "半導體",
        "IC製造",
        "晶圓代工"
      ],
      "summary": "投信連買，近 10 個交易日正買合計 28,161 張，估算金額約 0.00 億元。",
      "event": "投信連買 10 日，近 10 個交易日正買合計 28,161 張；最新日外資 -33,154 張、投信 255 張、自營商 -4,901 張。",
      "ai": "法人買盤集中在 半導體，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 109539.646,
      "yahooVerification": {
        "status": "matched",
        "source": "https://tw.stock.yahoo.com/quote/6770.TW/institutional-trading",
        "latestNetBuy": 255,
        "days": 10,
        "latestForeign": -33154,
        "latestTrust": 255,
        "latestDealer": -4901
      }
    },
    {
      "id": "macro-hmrc-payrolls-change-sep-2026-20261020",
      "type": "macro",
      "title": "非農就業人數",
      "eventName": "非農就業人數",
      "originalEventName": "HMRC Payrolls Change (Sep. 2026)",
      "sourcePublishTime": "2026/10/20 14:00 Asia/Taipei",
      "country": "英國",
      "publishTime": "2026/10/20 14:00",
      "previous": "1",
      "forecast": "—",
      "actual": "13",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響就業強弱、薪資通膨與聯準會政策預期。",
      "importance": "高",
      "timestamp": "2026/10/20 14:00",
      "tags": [
        "英國",
        "非農就業人數",
        "中性"
      ],
      "summary": "非農就業人數 將於 2026/10/20 14:00 公布，市場關注前值 1、預期 —。",
      "event": "英國 非農就業人數，前值 1、預期 —、實際 13。",
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
      "id": "macro-employment-change-aug-2026-20261020",
      "type": "macro",
      "title": "就業人數變化",
      "eventName": "就業人數變化",
      "originalEventName": "Employment Change (Aug. 2026)",
      "sourcePublishTime": "2026/10/20 14:00 Asia/Taipei",
      "country": "英國",
      "publishTime": "2026/10/20 14:00",
      "previous": "67",
      "forecast": "5",
      "actual": "102",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/10/20 14:00",
      "tags": [
        "英國",
        "就業人數變化",
        "偏多"
      ],
      "summary": "就業人數變化 將於 2026/10/20 14:00 公布，市場關注前值 67、預期 5。",
      "event": "英國 就業人數變化，前值 67、預期 5、實際 102。",
      "ai": "目前 AI 判斷為偏多觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響市場風險偏好與資金輪動。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "http://www.ons.gov.uk/",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    },
    {
      "id": "macro-unemployment-rate-aug-2026-20261020",
      "type": "macro",
      "title": "失業率",
      "eventName": "失業率",
      "originalEventName": "Unemployment Rate (Aug. 2026)",
      "sourcePublishTime": "2026/10/20 14:00 Asia/Taipei",
      "country": "英國",
      "publishTime": "2026/10/20 14:00",
      "previous": "4.9",
      "forecast": "5",
      "actual": "4.7",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏空",
      "impact": "影響全球資金成本、美元走勢與風險資產評價。",
      "importance": "中高",
      "timestamp": "2026/10/20 14:00",
      "tags": [
        "英國",
        "失業率",
        "偏空"
      ],
      "summary": "失業率 將於 2026/10/20 14:00 公布，市場關注前值 4.9、預期 5。",
      "event": "英國 失業率，前值 4.9、預期 5、實際 4.7。",
      "ai": "目前 AI 判斷為偏空觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響全球資金成本、美元走勢與風險資產評價。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "http://www.ons.gov.uk/",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    },
    {
      "id": "macro-ppi-mom-sep-2026-20261020",
      "type": "macro",
      "title": "生產者物價指數 PPI",
      "eventName": "生產者物價指數 PPI",
      "originalEventName": "PPI MoM (Sep. 2026)",
      "sourcePublishTime": "2026/10/20 14:00 Asia/Taipei",
      "country": "德國",
      "publishTime": "2026/10/20 14:00",
      "previous": "1.1",
      "forecast": "1.5",
      "actual": "1.9",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/10/20 14:00",
      "tags": [
        "德國",
        "生產者物價指數",
        "偏多"
      ],
      "summary": "生產者物價指數 PPI 將於 2026/10/20 14:00 公布，市場關注前值 1.1、預期 1.5。",
      "event": "德國 生產者物價指數 PPI，前值 1.1、預期 1.5、實際 1.9。",
      "ai": "目前 AI 判斷為偏多觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響市場風險偏好與資金輪動。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar / 鉅亨網全球經濟指標",
      "sourceUrl": "https://www.destatis.de",
      "sourceList": [
        "TradingView Economic Calendar",
        "鉅亨網全球經濟指標"
      ]
    }
  ],
  "macroEvents": [
    {
      "id": "macro-employment-change-aug-2026-20261020",
      "type": "macro",
      "title": "就業人數變化",
      "eventName": "就業人數變化",
      "originalEventName": "Employment Change (Aug. 2026)",
      "sourcePublishTime": "2026/10/20 14:00 Asia/Taipei",
      "country": "英國",
      "publishTime": "2026/10/20 14:00",
      "previous": "67",
      "forecast": "5",
      "actual": "102",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/10/20 14:00",
      "tags": [
        "英國",
        "就業人數變化",
        "偏多"
      ],
      "summary": "就業人數變化 將於 2026/10/20 14:00 公布，市場關注前值 67、預期 5。",
      "event": "英國 就業人數變化，前值 67、預期 5、實際 102。",
      "ai": "目前 AI 判斷為偏多觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響市場風險偏好與資金輪動。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "http://www.ons.gov.uk/",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    },
    {
      "id": "macro-unemployment-rate-aug-2026-20261020",
      "type": "macro",
      "title": "失業率",
      "eventName": "失業率",
      "originalEventName": "Unemployment Rate (Aug. 2026)",
      "sourcePublishTime": "2026/10/20 14:00 Asia/Taipei",
      "country": "英國",
      "publishTime": "2026/10/20 14:00",
      "previous": "4.9",
      "forecast": "5",
      "actual": "4.7",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏空",
      "impact": "影響全球資金成本、美元走勢與風險資產評價。",
      "importance": "中高",
      "timestamp": "2026/10/20 14:00",
      "tags": [
        "英國",
        "失業率",
        "偏空"
      ],
      "summary": "失業率 將於 2026/10/20 14:00 公布，市場關注前值 4.9、預期 5。",
      "event": "英國 失業率，前值 4.9、預期 5、實際 4.7。",
      "ai": "目前 AI 判斷為偏空觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響全球資金成本、美元走勢與風險資產評價。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "http://www.ons.gov.uk/",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    },
    {
      "id": "macro-hmrc-payrolls-change-sep-2026-20261020",
      "type": "macro",
      "title": "非農就業人數",
      "eventName": "非農就業人數",
      "originalEventName": "HMRC Payrolls Change (Sep. 2026)",
      "sourcePublishTime": "2026/10/20 14:00 Asia/Taipei",
      "country": "英國",
      "publishTime": "2026/10/20 14:00",
      "previous": "1",
      "forecast": "—",
      "actual": "13",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響就業強弱、薪資通膨與聯準會政策預期。",
      "importance": "高",
      "timestamp": "2026/10/20 14:00",
      "tags": [
        "英國",
        "非農就業人數",
        "中性"
      ],
      "summary": "非農就業人數 將於 2026/10/20 14:00 公布，市場關注前值 1、預期 —。",
      "event": "英國 非農就業人數，前值 1、預期 —、實際 13。",
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
      "id": "macro-ppi-mom-sep-2026-20261020",
      "type": "macro",
      "title": "生產者物價指數 PPI",
      "eventName": "生產者物價指數 PPI",
      "originalEventName": "PPI MoM (Sep. 2026)",
      "sourcePublishTime": "2026/10/20 14:00 Asia/Taipei",
      "country": "德國",
      "publishTime": "2026/10/20 14:00",
      "previous": "1.1",
      "forecast": "1.5",
      "actual": "1.9",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/10/20 14:00",
      "tags": [
        "德國",
        "生產者物價指數",
        "偏多"
      ],
      "summary": "生產者物價指數 PPI 將於 2026/10/20 14:00 公布，市場關注前值 1.1、預期 1.5。",
      "event": "德國 生產者物價指數 PPI，前值 1.1、預期 1.5、實際 1.9。",
      "ai": "目前 AI 判斷為偏多觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響市場風險偏好與資金輪動。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar / 鉅亨網全球經濟指標",
      "sourceUrl": "https://www.destatis.de",
      "sourceList": [
        "TradingView Economic Calendar",
        "鉅亨網全球經濟指標"
      ]
    },
    {
      "id": "macro-adp-employment-change-weekly-w-o-sep-21-2026-20261020",
      "type": "macro",
      "title": "ADP 就業人數",
      "eventName": "ADP 就業人數",
      "originalEventName": "ADP Employment Change Weekly (w/o Sep. 21, 2026)",
      "sourcePublishTime": "2026/10/20 19:15 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/10/20 19:15",
      "previous": "24750",
      "forecast": "—",
      "actual": "26000",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/10/20 19:15",
      "tags": [
        "美國",
        "ADP",
        "中性"
      ],
      "summary": "ADP 就業人數 將於 2026/10/20 19:15 公布，市場關注前值 24750、預期 —。",
      "event": "美國 ADP 就業人數，前值 24750、預期 —、實際 26000。",
      "ai": "目前 AI 判斷為中性觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響市場風險偏好與資金輪動。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "https://tw.tradingview.com/economic-calendar/",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    },
    {
      "id": "macro-adp-employment-change-weekly-w-o-sep-28-2026-20261020",
      "type": "macro",
      "title": "ADP 就業人數",
      "eventName": "ADP 就業人數",
      "originalEventName": "ADP Employment Change Weekly (w/o Sep. 28, 2026)",
      "sourcePublishTime": "2026/10/20 20:15 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/10/20 20:15",
      "previous": "26000",
      "forecast": "—",
      "actual": "17500",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/10/20 20:15",
      "tags": [
        "美國",
        "ADP",
        "中性"
      ],
      "summary": "ADP 就業人數 將於 2026/10/20 20:15 公布，市場關注前值 26000、預期 —。",
      "event": "美國 ADP 就業人數，前值 26000、預期 —、實際 17500。",
      "ai": "目前 AI 判斷為中性觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響市場風險偏好與資金輪動。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar / 鉅亨網全球經濟指標",
      "sourceUrl": "https://tw.tradingview.com/economic-calendar/",
      "sourceList": [
        "TradingView Economic Calendar",
        "鉅亨網全球經濟指標"
      ]
    },
    {
      "id": "macro-gdpnow-20261020",
      "type": "macro",
      "title": "GDP 經濟成長率",
      "eventName": "GDP 經濟成長率",
      "originalEventName": "亞特蘭大聯儲GDPNow",
      "sourcePublishTime": "2026/10/20 23:00 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/10/20 23:00",
      "previous": "3.6",
      "forecast": "—",
      "actual": "3.5",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響景氣循環、原物料、工業與科技需求預期。",
      "importance": "高",
      "timestamp": "2026/10/20 23:00",
      "tags": [
        "美國",
        "GDP",
        "中性"
      ],
      "summary": "GDP 經濟成長率 將於 2026/10/20 23:00 公布，市場關注前值 3.6、預期 —。",
      "event": "美國 GDP 經濟成長率，前值 3.6、預期 —、實際 3.5。",
      "ai": "目前 AI 判斷為中性觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響景氣循環、原物料、工業與科技需求預期。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "鉅亨網全球經濟指標",
      "sourceUrl": "https://www.cnyes.com/economy/indicator",
      "sourceList": [
        "鉅亨網全球經濟指標"
      ]
    },
    {
      "id": "macro-consumer-price-index-sep-2026-20261021",
      "type": "macro",
      "title": "Consumer Price Index (Sep. 2026)",
      "eventName": "Consumer Price Index (Sep. 2026)",
      "originalEventName": "Consumer Price Index (Sep. 2026)",
      "sourcePublishTime": "2026/10/21 14:00 Asia/Taipei",
      "country": "英國",
      "publishTime": "2026/10/21 14:00",
      "previous": "143.6",
      "forecast": "—",
      "actual": "144.1",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "importance": "中高",
      "timestamp": "2026/10/21 14:00",
      "tags": [
        "英國",
        "Consumer",
        "中性"
      ],
      "summary": "Consumer Price Index (Sep. 2026) 將於 2026/10/21 14:00 公布，市場關注前值 143.6、預期 —。",
      "event": "英國 Consumer Price Index (Sep. 2026)，前值 143.6、預期 —、實際 144.1。",
      "ai": "目前 AI 判斷為中性觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "https://www.ons.gov.uk",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    }
  ]
};
