import type { Job } from "@/data/jobs";

interface StatsBarProps {
  jobs: Job[];
}

export function StatsBar({ jobs }: StatsBarProps) {
  const total = jobs.length;
  const yes = jobs.filter((j) => j.h1bStatus === "YES").length;
  const unsure = jobs.filter((j) => j.h1bStatus === "NOT_SURE").length;
  const no = jobs.filter((j) => j.h1bStatus === "NO").length;

  const stats = [
    { label: "Total Jobs Found", value: total, color: "text-foreground" },
    { label: "✅ Likely H1B Sponsors", value: yes, color: "text-h1b-yes" },
    { label: "⚠️ Possible Sponsors", value: unsure, color: "text-h1b-unsure" },
    { label: "❌ No Sponsorship", value: no, color: "text-h1b-no opacity-60" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 p-4 md:px-6">
      {stats.map((s) => (
        <div key={s.label} className="bg-card rounded-lg p-4 border border-border">
          <p className="text-[11px] text-muted-foreground uppercase tracking-wider mb-1">{s.label}</p>
          <p className={`text-2xl font-bold tabular-nums ${s.color}`}>{s.value}</p>
        </div>
      ))}
    </div>
  );
}
