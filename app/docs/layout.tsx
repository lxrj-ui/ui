import Link from "next/link";
import { Sidebar } from "@/components/ui/sidebar";
import { ThemeToggle } from "@/components/theme-toggle";

const sidebarGroups = [
  {
    label: "Components",
    items: [
      { label: "Introduction", href: "/docs" },
      { label: "All Components", href: "/docs/components", badge: "52" },
      { label: "Accordion", href: "/docs/components/overlay/accordion" },
      { label: "Alert Dialog", href: "/docs/components/alert-dialog" },
      { label: "Autocomplete", href: "/docs/components/autocomplete" },
      { label: "Avatar", href: "/docs/components/base/avatar" },
      { label: "Badge", href: "/docs/components/base/badge" },
      { label: "Button", href: "/docs/components/base/button" },
      { label: "Button Group", href: "/docs/components/layout/button-group" },
      { label: "Calendar", href: "/docs/components/data/calendar" },
      { label: "Callout", href: "/docs/components/layout/callout" },
      { label: "Card", href: "/docs/components/layout/card" },
      { label: "Checkbox", href: "/docs/components/form/checkbox" },
      { label: "Checkbox Group", href: "/docs/components/checkbox-group" },
      { label: "Chip", href: "/docs/components/layout/chip" },
      { label: "Collapsible", href: "/docs/components/collapsible" },
      { label: "Combobox", href: "/docs/components/combobox" },
      { label: "Context Menu", href: "/docs/components/context-menu" },
      { label: "CTA Card", href: "/docs/components/layout/cta-card" },
      { label: "Dialog", href: "/docs/components/overlay/dialog" },
      { label: "Drawer", href: "/docs/components/drawer" },
      { label: "Field", href: "/docs/components/field" },
      { label: "Fieldset", href: "/docs/components/fieldset" },
      { label: "Form", href: "/docs/components/form" },
      { label: "Full Page State", href: "/docs/components/layout/full-page-state" },
      { label: "Helper Text", href: "/docs/components/form/helper-text" },
      { label: "Icon", href: "/docs/components/base/icon", badge: "new", badgeVariant: "outline" as const },
      { label: "Input", href: "/docs/components/form/input" },
      { label: "Label", href: "/docs/components/form/label" },
      { label: "Menu", href: "/docs/components/menu" },
      { label: "Menubar", href: "/docs/components/menubar" },
      { label: "Meter", href: "/docs/components/meter" },
      { label: "Navigation Menu", href: "/docs/components/navigation-menu" },
      { label: "Number Field", href: "/docs/components/number-field" },
      { label: "OTP Field", href: "/docs/components/otp-field" },
      { label: "Pagination", href: "/docs/components/navigation/pagination" },
      { label: "Popover", href: "/docs/components/popover" },
      { label: "Preview Card", href: "/docs/components/preview-card" },
      { label: "Progress", href: "/docs/components/progress" },
      { label: "Radio", href: "/docs/components/form/radio" },
      { label: "Scroll Area", href: "/docs/components/scroll-area" },
      { label: "Segmented Control", href: "/docs/components/navigation/segmented-control" },
      { label: "Select", href: "/docs/components/form/select" },
      { label: "Separator", href: "/docs/components/layout/separator" },
      { label: "Skeleton", href: "/docs/components/data/skeleton" },
      { label: "Slider", href: "/docs/components/slider" },
      { label: "Switch", href: "/docs/components/form/switch" },
      { label: "Table", href: "/docs/components/data/table" },
      { label: "Tabs", href: "/docs/components/tabs" },
      { label: "Textarea", href: "/docs/components/form/textarea" },
      { label: "Toggle", href: "/docs/components/toggle" },
      { label: "Toggle Group", href: "/docs/components/toggle-group" },
      { label: "Toolbar", href: "/docs/components/toolbar" },
      { label: "Topbar", href: "/docs/components/navigation/topbar", badge: "new", badgeVariant: "outline" as const },
      { label: "Tablist", href: "/docs/components/navigation/tablist", badge: "new", badgeVariant: "outline" as const },
      { label: "Tooltip", href: "/docs/components/tooltip" },
    ],
  },
];

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen transition-colors" style={{ background: "var(--color-background)" }}>
      <header
        className="sticky top-0 z-30 border-b backdrop-blur h-14 flex items-center"
        style={{
          backgroundColor: "color-mix(in oklab, var(--color-background) 80%, transparent)",
          borderColor: "var(--color-border)",
        }}
      >
        <div className="flex items-center justify-between w-full max-w-[1280px] mx-auto px-6">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-2 hover:opacity-80">
              <svg width={20} height={20} viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M12 2L22 8.5V15.5L12 22L2 15.5V8.5L12 2Z" fill="var(--color-grape)" />
                <path d="M12 7L17 10V14L12 17L7 14V10L12 7Z" fill="var(--color-cloud)" />
              </svg>
              <span className="font-semibold text-sm" style={{ color: "var(--color-foreground)" }}>LXRJ-UI</span>
            </Link>
            <nav className="hidden md:flex items-center gap-5 text-sm">
              <Link href="/models" className="hover:opacity-80" style={{ color: "var(--color-muted-foreground)" }}>Models</Link>
              <Link href="/docs" className="hover:opacity-80" style={{ color: "var(--color-muted-foreground)" }}>Docs</Link>
              <Link href="/docs/components" className="font-medium" style={{ color: "var(--color-foreground)" }}>Components</Link>
              <Link href="/demo" className="hover:opacity-80" style={{ color: "var(--color-muted-foreground)" }}>Demo</Link>
              <Link href="/demo/profile" className="hover:opacity-80" style={{ color: "var(--color-muted-foreground)" }}>Profile</Link>
            </nav>
          </div>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <div className="hidden sm:flex items-center gap-1.5 rounded-md border px-2.5 py-1.5 text-xs" style={{ borderColor: "var(--color-border)", color: "var(--color-text-faint)", background: "var(--color-card)" }}>
              <span>Search</span>
              <span className="ml-1 rounded border px-1 py-0.5 text-xs font-mono" style={{ borderColor: "var(--color-border)" }}>⌘K</span>
            </div>
            <div className="h-4 w-px hidden sm:block" style={{ background: "var(--color-border)" }} />
            <div className="flex items-center gap-4 text-sm">
              <Link href="/DESIGN.md" className="hidden sm:inline hover:opacity-80" style={{ color: "var(--color-muted-foreground)" }}>DESIGN.md</Link>
              <a href="https://github.com/lxrj-ui/ui" className="hover:opacity-80" style={{ color: "var(--color-muted-foreground)" }}>GitHub</a>
            </div>
          </div>
        </div>
      </header>

      <div className="flex max-w-[1280px] mx-auto">
        <div className="hidden lg:block">
          <Sidebar groups={sidebarGroups} />
        </div>
        <div className="flex-1 min-w-0 px-6 lg:px-10 py-10">{children}</div>
      </div>
    </div>
  );
}
