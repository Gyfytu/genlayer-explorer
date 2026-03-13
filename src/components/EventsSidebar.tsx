import { useState } from "react";
import { Calendar, Radio, ExternalLink } from "lucide-react";
import { GenlayerEvent, mockEvents } from "@/data/events";
import { Badge } from "@/components/ui/badge";

const StatusBadge = ({ status }: { status: GenlayerEvent["status"] }) => {
  if (status === "live") {
    return (
      <Badge className="bg-neon-green/10 text-neon-green border-neon-green/30 gap-1.5 font-mono text-xs">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-green opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-green" />
        </span>
        Live
      </Badge>
    );
  }
  if (status === "upcoming") {
    return (
      <Badge className="bg-neon-blue/10 text-neon-blue border-neon-blue/30 font-mono text-xs">
        Upcoming
      </Badge>
    );
  }
  return (
    <Badge variant="secondary" className="bg-muted text-muted-foreground border-border font-mono text-xs">
      Completed
    </Badge>
  );
};

type FilterTab = "all" | "upcoming" | "past";

interface EventsSidebarProps {
  events?: GenlayerEvent[];
}

const EventsSidebar = ({ events = mockEvents }: EventsSidebarProps) => {
  const [filter, setFilter] = useState<FilterTab>("all");

  const filteredEvents = events.filter((event) => {
    if (filter === "all") return true;
    if (filter === "upcoming") return event.status === "upcoming" || event.status === "live";
    return event.status === "completed";
  });

  const counts = {
    all: events.length,
    upcoming: events.filter((e) => e.status === "upcoming" || e.status === "live").length,
    past: events.filter((e) => e.status === "completed").length,
  };

  const tabs: { key: FilterTab; label: string }[] = [
    { key: "all", label: "All" },
    { key: "upcoming", label: "Upcoming" },
    { key: "past", label: "Past" },
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div className="flex items-center gap-2">
          <Radio className="w-5 h-5 text-neon-purple" />
          <h2 className="text-lg font-semibold text-foreground">Special Events</h2>
        </div>
        <div className="flex items-center gap-1 rounded-lg bg-muted/50 p-1">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setFilter(tab.key)}
              className={`px-3 py-1 rounded-md text-xs font-mono transition-all duration-200 ${
                filter === tab.key
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab.label}
              <span className={`ml-1.5 inline-flex items-center justify-center min-w-[1.25rem] h-5 px-1 rounded-full text-[10px] font-mono ${
                filter === tab.key
                  ? "bg-primary/15 text-primary"
                  : "bg-muted text-muted-foreground"
              }`}>
                {counts[tab.key]}
              </span>
            </button>
          ))}
        </div>
      </div>
      <div key={filter} className="grid grid-cols-1 md:grid-cols-3 gap-4 animate-fade-in">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
            <div key={event.id} className="glass-card-hover p-4 space-y-2">
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-sm font-medium text-foreground leading-snug">{event.title}</h3>
                <StatusBadge status={event.status} />
              </div>
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Calendar className="w-3 h-3" />
                {event.date}
              </div>
            </div>
          ))
        ) : (
          <p className="text-sm text-muted-foreground col-span-full text-center py-8">
            No events found.
          </p>
        )}
      </div>
    </div>
  );
};

export default EventsSidebar;
