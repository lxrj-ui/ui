# bug-ui.md — สิ่งที่ BCIG ต้องการจาก lxrj-ui

> รายงานโดยทีม BCIG (ผู้ใช้ UI) — จากการเอา lxrj-ui ไปใช้จริงใน `BCIG/apps/web`
> ผ่าน vendor copy + `scripts/sync-ui.ps1` (robocopy /MIR: `lxrj-ui/components` → `bcig/apps/web/vendor/lxrj-ui/components`)
> อัปเดต: 2026-08-30

---

## ✅ แก้ไว้แล้วใน repo นี้ (รอ review จากเจ้าของ)

| ไฟล์ | สิ่งที่แก้ | เหตุผล |
|---|---|---|
| `components/ui/select.tsx` | `SelectValue` แสดง**ค่าที่เลือก** (registry + useSyncExternalStore), เพิ่ม export `SelectItem` (alias ของ SelectOption), `SelectLabel` | เดิมโชว์แต่ placeholder — ใช้ในฟอร์มจริงไม่ได้ |
| `components/ui/dialog.tsx` | `DialogContent` รับ `showCloseButton?: boolean` | ปุ่ม X ทับเนื้อหาใน command palette |
| `components/ui/checkbox.tsx` | รองรับ `checked?: boolean \| "indeterminate"` (แถบขีดกลาง) | ตาราง select-all ใช้ indeterminate |
| `components/ui/dropdown-menu.tsx` | เพิ่ม `align?: "start"\|"center"\|"end"` ให้ Content (ผ่าน Positioner), z-index `z-50` → `z-[70]` | z-50 ชนกับ sticky header/banner — เมนูโดนบัง |
| `components/ui/switch.tsx` | `InputHTMLAttributes<HTMLInputElement>` + `forwardRef<HTMLInputElement>` → **`ButtonHTMLAttributes<HTMLButtonElement>` + `forwardRef<HTMLButtonElement>`** (ref cast ออก) | ตัว component render `<button>` แต่ type เป็น input → `onClick` type ไม่ตรง (TS2322) |
| `components/ui/badge.tsx`, `calendar.tsx`, `switch.tsx` | แทน `bg-[var(--color-x)]/12` ด้วย `bg-[color-mix(in_srgb,var(--color-x)_12%,transparent)]` | **Tailwind สร้าง CSS พัง** กับ arbitrary value + alpha modifier — เคยทำ build crash ทั้งโปรเจ็ค |
| `components/**` ทุกไฟล์ | import `@/lib/utils` → `../../lib/utils` (relative) | `@/` alias ชี้ไป repo ผู้ใช้ — ต้อง relative จึงนำไปใช้เป็น package ได้ |
| `components/ui/collapsible.tsx` ใหม่, `dropdown-menu.tsx` ใหม่, `sheet.tsx` ใหม่, `navigation-menu.tsx` ใหม่ | เขียนเพิ่ม (Base UI) เพราะผู้ใช้ต้องใช้ | ขอบเขต: Collapsible open/onOpenChange · DropdownMenu Content(align, sideOffset)/Item(variant destructive) · Sheet side left/right + showCloseButton · NavigationMenu inline content (ไป้ไว้: ต้องมี `relative z-50` ที่แถบ nav ไม่งั้นโดนทับ + attr เป็น `data-[open]` ไม่ใช่ `data-[state=open]`) |

> ⚠️ ทั้ง 4 ตัวใหม่ + ทุก fix ข้างบน **ยังเป็นดราฟท์ของ BCIG — โปรด review/รับเป็นของทางการ** แล้วคงรูปแบบ relative imports ไว้

---

## 🐛 บั๊ก/กฎที่ต้องระวัง (สำหรับ component ใหม่ทั้งหมด)

1. **ห้ามใช้ alpha modifier กับ arbitrary value** — `bg-[var(--color-x)]/12` → CSS พัง (Unexpected token)
   ใช้: `bg-[color-mix(in_srgb,var(--color-x)_12%,transparent)]`
2. **tsconfig paths ห้ามใช้ใน components/** — `@/lib/utils` ทำให้ consume ผ่าน vendor/link ไม่ได้ ใช้ relative เสมอ
3. **ลงชื่อ dep ที่ component ใช้** — ตอนนี้ใช้ `tw-animate-css` classes (`animate-in`, `data-[state=open]:animate-out`, `accordion-up/down`) แต่ package.json ไม่มี — ผู้ใช้ต้องติดตั้งเอง ควรประกาศ (devDep) หรือเอกสารไว้
4. **Animations ต้องการ `tw-animate-css`** ฝั่งผู้ใช้ — ถ้าเปลี่ยนมาใช้ keyframes ในตัว จะสะดวกกว่า

---

## ➕ สิ่งที่อยากให้เพิ่ม (ตามลำดับความเร่งด่วน)

| # | รายการ | รายละเอียด |
|---|---|---|
| 1 | **Select: `disabled`** | `Select disabled` + Trigger `disabled/aria-disabled` (BCIG ใช้ pointer-events-none แทนชั่วคราว) |
| 2 | **NavigationMenu: hover intent + data-[open]** | ยืนยัน attr `data-[open]` ให้ตรงทั้งระบบ + ตัวอย่าง account dropdown (content ชิดขวาใต้ trigger) |
| 3 | **Tooltip** | ยังไม่มี — ผู้ใช้เริ่มถามหา |
| 4 | **Breadcrumb** | ยังไม่มี |
| 5 | ** Gordita font** | ยังไม่มี woff2 ใน repo (ตกลงใช้ Jakarta fallback ไปก่อน ✓) |
| 6 | **Exports สำหรับใช้เป็น package** | ประกาศ `exports` map ใน package.json + peerDeps (react, react-dom, radix-ui/@base-ui, lucide-react, clsx, tailwind-merge, cva) เพื่อรองรับ `link:`/git dep นอกจาก vendor copy |

---

## 📦 รูปแบบการนำไปใช้ (ปัจจุบัน)

```
BCIG/scripts/sync-ui.ps1   (robocopy /MIR)
  lxrj-ui/components → bcig/apps/web/vendor/lxrj-ui/components
  lxrj-ui/lib        → bcig/apps/web/vendor/lxrj-ui/lib
```

- ผู้ใช้ import: `lxrj-ui/components/ui/button` (tsconfig path → vendor)
- next.config: `transpilePackages` ไม่จำเป็นแล้ว (เป็นไฟล์ในโปรเจ็ค)
- Tailwind: `@source "../../../lxrj-ui/components"` ใน globals.css
- **Tokens สี**: ผู้ใช้เก็บที่ `app/globals.css` ของตัวเอง (มี compat layer) — ถ้า DESIGN.md เปลี่ยน palette แจ้งผู้ใช้ด้วย

---

## 📋 สถานะการใช้งานจริงที่ BCIG (ref: apps/web)

- ใช้จริง 26 components จาก 69 จุด import
- ที่ใช้หนัก: button, badge, card, table, select, dialog, dropdown-menu, input, separator
- หน้าที่ผ่านการใช้: users, roles, org, database, system, notifications, profile, preferences, api-keys
