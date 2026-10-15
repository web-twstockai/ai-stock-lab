window.IntelligenceOverviewData = {
  "updatedAt": "2026/10/15 07:47",
  "status": "運作中",
  "cards": [
    {
      "label": "今日偵測情報",
      "value": 270,
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
      "value": "ECB General Council Meeting",
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
          "19 筆"
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
          "21 個"
        ],
        [
          "下一事件",
          "ECB General Council Meeting"
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
      "id": "inst-3481-20261014",
      "type": "institutional",
      "title": "3481 群創",
      "stockCode": "3481",
      "stockName": "群創",
      "sector": "光電業",
      "group": "光電業",
      "institutionType": "外資",
      "direction": "同步買超",
      "days": 3,
      "consecutiveBuyDays": 3,
      "streaks": {
        "外資": 3,
        "投信": 2,
        "自營商": 1
      },
      "latestNetBuy": 13124,
      "buyVolume": 144519,
      "buyAmount": 0,
      "syncCount": 3,
      "importance": "高",
      "timestamp": "2026/10/14 18:20",
      "tags": [
        "外資",
        "同步買超",
        "光電業",
        "Android",
        "AppleCar"
      ],
      "summary": "外資同步買超，近 10 個交易日正買合計 144,519 張，估算金額約 0.00 億元。",
      "event": "外資連買 3 日，近 10 個交易日正買合計 144,519 張；最新日外資 13,124 張、投信 105 張、自營商 1,075 張。",
      "ai": "法人買盤集中在 光電業，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 157217.904,
      "yahooVerification": {
        "status": "matched",
        "source": "https://tw.stock.yahoo.com/quote/3481.TW/institutional-trading",
        "latestNetBuy": 13124,
        "days": 3,
        "latestForeign": 13124,
        "latestTrust": 105,
        "latestDealer": 1075
      }
    },
    {
      "id": "inst-1303-20261014",
      "type": "institutional",
      "title": "1303 南亞",
      "stockCode": "1303",
      "stockName": "南亞",
      "sector": "塑膠工業",
      "group": "塑膠工業",
      "institutionType": "外資",
      "direction": "連買",
      "days": 2,
      "consecutiveBuyDays": 2,
      "streaks": {
        "外資": 2,
        "投信": 2,
        "自營商": 0
      },
      "latestNetBuy": 15855,
      "buyVolume": 56220,
      "buyAmount": 179.34,
      "syncCount": 2,
      "importance": "高",
      "timestamp": "2026/10/14 18:20",
      "tags": [
        "外資",
        "連買",
        "塑膠工業",
        "APPLE概念",
        "越南設廠"
      ],
      "summary": "外資連買，近 10 個交易日正買合計 56,220 張，估算金額約 179.34 億元。",
      "event": "外資連買 2 日，近 10 個交易日正買合計 56,220 張；最新日外資 15,855 張、投信 4,541 張、自營商 -868 張。",
      "ai": "法人買盤集中在 塑膠工業，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 82363.155,
      "yahooVerification": {
        "status": "matched",
        "source": "https://tw.stock.yahoo.com/quote/1303.TW/institutional-trading",
        "latestNetBuy": 15855,
        "days": 2,
        "latestForeign": 15855,
        "latestTrust": 4541,
        "latestDealer": -868
      }
    },
    {
      "id": "inst-2884-20261014",
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
        "外資": 3,
        "投信": 0,
        "自營商": 10
      },
      "latestNetBuy": 304,
      "buyVolume": 8076,
      "buyAmount": 0,
      "syncCount": 2,
      "importance": "高",
      "timestamp": "2026/10/14 18:20",
      "tags": [
        "自營商",
        "連買",
        "金融保險",
        "電子商務及延伸",
        "金融業"
      ],
      "summary": "自營商連買，近 10 個交易日正買合計 8,076 張，估算金額約 0.00 億元。",
      "event": "自營商連買 10 日，近 10 個交易日正買合計 8,076 張；最新日外資 13,155 張、投信 -1,342 張、自營商 304 張。",
      "ai": "法人買盤集中在 金融保險，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 68391.53,
      "yahooVerification": {
        "status": "days-different",
        "source": "https://tw.stock.yahoo.com/quote/2884.TW/institutional-trading",
        "latestNetBuy": 304,
        "days": 19,
        "latestForeign": 13155,
        "latestTrust": -1342,
        "latestDealer": 304
      }
    },
    {
      "id": "inst-1409-20261014",
      "type": "institutional",
      "title": "1409 新纖",
      "stockCode": "1409",
      "stockName": "新纖",
      "sector": "紡織纖維",
      "group": "紡織纖維",
      "institutionType": "外資",
      "direction": "連買",
      "days": 8,
      "consecutiveBuyDays": 8,
      "streaks": {
        "外資": 8,
        "投信": 0,
        "自營商": 1
      },
      "latestNetBuy": 14045,
      "buyVolume": 40710,
      "buyAmount": 0,
      "syncCount": 2,
      "importance": "高",
      "timestamp": "2026/10/14 18:20",
      "tags": [
        "外資",
        "連買",
        "紡織纖維",
        "中國",
        "桃園航空城"
      ],
      "summary": "外資連買，近 10 個交易日正買合計 40,710 張，估算金額約 0.00 億元。",
      "event": "外資連買 8 日，近 10 個交易日正買合計 40,710 張；最新日外資 14,045 張、投信 0 張、自營商 629 張。",
      "ai": "法人買盤集中在 紡織纖維，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 41886.441,
      "yahooVerification": {
        "status": "matched",
        "source": "https://tw.stock.yahoo.com/quote/1409.TW/institutional-trading",
        "latestNetBuy": 14045,
        "days": 8,
        "latestForeign": 14045,
        "latestTrust": 0,
        "latestDealer": 629
      }
    },
    {
      "id": "macro-s-p-global-manufacturing-pmi-final-sep-20261001",
      "type": "macro",
      "title": "製造業 PMI",
      "eventName": "製造業 PMI",
      "originalEventName": "S&P Global Manufacturing PMI Final (Sep)",
      "sourcePublishTime": "2026/10/01 16:00 Asia/Taipei",
      "country": "歐元區",
      "publishTime": "2026/10/01 16:00",
      "previous": "—",
      "forecast": "52.7",
      "actual": null,
      "status": "等待公布",
      "statusLevel": "upcoming",
      "direction": "中性",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/10/01 16:00",
      "tags": [
        "歐元區",
        "製造業",
        "中性"
      ],
      "summary": "製造業 PMI 將於 2026/10/01 16:00 公布，市場關注前值 —、預期 52.7。",
      "event": "歐元區 製造業 PMI，前值 —、預期 52.7、實際 尚未公布。",
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
      "id": "macro-s-p-global-manufacturing-pmi-final-sep-20261001",
      "type": "macro",
      "title": "製造業 PMI",
      "eventName": "製造業 PMI",
      "originalEventName": "S&P Global Manufacturing PMI Final (Sep)",
      "sourcePublishTime": "2026/10/01 15:55 Asia/Taipei",
      "country": "德國",
      "publishTime": "2026/10/01 15:55",
      "previous": "54.3",
      "forecast": "53.8",
      "actual": "53.9",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/10/01 15:55",
      "tags": [
        "德國",
        "製造業",
        "中性"
      ],
      "summary": "製造業 PMI 將於 2026/10/01 15:55 公布，市場關注前值 54.3、預期 53.8。",
      "event": "德國 製造業 PMI，前值 54.3、預期 53.8、實際 53.9。",
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
      "id": "macro-s-p-global-manufacturing-pmi-final-sep-20261001",
      "type": "macro",
      "title": "製造業 PMI",
      "eventName": "製造業 PMI",
      "originalEventName": "S&P Global Manufacturing PMI Final (Sep)",
      "sourcePublishTime": "2026/10/01 15:50 Asia/Taipei",
      "country": "法國",
      "publishTime": "2026/10/01 15:50",
      "previous": "51.1",
      "forecast": "50.3",
      "actual": "50.6",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/10/01 15:50",
      "tags": [
        "法國",
        "製造業",
        "中性"
      ],
      "summary": "製造業 PMI 將於 2026/10/01 15:50 公布，市場關注前值 51.1、預期 50.3。",
      "event": "法國 製造業 PMI，前值 51.1、預期 50.3、實際 50.6。",
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
      "id": "macro-ecb-general-council-meeting-20261001",
      "type": "macro",
      "title": "ECB General Council Meeting",
      "eventName": "ECB General Council Meeting",
      "originalEventName": "ECB General Council Meeting",
      "sourcePublishTime": "2026/10/01 15:00 Asia/Taipei",
      "country": "歐元區",
      "publishTime": "2026/10/01 15:00",
      "previous": "—",
      "forecast": "—",
      "actual": null,
      "status": "等待公布",
      "statusLevel": "upcoming",
      "direction": "中性",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/10/01 15:00",
      "tags": [
        "歐元區",
        "ECB",
        "中性"
      ],
      "summary": "ECB General Council Meeting 將於 2026/10/01 15:00 公布，市場關注前值 —、預期 —。",
      "event": "歐元區 ECB General Council Meeting，前值 —、預期 —、實際 尚未公布。",
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
      "id": "macro-ecb-general-council-meeting-20261001",
      "type": "macro",
      "title": "ECB General Council Meeting",
      "eventName": "ECB General Council Meeting",
      "originalEventName": "ECB General Council Meeting",
      "sourcePublishTime": "2026/10/01 15:00 Asia/Taipei",
      "country": "歐元區",
      "publishTime": "2026/10/01 15:00",
      "previous": "—",
      "forecast": "—",
      "actual": null,
      "status": "等待公布",
      "statusLevel": "upcoming",
      "direction": "中性",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/10/01 15:00",
      "tags": [
        "歐元區",
        "ECB",
        "中性"
      ],
      "summary": "ECB General Council Meeting 將於 2026/10/01 15:00 公布，市場關注前值 —、預期 —。",
      "event": "歐元區 ECB General Council Meeting，前值 —、預期 —、實際 尚未公布。",
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
      "id": "macro-s-p-global-manufacturing-pmi-final-sep-20261001",
      "type": "macro",
      "title": "製造業 PMI",
      "eventName": "製造業 PMI",
      "originalEventName": "S&P Global Manufacturing PMI Final (Sep)",
      "sourcePublishTime": "2026/10/01 15:50 Asia/Taipei",
      "country": "法國",
      "publishTime": "2026/10/01 15:50",
      "previous": "51.1",
      "forecast": "50.3",
      "actual": "50.6",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/10/01 15:50",
      "tags": [
        "法國",
        "製造業",
        "中性"
      ],
      "summary": "製造業 PMI 將於 2026/10/01 15:50 公布，市場關注前值 51.1、預期 50.3。",
      "event": "法國 製造業 PMI，前值 51.1、預期 50.3、實際 50.6。",
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
      "id": "macro-s-p-global-manufacturing-pmi-final-sep-20261001",
      "type": "macro",
      "title": "製造業 PMI",
      "eventName": "製造業 PMI",
      "originalEventName": "S&P Global Manufacturing PMI Final (Sep)",
      "sourcePublishTime": "2026/10/01 15:55 Asia/Taipei",
      "country": "德國",
      "publishTime": "2026/10/01 15:55",
      "previous": "54.3",
      "forecast": "53.8",
      "actual": "53.9",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/10/01 15:55",
      "tags": [
        "德國",
        "製造業",
        "中性"
      ],
      "summary": "製造業 PMI 將於 2026/10/01 15:55 公布，市場關注前值 54.3、預期 53.8。",
      "event": "德國 製造業 PMI，前值 54.3、預期 53.8、實際 53.9。",
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
      "id": "macro-s-p-global-manufacturing-pmi-final-sep-20261001",
      "type": "macro",
      "title": "製造業 PMI",
      "eventName": "製造業 PMI",
      "originalEventName": "S&P Global Manufacturing PMI Final (Sep)",
      "sourcePublishTime": "2026/10/01 16:00 Asia/Taipei",
      "country": "歐元區",
      "publishTime": "2026/10/01 16:00",
      "previous": "—",
      "forecast": "52.7",
      "actual": null,
      "status": "等待公布",
      "statusLevel": "upcoming",
      "direction": "中性",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/10/01 16:00",
      "tags": [
        "歐元區",
        "製造業",
        "中性"
      ],
      "summary": "製造業 PMI 將於 2026/10/01 16:00 公布，市場關注前值 —、預期 52.7。",
      "event": "歐元區 製造業 PMI，前值 —、預期 52.7、實際 尚未公布。",
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
      "id": "macro-s-p-global-manufacturing-pmi-final-sep-20261001",
      "type": "macro",
      "title": "製造業 PMI",
      "eventName": "製造業 PMI",
      "originalEventName": "S&P Global Manufacturing PMI Final (Sep)",
      "sourcePublishTime": "2026/10/01 16:30 Asia/Taipei",
      "country": "英國",
      "publishTime": "2026/10/01 16:30",
      "previous": "51.7",
      "forecast": "52",
      "actual": "51.9",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏空",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/10/01 16:30",
      "tags": [
        "英國",
        "製造業",
        "中性"
      ],
      "summary": "製造業 PMI 將於 2026/10/01 16:30 公布，市場關注前值 51.7、預期 52.0。",
      "event": "英國 製造業 PMI，前值 51.7、預期 52.0、實際 51.9。",
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
      "id": "macro-unemployment-rate-aug-20261001",
      "type": "macro",
      "title": "失業率",
      "eventName": "失業率",
      "originalEventName": "Unemployment Rate (Aug)",
      "sourcePublishTime": "2026/10/01 17:00 Asia/Taipei",
      "country": "歐元區",
      "publishTime": "2026/10/01 17:00",
      "previous": "6.4",
      "forecast": "6.4",
      "actual": "6.4",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響全球資金成本、美元走勢與風險資產評價。",
      "importance": "中高",
      "timestamp": "2026/10/01 17:00",
      "tags": [
        "歐元區",
        "失業率",
        "中性"
      ],
      "summary": "失業率 將於 2026/10/01 17:00 公布，市場關注前值 6.4、預期 6.4。",
      "event": "歐元區 失業率，前值 6.4、預期 6.4、實際 6.4。",
      "ai": "目前 AI 判斷為中性觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響全球資金成本、美元走勢與風險資產評價。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "https://ec.europa.eu/eurostat/",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    },
    {
      "id": "macro-jobless-claims-4-week-average-sep-26-20261001",
      "type": "macro",
      "title": "初領失業救濟金人數",
      "eventName": "初領失業救濟金人數",
      "originalEventName": "Jobless Claims 4-week Average (Sep/26)",
      "sourcePublishTime": "2026/10/01 20:30 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/10/01 20:30",
      "previous": "202.5",
      "forecast": "1730",
      "actual": "200",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響就業強弱、薪資通膨與聯準會政策預期。",
      "importance": "中高",
      "timestamp": "2026/10/01 20:30",
      "tags": [
        "美國",
        "初領失業救濟金人數",
        "中性"
      ],
      "summary": "初領失業救濟金人數 將於 2026/10/01 20:30 公布，市場關注前值 202.5、預期 —。",
      "event": "美國 初領失業救濟金人數，前值 202.5、預期 —、實際 200。",
      "ai": "目前 AI 判斷為中性觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響就業強弱、薪資通膨與聯準會政策預期。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "http://www.dol.gov",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    },
    {
      "id": "macro-s-p-global-manufacturing-pmi-final-sep-20261001",
      "type": "macro",
      "title": "製造業 PMI",
      "eventName": "製造業 PMI",
      "originalEventName": "S&P Global Manufacturing PMI Final (Sep)",
      "sourcePublishTime": "2026/10/01 21:45 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/10/01 21:45",
      "previous": "53.9",
      "forecast": "57",
      "actual": "55.9",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏空",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/10/01 21:45",
      "tags": [
        "美國",
        "製造業",
        "中性"
      ],
      "summary": "製造業 PMI 將於 2026/10/01 21:45 公布，市場關注前值 53.9、預期 57.0。",
      "event": "美國 製造業 PMI，前值 53.9、預期 57.0、實際 55.9。",
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
