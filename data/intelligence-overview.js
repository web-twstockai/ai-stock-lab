window.IntelligenceOverviewData = {
  "updatedAt": "2026/08/21 18:30",
  "status": "運作中",
  "cards": [
    {
      "label": "今日偵測情報",
      "value": 254,
      "unit": "筆",
      "icon": "file"
    },
    {
      "label": "高重要度訊號",
      "value": 62,
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
      "value": "GDP 經濟成長率",
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
          "20 筆"
        ],
        [
          "三大法人同步買",
          "14 筆"
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
          "30 個"
        ],
        [
          "下一事件",
          "GDP 經濟成長率"
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
      "id": "inst-1402-20260821",
      "type": "institutional",
      "title": "1402 遠東新",
      "stockCode": "1402",
      "stockName": "遠東新",
      "sector": "紡織纖維",
      "group": "紡織纖維",
      "institutionType": "投信",
      "direction": "連買",
      "days": 10,
      "consecutiveBuyDays": 10,
      "streaks": {
        "外資": 5,
        "投信": 10,
        "自營商": 0
      },
      "latestNetBuy": 11110,
      "buyVolume": 20229,
      "buyAmount": 0,
      "syncCount": 2,
      "importance": "高",
      "timestamp": "2026/08/21 18:20",
      "tags": [
        "投信",
        "連買",
        "紡織纖維",
        "S&P 台商收成指數",
        "中國"
      ],
      "summary": "投信連買，近 10 個交易日正買合計 20,229 張，估算金額約 0.00 億元。",
      "event": "投信連買 10 日，近 10 個交易日正買合計 20,229 張；最新日外資 15,091 張、投信 11,110 張、自營商 -616 張。",
      "ai": "法人買盤集中在 紡織纖維，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 102451.497,
      "yahooVerification": {
        "status": "days-different",
        "source": "https://tw.stock.yahoo.com/quote/1402.TW/institutional-trading",
        "latestNetBuy": 11110,
        "days": 13,
        "latestForeign": 15091,
        "latestTrust": 11110,
        "latestDealer": -616
      }
    },
    {
      "id": "inst-2303-20260821",
      "type": "institutional",
      "title": "2303 聯電",
      "stockCode": "2303",
      "stockName": "聯電",
      "sector": "半導體",
      "group": "半導體",
      "institutionType": "外資",
      "direction": "同步買超",
      "days": 3,
      "consecutiveBuyDays": 3,
      "streaks": {
        "外資": 3,
        "投信": 1,
        "自營商": 2
      },
      "latestNetBuy": 10888,
      "buyVolume": 103112,
      "buyAmount": 119.09,
      "syncCount": 3,
      "importance": "高",
      "timestamp": "2026/08/21 18:20",
      "tags": [
        "外資",
        "同步買超",
        "半導體",
        "手機",
        "車用電子相關"
      ],
      "summary": "外資同步買超，近 10 個交易日正買合計 103,112 張，估算金額約 119.09 億元。",
      "event": "外資連買 3 日，近 10 個交易日正買合計 103,112 張；最新日外資 10,888 張、投信 506 張、自營商 997 張。",
      "ai": "法人買盤集中在 半導體，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 124830.287,
      "yahooVerification": {
        "status": "matched",
        "source": "https://tw.stock.yahoo.com/quote/2303.TW/institutional-trading",
        "latestNetBuy": 10888,
        "days": 3,
        "latestForeign": 10888,
        "latestTrust": 506,
        "latestDealer": 997
      }
    },
    {
      "id": "inst-2615-20260821",
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
        "投信": 1,
        "自營商": 2
      },
      "latestNetBuy": 16239,
      "buyVolume": 85484,
      "buyAmount": 0,
      "syncCount": 3,
      "importance": "高",
      "timestamp": "2026/08/21 18:20",
      "tags": [
        "外資",
        "同步買超",
        "航運業",
        "三通",
        "運輸事業"
      ],
      "summary": "外資同步買超，近 10 個交易日正買合計 85,484 張，估算金額約 0.00 億元。",
      "event": "外資連買 3 日，近 10 個交易日正買合計 85,484 張；最新日外資 16,239 張、投信 829 張、自營商 1,456 張。",
      "ai": "法人買盤集中在 航運業，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 94238.256,
      "yahooVerification": {
        "status": "matched",
        "source": "https://tw.stock.yahoo.com/quote/2615.TW/institutional-trading",
        "latestNetBuy": 16239,
        "days": 3,
        "latestForeign": 16239,
        "latestTrust": 829,
        "latestDealer": 1456
      }
    },
    {
      "id": "inst-2330-20260821",
      "type": "institutional",
      "title": "2330 台積電",
      "stockCode": "2330",
      "stockName": "台積電",
      "sector": "半導體",
      "group": "半導體",
      "institutionType": "外資",
      "direction": "同步買超",
      "days": 2,
      "consecutiveBuyDays": 2,
      "streaks": {
        "外資": 2,
        "投信": 2,
        "自營商": 1
      },
      "latestNetBuy": 5795,
      "buyVolume": 21187,
      "buyAmount": 503.2,
      "syncCount": 3,
      "importance": "高",
      "timestamp": "2026/08/21 18:20",
      "tags": [
        "外資",
        "同步買超",
        "半導體",
        "3D技術",
        "3D感測"
      ],
      "summary": "外資同步買超，近 10 個交易日正買合計 21,187 張，估算金額約 503.20 億元。",
      "event": "外資連買 2 日，近 10 個交易日正買合計 21,187 張；最新日外資 5,795 張、投信 184 張、自營商 457 張。",
      "ai": "法人買盤集中在 半導體，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 26114.599,
      "yahooVerification": {
        "status": "matched",
        "source": "https://tw.stock.yahoo.com/quote/2330.TW/institutional-trading",
        "latestNetBuy": 5795,
        "days": 2,
        "latestForeign": 5795,
        "latestTrust": 184,
        "latestDealer": 457
      }
    },
    {
      "id": "macro-private-non-farm-payrolls-qoq-prel-q2-20260806",
      "type": "macro",
      "title": "非農就業人數",
      "eventName": "非農就業人數",
      "originalEventName": "Private Non Farm Payrolls QoQ Prel (Q2)",
      "sourcePublishTime": "2026/08/06 14:45 Asia/Taipei",
      "country": "法國",
      "publishTime": "2026/08/06 14:45",
      "previous": "-0.1",
      "forecast": "-0.1",
      "actual": "-0.1",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響就業強弱、薪資通膨與聯準會政策預期。",
      "importance": "高",
      "timestamp": "2026/08/06 14:45",
      "tags": [
        "法國",
        "非農就業人數",
        "中性"
      ],
      "summary": "非農就業人數 將於 2026/08/06 14:45 公布，市場關注前值 -0.1、預期 -0.1。",
      "event": "法國 非農就業人數，前值 -0.1、預期 -0.1、實際 -0.1。",
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
      "id": "macro-s-p-global-pmi-20260806",
      "type": "macro",
      "title": "PMI 採購經理人指數",
      "eventName": "PMI 採購經理人指數",
      "originalEventName": "S&P Global營建業PMI",
      "sourcePublishTime": "2026/08/06 16:30 Asia/Taipei",
      "country": "英國",
      "publishTime": "2026/08/06 16:30",
      "previous": "38.4",
      "forecast": "40.9",
      "actual": "44.7",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/08/06 16:30",
      "tags": [
        "英國",
        "PMI",
        "偏多"
      ],
      "summary": "PMI 採購經理人指數 將於 2026/08/06 16:30 公布，市場關注前值 38.4、預期 40.9。",
      "event": "英國 PMI 採購經理人指數，前值 38.4、預期 40.9、實際 44.7。",
      "ai": "目前 AI 判斷為偏多觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響市場風險偏好與資金輪動。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "鉅亨網全球經濟指標",
      "sourceUrl": "https://www.cnyes.com/economy/indicator",
      "sourceList": [
        "鉅亨網全球經濟指標"
      ]
    },
    {
      "id": "macro-s-p-global-pmi-20260806",
      "type": "macro",
      "title": "PMI 採購經理人指數",
      "eventName": "PMI 採購經理人指數",
      "originalEventName": "S&P Global營建業PMI",
      "sourcePublishTime": "2026/08/06 15:30 Asia/Taipei",
      "country": "法國",
      "publishTime": "2026/08/06 15:30",
      "previous": "38.2",
      "forecast": "39.8",
      "actual": "41.5",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/08/06 15:30",
      "tags": [
        "法國",
        "PMI",
        "偏多"
      ],
      "summary": "PMI 採購經理人指數 將於 2026/08/06 15:30 公布，市場關注前值 38.2、預期 39.8。",
      "event": "法國 PMI 採購經理人指數，前值 38.2、預期 39.8、實際 41.5。",
      "ai": "目前 AI 判斷為偏多觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響市場風險偏好與資金輪動。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "鉅亨網全球經濟指標",
      "sourceUrl": "https://www.cnyes.com/economy/indicator",
      "sourceList": [
        "鉅亨網全球經濟指標"
      ]
    },
    {
      "id": "macro-s-p-global-pmi-20260806",
      "type": "macro",
      "title": "PMI 採購經理人指數",
      "eventName": "PMI 採購經理人指數",
      "originalEventName": "S&P Global營建業PMI",
      "sourcePublishTime": "2026/08/06 15:30 Asia/Taipei",
      "country": "德國",
      "publishTime": "2026/08/06 15:30",
      "previous": "44.8",
      "forecast": "45.0",
      "actual": "42.1",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏空",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/08/06 15:30",
      "tags": [
        "德國",
        "PMI",
        "偏空"
      ],
      "summary": "PMI 採購經理人指數 將於 2026/08/06 15:30 公布，市場關注前值 44.8、預期 45.0。",
      "event": "德國 PMI 採購經理人指數，前值 44.8、預期 45.0、實際 42.1。",
      "ai": "目前 AI 判斷為偏空觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
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
      "id": "macro-private-non-farm-payrolls-qoq-prel-q2-20260806",
      "type": "macro",
      "title": "非農就業人數",
      "eventName": "非農就業人數",
      "originalEventName": "Private Non Farm Payrolls QoQ Prel (Q2)",
      "sourcePublishTime": "2026/08/06 14:45 Asia/Taipei",
      "country": "法國",
      "publishTime": "2026/08/06 14:45",
      "previous": "-0.1",
      "forecast": "-0.1",
      "actual": "-0.1",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響就業強弱、薪資通膨與聯準會政策預期。",
      "importance": "高",
      "timestamp": "2026/08/06 14:45",
      "tags": [
        "法國",
        "非農就業人數",
        "中性"
      ],
      "summary": "非農就業人數 將於 2026/08/06 14:45 公布，市場關注前值 -0.1、預期 -0.1。",
      "event": "法國 非農就業人數，前值 -0.1、預期 -0.1、實際 -0.1。",
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
      "id": "macro-s-p-global-pmi-20260806",
      "type": "macro",
      "title": "PMI 採購經理人指數",
      "eventName": "PMI 採購經理人指數",
      "originalEventName": "S&P Global營建業PMI",
      "sourcePublishTime": "2026/08/06 15:30 Asia/Taipei",
      "country": "法國",
      "publishTime": "2026/08/06 15:30",
      "previous": "38.2",
      "forecast": "39.8",
      "actual": "41.5",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/08/06 15:30",
      "tags": [
        "法國",
        "PMI",
        "偏多"
      ],
      "summary": "PMI 採購經理人指數 將於 2026/08/06 15:30 公布，市場關注前值 38.2、預期 39.8。",
      "event": "法國 PMI 採購經理人指數，前值 38.2、預期 39.8、實際 41.5。",
      "ai": "目前 AI 判斷為偏多觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響市場風險偏好與資金輪動。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "鉅亨網全球經濟指標",
      "sourceUrl": "https://www.cnyes.com/economy/indicator",
      "sourceList": [
        "鉅亨網全球經濟指標"
      ]
    },
    {
      "id": "macro-s-p-global-pmi-20260806",
      "type": "macro",
      "title": "PMI 採購經理人指數",
      "eventName": "PMI 採購經理人指數",
      "originalEventName": "S&P Global營建業PMI",
      "sourcePublishTime": "2026/08/06 15:30 Asia/Taipei",
      "country": "德國",
      "publishTime": "2026/08/06 15:30",
      "previous": "44.8",
      "forecast": "45.0",
      "actual": "42.1",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏空",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/08/06 15:30",
      "tags": [
        "德國",
        "PMI",
        "偏空"
      ],
      "summary": "PMI 採購經理人指數 將於 2026/08/06 15:30 公布，市場關注前值 44.8、預期 45.0。",
      "event": "德國 PMI 採購經理人指數，前值 44.8、預期 45.0、實際 42.1。",
      "ai": "目前 AI 判斷為偏空觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響市場風險偏好與資金輪動。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "鉅亨網全球經濟指標",
      "sourceUrl": "https://www.cnyes.com/economy/indicator",
      "sourceList": [
        "鉅亨網全球經濟指標"
      ]
    },
    {
      "id": "macro-s-p-global-pmi-20260806",
      "type": "macro",
      "title": "PMI 採購經理人指數",
      "eventName": "PMI 採購經理人指數",
      "originalEventName": "S&P Global營建業PMI",
      "sourcePublishTime": "2026/08/06 16:30 Asia/Taipei",
      "country": "英國",
      "publishTime": "2026/08/06 16:30",
      "previous": "38.4",
      "forecast": "40.9",
      "actual": "44.7",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/08/06 16:30",
      "tags": [
        "英國",
        "PMI",
        "偏多"
      ],
      "summary": "PMI 採購經理人指數 將於 2026/08/06 16:30 公布，市場關注前值 38.4、預期 40.9。",
      "event": "英國 PMI 採購經理人指數，前值 38.4、預期 40.9、實際 44.7。",
      "ai": "目前 AI 判斷為偏多觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響市場風險偏好與資金輪動。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "鉅亨網全球經濟指標",
      "sourceUrl": "https://www.cnyes.com/economy/indicator",
      "sourceList": [
        "鉅亨網全球經濟指標"
      ]
    },
    {
      "id": "macro-initial-jobless-claims-aug-01-20260806",
      "type": "macro",
      "title": "初領失業救濟金人數",
      "eventName": "初領失業救濟金人數",
      "originalEventName": "Initial Jobless Claims (Aug/01)",
      "sourcePublishTime": "2026/08/06 20:30 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/08/06 20:30",
      "previous": "198",
      "forecast": "202",
      "actual": "199",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏空",
      "impact": "影響就業強弱、薪資通膨與聯準會政策預期。",
      "importance": "中高",
      "timestamp": "2026/08/06 20:30",
      "tags": [
        "美國",
        "初領失業救濟金人數",
        "偏空"
      ],
      "summary": "初領失業救濟金人數 將於 2026/08/06 20:30 公布，市場關注前值 198、預期 202。",
      "event": "美國 初領失業救濟金人數，前值 198、預期 202、實際 199。",
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
      "id": "macro-unemployment-rate-q2-20260807",
      "type": "macro",
      "title": "失業率",
      "eventName": "失業率",
      "originalEventName": "Unemployment Rate (Q2)",
      "sourcePublishTime": "2026/08/07 13:30 Asia/Taipei",
      "country": "法國",
      "publishTime": "2026/08/07 13:30",
      "previous": "8.1",
      "forecast": "8.2",
      "actual": "8.3",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響全球資金成本、美元走勢與風險資產評價。",
      "importance": "中高",
      "timestamp": "2026/08/07 13:30",
      "tags": [
        "法國",
        "失業率",
        "偏多"
      ],
      "summary": "失業率 將於 2026/08/07 13:30 公布，市場關注前值 8.1、預期 8.2。",
      "event": "法國 失業率，前值 8.1、預期 8.2、實際 8.3。",
      "ai": "目前 AI 判斷為偏多觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響全球資金成本、美元走勢與風險資產評價。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "https://www.insee.fr",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    },
    {
      "id": "macro-non-farm-payrolls-jul-20260807",
      "type": "macro",
      "title": "非農就業人數",
      "eventName": "非農就業人數",
      "originalEventName": "Non Farm Payrolls (Jul)",
      "sourcePublishTime": "2026/08/07 20:30 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/08/07 20:30",
      "previous": "20",
      "forecast": "80",
      "actual": "-23",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏空",
      "impact": "影響就業強弱、薪資通膨與聯準會政策預期。",
      "importance": "高",
      "timestamp": "2026/08/07 20:30",
      "tags": [
        "美國",
        "非農就業人數",
        "偏空"
      ],
      "summary": "非農就業人數 將於 2026/08/07 20:30 公布，市場關注前值 20、預期 80。",
      "event": "美國 非農就業人數，前值 20、預期 80、實際 -23。",
      "ai": "目前 AI 判斷為偏空觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響就業強弱、薪資通膨與聯準會政策預期。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "http://www.bls.gov/",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    },
    {
      "id": "macro-unemployment-rate-jul-20260807",
      "type": "macro",
      "title": "失業率",
      "eventName": "失業率",
      "originalEventName": "Unemployment Rate (Jul)",
      "sourcePublishTime": "2026/08/07 20:30 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/08/07 20:30",
      "previous": "4.2",
      "forecast": "4.2",
      "actual": "4.1",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏空",
      "impact": "影響全球資金成本、美元走勢與風險資產評價。",
      "importance": "中高",
      "timestamp": "2026/08/07 20:30",
      "tags": [
        "美國",
        "失業率",
        "偏空"
      ],
      "summary": "失業率 將於 2026/08/07 20:30 公布，市場關注前值 4.2、預期 4.2。",
      "event": "美國 失業率，前值 4.2、預期 4.2、實際 4.1。",
      "ai": "目前 AI 判斷為偏空觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響全球資金成本、美元走勢與風險資產評價。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "http://www.bls.gov/",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    }
  ]
};
