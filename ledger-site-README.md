# Ledger — static website version

A plain HTML/CSS/JS expense dashboard — no build step, no server required. Three files:

- `index.html` — page structure (Dashboard + Add Expense screens)
- `style.css` — all styling
- `script.js` — all app logic (data, charts, storage, Excel export)

Loads Chart.js and SheetJS (xlsx) from a CDN; everything else runs in the browser.

## Host it on GitHub Pages (free)

1. **Create a new repository** on github.com (or reuse one) — public repos get free Pages hosting.
2. **Upload these three files** (`index.html`, `style.css`, `script.js`) to the root of that repo.
   - Easiest from a browser: open your repo → **Add file → Upload files** → drag in all three → **Commit**.
3. Go to the repo's **Settings → Pages**.
4. Under **Source**, choose **Deploy from a branch**, branch **main**, folder **/ (root)** → **Save**.
5. Wait about a minute, then refresh that Settings → Pages screen — it'll show your live URL:
   `https://<your-username>.github.io/<repo-name>/`

That's the whole thing — no other setup, no npm, no build step.

## What it does

- **Dashboard** — Month/Year toggle, KPI cards (Total, Recurring, Non-recurring, Can be avoided,
  Entries), tap-to-drill-down category bars, Recurring vs Non-recurring donut chart, spend-over-time
  line chart (daily within a month, monthly across a year, with weekends shaded), Export to Excel.
- **+ Add Expense** — details, amount, Spent/Received, category & sub-category (with "+ New…"),
  Recurring/Non-recurring, a "Can be avoided?" tag, optional tags, date. Time stamps automatically
  on save.
- Data ships baked-in (37 sample transactions) and everything you add is saved in the browser's
  `localStorage` automatically — it'll still be there next time you open the page, on that device.
- **Export to Excel** button downloads a real `.xlsx` file with everything, including the new
  `Avoidable` column (`TRUE`/`FALSE`).

## Notes

- Because data lives in `localStorage`, it's per-browser/per-device — opening the GitHub Pages URL
  on your phone and your laptop will show two separate sets of entries (both starting from the same
  37 sample rows). Use Export to Excel to move data between devices, or to keep a backup.
- All three files are plain, dependency-free web files — safe to edit directly, no rebuild needed.
  Refresh the page after any edit.
