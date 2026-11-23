window.IntelligenceOverviewData = {
  "updatedAt": "2026/11/23 18:30",
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
      "value": 105,
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
          "12 筆"
        ],
        [
          "三大法人同步買",
          "16 筆"
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
          "35 個"
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
      "id": "inst-2412-20261123",
      "type": "institutional",
      "title": "2412 中華電",
      "stockCode": "2412",
      "stockName": "中華電",
      "sector": "通信網路業",
      "group": "通信網路業",
      "institutionType": "自營商",
      "direction": "連買",
      "days": 8,
      "consecutiveBuyDays": 8,
      "streaks": {
        "外資": 0,
        "投信": 4,
        "自營商": 8
      },
      "latestNetBuy": 279,
      "buyVolume": 3911,
      "buyAmount": 0,
      "syncCount": 2,
      "importance": "高",
      "timestamp": "2026/11/23 18:20",
      "tags": [
        "自營商",
        "連買",
        "通信網路業",
        "NFC近場通訊",
        "手機"
      ],
      "summary": "自營商連買，近 10 個交易日正買合計 3,911 張，估算金額約 0.00 億元。",
      "event": "自營商連買 8 日，近 10 個交易日正買合計 3,911 張；最新日外資 -1,491 張、投信 9,708 張、自營商 279 張。",
      "ai": "法人買盤集中在 通信網路業，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 43774.19,
      "yahooVerification": {
        "status": "matched",
        "source": "https://tw.stock.yahoo.com/quote/2412.TW/institutional-trading",
        "latestNetBuy": 279,
        "days": 8,
        "latestForeign": -1491,
        "latestTrust": 9708,
        "latestDealer": 279
      }
    },
    {
      "id": "inst-2303-20261123",
      "type": "institutional",
      "title": "2303 聯電",
      "stockCode": "2303",
      "stockName": "聯電",
      "sector": "半導體",
      "group": "半導體",
      "institutionType": "外資",
      "direction": "連買",
      "days": 3,
      "consecutiveBuyDays": 3,
      "streaks": {
        "外資": 3,
        "投信": 1,
        "自營商": 0
      },
      "latestNetBuy": 2433,
      "buyVolume": 180515,
      "buyAmount": 144.95,
      "syncCount": 2,
      "importance": "高",
      "timestamp": "2026/11/23 18:20",
      "tags": [
        "外資",
        "連買",
        "半導體",
        "手機",
        "車用電子相關"
      ],
      "summary": "外資連買，近 10 個交易日正買合計 180,515 張，估算金額約 144.95 億元。",
      "event": "外資連買 3 日，近 10 個交易日正買合計 180,515 張；最新日外資 2,433 張、投信 1,815 張、自營商 -386 張。",
      "ai": "法人買盤集中在 半導體，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 198378.301,
      "yahooVerification": {
        "status": "matched",
        "source": "https://tw.stock.yahoo.com/quote/2303.TW/institutional-trading",
        "latestNetBuy": 2433,
        "days": 3,
        "latestForeign": 2433,
        "latestTrust": 1815,
        "latestDealer": -386
      }
    },
    {
      "id": "inst-2317-20261123",
      "type": "institutional",
      "title": "2317 鴻海",
      "stockCode": "2317",
      "stockName": "鴻海",
      "sector": "其他電子業",
      "group": "其他電子業",
      "institutionType": "自營商",
      "direction": "連買",
      "days": 7,
      "consecutiveBuyDays": 7,
      "streaks": {
        "外資": 0,
        "投信": 5,
        "自營商": 7
      },
      "latestNetBuy": 1846,
      "buyVolume": 13683,
      "buyAmount": 28.73,
      "syncCount": 2,
      "importance": "高",
      "timestamp": "2026/11/23 18:20",
      "tags": [
        "自營商",
        "連買",
        "其他電子業",
        "3D技術",
        "3D感測"
      ],
      "summary": "自營商連買，近 10 個交易日正買合計 13,683 張，估算金額約 28.73 億元。",
      "event": "自營商連買 7 日，近 10 個交易日正買合計 13,683 張；最新日外資 -14,885 張、投信 249 張、自營商 1,846 張。",
      "ai": "法人買盤集中在 其他電子業，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 46533.059,
      "yahooVerification": {
        "status": "matched",
        "source": "https://tw.stock.yahoo.com/quote/2317.TW/institutional-trading",
        "latestNetBuy": 1846,
        "days": 7,
        "latestForeign": -14885,
        "latestTrust": 249,
        "latestDealer": 1846
      }
    },
    {
      "id": "inst-2330-20261123",
      "type": "institutional",
      "title": "2330 台積電",
      "stockCode": "2330",
      "stockName": "台積電",
      "sector": "半導體",
      "group": "半導體",
      "institutionType": "自營商",
      "direction": "連買",
      "days": 7,
      "consecutiveBuyDays": 7,
      "streaks": {
        "外資": 0,
        "投信": 1,
        "自營商": 7
      },
      "latestNetBuy": 2665,
      "buyVolume": 27687,
      "buyAmount": 553.75,
      "syncCount": 2,
      "importance": "高",
      "timestamp": "2026/11/23 18:20",
      "tags": [
        "自營商",
        "連買",
        "半導體",
        "3D技術",
        "3D感測"
      ],
      "summary": "自營商連買，近 10 個交易日正買合計 27,687 張，估算金額約 553.75 億元。",
      "event": "自營商連買 7 日，近 10 個交易日正買合計 27,687 張；最新日外資 -11,039 張、投信 1,275 張、自營商 2,665 張。",
      "ai": "法人買盤集中在 半導體，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 53324.081,
      "yahooVerification": {
        "status": "matched",
        "source": "https://tw.stock.yahoo.com/quote/2330.TW/institutional-trading",
        "latestNetBuy": 2665,
        "days": 7,
        "latestForeign": -11039,
        "latestTrust": 1275,
        "latestDealer": 2665
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
