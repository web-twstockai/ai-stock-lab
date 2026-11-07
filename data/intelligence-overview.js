window.IntelligenceOverviewData = {
  "updatedAt": "2026/11/06 18:30",
  "status": "運作中",
  "cards": [
    {
      "label": "今日偵測情報",
      "value": 302,
      "unit": "筆",
      "icon": "file"
    },
    {
      "label": "高重要度訊號",
      "value": 102,
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
          "27 筆"
        ],
        [
          "三大法人同步買",
          "14 筆"
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
      "id": "inst-2382-20261106",
      "type": "institutional",
      "title": "2382 廣達",
      "stockCode": "2382",
      "stockName": "廣達",
      "sector": "電腦及週邊設備",
      "group": "電腦及週邊設備",
      "institutionType": "自營商",
      "direction": "連買",
      "days": 10,
      "consecutiveBuyDays": 10,
      "streaks": {
        "外資": 0,
        "投信": 10,
        "自營商": 10
      },
      "latestNetBuy": 2057,
      "buyVolume": 5975,
      "buyAmount": 17.36,
      "syncCount": 2,
      "importance": "高",
      "timestamp": "2026/11/06 18:20",
      "tags": [
        "自營商",
        "連買",
        "電腦及週邊設備",
        "5G",
        "APPLE概念"
      ],
      "summary": "自營商連買，近 10 個交易日正買合計 5,975 張，估算金額約 17.36 億元。",
      "event": "自營商連買 10 日，近 10 個交易日正買合計 5,975 張；最新日外資 -667 張、投信 1,282 張、自營商 2,057 張。",
      "ai": "法人買盤集中在 電腦及週邊設備，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 20756.027,
      "yahooVerification": {
        "status": "days-different",
        "source": "https://tw.stock.yahoo.com/quote/2382.TW/institutional-trading",
        "latestNetBuy": 2057,
        "days": 18,
        "latestForeign": -667,
        "latestTrust": 1282,
        "latestDealer": 2057
      }
    },
    {
      "id": "inst-2887-20261106",
      "type": "institutional",
      "title": "2887 台新新光金",
      "stockCode": "2887",
      "stockName": "台新新光金",
      "sector": "金融保險",
      "group": "金融保險",
      "institutionType": "自營商",
      "direction": "連買",
      "days": 10,
      "consecutiveBuyDays": 10,
      "streaks": {
        "外資": 0,
        "投信": 6,
        "自營商": 10
      },
      "latestNetBuy": 14563,
      "buyVolume": 46498,
      "buyAmount": 0,
      "syncCount": 2,
      "importance": "高",
      "timestamp": "2026/11/06 18:20",
      "tags": [
        "自營商",
        "連買",
        "金融保險",
        "金融業",
        "銀行"
      ],
      "summary": "自營商連買，近 10 個交易日正買合計 46,498 張，估算金額約 0.00 億元。",
      "event": "自營商連買 10 日，近 10 個交易日正買合計 46,498 張；最新日外資 -5,802 張、投信 8,819 張、自營商 14,563 張。",
      "ai": "法人買盤集中在 金融保險，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 146199.171,
      "yahooVerification": {
        "status": "days-different",
        "source": "https://tw.stock.yahoo.com/quote/2887.TW/institutional-trading",
        "latestNetBuy": 14563,
        "days": 30,
        "latestForeign": -5802,
        "latestTrust": 8819,
        "latestDealer": 14563
      }
    },
    {
      "id": "inst-2892-20261106",
      "type": "institutional",
      "title": "2892 第一金",
      "stockCode": "2892",
      "stockName": "第一金",
      "sector": "金融保險",
      "group": "金融保險",
      "institutionType": "自營商",
      "direction": "同步買超",
      "days": 10,
      "consecutiveBuyDays": 10,
      "streaks": {
        "外資": 1,
        "投信": 6,
        "自營商": 10
      },
      "latestNetBuy": 5441,
      "buyVolume": 16618,
      "buyAmount": 0,
      "syncCount": 3,
      "importance": "高",
      "timestamp": "2026/11/06 18:20",
      "tags": [
        "自營商",
        "同步買超",
        "金融保險",
        "官股企業",
        "電子商務及延伸"
      ],
      "summary": "自營商同步買超，近 10 個交易日正買合計 16,618 張，估算金額約 0.00 億元。",
      "event": "自營商連買 10 日，近 10 個交易日正買合計 16,618 張；最新日外資 6,663 張、投信 2,096 張、自營商 5,441 張。",
      "ai": "法人買盤集中在 金融保險，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 53143.723,
      "yahooVerification": {
        "status": "days-different",
        "source": "https://tw.stock.yahoo.com/quote/2892.TW/institutional-trading",
        "latestNetBuy": 5441,
        "days": 11,
        "latestForeign": 6663,
        "latestTrust": 2096,
        "latestDealer": 5441
      }
    },
    {
      "id": "inst-3481-20261106",
      "type": "institutional",
      "title": "3481 群創",
      "stockCode": "3481",
      "stockName": "群創",
      "sector": "光電業",
      "group": "光電業",
      "institutionType": "自營商",
      "direction": "同步買超",
      "days": 3,
      "consecutiveBuyDays": 3,
      "streaks": {
        "外資": 1,
        "投信": 2,
        "自營商": 3
      },
      "latestNetBuy": 3022,
      "buyVolume": 14841,
      "buyAmount": 0,
      "syncCount": 3,
      "importance": "高",
      "timestamp": "2026/11/06 18:20",
      "tags": [
        "自營商",
        "同步買超",
        "光電業",
        "Android",
        "AppleCar"
      ],
      "summary": "自營商同步買超，近 10 個交易日正買合計 14,841 張，估算金額約 0.00 億元。",
      "event": "自營商連買 3 日，近 10 個交易日正買合計 14,841 張；最新日外資 21,314 張、投信 21 張、自營商 3,022 張。",
      "ai": "法人買盤集中在 光電業，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
      "impact": "短線可能提升市場關注度，並帶動同族群資金比較效應。",
      "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
      "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
      "totalPositiveLots": 93633.491,
      "yahooVerification": {
        "status": "matched",
        "source": "https://tw.stock.yahoo.com/quote/3481.TW/institutional-trading",
        "latestNetBuy": 3022,
        "days": 3,
        "latestForeign": 21314,
        "latestTrust": 21,
        "latestDealer": 3022
      }
    },
    {
      "id": "macro-s-p-global-composite-pmi-flash-oct-2026-20261023",
      "type": "macro",
      "title": "綜合 PMI",
      "eventName": "綜合 PMI",
      "originalEventName": "S&P Global Composite PMI Flash (Oct. 2026)",
      "sourcePublishTime": "2026/10/23 15:15 Asia/Taipei",
      "country": "法國",
      "publishTime": "2026/10/23 15:15",
      "previous": "51.1",
      "forecast": "50.5",
      "actual": "48.4",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏空",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/10/23 15:15",
      "tags": [
        "法國",
        "綜合",
        "中性"
      ],
      "summary": "綜合 PMI 將於 2026/10/23 15:15 公布，市場關注前值 51.1、預期 50.1。",
      "event": "法國 綜合 PMI，前值 51.1、預期 50.1、實際 48.4。",
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
      "id": "macro-kansas-fed-composite-index-oct-2026-20261022",
      "type": "macro",
      "title": "Kansas Fed Composite Index (Oct. 2026)",
      "eventName": "Kansas Fed Composite Index (Oct. 2026)",
      "originalEventName": "Kansas Fed Composite Index (Oct. 2026)",
      "sourcePublishTime": "2026/10/22 23:00 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/10/22 23:00",
      "previous": "14",
      "forecast": "—",
      "actual": "11",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響全球資金成本、美元走勢與風險資產評價。",
      "importance": "中高",
      "timestamp": "2026/10/22 23:00",
      "tags": [
        "美國",
        "Kansas",
        "中性"
      ],
      "summary": "Kansas Fed Composite Index (Oct. 2026) 將於 2026/10/22 23:00 公布，市場關注前值 14、預期 —。",
      "event": "美國 Kansas Fed Composite Index (Oct. 2026)，前值 14、預期 —、實際 11。",
      "ai": "目前 AI 判斷為中性觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響全球資金成本、美元走勢與風險資產評價。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "https://kansascityfed.org",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    },
    {
      "id": "macro-kansas-fed-manufacturing-index-oct-2026-20261022",
      "type": "macro",
      "title": "Kansas Fed Manufacturing Index (Oct. 2026)",
      "eventName": "Kansas Fed Manufacturing Index (Oct. 2026)",
      "originalEventName": "Kansas Fed Manufacturing Index (Oct. 2026)",
      "sourcePublishTime": "2026/10/22 23:00 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/10/22 23:00",
      "previous": "20",
      "forecast": "—",
      "actual": "16",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響全球資金成本、美元走勢與風險資產評價。",
      "importance": "中高",
      "timestamp": "2026/10/22 23:00",
      "tags": [
        "美國",
        "Kansas",
        "中性"
      ],
      "summary": "Kansas Fed Manufacturing Index (Oct. 2026) 將於 2026/10/22 23:00 公布，市場關注前值 20、預期 —。",
      "event": "美國 Kansas Fed Manufacturing Index (Oct. 2026)，前值 20、預期 —、實際 16。",
      "ai": "目前 AI 判斷為中性觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響全球資金成本、美元走勢與風險資產評價。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "https://kansascityfed.org",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    },
    {
      "id": "macro-jobless-claims-4-week-average-w-o-oct-12-2026-20261022",
      "type": "macro",
      "title": "初領失業救濟金人數",
      "eventName": "初領失業救濟金人數",
      "originalEventName": "Jobless Claims 4-week Average (w/o Oct. 12, 2026)",
      "sourcePublishTime": "2026/10/22 20:30 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/10/22 20:30",
      "previous": "198.75",
      "forecast": "200",
      "actual": "198",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響就業強弱、薪資通膨與聯準會政策預期。",
      "importance": "中高",
      "timestamp": "2026/10/22 20:30",
      "tags": [
        "美國",
        "初領失業救濟金人數",
        "中性"
      ],
      "summary": "初領失業救濟金人數 將於 2026/10/22 20:30 公布，市場關注前值 198.75、預期 —。",
      "event": "美國 初領失業救濟金人數，前值 198.75、預期 —、實際 198。",
      "ai": "目前 AI 判斷為中性觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響就業強弱、薪資通膨與聯準會政策預期。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "http://www.dol.gov",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    }
  ],
  "macroEvents": [
    {
      "id": "macro-jobless-claims-4-week-average-w-o-oct-12-2026-20261022",
      "type": "macro",
      "title": "初領失業救濟金人數",
      "eventName": "初領失業救濟金人數",
      "originalEventName": "Jobless Claims 4-week Average (w/o Oct. 12, 2026)",
      "sourcePublishTime": "2026/10/22 20:30 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/10/22 20:30",
      "previous": "198.75",
      "forecast": "200",
      "actual": "198",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響就業強弱、薪資通膨與聯準會政策預期。",
      "importance": "中高",
      "timestamp": "2026/10/22 20:30",
      "tags": [
        "美國",
        "初領失業救濟金人數",
        "中性"
      ],
      "summary": "初領失業救濟金人數 將於 2026/10/22 20:30 公布，市場關注前值 198.75、預期 —。",
      "event": "美國 初領失業救濟金人數，前值 198.75、預期 —、實際 198。",
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
      "id": "macro-kansas-fed-composite-index-oct-2026-20261022",
      "type": "macro",
      "title": "Kansas Fed Composite Index (Oct. 2026)",
      "eventName": "Kansas Fed Composite Index (Oct. 2026)",
      "originalEventName": "Kansas Fed Composite Index (Oct. 2026)",
      "sourcePublishTime": "2026/10/22 23:00 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/10/22 23:00",
      "previous": "14",
      "forecast": "—",
      "actual": "11",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響全球資金成本、美元走勢與風險資產評價。",
      "importance": "中高",
      "timestamp": "2026/10/22 23:00",
      "tags": [
        "美國",
        "Kansas",
        "中性"
      ],
      "summary": "Kansas Fed Composite Index (Oct. 2026) 將於 2026/10/22 23:00 公布，市場關注前值 14、預期 —。",
      "event": "美國 Kansas Fed Composite Index (Oct. 2026)，前值 14、預期 —、實際 11。",
      "ai": "目前 AI 判斷為中性觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響全球資金成本、美元走勢與風險資產評價。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "https://kansascityfed.org",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    },
    {
      "id": "macro-kansas-fed-manufacturing-index-oct-2026-20261022",
      "type": "macro",
      "title": "Kansas Fed Manufacturing Index (Oct. 2026)",
      "eventName": "Kansas Fed Manufacturing Index (Oct. 2026)",
      "originalEventName": "Kansas Fed Manufacturing Index (Oct. 2026)",
      "sourcePublishTime": "2026/10/22 23:00 Asia/Taipei",
      "country": "美國",
      "publishTime": "2026/10/22 23:00",
      "previous": "20",
      "forecast": "—",
      "actual": "16",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "中性",
      "impact": "影響全球資金成本、美元走勢與風險資產評價。",
      "importance": "中高",
      "timestamp": "2026/10/22 23:00",
      "tags": [
        "美國",
        "Kansas",
        "中性"
      ],
      "summary": "Kansas Fed Manufacturing Index (Oct. 2026) 將於 2026/10/22 23:00 公布，市場關注前值 20、預期 —。",
      "event": "美國 Kansas Fed Manufacturing Index (Oct. 2026)，前值 20、預期 —、實際 16。",
      "ai": "目前 AI 判斷為中性觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
      "impactDetail": "影響全球資金成本、美元走勢與風險資產評價。",
      "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
      "source": "TradingView Economic Calendar",
      "sourceUrl": "https://kansascityfed.org",
      "sourceList": [
        "TradingView Economic Calendar"
      ]
    },
    {
      "id": "macro-s-p-global-composite-pmi-flash-oct-2026-20261023",
      "type": "macro",
      "title": "綜合 PMI",
      "eventName": "綜合 PMI",
      "originalEventName": "S&P Global Composite PMI Flash (Oct. 2026)",
      "sourcePublishTime": "2026/10/23 15:15 Asia/Taipei",
      "country": "法國",
      "publishTime": "2026/10/23 15:15",
      "previous": "51.1",
      "forecast": "50.5",
      "actual": "48.4",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏空",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/10/23 15:15",
      "tags": [
        "法國",
        "綜合",
        "中性"
      ],
      "summary": "綜合 PMI 將於 2026/10/23 15:15 公布，市場關注前值 51.1、預期 50.1。",
      "event": "法國 綜合 PMI，前值 51.1、預期 50.1、實際 48.4。",
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
      "id": "macro-s-p-global-manufacturing-pmi-flash-oct-2026-20261023",
      "type": "macro",
      "title": "製造業 PMI",
      "eventName": "製造業 PMI",
      "originalEventName": "S&P Global Manufacturing PMI Flash (Oct. 2026)",
      "sourcePublishTime": "2026/10/23 15:15 Asia/Taipei",
      "country": "法國",
      "publishTime": "2026/10/23 15:15",
      "previous": "50.6",
      "forecast": "50.5",
      "actual": "49.3",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏空",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/10/23 15:15",
      "tags": [
        "法國",
        "製造業",
        "中性"
      ],
      "summary": "製造業 PMI 將於 2026/10/23 15:15 公布，市場關注前值 50.6、預期 50.0。",
      "event": "法國 製造業 PMI，前值 50.6、預期 50.0、實際 49.3。",
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
      "id": "macro-s-p-global-services-pmi-flash-oct-2026-20261023",
      "type": "macro",
      "title": "服務業 PMI",
      "eventName": "服務業 PMI",
      "originalEventName": "S&P Global Services PMI Flash (Oct. 2026)",
      "sourcePublishTime": "2026/10/23 15:15 Asia/Taipei",
      "country": "法國",
      "publishTime": "2026/10/23 15:15",
      "previous": "51.2",
      "forecast": "50.7",
      "actual": "48.4",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏空",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/10/23 15:15",
      "tags": [
        "法國",
        "服務業",
        "中性"
      ],
      "summary": "服務業 PMI 將於 2026/10/23 15:15 公布，市場關注前值 51.2、預期 50.2。",
      "event": "法國 服務業 PMI，前值 51.2、預期 50.2、實際 48.4。",
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
      "id": "macro-s-p-global-composite-pmi-flash-oct-2026-20261023",
      "type": "macro",
      "title": "綜合 PMI",
      "eventName": "綜合 PMI",
      "originalEventName": "S&P Global Composite PMI Flash (Oct. 2026)",
      "sourcePublishTime": "2026/10/23 15:30 Asia/Taipei",
      "country": "德國",
      "publishTime": "2026/10/23 15:30",
      "previous": "53.8",
      "forecast": "53.3",
      "actual": "52.8",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏空",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/10/23 15:30",
      "tags": [
        "德國",
        "綜合",
        "中性"
      ],
      "summary": "綜合 PMI 將於 2026/10/23 15:30 公布，市場關注前值 53.8、預期 53.0。",
      "event": "德國 綜合 PMI，前值 53.8、預期 53.0、實際 52.8。",
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
      "id": "macro-s-p-global-manufacturing-pmi-flash-oct-2026-20261023",
      "type": "macro",
      "title": "製造業 PMI",
      "eventName": "製造業 PMI",
      "originalEventName": "S&P Global Manufacturing PMI Flash (Oct. 2026)",
      "sourcePublishTime": "2026/10/23 15:30 Asia/Taipei",
      "country": "德國",
      "publishTime": "2026/10/23 15:30",
      "previous": "53.9",
      "forecast": "53.5",
      "actual": "54.2",
      "status": "已公布",
      "statusLevel": "published",
      "direction": "偏多",
      "impact": "影響市場風險偏好與資金輪動。",
      "importance": "中高",
      "timestamp": "2026/10/23 15:30",
      "tags": [
        "德國",
        "製造業",
        "中性"
      ],
      "summary": "製造業 PMI 將於 2026/10/23 15:30 公布，市場關注前值 53.9、預期 53.2。",
      "event": "德國 製造業 PMI，前值 53.9、預期 53.2、實際 54.2。",
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
