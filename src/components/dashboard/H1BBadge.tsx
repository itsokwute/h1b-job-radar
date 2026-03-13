import type { H1BStatus } from "@/data/jobs";

const config: Record<H1BStatus, { label: string; className: string }> = {
  YES: { label: "YES", className: "bg-h1b-yes/20 text-h1b-yes border-h1b-yes/40" },
  NOT_SURE: { label: "NOT SURE", className: "bg-h1b-unsure/20 text-h1b-unsure border-h1b-unsure/40" },
  NO: { label: "NO", className: "bg-h1b-no/20 text-h1b-no border-h1b-no/40" },
};

export function H1BBadge({ status }: { status: H1BStatus }) {
  const c = config[status];
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider border ${c.className}`}>
      {c.label}
    </span>
  );
}
