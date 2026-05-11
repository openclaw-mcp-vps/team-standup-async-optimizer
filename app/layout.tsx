import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "StandupSync — Optimize Async Standups for Maximum Team Alignment",
  description: "Analyzes Slack/Discord standup messages for communication gaps, suggests optimal posting times, tracks blocker resolution, and generates team sync insights for remote teams."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="497d21f9-0d02-4ec9-ac8a-48b6678855db"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
