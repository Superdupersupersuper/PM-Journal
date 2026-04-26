import { PageHeader } from "@/components/page-header";

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        title="Projects"
        description="Track long-running market deep-dives, sources, and daily research notes."
      />
      <div className="p-6">
        <div className="rounded-lg border border-dashed border-border p-10 text-center text-sm text-muted-foreground">
          Projects coming in Phase 2.
        </div>
      </div>
    </>
  );
}
