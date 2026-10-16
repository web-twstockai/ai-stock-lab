window.IntelligenceOverviewData = {
  "updatedAt": "2026/10/16 18:30",
  "status": "運作中",
  "cards": [
    {
      "label": "今日偵測情報",
      "value": 271,
      "unit": "筆",
      "icon": "file"
    },
    {
      "label": "高重要度訊號",
      "value": 110,
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
          "30 筆"
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
          "22 個"
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
      "id": "inst-2313-20261016",
      "type": "institutional",
      "title": "2313 華通",
      "stockCode": "2313",
      "stockName": "華通",
      "sector": "電子零組件",
      "group": "電子零組件",
      "institutionType": "投信",
      "direction": "同步買超",
      "days": 10,
      "consecutiveBuyDays": 10,
      "streaks": {
        "外資": 1,
        "投信": 10,
        "自營商": 1
      },
      "latestNetBuy": 1289,
      "buyVolume": 10649,
      "buyAmount": 0,
      "syncCount": 3,
      "importance": "高",
      "timestamp": "2026/10/16 18:20",
      "tags": [
        "投信",
        "同步買超",
        "電子零組件",
        "APPLE概念",
        "Android"
      ],
      "summary": "投信同步買超，近 10 個交易日正買合計 10,649 張，估算金額約 0.00 億元。",
      "event": "投信連買 10 日，近 10 個交易日正買合計 10,649 張；最新日外資 15,362 張、投信 1,289 張、自營商 196 張。",
      "ai": "法人買盤集中在 電子零組件，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 70018.434,
      "yahooVerification": {
        "status": "matched",
        "source": "https://tw.stock.yahoo.com/quote/2313.TW/institutional-trading",
        "latestNetBuy": 1289,
        "days": 10,
        "latestForeign": 15362,
        "latestTrust": 1289,
        "latestDealer": 196
      }
    },
    {
      "id": "inst-2002-20261016",
      "type": "institutional",
      "title": "2002 中鋼",
      "stockCode": "2002",
      "stockName": "中鋼",
      "sector": "鋼鐵工業",
      "group": "鋼鐵工業",
      "institutionType": "外資",
      "direction": "同步買超",
      "days": 6,
      "consecutiveBuyDays": 6,
      "streaks": {
        "外資": 6,
        "投信": 2,
        "自營商": 1
      },
      "latestNetBuy": 43729,
      "buyVolume": 180979,
      "buyAmount": 0,
      "syncCount": 3,
      "importance": "高",
      "timestamp": "2026/10/16 18:20",
      "tags": [
        "外資",
        "同步買超",
        "鋼鐵工業",
        "印度設廠",
        "官股企業"
      ],
      "summary": "外資同步買超，近 10 個交易日正買合計 180,979 張，估算金額約 0.00 億元。",
      "event": "外資連買 6 日，近 10 個交易日正買合計 180,979 張；最新日外資 43,729 張、投信 27 張、自營商 507 張。",
      "ai": "法人買盤集中在 鋼鐵工業，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 185133.77,
      "yahooVerification": {
        "status": "matched",
        "source": "https://tw.stock.yahoo.com/quote/2002.TW/institutional-trading",
        "latestNetBuy": 43729,
        "days": 6,
        "latestForeign": 43729,
        "latestTrust": 27,
        "latestDealer": 507
      }
    },
    {
      "id": "inst-2317-20261016",
      "type": "institutional",
      "title": "2317 鴻海",
      "stockCode": "2317",
      "stockName": "鴻海",
      "sector": "其他電子業",
      "group": "其他電子業",
      "institutionType": "自營商",
      "direction": "連買",
      "days": 5,
      "consecutiveBuyDays": 5,
      "streaks": {
        "外資": 1,
        "投信": 0,
        "自營商": 5
      },
      "latestNetBuy": 728,
      "buyVolume": 4386,
      "buyAmount": 10.5,
      "syncCount": 2,
      "importance": "高",
      "timestamp": "2026/10/16 18:20",
      "tags": [
        "自營商",
        "連買",
        "其他電子業",
        "3D技術",
        "3D感測"
      ],
      "summary": "自營商連買，近 10 個交易日正買合計 4,386 張，估算金額約 10.50 億元。",
      "event": "自營商連買 5 日，近 10 個交易日正買合計 4,386 張；最新日外資 22,671 張、投信 -239 張、自營商 728 張。",
      "ai": "法人買盤集中在 其他電子業，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 45314.332,
      "yahooVerification": {
        "status": "matched",
        "source": "https://tw.stock.yahoo.com/quote/2317.TW/institutional-trading",
        "latestNetBuy": 728,
        "days": 5,
        "latestForeign": 22671,
        "latestTrust": -239,
        "latestDealer": 728
      }
    },
    {
      "id": "inst-2330-20261016",
      "type": "institutional",
      "title": "2330 台積電",
      "stockCode": "2330",
      "stockName": "台積電",
      "sector": "半導體",
      "group": "半導體",
      "institutionType": "投信",
      "direction": "連買",
      "days": 10,
      "consecutiveBuyDays": 10,
      "streaks": {
        "外資": 0,
        "投信": 10,
        "自營商": 0
      },
      "latestNetBuy": 710,
      "buyVolume": 10196,
      "buyAmount": 248.79,
      "syncCount": 1,
      "importance": "高",
      "timestamp": "2026/10/16 18:20",
      "tags": [
        "投信",
        "連買",
        "半導體",
        "3D技術",
        "3D感測"
      ],
      "summary": "投信連買，近 10 個交易日正買合計 10,196 張，估算金額約 248.79 億元。",
      "event": "投信連買 10 日，近 10 個交易日正買合計 10,196 張；最新日外資 -22,046 張、投信 710 張、自營商 -1,036 張。",
      "ai": "法人買盤集中在 半導體，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 33942.67,
      "yahooVerification": {
        "status": "days-different",
        "source": "https://tw.stock.yahoo.com/quote/2330.TW/institutional-trading",
        "latestNetBuy": 710,
        "days": 13,
        "latestForeign": -22046,
        "latestTrust": 710,
        "latestDealer": -1036
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
