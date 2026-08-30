import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell, TableCaption, TableEmpty } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { CopyPageButton } from "@/components/copy-page-button";
import { Pagination } from "@/components/pagination";

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

      <h2 className="text-base font-semibold mb-3">Default</h2>
      <div className="mb-10">
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
      <div className="mb-10">
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

      <h2 className="text-base font-semibold mb-3">Code</h2>
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
