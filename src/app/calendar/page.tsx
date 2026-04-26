import { PageHeader } from "@/components/page-header";

export default function CalendarPage() {
  return (
    <>
      <PageHeader
        title="Calendar"
        description="Click any day to add a morning planner, trade review, or news event."
      />
      <div className="p-6">
        <div className="rounded-lg border border-dashed border-border p-10 text-center text-sm text-muted-foreground">
          Calendar view coming in Phase 1.
        </div>
      </div>
    </>
  );
}
