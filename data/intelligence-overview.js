window.IntelligenceOverviewData = {
  "updatedAt": "2026/11/15 07:47",
  "status": "運作中",
  "cards": [
    {
      "label": "今日偵測情報",
      "value": 291,
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
          "26 筆"
        ],
        [
          "三大法人同步買",
          "25 筆"
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
          "19 個"
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
      "id": "inst-1815-20261113",
      "type": "institutional",
      "title": "1815 富喬",
      "stockCode": "1815",
      "stockName": "富喬",
      "sector": "電子零組件",
      "group": "電子零組件",
      "institutionType": "投信",
      "direction": "連買",
      "days": 10,
      "consecutiveBuyDays": 10,
      "streaks": {
        "外資": 1,
        "投信": 10,
        "自營商": 0
      },
      "latestNetBuy": 2,
      "buyVolume": 11353,
      "buyAmount": 0,
      "syncCount": 2,
      "importance": "高",
      "timestamp": "2026/11/13 18:20",
      "tags": [
        "投信",
        "連買",
        "電子零組件",
        "印刷電路板相關",
        "玻纖布"
      ],
      "summary": "投信連買，近 10 個交易日正買合計 11,353 張，估算金額約 0.00 億元。",
      "event": "投信連買 10 日，近 10 個交易日正買合計 11,353 張；最新日外資 9,171 張、投信 2 張、自營商 -16 張。",
      "ai": "法人買盤集中在 電子零組件，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 54912.158,
      "yahooVerification": {
        "status": "days-different",
        "source": "https://tw.stock.yahoo.com/quote/1815.TW/institutional-trading",
        "latestNetBuy": 2,
        "days": 14,
        "latestForeign": 9171,
        "latestTrust": 2,
        "latestDealer": -16
      }
    },
    {
      "id": "inst-2610-20261113",
      "type": "institutional",
      "title": "2610 華航",
      "stockCode": "2610",
      "stockName": "華航",
      "sector": "航運業",
      "group": "航運業",
      "institutionType": "外資",
      "direction": "同步買超",
      "days": 10,
      "consecutiveBuyDays": 10,
      "streaks": {
        "外資": 10,
        "投信": 3,
        "自營商": 1
      },
      "latestNetBuy": 11579,
      "buyVolume": 234139,
      "buyAmount": 0,
      "syncCount": 3,
      "importance": "高",
      "timestamp": "2026/11/13 18:20",
      "tags": [
        "外資",
        "同步買超",
        "航運業",
        "三通",
        "官股企業"
      ],
      "summary": "外資同步買超，近 10 個交易日正買合計 234,139 張，估算金額約 0.00 億元。",
      "event": "外資連買 10 日，近 10 個交易日正買合計 234,139 張；最新日外資 11,579 張、投信 896 張、自營商 881 張。",
      "ai": "法人買盤集中在 航運業，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 239042.822,
      "yahooVerification": {
        "status": "days-different",
        "source": "https://tw.stock.yahoo.com/quote/2610.TW/institutional-trading",
        "latestNetBuy": 11579,
        "days": 12,
        "latestForeign": 11579,
        "latestTrust": 896,
        "latestDealer": 881
      }
    },
    {
      "id": "inst-1303-20261113",
      "type": "institutional",
      "title": "1303 南亞",
      "stockCode": "1303",
      "stockName": "南亞",
      "sector": "塑膠工業",
      "group": "塑膠工業",
      "institutionType": "投信",
      "direction": "連買",
      "days": 10,
      "consecutiveBuyDays": 10,
      "streaks": {
        "外資": 0,
        "投信": 10,
        "自營商": 1
      },
      "latestNetBuy": 9431,
      "buyVolume": 58684,
      "buyAmount": 178.4,
      "syncCount": 2,
      "importance": "高",
      "timestamp": "2026/11/13 18:20",
      "tags": [
        "投信",
        "連買",
        "塑膠工業",
        "APPLE概念",
        "越南設廠"
      ],
      "summary": "投信連買，近 10 個交易日正買合計 58,684 張，估算金額約 178.40 億元。",
      "event": "投信連買 10 日，近 10 個交易日正買合計 58,684 張；最新日外資 -7,711 張、投信 9,431 張、自營商 1,099 張。",
      "ai": "法人買盤集中在 塑膠工業，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 75801.766,
      "yahooVerification": {
        "status": "days-different",
        "source": "https://tw.stock.yahoo.com/quote/1303.TW/institutional-trading",
        "latestNetBuy": 9431,
        "days": 14,
        "latestForeign": -7711,
        "latestTrust": 9431,
        "latestDealer": 1099
      }
    },
    {
      "id": "inst-2891-20261113",
      "type": "institutional",
      "title": "2891 中信金",
      "stockCode": "2891",
      "stockName": "中信金",
      "sector": "金融保險",
      "group": "金融保險",
      "institutionType": "投信",
      "direction": "同步買超",
      "days": 10,
      "consecutiveBuyDays": 10,
      "streaks": {
        "外資": 1,
        "投信": 10,
        "自營商": 10
      },
      "latestNetBuy": 15568,
      "buyVolume": 106536,
      "buyAmount": 0,
      "syncCount": 3,
      "importance": "高",
      "timestamp": "2026/11/13 18:20",
      "tags": [
        "投信",
        "同步買超",
        "金融保險",
        "金融業",
        "銀行"
      ],
      "summary": "投信同步買超，近 10 個交易日正買合計 106,536 張，估算金額約 0.00 億元。",
      "event": "投信連買 10 日，近 10 個交易日正買合計 106,536 張；最新日外資 6,713 張、投信 15,568 張、自營商 644 張。",
      "ai": "法人買盤集中在 金融保險，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 148559.633,
      "yahooVerification": {
        "status": "days-different",
        "source": "https://tw.stock.yahoo.com/quote/2891.TW/institutional-trading",
        "latestNetBuy": 15568,
        "days": 11,
        "latestForeign": 6713,
        "latestTrust": 15568,
        "latestDealer": 644
      }
    },
    {
      "id": "macro-gdpnow-20261102",
      "type": "macro",
      "title": "GDP 經濟成長率",
      "eventName": "GDP 經濟成長率",
      "originalEventName": "亞特蘭大聯儲GDPNow",
      "sourcePublishTime": "2026/11/02 08:00 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/11/02 08:00",
      "previous": "—",
      "forecast": "—",
      "actual": null,
      "status": "等待公布",
      "statusLevel": "upcoming",
      "direction": "中性",
      "impact": "影響景氣循環、原物料、工業與科技需求預期。",
      "importance": "高",
      "timestamp": "2026/11/02 08:00",
      "tags": [
        "美國",
        "GDP",
        "中性"
      ],
      "summary": "GDP 經濟成長率 將於 2026/11/02 08:00 公布，市場關注前值 —、預期 —。",
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
      "id": "macro-s-p-global-manufacturing-pmi-final-oct-2026-20261102",
      "type": "macro",
      "title": "製造業 PMI",
      "eventName": "製造業 PMI",
      "originalEventName": "S&P Global Manufacturing PMI Final (Oct. 2026)",
      "sourcePublishTime": "2026/11/02 17:00 Asia/Taipei",
      "country": "歐元區",
      "publishTime": "2026/11/02 17:00",
      "previous": "—",
      "forecast": "52.4",
      "actual": null,
      "status": "等待公布",
      "statusLevel": "upcoming",
      "direction": "中性",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/11/02 17:00",
      "tags": [
        "歐元區",
        "製造業",
        "中性"
      ],
      "summary": "製造業 PMI 將於 2026/11/02 17:00 公布，市場關注前值 —、預期 52.4。",
      "event": "歐元區 製造業 PMI，前值 —、預期 52.4、實際 尚未公布。",
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
      "id": "macro-s-p-global-manufacturing-pmi-final-oct-2026-20261102",
      "type": "macro",
      "title": "製造業 PMI",
      "eventName": "製造業 PMI",
      "originalEventName": "S&P Global Manufacturing PMI Final (Oct. 2026)",
      "sourcePublishTime": "2026/11/02 16:55 Asia/Taipei",
      "country": "德國",
      "publishTime": "2026/11/02 16:55",
      "previous": "53.9",
      "forecast": "54.2",
      "actual": "54.2",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/11/02 16:55",
      "tags": [
        "德國",
        "製造業",
        "中性"
      ],
      "summary": "製造業 PMI 將於 2026/11/02 16:55 公布，市場關注前值 53.9、預期 54.2。",
      "event": "德國 製造業 PMI，前值 53.9、預期 54.2、實際 54.2。",
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
      "id": "macro-s-p-global-manufacturing-pmi-final-oct-2026-20261102",
      "type": "macro",
      "title": "製造業 PMI",
      "eventName": "製造業 PMI",
      "originalEventName": "S&P Global Manufacturing PMI Final (Oct. 2026)",
      "sourcePublishTime": "2026/11/02 16:50 Asia/Taipei",
      "country": "法國",
      "publishTime": "2026/11/02 16:50",
      "previous": "50.6",
      "forecast": "49.3",
      "actual": "49.5",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/11/02 16:50",
      "tags": [
        "法國",
        "製造業",
        "中性"
      ],
      "summary": "製造業 PMI 將於 2026/11/02 16:50 公布，市場關注前值 50.6、預期 49.3。",
      "event": "法國 製造業 PMI，前值 50.6、預期 49.3、實際 49.5。",
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
      "id": "macro-gdpnow-20261102",
      "type": "macro",
      "title": "GDP 經濟成長率",
      "eventName": "GDP 經濟成長率",
      "originalEventName": "亞特蘭大聯儲GDPNow",
      "sourcePublishTime": "2026/11/02 08:00 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/11/02 08:00",
      "previous": "—",
      "forecast": "—",
      "actual": null,
      "status": "等待公布",
      "statusLevel": "upcoming",
      "direction": "中性",
      "impact": "影響景氣循環、原物料、工業與科技需求預期。",
      "importance": "高",
      "timestamp": "2026/11/02 08:00",
      "tags": [
        "美國",
        "GDP",
        "中性"
      ],
      "summary": "GDP 經濟成長率 將於 2026/11/02 08:00 公布，市場關注前值 —、預期 —。",
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
      "id": "macro-s-p-global-manufacturing-pmi-final-oct-2026-20261102",
      "type": "macro",
      "title": "製造業 PMI",
      "eventName": "製造業 PMI",
      "originalEventName": "S&P Global Manufacturing PMI Final (Oct. 2026)",
      "sourcePublishTime": "2026/11/02 16:50 Asia/Taipei",
      "country": "法國",
      "publishTime": "2026/11/02 16:50",
      "previous": "50.6",
      "forecast": "49.3",
      "actual": "49.5",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/11/02 16:50",
      "tags": [
        "法國",
        "製造業",
        "中性"
      ],
      "summary": "製造業 PMI 將於 2026/11/02 16:50 公布，市場關注前值 50.6、預期 49.3。",
      "event": "法國 製造業 PMI，前值 50.6、預期 49.3、實際 49.5。",
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
      "id": "macro-s-p-global-manufacturing-pmi-final-oct-2026-20261102",
      "type": "macro",
      "title": "製造業 PMI",
      "eventName": "製造業 PMI",
      "originalEventName": "S&P Global Manufacturing PMI Final (Oct. 2026)",
      "sourcePublishTime": "2026/11/02 16:55 Asia/Taipei",
      "country": "德國",
      "publishTime": "2026/11/02 16:55",
      "previous": "53.9",
      "forecast": "54.2",
      "actual": "54.2",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/11/02 16:55",
      "tags": [
        "德國",
        "製造業",
        "中性"
      ],
      "summary": "製造業 PMI 將於 2026/11/02 16:55 公布，市場關注前值 53.9、預期 54.2。",
      "event": "德國 製造業 PMI，前值 53.9、預期 54.2、實際 54.2。",
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
      "id": "macro-s-p-global-manufacturing-pmi-final-oct-2026-20261102",
      "type": "macro",
      "title": "製造業 PMI",
      "eventName": "製造業 PMI",
      "originalEventName": "S&P Global Manufacturing PMI Final (Oct. 2026)",
      "sourcePublishTime": "2026/11/02 17:00 Asia/Taipei",
      "country": "歐元區",
      "publishTime": "2026/11/02 17:00",
      "previous": "—",
      "forecast": "52.4",
      "actual": null,
      "status": "等待公布",
      "statusLevel": "upcoming",
      "direction": "中性",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/11/02 17:00",
      "tags": [
        "歐元區",
        "製造業",
        "中性"
      ],
      "summary": "製造業 PMI 將於 2026/11/02 17:00 公布，市場關注前值 —、預期 52.4。",
      "event": "歐元區 製造業 PMI，前值 —、預期 52.4、實際 尚未公布。",
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
      "id": "macro-s-p-global-manufacturing-pmi-final-oct-2026-20261102",
      "type": "macro",
      "title": "製造業 PMI",
      "eventName": "製造業 PMI",
      "originalEventName": "S&P Global Manufacturing PMI Final (Oct. 2026)",
      "sourcePublishTime": "2026/11/02 17:30 Asia/Taipei",
      "country": "英國",
      "publishTime": "2026/11/02 17:30",
      "previous": "51.9",
      "forecast": "52.8",
      "actual": "52.8",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/11/02 17:30",
      "tags": [
        "英國",
        "製造業",
        "中性"
      ],
      "summary": "製造業 PMI 將於 2026/11/02 17:30 公布，市場關注前值 51.9、預期 52.8。",
      "event": "英國 製造業 PMI，前值 51.9、預期 52.8、實際 52.8。",
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
      "id": "macro-s-p-global-manufacturing-pmi-final-oct-2026-20261102",
      "type": "macro",
      "title": "製造業 PMI",
      "eventName": "製造業 PMI",
      "originalEventName": "S&P Global Manufacturing PMI Final (Oct. 2026)",
      "sourcePublishTime": "2026/11/02 22:45 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/11/02 22:45",
      "previous": "56.0",
      "forecast": "56.0",
      "actual": "54.9",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏空",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/11/02 22:45",
      "tags": [
        "美國",
        "製造業",
        "中性"
      ],
      "summary": "製造業 PMI 將於 2026/11/02 22:45 公布，市場關注前值 56.0、預期 56.0。",
      "event": "美國 製造業 PMI，前值 56.0、預期 56.0、實際 54.9。",
      "ai": "目前 AI 判斷為偏空觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響市場風險偏好與資金輪動。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar / Investing.com Economic Calendar",
      "sourceUrl": "https://tw.tradingview.com/economic-calendar/",
      "sourceList": [
        "TradingView Economic Calendar",
        "Investing.com Economic Calendar"
      ]
    },
    {
      "id": "macro-ism-manufacturing-employment-oct-2026-20261102",
      "type": "macro",
      "title": "ISM 製造業就業",
      "eventName": "ISM 製造業就業",
      "originalEventName": "ISM Manufacturing Employment (Oct. 2026)",
      "sourcePublishTime": "2026/11/02 23:00 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/11/02 23:00",
      "previous": "52.7",
      "forecast": "52",
      "actual": "52.4",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響景氣循環、原物料、工業與科技需求預期。",
      "importance": "中高",
      "timestamp": "2026/11/02 23:00",
      "tags": [
        "美國",
        "ISM",
        "偏多"
      ],
      "summary": "ISM 製造業就業 將於 2026/11/02 23:00 公布，市場關注前值 52.7、預期 52。",
      "event": "美國 ISM 製造業就業，前值 52.7、預期 52、實際 52.4。",
      "ai": "目前 AI 判斷為偏多觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響景氣循環、原物料、工業與科技需求預期。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar / 鉅亨網全球經濟指標",
      "sourceUrl": "https://www.ismworld.org",
      "sourceList": [
        "TradingView Economic Calendar",
        "鉅亨網全球經濟指標"
      ]
    },
    {
      "id": "macro-ism-manufacturing-new-orders-oct-2026-20261102",
      "type": "macro",
      "title": "ISM 製造業新訂單",
      "eventName": "ISM 製造業新訂單",
      "originalEventName": "ISM Manufacturing New Orders (Oct. 2026)",
      "sourcePublishTime": "2026/11/02 23:00 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/11/02 23:00",
      "previous": "55.3",
      "forecast": "55.4",
      "actual": "55.5",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響景氣循環、原物料、工業與科技需求預期。",
      "importance": "中高",
      "timestamp": "2026/11/02 23:00",
      "tags": [
        "美國",
        "ISM",
        "中性"
      ],
      "summary": "ISM 製造業新訂單 將於 2026/11/02 23:00 公布，市場關注前值 55.3、預期 —。",
      "event": "美國 ISM 製造業新訂單，前值 55.3、預期 —、實際 55.5。",
      "ai": "目前 AI 判斷為中性觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
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
