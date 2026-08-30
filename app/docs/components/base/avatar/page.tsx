import { Avatar, AvatarGroup } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { CopyPageButton } from "@/components/copy-page-button";
import { Pagination } from "@/components/pagination";

export const metadata = { title: "Avatar — LXRJ-UI" };

export default function AvatarPage() {
  return (
    <div>
      <div className="flex items-start justify-between gap-4 mb-3">
        <Badge className="mt-1">Base</Badge>
        <CopyPageButton text="Avatar — LXRJ-UI" />
      </div>
      <h1 className="text-4xl font-bold tracking-tight mb-2" style={{ fontFamily: "var(--font-brand)", color: "var(--color-foreground)" }}>Avatar</h1>
      <p className="text-sm mb-8" style={{ color: "var(--color-muted-foreground)" }}>User images with fallback. 5 sizes, group stacking with ring separator.</p>

      <h2 className="text-base font-semibold mb-3">Sizes</h2>
      <div className="flex items-center gap-3 mb-10">
        <Avatar size="sm" fallback="S" />
        <Avatar size="md" fallback="M" />
        <Avatar size="lg" fallback="L" />
        <Avatar size="xl" fallback="X" />
        <Avatar size="2xl" fallback="2X" />
      </div>

      <h2 className="text-base font-semibold mb-3">Fallback</h2>
      <div className="flex items-center gap-3 mb-10">
        <Avatar size="lg" fallback="AB" />
        <Avatar size="lg" />
        <Avatar size="lg" src="https://invalid-url.jpg" fallback="ERR" />
      </div>

      <h2 className="text-base font-semibold mb-3">Group</h2>
      <div className="mb-10">
        <AvatarGroup>
          <Avatar size="md" fallback="A" />
          <Avatar size="md" fallback="B" />
          <Avatar size="md" fallback="C" />
          <Avatar size="md" fallback="D" />
        </AvatarGroup>
      </div>

      <h2 className="text-base font-semibold mb-3">Code</h2>
      <pre className="rounded-md border p-4 text-xs overflow-x-auto font-mono leading-6" style={{ backgroundColor: "var(--color-card)", borderColor: "var(--color-border)", fontFamily: "var(--font-mono)" }}>
{`import { Avatar, AvatarGroup } from "@/components/ui/avatar"

<Avatar size="lg" fallback="AB" />
<Avatar size="xl" src="/avatar.jpg" alt="User" />
<AvatarGroup>
  <Avatar size="md" fallback="A" />
  <Avatar size="md" fallback="B" />
</AvatarGroup>`}
      </pre>

      <Pagination prev={{ href: "/docs/components/base/badge", label: "Badge" }} next={{ href: "/docs/components/form/input", label: "Input" }} />
    </div>
  );
}
