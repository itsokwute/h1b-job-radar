import { History, ChevronRight, ChevronLeft } from "lucide-react";
import type { RunHistory } from "@/data/jobs";

interface RunHistorySidebarProps {
  runs: RunHistory[];
  activeRunId: string | null;
  onSelectRun: (id: string | null) => void;
  open: boolean;
  onToggle: () => void;
}

export function RunHistorySidebar({ runs, activeRunId, onSelectRun, open, onToggle }: RunHistorySidebarProps) {
  return (
    <>
      {/* Toggle button (always visible) */}
      <button
        onClick={onToggle}
        className="hidden md:flex fixed right-0 top-1/2 -translate-y-1/2 z-20 bg-card border border-border rounded-l-md p-1.5 text-muted-foreground hover:text-primary transition-colors"
        style={{ right: open ? "260px" : 0 }}
      >
        {open ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
      </button>

      {/* Sidebar */}
      <aside
        className={`hidden md:flex flex-col border-l border-border bg-card transition-all duration-200 ${
          open ? "w-[260px] min-w-[260px]" : "w-0 min-w-0 overflow-hidden"
        }`}
      >
        <div className="flex items-center gap-2 px-4 py-3 border-b border-border text-xs uppercase tracking-wider text-muted-foreground">
          <History className="h-3.5 w-3.5" /> Run History
        </div>
        <div className="flex-1 overflow-auto">
          <button
            onClick={() => onSelectRun(null)}
            className={`w-full text-left px-4 py-2.5 text-xs border-b border-border/50 transition-colors hover:bg-muted/30 ${
              activeRunId === null ? "bg-primary/10 text-primary" : "text-muted-foreground"
            }`}
          >
            All Runs
          </button>
          {runs.map((run) => (
            <button
              key={run.id}
              onClick={() => onSelectRun(run.id)}
              className={`w-full text-left px-4 py-2.5 text-xs border-b border-border/50 transition-colors hover:bg-muted/30 ${
                activeRunId === run.id ? "bg-primary/10 text-primary" : "text-muted-foreground"
              }`}
            >
              <span className="text-foreground">{run.displayTime}</span>
              <span className="ml-2">— {run.totalJobs} jobs · <span className="text-h1b-yes">{run.yesCount} YES</span></span>
            </button>
          ))}
        </div>
      </aside>
    </>
  );
}
