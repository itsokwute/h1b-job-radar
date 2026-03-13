import { useState, useMemo } from "react";
import { Header } from "@/components/dashboard/Header";
import { StatsBar } from "@/components/dashboard/StatsBar";
import { FilterBar } from "@/components/dashboard/FilterBar";
import { JobsTable } from "@/components/dashboard/JobsTable";
import { RunHistorySidebar } from "@/components/dashboard/RunHistorySidebar";
import { JobDetailPanel } from "@/components/dashboard/JobDetailPanel";
import { sampleJobs, sampleRuns } from "@/data/jobs";
import type { Job, H1BStatus, Source } from "@/data/jobs";

const Index = () => {
  const [h1bFilter, setH1bFilter] = useState<H1BStatus | "ALL">("ALL");
  const [sourceFilter, setSourceFilter] = useState<Source | "ALL">("ALL");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeRunId, setActiveRunId] = useState<string | null>(null);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const filteredJobs = useMemo(() => {
    return sampleJobs.filter((job) => {
      if (h1bFilter !== "ALL" && job.h1bStatus !== h1bFilter) return false;
      if (sourceFilter !== "ALL" && job.source !== sourceFilter) return false;
      if (activeRunId && job.runId !== activeRunId) return false;
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        if (!job.title.toLowerCase().includes(q) && !job.company.toLowerCase().includes(q)) return false;
      }
      return true;
    });
  }, [h1bFilter, sourceFilter, searchQuery, activeRunId]);

  const clearFilters = () => {
    setH1bFilter("ALL");
    setSourceFilter("ALL");
    setSearchQuery("");
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <div className="flex flex-1 overflow-hidden">
        <div className="flex-1 flex flex-col overflow-hidden">
          <StatsBar jobs={filteredJobs} />

          <FilterBar
            h1bFilter={h1bFilter}
            sourceFilter={sourceFilter}
            searchQuery={searchQuery}
            onH1BFilterChange={setH1bFilter}
            onSourceFilterChange={setSourceFilter}
            onSearchChange={setSearchQuery}
            onClear={clearFilters}
          />

          <JobsTable jobs={filteredJobs} onSelectJob={setSelectedJob} />
        </div>

        <RunHistorySidebar
          runs={sampleRuns}
          activeRunId={activeRunId}
          onSelectRun={setActiveRunId}
          open={sidebarOpen}
          onToggle={() => setSidebarOpen(!sidebarOpen)}
        />
      </div>

      <JobDetailPanel job={selectedJob} onClose={() => setSelectedJob(null)} />
    </div>
  );
};

export default Index;
