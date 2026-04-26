"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Calendar, FolderKanban, LineChart } from "lucide-react";

const NAV = [
  { href: "/calendar", label: "Calendar", icon: Calendar },
  { href: "/projects", label: "Projects", icon: FolderKanban },
  { href: "/accounts", label: "Accounts", icon: LineChart },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden md:flex w-60 shrink-0 flex-col border-r border-border bg-muted/40">
      <div className="px-5 py-5 border-b border-border">
        <Link href="/" className="block">
          <div className="text-base font-semibold tracking-tight">PM Journal</div>
          <div className="text-xs text-muted-foreground">Prediction market log</div>
        </Link>
      </div>
      <nav className="flex-1 p-3 space-y-1">
        {NAV.map(({ href, label, icon: Icon }) => {
          const active = pathname === href || pathname.startsWith(`${href}/`);
          return (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors ${
                active
                  ? "bg-accent text-accent-foreground"
                  : "text-foreground/80 hover:bg-muted hover:text-foreground"
              }`}
            >
              <Icon className="h-4 w-4" />
              {label}
            </Link>
          );
        })}
      </nav>
      <div className="px-5 py-4 border-t border-border text-xs text-muted-foreground">
        Phase 0 · scaffold
      </div>
    </aside>
  );
}
