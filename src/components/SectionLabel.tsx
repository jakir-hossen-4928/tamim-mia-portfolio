import React from "react";
import { cn } from "@/lib/utils";

interface SectionLabelProps {
  label: string;
  className?: string;
}

const SectionLabel: React.FC<SectionLabelProps> = ({ label, className }) => {
  return (
    <div className={cn("inline-flex items-center gap-2", className)}>
      <span className="h-px w-8 bg-accent/50" />
      <span className="text-sm font-bold uppercase tracking-[0.2em] text-accent">
        {label}
      </span>
    </div>
  );
};

export default SectionLabel;
