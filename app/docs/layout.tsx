import { Sidebar } from "@/components/ui/sidebar";
import { MainTopbar } from "@/components/main-topbar";

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
      <MainTopbar />

      <div className="flex max-w-[1280px] mx-auto">
        <div className="hidden lg:block">
          <Sidebar groups={sidebarGroups} />
        </div>
        <div className="flex-1 min-w-0 px-6 lg:px-10 py-10">{children}</div>
      </div>
    </div>
  );
}
