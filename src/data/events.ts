export interface GenlayerEvent {
  id: string;
  title: string;
  date: string;
  endDate?: string;
  status: "live" | "upcoming" | "completed";
  link?: string;
  image?: string;
  discordLink?: string;
  twitterLink?: string;
}

export const mockEvents: GenlayerEvent[] = [
  {
    id: "1",
    title: "Genlayer Hackathon: Build with Intelligent Contracts",
    date: "Mar 13, 2026 — Live Now",
    status: "live",
    link: "https://genlayer.com/hackathon",
    discordLink: "https://discord.gg/genlayer",
    twitterLink: "https://twitter.com/genlayer",
  },
  {
    id: "2",
    title: "Community AMA: Roadmap Q2 2026",
    date: "Mar 20, 2026 — 4:00 PM UTC",
    status: "upcoming",
    link: "https://genlayer.com/ama",
    twitterLink: "https://twitter.com/genlayer",
  },
  {
    id: "3",
    title: "Workshop: Writing Your First GenVM Contract",
    date: "Mar 5, 2026",
    status: "completed",
  },
];
