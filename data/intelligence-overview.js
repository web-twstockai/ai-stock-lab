window.IntelligenceOverviewData = {
  "updatedAt": "2026/10/19 18:30",
  "status": "運作中",
  "cards": [
    {
      "label": "今日偵測情報",
      "value": 259,
      "unit": "筆",
      "icon": "file"
    },
    {
      "label": "高重要度訊號",
      "value": 91,
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
      "value": "服務業 PMI",
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
          "28 個"
        ],
        [
          "下一事件",
          "服務業 PMI"
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
      "id": "inst-2382-20261019",
      "type": "institutional",
      "title": "2382 廣達",
      "stockCode": "2382",
      "stockName": "廣達",
      "sector": "電腦及週邊設備",
      "group": "電腦及週邊設備",
      "institutionType": "自營商",
      "direction": "連買",
      "days": 6,
      "consecutiveBuyDays": 6,
      "streaks": {
        "外資": 0,
        "投信": 4,
        "自營商": 6
      },
      "latestNetBuy": 627,
      "buyVolume": 2764,
      "buyAmount": 8.9,
      "syncCount": 2,
      "importance": "高",
      "timestamp": "2026/10/19 18:20",
      "tags": [
        "自營商",
        "連買",
        "電腦及週邊設備",
        "5G",
        "APPLE概念"
      ],
      "summary": "自營商連買，近 10 個交易日正買合計 2,764 張，估算金額約 8.90 億元。",
      "event": "自營商連買 6 日，近 10 個交易日正買合計 2,764 張；最新日外資 -4,140 張、投信 451 張、自營商 627 張。",
      "ai": "法人買盤集中在 電腦及週邊設備，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 15275.378,
      "yahooVerification": {
        "status": "matched",
        "source": "https://tw.stock.yahoo.com/quote/2382.TW/institutional-trading",
        "latestNetBuy": 627,
        "days": 6,
        "latestForeign": -4140,
        "latestTrust": 451,
        "latestDealer": 627
      }
    },
    {
      "id": "inst-2409-20261019",
      "type": "institutional",
      "title": "2409 友達",
      "stockCode": "2409",
      "stockName": "友達",
      "sector": "光電業",
      "group": "光電業",
      "institutionType": "投信",
      "direction": "同步買超",
      "days": 5,
      "consecutiveBuyDays": 5,
      "streaks": {
        "外資": 2,
        "投信": 5,
        "自營商": 1
      },
      "latestNetBuy": 3141,
      "buyVolume": 3642,
      "buyAmount": 0,
      "syncCount": 3,
      "importance": "高",
      "timestamp": "2026/10/19 18:20",
      "tags": [
        "投信",
        "同步買超",
        "光電業",
        "3D技術",
        "Dell"
      ],
      "summary": "投信同步買超，近 10 個交易日正買合計 3,642 張，估算金額約 0.00 億元。",
      "event": "投信連買 5 日，近 10 個交易日正買合計 3,642 張；最新日外資 8,762 張、投信 3,141 張、自營商 3,489 張。",
      "ai": "法人買盤集中在 光電業，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 47575.069,
      "yahooVerification": {
        "status": "matched",
        "source": "https://tw.stock.yahoo.com/quote/2409.TW/institutional-trading",
        "latestNetBuy": 3141,
        "days": 5,
        "latestForeign": 8762,
        "latestTrust": 3141,
        "latestDealer": 3489
      }
    },
    {
      "id": "inst-2884-20261019",
      "type": "institutional",
      "title": "2884 玉山金",
      "stockCode": "2884",
      "stockName": "玉山金",
      "sector": "金融保險",
      "group": "金融保險",
      "institutionType": "自營商",
      "direction": "連買",
      "days": 10,
      "consecutiveBuyDays": 10,
      "streaks": {
        "外資": 0,
        "投信": 3,
        "自營商": 10
      },
      "latestNetBuy": 3961,
      "buyVolume": 18379,
      "buyAmount": 0,
      "syncCount": 2,
      "importance": "高",
      "timestamp": "2026/10/19 18:20",
      "tags": [
        "自營商",
        "連買",
        "金融保險",
        "電子商務及延伸",
        "金融業"
      ],
      "summary": "自營商連買，近 10 個交易日正買合計 18,379 張，估算金額約 0.00 億元。",
      "event": "自營商連買 10 日，近 10 個交易日正買合計 18,379 張；最新日外資 -2,467 張、投信 7,139 張、自營商 3,961 張。",
      "ai": "法人買盤集中在 金融保險，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 91249.095,
      "yahooVerification": {
        "status": "days-different",
        "source": "https://tw.stock.yahoo.com/quote/2884.TW/institutional-trading",
        "latestNetBuy": 3961,
        "days": 22,
        "latestForeign": -2467,
        "latestTrust": 7139,
        "latestDealer": 3961
      }
    },
    {
      "id": "inst-2317-20261019",
      "type": "institutional",
      "title": "2317 鴻海",
      "stockCode": "2317",
      "stockName": "鴻海",
      "sector": "其他電子業",
      "group": "其他電子業",
      "institutionType": "自營商",
      "direction": "連買",
      "days": 6,
      "consecutiveBuyDays": 6,
      "streaks": {
        "外資": 0,
        "投信": 1,
        "自營商": 6
      },
      "latestNetBuy": 545,
      "buyVolume": 4916,
      "buyAmount": 11.99,
      "syncCount": 2,
      "importance": "高",
      "timestamp": "2026/10/19 18:20",
      "tags": [
        "自營商",
        "連買",
        "其他電子業",
        "3D技術",
        "3D感測"
      ],
      "summary": "自營商連買，近 10 個交易日正買合計 4,916 張，估算金額約 11.99 億元。",
      "event": "自營商連買 6 日，近 10 個交易日正買合計 4,916 張；最新日外資 -14,884 張、投信 817 張、自營商 545 張。",
      "ai": "法人買盤集中在 其他電子業，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 46437.548,
      "yahooVerification": {
        "status": "matched",
        "source": "https://tw.stock.yahoo.com/quote/2317.TW/institutional-trading",
        "latestNetBuy": 545,
        "days": 6,
        "latestForeign": -14884,
        "latestTrust": 817,
        "latestDealer": 545
      }
    },
    {
      "id": "macro-s-p-global-services-pmi-final-sep-20261005",
      "type": "macro",
      "title": "服務業 PMI",
      "eventName": "服務業 PMI",
      "originalEventName": "S&P Global Services PMI Final (Sep)",
      "sourcePublishTime": "2026/10/05 15:55 Asia/Taipei",
      "country": "德國",
      "publishTime": "2026/10/05 15:55",
      "previous": "49.7",
      "forecast": "52.9",
      "actual": "52.9",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/10/05 15:55",
      "tags": [
        "德國",
        "服務業",
        "中性"
      ],
      "summary": "服務業 PMI 將於 2026/10/05 15:55 公布，市場關注前值 49.7、預期 52.9。",
      "event": "德國 服務業 PMI，前值 49.7、預期 52.9、實際 52.9。",
      "ai": "目前 AI 判斷為中性觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響市場風險偏好與資金輪動。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar / 鉅亨網全球經濟指標",
      "sourceUrl": "https://www.pmi.spglobal.com/public",
      "sourceList": [
        "TradingView Economic Calendar",
        "鉅亨網全球經濟指標"
      ]
    },
    {
      "id": "macro-s-p-global-composite-pmi-final-sep-20261005",
      "type": "macro",
      "title": "綜合 PMI",
      "eventName": "綜合 PMI",
      "originalEventName": "S&P Global Composite PMI Final (Sep)",
      "sourcePublishTime": "2026/10/05 15:55 Asia/Taipei",
      "country": "德國",
      "publishTime": "2026/10/05 15:55",
      "previous": "51.8",
      "forecast": "53.8",
      "actual": "53.8",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/10/05 15:55",
      "tags": [
        "德國",
        "綜合",
        "中性"
      ],
      "summary": "綜合 PMI 將於 2026/10/05 15:55 公布，市場關注前值 51.8、預期 53.8。",
      "event": "德國 綜合 PMI，前值 51.8、預期 53.8、實際 53.8。",
      "ai": "目前 AI 判斷為中性觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響市場風險偏好與資金輪動。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar / 鉅亨網全球經濟指標",
      "sourceUrl": "https://www.pmi.spglobal.com/public",
      "sourceList": [
        "TradingView Economic Calendar",
        "鉅亨網全球經濟指標"
      ]
    },
    {
      "id": "macro-s-p-global-services-pmi-final-sep-20261005",
      "type": "macro",
      "title": "服務業 PMI",
      "eventName": "服務業 PMI",
      "originalEventName": "S&P Global Services PMI Final (Sep)",
      "sourcePublishTime": "2026/10/05 15:50 Asia/Taipei",
      "country": "法國",
      "publishTime": "2026/10/05 15:50",
      "previous": "48.0",
      "forecast": "51.4",
      "actual": "51.2",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏空",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/10/05 15:50",
      "tags": [
        "法國",
        "服務業",
        "中性"
      ],
      "summary": "服務業 PMI 將於 2026/10/05 15:50 公布，市場關注前值 48.0、預期 51.4。",
      "event": "法國 服務業 PMI，前值 48.0、預期 51.4、實際 51.2。",
      "ai": "目前 AI 判斷為偏空觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響市場風險偏好與資金輪動。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar / 鉅亨網全球經濟指標",
      "sourceUrl": "https://www.pmi.spglobal.com/public",
      "sourceList": [
        "TradingView Economic Calendar",
        "鉅亨網全球經濟指標"
      ]
    },
    {
      "id": "macro-s-p-global-composite-pmi-final-sep-20261005",
      "type": "macro",
      "title": "綜合 PMI",
      "eventName": "綜合 PMI",
      "originalEventName": "S&P Global Composite PMI Final (Sep)",
      "sourcePublishTime": "2026/10/05 15:50 Asia/Taipei",
      "country": "法國",
      "publishTime": "2026/10/05 15:50",
      "previous": "48.5",
      "forecast": "51.2",
      "actual": "51.1",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏空",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/10/05 15:50",
      "tags": [
        "法國",
        "綜合",
        "中性"
      ],
      "summary": "綜合 PMI 將於 2026/10/05 15:50 公布，市場關注前值 48.5、預期 51.2。",
      "event": "法國 綜合 PMI，前值 48.5、預期 51.2、實際 51.1。",
      "ai": "目前 AI 判斷為偏空觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響市場風險偏好與資金輪動。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar / 鉅亨網全球經濟指標",
      "sourceUrl": "https://www.pmi.spglobal.com/public",
      "sourceList": [
        "TradingView Economic Calendar",
        "鉅亨網全球經濟指標"
      ]
    }
  ],
  "macroEvents": [
    {
      "id": "macro-s-p-global-services-pmi-final-sep-20261005",
      "type": "macro",
      "title": "服務業 PMI",
      "eventName": "服務業 PMI",
      "originalEventName": "S&P Global Services PMI Final (Sep)",
      "sourcePublishTime": "2026/10/05 15:50 Asia/Taipei",
      "country": "法國",
      "publishTime": "2026/10/05 15:50",
      "previous": "48.0",
      "forecast": "51.4",
      "actual": "51.2",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏空",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/10/05 15:50",
      "tags": [
        "法國",
        "服務業",
        "中性"
      ],
      "summary": "服務業 PMI 將於 2026/10/05 15:50 公布，市場關注前值 48.0、預期 51.4。",
      "event": "法國 服務業 PMI，前值 48.0、預期 51.4、實際 51.2。",
      "ai": "目前 AI 判斷為偏空觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響市場風險偏好與資金輪動。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar / 鉅亨網全球經濟指標",
      "sourceUrl": "https://www.pmi.spglobal.com/public",
      "sourceList": [
        "TradingView Economic Calendar",
        "鉅亨網全球經濟指標"
      ]
    },
    {
      "id": "macro-s-p-global-composite-pmi-final-sep-20261005",
      "type": "macro",
      "title": "綜合 PMI",
      "eventName": "綜合 PMI",
      "originalEventName": "S&P Global Composite PMI Final (Sep)",
      "sourcePublishTime": "2026/10/05 15:50 Asia/Taipei",
      "country": "法國",
      "publishTime": "2026/10/05 15:50",
      "previous": "48.5",
      "forecast": "51.2",
      "actual": "51.1",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏空",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/10/05 15:50",
      "tags": [
        "法國",
        "綜合",
        "中性"
      ],
      "summary": "綜合 PMI 將於 2026/10/05 15:50 公布，市場關注前值 48.5、預期 51.2。",
      "event": "法國 綜合 PMI，前值 48.5、預期 51.2、實際 51.1。",
      "ai": "目前 AI 判斷為偏空觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響市場風險偏好與資金輪動。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar / 鉅亨網全球經濟指標",
      "sourceUrl": "https://www.pmi.spglobal.com/public",
      "sourceList": [
        "TradingView Economic Calendar",
        "鉅亨網全球經濟指標"
      ]
    },
    {
      "id": "macro-s-p-global-services-pmi-final-sep-20261005",
      "type": "macro",
      "title": "服務業 PMI",
      "eventName": "服務業 PMI",
      "originalEventName": "S&P Global Services PMI Final (Sep)",
      "sourcePublishTime": "2026/10/05 15:55 Asia/Taipei",
      "country": "德國",
      "publishTime": "2026/10/05 15:55",
      "previous": "49.7",
      "forecast": "52.9",
      "actual": "52.9",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/10/05 15:55",
      "tags": [
        "德國",
        "服務業",
        "中性"
      ],
      "summary": "服務業 PMI 將於 2026/10/05 15:55 公布，市場關注前值 49.7、預期 52.9。",
      "event": "德國 服務業 PMI，前值 49.7、預期 52.9、實際 52.9。",
      "ai": "目前 AI 判斷為中性觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響市場風險偏好與資金輪動。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar / 鉅亨網全球經濟指標",
      "sourceUrl": "https://www.pmi.spglobal.com/public",
      "sourceList": [
        "TradingView Economic Calendar",
        "鉅亨網全球經濟指標"
      ]
    },
    {
      "id": "macro-s-p-global-composite-pmi-final-sep-20261005",
      "type": "macro",
      "title": "綜合 PMI",
      "eventName": "綜合 PMI",
      "originalEventName": "S&P Global Composite PMI Final (Sep)",
      "sourcePublishTime": "2026/10/05 15:55 Asia/Taipei",
      "country": "德國",
      "publishTime": "2026/10/05 15:55",
      "previous": "51.8",
      "forecast": "53.8",
      "actual": "53.8",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/10/05 15:55",
      "tags": [
        "德國",
        "綜合",
        "中性"
      ],
      "summary": "綜合 PMI 將於 2026/10/05 15:55 公布，市場關注前值 51.8、預期 53.8。",
      "event": "德國 綜合 PMI，前值 51.8、預期 53.8、實際 53.8。",
      "ai": "目前 AI 判斷為中性觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響市場風險偏好與資金輪動。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar / 鉅亨網全球經濟指標",
      "sourceUrl": "https://www.pmi.spglobal.com/public",
      "sourceList": [
        "TradingView Economic Calendar",
        "鉅亨網全球經濟指標"
      ]
    },
    {
      "id": "macro-s-p-global-services-pmi-final-sep-20261005",
      "type": "macro",
      "title": "服務業 PMI",
      "eventName": "服務業 PMI",
      "originalEventName": "S&P Global Services PMI Final (Sep)",
      "sourcePublishTime": "2026/10/05 16:00 Asia/Taipei",
      "country": "歐元區",
      "publishTime": "2026/10/05 16:00",
      "previous": "—",
      "forecast": "53",
      "actual": null,
      "status": "等待公布",
      "statusLevel": "upcoming",
      "direction": "中性",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/10/05 16:00",
      "tags": [
        "歐元區",
        "服務業",
        "中性"
      ],
      "summary": "服務業 PMI 將於 2026/10/05 16:00 公布，市場關注前值 —、預期 53。",
      "event": "歐元區 服務業 PMI，前值 —、預期 53、實際 尚未公布。",
      "ai": "目前 AI 判斷為中性觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響市場風險偏好與資金輪動。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "https://www.pmi.spglobal.com/public",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    },
    {
      "id": "macro-s-p-global-composite-pmi-final-sep-20261005",
      "type": "macro",
      "title": "綜合 PMI",
      "eventName": "綜合 PMI",
      "originalEventName": "S&P Global Composite PMI Final (Sep)",
      "sourcePublishTime": "2026/10/05 16:00 Asia/Taipei",
      "country": "歐元區",
      "publishTime": "2026/10/05 16:00",
      "previous": "—",
      "forecast": "53.1",
      "actual": null,
      "status": "等待公布",
      "statusLevel": "upcoming",
      "direction": "中性",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/10/05 16:00",
      "tags": [
        "歐元區",
        "綜合",
        "中性"
      ],
      "summary": "綜合 PMI 將於 2026/10/05 16:00 公布，市場關注前值 —、預期 53.1。",
      "event": "歐元區 綜合 PMI，前值 —、預期 53.1、實際 尚未公布。",
      "ai": "目前 AI 判斷為中性觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響市場風險偏好與資金輪動。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "https://www.pmi.spglobal.com/public",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    },
    {
      "id": "macro-s-p-global-services-pmi-final-sep-20261005",
      "type": "macro",
      "title": "服務業 PMI",
      "eventName": "服務業 PMI",
      "originalEventName": "S&P Global Services PMI Final (Sep)",
      "sourcePublishTime": "2026/10/05 16:30 Asia/Taipei",
      "country": "英國",
      "publishTime": "2026/10/05 16:30",
      "previous": "52.5",
      "forecast": "51.7",
      "actual": "52.1",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/10/05 16:30",
      "tags": [
        "英國",
        "服務業",
        "中性"
      ],
      "summary": "服務業 PMI 將於 2026/10/05 16:30 公布，市場關注前值 52.5、預期 51.7。",
      "event": "英國 服務業 PMI，前值 52.5、預期 51.7、實際 52.1。",
      "ai": "目前 AI 判斷為偏多觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響市場風險偏好與資金輪動。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar / 鉅亨網全球經濟指標",
      "sourceUrl": "https://www.pmi.spglobal.com/public",
      "sourceList": [
        "TradingView Economic Calendar",
        "鉅亨網全球經濟指標"
      ]
    },
    {
      "id": "macro-s-p-global-composite-pmi-final-sep-20261005",
      "type": "macro",
      "title": "綜合 PMI",
      "eventName": "綜合 PMI",
      "originalEventName": "S&P Global Composite PMI Final (Sep)",
      "sourcePublishTime": "2026/10/05 16:30 Asia/Taipei",
      "country": "英國",
      "publishTime": "2026/10/05 16:30",
      "previous": "52.5",
      "forecast": "51.7",
      "actual": "52.0",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/10/05 16:30",
      "tags": [
        "英國",
        "綜合",
        "中性"
      ],
      "summary": "綜合 PMI 將於 2026/10/05 16:30 公布，市場關注前值 52.5、預期 51.7。",
      "event": "英國 綜合 PMI，前值 52.5、預期 51.7、實際 52.0。",
      "ai": "目前 AI 判斷為偏多觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響市場風險偏好與資金輪動。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar / 鉅亨網全球經濟指標",
      "sourceUrl": "https://www.pmi.spglobal.com/public",
      "sourceList": [
        "TradingView Economic Calendar",
        "鉅亨網全球經濟指標"
      ]
    }
  ]
};
