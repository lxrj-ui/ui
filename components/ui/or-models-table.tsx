import * as React from "react";
import { cn } from "../../lib/utils";

/**
 * OrModelsTable — ตาราง OR-style ตัวกลาง (canonical)
 * แก้ที่นี่ที่เดียว ทุกจุดที่ใช้ (docs/table, /models) ได้เหมือนกันหมด:
 * - หัว 12px/muted/nowrap, ตัว 400 (ไม่หนา), ตัวเลข tabular-nums ชิดขวา
 * - layout="split": หัวกับข้อมูลแยกตาราง ใช้ colgroup เดียวกัน (docs pattern)
 * - layout="single": ตารางเดียว thead sticky (ใช้ใน /models)
 */

export type OrModelsColumn = {
  label: React.ReactNode;
  /** colgroup width เช่น "280px" (split เท่านั้นที่ต้องใช้) */
  width?: string;
  align?: "left" | "right";
  /** หัวแบบปุ่ม sort (visual) */
  sortable?: boolean;
  /** true = ลูกศร active, false = muted */
  sorted?: boolean;
};

export type OrModelsRow = { key: string; cells: React.ReactNode[] };

type OrModelsTableProps = {
  columns: OrModelsColumn[];
  rows: OrModelsRow[];
  /** โหนดมุมขวาหัวตาราง (เช่น <OrTableSettings />) */
  settings?: React.ReactNode;
  layout?: "split" | "single";
  /** single: offset top ของ thead sticky · split: override top ของ header wrapper */
  stickyTop?: string;
  /** ความกว้างขั้นต่ำ เช่น "900px" */
  minWidth?: string;
  density?: "compact" | "regular" | "comfortable";
  /** "lg" = ตัว 15px แบบ /models (default 14px ตาม --text-body) */
  size?: "md" | "lg";
  /** false = หัวไม่ sticky (ตาราง doc เล็กๆ กลางหน้า) */
  sticky?: boolean;
  className?: string;
};

function SortIcon({ active }: { active?: boolean }) {
  return active ? (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="or-table__sort-icon">
      <path d="M12 5v14m7-7-7 7-7-7" />
    </svg>
  ) : (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="or-table__sort-icon or-table__sort-icon--muted">
      <path d="m21 16-4 4-4-4M17 20V4m-14 4 4-4 4 4M7 4v16" />
    </svg>
  );
}

function HeadCell({ col }: { col: OrModelsColumn }) {
  const label = col.sortable ? (
    <button type="button" className="or-table__sort-button">
      <span>{col.label}</span>
      <SortIcon active={col.sorted} />
    </button>
  ) : (
    col.label
  );
  return (
    <th className={cn("or-table__header-cell", col.align === "right" ? "text-right tabular-nums" : "text-left")}>
      {label}
    </th>
  );
}

function BodyCell({ col, first, children }: { col?: OrModelsColumn; first?: boolean; children: React.ReactNode }) {
  return (
    <td
      className={
        first
          ? "px-4 py-4"
          : col?.align === "right"
            ? "px-3 py-4 whitespace-nowrap text-right tabular-nums"
            : "px-3 py-4"
      }
    >
      {children}
    </td>
  );
}

function BodyRows({ columns, rows, settings }: Pick<OrModelsTableProps, "columns" | "rows" | "settings">) {
  return (
    <>
      {rows.map((r) => (
        <tr
          key={r.key}
          className="border-b last:border-0 hover:bg-[var(--color-card-hover)] transition-colors"
          style={{ borderColor: "var(--color-border)" }}
        >
          {r.cells.map((c, i) => (
            <BodyCell key={i} col={columns[i]} first={i === 0}>
              {c}
            </BodyCell>
          ))}
          {settings !== undefined && <td className="px-4 py-4" />}
        </tr>
      ))}
    </>
  );
}

function SettingsHead({ settings }: { settings?: React.ReactNode }) {
  if (settings === undefined) return null;
  return <th className="or-table__header-cell or-table__settings-head w-[50px]">{settings}</th>;
}

export function OrModelsTable({
  columns,
  rows,
  settings,
  layout = "split",
  stickyTop,
  minWidth,
  density,
  size = "md",
  sticky = true,
  className,
}: OrModelsTableProps) {
  // fixed ต่อเมื่อทุกคอลัมน์มี width (docs) — ไม่มี width ใช้ auto
  // ไม่งั้น table-fixed จะแบ่งช่องเท่าๆ กันแล้วเนื้อหาล้นทับกัน
  const fixedLayout = columns.length > 0 && columns.every((c) => c.width);
  const tableCls = cn(
    "or-table w-full",
    fixedLayout && "table-fixed",
    !fixedLayout && "table-auto",
    density === "compact" && "or-table--density-compact",
    density === "regular" && "or-table--density-regular",
    density === "comfortable" && "or-table--density-comfortable",
    size === "lg" && "or-models-table--lg",
    className
  );
  const widths = (
    <>
      {columns.map((c, i) => (
        <col key={i} style={c.width ? { width: c.width } : undefined} />
      ))}
      {settings !== undefined && <col style={{ width: "50px" }} />}
    </>
  );
  const heads = (
    <>
      {columns.map((c, i) => (
        <HeadCell key={i} col={c} />
      ))}
      <SettingsHead settings={settings} />
    </>
  );

  if (layout === "single") {
    return (
      <table className={tableCls} style={minWidth ? { minWidth } : undefined}>
        <colgroup>{widths}</colgroup>
        {sticky ? (
          <thead
            className="sticky z-10"
            style={{
              top: stickyTop ?? 0,
              backgroundColor: "var(--color-card)",
              boxShadow: "inset 0 -1px 0 var(--color-border)",
            }}
          >
            <tr>{heads}</tr>
          </thead>
        ) : (
          <thead>
            <tr className="border-b" style={{ borderColor: "var(--color-border)" }}>
              {heads}
            </tr>
          </thead>
        )}
        <tbody>
          <BodyRows columns={columns} rows={rows} settings={settings} />
        </tbody>
      </table>
    );
  }

  const headerWrapCls = sticky ? "or-table-page-scroll__header" : undefined;
  const headerWrapStyle = sticky ? (stickyTop ? { top: stickyTop } : undefined) : { position: "static" as const };
  return (
    <div className="or-table-page-scroll">
      <div className={headerWrapCls} style={headerWrapStyle}>
        <table className={tableCls} data-table-has-sticky-header="true" style={minWidth ? { minWidth } : undefined}>
          <colgroup>{widths}</colgroup>
          <thead className="or-table__header or-table__header--sticky">
            <tr className="or-table__row border-b" style={{ borderColor: "var(--color-border)" }}>
              {heads}
            </tr>
          </thead>
        </table>
      </div>
      <div className="or-table-wrapper or-table-wrapper--page-scroll overflow-x-auto">
        <table className={tableCls} style={minWidth ? { minWidth } : undefined}>
          <colgroup>{widths}</colgroup>
          <tbody className="or-table__body">
            <BodyRows columns={columns} rows={rows} settings={settings} />
          </tbody>
        </table>
      </div>
    </div>
  );
}
