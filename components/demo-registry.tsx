import type * as React from "react";
import {
  CheckboxGroupDemo,
  SliderDemo,
  ToggleDemo,
  ToggleGroupDemo,
  NumberFieldDemo,
  OtpFieldDemo,
  ComboboxDemo,
  AutocompleteDemo,
  FieldDemo,
  FieldsetDemo,
  FormDemo,
  MeterDemo,
  ProgressDemo,
  PreviewCardDemo,
  TooltipDemo,
  MenuDemo,
  ContextMenuDemo,
  DrawerDemo,
  PopoverDemo,
  AlertDialogDemo,
  CollapsibleDemo,
  TabsDemo,
  ToolbarDemo,
  MenubarDemo,
  NavigationMenuDemo,
  ScrollAreaDemo,
} from "./base-ui-gallery";
import { TopbarDemo } from "./ui/topbar";

export interface DemoEntry {
  title: string;
  category: string;
  description: string;
  Demo: React.ComponentType;
}

// Plain (non-client) module so a server component can read demoRegistry[slug]
// to resolve the route. The Demo values are client component references.
export const demoRegistry: Record<string, DemoEntry> = {
  "checkbox-group": { title: "Checkbox Group", category: "Form", description: "Grouped binary choices that share a selection state.", Demo: CheckboxGroupDemo },
  "slider": { title: "Slider", category: "Form", description: "Range input with a draggable thumb and filled track.", Demo: SliderDemo },
  "toggle": { title: "Toggle", category: "Action", description: "On/off control rendered as a button.", Demo: ToggleDemo },
  "toggle-group": { title: "Toggle Group", category: "Action", description: "Multiple related toggles with single or multi selection.", Demo: ToggleGroupDemo },
  "number-field": { title: "Number Field", category: "Form", description: "Numeric input with stepper controls.", Demo: NumberFieldDemo },
  "otp-field": { title: "OTP Field", category: "Form", description: "One-time-passcode entry split into cells.", Demo: OtpFieldDemo },
  "combobox": { title: "Combobox", category: "Form", description: "Text input with a filterable option list.", Demo: ComboboxDemo },
  "autocomplete": { title: "Autocomplete", category: "Form", description: "Async tag/value search with suggestions.", Demo: AutocompleteDemo },
  "field": { title: "Field", category: "Form", description: "Form field wrapper with label, hint and error.", Demo: FieldDemo },
  "fieldset": { title: "Fieldset", category: "Form", description: "Grouped fields with a legend and disabled state.", Demo: FieldsetDemo },
  "form": { title: "Form", category: "Form", description: "Composable form layout with validation.", Demo: FormDemo },
  "meter": { title: "Meter", category: "Data Display", description: "A single value within a known range, e.g. storage used.", Demo: MeterDemo },
  "progress": { title: "Progress", category: "Data Display", description: "Task-completion bar.", Demo: ProgressDemo },
  "preview-card": { title: "Preview Card", category: "Overlay", description: "Hover preview popover with image and text.", Demo: PreviewCardDemo },
  "tooltip": { title: "Tooltip", category: "Overlay", description: "Transient hint shown on hover or focus.", Demo: TooltipDemo },
  "menu": { title: "Menu", category: "Overlay", description: "Action menu triggered by a button.", Demo: MenuDemo },
  "context-menu": { title: "Context Menu", category: "Overlay", description: "Menu opened with the right mouse button.", Demo: ContextMenuDemo },
  "drawer": { title: "Drawer", category: "Overlay", description: "Side panel that slides in from an edge.", Demo: DrawerDemo },
  "popover": { title: "Popover", category: "Overlay", description: "Floating content anchored to a trigger.", Demo: PopoverDemo },
  "alert-dialog": { title: "Alert Dialog", category: "Overlay", description: "Modal that requires an explicit confirmation.", Demo: AlertDialogDemo },
  "collapsible": { title: "Collapsible", category: "Disclosure", description: "Expandable and collapsible region.", Demo: CollapsibleDemo },
  "tabs": { title: "Tabs", category: "Navigation", description: "Switch between related panels.", Demo: TabsDemo },
  "toolbar": { title: "Toolbar", category: "Navigation", description: "Grouped actions with roving focus.", Demo: ToolbarDemo },
  "menubar": { title: "Menubar", category: "Navigation", description: "Application menu bar.", Demo: MenubarDemo },
  "navigation-menu": { title: "Navigation Menu", category: "Navigation", description: "Site navigation with flyout panels.", Demo: NavigationMenuDemo },
  "topbar": { title: "Topbar", category: "Navigation", description: "App top bar with links and a right-aligned account menu.", Demo: TopbarDemo },
  "scroll-area": { title: "Scroll Area", category: "Data Display", description: "Custom scrollable region with a styled scrollbar.", Demo: ScrollAreaDemo },
};
