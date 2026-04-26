import Link from "next/link";
import { PageHeader } from "@/components/page-header";

const SECTIONS = [
  {
    href: "/calendar",
    title: "Calendar",
    description:
      "Daily morning planners, trade reviews, news events. Click any day to add an entry.",
  },
  {
    href: "/projects",
    title: "Projects",
    description:
      "Long-running market deep-dives. Log new info each day, track sources, build conviction.",
  },
  {
    href: "/accounts",
    title: "Accounts",
    description:
      "Polymarket and Kalshi PNL, category breakdowns, performance over time.",
  },
];

export default function Home() {
  return (
    <>
      <PageHeader
        title="Welcome"
        description="Your structured trading journal for prediction markets."
      />
      <div className="p-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {SECTIONS.map((s) => (
          <Link
            key={s.href}
            href={s.href}
            className="rounded-lg border border-border p-5 hover:bg-muted/50 transition-colors"
          >
            <div className="text-base font-medium">{s.title}</div>
            <div className="mt-1 text-sm text-muted-foreground">
              {s.description}
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
