import { useState } from "react";
import { Lock } from "lucide-react";
import Header from "@/components/Header";
import TerminalHero from "@/components/TerminalHero";
import ELI5Section from "@/components/ELI5Section";
import EventsSidebar from "@/components/EventsSidebar";
import { AdminLogin, AdminPanel } from "@/components/AdminDashboard";
import { Separator } from "@/components/ui/separator";
import { GenlayerEvent, mockEvents } from "@/data/events";

const Index = () => {
  const [view, setView] = useState<"public" | "login" | "admin">("public");
  const [events, setEvents] = useState<GenlayerEvent[]>(mockEvents);

  return (
    <div className="min-h-screen bg-background">
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

      <footer className="border-t border-border py-6 text-center text-xs text-muted-foreground">
        <span>© 2026 Genlayer Hub</span>
        <button
          onClick={() => setView(view === "public" ? "login" : "public")}
          className="ml-3 text-muted-foreground/40 hover:text-muted-foreground transition-colors"
          title="Admin"
        >
          <Lock className="w-3 h-3 inline" />
        </button>
      </footer>
    </div>
  );
};

export default Index;
