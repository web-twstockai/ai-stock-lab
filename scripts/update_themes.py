import argparse
import json
import re
import ssl
import time
import urllib.parse
import urllib.request
from datetime import datetime, timezone
from html import unescape
from pathlib import Path

from data_backup import backup_file


ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "data" / "stock-themes.json"
CACHE = ROOT / "data" / "theme-cache"

PCHOME_BASE = "https://pchome.megatime.com.tw"
PCHOME_INDEX = f"{PCHOME_BASE}/group/sto3"
MONEYDJ_BASE = "https://www.moneydj.com"
MONEYDJ_INDEX = f"{MONEYDJ_BASE}/Z/ZH/ZHA/ZHA.djhtm"

THEME_LINK_RE = re.compile(r'<a\s+href="(?P<href>/group/mkt4/cidA\d+\.html)">(?P<label>[^<]+)</a>')
STOCK_ROW_RE = re.compile(
    r'<td\s+class="ct">\s*<a\s+href="/stock/sid(?P<symbol>\d{4,6})\.html">\s*'
    r'(?P<name>.*?)\s*\((?P=symbol)\)\s*</a>\s*</td>',
    re.S,
)
MONEYDJ_LINK_RE = re.compile(
    r'<a\s+href="(?P<href>/z/zh/zha/zh00\.djhtm\?a=(?P<code>C\d+))"[^>]*>(?P<label>[^<]+)</a>',
    re.I,
)
MONEYDJ_STOCK_RE = re.compile(
    r'<a[^>]+javascript:Link2Stk\(\s*\'AS(?P<symbol>\d{4,6})\'\s*\)[^>]*>\s*'
    r'(?P=symbol)\s*(?P<name>[^<]+)</a>',
    re.S,
)

DERIVED_THEME_ALIASES = {
    "低軌衛星": ["低軌道衛星"],
    "PCB": ["印刷電路板相關", "印刷電路板", "PCB材料", "PCB相關設備"],
    "功率元件": ["功率放大器", "分離式元件", "二極體", "電源管理IC"],
}


def clean_text(value):
    value = re.sub(r"<[^>]+>", "", value or "")
    value = unescape(value)
    value = value.replace("\u3000", "")
    return re.sub(r"\s+", " ", value).strip()


def request_html(url, post=False, retries=2, encoding="utf-8"):
    data = urllib.parse.urlencode({"is_check": "1"}).encode() if post else None
    headers = {
        "User-Agent": "Mozilla/5.0 AI Stock Lab theme importer",
        "Referer": PCHOME_INDEX,
    }
    if post:
        headers["Content-Type"] = "application/x-www-form-urlencoded"
    request = urllib.request.Request(url, data=data, headers=headers)
    context = ssl._create_unverified_context()
    last_error = None
    for _ in range(retries + 1):
        try:
            with urllib.request.urlopen(request, timeout=35, context=context) as response:
                return response.read().decode(encoding, "replace")
        except Exception as exc:
            last_error = exc
            time.sleep(0.6)
    raise RuntimeError(f"Cannot fetch {url}: {last_error}")


def cached_html(url, name, refresh=False, post=False, encoding="utf-8"):
    CACHE.mkdir(parents=True, exist_ok=True)
    path = CACHE / name
    if path.exists() and not refresh:
        return path.read_text(encoding="utf-8")
    html = request_html(url, post=post, encoding=encoding)
    path.write_text(html, encoding="utf-8")
    return html


def discover_pchome_themes(refresh=False):
    html = cached_html(PCHOME_INDEX, "pchome-sto3.html", refresh=refresh, post=True)
    seen = set()
    themes = []
    for match in THEME_LINK_RE.finditer(html):
        label = clean_text(match.group("label"))
        href = match.group("href")
        if not label or href in seen:
            continue
        seen.add(href)
        themes.append(
            {
                "name": label,
                "url": urllib.parse.urljoin(PCHOME_BASE, href),
                "source": "PChome股市",
            }
        )
    return themes


def parse_pchome_theme(theme, refresh=False):
    cache_name = "pchome-" + re.sub(r"[^A-Za-z0-9]+", "-", theme["url"]).strip("-") + ".html"
    html = cached_html(theme["url"], cache_name, refresh=refresh, post=True)
    start = html.find('tbody id="cpidStock"')
    if start == -1:
        start = html.find('id="cpidStock"')
    end = html.find("</tbody>", start)
    table_html = html[start:end] if start != -1 and end != -1 else html

    stocks = []
    seen = set()
    for match in STOCK_ROW_RE.finditer(table_html):
        symbol = match.group("symbol")
        if symbol in seen:
            continue
        seen.add(symbol)
        stocks.append(
            {
                "symbol": symbol,
                "name": clean_text(match.group("name")),
            }
        )
    return stocks


def discover_moneydj_themes(refresh=False):
    html = cached_html(MONEYDJ_INDEX, "moneydj-index.html", refresh=refresh, encoding="big5")
    seen = set()
    themes = []
    for match in MONEYDJ_LINK_RE.finditer(html):
        code = match.group("code").upper()
        if code in seen:
            continue
        seen.add(code)
        themes.append(
            {
                "name": clean_text(match.group("label")),
                "url": urllib.parse.urljoin(MONEYDJ_BASE, match.group("href")),
                "source": "MoneyDJ理財網",
                "code": code,
            }
        )
    return themes


def parse_moneydj_theme(theme, refresh=False):
    cache_name = f"moneydj-{theme.get('code', re.sub(r'[^A-Za-z0-9]+', '-', theme['url']))}.html"
    html = cached_html(theme["url"], cache_name, refresh=refresh, encoding="big5")
    stocks = []
    seen = set()
    for match in MONEYDJ_STOCK_RE.finditer(html):
        symbol = match.group("symbol")
        if symbol in seen:
            continue
        seen.add(symbol)
        stocks.append(
            {
                "symbol": symbol,
                "name": clean_text(match.group("name")),
            }
        )
    return stocks


def add_members(stocks, theme_payload, theme, members):
    if not members:
        return
    payload = theme_payload.setdefault(
        theme["name"],
        {
            "source": theme["source"],
            "sources": [],
            "url": theme["url"],
            "urls": [],
            "count": 0,
            "symbols": [],
        },
    )
    if theme["source"] not in payload["sources"]:
        payload["sources"].append(theme["source"])
    if theme["url"] not in payload["urls"]:
        payload["urls"].append(theme["url"])

    existing_symbols = set(payload["symbols"])
    for member in members:
        symbol = member["symbol"]
        if symbol not in existing_symbols:
            payload["symbols"].append(symbol)
            existing_symbols.add(symbol)
        bucket = stocks.setdefault(symbol, {"name": member["name"], "themes": []})
        if theme["name"] not in bucket["themes"]:
            bucket["themes"].append(theme["name"])
    payload["count"] = len(payload["symbols"])


def fetch_theme_set(source_name, themes, parser, stocks, theme_payload, failed, limit, refresh, sleep_seconds):
    if limit:
        themes = themes[:limit]
    for index, theme in enumerate(themes, start=1):
        try:
            members = parser(theme, refresh=refresh)
        except Exception as exc:
            failed.append({"source": source_name, "theme": theme["name"], "url": theme["url"], "error": str(exc)})
            continue
        add_members(stocks, theme_payload, theme, members)
        if sleep_seconds and index < len(themes):
            time.sleep(sleep_seconds)


def apply_derived_aliases(stocks, theme_payload):
    for alias, source_names in DERIVED_THEME_ALIASES.items():
        symbols = []
        source_urls = []
        source_labels = []
        existing_alias = theme_payload.get(alias)
        if existing_alias:
            symbols.extend(existing_alias.get("symbols", []))
            source_urls.extend(existing_alias.get("urls") or [existing_alias.get("url")])
            source_labels.extend(existing_alias.get("sources") or [existing_alias.get("source")])
        for source_name in source_names:
            source_theme = theme_payload.get(source_name)
            if not source_theme:
                continue
            symbols.extend(source_theme.get("symbols", []))
            source_urls.extend(source_theme.get("urls") or [source_theme.get("url")])
            source_labels.extend(source_theme.get("sources") or [source_theme.get("source")])
        unique_symbols = sorted(set(symbols))
        if not unique_symbols:
            continue
        for symbol in unique_symbols:
            bucket = stocks.setdefault(symbol, {"name": "", "themes": []})
            if alias not in bucket["themes"]:
                bucket["themes"].append(alias)
        theme_payload[alias] = {
            "source": "AI Stock Lab derived alias",
            "sources": sorted(set(filter(None, source_labels))),
            "url": next((url for url in source_urls if url), ""),
            "urls": sorted(set(filter(None, source_urls))),
            "count": len(unique_symbols),
            "symbols": unique_symbols,
            "derivedFrom": source_names,
        }


def build_theme_payload(limit=None, refresh=False, sleep_seconds=0.08, sources=None):
    active_sources = set(sources or ["pchome", "moneydj"])
    stocks = {}
    theme_payload = {}
    failed = []

    if "pchome" in active_sources:
        fetch_theme_set(
            "PChome股市",
            discover_pchome_themes(refresh=refresh),
            parse_pchome_theme,
            stocks,
            theme_payload,
            failed,
            limit,
            refresh,
            sleep_seconds,
        )

    if "moneydj" in active_sources:
        fetch_theme_set(
            "MoneyDJ理財網",
            discover_moneydj_themes(refresh=refresh),
            parse_moneydj_theme,
            stocks,
            theme_payload,
            failed,
            limit,
            refresh,
            sleep_seconds,
        )

    apply_derived_aliases(stocks, theme_payload)

    return {
        "generatedAt": datetime.now(timezone.utc).isoformat(),
        "sources": [
            {
                "name": "PChome股市概念股分類",
                "url": PCHOME_INDEX,
                "note": "概念分類與成分股表格，作為股票題材 mapping 來源。",
            },
            {
                "name": "鉅亨網",
                "url": "https://www.cnyes.com/",
                "note": "預留新聞與題材來源，可後續補 crawler。",
            },
            {
                "name": "MoneyDJ 分類報價",
                "url": "https://www.moneydj.com/Z/ZH/ZHA/ZHA.djhtm",
                "note": "產業與題材分類頁，作為股票題材 mapping 來源。",
            },
            {
                "name": "財報狗市場趨勢",
                "url": "https://statementdog.com/market-trend",
                "note": "預留熱門族群來源，可後續補 crawler。",
            },
        ],
        "stats": {
            "themeCount": len(theme_payload),
            "stockCount": len(stocks),
            "failedCount": len(failed),
        },
        "stocks": stocks,
        "themes": theme_payload,
        "failed": failed,
    }


def main():
    parser = argparse.ArgumentParser(description="Update stock-theme mappings for AI Stock Lab.")
    parser.add_argument("--refresh", action="store_true", help="Ignore cached HTML and refetch source pages.")
    parser.add_argument("--limit", type=int, default=None, help="Only fetch the first N themes for testing.")
    parser.add_argument("--sleep", type=float, default=0.08, help="Delay between theme page requests.")
    parser.add_argument(
        "--sources",
        default="pchome,moneydj",
        help="Comma-separated sources: pchome,moneydj",
    )
    args = parser.parse_args()

    sources = [item.strip().lower() for item in args.sources.split(",") if item.strip()]
    payload = build_theme_payload(limit=args.limit, refresh=args.refresh, sleep_seconds=args.sleep, sources=sources)
    backup_file(OUT)
    OUT.write_text(json.dumps(payload, ensure_ascii=False, indent=2), encoding="utf-8")
    print(
        f"Wrote {OUT} with {payload['stats']['themeCount']} themes, "
        f"{payload['stats']['stockCount']} stocks, {payload['stats']['failedCount']} failed"
    )


if __name__ == "__main__":
    main()
