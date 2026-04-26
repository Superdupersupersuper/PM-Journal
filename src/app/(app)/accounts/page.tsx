import { PageHeader } from "@/components/page-header";

export default function AccountsPage() {
  return (
    <>
      <PageHeader
        title="Accounts"
        description="Polymarket and Kalshi PNL, category breakdowns, and trade analytics."
      />
      <div className="p-6">
        <div className="rounded-lg border border-dashed border-border p-10 text-center text-sm text-muted-foreground">
          Account analytics coming in Phase 3.
        </div>
      </div>
    </>
  );
}
