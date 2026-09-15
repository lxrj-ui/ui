import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell, TableCaption, TableEmpty } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { CopyPageButton } from "@/components/copy-page-button";
import { Pagination } from "@/components/pagination";
import { OrTableSettings } from "@/components/or-table-settings";
import { TableShellDemo } from "./shell-demo";

function AnatomyChip({ n, className }: { n: number; className?: string }) {
  return (
    <span
      aria-hidden
      className={"absolute z-10 grid size-5 place-items-center rounded-full text-[11px] font-semibold text-white " + (className ?? "")}
      style={{ backgroundColor: "var(--color-primary)" }}
    >
      {n}
    </span>
  );
}

export const metadata = { title: "Table — LXRJ-UI" };

const invoices = [
  { invoice: "INV001", status: "Paid", method: "Credit Card", amount: "$250.00" },
  { invoice: "INV002", status: "Pending", method: "PayPal", amount: "$150.00" },
  { invoice: "INV003", status: "Unpaid", method: "Bank Transfer", amount: "$350.00" },
  { invoice: "INV004", status: "Paid", method: "Credit Card", amount: "$450.00" },
];

export default function TablePage() {
  return (
    <div>
      <div className="flex items-start justify-between gap-4 mb-3">
        <Badge className="mt-1">Data</Badge>
        <CopyPageButton text="Table — LXRJ-UI" />
      </div>
      <h1 className="text-4xl font-bold tracking-tight mb-2" style={{ fontFamily: "var(--font-brand)", color: "var(--color-foreground)" }}>Table</h1>
      <p className="text-sm mb-8" style={{ color: "var(--color-muted-foreground)" }}>Data tables with row states, numeric alignment, and truncation. Hover → card-hover, selected → selected-bg.</p>

      <h2 className="text-base font-semibold mb-3">Anatomy</h2>
      <div className="relative mb-6">
        <div className="overflow-auto rounded-lg border bg-card" style={{ borderColor: "var(--color-border)" }}>
          <div className="relative w-full min-w-[900px]">
            <div className="or-table-page-scroll">
              <div className="or-table-page-scroll__header">
                <table className="or-table or-table--density-regular table-fixed w-full min-w-[900px]" data-table-has-sticky-header="true">
                  <colgroup><col style={{ width: "280px" }} /><col style={{ width: "140px" }} /><col style={{ width: "110px" }} /><col style={{ width: "110px" }} /><col style={{ width: "130px" }} /><col style={{ width: "100px" }} /><col style={{ width: "50px" }} /></colgroup>
                  <thead className="or-table__header or-table__header--sticky">
                    <tr className="or-table__row border-b" style={{ borderColor: "var(--color-border)" }}>
                      <th className="or-table__header-cell text-left">Model Name</th>
                      <th className="or-table__header-cell text-right tabular-nums"><button type="button" className="or-table__sort-button"><span>Weekly Tokens</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="or-table__sort-icon or-table__sort-icon--muted"><path d="m21 16-4 4-4-4M17 20V4m-14 4 4-4 4 4M7 4v16" /></svg></button></th>
                      <th className="or-table__header-cell text-right tabular-nums"><button type="button" className="or-table__sort-button"><span>Input</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="or-table__sort-icon or-table__sort-icon--muted"><path d="m21 16-4 4-4-4M17 20V4m-14 4 4-4 4 4M7 4v16" /></svg></button></th>
                      <th className="or-table__header-cell text-right tabular-nums">Output</th>
                      <th className="or-table__header-cell text-right tabular-nums">Context</th>
                      <th className="or-table__header-cell text-right tabular-nums"><button type="button" className="or-table__sort-button"><span>Released</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="or-table__sort-icon"><path d="M12 5v14m7-7-7 7-7-7" /></svg></button></th>
                      <th className="or-table__header-cell or-table__settings-head w-[50px]"><OrTableSettings /></th>
                    </tr>
                  </thead>
                </table>
              </div>
              <div className="or-table-wrapper or-table-wrapper--page-scroll overflow-x-auto">
                <table className="or-table table-fixed w-full min-w-[900px]">
                  <colgroup><col style={{ width: "280px" }} /><col style={{ width: "140px" }} /><col style={{ width: "110px" }} /><col style={{ width: "110px" }} /><col style={{ width: "130px" }} /><col style={{ width: "100px" }} /><col style={{ width: "50px" }} /></colgroup>
                  <tbody className="or-table__body">
                    {[
                      { name: "Tencent: Hy4 preview", tokens: "3.49T", input: "$0.834", output: "$2.501", ctx: "1,048,576", ago: "3d ago" },
                      { name: "Alibaba: Wan 3.0 Prime", tokens: "—", input: "from $0.068", output: "—", ctx: "—", ago: "3d ago" },
                      { name: "Qwen: Qwen3.8 Flash", tokens: "85.5B", input: "$0.15", output: "$0.47", ctx: "1,000,000", ago: "4d ago" },
                      { name: "Meta: Muse Spark 1.2", tokens: "264B", input: "$0.10", output: "$0.20", ctx: "1,048,576", ago: "1w ago" },
                    ].map((r) => (
                      <tr key={r.name} className="border-b last:border-0 hover:bg-[var(--color-card-hover)] transition-colors" style={{ borderColor: "var(--color-border)" }}>
                        <td className="px-4 py-3 text-sm"><span className="truncate">{r.name}</span></td>
                        <td className="px-4 py-3 tabular-nums text-right text-sm">{r.tokens}</td>
                        <td className="px-4 py-3 tabular-nums text-right text-sm">{r.input}</td>
                        <td className="px-4 py-3 tabular-nums text-right text-sm">{r.output}</td>
                        <td className="px-4 py-3 tabular-nums text-right text-sm">{r.ctx}</td>
                        <td className="px-4 py-3 tabular-nums text-right text-sm">{r.ago}</td>
                        <td className="px-4 py-3"></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <AnatomyChip n={1} className="top-2 left-2" />
        <AnatomyChip n={2} className="top-2 left-[calc(280px+140px+110px+110px+130px+100px+20px)]" />
        <AnatomyChip n={3} className="top-1/2 left-2" />
        <AnatomyChip n={4} className="top-2 right-2" />
      </div>
      <ol className="mb-10 space-y-1.5 text-sm" style={{ color: "var(--color-muted-foreground)" }}>
        <li><span className="font-semibold" style={{ color: "var(--color-foreground)" }}>1 — Table wrapper</span> · คอนเทนเนอร์ scroll ได้ <code className="font-mono text-xs">overflow-auto rounded-lg border bg-card</code></li>
        <li><span className="font-semibold" style={{ color: "var(--color-foreground)" }}>2 — Table header</span> · แถบหัวตาราง sticky ผ่าน <code className="font-mono text-xs">data-table-has-sticky-header</code> + <code className="font-mono text-xs">or-table__header--sticky</code></li>
        <li><span className="font-semibold" style={{ color: "var(--color-foreground)" }}>3 — Table body</span> · แถวข้อมูลที่ scroll ได้ <code className="font-mono text-xs">or-table-wrapper--page-scroll overflow-x-auto</code></li>
        <li><span className="font-semibold" style={{ color: "var(--color-foreground)" }}>4 — Column sorting</span> · หัวคอลัมน์เป็นปุ่ม sortable ผ่าน <code className="font-mono text-xs">or-table__sort-button</code></li>
      </ol>

      <h2 className="text-base font-semibold mb-3">Main — OpenRouter models (ระบบหลัก)</h2>
      <p className="text-sm mb-3" style={{ color: "var(--color-muted-foreground)" }}>ตารางหลักทั้งระบบ — sticky header, horizontal page-scroll, sortable columns, tabular-nums ขวา, grid rows ตรง https://openrouter.ai/models</p>
      <div className="mb-10 overflow-auto rounded-lg border bg-card" style={{ borderColor: "var(--color-border)" }}>
        <div className="relative w-full min-w-[900px]">
          <div className="or-table-page-scroll">
            <div className="or-table-page-scroll__header">
              <table className="or-table or-table--density-regular table-fixed w-full min-w-[900px]" data-table-has-sticky-header="true">
                <colgroup><col style={{ width: "280px" }} /><col style={{ width: "140px" }} /><col style={{ width: "110px" }} /><col style={{ width: "110px" }} /><col style={{ width: "130px" }} /><col style={{ width: "100px" }} /><col style={{ width: "50px" }} /></colgroup>
                <thead className="or-table__header or-table__header--sticky">
                  <tr className="or-table__row border-b" style={{ borderColor: "var(--color-border)" }}>
                    <th className="or-table__header-cell text-left">Model Name</th>
                    <th className="or-table__header-cell text-right tabular-nums"><button type="button" className="or-table__sort-button"><span>Weekly Tokens</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="or-table__sort-icon or-table__sort-icon--muted"><path d="m21 16-4 4-4-4M17 20V4m-14 4 4-4 4 4M7 4v16" /></svg></button></th>
                    <th className="or-table__header-cell text-right tabular-nums"><button type="button" className="or-table__sort-button"><span>Input</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="or-table__sort-icon or-table__sort-icon--muted"><path d="m21 16-4 4-4-4M17 20V4m-14 4 4-4 4 4M7 4v16" /></svg></button></th>
                    <th className="or-table__header-cell text-right tabular-nums">Output</th>
                    <th className="or-table__header-cell text-right tabular-nums">Context</th>
                    <th className="or-table__header-cell text-right tabular-nums"><button type="button" className="or-table__sort-button"><span>Released</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="or-table__sort-icon"><path d="M12 5v14m7-7-7 7-7-7" /></svg></button></th>
                    <th className="or-table__header-cell or-table__settings-head w-[50px]"><OrTableSettings /></th>
                  </tr>
                </thead>
              </table>
            </div>
            <div className="or-table-wrapper or-table-wrapper--page-scroll overflow-x-auto">
              <table className="or-table table-fixed w-full min-w-[900px]">
                <colgroup><col style={{ width: "280px" }} /><col style={{ width: "140px" }} /><col style={{ width: "110px" }} /><col style={{ width: "110px" }} /><col style={{ width: "130px" }} /><col style={{ width: "100px" }} /><col style={{ width: "50px" }} /></colgroup>
                <tbody className="or-table__body">
                  {[
                    { name: "Tencent: Hy4 preview", tokens: "3.49T", input: "$0.834", output: "$2.501", ctx: "1,048,576", ago: "3d ago" },
                    { name: "Alibaba: Wan 3.0 Prime", tokens: "—", input: "from $0.068", output: "—", ctx: "—", ago: "3d ago" },
                    { name: "Qwen: Qwen3.8 Flash", tokens: "85.5B", input: "$0.15", output: "$0.47", ctx: "1,000,000", ago: "4d ago" },
                    { name: "Meta: Muse Spark 1.2", tokens: "264B", input: "$0.10", output: "$0.20", ctx: "1,048,576", ago: "1w ago" },
                  ].map((r) => (
                    <tr key={r.name} className="border-b last:border-0 hover:bg-[var(--color-card-hover)] transition-colors" style={{ borderColor: "var(--color-border)" }}>
                      <td className="px-4 py-3 text-sm"><span className="truncate">{r.name}</span></td>
                      <td className="px-4 py-3 tabular-nums text-right text-sm">{r.tokens}</td>
                      <td className="px-4 py-3 tabular-nums text-right text-sm">{r.input}</td>
                      <td className="px-4 py-3 tabular-nums text-right text-sm">{r.output}</td>
                      <td className="px-4 py-3 tabular-nums text-right text-sm">{r.ctx}</td>
                      <td className="px-4 py-3 tabular-nums text-right text-sm">{r.ago}</td>
                      <td className="px-4 py-3"></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-base font-semibold mb-3">Simple — invoices</h2>
      <div className="mb-10 overflow-hidden rounded-lg border bg-card" style={{ borderColor: "var(--color-border)" }}>
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Invoice</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Method</TableHead>
              <TableHead numeric>Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((inv) => (
              <TableRow key={inv.invoice}>
                <TableCell className="font-medium">{inv.invoice}</TableCell>
                <TableCell><Badge variant={inv.status === "Paid" ? "positive" : inv.status === "Pending" ? "warning" : "negative"}>{inv.status}</Badge></TableCell>
                <TableCell>{inv.method}</TableCell>
                <TableCell numeric>{inv.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <h2 className="text-base font-semibold mb-3">Empty</h2>
      <div className="mb-10 overflow-hidden rounded-lg border bg-card" style={{ borderColor: "var(--color-border)" }}>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableEmpty colSpan={2}>No users found.</TableEmpty>
          </TableBody>
        </Table>
      </div>

      <h2 className="text-base font-semibold mb-3">DataTableShell — แบบแอป (verified)</h2>
      <p className="text-sm mb-3" style={{ color: "var(--color-muted-foreground)" }}>เลย์เอาต์แบบแอป — กรอบสูงเท่าพื้นที่จอที่เหลือ, หัวตารางนิ่งเหนือข้อมูลเสมอ (ข้อมูลไม่ลอดหลังหัว), ข้อมูล scroll ภายในกรอบ (scrollbar ซ่อน) — ตามที่ใช้จริงใน /demo</p>

      <div className="mb-4">
        <TableShellDemo />
      </div>

      <h3 className="text-sm font-semibold mb-2">โครงสร้าง</h3>
      <pre className="rounded-md border p-4 text-xs font-mono leading-6 mb-4 overflow-x-auto" style={{ backgroundColor: "var(--color-card)", borderColor: "var(--color-border)", fontFamily: "var(--font-mono)" }}>
{`จอ (ไม่มี page scroll)
├─ controls block  ← ส่ง controlsRef เข้ามาให้ shell วัดขอบล่าง
└─ DataTableShell (สูง = 100dvh − ขอบล่าง controls − 16px)
    ├─ header  ← static นิ่งเหนือข้อมูลตลอด
    └─ พื้นที่ข้อมูล (overflow-y-auto, ซ่อน scrollbar) ← scroll อยู่แค่ในนี้`}
      </pre>

      <h3 className="text-sm font-semibold mb-2">Props</h3>
      <div className="mb-4 overflow-hidden rounded-lg border text-sm" style={{ borderColor: "var(--color-border)" }}>
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b text-left text-xs" style={{ borderColor: "var(--color-border)", color: "var(--color-muted-foreground)" }}>
              <th className="px-4 py-2 font-medium">Prop</th>
              <th className="px-4 py-2 font-medium">ค่าเริ่มต้น</th>
              <th className="px-4 py-2 font-medium">คำอธิบาย</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b" style={{ borderColor: "var(--color-border)" }}>
              <td className="px-4 py-2 font-mono text-xs">controlsRef</td>
              <td className="px-4 py-2">—</td>
              <td className="px-4 py-2" style={{ color: "var(--color-muted-foreground)" }}>Ref ของ controls block ด้านบน — shell วัดขอบล่างด้วย ResizeObserver เพื่อคำนวณความสูง</td>
            </tr>
            <tr className="border-b" style={{ borderColor: "var(--color-border)" }}>
              <td className="px-4 py-2 font-mono text-xs">header</td>
              <td className="px-4 py-2">—</td>
              <td className="px-4 py-2" style={{ color: "var(--color-muted-foreground)" }}>&lt;table&gt; ของหัวตาราง (ตารางแยกจากข้อมูล — คอลัมน์ตรงกันด้วย colgroup เดียวกัน)</td>
            </tr>
            <tr className="border-b" style={{ borderColor: "var(--color-border)" }}>
              <td className="px-4 py-2 font-mono text-xs">children</td>
              <td className="px-4 py-2">—</td>
              <td className="px-4 py-2" style={{ color: "var(--color-muted-foreground)" }}>&lt;table&gt; ของแถวข้อมูล (ไม่ต้องมี thead)</td>
            </tr>
            <tr>
              <td className="px-4 py-2 font-mono text-xs">fillParent</td>
              <td className="px-4 py-2 font-mono text-xs">false</td>
              <td className="px-4 py-2" style={{ color: "var(--color-muted-foreground)" }}>true = สูงเต็ม parent (flex-1) แทนสูตร 100dvh — ใช้เมื่อฝังใน container ที่กำหนดความสูงเอง</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="text-sm font-semibold mb-2">กฎที่ verify แล้ว (ห้ามลืม)</h3>
      <ol className="mb-10 space-y-1.5 text-sm list-decimal list-inside" style={{ color: "var(--color-muted-foreground)" }}>
        <li>ตารางใช้ <code className="font-mono text-xs">table-fixed + colgroup</code> (คอลัมน์ตัวเลข % / ชื่อยืดหด) — เนื้อหาเกินคอลัมน์ให้ <code className="font-mono text-xs">truncate</code> ห้ามล้นกรอบ</li>
        <li>ห้าม <code className="font-mono text-xs">overflow</code> บนหัวตารางหรือ ancestor ที่ทำให้ layout เลื่อน — การ scroll มีแค่พื้นที่ข้อมูลเท่านั้น</li>
        <li>เส้นคั่นใต้หัว = <code className="font-mono text-xs">inset 0 -1px 0 var(--color-border)</code> บน th เท่านั้น (เบราว์เซอร์ไม่วาด box-shadow บน thead) — ห้ามเส้นทึบสีขาวยืดใต้หัว จะกินข้อความแถว</li>
        <li>มุมโค้ง: บนที่ header wrapper, ล่างที่ <code className="font-mono text-xs">td แถวสุดท้าย</code> — ห้ามใช้ overflow-hidden ครอบหัวกับข้อมูลชั้นเดียว</li>
        <li>ซ่อน scrollbar ด้วย <code className="font-mono text-xs">[scrollbar-width:none] [&amp;::-webkit-scrollbar]:hidden</code> ทั้ง tabs และพื้นที่ข้อมูล</li>
        <li>ตัวเลขชิดขวา <code className="font-mono text-xs">tabular-nums</code>, ค่าว่างใช้ "—", วันที่ใช้สี muted</li>
      </ol>

      <h2 className="text-base font-semibold mb-3">Code</h2>
      <pre className="rounded-md border p-4 text-xs overflow-x-auto font-mono leading-6 mb-6" style={{ backgroundColor: "var(--color-card)", borderColor: "var(--color-border)", fontFamily: "var(--font-mono)" }}>
{`import { DataTableShell } from "@/components/ui/data-table-shell"

const controlsRef = useRef<HTMLDivElement>(null)

<div ref={controlsRef} className="sticky top-0 z-20 bg-background">
  {/* controls block — title / search / tabs */}
</div>

<DataTableShell controlsRef={controlsRef} header={
  <table className="w-full table-fixed border-separate border-spacing-0 text-sm">
    <colgroup><col /><col className="w-[9%]" />…</colgroup>
    <thead><tr>
      <th className="px-4 py-2.5 font-medium" style={thSticky}>Model Name</th>
      <th className="truncate px-3 py-2.5 font-medium text-right" style={thSticky}>Input</th>
    </tr></thead>
  </table>
}>
  <table className="w-full table-fixed border-separate border-spacing-0 text-sm">
    <colgroup>{/* เดียวกับหัว */}</colgroup>
    <tbody>{/* แถวข้อมูล — ไม่ต้องมี thead */}</tbody>
  </table>
</DataTableShell>`}
      </pre>
      <pre className="rounded-md border p-4 text-xs overflow-x-auto font-mono leading-6" style={{ backgroundColor: "var(--color-card)", borderColor: "var(--color-border)", fontFamily: "var(--font-mono)" }}>
{`import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table"

<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Name</TableHead>
      <TableHead numeric>Amount</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>Item</TableCell>
      <TableCell numeric>$100</TableCell>
    </TableRow>
  </TableBody>
</Table>`}
      </pre>

      <Pagination prev={{ href: "/docs/components/form/helper-text", label: "HelperText" }} next={{ href: "/docs/components/data/skeleton", label: "Skeleton" }} />
    </div>
  );
}
