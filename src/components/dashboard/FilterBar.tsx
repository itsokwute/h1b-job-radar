import { Search, X } from "lucide-react";
import type { H1BStatus, Source } from "@/data/jobs";

interface FilterBarProps {
  h1bFilter: H1BStatus | "ALL";
  sourceFilter: Source | "ALL";
  searchQuery: string;
  onH1BFilterChange: (v: H1BStatus | "ALL") => void;
  onSourceFilterChange: (v: Source | "ALL") => void;
  onSearchChange: (v: string) => void;
  onClear: () => void;
}

const h1bOptions: { label: string; value: H1BStatus | "ALL" }[] = [
  { label: "All", value: "ALL" },
  { label: "YES", value: "YES" },
  { label: "NOT SURE", value: "NOT_SURE" },
  { label: "NO", value: "NO" },
];

const sourceOptions: { label: string; value: Source | "ALL" }[] = [
  { label: "All Sources", value: "ALL" },
  { label: "SerpAPI", value: "SerpAPI" },
  { label: "JSearch", value: "JSearch" },
];

function pillColor(value: string, active: boolean) {
  if (!active) return "bg-secondary text-secondary-foreground hover:bg-muted";
  if (value === "YES") return "bg-h1b-yes/20 text-h1b-yes border border-h1b-yes/40";
  if (value === "NOT_SURE") return "bg-h1b-unsure/20 text-h1b-unsure border border-h1b-unsure/40";
  if (value === "NO") return "bg-h1b-no/20 text-h1b-no border border-h1b-no/40";
  return "bg-primary/15 text-primary border border-primary/30";
}

export function FilterBar(props: FilterBarProps) {
  const hasFilters = props.h1bFilter !== "ALL" || props.sourceFilter !== "ALL" || props.searchQuery !== "";

  return (
    <div className="flex flex-wrap items-center gap-2 px-4 md:px-6 pb-3">
      {/* H1B filters */}
      <div className="flex gap-1.5">
        {h1bOptions.map((o) => (
          <button
            key={o.value}
            onClick={() => props.onH1BFilterChange(o.value)}
            className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${pillColor(o.value, props.h1bFilter === o.value)}`}
          >
            {o.label}
          </button>
        ))}
      </div>

      <div className="w-px h-5 bg-border hidden md:block" />

      {/* Source filters */}
      <div className="flex gap-1.5">
        {sourceOptions.map((o) => (
          <button
            key={o.value}
            onClick={() => props.onSourceFilterChange(o.value)}
            className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
              props.sourceFilter === o.value
                ? "bg-primary/15 text-primary border border-primary/30"
                : "bg-secondary text-secondary-foreground hover:bg-muted"
            }`}
          >
            {o.label}
          </button>
        ))}
      </div>

      {/* Search */}
      <div className="relative ml-auto">
        <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search title or company…"
          value={props.searchQuery}
          onChange={(e) => props.onSearchChange(e.target.value)}
          className="bg-secondary border border-border rounded-md pl-8 pr-3 py-1.5 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary w-48"
        />
      </div>

      {hasFilters && (
        <button onClick={props.onClear} className="text-xs text-muted-foreground hover:text-primary flex items-center gap-1">
          <X className="h-3 w-3" /> Clear
        </button>
      )}
    </div>
  );
}
