export interface GenlayerEvent {
  id: string;
  title: string;
  date: string;
  status: "live" | "upcoming" | "completed";
}

export const mockEvents: GenlayerEvent[] = [
  {
    id: "1",
    title: "Genlayer Hackathon: Build with Intelligent Contracts",
    date: "Mar 13, 2026 — Live Now",
    status: "live",
  },
  {
    id: "2",
    title: "Community AMA: Roadmap Q2 2026",
    date: "Mar 20, 2026 — 4:00 PM UTC",
    status: "upcoming",
  },
  {
    id: "3",
    title: "Workshop: Writing Your First GenVM Contract",
    date: "Mar 5, 2026",
    status: "completed",
  },
];
