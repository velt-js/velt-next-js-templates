"use client";

import { VeltSidebarButton } from "@veltdev/react";
import VeltTools from "@/components/velt/VeltTools";

interface HeaderProps {
  toggleCommentsSidebar: () => void;
}

export default function Header({ toggleCommentsSidebar }: HeaderProps) {
  return (
    <div className="sticky top-0 z-50 flex items-center justify-between border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-6 py-3">
      <div className="flex items-center gap-2">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-primary"
        >
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
        <span className="font-semibold text-foreground">
          Velt Collaboration
        </span>
      </div>

      <div className="flex items-center gap-2">
        <VeltTools>
          {/* [Velt] Toggle comments sidebar */}
          <div onClick={toggleCommentsSidebar}>
            <VeltSidebarButton />
          </div>
        </VeltTools>
      </div>
    </div>
  );
}
