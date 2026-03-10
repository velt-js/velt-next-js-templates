"use client";

import { VeltCommentBubble, VeltCommentTool } from "@veltdev/react";

interface FeatureCardProps {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function FeatureCard({
  id,
  title,
  description,
  icon,
}: FeatureCardProps) {
  return (
    <div
      id={id}
      className="relative flex flex-col gap-4 rounded-lg border border-border bg-card p-6 transition-colors hover:bg-accent/50"
    >
      <div className="flex items-start justify-between">
        <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
          {icon}
        </div>
        <div className="flex items-center gap-2">
          {/* [Velt] Show comment count bubble for this card */}
          <VeltCommentBubble targetElementId={id} />
          {/* [Velt] Add comment tool button for this card */}
          <VeltCommentTool targetElementId={id} />
        </div>
      </div>
      <div>
        <h3 className="font-semibold text-card-foreground">{title}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}
