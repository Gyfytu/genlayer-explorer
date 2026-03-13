import { Calendar, Radio } from "lucide-react";
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

interface EventsSidebarProps {
  events?: GenlayerEvent[];
}

const EventsSidebar = ({ events = mockEvents }: EventsSidebarProps) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Radio className="w-5 h-5 text-neon-purple" />
        <h2 className="text-lg font-semibold text-foreground">Special Events</h2>
      </div>
      <div className="space-y-3">
        {events.map((event) => (
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
        ))}
      </div>
    </div>
  );
};

export default EventsSidebar;
