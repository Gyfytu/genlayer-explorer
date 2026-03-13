import { useState } from "react";
import { Lock } from "lucide-react";
import Header from "@/components/Header";
import ELI5Section from "@/components/ELI5Section";
import EventsSidebar from "@/components/EventsSidebar";
import { AdminLogin, AdminPanel } from "@/components/AdminDashboard";
import { GenlayerEvent, mockEvents } from "@/data/events";

const Index = () => {
  const [view, setView] = useState<"public" | "login" | "admin">("public");
  const [events, setEvents] = useState<GenlayerEvent[]>(mockEvents);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {view === "public" && (
          <div className="grid grid-cols-1 lg:grid-cols-[7fr_3fr] gap-8 animate-fade-in">
            <ELI5Section />
            <EventsSidebar events={events} />
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
