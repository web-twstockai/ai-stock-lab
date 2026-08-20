window.IntelligenceOverviewData = {
  "updatedAt": "2026/08/20 07:46",
  "status": "運作中",
  "cards": [
    {
      "label": "今日偵測情報",
      "value": 232,
      "unit": "筆",
      "icon": "file"
    },
    {
      "label": "高重要度訊號",
      "value": 55,
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
          "25 筆"
        ],
        [
          "三大法人同步買",
          "7 筆"
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
      "id": "inst-2887-20260819",
      "type": "institutional",
      "title": "2887 台新新光金",
      "stockCode": "2887",
      "stockName": "台新新光金",
      "sector": "金融保險",
      "group": "金融保險",
      "institutionType": "投信",
      "direction": "連買",
      "days": 9,
      "consecutiveBuyDays": 9,
      "streaks": {
        "外資": 0,
        "投信": 9,
        "自營商": 0
      },
      "latestNetBuy": 21897,
      "buyVolume": 122492,
      "buyAmount": 0,
      "syncCount": 1,
      "importance": "高",
      "timestamp": "2026/08/19 18:20",
      "tags": [
        "投信",
        "連買",
        "金融保險",
        "金融業",
        "銀行"
      ],
      "summary": "投信連買，近 10 個交易日正買合計 122,492 張，估算金額約 0.00 億元。",
      "event": "投信連買 9 日，近 10 個交易日正買合計 122,492 張；最新日外資 -29,823 張、投信 21,897 張、自營商 -814 張。",
      "ai": "法人買盤集中在 金融保險，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 183008.455,
      "yahooVerification": {
        "status": "matched",
        "source": "https://tw.stock.yahoo.com/quote/2887.TW/institutional-trading",
        "latestNetBuy": 21897,
        "days": 9,
        "latestForeign": -29823,
        "latestTrust": 21897,
        "latestDealer": -814
      }
    },
    {
      "id": "inst-1102-20260819",
      "type": "institutional",
      "title": "1102 亞泥",
      "stockCode": "1102",
      "stockName": "亞泥",
      "sector": "水泥工業",
      "group": "水泥工業",
      "institutionType": "外資",
      "direction": "同步買超",
      "days": 4,
      "consecutiveBuyDays": 4,
      "streaks": {
        "外資": 4,
        "投信": 3,
        "自營商": 1
      },
      "latestNetBuy": 7594,
      "buyVolume": 26419,
      "buyAmount": 0,
      "syncCount": 3,
      "importance": "高",
      "timestamp": "2026/08/19 18:20",
      "tags": [
        "外資",
        "同步買超",
        "水泥工業",
        "S&P 台商收成指數",
        "中國"
      ],
      "summary": "外資同步買超，近 10 個交易日正買合計 26,419 張，估算金額約 0.00 億元。",
      "event": "外資連買 4 日，近 10 個交易日正買合計 26,419 張；最新日外資 7,594 張、投信 31 張、自營商 78 張。",
      "ai": "法人買盤集中在 水泥工業，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 27749.394,
      "yahooVerification": {
        "status": "matched",
        "source": "https://tw.stock.yahoo.com/quote/1102.TW/institutional-trading",
        "latestNetBuy": 7594,
        "days": 4,
        "latestForeign": 7594,
        "latestTrust": 31,
        "latestDealer": 78
      }
    },
    {
      "id": "inst-1815-20260819",
      "type": "institutional",
      "title": "1815 富喬",
      "stockCode": "1815",
      "stockName": "富喬",
      "sector": "電子零組件",
      "group": "電子零組件",
      "institutionType": "外資",
      "direction": "連買",
      "days": 7,
      "consecutiveBuyDays": 7,
      "streaks": {
        "外資": 7,
        "投信": 2,
        "自營商": 0
      },
      "latestNetBuy": 3003,
      "buyVolume": 15890,
      "buyAmount": 0,
      "syncCount": 2,
      "importance": "高",
      "timestamp": "2026/08/19 18:20",
      "tags": [
        "外資",
        "連買",
        "電子零組件",
        "印刷電路板相關",
        "玻纖布"
      ],
      "summary": "外資連買，近 10 個交易日正買合計 15,890 張，估算金額約 0.00 億元。",
      "event": "外資連買 7 日，近 10 個交易日正買合計 15,890 張；最新日外資 3,003 張、投信 206 張、自營商 -174 張。",
      "ai": "法人買盤集中在 電子零組件，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 24420.817,
      "yahooVerification": {
        "status": "matched",
        "source": "https://tw.stock.yahoo.com/quote/1815.TW/institutional-trading",
        "latestNetBuy": 3003,
        "days": 7,
        "latestForeign": 3003,
        "latestTrust": 206,
        "latestDealer": -174
      }
    },
    {
      "id": "inst-1402-20260819",
      "type": "institutional",
      "title": "1402 遠東新",
      "stockCode": "1402",
      "stockName": "遠東新",
      "sector": "紡織纖維",
      "group": "紡織纖維",
      "institutionType": "投信",
      "direction": "同步買超",
      "days": 10,
      "consecutiveBuyDays": 10,
      "streaks": {
        "外資": 3,
        "投信": 10,
        "自營商": 3
      },
      "latestNetBuy": 901,
      "buyVolume": 3568,
      "buyAmount": 0,
      "syncCount": 3,
      "importance": "高",
      "timestamp": "2026/08/19 18:20",
      "tags": [
        "投信",
        "同步買超",
        "紡織纖維",
        "S&P 台商收成指數",
        "中國"
      ],
      "summary": "投信同步買超，近 10 個交易日正買合計 3,568 張，估算金額約 0.00 億元。",
      "event": "投信連買 10 日，近 10 個交易日正買合計 3,568 張；最新日外資 6,110 張、投信 901 張、自營商 169 張。",
      "ai": "法人買盤集中在 紡織纖維，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 80935.391,
      "yahooVerification": {
        "status": "days-different",
        "source": "https://tw.stock.yahoo.com/quote/1402.TW/institutional-trading",
        "latestNetBuy": 901,
        "days": 11,
        "latestForeign": 6110,
        "latestTrust": 901,
        "latestDealer": 169
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
      "id": "macro-continuing-jobless-claims-jul-25-20260806",
      "type": "macro",
      "title": "初領失業救濟金人數",
      "eventName": "初領失業救濟金人數",
      "originalEventName": "Continuing Jobless Claims (Jul/25)",
      "sourcePublishTime": "2026/08/06 20:30 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/08/06 20:30",
      "previous": "1777",
      "forecast": "1790",
      "actual": "1801",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響就業強弱、薪資通膨與聯準會政策預期。",
      "importance": "中高",
      "timestamp": "2026/08/06 20:30",
      "tags": [
        "美國",
        "初領失業救濟金人數",
        "偏多"
      ],
      "summary": "初領失業救濟金人數 將於 2026/08/06 20:30 公布，市場關注前值 1777、預期 1790。",
      "event": "美國 初領失業救濟金人數，前值 1777、預期 1790、實際 1801。",
      "ai": "目前 AI 判斷為偏多觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響就業強弱、薪資通膨與聯準會政策預期。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "http://www.dol.gov",
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
