import { useState } from "react";
import Header from "@/components/Header";
import TerminalHero from "@/components/TerminalHero";
import ELI5Section from "@/components/ELI5Section";
import EventsSidebar from "@/components/EventsSidebar";
import NetworkPulse from "@/components/NetworkPulse";
import { AdminLogin, AdminPanel } from "@/components/AdminDashboard";
import { Separator } from "@/components/ui/separator";
import { GenlayerEvent, mockEvents } from "@/data/events";
import mochiMascot from "@/assets/mochi-mascot.png";

const Index = () => {
  const [view, setView] = useState<"public" | "login" | "admin">("public");
  const [events, setEvents] = useState<GenlayerEvent[]>(mockEvents);

  return (
    <div className="min-h-screen bg-background relative">
      {/* Mochi mascot background decoration */}
      <img
        src={mochiMascot}
        alt=""
        className="fixed bottom-4 right-4 w-32 md:w-48 opacity-15 pointer-events-none select-none z-0"
        style={{ filter: "drop-shadow(0 0 20px hsl(var(--neon-purple) / 0.3))" }}
      />
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {view === "public" && (
          <div className="animate-fade-in">
            <TerminalHero />
            <EventsSidebar events={events} />

            <div className="mt-16 md:mt-24">
              <Separator className="mb-12 bg-border/50" />
              <ELI5Section />
            </div>
          </div>
        )}

        {view === "login" && (
          <AdminLogin onLogin={() => setView("admin")} />
        )}

        {view === "admin" && (
          <AdminPanel events={events} setEvents={setEvents} onClose={() => setView("public")} />
        )}
      </main>

      <footer className="border-t border-border py-6 pb-12 text-center text-xs text-muted-foreground flex flex-col items-center gap-3">
        <div className="flex items-center gap-4">
          <span>© 2026 Genlayer Hub</span>
          <button
            onClick={() => setView(view === "public" ? "login" : "public")}
            className="text-muted-foreground/50 hover:text-foreground transition-colors duration-200"
          >
            Admin Access
          </button>
        </div>
        <a
          href="https://x.com/marisdigitals11"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground/60 hover:text-foreground transition-colors duration-200"
        >
          Made with ❤️ by marisdigitals11
        </a>
      </footer>

      <NetworkPulse />
    </div>
  );
};

export default Index;
