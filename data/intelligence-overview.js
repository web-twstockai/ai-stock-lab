window.IntelligenceOverviewData = {
  "updatedAt": "2026/09/03 07:46",
  "status": "運作中",
  "cards": [
    {
      "label": "今日偵測情報",
      "value": 278,
      "unit": "筆",
      "icon": "file"
    },
    {
      "label": "高重要度訊號",
      "value": 49,
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
          "33 筆"
        ],
        [
          "三大法人同步買",
          "6 筆"
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
      "id": "inst-2886-20260902",
      "type": "institutional",
      "title": "2886 兆豐金",
      "stockCode": "2886",
      "stockName": "兆豐金",
      "sector": "金融保險",
      "group": "金融保險",
      "institutionType": "外資",
      "direction": "連買",
      "days": 10,
      "consecutiveBuyDays": 10,
      "streaks": {
        "外資": 10,
        "投信": 1,
        "自營商": 0
      },
      "latestNetBuy": 17737,
      "buyVolume": 159791,
      "buyAmount": 0,
      "syncCount": 2,
      "importance": "高",
      "timestamp": "2026/09/02 18:20",
      "tags": [
        "外資",
        "連買",
        "金融保險",
        "官股企業",
        "金融業"
      ],
      "summary": "外資連買，近 10 個交易日正買合計 159,791 張，估算金額約 0.00 億元。",
      "event": "外資連買 10 日，近 10 個交易日正買合計 159,791 張；最新日外資 17,737 張、投信 3,530 張、自營商 -876 張。",
      "ai": "法人買盤集中在 金融保險，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 164106.847,
      "yahooVerification": {
        "status": "days-different",
        "source": "https://tw.stock.yahoo.com/quote/2886.TW/institutional-trading",
        "latestNetBuy": 17737,
        "days": 15,
        "latestForeign": 17737,
        "latestTrust": 3530,
        "latestDealer": -876
      }
    },
    {
      "id": "inst-2382-20260902",
      "type": "institutional",
      "title": "2382 廣達",
      "stockCode": "2382",
      "stockName": "廣達",
      "sector": "電腦及週邊設備",
      "group": "電腦及週邊設備",
      "institutionType": "投信",
      "direction": "連買",
      "days": 4,
      "consecutiveBuyDays": 4,
      "streaks": {
        "外資": 0,
        "投信": 4,
        "自營商": 0
      },
      "latestNetBuy": 484,
      "buyVolume": 6005,
      "buyAmount": 20.54,
      "syncCount": 1,
      "importance": "高",
      "timestamp": "2026/09/02 18:20",
      "tags": [
        "投信",
        "連買",
        "電腦及週邊設備",
        "5G",
        "APPLE概念"
      ],
      "summary": "投信連買，近 10 個交易日正買合計 6,005 張，估算金額約 20.54 億元。",
      "event": "投信連買 4 日，近 10 個交易日正買合計 6,005 張；最新日外資 -287 張、投信 484 張、自營商 -80 張。",
      "ai": "法人買盤集中在 電腦及週邊設備，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 20319.889,
      "yahooVerification": {
        "status": "matched",
        "source": "https://tw.stock.yahoo.com/quote/2382.TW/institutional-trading",
        "latestNetBuy": 484,
        "days": 4,
        "latestForeign": -287,
        "latestTrust": 484,
        "latestDealer": -80
      }
    },
    {
      "id": "inst-3231-20260902",
      "type": "institutional",
      "title": "3231 緯創",
      "stockCode": "3231",
      "stockName": "緯創",
      "sector": "電腦及週邊設備",
      "group": "電腦及週邊設備",
      "institutionType": "投信",
      "direction": "同步買超",
      "days": 4,
      "consecutiveBuyDays": 4,
      "streaks": {
        "外資": 2,
        "投信": 4,
        "自營商": 3
      },
      "latestNetBuy": 6583,
      "buyVolume": 10208,
      "buyAmount": 0,
      "syncCount": 3,
      "importance": "高",
      "timestamp": "2026/09/02 18:20",
      "tags": [
        "投信",
        "同步買超",
        "電腦及週邊設備",
        "3D技術",
        "3D感測"
      ],
      "summary": "投信同步買超，近 10 個交易日正買合計 10,208 張，估算金額約 0.00 億元。",
      "event": "投信連買 4 日，近 10 個交易日正買合計 10,208 張；最新日外資 7,066 張、投信 6,583 張、自營商 189 張。",
      "ai": "法人買盤集中在 電腦及週邊設備，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 23017.045,
      "yahooVerification": {
        "status": "matched",
        "source": "https://tw.stock.yahoo.com/quote/3231.TW/institutional-trading",
        "latestNetBuy": 6583,
        "days": 4,
        "latestForeign": 7066,
        "latestTrust": 6583,
        "latestDealer": 189
      }
    },
    {
      "id": "inst-1303-20260902",
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
        "自營商": 0
      },
      "latestNetBuy": 3303,
      "buyVolume": 32426,
      "buyAmount": 76.04,
      "syncCount": 1,
      "importance": "高",
      "timestamp": "2026/09/02 18:20",
      "tags": [
        "投信",
        "連買",
        "塑膠工業",
        "APPLE概念",
        "越南設廠"
      ],
      "summary": "投信連買，近 10 個交易日正買合計 32,426 張，估算金額約 76.04 億元。",
      "event": "投信連買 10 日，近 10 個交易日正買合計 32,426 張；最新日外資 -722 張、投信 3,303 張、自營商 -1,126 張。",
      "ai": "法人買盤集中在 塑膠工業，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 77813.911,
      "yahooVerification": {
        "status": "matched",
        "source": "https://tw.stock.yahoo.com/quote/1303.TW/institutional-trading",
        "latestNetBuy": 3303,
        "days": 10,
        "latestForeign": -722,
        "latestTrust": 3303,
        "latestDealer": -1126
      }
    },
    {
      "id": "macro-s-p-global-services-pmi-flash-aug-20260821",
      "type": "macro",
      "title": "服務業 PMI",
      "eventName": "服務業 PMI",
      "originalEventName": "S&P Global Services PMI Flash (Aug)",
      "sourcePublishTime": "2026/08/21 15:15 Asia/Taipei",
      "country": "法國",
      "publishTime": "2026/08/21 15:15",
      "previous": "49.6",
      "forecast": "49.8",
      "actual": "48.4",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏空",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/08/21 15:15",
      "tags": [
        "法國",
        "服務業",
        "中性"
      ],
      "summary": "服務業 PMI 將於 2026/08/21 15:15 公布，市場關注前值 49.6、預期 49.5。",
      "event": "法國 服務業 PMI，前值 49.6、預期 49.5、實際 48.4。",
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
      "id": "macro-s-p-global-composite-pmi-flash-aug-20260821",
      "type": "macro",
      "title": "綜合 PMI",
      "eventName": "綜合 PMI",
      "originalEventName": "S&P Global Composite PMI Flash (Aug)",
      "sourcePublishTime": "2026/08/21 15:15 Asia/Taipei",
      "country": "法國",
      "publishTime": "2026/08/21 15:15",
      "previous": "49.4",
      "forecast": "49.5",
      "actual": "48.8",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏空",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/08/21 15:15",
      "tags": [
        "法國",
        "綜合",
        "中性"
      ],
      "summary": "綜合 PMI 將於 2026/08/21 15:15 公布，市場關注前值 49.4、預期 49.9。",
      "event": "法國 綜合 PMI，前值 49.4、預期 49.9、實際 48.8。",
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
      "id": "macro-continuing-jobless-claims-aug-08-20260820",
      "type": "macro",
      "title": "初領失業救濟金人數",
      "eventName": "初領失業救濟金人數",
      "originalEventName": "Continuing Jobless Claims (Aug/08)",
      "sourcePublishTime": "2026/08/20 20:30 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/08/20 20:30",
      "previous": "1781",
      "forecast": "1790",
      "actual": "1799",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響就業強弱、薪資通膨與聯準會政策預期。",
      "importance": "中高",
      "timestamp": "2026/08/20 20:30",
      "tags": [
        "美國",
        "初領失業救濟金人數",
        "偏多"
      ],
      "summary": "初領失業救濟金人數 將於 2026/08/20 20:30 公布，市場關注前值 1781、預期 1790。",
      "event": "美國 初領失業救濟金人數，前值 1781、預期 1790、實際 1799。",
      "ai": "目前 AI 判斷為偏多觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響就業強弱、薪資通膨與聯準會政策預期。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "http://www.dol.gov",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    },
    {
      "id": "macro-ppi-yoy-jul-20260820",
      "type": "macro",
      "title": "生產者物價指數 PPI",
      "eventName": "生產者物價指數 PPI",
      "originalEventName": "PPI YoY (Jul)",
      "sourcePublishTime": "2026/08/20 14:00 Asia/Taipei",
      "country": "德國",
      "publishTime": "2026/08/20 14:00",
      "previous": "1.8",
      "forecast": "2.7",
      "actual": "3",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/08/20 14:00",
      "tags": [
        "德國",
        "生產者物價指數",
        "偏多"
      ],
      "summary": "生產者物價指數 PPI 將於 2026/08/20 14:00 公布，市場關注前值 1.8、預期 2.7。",
      "event": "德國 生產者物價指數 PPI，前值 1.8、預期 2.7、實際 3。",
      "ai": "目前 AI 判斷為偏多觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響市場風險偏好與資金輪動。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar / 鉅亨網全球經濟指標",
      "sourceUrl": "https://www.destatis.de",
      "sourceList": [
        "TradingView Economic Calendar",
        "鉅亨網全球經濟指標"
      ]
    }
  ],
  "macroEvents": [
    {
      "id": "macro-ppi-yoy-jul-20260820",
      "type": "macro",
      "title": "生產者物價指數 PPI",
      "eventName": "生產者物價指數 PPI",
      "originalEventName": "PPI YoY (Jul)",
      "sourcePublishTime": "2026/08/20 14:00 Asia/Taipei",
      "country": "德國",
      "publishTime": "2026/08/20 14:00",
      "previous": "1.8",
      "forecast": "2.7",
      "actual": "3",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/08/20 14:00",
      "tags": [
        "德國",
        "生產者物價指數",
        "偏多"
      ],
      "summary": "生產者物價指數 PPI 將於 2026/08/20 14:00 公布，市場關注前值 1.8、預期 2.7。",
      "event": "德國 生產者物價指數 PPI，前值 1.8、預期 2.7、實際 3。",
      "ai": "目前 AI 判斷為偏多觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響市場風險偏好與資金輪動。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar / 鉅亨網全球經濟指標",
      "sourceUrl": "https://www.destatis.de",
      "sourceList": [
        "TradingView Economic Calendar",
        "鉅亨網全球經濟指標"
      ]
    },
    {
      "id": "macro-continuing-jobless-claims-aug-08-20260820",
      "type": "macro",
      "title": "初領失業救濟金人數",
      "eventName": "初領失業救濟金人數",
      "originalEventName": "Continuing Jobless Claims (Aug/08)",
      "sourcePublishTime": "2026/08/20 20:30 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/08/20 20:30",
      "previous": "1781",
      "forecast": "1790",
      "actual": "1799",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響就業強弱、薪資通膨與聯準會政策預期。",
      "importance": "中高",
      "timestamp": "2026/08/20 20:30",
      "tags": [
        "美國",
        "初領失業救濟金人數",
        "偏多"
      ],
      "summary": "初領失業救濟金人數 將於 2026/08/20 20:30 公布，市場關注前值 1781、預期 1790。",
      "event": "美國 初領失業救濟金人數，前值 1781、預期 1790、實際 1799。",
      "ai": "目前 AI 判斷為偏多觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響就業強弱、薪資通膨與聯準會政策預期。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "http://www.dol.gov",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    },
    {
      "id": "macro-s-p-global-services-pmi-flash-aug-20260821",
      "type": "macro",
      "title": "服務業 PMI",
      "eventName": "服務業 PMI",
      "originalEventName": "S&P Global Services PMI Flash (Aug)",
      "sourcePublishTime": "2026/08/21 15:15 Asia/Taipei",
      "country": "法國",
      "publishTime": "2026/08/21 15:15",
      "previous": "49.6",
      "forecast": "49.8",
      "actual": "48.4",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏空",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/08/21 15:15",
      "tags": [
        "法國",
        "服務業",
        "中性"
      ],
      "summary": "服務業 PMI 將於 2026/08/21 15:15 公布，市場關注前值 49.6、預期 49.5。",
      "event": "法國 服務業 PMI，前值 49.6、預期 49.5、實際 48.4。",
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
      "id": "macro-s-p-global-composite-pmi-flash-aug-20260821",
      "type": "macro",
      "title": "綜合 PMI",
      "eventName": "綜合 PMI",
      "originalEventName": "S&P Global Composite PMI Flash (Aug)",
      "sourcePublishTime": "2026/08/21 15:15 Asia/Taipei",
      "country": "法國",
      "publishTime": "2026/08/21 15:15",
      "previous": "49.4",
      "forecast": "49.5",
      "actual": "48.8",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏空",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/08/21 15:15",
      "tags": [
        "法國",
        "綜合",
        "中性"
      ],
      "summary": "綜合 PMI 將於 2026/08/21 15:15 公布，市場關注前值 49.4、預期 49.9。",
      "event": "法國 綜合 PMI，前值 49.4、預期 49.9、實際 48.8。",
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
      "id": "macro-s-p-global-manufacturing-pmi-flash-aug-20260821",
      "type": "macro",
      "title": "製造業 PMI",
      "eventName": "製造業 PMI",
      "originalEventName": "S&P Global Manufacturing PMI Flash (Aug)",
      "sourcePublishTime": "2026/08/21 15:15 Asia/Taipei",
      "country": "法國",
      "publishTime": "2026/08/21 15:15",
      "previous": "49.8",
      "forecast": "50",
      "actual": "51.5",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/08/21 15:15",
      "tags": [
        "法國",
        "製造業",
        "中性"
      ],
      "summary": "製造業 PMI 將於 2026/08/21 15:15 公布，市場關注前值 49.8、預期 50.0。",
      "event": "法國 製造業 PMI，前值 49.8、預期 50.0、實際 51.5。",
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
      "id": "macro-s-p-global-services-pmi-flash-aug-20260821",
      "type": "macro",
      "title": "服務業 PMI",
      "eventName": "服務業 PMI",
      "originalEventName": "S&P Global Services PMI Flash (Aug)",
      "sourcePublishTime": "2026/08/21 15:30 Asia/Taipei",
      "country": "德國",
      "publishTime": "2026/08/21 15:30",
      "previous": "49.8",
      "forecast": "50.1",
      "actual": "48.5",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏空",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/08/21 15:30",
      "tags": [
        "德國",
        "服務業",
        "中性"
      ],
      "summary": "服務業 PMI 將於 2026/08/21 15:30 公布，市場關注前值 49.8、預期 50.5。",
      "event": "德國 服務業 PMI，前值 49.8、預期 50.5、實際 48.5。",
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
      "id": "macro-s-p-global-manufacturing-pmi-flash-aug-20260821",
      "type": "macro",
      "title": "製造業 PMI",
      "eventName": "製造業 PMI",
      "originalEventName": "S&P Global Manufacturing PMI Flash (Aug)",
      "sourcePublishTime": "2026/08/21 15:30 Asia/Taipei",
      "country": "德國",
      "publishTime": "2026/08/21 15:30",
      "previous": "52.2",
      "forecast": "52",
      "actual": "54.1",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/08/21 15:30",
      "tags": [
        "德國",
        "製造業",
        "中性"
      ],
      "summary": "製造業 PMI 將於 2026/08/21 15:30 公布，市場關注前值 52.2、預期 52.0。",
      "event": "德國 製造業 PMI，前值 52.2、預期 52.0、實際 54.1。",
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
      "id": "macro-s-p-global-composite-pmi-flash-aug-20260821",
      "type": "macro",
      "title": "綜合 PMI",
      "eventName": "綜合 PMI",
      "originalEventName": "S&P Global Composite PMI Flash (Aug)",
      "sourcePublishTime": "2026/08/21 15:30 Asia/Taipei",
      "country": "德國",
      "publishTime": "2026/08/21 15:30",
      "previous": "51.3",
      "forecast": "51.3",
      "actual": "51.0",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏空",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/08/21 15:30",
      "tags": [
        "德國",
        "綜合",
        "中性"
      ],
      "summary": "綜合 PMI 將於 2026/08/21 15:30 公布，市場關注前值 51.3、預期 51.4。",
      "event": "德國 綜合 PMI，前值 51.3、預期 51.4、實際 51.0。",
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
