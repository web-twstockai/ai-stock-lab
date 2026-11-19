window.IntelligenceOverviewData = {
  "updatedAt": "2026/11/19 07:46",
  "status": "運作中",
  "cards": [
    {
      "label": "今日偵測情報",
      "value": 286,
      "unit": "筆",
      "icon": "file"
    },
    {
      "label": "高重要度訊號",
      "value": 68,
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
          "18 筆"
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
      "id": "inst-9933-20261118",
      "type": "institutional",
      "title": "9933 中鼎",
      "stockCode": "9933",
      "stockName": "中鼎",
      "sector": "其他",
      "group": "其他",
      "institutionType": "外資",
      "direction": "連買",
      "days": 7,
      "consecutiveBuyDays": 7,
      "streaks": {
        "外資": 7,
        "投信": 0,
        "自營商": 0
      },
      "latestNetBuy": 11996,
      "buyVolume": 60081,
      "buyAmount": 0,
      "syncCount": 1,
      "importance": "高",
      "timestamp": "2026/11/18 18:20",
      "tags": [
        "外資",
        "連買",
        "其他",
        "水力資源",
        "風力發電"
      ],
      "summary": "外資連買，近 10 個交易日正買合計 60,081 張，估算金額約 0.00 億元。",
      "event": "外資連買 7 日，近 10 個交易日正買合計 60,081 張；最新日外資 11,996 張、投信 -2,245 張、自營商 -13 張。",
      "ai": "法人買盤集中在 其他，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 60730.19,
      "yahooVerification": {
        "status": "matched",
        "source": "https://tw.stock.yahoo.com/quote/9933.TW/institutional-trading",
        "latestNetBuy": 11996,
        "days": 7,
        "latestForeign": 11996,
        "latestTrust": -2245,
        "latestDealer": -13
      }
    },
    {
      "id": "inst-2303-20261118",
      "type": "institutional",
      "title": "2303 聯電",
      "stockCode": "2303",
      "stockName": "聯電",
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
      "latestNetBuy": 787,
      "buyVolume": 9803,
      "buyAmount": 9.33,
      "syncCount": 2,
      "importance": "高",
      "timestamp": "2026/11/18 18:20",
      "tags": [
        "自營商",
        "連買",
        "半導體",
        "手機",
        "車用電子相關"
      ],
      "summary": "自營商連買，近 10 個交易日正買合計 9,803 張，估算金額約 9.33 億元。",
      "event": "自營商連買 7 日，近 10 個交易日正買合計 9,803 張；最新日外資 -4,778 張、投信 1,497 張、自營商 787 張。",
      "ai": "法人買盤集中在 半導體，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 97000.458,
      "yahooVerification": {
        "status": "matched",
        "source": "https://tw.stock.yahoo.com/quote/2303.TW/institutional-trading",
        "latestNetBuy": 787,
        "days": 7,
        "latestForeign": -4778,
        "latestTrust": 1497,
        "latestDealer": 787
      }
    },
    {
      "id": "inst-2382-20261118",
      "type": "institutional",
      "title": "2382 廣達",
      "stockCode": "2382",
      "stockName": "廣達",
      "sector": "電腦及週邊設備",
      "group": "電腦及週邊設備",
      "institutionType": "自營商",
      "direction": "連買",
      "days": 4,
      "consecutiveBuyDays": 4,
      "streaks": {
        "外資": 0,
        "投信": 2,
        "自營商": 4
      },
      "latestNetBuy": 1000,
      "buyVolume": 6816,
      "buyAmount": 18.03,
      "syncCount": 2,
      "importance": "高",
      "timestamp": "2026/11/18 18:20",
      "tags": [
        "自營商",
        "連買",
        "電腦及週邊設備",
        "5G",
        "APPLE概念"
      ],
      "summary": "自營商連買，近 10 個交易日正買合計 6,816 張，估算金額約 18.03 億元。",
      "event": "自營商連買 4 日，近 10 個交易日正買合計 6,816 張；最新日外資 -6,006 張、投信 5,808 張、自營商 1,000 張。",
      "ai": "法人買盤集中在 電腦及週邊設備，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 23052.023,
      "yahooVerification": {
        "status": "matched",
        "source": "https://tw.stock.yahoo.com/quote/2382.TW/institutional-trading",
        "latestNetBuy": 1000,
        "days": 4,
        "latestForeign": -6006,
        "latestTrust": 5808,
        "latestDealer": 1000
      }
    },
    {
      "id": "inst-2330-20261118",
      "type": "institutional",
      "title": "2330 台積電",
      "stockCode": "2330",
      "stockName": "台積電",
      "sector": "半導體",
      "group": "半導體",
      "institutionType": "自營商",
      "direction": "連買",
      "days": 4,
      "consecutiveBuyDays": 4,
      "streaks": {
        "外資": 0,
        "投信": 2,
        "自營商": 4
      },
      "latestNetBuy": 5185,
      "buyVolume": 29658,
      "buyAmount": 656.93,
      "syncCount": 2,
      "importance": "高",
      "timestamp": "2026/11/18 18:20",
      "tags": [
        "自營商",
        "連買",
        "半導體",
        "3D技術",
        "3D感測"
      ],
      "summary": "自營商連買，近 10 個交易日正買合計 29,658 張，估算金額約 656.93 億元。",
      "event": "自營商連買 4 日，近 10 個交易日正買合計 29,658 張；最新日外資 -15,453 張、投信 3,373 張、自營商 5,185 張。",
      "ai": "法人買盤集中在 半導體，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 63667.331,
      "yahooVerification": {
        "status": "matched",
        "source": "https://tw.stock.yahoo.com/quote/2330.TW/institutional-trading",
        "latestNetBuy": 5185,
        "days": 4,
        "latestForeign": -15453,
        "latestTrust": 3373,
        "latestDealer": 5185
      }
    },
    {
      "id": "macro-gdpnow-20261105",
      "type": "macro",
      "title": "GDP 經濟成長率",
      "eventName": "GDP 經濟成長率",
      "originalEventName": "亞特蘭大聯儲GDPNow",
      "sourcePublishTime": "2026/11/05 08:00 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/11/05 08:00",
      "previous": "—",
      "forecast": "—",
      "actual": null,
      "status": "等待公布",
      "statusLevel": "upcoming",
      "direction": "中性",
      "impact": "影響景氣循環、原物料、工業與科技需求預期。",
      "importance": "高",
      "timestamp": "2026/11/05 08:00",
      "tags": [
        "美國",
        "GDP",
        "中性"
      ],
      "summary": "GDP 經濟成長率 將於 2026/11/05 08:00 公布，市場關注前值 —、預期 —。",
      "event": "美國 GDP 經濟成長率，前值 —、預期 —、實際 尚未公布。",
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
      "id": "macro-gdpnow-20261105",
      "type": "macro",
      "title": "GDP 經濟成長率",
      "eventName": "GDP 經濟成長率",
      "originalEventName": "亞特蘭大聯儲GDPNow",
      "sourcePublishTime": "2026/11/05 01:00 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/11/05 01:00",
      "previous": "3.7",
      "forecast": "—",
      "actual": "3.4",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響景氣循環、原物料、工業與科技需求預期。",
      "importance": "高",
      "timestamp": "2026/11/05 01:00",
      "tags": [
        "美國",
        "GDP",
        "中性"
      ],
      "summary": "GDP 經濟成長率 將於 2026/11/05 01:00 公布，市場關注前值 3.7、預期 —。",
      "event": "美國 GDP 經濟成長率，前值 3.7、預期 —、實際 3.4。",
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
      "id": "macro-s-p-global-pmi-20261105",
      "type": "macro",
      "title": "PMI 採購經理人指數",
      "eventName": "PMI 採購經理人指數",
      "originalEventName": "S&P Global營建業PMI",
      "sourcePublishTime": "2026/11/05 16:30 Asia/Taipei",
      "country": "法國",
      "publishTime": "2026/11/05 16:30",
      "previous": "39.8",
      "forecast": "41.0",
      "actual": "38.8",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏空",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/11/05 16:30",
      "tags": [
        "法國",
        "PMI",
        "偏空"
      ],
      "summary": "PMI 採購經理人指數 將於 2026/11/05 16:30 公布，市場關注前值 39.8、預期 41.0。",
      "event": "法國 PMI 採購經理人指數，前值 39.8、預期 41.0、實際 38.8。",
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
      "id": "macro-manufacturing-output-at-current-prices-yoy-sep-2026-20261105",
      "type": "macro",
      "title": "Manufacturing Output at Current Prices YoY (Sep. 2026)",
      "eventName": "Manufacturing Output at Current Prices YoY (Sep. 2026)",
      "originalEventName": "Manufacturing Output at Current Prices YoY (Sep. 2026)",
      "sourcePublishTime": "2026/11/05 15:00 Asia/Taipei",
      "country": "德國",
      "publishTime": "2026/11/05 15:00",
      "previous": "7.68",
      "forecast": "—",
      "actual": "7.25",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "importance": "中高",
      "timestamp": "2026/11/05 15:00",
      "tags": [
        "德國",
        "Manufacturing",
        "中性"
      ],
      "summary": "Manufacturing Output at Current Prices YoY (Sep. 2026) 將於 2026/11/05 15:00 公布，市場關注前值 7.68、預期 —。",
      "event": "德國 Manufacturing Output at Current Prices YoY (Sep. 2026)，前值 7.68、預期 —、實際 7.25。",
      "ai": "目前 AI 判斷為中性觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "https://www.destatis.de",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    }
  ],
  "macroEvents": [
    {
      "id": "macro-gdpnow-20261105",
      "type": "macro",
      "title": "GDP 經濟成長率",
      "eventName": "GDP 經濟成長率",
      "originalEventName": "亞特蘭大聯儲GDPNow",
      "sourcePublishTime": "2026/11/05 01:00 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/11/05 01:00",
      "previous": "3.7",
      "forecast": "—",
      "actual": "3.4",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響景氣循環、原物料、工業與科技需求預期。",
      "importance": "高",
      "timestamp": "2026/11/05 01:00",
      "tags": [
        "美國",
        "GDP",
        "中性"
      ],
      "summary": "GDP 經濟成長率 將於 2026/11/05 01:00 公布，市場關注前值 3.7、預期 —。",
      "event": "美國 GDP 經濟成長率，前值 3.7、預期 —、實際 3.4。",
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
      "id": "macro-gdpnow-20261105",
      "type": "macro",
      "title": "GDP 經濟成長率",
      "eventName": "GDP 經濟成長率",
      "originalEventName": "亞特蘭大聯儲GDPNow",
      "sourcePublishTime": "2026/11/05 08:00 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/11/05 08:00",
      "previous": "—",
      "forecast": "—",
      "actual": null,
      "status": "等待公布",
      "statusLevel": "upcoming",
      "direction": "中性",
      "impact": "影響景氣循環、原物料、工業與科技需求預期。",
      "importance": "高",
      "timestamp": "2026/11/05 08:00",
      "tags": [
        "美國",
        "GDP",
        "中性"
      ],
      "summary": "GDP 經濟成長率 將於 2026/11/05 08:00 公布，市場關注前值 —、預期 —。",
      "event": "美國 GDP 經濟成長率，前值 —、預期 —、實際 尚未公布。",
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
      "id": "macro-manufacturing-output-at-current-prices-yoy-sep-2026-20261105",
      "type": "macro",
      "title": "Manufacturing Output at Current Prices YoY (Sep. 2026)",
      "eventName": "Manufacturing Output at Current Prices YoY (Sep. 2026)",
      "originalEventName": "Manufacturing Output at Current Prices YoY (Sep. 2026)",
      "sourcePublishTime": "2026/11/05 15:00 Asia/Taipei",
      "country": "德國",
      "publishTime": "2026/11/05 15:00",
      "previous": "7.68",
      "forecast": "—",
      "actual": "7.25",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "importance": "中高",
      "timestamp": "2026/11/05 15:00",
      "tags": [
        "德國",
        "Manufacturing",
        "中性"
      ],
      "summary": "Manufacturing Output at Current Prices YoY (Sep. 2026) 將於 2026/11/05 15:00 公布，市場關注前值 7.68、預期 —。",
      "event": "德國 Manufacturing Output at Current Prices YoY (Sep. 2026)，前值 7.68、預期 —、實際 7.25。",
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
      "id": "macro-s-p-global-pmi-20261105",
      "type": "macro",
      "title": "PMI 採購經理人指數",
      "eventName": "PMI 採購經理人指數",
      "originalEventName": "S&P Global營建業PMI",
      "sourcePublishTime": "2026/11/05 16:30 Asia/Taipei",
      "country": "法國",
      "publishTime": "2026/11/05 16:30",
      "previous": "39.8",
      "forecast": "41.0",
      "actual": "38.8",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏空",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/11/05 16:30",
      "tags": [
        "法國",
        "PMI",
        "偏空"
      ],
      "summary": "PMI 採購經理人指數 將於 2026/11/05 16:30 公布，市場關注前值 39.8、預期 41.0。",
      "event": "法國 PMI 採購經理人指數，前值 39.8、預期 41.0、實際 38.8。",
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
      "id": "macro-s-p-global-pmi-20261105",
      "type": "macro",
      "title": "PMI 採購經理人指數",
      "eventName": "PMI 採購經理人指數",
      "originalEventName": "S&P Global營建業PMI",
      "sourcePublishTime": "2026/11/05 16:30 Asia/Taipei",
      "country": "德國",
      "publishTime": "2026/11/05 16:30",
      "previous": "43.5",
      "forecast": "44.0",
      "actual": "41.6",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏空",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/11/05 16:30",
      "tags": [
        "德國",
        "PMI",
        "偏空"
      ],
      "summary": "PMI 採購經理人指數 將於 2026/11/05 16:30 公布，市場關注前值 43.5、預期 44.0。",
      "event": "德國 PMI 採購經理人指數，前值 43.5、預期 44.0、實際 41.6。",
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
      "id": "macro-s-p-global-all-sector-pmi-oct-2026-20261105",
      "type": "macro",
      "title": "PMI 採購經理人指數",
      "eventName": "PMI 採購經理人指數",
      "originalEventName": "S&P Global All-Sector PMI (Oct. 2026)",
      "sourcePublishTime": "2026/11/05 17:30 Asia/Taipei",
      "country": "英國",
      "publishTime": "2026/11/05 17:30",
      "previous": "46.1",
      "forecast": "45.5",
      "actual": "43.6",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏空",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/11/05 17:30",
      "tags": [
        "英國",
        "PMI",
        "中性"
      ],
      "summary": "PMI 採購經理人指數 將於 2026/11/05 17:30 公布，市場關注前值 46.1、預期 45.5。",
      "event": "英國 PMI 採購經理人指數，前值 46.1、預期 45.5、實際 43.6。",
      "ai": "目前 AI 判斷為偏空觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
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
      "id": "macro-ppi-mom-sep-2026-20261105",
      "type": "macro",
      "title": "生產者物價指數 PPI",
      "eventName": "生產者物價指數 PPI",
      "originalEventName": "PPI MoM (Sep. 2026)",
      "sourcePublishTime": "2026/11/05 18:00 Asia/Taipei",
      "country": "歐元區",
      "publishTime": "2026/11/05 18:00",
      "previous": "2",
      "forecast": "2.5",
      "actual": "2.5",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/11/05 18:00",
      "tags": [
        "歐元區",
        "生產者物價指數",
        "中性"
      ],
      "summary": "生產者物價指數 PPI 將於 2026/11/05 18:00 公布，市場關注前值 2、預期 2.5。",
      "event": "歐元區 生產者物價指數 PPI，前值 2、預期 2.5、實際 2.5。",
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
      "id": "macro-interest-rate-nov-2026-20261105",
      "type": "macro",
      "title": "FOMC 利率決議",
      "eventName": "FOMC 利率決議",
      "originalEventName": "Interest Rate (Nov. 2026)",
      "sourcePublishTime": "2026/11/05 20:00 Asia/Taipei",
      "country": "英國",
      "publishTime": "2026/11/05 20:00",
      "previous": "3.75",
      "forecast": "4",
      "actual": "4",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響全球資金成本、美元走勢與風險資產評價。",
      "importance": "中高",
      "timestamp": "2026/11/05 20:00",
      "tags": [
        "英國",
        "FOMC",
        "中性"
      ],
      "summary": "FOMC 利率決議 將於 2026/11/05 20:00 公布，市場關注前值 3.75、預期 4。",
      "event": "英國 FOMC 利率決議，前值 3.75、預期 4、實際 4。",
      "ai": "目前 AI 判斷為中性觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響全球資金成本、美元走勢與風險資產評價。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "https://www.bankofengland.co.uk",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    }
  ]
};
