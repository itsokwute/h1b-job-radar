import { X, ExternalLink } from "lucide-react";
import type { Job } from "@/data/jobs";
import { H1BBadge } from "./H1BBadge";
import { Button } from "@/components/ui/button";

interface JobDetailPanelProps {
  job: Job | null;
  onClose: () => void;
}

export function JobDetailPanel({ job, onClose }: JobDetailPanelProps) {
  if (!job) return null;

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-background/60 z-30" onClick={onClose} />

      {/* Panel */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-card border-l border-border z-40 flex flex-col animate-in slide-in-from-right duration-200">
        <div className="flex items-center justify-between p-4 border-b border-border">
          <H1BBadge status={job.h1bStatus} />
          <button onClick={onClose} className="text-muted-foreground hover:text-foreground">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-auto p-4 space-y-4">
          <div>
            <h2 className="text-lg font-semibold text-foreground">{job.title}</h2>
            <p className="text-primary font-medium">{job.company}</p>
            <p className="text-muted-foreground text-sm">{job.location}</p>
          </div>

          <div className="flex gap-2 text-xs">
            <span className="bg-secondary px-2 py-0.5 rounded text-muted-foreground">{job.source}</span>
            <span className="bg-secondary px-2 py-0.5 rounded text-muted-foreground">{job.postedDate}</span>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Description</h3>
            <p className="text-sm text-secondary-foreground leading-relaxed">{job.description}</p>
          </div>
        </div>

        <div className="p-4 border-t border-border">
          <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
            <a href={job.applyUrl} target="_blank" rel="noopener noreferrer">
              Apply Now <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </>
  );
}
