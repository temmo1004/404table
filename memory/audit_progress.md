# 404table Dual Audit

範圍：webhook server.js + LP 內嵌 JS（countdown + click tracker）

## 審查目標檔案

1. ~/404table-webhook/server.js (~140 行) — HMAC 驗章 / GA4 MP / Meta CAPI / SHA256 PII
2. ~/404table/index.html 內嵌 JS — countdown 倒數 + click tracker（B 版相同 logic）
3. ~/404table/pay/index.html — Recur redirect + Pixel events (B/pay 相同)

## Anti-patterns (這專案的合法 pattern，不算 bug)

- `__FILL_FROM_...__` placeholder env var 是預期狀態（user 還沒填 token）
- `lp_variant: 'a'/'b'` 是 A/B 設計，不是 hardcoded
- Recur slug `admin-ai-workshop-0531` 保留 0531 不改是因為 webhook 歸因連續性（即使日期改 6/14）
- META_CAPI_TOKEN 為空字串時 skip 是正確設計（不是漏判）
- `event_id = order.id` 用 Recur order id 為 dedup key 是正確設計

## Audit Status

- [ ] Round 1：通用 bug + 安全
- [ ] Round 2：邊界 / error path
- [ ] 集中修補
- [ ] Codex 審 fix
