'use client';
import * as React from 'react';
import { Popover } from '@base-ui/react/popover';
import { Checkbox } from '@base-ui/react/checkbox';

const cols = [
  { id: 'da-max', label: 'DA ELO' },
  { id: 'da-code', label: 'Code Categories' },
  { id: 'da-ui', label: 'UI Component' },
  { id: 'da-game', label: 'Game Development' },
  { id: 'da-viz', label: 'Data Visualization' },
  { id: 'da-3d', label: '3D' },
  { id: 'da-image', label: 'Image' },
  { id: 'da-video', label: 'Video' },
  { id: 'da-svg', label: 'SVG' },
];

export function OrTableSettings() {
  return (
    <Popover.Root>
      <Popover.Trigger className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-button font-medium cursor-pointer no-underline transition-colors focus-visible:outline-none focus-visible:border-focus-border focus-visible:shadow-focus disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent-subtle hover:text-accent-foreground active:bg-accent-subtle/80 h-8 w-8 border border-border bg-card">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-settings size-3.5" aria-hidden="true"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915" /><circle cx="12" cy="12" r="3" /></svg>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Positioner sideOffset={8} className="z-50">
          <Popover.Popup className="w-64 overflow-hidden rounded-lg border bg-popover shadow-lg outline-none" style={{ borderColor: 'var(--color-border)' }}>
            <div className="max-h-80 overflow-auto">
              <div className="sticky top-0 z-20 bg-popover/95 backdrop-blur-sm flex items-center gap-2 border-b border-border/50 px-3 py-1.5">
                <Checkbox.Root className="group/checkbox grid place-content-center peer h-4 w-4 shrink-0 rounded-sm border border-foreground/30 bg-muted cursor-pointer ring-offset-background hover:border-foreground/50 focus-visible:outline-none focus-visible:border-focus-border focus-visible:shadow-focus disabled:cursor-not-allowed disabled:opacity-50 data-[checked]:border-primary data-[checked]:bg-primary data-[checked]:text-primary-foreground">
                  <Checkbox.Indicator className="text-primary-foreground"><svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2.5 6L4.5 8L9.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></Checkbox.Indicator>
                </Checkbox.Root>
                <span className="truncate text-2xs font-medium uppercase tracking-wide text-muted-foreground">Design Arena</span>
              </div>
              <div className="p-2">
                {cols.map((c) => (
                  <div key={c.id} className="relative flex touch-manipulation items-center gap-2 rounded-md px-2 py-1.5 text-xs font-medium hover:bg-card-hover hover:text-accent-foreground">
                    <button type="button" className="relative z-10 -ml-1 touch-none text-muted-foreground/50 rounded-sm hover:text-muted-foreground focus-visible:outline-1 cursor-grab">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-grip-vertical size-3.5"><circle cx="9" cy="12" r="1" /><circle cx="9" cy="5" r="1" /><circle cx="9" cy="19" r="1" /><circle cx="15" cy="12" r="1" /><circle cx="15" cy="5" r="1" /><circle cx="15" cy="19" r="1" /></svg>
                    </button>
                    <Checkbox.Root aria-label={`Toggle ${c.label} column`} className="group/checkbox grid place-content-center peer h-4 w-4 shrink-0 rounded-sm border border-foreground/30 bg-muted cursor-pointer ring-offset-background hover:border-foreground/50 focus-visible:outline-none focus-visible:border-focus-border focus-visible:shadow-focus disabled:cursor-not-allowed disabled:opacity-50 data-[checked]:border-primary data-[checked]:bg-primary data-[checked]:text-primary-foreground">
                      <Checkbox.Indicator className="text-primary-foreground"><svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2.5 6L4.5 8L9.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></Checkbox.Indicator>
                    </Checkbox.Root>
                    <span className="truncate">{c.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </Popover.Popup>
        </Popover.Positioner>
      </Popover.Portal>
    </Popover.Root>
  );
}
