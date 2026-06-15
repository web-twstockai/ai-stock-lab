window.IntelligenceOverviewData = {
  "updatedAt": "2026/06/15 18:30",
  "status": "運作中",
  "cards": [
    {
      "label": "今日偵測情報",
      "value": 247,
      "unit": "筆",
      "icon": "file"
    },
    {
      "label": "高重要度訊號",
      "value": 65,
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
      "value": "製造業 PMI",
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
          "19 筆"
        ],
        [
          "三大法人同步買",
          "23 筆"
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
          "14 個"
        ],
        [
          "下一事件",
          "製造業 PMI"
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
      "id": "inst-2344-20260615",
      "type": "institutional",
      "title": "2344 華邦電",
      "stockCode": "2344",
      "stockName": "華邦電",
      "sector": "半導體",
      "group": "半導體",
      "institutionType": "投信",
      "direction": "同步買超",
      "days": 5,
      "consecutiveBuyDays": 5,
      "streaks": {
        "外資": 4,
        "投信": 5,
        "自營商": 3
      },
      "latestNetBuy": 4412,
      "buyVolume": 29162,
      "buyAmount": 0,
      "syncCount": 3,
      "importance": "高",
      "timestamp": "2026/06/15 18:20",
      "tags": [
        "投信",
        "同步買超",
        "半導體",
        "ADAS供應鏈",
        "Windows11"
      ],
      "summary": "投信同步買超，近 10 個交易日正買合計 29,162 張，估算金額約 0.00 億元。",
      "event": "投信連買 5 日，近 10 個交易日正買合計 29,162 張；最新日外資 16,229 張、投信 4,412 張、自營商 1,633 張。",
      "ai": "法人買盤集中在 半導體，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 162273.043,
      "yahooVerification": {
        "status": "matched",
        "source": "https://tw.stock.yahoo.com/quote/2344.TW/institutional-trading",
        "latestNetBuy": 4412,
        "days": 5,
        "latestForeign": 16229,
        "latestTrust": 4412,
        "latestDealer": 1633
      }
    },
    {
      "id": "inst-2382-20260615",
      "type": "institutional",
      "title": "2382 廣達",
      "stockCode": "2382",
      "stockName": "廣達",
      "sector": "電腦及週邊設備",
      "group": "電腦及週邊設備",
      "institutionType": "投信",
      "direction": "連買",
      "days": 9,
      "consecutiveBuyDays": 9,
      "streaks": {
        "外資": 0,
        "投信": 9,
        "自營商": 3
      },
      "latestNetBuy": 405,
      "buyVolume": 178541,
      "buyAmount": 664.17,
      "syncCount": 2,
      "importance": "高",
      "timestamp": "2026/06/15 18:20",
      "tags": [
        "投信",
        "連買",
        "電腦及週邊設備",
        "5G",
        "APPLE概念"
      ],
      "summary": "投信連買，近 9 個交易日正買合計 178,541 張，估算金額約 664.17 億元。",
      "event": "投信連買 9 日，近 9 個交易日正買合計 178,541 張；最新日外資 -3,702 張、投信 405 張、自營商 844 張。",
      "ai": "法人買盤集中在 電腦及週邊設備，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 179756.032,
      "yahooVerification": {
        "status": "days-different",
        "source": "https://tw.stock.yahoo.com/quote/2382.TW/institutional-trading",
        "latestNetBuy": 405,
        "days": 18,
        "latestForeign": -3702,
        "latestTrust": 405,
        "latestDealer": 844
      }
    },
    {
      "id": "inst-2317-20260615",
      "type": "institutional",
      "title": "2317 鴻海",
      "stockCode": "2317",
      "stockName": "鴻海",
      "sector": "其他電子業",
      "group": "其他電子業",
      "institutionType": "自營商",
      "direction": "同步買超",
      "days": 3,
      "consecutiveBuyDays": 3,
      "streaks": {
        "外資": 2,
        "投信": 3,
        "自營商": 3
      },
      "latestNetBuy": 622,
      "buyVolume": 3010,
      "buyAmount": 7.84,
      "syncCount": 3,
      "importance": "高",
      "timestamp": "2026/06/15 18:20",
      "tags": [
        "自營商",
        "同步買超",
        "其他電子業",
        "3D技術",
        "3D感測"
      ],
      "summary": "自營商同步買超，近 10 個交易日正買合計 3,010 張，估算金額約 7.84 億元。",
      "event": "自營商連買 3 日，近 10 個交易日正買合計 3,010 張；最新日外資 8,634 張、投信 12 張、自營商 622 張。",
      "ai": "法人買盤集中在 其他電子業，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 74725.358,
      "yahooVerification": {
        "status": "matched",
        "source": "https://tw.stock.yahoo.com/quote/2317.TW/institutional-trading",
        "latestNetBuy": 622,
        "days": 3,
        "latestForeign": 8634,
        "latestTrust": 12,
        "latestDealer": 622
      }
    },
    {
      "id": "inst-2887-20260615",
      "type": "institutional",
      "title": "2887 台新新光金",
      "stockCode": "2887",
      "stockName": "台新新光金",
      "sector": "金融保險",
      "group": "金融保險",
      "institutionType": "投信",
      "direction": "同步買超",
      "days": 10,
      "consecutiveBuyDays": 10,
      "streaks": {
        "外資": 2,
        "投信": 10,
        "自營商": 1
      },
      "latestNetBuy": 32987,
      "buyVolume": 355155,
      "buyAmount": 0,
      "syncCount": 3,
      "importance": "高",
      "timestamp": "2026/06/15 18:20",
      "tags": [
        "投信",
        "同步買超",
        "金融保險",
        "金融業",
        "銀行"
      ],
      "summary": "投信同步買超，近 10 個交易日正買合計 355,155 張，估算金額約 0.00 億元。",
      "event": "投信連買 10 日，近 10 個交易日正買合計 355,155 張；最新日外資 6,891 張、投信 32,987 張、自營商 745 張。",
      "ai": "法人買盤集中在 金融保險，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 553034.045,
      "yahooVerification": {
        "status": "days-different",
        "source": "https://tw.stock.yahoo.com/quote/2887.TW/institutional-trading",
        "latestNetBuy": 32987,
        "days": 18,
        "latestForeign": 6891,
        "latestTrust": 32987,
        "latestDealer": 745
      }
    },
    {
      "id": "macro-s-p-global-manufacturing-pmi-final-may-20260601",
      "type": "macro",
      "title": "製造業 PMI",
      "eventName": "製造業 PMI",
      "originalEventName": "S&P Global Manufacturing PMI Final (May)",
      "sourcePublishTime": "2026/06/01 16:30 Asia/Taipei",
      "country": "英國",
      "publishTime": "2026/06/01 16:30",
      "previous": "53.7",
      "forecast": "53.7",
      "actual": "53.9",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/06/01 16:30",
      "tags": [
        "英國",
        "製造業",
        "中性"
      ],
      "summary": "製造業 PMI 將於 2026/06/01 16:30 公布，市場關注前值 53.7、預期 53.7。",
      "event": "英國 製造業 PMI，前值 53.7、預期 53.7、實際 53.9。",
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
      "id": "macro-s-p-global-manufacturing-pmi-final-may-20260601",
      "type": "macro",
      "title": "製造業 PMI",
      "eventName": "製造業 PMI",
      "originalEventName": "S&P Global Manufacturing PMI Final (May)",
      "sourcePublishTime": "2026/06/01 16:00 Asia/Taipei",
      "country": "歐元區",
      "publishTime": "2026/06/01 16:00",
      "previous": "—",
      "forecast": "51.4",
      "actual": null,
      "status": "等待公布",
      "statusLevel": "upcoming",
      "direction": "中性",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/06/01 16:00",
      "tags": [
        "歐元區",
        "製造業",
        "中性"
      ],
      "summary": "製造業 PMI 將於 2026/06/01 16:00 公布，市場關注前值 —、預期 51.4。",
      "event": "歐元區 製造業 PMI，前值 —、預期 51.4、實際 尚未公布。",
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
      "id": "macro-s-p-global-manufacturing-pmi-final-may-20260601",
      "type": "macro",
      "title": "製造業 PMI",
      "eventName": "製造業 PMI",
      "originalEventName": "S&P Global Manufacturing PMI Final (May)",
      "sourcePublishTime": "2026/06/01 15:55 Asia/Taipei",
      "country": "德國",
      "publishTime": "2026/06/01 15:55",
      "previous": "51.4",
      "forecast": "49.9",
      "actual": "50.1",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/06/01 15:55",
      "tags": [
        "德國",
        "製造業",
        "中性"
      ],
      "summary": "製造業 PMI 將於 2026/06/01 15:55 公布，市場關注前值 51.4、預期 49.9。",
      "event": "德國 製造業 PMI，前值 51.4、預期 49.9、實際 50.1。",
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
      "id": "macro-s-p-global-manufacturing-pmi-final-may-20260601",
      "type": "macro",
      "title": "製造業 PMI",
      "eventName": "製造業 PMI",
      "originalEventName": "S&P Global Manufacturing PMI Final (May)",
      "sourcePublishTime": "2026/06/01 15:50 Asia/Taipei",
      "country": "法國",
      "publishTime": "2026/06/01 15:50",
      "previous": "52.8",
      "forecast": "48.9",
      "actual": "49.7",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/06/01 15:50",
      "tags": [
        "法國",
        "製造業",
        "中性"
      ],
      "summary": "製造業 PMI 將於 2026/06/01 15:50 公布，市場關注前值 52.8、預期 48.9。",
      "event": "法國 製造業 PMI，前值 52.8、預期 48.9、實際 49.7。",
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
  ],
  "macroEvents": [
    {
      "id": "macro-s-p-global-manufacturing-pmi-final-may-20260601",
      "type": "macro",
      "title": "製造業 PMI",
      "eventName": "製造業 PMI",
      "originalEventName": "S&P Global Manufacturing PMI Final (May)",
      "sourcePublishTime": "2026/06/01 15:50 Asia/Taipei",
      "country": "法國",
      "publishTime": "2026/06/01 15:50",
      "previous": "52.8",
      "forecast": "48.9",
      "actual": "49.7",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/06/01 15:50",
      "tags": [
        "法國",
        "製造業",
        "中性"
      ],
      "summary": "製造業 PMI 將於 2026/06/01 15:50 公布，市場關注前值 52.8、預期 48.9。",
      "event": "法國 製造業 PMI，前值 52.8、預期 48.9、實際 49.7。",
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
      "id": "macro-s-p-global-manufacturing-pmi-final-may-20260601",
      "type": "macro",
      "title": "製造業 PMI",
      "eventName": "製造業 PMI",
      "originalEventName": "S&P Global Manufacturing PMI Final (May)",
      "sourcePublishTime": "2026/06/01 15:55 Asia/Taipei",
      "country": "德國",
      "publishTime": "2026/06/01 15:55",
      "previous": "51.4",
      "forecast": "49.9",
      "actual": "50.1",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/06/01 15:55",
      "tags": [
        "德國",
        "製造業",
        "中性"
      ],
      "summary": "製造業 PMI 將於 2026/06/01 15:55 公布，市場關注前值 51.4、預期 49.9。",
      "event": "德國 製造業 PMI，前值 51.4、預期 49.9、實際 50.1。",
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
      "id": "macro-s-p-global-manufacturing-pmi-final-may-20260601",
      "type": "macro",
      "title": "製造業 PMI",
      "eventName": "製造業 PMI",
      "originalEventName": "S&P Global Manufacturing PMI Final (May)",
      "sourcePublishTime": "2026/06/01 16:00 Asia/Taipei",
      "country": "歐元區",
      "publishTime": "2026/06/01 16:00",
      "previous": "—",
      "forecast": "51.4",
      "actual": null,
      "status": "等待公布",
      "statusLevel": "upcoming",
      "direction": "中性",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/06/01 16:00",
      "tags": [
        "歐元區",
        "製造業",
        "中性"
      ],
      "summary": "製造業 PMI 將於 2026/06/01 16:00 公布，市場關注前值 —、預期 51.4。",
      "event": "歐元區 製造業 PMI，前值 —、預期 51.4、實際 尚未公布。",
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
      "id": "macro-s-p-global-manufacturing-pmi-final-may-20260601",
      "type": "macro",
      "title": "製造業 PMI",
      "eventName": "製造業 PMI",
      "originalEventName": "S&P Global Manufacturing PMI Final (May)",
      "sourcePublishTime": "2026/06/01 16:30 Asia/Taipei",
      "country": "英國",
      "publishTime": "2026/06/01 16:30",
      "previous": "53.7",
      "forecast": "53.7",
      "actual": "53.9",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/06/01 16:30",
      "tags": [
        "英國",
        "製造業",
        "中性"
      ],
      "summary": "製造業 PMI 將於 2026/06/01 16:30 公布，市場關注前值 53.7、預期 53.7。",
      "event": "英國 製造業 PMI，前值 53.7、預期 53.7、實際 53.9。",
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
      "id": "macro-unemployment-rate-apr-20260601",
      "type": "macro",
      "title": "失業率",
      "eventName": "失業率",
      "originalEventName": "Unemployment Rate (Apr)",
      "sourcePublishTime": "2026/06/01 17:00 Asia/Taipei",
      "country": "歐元區",
      "publishTime": "2026/06/01 17:00",
      "previous": "6.3",
      "forecast": "6.2",
      "actual": "6.3",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響全球資金成本、美元走勢與風險資產評價。",
      "importance": "中高",
      "timestamp": "2026/06/01 17:00",
      "tags": [
        "歐元區",
        "失業率",
        "偏多"
      ],
      "summary": "失業率 將於 2026/06/01 17:00 公布，市場關注前值 6.3、預期 6.2。",
      "event": "歐元區 失業率，前值 6.3、預期 6.2、實際 6.3。",
      "ai": "目前 AI 判斷為偏多觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響全球資金成本、美元走勢與風險資產評價。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "https://ec.europa.eu/eurostat/",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    },
    {
      "id": "macro-s-p-global-manufacturing-pmi-final-may-20260601",
      "type": "macro",
      "title": "製造業 PMI",
      "eventName": "製造業 PMI",
      "originalEventName": "S&P Global Manufacturing PMI Final (May)",
      "sourcePublishTime": "2026/06/01 21:45 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/06/01 21:45",
      "previous": "54.5",
      "forecast": "55.3",
      "actual": "55.1",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏空",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/06/01 21:45",
      "tags": [
        "美國",
        "製造業",
        "中性"
      ],
      "summary": "製造業 PMI 將於 2026/06/01 21:45 公布，市場關注前值 54.5、預期 55.3。",
      "event": "美國 製造業 PMI，前值 54.5、預期 55.3、實際 55.1。",
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
      "id": "macro-ism-manufacturing-prices-may-20260601",
      "type": "macro",
      "title": "ISM 製造業物價",
      "eventName": "ISM 製造業物價",
      "originalEventName": "ISM Manufacturing Prices (May)",
      "sourcePublishTime": "2026/06/01 22:00 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/06/01 22:00",
      "previous": "84.6",
      "forecast": "85.5",
      "actual": "82.1",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "importance": "中高",
      "timestamp": "2026/06/01 22:00",
      "tags": [
        "美國",
        "ISM",
        "偏多"
      ],
      "summary": "ISM 製造業物價 將於 2026/06/01 22:00 公布，市場關注前值 84.6、預期 85.5。",
      "event": "美國 ISM 製造業物價，前值 84.6、預期 85.5、實際 82.1。",
      "ai": "目前 AI 判斷為偏多觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響美債殖利率、降息預期、科技股與金融股評價。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar / 鉅亨網全球經濟指標",
      "sourceUrl": "https://www.ismworld.org",
      "sourceList": [
        "TradingView Economic Calendar",
        "鉅亨網全球經濟指標"
      ]
    },
    {
      "id": "macro-ism-manufacturing-pmi-may-20260601",
      "type": "macro",
      "title": "ISM 製造業指數",
      "eventName": "ISM 製造業指數",
      "originalEventName": "ISM Manufacturing PMI (May)",
      "sourcePublishTime": "2026/06/01 22:00 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/06/01 22:00",
      "previous": "52.7",
      "forecast": "53",
      "actual": "54",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響景氣循環、原物料、工業與科技需求預期。",
      "importance": "中高",
      "timestamp": "2026/06/01 22:00",
      "tags": [
        "美國",
        "ISM",
        "偏多"
      ],
      "summary": "ISM 製造業指數 將於 2026/06/01 22:00 公布，市場關注前值 52.7、預期 53。",
      "event": "美國 ISM 製造業指數，前值 52.7、預期 53、實際 54。",
      "ai": "目前 AI 判斷為偏多觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響景氣循環、原物料、工業與科技需求預期。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar / 鉅亨網全球經濟指標",
      "sourceUrl": "https://www.ismworld.org",
      "sourceList": [
        "TradingView Economic Calendar",
        "鉅亨網全球經濟指標"
      ]
    }
  ]
};
