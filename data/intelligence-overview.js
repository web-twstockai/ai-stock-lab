window.IntelligenceOverviewData = {
  "updatedAt": "2026/06/01 22:03",
  "status": "運作中",
  "cards": [
    {
      "label": "今日偵測情報",
      "value": 221,
      "unit": "筆",
      "icon": "file"
    },
    {
      "label": "高重要度訊號",
      "value": 83,
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
      "value": "通膨率",
      "unit": "倒數 19 小時",
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
          "31 筆"
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
          "40 個"
        ],
        [
          "下一事件",
          "通膨率"
        ],
        [
          "狀態",
          "倒數 19 小時"
        ]
      ],
      "rule": "追蹤 CPI、PCE、FOMC、GDP、ISM 等重大總經數據。"
    }
  ],
  "items": [
    {
      "id": "inst-6770-20260601",
      "type": "institutional",
      "title": "6770 力積電",
      "stockCode": "6770",
      "stockName": "力積電",
      "sector": "半導體",
      "group": "半導體",
      "institutionType": "投信",
      "direction": "連買",
      "days": 7,
      "consecutiveBuyDays": 7,
      "streaks": {
        "外資": 0,
        "投信": 7,
        "自營商": 0
      },
      "latestNetBuy": 199,
      "buyVolume": 2416,
      "buyAmount": 0,
      "syncCount": 1,
      "importance": "高",
      "timestamp": "2026/06/01 18:20",
      "tags": [
        "投信",
        "連買",
        "半導體",
        "IC製造",
        "晶圓代工"
      ],
      "summary": "投信連買，近 10 個交易日正買合計 2,416 張，估算金額約 0.00 億元。",
      "event": "投信連買 7 日，近 10 個交易日正買合計 2,416 張；最新日外資 -158,205 張、投信 199 張、自營商 -7,274 張。",
      "ai": "法人買盤集中在 半導體，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 451917.0,
      "yahooVerification": {
        "status": "matched",
        "source": "https://tw.stock.yahoo.com/quote/6770.TW/institutional-trading",
        "latestNetBuy": 199,
        "days": 7,
        "latestForeign": -158205,
        "latestTrust": 199,
        "latestDealer": -7274
      }
    },
    {
      "id": "inst-2408-20260601",
      "type": "institutional",
      "title": "2408 南亞科",
      "stockCode": "2408",
      "stockName": "南亞科",
      "sector": "半導體",
      "group": "半導體",
      "institutionType": "外資",
      "direction": "同步買超",
      "days": 5,
      "consecutiveBuyDays": 5,
      "streaks": {
        "外資": 5,
        "投信": 3,
        "自營商": 3
      },
      "latestNetBuy": 27016,
      "buyVolume": 121744,
      "buyAmount": 0,
      "syncCount": 3,
      "importance": "高",
      "timestamp": "2026/06/01 18:20",
      "tags": [
        "外資",
        "同步買超",
        "半導體",
        "Smart TV",
        "Windows11"
      ],
      "summary": "外資同步買超，近 10 個交易日正買合計 121,744 張，估算金額約 0.00 億元。",
      "event": "外資連買 5 日，近 10 個交易日正買合計 121,744 張；最新日外資 27,016 張、投信 2,178 張、自營商 520 張。",
      "ai": "法人買盤集中在 半導體，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 132743.061,
      "yahooVerification": {
        "status": "matched",
        "source": "https://tw.stock.yahoo.com/quote/2408.TW/institutional-trading",
        "latestNetBuy": 27016,
        "days": 5,
        "latestForeign": 27016,
        "latestTrust": 2178,
        "latestDealer": 520
      }
    },
    {
      "id": "inst-2887-20260601",
      "type": "institutional",
      "title": "2887 台新新光金",
      "stockCode": "2887",
      "stockName": "台新新光金",
      "sector": "金融保險",
      "group": "金融保險",
      "institutionType": "投信",
      "direction": "連買",
      "days": 8,
      "consecutiveBuyDays": 8,
      "streaks": {
        "外資": 1,
        "投信": 8,
        "自營商": 0
      },
      "latestNetBuy": 69049,
      "buyVolume": 309340,
      "buyAmount": 0,
      "syncCount": 2,
      "importance": "高",
      "timestamp": "2026/06/01 18:20",
      "tags": [
        "投信",
        "連買",
        "金融保險",
        "金融業",
        "銀行"
      ],
      "summary": "投信連買，近 10 個交易日正買合計 309,340 張，估算金額約 0.00 億元。",
      "event": "投信連買 8 日，近 10 個交易日正買合計 309,340 張；最新日外資 35,321 張、投信 69,049 張、自營商 -5,672 張。",
      "ai": "法人買盤集中在 金融保險，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 423675.755,
      "yahooVerification": {
        "status": "matched",
        "source": "https://tw.stock.yahoo.com/quote/2887.TW/institutional-trading",
        "latestNetBuy": 69049,
        "days": 8,
        "latestForeign": 35321,
        "latestTrust": 69049,
        "latestDealer": -5672
      }
    },
    {
      "id": "inst-2317-20260601",
      "type": "institutional",
      "title": "2317 鴻海",
      "stockCode": "2317",
      "stockName": "鴻海",
      "sector": "其他電子業",
      "group": "其他電子業",
      "institutionType": "投信",
      "direction": "連買",
      "days": 4,
      "consecutiveBuyDays": 4,
      "streaks": {
        "外資": 0,
        "投信": 4,
        "自營商": 0
      },
      "latestNetBuy": 1808,
      "buyVolume": 10707,
      "buyAmount": 31.43,
      "syncCount": 1,
      "importance": "高",
      "timestamp": "2026/06/01 18:20",
      "tags": [
        "投信",
        "連買",
        "其他電子業",
        "3D技術",
        "3D感測"
      ],
      "summary": "投信連買，近 10 個交易日正買合計 10,707 張，估算金額約 31.43 億元。",
      "event": "投信連買 4 日，近 10 個交易日正買合計 10,707 張；最新日外資 -6,575 張、投信 1,808 張、自營商 -377 張。",
      "ai": "法人買盤集中在 其他電子業，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 243385.671,
      "yahooVerification": {
        "status": "matched",
        "source": "https://tw.stock.yahoo.com/quote/2317.TW/institutional-trading",
        "latestNetBuy": 1808,
        "days": 4,
        "latestForeign": -6575,
        "latestTrust": 1808,
        "latestDealer": -377
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
        "偏多"
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
      "previous": "52.2",
      "forecast": "51.4",
      "actual": "51.6",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/06/01 16:00",
      "tags": [
        "歐元區",
        "製造業",
        "偏多"
      ],
      "summary": "製造業 PMI 將於 2026/06/01 16:00 公布，市場關注前值 52.2、預期 51.4。",
      "event": "歐元區 製造業 PMI，前值 52.2、預期 51.4、實際 51.6。",
      "ai": "目前 AI 判斷為偏多觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
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
        "偏多"
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
        "偏多"
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
        "偏多"
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
        "偏多"
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
      "previous": "52.2",
      "forecast": "51.4",
      "actual": "51.6",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/06/01 16:00",
      "tags": [
        "歐元區",
        "製造業",
        "偏多"
      ],
      "summary": "製造業 PMI 將於 2026/06/01 16:00 公布，市場關注前值 52.2、預期 51.4。",
      "event": "歐元區 製造業 PMI，前值 52.2、預期 51.4、實際 51.6。",
      "ai": "目前 AI 判斷為偏多觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
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
        "偏多"
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
        "偏空"
      ],
      "summary": "製造業 PMI 將於 2026/06/01 21:45 公布，市場關注前值 54.5、預期 55.3。",
      "event": "美國 製造業 PMI，前值 54.5、預期 55.3、實際 55.1。",
      "ai": "目前 AI 判斷為偏空觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響市場風險偏好與資金輪動。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar / Investing.com Economic Calendar / 鉅亨網全球經濟指標",
      "sourceUrl": "https://www.pmi.spglobal.com/public",
      "sourceList": [
        "TradingView Economic Calendar",
        "Investing.com Economic Calendar",
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
      "source": "TradingView Economic Calendar / Investing.com Economic Calendar / 鉅亨網全球經濟指標",
      "sourceUrl": "https://www.ismworld.org",
      "sourceList": [
        "TradingView Economic Calendar",
        "Investing.com Economic Calendar",
        "鉅亨網全球經濟指標"
      ]
    }
  ]
};
