(function () {
  const page = document.body.dataset.dashboardPage;
  const $ = (selector) => document.querySelector(selector);
  const fmt = (value, digits = 0) =>
    Number(value || 0).toLocaleString("zh-TW", {
      minimumFractionDigits: digits,
      maximumFractionDigits: digits,
    });
  const signed = (value) => `${Number(value || 0) >= 0 ? "+" : ""}${fmt(value, 2)}%`;
  const esc = (value) =>
    String(value ?? "").replace(/[&<>"']/g, (char) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    })[char]);

  function setHeaders(labels) {
    document.querySelectorAll(".simple-table th").forEach((node, index) => {
      if (labels[index]) node.textContent = labels[index];
    });
  }

  function row(stock) {
    return `
      <tr>
        <td class="blue">${stock.symbol}</td>
        <td>${stock.name}</td>
        <td>${stock.sector}</td>
        <td class="blue">${fmt(stock.score, 1)}</td>
        <td class="${Number(stock.return20 || 0) >= 0 ? "green" : ""}">${signed(stock.return20)}</td>
        <td>${fmt(stock.volumeRatio20, 2)} 倍</td>
      </tr>`;
  }

  function modelRow(model) {
    const source = model.sourceChannel === "bh1908" ? "投資腦袋の熊敖" : (model.sourceChannel || (model.sources?.[0] ? "公開資料" : "-"));
    const status = model.implemented === false ? "待接資料" : "可篩選";
    return `
      <tr>
        <td class="blue">${esc(model.name)}</td>
        <td>${esc(model.style || "-")}</td>
        <td>${esc((model.rules || []).slice(0, 2).join("；"))}</td>
        <td class="blue">${fmt((model.rules || []).length)}</td>
        <td>${esc(source)}</td>
        <td>${status}</td>
      </tr>`;
  }

  function hydrate(data, library = {}) {
    const meta = data.meta || {};
    const daily = data.dailyScreening || {};
    const strategies = daily.strategies || {};
    const candidates = data.candidates || [];
    const top = candidates.slice(0, 10);
    const models = Array.isArray(library.models) ? library.models : [];
    const bhModels = models.filter((model) => model.sourceChannel === "bh1908" || model.sourceChannel === "投資腦袋の熊敖");
    const implementedModels = models.filter((model) => model.implemented !== false);
    const pill = $(".data-pill");
    if (pill) pill.textContent = `最新資料：${meta.marketDate || "-"}，${fmt(meta.stockCount)} 檔`;

    if (page === "quant-indicators") {
      $(".simple-heading h1").textContent = "量化指標";
      $(".simple-heading p").textContent = "收錄可用現有資料欄位計算的技術、量價、籌碼與影片衍生指標。";
      document.querySelectorAll(".simple-card h2")[0].textContent = "熊敖影片指標";
      document.querySelectorAll(".simple-card h2")[1].textContent = "可執行指標";
      document.querySelectorAll(".simple-card h2")[2].textContent = "候選股票";
      document.querySelectorAll(".simple-card strong")[0].textContent = fmt(bhModels.length);
      document.querySelectorAll(".simple-card strong")[1].textContent = fmt(implementedModels.length);
      document.querySelectorAll(".simple-card strong")[2].textContent = fmt(candidates.length);
      $(".simple-panel h2").textContent = "熊敖影片量化指標";
      setHeaders(["指標", "類型", "核心條件", "條件數", "來源", "狀態"]);
      $(".simple-table tbody").innerHTML = (bhModels.length ? bhModels : top).map((item) =>
        item.symbol ? row(item) : modelRow(item)
      ).join("");
    }

    if (page === "model-library") {
      $(".simple-heading h1").textContent = "模型庫";
      $(".simple-heading p").textContent = "統一管理基本面、趨勢、量價、型態、籌碼與影片衍生模型。";
      document.querySelectorAll(".simple-card h2")[0].textContent = "總模型";
      document.querySelectorAll(".simple-card h2")[1].textContent = "可執行";
      document.querySelectorAll(".simple-card h2")[2].textContent = "影片衍生";
      document.querySelectorAll(".simple-card strong")[0].textContent = `${fmt(models.length)} 個`;
      document.querySelectorAll(".simple-card strong")[1].textContent = `${fmt(implementedModels.length)} 個`;
      document.querySelectorAll(".simple-card strong")[2].textContent = `${fmt(bhModels.length)} 個`;
      $(".simple-panel h2").textContent = "模型庫清單";
      setHeaders(["模型名稱", "類型", "核心條件", "條件數", "來源", "狀態"]);
      $(".simple-table tbody").innerHTML = models.map(modelRow).join("") || Object.values(strategies).map((strategy) => `
        <tr>
          <td class="blue">${strategy.label}</td>
          <td>${strategy.key}</td>
          <td class="blue">${fmt(strategy.count)}</td>
          <td>${meta.marketDate || "-"}</td>
        </tr>`).join("");
    }

    if (page === "admin") {
      document.querySelectorAll(".simple-card strong")[0].textContent = fmt(meta.stockCount);
      document.querySelectorAll(".simple-card strong")[1].textContent = fmt(meta.candidateCount);
      document.querySelectorAll(".simple-card strong")[2].textContent = meta.marketDate || "-";
      $(".simple-table tbody").innerHTML = [
        ["資料來源", meta.source || "Local Yahoo Finance OHLCV CSV"],
        ["更新腳本", "python scripts/update_data.py --workers 12"],
        ["網站資料產生", "python scripts/build_site_data.py"],
        ["舊 app.html", "已轉導至 /market-overview/"],
      ].map(([name, value]) => `<tr><td class="blue">${name}</td><td colspan="5">${value}</td></tr>`).join("");
    }
  }

  Promise.all([
    fetch("../data/site-data.json", { cache: "no-store" }).then((response) => response.json()),
    fetch("../data/model_library.json", { cache: "no-store" }).then((response) => response.ok ? response.json() : { models: [] }).catch(() => ({ models: [] })),
  ])
    .then(([data, library]) => {
      document.documentElement.dataset.realData = "loaded";
      hydrate(data, library);
    })
    .catch((error) => {
      console.error("[AI Stock Lab] simple dashboard data failed", error);
      document.documentElement.dataset.realData = "failed";
    });
})();
