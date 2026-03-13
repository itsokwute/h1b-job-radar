import { useState } from "react";
import { Loader2, Check, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  const [runState, setRunState] = useState<"idle" | "running" | "done">("idle");

  const handleRunNow = () => {
    setRunState("running");
    setTimeout(() => {
      setRunState("done");
      setTimeout(() => setRunState("idle"), 2000);
    }, 3000);
  };

  return (
    <header className="flex items-center justify-between px-4 md:px-6 h-14 border-b border-primary/30 bg-card">
      <div className="flex items-center gap-2 text-primary font-semibold text-lg">
        <span>💼</span>
        <span className="hidden sm:inline">Semiconductor Job Hunter — H1B Automated</span>
        <span className="sm:hidden">SemiJob H1B</span>
      </div>

      <span className="text-muted-foreground text-xs hidden md:block">
        Last run: Today 8:42 PM
      </span>

      <Button
        size="sm"
        onClick={handleRunNow}
        disabled={runState === "running"}
        className="bg-primary text-primary-foreground hover:bg-primary/90 text-xs font-medium gap-1.5"
      >
        {runState === "running" && <Loader2 className="h-3.5 w-3.5 animate-spin" />}
        {runState === "done" && <Check className="h-3.5 w-3.5" />}
        {runState === "idle" && <Play className="h-3.5 w-3.5" />}
        {runState === "idle" && "Run Now"}
        {runState === "running" && "Running…"}
        {runState === "done" && "Triggered"}
      </Button>
    </header>
  );
}
