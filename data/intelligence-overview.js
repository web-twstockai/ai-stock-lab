window.IntelligenceOverviewData = {
  "updatedAt": "2026/07/24 18:30",
  "status": "運作中",
  "cards": [
    {
      "label": "今日偵測情報",
      "value": 241,
      "unit": "筆",
      "icon": "file"
    },
    {
      "label": "高重要度訊號",
      "value": 77,
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
          "100 筆"
        ],
        [
          "投信連買",
          "34 筆"
        ],
        [
          "三大法人同步買",
          "20 筆"
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
          "38 個"
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
      "id": "inst-1303-20260724",
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
        "外資": 1,
        "投信": 10,
        "自營商": 0
      },
      "latestNetBuy": 584,
      "buyVolume": 163449,
      "buyAmount": 290.12,
      "syncCount": 2,
      "importance": "高",
      "timestamp": "2026/07/24 18:20",
      "tags": [
        "投信",
        "連買",
        "塑膠工業",
        "APPLE概念",
        "越南設廠"
      ],
      "summary": "投信連買，近 10 個交易日正買合計 163,449 張，估算金額約 290.12 億元。",
      "event": "投信連買 10 日，近 10 個交易日正買合計 163,449 張；最新日外資 3,280 張、投信 584 張、自營商 -116 張。",
      "ai": "法人買盤集中在 塑膠工業，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 177443.052,
      "yahooVerification": {
        "status": "days-different",
        "source": "https://tw.stock.yahoo.com/quote/1303.TW/institutional-trading",
        "latestNetBuy": 584,
        "days": 25,
        "latestForeign": 3280,
        "latestTrust": 584,
        "latestDealer": -116
      }
    },
    {
      "id": "inst-2303-20260724",
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
        "自營商": 0
      },
      "latestNetBuy": 8443,
      "buyVolume": 34566,
      "buyAmount": 44.24,
      "syncCount": 1,
      "importance": "高",
      "timestamp": "2026/07/24 18:20",
      "tags": [
        "外資",
        "連買",
        "半導體",
        "手機",
        "車用電子相關"
      ],
      "summary": "外資連買，近 10 個交易日正買合計 34,566 張，估算金額約 44.24 億元。",
      "event": "外資連買 2 日，近 10 個交易日正買合計 34,566 張；最新日外資 8,443 張、投信 -11,283 張、自營商 -617 張。",
      "ai": "法人買盤集中在 半導體，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 69695.875,
      "yahooVerification": {
        "status": "matched",
        "source": "https://tw.stock.yahoo.com/quote/2303.TW/institutional-trading",
        "latestNetBuy": 8443,
        "days": 2,
        "latestForeign": 8443,
        "latestTrust": -11283,
        "latestDealer": -617
      }
    },
    {
      "id": "inst-3231-20260724",
      "type": "institutional",
      "title": "3231 緯創",
      "stockCode": "3231",
      "stockName": "緯創",
      "sector": "電腦及週邊設備",
      "group": "電腦及週邊設備",
      "institutionType": "自營商",
      "direction": "同步買超",
      "days": 6,
      "consecutiveBuyDays": 6,
      "streaks": {
        "外資": 5,
        "投信": 2,
        "自營商": 6
      },
      "latestNetBuy": 1175,
      "buyVolume": 9395,
      "buyAmount": 0,
      "syncCount": 3,
      "importance": "高",
      "timestamp": "2026/07/24 18:20",
      "tags": [
        "自營商",
        "同步買超",
        "電腦及週邊設備",
        "3D技術",
        "3D感測"
      ],
      "summary": "自營商同步買超，近 10 個交易日正買合計 9,395 張，估算金額約 0.00 億元。",
      "event": "自營商連買 6 日，近 10 個交易日正買合計 9,395 張；最新日外資 32,435 張、投信 10,843 張、自營商 1,175 張。",
      "ai": "法人買盤集中在 電腦及週邊設備，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 192203.664,
      "yahooVerification": {
        "status": "matched",
        "source": "https://tw.stock.yahoo.com/quote/3231.TW/institutional-trading",
        "latestNetBuy": 1175,
        "days": 6,
        "latestForeign": 32435,
        "latestTrust": 10843,
        "latestDealer": 1175
      }
    },
    {
      "id": "inst-2618-20260724",
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
      "latestNetBuy": 16213,
      "buyVolume": 218408,
      "buyAmount": 0,
      "syncCount": 3,
      "importance": "高",
      "timestamp": "2026/07/24 18:20",
      "tags": [
        "外資",
        "同步買超",
        "航運業",
        "三通",
        "運輸事業"
      ],
      "summary": "外資同步買超，近 10 個交易日正買合計 218,408 張，估算金額約 0.00 億元。",
      "event": "外資連買 10 日，近 10 個交易日正買合計 218,408 張；最新日外資 16,213 張、投信 462 張、自營商 27 張。",
      "ai": "法人買盤集中在 航運業，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 223986.754,
      "yahooVerification": {
        "status": "days-different",
        "source": "https://tw.stock.yahoo.com/quote/2618.TW/institutional-trading",
        "latestNetBuy": 16213,
        "days": 13,
        "latestForeign": 16213,
        "latestTrust": 462,
        "latestDealer": 27
      }
    },
    {
      "id": "macro-inflation-rate-mom-final-jun-20260710",
      "type": "macro",
      "title": "通膨率",
      "eventName": "通膨率",
      "originalEventName": "Inflation Rate MoM Final (Jun)",
      "sourcePublishTime": "2026/07/10 14:45 Asia/Taipei",
      "country": "法國",
      "publishTime": "2026/07/10 14:45",
      "previous": "0.1",
      "forecast": "-0.2",
      "actual": "-0.3",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "importance": "中高",
      "timestamp": "2026/07/10 14:45",
      "tags": [
        "法國",
        "通膨率",
        "偏多"
      ],
      "summary": "通膨率 將於 2026/07/10 14:45 公布，市場關注前值 0.1、預期 -0.2。",
      "event": "法國 通膨率，前值 0.1、預期 -0.2、實際 -0.3。",
      "ai": "目前 AI 判斷為偏多觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "https://www.insee.fr",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    },
    {
      "id": "macro-harmonised-inflation-rate-mom-final-jun-20260710",
      "type": "macro",
      "title": "通膨率",
      "eventName": "通膨率",
      "originalEventName": "Harmonised Inflation Rate MoM Final (Jun)",
      "sourcePublishTime": "2026/07/10 14:00 Asia/Taipei",
      "country": "德國",
      "publishTime": "2026/07/10 14:00",
      "previous": "-0.1",
      "forecast": "-0.2",
      "actual": "-0.2",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "importance": "中高",
      "timestamp": "2026/07/10 14:00",
      "tags": [
        "德國",
        "通膨率",
        "中性"
      ],
      "summary": "通膨率 將於 2026/07/10 14:00 公布，市場關注前值 -0.1、預期 -0.2。",
      "event": "德國 通膨率，前值 -0.1、預期 -0.2、實際 -0.2。",
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
      "id": "macro-initial-jobless-claims-jul-04-20260709",
      "type": "macro",
      "title": "初領失業救濟金人數",
      "eventName": "初領失業救濟金人數",
      "originalEventName": "Initial Jobless Claims (Jul/04)",
      "sourcePublishTime": "2026/07/09 20:30 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/07/09 20:30",
      "previous": "217",
      "forecast": "218",
      "actual": "215",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏空",
      "impact": "影響就業強弱、薪資通膨與聯準會政策預期。",
      "importance": "中高",
      "timestamp": "2026/07/09 20:30",
      "tags": [
        "美國",
        "初領失業救濟金人數",
        "偏空"
      ],
      "summary": "初領失業救濟金人數 將於 2026/07/09 20:30 公布，市場關注前值 217、預期 218。",
      "event": "美國 初領失業救濟金人數，前值 217、預期 218、實際 215。",
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
      "id": "macro-ecb-monetary-policy-meeting-accounts-20260709",
      "type": "macro",
      "title": "ECB Monetary Policy Meeting Accounts",
      "eventName": "ECB Monetary Policy Meeting Accounts",
      "originalEventName": "ECB Monetary Policy Meeting Accounts",
      "sourcePublishTime": "2026/07/09 19:30 Asia/Taipei",
      "country": "歐元區",
      "publishTime": "2026/07/09 19:30",
      "previous": "—",
      "forecast": "—",
      "actual": null,
      "status": "等待公布",
      "statusLevel": "upcoming",
      "direction": "中性",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/07/09 19:30",
      "tags": [
        "歐元區",
        "ECB",
        "中性"
      ],
      "summary": "ECB Monetary Policy Meeting Accounts 將於 2026/07/09 19:30 公布，市場關注前值 —、預期 —。",
      "event": "歐元區 ECB Monetary Policy Meeting Accounts，前值 —、預期 —、實際 尚未公布。",
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
      "id": "macro-ecb-monetary-policy-meeting-accounts-20260709",
      "type": "macro",
      "title": "ECB Monetary Policy Meeting Accounts",
      "eventName": "ECB Monetary Policy Meeting Accounts",
      "originalEventName": "ECB Monetary Policy Meeting Accounts",
      "sourcePublishTime": "2026/07/09 19:30 Asia/Taipei",
      "country": "歐元區",
      "publishTime": "2026/07/09 19:30",
      "previous": "—",
      "forecast": "—",
      "actual": null,
      "status": "等待公布",
      "statusLevel": "upcoming",
      "direction": "中性",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/07/09 19:30",
      "tags": [
        "歐元區",
        "ECB",
        "中性"
      ],
      "summary": "ECB Monetary Policy Meeting Accounts 將於 2026/07/09 19:30 公布，市場關注前值 —、預期 —。",
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
      "id": "macro-initial-jobless-claims-jul-04-20260709",
      "type": "macro",
      "title": "初領失業救濟金人數",
      "eventName": "初領失業救濟金人數",
      "originalEventName": "Initial Jobless Claims (Jul/04)",
      "sourcePublishTime": "2026/07/09 20:30 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/07/09 20:30",
      "previous": "217",
      "forecast": "218",
      "actual": "215",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏空",
      "impact": "影響就業強弱、薪資通膨與聯準會政策預期。",
      "importance": "中高",
      "timestamp": "2026/07/09 20:30",
      "tags": [
        "美國",
        "初領失業救濟金人數",
        "偏空"
      ],
      "summary": "初領失業救濟金人數 將於 2026/07/09 20:30 公布，市場關注前值 217、預期 218。",
      "event": "美國 初領失業救濟金人數，前值 217、預期 218、實際 215。",
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
      "id": "macro-harmonised-inflation-rate-mom-final-jun-20260710",
      "type": "macro",
      "title": "通膨率",
      "eventName": "通膨率",
      "originalEventName": "Harmonised Inflation Rate MoM Final (Jun)",
      "sourcePublishTime": "2026/07/10 14:00 Asia/Taipei",
      "country": "德國",
      "publishTime": "2026/07/10 14:00",
      "previous": "-0.1",
      "forecast": "-0.2",
      "actual": "-0.2",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "importance": "中高",
      "timestamp": "2026/07/10 14:00",
      "tags": [
        "德國",
        "通膨率",
        "中性"
      ],
      "summary": "通膨率 將於 2026/07/10 14:00 公布，市場關注前值 -0.1、預期 -0.2。",
      "event": "德國 通膨率，前值 -0.1、預期 -0.2、實際 -0.2。",
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
      "id": "macro-inflation-rate-mom-final-jun-20260710",
      "type": "macro",
      "title": "通膨率",
      "eventName": "通膨率",
      "originalEventName": "Inflation Rate MoM Final (Jun)",
      "sourcePublishTime": "2026/07/10 14:45 Asia/Taipei",
      "country": "法國",
      "publishTime": "2026/07/10 14:45",
      "previous": "0.1",
      "forecast": "-0.2",
      "actual": "-0.3",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "importance": "中高",
      "timestamp": "2026/07/10 14:45",
      "tags": [
        "法國",
        "通膨率",
        "偏多"
      ],
      "summary": "通膨率 將於 2026/07/10 14:45 公布，市場關注前值 0.1、預期 -0.2。",
      "event": "法國 通膨率，前值 0.1、預期 -0.2、實際 -0.3。",
      "ai": "目前 AI 判斷為偏多觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "https://www.insee.fr",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    },
    {
      "id": "macro-adp-employment-change-weekly-20260714",
      "type": "macro",
      "title": "ADP 就業人數",
      "eventName": "ADP 就業人數",
      "originalEventName": "ADP Employment Change Weekly",
      "sourcePublishTime": "2026/07/14 20:15 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/07/14 20:15",
      "previous": "21",
      "forecast": "—",
      "actual": "19.75",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/07/14 20:15",
      "tags": [
        "美國",
        "ADP",
        "中性"
      ],
      "summary": "ADP 就業人數 將於 2026/07/14 20:15 公布，市場關注前值 21、預期 —。",
      "event": "美國 ADP 就業人數，前值 21、預期 —、實際 19.75。",
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
      "id": "macro-core-inflation-rate-yoy-jun-20260714",
      "type": "macro",
      "title": "核心通膨率",
      "eventName": "核心通膨率",
      "originalEventName": "Core Inflation Rate YoY (Jun)",
      "sourcePublishTime": "2026/07/14 20:30 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/07/14 20:30",
      "previous": "2.9",
      "forecast": "2.8",
      "actual": "2.6",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "importance": "中高",
      "timestamp": "2026/07/14 20:30",
      "tags": [
        "美國",
        "核心通膨率",
        "偏多"
      ],
      "summary": "核心通膨率 將於 2026/07/14 20:30 公布，市場關注前值 2.9、預期 2.8。",
      "event": "美國 核心通膨率，前值 2.9、預期 2.8、實際 2.6。",
      "ai": "目前 AI 判斷為偏多觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "https://www.bls.gov",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    },
    {
      "id": "macro-cpi-jun-20260714",
      "type": "macro",
      "title": "消費者物價指數 CPI",
      "eventName": "消費者物價指數 CPI",
      "originalEventName": "CPI (Jun)",
      "sourcePublishTime": "2026/07/14 20:30 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/07/14 20:30",
      "previous": "335.12",
      "forecast": "334.7",
      "actual": "333.95",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "importance": "高",
      "timestamp": "2026/07/14 20:30",
      "tags": [
        "美國",
        "消費者物價指數",
        "偏多"
      ],
      "summary": "消費者物價指數 CPI 將於 2026/07/14 20:30 公布，市場關注前值 335.12、預期 334.7。",
      "event": "美國 消費者物價指數 CPI，前值 335.12、預期 334.7、實際 333.95。",
      "ai": "目前 AI 判斷為偏多觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "http://www.bls.gov",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    },
    {
      "id": "macro-inflation-rate-yoy-jun-20260714",
      "type": "macro",
      "title": "通膨率",
      "eventName": "通膨率",
      "originalEventName": "Inflation Rate YoY (Jun)",
      "sourcePublishTime": "2026/07/14 20:30 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/07/14 20:30",
      "previous": "4.2",
      "forecast": "3.8",
      "actual": "3.5",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "importance": "中高",
      "timestamp": "2026/07/14 20:30",
      "tags": [
        "美國",
        "通膨率",
        "偏多"
      ],
      "summary": "通膨率 將於 2026/07/14 20:30 公布，市場關注前值 4.2、預期 3.8。",
      "event": "美國 通膨率，前值 4.2、預期 3.8、實際 3.5。",
      "ai": "目前 AI 判斷為偏多觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "http://www.bls.gov/",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    }
  ]
};
