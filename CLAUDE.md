# Schep Capital website

Static marketing site — **Astro 7 + Tailwind 4**, deployed to GitHub Pages (`schepcapital.com`).
See `README.md` for dev/build/deploy. Strategy numbers shown on the site come from the **BBTerminal API** (below).

## BBTerminal API

Source of the fund's live/backtested figures. Plan: a daily GitHub Action fetches from this API,
writes JSON into the repo, and the build bakes it in — so visitors never hit the API.

### Auth (Supabase password grant → Bearer)

Every `/api/*` call needs a Supabase JWT. Exchange email+password for an `access_token` (lasts ~1h;
refresh with `grant_type=refresh_token`), then send `Authorization: Bearer <token>`.

```bash
SUPABASE_URL="https://yilhjhmfwcnzryzeuwci.supabase.co"
ANON="sb_publishable_PflBa51pUa85x9vx3wzr8w__jsUjkpP"   # safe to commit (same key ships in browser JS)
BASE="https://bbterminal-production.up.railway.app"

TOKEN=$(curl -fsS -X POST "$SUPABASE_URL/auth/v1/token?grant_type=password" \
  -H "apikey: $ANON" -H "Content-Type: application/json" \
  -d "{\"email\":\"$BBTERMINAL_EMAIL\",\"password\":\"$BBTERMINAL_PASSWORD\"}" \
  | jq -r .access_token)

curl -fsS "$BASE/api/admin/schedules" -H "Authorization: Bearer $TOKEN" | jq
```

### Credentials / env vars

- `BBTERMINAL_URL` = `https://bbterminal-production.up.railway.app`
- `SUPABASE_URL` = `https://yilhjhmfwcnzryzeuwci.supabase.co`
- `SUPABASE_ANON_KEY` = `sb_publishable_PflBa51pUa85x9vx3wzr8w__jsUjkpP` (public; safe to commit)
- `BBTERMINAL_EMAIL` = `reinier7175@gmail.com` (account role: **admin**)
- `BBTERMINAL_PASSWORD` = **secret — never commit.** Lives in a GitHub Actions secret / local `.env` only.

### Access tiers

`anonymous` → only `/api/health`, `/api/hello`, `*/cron`. `user` (any JWT) → reads under
`/api/companies|earnings|airs|usage` + a couple writes. `admin` (this account) → everything,
incl. `/api/admin/*`. Bad token = 401; over-tier = 403.

### Endpoints used by this site (admin)

| Method · Path | Purpose |
|---|---|
| `GET /api/admin/health` | Go/no-go. Gate on `is_healthy_strict` before trusting data. |
| `GET /api/admin/schedules?enabled_only=false` | List strategies: `strategy_id, name, frequency, next_rebalance_at, as_of_date, latest_price_date, holdings_count`. |
| `GET /api/admin/schedules/{id}` | Current holdings (order-ready): per-holding `ticker, exchange, country, currency, isin, company_name, side, target_weight, score, entry_price_local, entry_price_eur` + `as_of_date`. |
| `GET /api/admin/schedules/{id}/performance` | Live since-inception: `inception_date, since_inception_return_pct, mtd_return_pct, daily_returns:[{date,return_pct}]`. → site "LIVE" columns. |
| `GET /api/admin/schedules/{id}/risk-metrics` | Backtested `sharpe_ratio, sortino_ratio, annualized_return_pct, max_drawdown_pct, period`. → site "BACKTESTED" columns. |
| `GET /api/admin/universes` / `…/{id}` | Frozen universe membership (per-company attrs + latest close native/EUR). |
| `GET /api/auth/me` | Caller `{id, email, role}` — sanity check tier. |

### Strategies (as of 2026-06-26)

- **#13 `MomentumTopSelectie`** — monthly, 24 holdings, next rebalance `2026-07-06`. Powers the
  "Momentum Global Equity Fund" card (goes live Jul 6, 2026). Use `risk-metrics` for the backtested
  Sharpe/Sortino and `performance` for live figures once it's running.
