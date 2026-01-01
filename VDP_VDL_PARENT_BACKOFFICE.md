# VDP / VDL Parent Backoffice (Frontend)

This document describes the **VDP/VDL Parent Backoffice** frontend implementation, including the **contracts/adapters boundary**, **eligibility UI-locking**, **charts**, and **Phase 6 real API integration**.

> Note: The build currently uses **CRA (`react-scripts`) + Tailwind + React Router**. Some governance notes reference Vite; if/when you migrate to Vite, keep the same architecture and simply remap env vars.

## Architecture (Locked)

**HTTP API (Backend)**  
→ **API Service Layer** (frontend)  
→ **Adapters** (normalize snake_case → camelCase)  
→ **BackofficeContext** (frontend state)  
→ **EligibilityContext** (read-only eligibility)  
→ **UI components**

**Rule:** UI must never depend on raw API payloads. Contracts + adapters are the source of truth.

## Routing + Layout

- **Global shell**: `src/layouts/BackofficeLayout.jsx`
- **Backoffice routes** (render inside the global shell):
  - `/home`
  - `/welcome`
  - `/my-office`
  - `/solutions`
  - `/courses`
  - `/account-overview`
  - `/shop`
  - `/promotions`
- **Backoffice landing redirect**: `/backoffice/home` → `/home`

## State & Contexts

### BackofficeContext (Core)

- **File**: `src/context/BackofficeContext.jsx`
- **Provides**:
  - `user`
  - `training`
  - `performance`
  - `financials`
  - `impact`
  - `pag`
  - `children`
  - `rawEligibility` (snake_case payload from backend)
  - `derived` (computed in frontend, display-only)
  - `loading`, `error`

### EligibilityContext (Read-only)

- **Files**:
  - `src/context/EligibilityContext.jsx`
  - `src/context/EligibilityBootstrap.jsx`
- **Rule:** Eligibility is **not derived** in the UI; it is adapted from backend output.

## Contracts (Backend Response Shapes)

All contracts live in `src/contracts/` and describe the expected **snake_case** backend payloads:

- `user.contract.js`
- `training.contract.js`
- `performance.contract.js`
- `financials.contract.js`
- `impact.contract.js`
- `pag.contract.js`
- `children.contract.js`
- `eligibility.contract.js`

## Adapters (Normalization Layer)

All adapters live in `src/adapters/` and normalize **snake_case** backend payloads into the **camelCase** models used by the UI.

- `user.adapter.js`
- `training.adapter.js`
- `performance.adapter.js`
- `financials.adapter.js`
- `impact.adapter.js`
- `pag.adapter.js`
- `children.adapter.js`
- `eligibility.adapter.js`

## Eligibility UI-Locking (UI-only)

Eligibility is read via:

- `const eligibility = useEligibility();`

**Safety rule:** If eligibility is missing, the UI locks privileges (withdraw + bot purchase) until eligibility is available.

### Wallet (Withdraw)

- If `eligibility.canWithdraw === false`:
  - Disable Withdraw CTA
  - Show locked banner
  - If `eligibility.reasons.length > 0`, show bullet list of reasons

### Bot Purchases

- If `eligibility.canPurchaseBot === false`:
  - Disable Purchase CTA
  - Show `maxBotTier` if provided
  - Show reasons if provided

## Phase 5 Charts (Recharts)

Charts are implemented as reusable, pure components in:

- `src/components/analytics/`

Components:

- `ApatTrendChart`
- `LearningCompletionDonut`
- `PagScoreBarChart`
- `ImpactFunnel`
- `ChildProgressRadial`

Wiring:

- Home: APAT trend line chart
- My Office: completion donut, PAG bar chart, impact funnel, child radial charts

## Phase 6: Real API Integration

### API Client

- **File**: `src/services/apiClient.js`
- Uses axios + adds Bearer token from `localStorage.getItem("accessToken")`
- **No hardcoded URLs**

Set environment variable:

- `REACT_APP_API_BASE_URL=https://api.corepathimpact.com/api/v1`

### Backoffice API Service

- **File**: `src/services/backofficeApi.js`
- Endpoint:
  - `GET /vdp/backoffice/overview`

Backend must return:

```json
{
  "user": { },
  "training": { },
  "performance": { },
  "financials": { },
  "impact": { },
  "pag": { },
  "children": [ ],
  "eligibility": { }
}
```

…matching the Phase 3 contract files in `src/contracts/`.

### Loading & Error UI

Backoffice pages render inside `BackofficeLayout`. The layout displays:

- `FullPageLoader` when `loading === true`
- `ErrorState` when `error` is set

Files:

- `src/components/system/FullPageLoader.jsx`
- `src/components/system/ErrorState.jsx`

## Terminology

Deprecated UI terms were removed where applicable:

- **Sponsor** → **Impact Enabler**
- **Referral Link** → **Impact Transfer Link**


