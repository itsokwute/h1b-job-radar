import { ExternalLink } from "lucide-react";
import type { Job } from "@/data/jobs";
import { H1BBadge } from "./H1BBadge";

interface JobsTableProps {
  jobs: Job[];
  onSelectJob: (job: Job) => void;
}

const statusOrder = { YES: 0, NOT_SURE: 1, NO: 2 };

export function JobsTable({ jobs, onSelectJob }: JobsTableProps) {
  const sorted = [...jobs].sort((a, b) => statusOrder[a.h1bStatus] - statusOrder[b.h1bStatus]);

  if (sorted.length === 0) {
    return (
      <div className="flex-1 flex items-center justify-center text-muted-foreground text-sm py-20">
        No jobs found matching your filters. Next run at 8:00 PM.
      </div>
    );
  }

  return (
    <>
      {/* Desktop table */}
      <div className="hidden md:block flex-1 overflow-auto px-4 md:px-6">
        <table className="w-full text-sm">
          <thead className="sticky top-0 bg-background z-10">
            <tr className="border-b border-border text-left text-[11px] uppercase tracking-wider text-muted-foreground">
              <th className="py-2 pr-3 w-24">H1B</th>
              <th className="py-2 pr-3">Job Title</th>
              <th className="py-2 pr-3">Company</th>
              <th className="py-2 pr-3">Location</th>
              <th className="py-2 pr-3 w-20">Source</th>
              <th className="py-2 pr-3 w-20">Posted</th>
              <th className="py-2 w-14">Apply</th>
            </tr>
          </thead>
          <tbody>
            {sorted.map((job) => (
              <tr
                key={job.id}
                onClick={() => onSelectJob(job)}
                className={`border-b border-border/50 cursor-pointer transition-colors hover:bg-muted/30 ${
                  job.h1bStatus === "NO" ? "opacity-50" : ""
                }`}
              >
                <td className="py-2.5 pr-3"><H1BBadge status={job.h1bStatus} /></td>
                <td className="py-2.5 pr-3 font-medium text-foreground">{job.title}</td>
                <td className="py-2.5 pr-3 text-primary">{job.company}</td>
                <td className="py-2.5 pr-3 text-muted-foreground">{job.location}</td>
                <td className="py-2.5 pr-3">
                  <span className="text-[10px] text-muted-foreground bg-secondary px-1.5 py-0.5 rounded">
                    {job.source}
                  </span>
                </td>
                <td className="py-2.5 pr-3 text-muted-foreground text-xs">{job.postedDate}</td>
                <td className="py-2.5">
                  <a
                    href={job.applyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile cards */}
      <div className="md:hidden flex-1 overflow-auto px-4 space-y-2 pb-4">
        {sorted.map((job) => (
          <div
            key={job.id}
            onClick={() => onSelectJob(job)}
            className={`bg-card rounded-lg p-3 border border-border cursor-pointer transition-colors hover:border-primary/30 ${
              job.h1bStatus === "NO" ? "opacity-50" : ""
            }`}
          >
            <div className="flex items-center justify-between mb-1.5">
              <H1BBadge status={job.h1bStatus} />
              <span className="text-[10px] text-muted-foreground bg-secondary px-1.5 py-0.5 rounded">{job.source}</span>
            </div>
            <p className="font-medium text-foreground text-sm">{job.title}</p>
            <p className="text-primary text-xs">{job.company}</p>
            <div className="flex items-center justify-between mt-1.5">
              <span className="text-muted-foreground text-xs">{job.location}</span>
              <span className="text-muted-foreground text-xs">{job.postedDate}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
