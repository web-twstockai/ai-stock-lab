window.IntelligenceOverviewData = {
  "updatedAt": "2026/11/22 07:46",
  "status": "運作中",
  "cards": [
    {
      "label": "今日偵測情報",
      "value": 283,
      "unit": "筆",
      "icon": "file"
    },
    {
      "label": "高重要度訊號",
      "value": 87,
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
      "value": "FOMC 利率決議",
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
          "14 筆"
        ],
        [
          "三大法人同步買",
          "9 筆"
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
          "31 個"
        ],
        [
          "下一事件",
          "FOMC 利率決議"
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
      "id": "inst-2330-20261120",
      "type": "institutional",
      "title": "2330 台積電",
      "stockCode": "2330",
      "stockName": "台積電",
      "sector": "半導體",
      "group": "半導體",
      "institutionType": "自營商",
      "direction": "連買",
      "days": 6,
      "consecutiveBuyDays": 6,
      "streaks": {
        "外資": 0,
        "投信": 0,
        "自營商": 6
      },
      "latestNetBuy": 4810,
      "buyVolume": 25022,
      "buyAmount": 500.44,
      "syncCount": 1,
      "importance": "高",
      "timestamp": "2026/11/20 18:20",
      "tags": [
        "自營商",
        "連買",
        "半導體",
        "3D技術",
        "3D感測"
      ],
      "summary": "自營商連買，近 10 個交易日正買合計 25,022 張，估算金額約 500.44 億元。",
      "event": "自營商連買 6 日，近 10 個交易日正買合計 25,022 張；最新日外資 -11,863 張、投信 -3,848 張、自營商 4,810 張。",
      "ai": "法人買盤集中在 半導體，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 53211.636,
      "yahooVerification": {
        "status": "matched",
        "source": "https://tw.stock.yahoo.com/quote/2330.TW/institutional-trading",
        "latestNetBuy": 4810,
        "days": 6,
        "latestForeign": -11863,
        "latestTrust": -3848,
        "latestDealer": 4810
      }
    },
    {
      "id": "inst-2885-20261120",
      "type": "institutional",
      "title": "2885 元大金",
      "stockCode": "2885",
      "stockName": "元大金",
      "sector": "金融保險",
      "group": "金融保險",
      "institutionType": "自營商",
      "direction": "連買",
      "days": 7,
      "consecutiveBuyDays": 7,
      "streaks": {
        "外資": 2,
        "投信": 0,
        "自營商": 7
      },
      "latestNetBuy": 3728,
      "buyVolume": 16652,
      "buyAmount": 0,
      "syncCount": 2,
      "importance": "高",
      "timestamp": "2026/11/20 18:20",
      "tags": [
        "自營商",
        "連買",
        "金融保險",
        "金融業",
        "銀行"
      ],
      "summary": "自營商連買，近 10 個交易日正買合計 16,652 張，估算金額約 0.00 億元。",
      "event": "自營商連買 7 日，近 10 個交易日正買合計 16,652 張；最新日外資 3,828 張、投信 -211 張、自營商 3,728 張。",
      "ai": "法人買盤集中在 金融保險，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 106066.941,
      "yahooVerification": {
        "status": "matched",
        "source": "https://tw.stock.yahoo.com/quote/2885.TW/institutional-trading",
        "latestNetBuy": 3728,
        "days": 7,
        "latestForeign": 3828,
        "latestTrust": -211,
        "latestDealer": 3728
      }
    },
    {
      "id": "inst-2884-20261120",
      "type": "institutional",
      "title": "2884 玉山金",
      "stockCode": "2884",
      "stockName": "玉山金",
      "sector": "金融保險",
      "group": "金融保險",
      "institutionType": "自營商",
      "direction": "同步買超",
      "days": 10,
      "consecutiveBuyDays": 10,
      "streaks": {
        "外資": 2,
        "投信": 1,
        "自營商": 10
      },
      "latestNetBuy": 5330,
      "buyVolume": 26576,
      "buyAmount": 0,
      "syncCount": 3,
      "importance": "高",
      "timestamp": "2026/11/20 18:20",
      "tags": [
        "自營商",
        "同步買超",
        "金融保險",
        "電子商務及延伸",
        "金融業"
      ],
      "summary": "自營商同步買超，近 10 個交易日正買合計 26,576 張，估算金額約 0.00 億元。",
      "event": "自營商連買 10 日，近 10 個交易日正買合計 26,576 張；最新日外資 4,082 張、投信 30 張、自營商 5,330 張。",
      "ai": "法人買盤集中在 金融保險，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 83070.239,
      "yahooVerification": {
        "status": "days-different",
        "source": "https://tw.stock.yahoo.com/quote/2884.TW/institutional-trading",
        "latestNetBuy": 5330,
        "days": 44,
        "latestForeign": 4082,
        "latestTrust": 30,
        "latestDealer": 5330
      }
    },
    {
      "id": "inst-2382-20261120",
      "type": "institutional",
      "title": "2382 廣達",
      "stockCode": "2382",
      "stockName": "廣達",
      "sector": "電腦及週邊設備",
      "group": "電腦及週邊設備",
      "institutionType": "自營商",
      "direction": "同步買超",
      "days": 6,
      "consecutiveBuyDays": 6,
      "streaks": {
        "外資": 2,
        "投信": 4,
        "自營商": 6
      },
      "latestNetBuy": 630,
      "buyVolume": 5128,
      "buyAmount": 12.92,
      "syncCount": 3,
      "importance": "高",
      "timestamp": "2026/11/20 18:20",
      "tags": [
        "自營商",
        "同步買超",
        "電腦及週邊設備",
        "5G",
        "APPLE概念"
      ],
      "summary": "自營商同步買超，近 10 個交易日正買合計 5,128 張，估算金額約 12.92 億元。",
      "event": "自營商連買 6 日，近 10 個交易日正買合計 5,128 張；最新日外資 1,127 張、投信 32 張、自營商 630 張。",
      "ai": "法人買盤集中在 電腦及週邊設備，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 21724.688,
      "yahooVerification": {
        "status": "matched",
        "source": "https://tw.stock.yahoo.com/quote/2382.TW/institutional-trading",
        "latestNetBuy": 630,
        "days": 6,
        "latestForeign": 1127,
        "latestTrust": 32,
        "latestDealer": 630
      }
    },
    {
      "id": "macro-gdpnow-20261110",
      "type": "macro",
      "title": "GDP 經濟成長率",
      "eventName": "GDP 經濟成長率",
      "originalEventName": "亞特蘭大聯儲GDPNow",
      "sourcePublishTime": "2026/11/10 02:00 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/11/10 02:00",
      "previous": "3.4",
      "forecast": "—",
      "actual": "3.5",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響景氣循環、原物料、工業與科技需求預期。",
      "importance": "高",
      "timestamp": "2026/11/10 02:00",
      "tags": [
        "美國",
        "GDP",
        "中性"
      ],
      "summary": "GDP 經濟成長率 將於 2026/11/10 02:00 公布，市場關注前值 3.4、預期 —。",
      "event": "美國 GDP 經濟成長率，前值 3.4、預期 —、實際 3.5。",
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
      "id": "macro-adp-employment-change-weekly-w-o-oct-12-2026-20261110",
      "type": "macro",
      "title": "ADP 就業人數",
      "eventName": "ADP 就業人數",
      "originalEventName": "ADP Employment Change Weekly (w/o Oct. 12, 2026)",
      "sourcePublishTime": "2026/11/10 20:15 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/11/10 20:15",
      "previous": "16750",
      "forecast": "—",
      "actual": "19500",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/11/10 20:15",
      "tags": [
        "美國",
        "ADP",
        "中性"
      ],
      "summary": "ADP 就業人數 將於 2026/11/10 20:15 公布，市場關注前值 16750、預期 —。",
      "event": "美國 ADP 就業人數，前值 16750、預期 —、實際 19500。",
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
      "id": "macro-unemployment-rate-q3-2026-20261110",
      "type": "macro",
      "title": "失業率",
      "eventName": "失業率",
      "originalEventName": "Unemployment Rate (Q3 2026)",
      "sourcePublishTime": "2026/11/10 14:30 Asia/Taipei",
      "country": "法國",
      "publishTime": "2026/11/10 14:30",
      "previous": "8.3",
      "forecast": "8.4",
      "actual": "8.2",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏空",
      "impact": "影響全球資金成本、美元走勢與風險資產評價。",
      "importance": "中高",
      "timestamp": "2026/11/10 14:30",
      "tags": [
        "法國",
        "失業率",
        "偏空"
      ],
      "summary": "失業率 將於 2026/11/10 14:30 公布，市場關注前值 8.3、預期 8.4。",
      "event": "法國 失業率，前值 8.3、預期 8.4、實際 8.2。",
      "ai": "目前 AI 判斷為偏空觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響全球資金成本、美元走勢與風險資產評價。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "https://www.insee.fr",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    },
    {
      "id": "macro-united-states-ny-fed-consumer-expectation-ny-fed-inflation-expectation-1yr-oct-2026-20261110",
      "type": "macro",
      "title": "United States-NY Fed Consumer Expectation-NY Fed Inflation Expectation 1yr * (Oct. 2026)",
      "eventName": "United States-NY Fed Consumer Expectation-NY Fed Inflation Expectation 1yr * (Oct. 2026)",
      "originalEventName": "United States-NY Fed Consumer Expectation-NY Fed Inflation Expectation 1yr * (Oct. 2026)",
      "sourcePublishTime": "2026/11/10 00:00 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/11/10 00:00",
      "previous": "3.9",
      "forecast": "—",
      "actual": "3.9",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "importance": "中高",
      "timestamp": "2026/11/10 00:00",
      "tags": [
        "美國",
        "United",
        "中性"
      ],
      "summary": "United States-NY Fed Consumer Expectation-NY Fed Inflation Expectation 1yr * (Oct. 2026) 將於 2026/11/10 00:00 公布，市場關注前值 3.9、預期 —。",
      "event": "美國 United States-NY Fed Consumer Expectation-NY Fed Inflation Expectation 1yr * (Oct. 2026)，前值 3.9、預期 —、實際 3.9。",
      "ai": "目前 AI 判斷為中性觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "https://tw.tradingview.com/economic-calendar/",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    }
  ],
  "macroEvents": [
    {
      "id": "macro-united-states-ny-fed-consumer-expectation-ny-fed-inflation-expectation-1yr-oct-2026-20261110",
      "type": "macro",
      "title": "United States-NY Fed Consumer Expectation-NY Fed Inflation Expectation 1yr * (Oct. 2026)",
      "eventName": "United States-NY Fed Consumer Expectation-NY Fed Inflation Expectation 1yr * (Oct. 2026)",
      "originalEventName": "United States-NY Fed Consumer Expectation-NY Fed Inflation Expectation 1yr * (Oct. 2026)",
      "sourcePublishTime": "2026/11/10 00:00 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/11/10 00:00",
      "previous": "3.9",
      "forecast": "—",
      "actual": "3.9",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "importance": "中高",
      "timestamp": "2026/11/10 00:00",
      "tags": [
        "美國",
        "United",
        "中性"
      ],
      "summary": "United States-NY Fed Consumer Expectation-NY Fed Inflation Expectation 1yr * (Oct. 2026) 將於 2026/11/10 00:00 公布，市場關注前值 3.9、預期 —。",
      "event": "美國 United States-NY Fed Consumer Expectation-NY Fed Inflation Expectation 1yr * (Oct. 2026)，前值 3.9、預期 —、實際 3.9。",
      "ai": "目前 AI 判斷為中性觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "https://tw.tradingview.com/economic-calendar/",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    },
    {
      "id": "macro-gdpnow-20261110",
      "type": "macro",
      "title": "GDP 經濟成長率",
      "eventName": "GDP 經濟成長率",
      "originalEventName": "亞特蘭大聯儲GDPNow",
      "sourcePublishTime": "2026/11/10 02:00 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/11/10 02:00",
      "previous": "3.4",
      "forecast": "—",
      "actual": "3.5",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響景氣循環、原物料、工業與科技需求預期。",
      "importance": "高",
      "timestamp": "2026/11/10 02:00",
      "tags": [
        "美國",
        "GDP",
        "中性"
      ],
      "summary": "GDP 經濟成長率 將於 2026/11/10 02:00 公布，市場關注前值 3.4、預期 —。",
      "event": "美國 GDP 經濟成長率，前值 3.4、預期 —、實際 3.5。",
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
      "id": "macro-unemployment-rate-q3-2026-20261110",
      "type": "macro",
      "title": "失業率",
      "eventName": "失業率",
      "originalEventName": "Unemployment Rate (Q3 2026)",
      "sourcePublishTime": "2026/11/10 14:30 Asia/Taipei",
      "country": "法國",
      "publishTime": "2026/11/10 14:30",
      "previous": "8.3",
      "forecast": "8.4",
      "actual": "8.2",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏空",
      "impact": "影響全球資金成本、美元走勢與風險資產評價。",
      "importance": "中高",
      "timestamp": "2026/11/10 14:30",
      "tags": [
        "法國",
        "失業率",
        "偏空"
      ],
      "summary": "失業率 將於 2026/11/10 14:30 公布，市場關注前值 8.3、預期 8.4。",
      "event": "法國 失業率，前值 8.3、預期 8.4、實際 8.2。",
      "ai": "目前 AI 判斷為偏空觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響全球資金成本、美元走勢與風險資產評價。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "https://www.insee.fr",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    },
    {
      "id": "macro-adp-employment-change-weekly-w-o-oct-12-2026-20261110",
      "type": "macro",
      "title": "ADP 就業人數",
      "eventName": "ADP 就業人數",
      "originalEventName": "ADP Employment Change Weekly (w/o Oct. 12, 2026)",
      "sourcePublishTime": "2026/11/10 20:15 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/11/10 20:15",
      "previous": "16750",
      "forecast": "—",
      "actual": "19500",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/11/10 20:15",
      "tags": [
        "美國",
        "ADP",
        "中性"
      ],
      "summary": "ADP 就業人數 將於 2026/11/10 20:15 公布，市場關注前值 16750、預期 —。",
      "event": "美國 ADP 就業人數，前值 16750、預期 —、實際 19500。",
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
      "id": "macro-adp-employment-change-weekly-w-o-oct-19-2026-20261110",
      "type": "macro",
      "title": "ADP 就業人數",
      "eventName": "ADP 就業人數",
      "originalEventName": "ADP Employment Change Weekly (w/o Oct. 19, 2026)",
      "sourcePublishTime": "2026/11/10 21:15 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/11/10 21:15",
      "previous": "19500",
      "forecast": "—",
      "actual": "19250",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/11/10 21:15",
      "tags": [
        "美國",
        "ADP",
        "中性"
      ],
      "summary": "ADP 就業人數 將於 2026/11/10 21:15 公布，市場關注前值 19500、預期 —。",
      "event": "美國 ADP 就業人數，前值 19500、預期 —、實際 19250。",
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
      "id": "macro-core-inflation-rate-mom-oct-2026-20261110",
      "type": "macro",
      "title": "核心通膨率",
      "eventName": "核心通膨率",
      "originalEventName": "Core Inflation Rate MoM (Oct. 2026)",
      "sourcePublishTime": "2026/11/10 21:30 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/11/10 21:30",
      "previous": "0.3",
      "forecast": "0.2",
      "actual": "0.3",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏空",
      "impact": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "importance": "中高",
      "timestamp": "2026/11/10 21:30",
      "tags": [
        "美國",
        "核心通膨率",
        "偏空"
      ],
      "summary": "核心通膨率 將於 2026/11/10 21:30 公布，市場關注前值 0.3、預期 0.2。",
      "event": "美國 核心通膨率，前值 0.3、預期 0.2、實際 0.3。",
      "ai": "目前 AI 判斷為偏空觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "https://www.bls.gov",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    },
    {
      "id": "macro-inflation-rate-mom-oct-2026-20261110",
      "type": "macro",
      "title": "通膨率",
      "eventName": "通膨率",
      "originalEventName": "Inflation Rate MoM (Oct. 2026)",
      "sourcePublishTime": "2026/11/10 21:30 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/11/10 21:30",
      "previous": "0.6",
      "forecast": "0.3",
      "actual": "0.4",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏空",
      "impact": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "importance": "中高",
      "timestamp": "2026/11/10 21:30",
      "tags": [
        "美國",
        "通膨率",
        "偏空"
      ],
      "summary": "通膨率 將於 2026/11/10 21:30 公布，市場關注前值 0.6、預期 0.3。",
      "event": "美國 通膨率，前值 0.6、預期 0.3、實際 0.4。",
      "ai": "目前 AI 判斷為偏空觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "http://www.bls.gov/",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    },
    {
      "id": "macro-cpi-w-oct-2026-20261110",
      "type": "macro",
      "title": "消費者物價指數 CPI",
      "eventName": "消費者物價指數 CPI",
      "originalEventName": "CPI-W (Oct. 2026)",
      "sourcePublishTime": "2026/11/10 21:30 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/11/10 21:30",
      "previous": "330.654",
      "forecast": "337.042",
      "actual": "331.147",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "importance": "高",
      "timestamp": "2026/11/10 21:30",
      "tags": [
        "美國",
        "消費者物價指數",
        "中性"
      ],
      "summary": "消費者物價指數 CPI 將於 2026/11/10 21:30 公布，市場關注前值 330.654、預期 —。",
      "event": "美國 消費者物價指數 CPI，前值 330.654、預期 —、實際 331.147。",
      "ai": "目前 AI 判斷為中性觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar / Investing.com Economic Calendar",
      "sourceUrl": "https://www.bls.gov",
      "sourceList": [
        "TradingView Economic Calendar",
        "Investing.com Economic Calendar"
      ]
    }
  ]
};
