# PostHog Funnel Tracking (CV Toolkit)

Tai lieu nay mo ta funnel tracking da duoc gan trong CV Toolkit de team product/marketing co the xem va dung ngay.

## 1) Muc tieu funnel

Do ty le chuyen doi theo hanh trinh nguoi dung:

1. Vao landing
2. Bam Start
3. Chon role
4. Vao workspace
5. Tao bullet
6. Xem man hinh finish
7. Restart (neu co)

## 2) Env can thiet

Dat trong `.env`:

```env
VITE_POSTHOG_KEY=phc_xxx
VITE_POSTHOG_HOST=https://us.i.posthog.com
```

## 3) Event funnel da track 
 
Nguon dinh nghia: `src/utils/posthogFunnel.ts`

- `funnel_landing_viewed`
  - Khi app load lan dau.
  - Properties: none.

- `funnel_start_clicked`
  - Khi user bam nut Start o welcome screen.
  - Properties: none.

- `funnel_role_selected`
  - Khi user chon role o step 1.
  - Properties:
    - `role: string`

- `funnel_workspace_viewed`
  - Khi vao workspace (screen 3).
  - Properties:
    - `role: string` (`"unknown"` neu null)

- `funnel_bullet_generated`
  - Khi tao bullet xong va chuyen sang finish.
  - Properties:
    - `role: string`
    - `level: string` (`starter | developing | ready`)

- `funnel_finish_viewed`
  - Khi man hinh finish duoc hien.
  - Properties:
    - `role: string`
    - `level: string`

- `funnel_restart_clicked`
  - Khi user bam restart.
  - Properties:
    - `role: string`

## 4) Mapping vao code

- Khoi tao PostHog:
  - `src/utils/posthog.ts`
  - Goi `initPostHog()` trong `src/main.tsx`

- Wrapper analytics:
  - `src/utils/analytics.ts`
  - `trackEvent()` hien gui song song sang PostHog

- Diem ban funnel:
  - `src/app/App.tsx`
    - Landing viewed
    - Start clicked
    - Role selected
    - Workspace viewed
    - Bullet generated
    - Finish viewed
    - Restart clicked

## 5) Cach dung trong PostHog

Tao Funnel trong PostHog theo thu tu:

1. `funnel_landing_viewed`
2. `funnel_start_clicked`
3. `funnel_role_selected`
4. `funnel_workspace_viewed`
5. `funnel_bullet_generated`
6. `funnel_finish_viewed`

Filter goi y:

- Theo role: `role = "AI Product Manager"` (hoac role bat ky)
- Theo level: `level = "developing"`

Breakdown goi y:

- Breakdown theo `role` o step 3+
- Breakdown theo `level` o step 5+

## 6) Naming convention

- Prefix funnel event bang `funnel_` de de loc.
- Properties dung key ngan, on dinh: `role`, `level`.
- Neu doi ten event, phai cap nhat trong:
  - `src/utils/posthogFunnel.ts`
  - Dashboard PostHog hien tai

## 7) Ghi chu van hanh

- Neu khong co `VITE_POSTHOG_KEY`, app van chay binh thuong, chi khong gui event.
- `capture_pageview` dang bat trong `posthog.init`, nen PostHog van co pageview co ban ben canh funnel event custom.
