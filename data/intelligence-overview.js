window.IntelligenceOverviewData = {
  "updatedAt": "2026/09/28 07:47",
  "status": "運作中",
  "cards": [
    {
      "label": "今日偵測情報",
      "value": 240,
      "unit": "筆",
      "icon": "file"
    },
    {
      "label": "高重要度訊號",
      "value": 52,
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
      "value": "綜合 PMI",
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
          "51 個"
        ],
        [
          "下一事件",
          "綜合 PMI"
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
      "id": "inst-5904-20260924",
      "type": "institutional",
      "title": "5904 寶雅*",
      "stockCode": "5904",
      "stockName": "寶雅*",
      "sector": "居家生活",
      "group": "居家生活",
      "institutionType": "投信",
      "direction": "連買",
      "days": 7,
      "consecutiveBuyDays": 7,
      "streaks": {
        "外資": 0,
        "投信": 7,
        "自營商": 0
      },
      "latestNetBuy": 83,
      "buyVolume": 2508,
      "buyAmount": 0,
      "syncCount": 1,
      "importance": "高",
      "timestamp": "2026/09/24 18:20",
      "tags": [
        "投信",
        "連買",
        "居家生活",
        "五倍券",
        "電信.零售通路"
      ],
      "summary": "投信連買，近 10 個交易日正買合計 2,508 張，估算金額約 0.00 億元。",
      "event": "投信連買 7 日，近 10 個交易日正買合計 2,508 張；最新日外資 -4,354 張、投信 83 張、自營商 -72 張。",
      "ai": "法人買盤集中在 居家生活，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 6726.389,
      "yahooVerification": {
        "status": "matched",
        "source": "https://tw.stock.yahoo.com/quote/5904.TW/institutional-trading",
        "latestNetBuy": 83,
        "days": 7,
        "latestForeign": -4354,
        "latestTrust": 83,
        "latestDealer": -72
      }
    },
    {
      "id": "inst-1303-20260924",
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
        "外資": 1,
        "投信": 0,
        "自營商": 2
      },
      "latestNetBuy": 1505,
      "buyVolume": 2951,
      "buyAmount": 7.02,
      "syncCount": 2,
      "importance": "高",
      "timestamp": "2026/09/24 18:20",
      "tags": [
        "自營商",
        "連買",
        "塑膠工業",
        "APPLE概念",
        "越南設廠"
      ],
      "summary": "自營商連買，近 10 個交易日正買合計 2,951 張，估算金額約 7.02 億元。",
      "event": "自營商連買 2 日，近 10 個交易日正買合計 2,951 張；最新日外資 17,802 張、投信 -5,067 張、自營商 1,505 張。",
      "ai": "法人買盤集中在 塑膠工業，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 56272.471,
      "yahooVerification": {
        "status": "matched",
        "source": "https://tw.stock.yahoo.com/quote/1303.TW/institutional-trading",
        "latestNetBuy": 1505,
        "days": 2,
        "latestForeign": 17802,
        "latestTrust": -5067,
        "latestDealer": 1505
      }
    },
    {
      "id": "inst-8150-20260924",
      "type": "institutional",
      "title": "8150 南茂",
      "stockCode": "8150",
      "stockName": "南茂",
      "sector": "半導體",
      "group": "半導體",
      "institutionType": "外資",
      "direction": "連買",
      "days": 7,
      "consecutiveBuyDays": 7,
      "streaks": {
        "外資": 7,
        "投信": 1,
        "自營商": 0
      },
      "latestNetBuy": 14649,
      "buyVolume": 66490,
      "buyAmount": 0,
      "syncCount": 2,
      "importance": "高",
      "timestamp": "2026/09/24 18:20",
      "tags": [
        "外資",
        "連買",
        "半導體",
        "IC封裝測試",
        "IC封裝"
      ],
      "summary": "外資連買，近 10 個交易日正買合計 66,490 張，估算金額約 0.00 億元。",
      "event": "外資連買 7 日，近 10 個交易日正買合計 66,490 張；最新日外資 14,649 張、投信 10 張、自營商 -774 張。",
      "ai": "法人買盤集中在 半導體，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 72135.845,
      "yahooVerification": {
        "status": "matched",
        "source": "https://tw.stock.yahoo.com/quote/8150.TW/institutional-trading",
        "latestNetBuy": 14649,
        "days": 7,
        "latestForeign": 14649,
        "latestTrust": 10,
        "latestDealer": -774
      }
    },
    {
      "id": "inst-2610-20260924",
      "type": "institutional",
      "title": "2610 華航",
      "stockCode": "2610",
      "stockName": "華航",
      "sector": "航運業",
      "group": "航運業",
      "institutionType": "投信",
      "direction": "連買",
      "days": 7,
      "consecutiveBuyDays": 7,
      "streaks": {
        "外資": 0,
        "投信": 7,
        "自營商": 0
      },
      "latestNetBuy": 5571,
      "buyVolume": 21974,
      "buyAmount": 0,
      "syncCount": 1,
      "importance": "高",
      "timestamp": "2026/09/24 18:20",
      "tags": [
        "投信",
        "連買",
        "航運業",
        "三通",
        "官股企業"
      ],
      "summary": "投信連買，近 10 個交易日正買合計 21,974 張，估算金額約 0.00 億元。",
      "event": "投信連買 7 日，近 10 個交易日正買合計 21,974 張；最新日外資 -14,209 張、投信 5,571 張、自營商 -119 張。",
      "ai": "法人買盤集中在 航運業，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 55644.843,
      "yahooVerification": {
        "status": "matched",
        "source": "https://tw.stock.yahoo.com/quote/2610.TW/institutional-trading",
        "latestNetBuy": 5571,
        "days": 7,
        "latestForeign": -14209,
        "latestTrust": 5571,
        "latestDealer": -119
      }
    },
    {
      "id": "macro-hmrc-payrolls-change-aug-20260915",
      "type": "macro",
      "title": "非農就業人數",
      "eventName": "非農就業人數",
      "originalEventName": "HMRC Payrolls Change (Aug)",
      "sourcePublishTime": "2026/09/15 14:00 Asia/Taipei",
      "country": "英國",
      "publishTime": "2026/09/15 14:00",
      "previous": "-19",
      "forecast": "—",
      "actual": "-26",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響就業強弱、薪資通膨與聯準會政策預期。",
      "importance": "高",
      "timestamp": "2026/09/15 14:00",
      "tags": [
        "英國",
        "非農就業人數",
        "中性"
      ],
      "summary": "非農就業人數 將於 2026/09/15 14:00 公布，市場關注前值 -19、預期 —。",
      "event": "英國 非農就業人數，前值 -19、預期 —、實際 -26。",
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
      "id": "macro-harmonised-inflation-rate-yoy-final-aug-20260915",
      "type": "macro",
      "title": "通膨率",
      "eventName": "通膨率",
      "originalEventName": "Harmonised Inflation Rate YoY Final (Aug)",
      "sourcePublishTime": "2026/09/15 14:45 Asia/Taipei",
      "country": "法國",
      "publishTime": "2026/09/15 14:45",
      "previous": "2.4",
      "forecast": "2.7",
      "actual": "2.6",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "importance": "中高",
      "timestamp": "2026/09/15 14:45",
      "tags": [
        "法國",
        "通膨率",
        "偏多"
      ],
      "summary": "通膨率 將於 2026/09/15 14:45 公布，市場關注前值 2.4、預期 2.7。",
      "event": "法國 通膨率，前值 2.4、預期 2.7、實際 2.6。",
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
      "id": "macro-unemployment-rate-jul-20260915",
      "type": "macro",
      "title": "失業率",
      "eventName": "失業率",
      "originalEventName": "Unemployment Rate (Jul)",
      "sourcePublishTime": "2026/09/15 14:00 Asia/Taipei",
      "country": "英國",
      "publishTime": "2026/09/15 14:00",
      "previous": "4.9",
      "forecast": "5",
      "actual": "4.9",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏空",
      "impact": "影響全球資金成本、美元走勢與風險資產評價。",
      "importance": "中高",
      "timestamp": "2026/09/15 14:00",
      "tags": [
        "英國",
        "失業率",
        "偏空"
      ],
      "summary": "失業率 將於 2026/09/15 14:00 公布，市場關注前值 4.9、預期 5。",
      "event": "英國 失業率，前值 4.9、預期 5、實際 4.9。",
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
      "id": "macro-employment-change-jul-20260915",
      "type": "macro",
      "title": "就業人數變化",
      "eventName": "就業人數變化",
      "originalEventName": "Employment Change (Jul)",
      "sourcePublishTime": "2026/09/15 14:00 Asia/Taipei",
      "country": "英國",
      "publishTime": "2026/09/15 14:00",
      "previous": "83",
      "forecast": "—",
      "actual": "67",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/09/15 14:00",
      "tags": [
        "英國",
        "就業人數變化",
        "中性"
      ],
      "summary": "就業人數變化 將於 2026/09/15 14:00 公布，市場關注前值 83、預期 —。",
      "event": "英國 就業人數變化，前值 83、預期 —、實際 67。",
      "ai": "目前 AI 判斷為中性觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響市場風險偏好與資金輪動。",
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
      "id": "macro-hmrc-payrolls-change-aug-20260915",
      "type": "macro",
      "title": "非農就業人數",
      "eventName": "非農就業人數",
      "originalEventName": "HMRC Payrolls Change (Aug)",
      "sourcePublishTime": "2026/09/15 14:00 Asia/Taipei",
      "country": "英國",
      "publishTime": "2026/09/15 14:00",
      "previous": "-19",
      "forecast": "—",
      "actual": "-26",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響就業強弱、薪資通膨與聯準會政策預期。",
      "importance": "高",
      "timestamp": "2026/09/15 14:00",
      "tags": [
        "英國",
        "非農就業人數",
        "中性"
      ],
      "summary": "非農就業人數 將於 2026/09/15 14:00 公布，市場關注前值 -19、預期 —。",
      "event": "英國 非農就業人數，前值 -19、預期 —、實際 -26。",
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
      "id": "macro-unemployment-rate-jul-20260915",
      "type": "macro",
      "title": "失業率",
      "eventName": "失業率",
      "originalEventName": "Unemployment Rate (Jul)",
      "sourcePublishTime": "2026/09/15 14:00 Asia/Taipei",
      "country": "英國",
      "publishTime": "2026/09/15 14:00",
      "previous": "4.9",
      "forecast": "5",
      "actual": "4.9",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏空",
      "impact": "影響全球資金成本、美元走勢與風險資產評價。",
      "importance": "中高",
      "timestamp": "2026/09/15 14:00",
      "tags": [
        "英國",
        "失業率",
        "偏空"
      ],
      "summary": "失業率 將於 2026/09/15 14:00 公布，市場關注前值 4.9、預期 5。",
      "event": "英國 失業率，前值 4.9、預期 5、實際 4.9。",
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
      "id": "macro-employment-change-jul-20260915",
      "type": "macro",
      "title": "就業人數變化",
      "eventName": "就業人數變化",
      "originalEventName": "Employment Change (Jul)",
      "sourcePublishTime": "2026/09/15 14:00 Asia/Taipei",
      "country": "英國",
      "publishTime": "2026/09/15 14:00",
      "previous": "83",
      "forecast": "—",
      "actual": "67",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/09/15 14:00",
      "tags": [
        "英國",
        "就業人數變化",
        "中性"
      ],
      "summary": "就業人數變化 將於 2026/09/15 14:00 公布，市場關注前值 83、預期 —。",
      "event": "英國 就業人數變化，前值 83、預期 —、實際 67。",
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
      "id": "macro-harmonised-inflation-rate-yoy-final-aug-20260915",
      "type": "macro",
      "title": "通膨率",
      "eventName": "通膨率",
      "originalEventName": "Harmonised Inflation Rate YoY Final (Aug)",
      "sourcePublishTime": "2026/09/15 14:45 Asia/Taipei",
      "country": "法國",
      "publishTime": "2026/09/15 14:45",
      "previous": "2.4",
      "forecast": "2.7",
      "actual": "2.6",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "importance": "中高",
      "timestamp": "2026/09/15 14:45",
      "tags": [
        "法國",
        "通膨率",
        "偏多"
      ],
      "summary": "通膨率 將於 2026/09/15 14:45 公布，市場關注前值 2.4、預期 2.7。",
      "event": "法國 通膨率，前值 2.4、預期 2.7、實際 2.6。",
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
      "id": "macro-adp-employment-change-weekly-20260915",
      "type": "macro",
      "title": "ADP 就業人數",
      "eventName": "ADP 就業人數",
      "originalEventName": "ADP Employment Change Weekly",
      "sourcePublishTime": "2026/09/15 20:15 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/09/15 20:15",
      "previous": "12.25",
      "forecast": "—",
      "actual": "16.25",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/09/15 20:15",
      "tags": [
        "美國",
        "ADP",
        "中性"
      ],
      "summary": "ADP 就業人數 將於 2026/09/15 20:15 公布，市場關注前值 12.25、預期 —。",
      "event": "美國 ADP 就業人數，前值 12.25、預期 —、實際 16.25。",
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
      "id": "macro-ppi-output-mom-aug-20260916",
      "type": "macro",
      "title": "生產者物價指數 PPI",
      "eventName": "生產者物價指數 PPI",
      "originalEventName": "PPI Output MoM (Aug)",
      "sourcePublishTime": "2026/09/16 14:00 Asia/Taipei",
      "country": "英國",
      "publishTime": "2026/09/16 14:00",
      "previous": "0.4",
      "forecast": "0.3",
      "actual": "0.7",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/09/16 14:00",
      "tags": [
        "英國",
        "生產者物價指數",
        "偏多"
      ],
      "summary": "生產者物價指數 PPI 將於 2026/09/16 14:00 公布，市場關注前值 0.4、預期 0.3。",
      "event": "英國 生產者物價指數 PPI，前值 0.4、預期 0.3、實際 0.7。",
      "ai": "目前 AI 判斷為偏多觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響市場風險偏好與資金輪動。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar / 鉅亨網全球經濟指標",
      "sourceUrl": "http://www.ons.gov.uk/",
      "sourceList": [
        "TradingView Economic Calendar",
        "鉅亨網全球經濟指標"
      ]
    },
    {
      "id": "macro-inflation-rate-yoy-aug-20260916",
      "type": "macro",
      "title": "通膨率",
      "eventName": "通膨率",
      "originalEventName": "Inflation Rate YoY (Aug)",
      "sourcePublishTime": "2026/09/16 14:00 Asia/Taipei",
      "country": "英國",
      "publishTime": "2026/09/16 14:00",
      "previous": "2.9",
      "forecast": "3.1",
      "actual": "3.1",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "importance": "中高",
      "timestamp": "2026/09/16 14:00",
      "tags": [
        "英國",
        "通膨率",
        "中性"
      ],
      "summary": "通膨率 將於 2026/09/16 14:00 公布，市場關注前值 2.9、預期 3.1。",
      "event": "英國 通膨率，前值 2.9、預期 3.1、實際 3.1。",
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
      "id": "macro-core-inflation-rate-mom-aug-20260916",
      "type": "macro",
      "title": "核心通膨率",
      "eventName": "核心通膨率",
      "originalEventName": "Core Inflation Rate MoM (Aug)",
      "sourcePublishTime": "2026/09/16 14:00 Asia/Taipei",
      "country": "英國",
      "publishTime": "2026/09/16 14:00",
      "previous": "0.2",
      "forecast": "0.3",
      "actual": "0.3",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "importance": "中高",
      "timestamp": "2026/09/16 14:00",
      "tags": [
        "英國",
        "核心通膨率",
        "中性"
      ],
      "summary": "核心通膨率 將於 2026/09/16 14:00 公布，市場關注前值 0.2、預期 0.3。",
      "event": "英國 核心通膨率，前值 0.2、預期 0.3、實際 0.3。",
      "ai": "目前 AI 判斷為中性觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "http://www.ons.gov.uk/",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    }
  ]
};
