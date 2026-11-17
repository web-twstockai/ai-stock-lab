window.IntelligenceOverviewData = {
  "updatedAt": "2026/11/17 07:46",
  "status": "運作中",
  "cards": [
    {
      "label": "今日偵測情報",
      "value": 306,
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
          "10 筆"
        ],
        [
          "三大法人同步買",
          "2 筆"
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
          "37 個"
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
      "id": "inst-2317-20261116",
      "type": "institutional",
      "title": "2317 鴻海",
      "stockCode": "2317",
      "stockName": "鴻海",
      "sector": "其他電子業",
      "group": "其他電子業",
      "institutionType": "自營商",
      "direction": "連買",
      "days": 2,
      "consecutiveBuyDays": 2,
      "streaks": {
        "外資": 0,
        "投信": 0,
        "自營商": 2
      },
      "latestNetBuy": 1468,
      "buyVolume": 13211,
      "buyAmount": 31.84,
      "syncCount": 1,
      "importance": "高",
      "timestamp": "2026/11/16 18:20",
      "tags": [
        "自營商",
        "連買",
        "其他電子業",
        "3D技術",
        "3D感測"
      ],
      "summary": "自營商連買，近 10 個交易日正買合計 13,211 張，估算金額約 31.84 億元。",
      "event": "自營商連買 2 日，近 10 個交易日正買合計 13,211 張；最新日外資 -28,939 張、投信 -661 張、自營商 1,468 張。",
      "ai": "法人買盤集中在 其他電子業，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 48479.663,
      "yahooVerification": {
        "status": "matched",
        "source": "https://tw.stock.yahoo.com/quote/2317.TW/institutional-trading",
        "latestNetBuy": 1468,
        "days": 2,
        "latestForeign": -28939,
        "latestTrust": -661,
        "latestDealer": 1468
      }
    },
    {
      "id": "inst-2884-20261116",
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
        "外資": 4,
        "投信": 0,
        "自營商": 10
      },
      "latestNetBuy": 2518,
      "buyVolume": 30934,
      "buyAmount": 0,
      "syncCount": 2,
      "importance": "高",
      "timestamp": "2026/11/16 18:20",
      "tags": [
        "自營商",
        "連買",
        "金融保險",
        "電子商務及延伸",
        "金融業"
      ],
      "summary": "自營商連買，近 10 個交易日正買合計 30,934 張，估算金額約 0.00 億元。",
      "event": "自營商連買 10 日，近 10 個交易日正買合計 30,934 張；最新日外資 10,702 張、投信 -4,400 張、自營商 2,518 張。",
      "ai": "法人買盤集中在 金融保險，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 92911.429,
      "yahooVerification": {
        "status": "days-different",
        "source": "https://tw.stock.yahoo.com/quote/2884.TW/institutional-trading",
        "latestNetBuy": 2518,
        "days": 40,
        "latestForeign": 10702,
        "latestTrust": -4400,
        "latestDealer": 2518
      }
    },
    {
      "id": "inst-2303-20261116",
      "type": "institutional",
      "title": "2303 聯電",
      "stockCode": "2303",
      "stockName": "聯電",
      "sector": "半導體",
      "group": "半導體",
      "institutionType": "自營商",
      "direction": "連買",
      "days": 5,
      "consecutiveBuyDays": 5,
      "streaks": {
        "外資": 4,
        "投信": 0,
        "自營商": 5
      },
      "latestNetBuy": 1406,
      "buyVolume": 9465,
      "buyAmount": 9.61,
      "syncCount": 2,
      "importance": "高",
      "timestamp": "2026/11/16 18:20",
      "tags": [
        "自營商",
        "連買",
        "半導體",
        "手機",
        "車用電子相關"
      ],
      "summary": "自營商連買，近 10 個交易日正買合計 9,465 張，估算金額約 9.61 億元。",
      "event": "自營商連買 5 日，近 10 個交易日正買合計 9,465 張；最新日外資 15,444 張、投信 -21,333 張、自營商 1,406 張。",
      "ai": "法人買盤集中在 半導體，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 103952.346,
      "yahooVerification": {
        "status": "matched",
        "source": "https://tw.stock.yahoo.com/quote/2303.TW/institutional-trading",
        "latestNetBuy": 1406,
        "days": 5,
        "latestForeign": 15444,
        "latestTrust": -21333,
        "latestDealer": 1406
      }
    },
    {
      "id": "inst-2618-20261116",
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
        "自營商": 2
      },
      "latestNetBuy": 13032,
      "buyVolume": 124597,
      "buyAmount": 0,
      "syncCount": 2,
      "importance": "高",
      "timestamp": "2026/11/16 18:20",
      "tags": [
        "外資",
        "連買",
        "航運業",
        "三通",
        "運輸事業"
      ],
      "summary": "外資連買，近 10 個交易日正買合計 124,597 張，估算金額約 0.00 億元。",
      "event": "外資連買 10 日，近 10 個交易日正買合計 124,597 張；最新日外資 13,032 張、投信 -207 張、自營商 753 張。",
      "ai": "法人買盤集中在 航運業，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 135433.274,
      "yahooVerification": {
        "status": "days-different",
        "source": "https://tw.stock.yahoo.com/quote/2618.TW/institutional-trading",
        "latestNetBuy": 13032,
        "days": 13,
        "latestForeign": 13032,
        "latestTrust": -207,
        "latestDealer": 753
      }
    },
    {
      "id": "macro-s-p-global-composite-pmi-final-oct-2026-20261104",
      "type": "macro",
      "title": "綜合 PMI",
      "eventName": "綜合 PMI",
      "originalEventName": "S&P Global Composite PMI Final (Oct. 2026)",
      "sourcePublishTime": "2026/11/04 16:55 Asia/Taipei",
      "country": "德國",
      "publishTime": "2026/11/04 16:55",
      "previous": "53.8",
      "forecast": "52.8",
      "actual": "53.4",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/11/04 16:55",
      "tags": [
        "德國",
        "綜合",
        "中性"
      ],
      "summary": "綜合 PMI 將於 2026/11/04 16:55 公布，市場關注前值 53.8、預期 52.8。",
      "event": "德國 綜合 PMI，前值 53.8、預期 52.8、實際 53.4。",
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
      "id": "macro-s-p-global-composite-pmi-final-oct-2026-20261104",
      "type": "macro",
      "title": "綜合 PMI",
      "eventName": "綜合 PMI",
      "originalEventName": "S&P Global Composite PMI Final (Oct. 2026)",
      "sourcePublishTime": "2026/11/04 16:50 Asia/Taipei",
      "country": "法國",
      "publishTime": "2026/11/04 16:50",
      "previous": "51.1",
      "forecast": "48.4",
      "actual": "46.6",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏空",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/11/04 16:50",
      "tags": [
        "法國",
        "綜合",
        "中性"
      ],
      "summary": "綜合 PMI 將於 2026/11/04 16:50 公布，市場關注前值 51.1、預期 48.4。",
      "event": "法國 綜合 PMI，前值 51.1、預期 48.4、實際 46.6。",
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
      "id": "macro-s-p-global-services-pmi-final-oct-2026-20261104",
      "type": "macro",
      "title": "服務業 PMI",
      "eventName": "服務業 PMI",
      "originalEventName": "S&P Global Services PMI Final (Oct. 2026)",
      "sourcePublishTime": "2026/11/04 16:50 Asia/Taipei",
      "country": "法國",
      "publishTime": "2026/11/04 16:50",
      "previous": "51.2",
      "forecast": "48.4",
      "actual": "46.2",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏空",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/11/04 16:50",
      "tags": [
        "法國",
        "服務業",
        "中性"
      ],
      "summary": "服務業 PMI 將於 2026/11/04 16:50 公布，市場關注前值 51.2、預期 48.4。",
      "event": "法國 服務業 PMI，前值 51.2、預期 48.4、實際 46.2。",
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
      "id": "macro-s-p-global-pmi-20261103",
      "type": "macro",
      "title": "製造業 PMI",
      "eventName": "製造業 PMI",
      "originalEventName": "S&P Global製造業PMI-終值",
      "sourcePublishTime": "2026/11/03 22:45 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/11/03 22:45",
      "previous": "55.9",
      "forecast": "56.0",
      "actual": "54.9",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏空",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/11/03 22:45",
      "tags": [
        "美國",
        "製造業",
        "偏空"
      ],
      "summary": "製造業 PMI 將於 2026/11/03 22:45 公布，市場關注前值 55.9、預期 56.0。",
      "event": "美國 製造業 PMI，前值 55.9、預期 56.0、實際 54.9。",
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
      "id": "macro-s-p-global-pmi-20261103",
      "type": "macro",
      "title": "製造業 PMI",
      "eventName": "製造業 PMI",
      "originalEventName": "S&P Global製造業PMI-終值",
      "sourcePublishTime": "2026/11/03 22:45 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/11/03 22:45",
      "previous": "55.9",
      "forecast": "56.0",
      "actual": "54.9",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏空",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/11/03 22:45",
      "tags": [
        "美國",
        "製造業",
        "偏空"
      ],
      "summary": "製造業 PMI 將於 2026/11/03 22:45 公布，市場關注前值 55.9、預期 56.0。",
      "event": "美國 製造業 PMI，前值 55.9、預期 56.0、實際 54.9。",
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
      "id": "macro-s-p-global-composite-pmi-final-oct-2026-20261104",
      "type": "macro",
      "title": "綜合 PMI",
      "eventName": "綜合 PMI",
      "originalEventName": "S&P Global Composite PMI Final (Oct. 2026)",
      "sourcePublishTime": "2026/11/04 16:50 Asia/Taipei",
      "country": "法國",
      "publishTime": "2026/11/04 16:50",
      "previous": "51.1",
      "forecast": "48.4",
      "actual": "46.6",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏空",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/11/04 16:50",
      "tags": [
        "法國",
        "綜合",
        "中性"
      ],
      "summary": "綜合 PMI 將於 2026/11/04 16:50 公布，市場關注前值 51.1、預期 48.4。",
      "event": "法國 綜合 PMI，前值 51.1、預期 48.4、實際 46.6。",
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
      "id": "macro-s-p-global-services-pmi-final-oct-2026-20261104",
      "type": "macro",
      "title": "服務業 PMI",
      "eventName": "服務業 PMI",
      "originalEventName": "S&P Global Services PMI Final (Oct. 2026)",
      "sourcePublishTime": "2026/11/04 16:50 Asia/Taipei",
      "country": "法國",
      "publishTime": "2026/11/04 16:50",
      "previous": "51.2",
      "forecast": "48.4",
      "actual": "46.2",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏空",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/11/04 16:50",
      "tags": [
        "法國",
        "服務業",
        "中性"
      ],
      "summary": "服務業 PMI 將於 2026/11/04 16:50 公布，市場關注前值 51.2、預期 48.4。",
      "event": "法國 服務業 PMI，前值 51.2、預期 48.4、實際 46.2。",
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
      "id": "macro-s-p-global-composite-pmi-final-oct-2026-20261104",
      "type": "macro",
      "title": "綜合 PMI",
      "eventName": "綜合 PMI",
      "originalEventName": "S&P Global Composite PMI Final (Oct. 2026)",
      "sourcePublishTime": "2026/11/04 16:55 Asia/Taipei",
      "country": "德國",
      "publishTime": "2026/11/04 16:55",
      "previous": "53.8",
      "forecast": "52.8",
      "actual": "53.4",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/11/04 16:55",
      "tags": [
        "德國",
        "綜合",
        "中性"
      ],
      "summary": "綜合 PMI 將於 2026/11/04 16:55 公布，市場關注前值 53.8、預期 52.8。",
      "event": "德國 綜合 PMI，前值 53.8、預期 52.8、實際 53.4。",
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
      "id": "macro-s-p-global-services-pmi-final-oct-2026-20261104",
      "type": "macro",
      "title": "服務業 PMI",
      "eventName": "服務業 PMI",
      "originalEventName": "S&P Global Services PMI Final (Oct. 2026)",
      "sourcePublishTime": "2026/11/04 16:55 Asia/Taipei",
      "country": "德國",
      "publishTime": "2026/11/04 16:55",
      "previous": "52.9",
      "forecast": "51.7",
      "actual": "52.5",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/11/04 16:55",
      "tags": [
        "德國",
        "服務業",
        "中性"
      ],
      "summary": "服務業 PMI 將於 2026/11/04 16:55 公布，市場關注前值 52.9、預期 51.7。",
      "event": "德國 服務業 PMI，前值 52.9、預期 51.7、實際 52.5。",
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
      "id": "macro-s-p-global-composite-pmi-final-oct-2026-20261104",
      "type": "macro",
      "title": "綜合 PMI",
      "eventName": "綜合 PMI",
      "originalEventName": "S&P Global Composite PMI Final (Oct. 2026)",
      "sourcePublishTime": "2026/11/04 17:00 Asia/Taipei",
      "country": "歐元區",
      "publishTime": "2026/11/04 17:00",
      "previous": "—",
      "forecast": "51.9",
      "actual": null,
      "status": "等待公布",
      "statusLevel": "upcoming",
      "direction": "中性",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/11/04 17:00",
      "tags": [
        "歐元區",
        "綜合",
        "中性"
      ],
      "summary": "綜合 PMI 將於 2026/11/04 17:00 公布，市場關注前值 —、預期 51.9。",
      "event": "歐元區 綜合 PMI，前值 —、預期 51.9、實際 尚未公布。",
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
      "id": "macro-s-p-global-services-pmi-final-oct-2026-20261104",
      "type": "macro",
      "title": "服務業 PMI",
      "eventName": "服務業 PMI",
      "originalEventName": "S&P Global Services PMI Final (Oct. 2026)",
      "sourcePublishTime": "2026/11/04 17:00 Asia/Taipei",
      "country": "歐元區",
      "publishTime": "2026/11/04 17:00",
      "previous": "—",
      "forecast": "51.7",
      "actual": null,
      "status": "等待公布",
      "statusLevel": "upcoming",
      "direction": "中性",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/11/04 17:00",
      "tags": [
        "歐元區",
        "服務業",
        "中性"
      ],
      "summary": "服務業 PMI 將於 2026/11/04 17:00 公布，市場關注前值 —、預期 51.7。",
      "event": "歐元區 服務業 PMI，前值 —、預期 51.7、實際 尚未公布。",
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
      "id": "macro-s-p-global-composite-pmi-final-oct-2026-20261104",
      "type": "macro",
      "title": "綜合 PMI",
      "eventName": "綜合 PMI",
      "originalEventName": "S&P Global Composite PMI Final (Oct. 2026)",
      "sourcePublishTime": "2026/11/04 17:30 Asia/Taipei",
      "country": "英國",
      "publishTime": "2026/11/04 17:30",
      "previous": "52.0",
      "forecast": "53.1",
      "actual": "52.9",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏空",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/11/04 17:30",
      "tags": [
        "英國",
        "綜合",
        "中性"
      ],
      "summary": "綜合 PMI 將於 2026/11/04 17:30 公布，市場關注前值 52.0、預期 53.1。",
      "event": "英國 綜合 PMI，前值 52.0、預期 53.1、實際 52.9。",
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
  ]
};
