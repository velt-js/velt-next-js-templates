"use client";

import { VeltCommentsSidebar } from "@veltdev/react";
import { useState } from "react";
import Header from "@/components/header/header";
import HeroSection from "./hero-section";
import FeatureCard from "./feature-card";

const features = [
  {
    id: "card-comments",
    title: "Inline Comments",
    description:
      "Pin contextual comments on any UI element. Discussions stay attached to the exact component they reference.",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    id: "card-presence",
    title: "Live Presence",
    description:
      "See who's viewing the same page in real time. Avatars update instantly as collaborators join or leave.",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    id: "card-notifications",
    title: "Notifications",
    description:
      "Get notified when someone mentions you or replies to your comments. Never miss important feedback.",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
      </svg>
    ),
  },
  {
    id: "card-sidebar",
    title: "Comments Sidebar",
    description:
      "Browse all comments in one place with a slide-in sidebar. Filter, search, and resolve threads easily.",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <line x1="9" y1="3" x2="9" y2="21" />
      </svg>
    ),
  },
];

const groupConfig = { enable: false };

export default function ContentArea() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <div className="flex h-screen w-full overflow-hidden">
      {/* Main content */}
      <div className="flex-1 overflow-auto relative">
        <Header toggleCommentsSidebar={toggleSidebar} />

        <div className="mx-auto max-w-4xl px-6 pt-20 pb-12">
          <HeroSection />

          {/* Feature cards grid */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {features.map((feature) => (
              <FeatureCard
                key={feature.id}
                id={feature.id}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
              />
            ))}
          </div>

          {/* Getting started hint */}
          <div className="mt-12 rounded-lg border border-dashed border-border p-6 text-center">
            <p className="text-sm text-muted-foreground">
              Click the comment icon on any card above to start a conversation.
              Open a second browser window to see real-time collaboration in
              action.
            </p>
          </div>
        </div>
      </div>

      {/* [Velt] Slide-in Comments Sidebar */}
      <div
        className="h-full border-l border-border bg-card shadow-xl transition-all duration-300 ease-in-out overflow-hidden flex flex-col"
        style={{ width: isSidebarOpen ? "400px" : "0px" }}
      >
        {isSidebarOpen && (
          <>
            <div className="flex items-center gap-3 p-4 border-b border-border flex-shrink-0">
              <button
                onClick={closeSidebar}
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Close comments sidebar"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
              <h2 className="font-semibold text-foreground">Comments</h2>
            </div>
            <div className="flex-1 overflow-hidden">
              {/* [Velt] VeltCommentsSidebar with embedMode for inline rendering */}
              <VeltCommentsSidebar
                embedMode={true}
                groupConfig={groupConfig}
                pageMode={true}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
