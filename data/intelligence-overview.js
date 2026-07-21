window.IntelligenceOverviewData = {
  "updatedAt": "2026/07/21 18:30",
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
          "19 筆"
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
          "33 個"
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
      "id": "inst-3576-20260721",
      "type": "institutional",
      "title": "3576 聯合再生",
      "stockCode": "3576",
      "stockName": "聯合再生",
      "sector": "光電業",
      "group": "光電業",
      "institutionType": "外資",
      "direction": "連買",
      "days": 8,
      "consecutiveBuyDays": 8,
      "streaks": {
        "外資": 8,
        "投信": 0,
        "自營商": 0
      },
      "latestNetBuy": 11743,
      "buyVolume": 52975,
      "buyAmount": 0,
      "syncCount": 1,
      "importance": "高",
      "timestamp": "2026/07/21 18:20",
      "tags": [
        "外資",
        "連買",
        "光電業",
        "2050淨零碳排",
        "太陽能"
      ],
      "summary": "外資連買，近 10 個交易日正買合計 52,975 張，估算金額約 0.00 億元。",
      "event": "外資連買 8 日，近 10 個交易日正買合計 52,975 張；最新日外資 11,743 張、投信 0 張、自營商 -19 張。",
      "ai": "法人買盤集中在 光電業，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 53122.247,
      "yahooVerification": {
        "status": "matched",
        "source": "https://tw.stock.yahoo.com/quote/3576.TW/institutional-trading",
        "latestNetBuy": 11743,
        "days": 8,
        "latestForeign": 11743,
        "latestTrust": 0,
        "latestDealer": -19
      }
    },
    {
      "id": "inst-2615-20260721",
      "type": "institutional",
      "title": "2615 萬海",
      "stockCode": "2615",
      "stockName": "萬海",
      "sector": "航運業",
      "group": "航運業",
      "institutionType": "外資",
      "direction": "同步買超",
      "days": 3,
      "consecutiveBuyDays": 3,
      "streaks": {
        "外資": 3,
        "投信": 2,
        "自營商": 2
      },
      "latestNetBuy": 13922,
      "buyVolume": 33167,
      "buyAmount": 0,
      "syncCount": 3,
      "importance": "高",
      "timestamp": "2026/07/21 18:20",
      "tags": [
        "外資",
        "同步買超",
        "航運業",
        "三通",
        "運輸事業"
      ],
      "summary": "外資同步買超，近 10 個交易日正買合計 33,167 張，估算金額約 0.00 億元。",
      "event": "外資連買 3 日，近 10 個交易日正買合計 33,167 張；最新日外資 13,922 張、投信 132 張、自營商 377 張。",
      "ai": "法人買盤集中在 航運業，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 34390.49,
      "yahooVerification": {
        "status": "matched",
        "source": "https://tw.stock.yahoo.com/quote/2615.TW/institutional-trading",
        "latestNetBuy": 13922,
        "days": 3,
        "latestForeign": 13922,
        "latestTrust": 132,
        "latestDealer": 377
      }
    },
    {
      "id": "inst-2884-20260721",
      "type": "institutional",
      "title": "2884 玉山金",
      "stockCode": "2884",
      "stockName": "玉山金",
      "sector": "金融保險",
      "group": "金融保險",
      "institutionType": "外資",
      "direction": "同步買超",
      "days": 10,
      "consecutiveBuyDays": 10,
      "streaks": {
        "外資": 10,
        "投信": 4,
        "自營商": 4
      },
      "latestNetBuy": 22051,
      "buyVolume": 156167,
      "buyAmount": 0,
      "syncCount": 3,
      "importance": "高",
      "timestamp": "2026/07/21 18:20",
      "tags": [
        "外資",
        "同步買超",
        "金融保險",
        "電子商務及延伸",
        "金融業"
      ],
      "summary": "外資同步買超，近 10 個交易日正買合計 156,167 張，估算金額約 0.00 億元。",
      "event": "外資連買 10 日，近 10 個交易日正買合計 156,167 張；最新日外資 22,051 張、投信 2,710 張、自營商 1,449 張。",
      "ai": "法人買盤集中在 金融保險，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 185852.38,
      "yahooVerification": {
        "status": "days-different",
        "source": "https://tw.stock.yahoo.com/quote/2884.TW/institutional-trading",
        "latestNetBuy": 22051,
        "days": 12,
        "latestForeign": 22051,
        "latestTrust": 2710,
        "latestDealer": 1449
      }
    },
    {
      "id": "inst-2618-20260721",
      "type": "institutional",
      "title": "2618 長榮航",
      "stockCode": "2618",
      "stockName": "長榮航",
      "sector": "航運業",
      "group": "航運業",
      "institutionType": "外資",
      "direction": "連買",
      "days": 10,
      "consecutiveBuyDays": 10,
      "streaks": {
        "外資": 10,
        "投信": 0,
        "自營商": 4
      },
      "latestNetBuy": 19824,
      "buyVolume": 295777,
      "buyAmount": 0,
      "syncCount": 2,
      "importance": "高",
      "timestamp": "2026/07/21 18:20",
      "tags": [
        "外資",
        "連買",
        "航運業",
        "三通",
        "運輸事業"
      ],
      "summary": "外資連買，近 10 個交易日正買合計 295,777 張，估算金額約 0.00 億元。",
      "event": "外資連買 10 日，近 10 個交易日正買合計 295,777 張；最新日外資 19,824 張、投信 -3,504 張、自營商 443 張。",
      "ai": "法人買盤集中在 航運業，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 307186.979,
      "yahooVerification": {
        "status": "matched",
        "source": "https://tw.stock.yahoo.com/quote/2618.TW/institutional-trading",
        "latestNetBuy": 19824,
        "days": 10,
        "latestForeign": 19824,
        "latestTrust": -3504,
        "latestDealer": 443
      }
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
    },
    {
      "id": "macro-adp-employment-change-weekly-20260707",
      "type": "macro",
      "title": "ADP 就業人數",
      "eventName": "ADP 就業人數",
      "originalEventName": "ADP Employment Change Weekly",
      "sourcePublishTime": "2026/07/07 20:15 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/07/07 20:15",
      "previous": "24.25",
      "forecast": "—",
      "actual": "21",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/07/07 20:15",
      "tags": [
        "美國",
        "ADP",
        "中性"
      ],
      "summary": "ADP 就業人數 將於 2026/07/07 20:15 公布，市場關注前值 24.25、預期 —。",
      "event": "美國 ADP 就業人數，前值 24.25、預期 —、實際 21。",
      "ai": "目前 AI 判斷為中性觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響市場風險偏好與資金輪動。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar / 鉅亨網全球經濟指標",
      "sourceUrl": "https://adpemploymentreport.com/",
      "sourceList": [
        "TradingView Economic Calendar",
        "鉅亨網全球經濟指標"
      ]
    }
  ],
  "macroEvents": [
    {
      "id": "macro-adp-employment-change-weekly-20260707",
      "type": "macro",
      "title": "ADP 就業人數",
      "eventName": "ADP 就業人數",
      "originalEventName": "ADP Employment Change Weekly",
      "sourcePublishTime": "2026/07/07 20:15 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/07/07 20:15",
      "previous": "24.25",
      "forecast": "—",
      "actual": "21",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/07/07 20:15",
      "tags": [
        "美國",
        "ADP",
        "中性"
      ],
      "summary": "ADP 就業人數 將於 2026/07/07 20:15 公布，市場關注前值 24.25、預期 —。",
      "event": "美國 ADP 就業人數，前值 24.25、預期 —、實際 21。",
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
    }
  ]
};
