import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ExamplesPage() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8 bg-[#fcfcfe] min-h-screen">
      <div>
        <h1 className="text-2xl font-bold" style={{ fontFamily: "gordita" }}>LXRJ-UI — ตัวอย่าง shadcn/ui</h1>
        <p className="text-sm text-[rgba(3,8,10,0.69)]">ก็อปโครง templates/next-app มา แล้วทำตัวอย่างของเรา</p>
      </div>

      <section className="space-y-3">
        <h2 className="font-semibold">Buttons — Base UI + Tailwind + tokens</h2>
        <div className="flex flex-wrap gap-3">
          <Button>Get API Key</Button>
          <Button variant="outline">Discover Models</Button>
          <Button variant="ghost">Ghost</Button>
          <Button size="sm">Small</Button>
          <Button size="lg">Large</Button>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-4">
        <Card><CardHeader><CardTitle>Higher Availability</CardTitle><CardDescription>Fall back to other providers when one goes down.</CardDescription></CardHeader></Card>
        <Card><CardHeader><CardTitle>Price and Performance</CardTitle><CardDescription>Runs at the edge for minimal latency.</CardDescription></CardHeader></Card>
        <Card><CardHeader><CardTitle>Custom Data Policies</CardTitle><CardDescription>Ensure prompts only go to models you trust.</CardDescription></CardHeader></Card>
      </section>

      <section className="flex gap-2">
        <Badge>FREE</Badge>
        <Badge className="bg-violet-50 text-violet-700 border-violet-200">50% off</Badge>
      </section>
    </div>
  );
}
