"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input, Label, HelperText } from "@/components/ui/input";
import { Avatar, AvatarGroup } from "@/components/ui/avatar";
import { Switch } from "@/components/ui/switch";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { Separator } from "@/components/ui/separator";
import { Callout } from "@/components/callout";
import { MainTopbar } from "@/components/main-topbar";
import { Copy } from "lucide-react";

const apiKeys = [
  { name: "Production", key: "sk-or-v1-abc...xyz", created: "2024-01-15", lastUsed: "2 hours ago", requests: "12,450", status: "active" as const },
  { name: "Development", key: "sk-or-v1-def...uvw", created: "2024-02-20", lastUsed: "5 min ago", requests: "8,320", status: "active" as const },
  { name: "Testing", key: "sk-or-v1-ghi...rst", created: "2024-03-10", lastUsed: "3 days ago", requests: "1,200", status: "active" as const },
  { name: "Legacy", key: "sk-or-v1-jkl...opq", created: "2023-11-01", lastUsed: "2 months ago", requests: "45,000", status: "revoked" as const },
];

const usageHistory = [
  { date: "Today", requests: "1,234", tokens: "2.4M", cost: "$12.50" },
  { date: "Yesterday", requests: "3,567", tokens: "8.1M", cost: "$34.20" },
  { date: "Aug 26", requests: "2,890", tokens: "5.6M", cost: "$22.80" },
  { date: "Aug 25", requests: "4,123", tokens: "9.2M", cost: "$41.50" },
  { date: "Aug 24", requests: "1,890", tokens: "3.8M", cost: "$16.30" },
];

const models = [
  { name: "GPT-4o", requests: "4,500", tokens: "8.2M", cost: "$32.40" },
  { name: "Claude 3.5 Sonnet", requests: "3,200", tokens: "6.1M", cost: "$28.60" },
  { name: "Gemini 1.5 Pro", requests: "1,800", tokens: "3.4M", cost: "$12.50" },
  { name: "Llama 3.1 405B", requests: "900", tokens: "1.6M", cost: "$3.20" },
];

export default function ProfilePage() {
  const [showKey, setShowKey] = useState<string | null>(null);

  return (
    <div className="min-h-screen" style={{ fontFamily: "var(--font-sans)", background: "var(--color-background)", color: "var(--color-foreground)" }}>
      {/* Topbar กลางทั้งระบบ (components/main-topbar) */}
      <MainTopbar />

      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-10">
          {/* Sidebar */}
          <aside className="space-y-6">
            {/* User Card */}
            <div className="flex items-center gap-4">
              <Avatar size="xl" fallback="JD" />
              <div>
                <h1 className="text-xl font-bold">John Doe</h1>
                <p className="text-sm" style={{ color: "var(--color-muted-foreground)" }}>john@example.com</p>
                <Badge variant="positive" className="mt-1 text-xs">Pro</Badge>
              </div>
            </div>

            <Separator />

            {/* Stats */}
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span style={{ color: "var(--color-muted-foreground)" }}>Balance</span>
                <span className="font-semibold">$245.80</span>
              </div>
              <div className="flex justify-between text-sm">
                <span style={{ color: "var(--color-muted-foreground)" }}>Total Spent</span>
                <span className="font-semibold">$1,842.30</span>
              </div>
              <div className="flex justify-between text-sm">
                <span style={{ color: "var(--color-muted-foreground)" }}>Requests</span>
                <span className="font-semibold">67,890</span>
              </div>
              <div className="flex justify-between text-sm">
                <span style={{ color: "var(--color-muted-foreground)" }}>API Keys</span>
                <span className="font-semibold">4</span>
              </div>
            </div>

            <Button className="w-full" variant="outline">Add Credits</Button>

            <Separator />

            {/* Nav */}
            <nav className="space-y-1">
              {[
                { label: "API Keys", href: "#keys" },
                { label: "Usage", href: "#usage" },
                { label: "Models", href: "#models" },
                { label: "Settings", href: "#settings" },
              ].map((item) => (
                <a key={item.label} href={item.href} className="block px-3 py-2 rounded-md text-sm font-medium hover:bg-[var(--color-card-hover)] transition-colors" style={{ color: "var(--color-muted-foreground)" }}>
                  {item.label}
                </a>
              ))}
            </nav>
          </aside>

          {/* Main */}
          <main className="space-y-10">
            {/* API Keys */}
            <section id="keys">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-base font-semibold">API Keys</h2>
                <Button size="sm">Create Key</Button>
              </div>

              <div className="mb-4">
                <Callout variant="info">
                  Keep your API keys secret. If a key is compromised, revoke it immediately and create a new one.
                </Callout>
              </div>

              <div className="rounded-xl border overflow-hidden" style={{ borderColor: "var(--color-border)" }}>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Key</TableHead>
                      <TableHead>Last Used</TableHead>
                      <TableHead numeric>Requests</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {apiKeys.map((k) => (
                      <TableRow key={k.name}>
                        <TableCell className="font-medium">{k.name}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2 font-mono text-xs" style={{ color: "var(--color-text-faint)" }}>
                            {showKey === k.name ? k.key : "••••••••••••••••"}
                            <button onClick={() => setShowKey(showKey === k.name ? null : k.name)} className="hover:opacity-80">
                              <Copy size={12} />
                            </button>
                          </div>
                        </TableCell>
                        <TableCell className="text-sm" style={{ color: "var(--color-muted-foreground)" }}>{k.lastUsed}</TableCell>
                        <TableCell numeric>{k.requests}</TableCell>
                        <TableCell>
                          <Badge variant={k.status === "active" ? "positive" : "negative"}>{k.status}</Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button size="sm" variant="ghost">Edit</Button>
                          <Button size="sm" variant="ghost" className="text-[var(--color-negative-text)]">Revoke</Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </section>

            <Separator />

            {/* Usage */}
            <section id="usage">
              <h2 className="text-base font-semibold mb-4">Usage</h2>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {[
                  { label: "This Month", value: "$342.50", change: "+12%" },
                  { label: "Requests", value: "12,450", change: "+8%" },
                  { label: "Tokens", value: "28.4M", change: "+15%" },
                  { label: "Avg Cost/Req", value: "$0.027", change: "-3%" },
                ].map((s) => (
                  <div key={s.label} className="p-4 rounded-lg border" style={{ borderColor: "var(--color-border)" }}>
                    <div className="text-xs uppercase tracking-wider mb-1" style={{ color: "var(--color-text-faint)" }}>{s.label}</div>
                    <div className="text-2xl font-bold">{s.value}</div>
                    <div className="text-xs mt-1" style={{ color: s.change.startsWith("+") ? "var(--color-positive-text)" : "var(--color-negative-text)" }}>{s.change} vs last month</div>
                  </div>
                ))}
              </div>

              <h3 className="text-base font-semibold mb-3">Recent Activity</h3>
              <div className="rounded-xl border overflow-hidden" style={{ borderColor: "var(--color-border)" }}>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Date</TableHead>
                      <TableHead numeric>Requests</TableHead>
                      <TableHead numeric>Tokens</TableHead>
                      <TableHead numeric>Cost</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {usageHistory.map((u) => (
                      <TableRow key={u.date}>
                        <TableCell className="font-medium">{u.date}</TableCell>
                        <TableCell numeric>{u.requests}</TableCell>
                        <TableCell numeric>{u.tokens}</TableCell>
                        <TableCell numeric>{u.cost}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </section>

            <Separator />

            {/* Models */}
            <section id="models">
              <h2 className="text-base font-semibold mb-4">Model Usage</h2>
              <div className="rounded-xl border overflow-hidden" style={{ borderColor: "var(--color-border)" }}>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Model</TableHead>
                      <TableHead numeric>Requests</TableHead>
                      <TableHead numeric>Tokens</TableHead>
                      <TableHead numeric>Cost</TableHead>
                      <TableHead className="text-right">Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {models.map((m) => (
                      <TableRow key={m.name}>
                        <TableCell className="font-medium">{m.name}</TableCell>
                        <TableCell numeric>{m.requests}</TableCell>
                        <TableCell numeric>{m.tokens}</TableCell>
                        <TableCell numeric>{m.cost}</TableCell>
                        <TableCell className="text-right">
                          <Button size="sm" variant="ghost">View Details →</Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </section>

            <Separator />

            {/* Settings */}
            <section id="settings">
              <h2 className="text-base font-semibold mb-4">Settings</h2>
              <Card>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Email Notifications</Label>
                      <HelperText>Receive usage alerts and billing reminders</HelperText>
                    </div>
                    <Switch checked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Auto-reload Credits</Label>
                      <HelperText>Automatically add $50 when balance drops below $10</HelperText>
                    </div>
                    <Switch />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Two-Factor Authentication</Label>
                      <HelperText>Add an extra layer of security to your account</HelperText>
                    </div>
                    <Switch checked />
                  </div>
                </CardContent>
              </Card>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
