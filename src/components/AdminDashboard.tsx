import { useState } from "react";
import { Lock, LogIn, Plus, Pencil, Trash2, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { GenlayerEvent, mockEvents } from "@/data/events";

const AdminLogin = ({ onLogin }: { onLogin: () => void }) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleLogin = () => {
    if (password === "admin") {
      onLogin();
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="glass-card p-8 w-full max-w-sm space-y-4 animate-scale-in">
        <div className="text-center space-y-2">
          <Lock className="w-10 h-10 mx-auto text-neon-purple" />
          <h2 className="text-xl font-bold text-foreground">Admin Access</h2>
          <p className="text-sm text-muted-foreground">Enter the admin password</p>
        </div>
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleLogin()}
          className="bg-muted border-border text-foreground"
        />
        {error && <p className="text-destructive text-sm text-center">Incorrect password</p>}
        <Button onClick={handleLogin} className="w-full bg-gradient-to-r from-neon-blue to-neon-purple text-primary-foreground gap-2">
          <LogIn className="w-4 h-4" /> Unlock
        </Button>
      </div>
    </div>
  );
};

const AdminPanel = ({ events, setEvents, onClose }: { events: GenlayerEvent[]; setEvents: (e: GenlayerEvent[]) => void; onClose: () => void }) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState<GenlayerEvent["status"]>("upcoming");

  const addEvent = () => {
    if (!title || !date) return;
    setEvents([...events, { id: Date.now().toString(), title, date, status }]);
    setTitle("");
    setDate("");
  };

  const deleteEvent = (id: string) => setEvents(events.filter((e) => e.id !== id));

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold gradient-text">Admin Dashboard</h2>
        <Button variant="ghost" size="icon" onClick={onClose} className="text-muted-foreground hover:text-foreground">
          <X className="w-5 h-5" />
        </Button>
      </div>

      {/* Add Event Form */}
      <div className="glass-card p-6 space-y-4">
        <h3 className="font-semibold text-foreground">Add New Event</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <Input placeholder="Event title" value={title} onChange={(e) => setTitle(e.target.value)} className="bg-muted border-border text-foreground" />
          <Input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="bg-muted border-border text-foreground" />
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value as GenlayerEvent["status"])}
            className="h-10 rounded-md border border-border bg-muted px-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          >
            <option value="upcoming">Upcoming</option>
            <option value="live">Live</option>
            <option value="completed">Completed</option>
          </select>
        </div>
        <Button onClick={addEvent} disabled={!title || !date} className="bg-gradient-to-r from-neon-blue to-neon-purple text-primary-foreground gap-2">
          <Plus className="w-4 h-4" /> Add Event
        </Button>
      </div>

      {/* Events Table */}
      <div className="glass-card overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border text-muted-foreground">
              <th className="text-left p-4 font-medium">Title</th>
              <th className="text-left p-4 font-medium hidden sm:table-cell">Date</th>
              <th className="text-left p-4 font-medium">Status</th>
              <th className="text-right p-4 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event) => (
              <tr key={event.id} className="border-b border-border/50 hover:bg-muted/30 transition-colors">
                <td className="p-4 text-foreground">{event.title}</td>
                <td className="p-4 text-muted-foreground hidden sm:table-cell">{event.date}</td>
                <td className="p-4">
                  <span className={`font-mono text-xs px-2 py-1 rounded ${
                    event.status === "live" ? "bg-neon-green/10 text-neon-green" :
                    event.status === "upcoming" ? "bg-neon-blue/10 text-neon-blue" :
                    "bg-muted text-muted-foreground"
                  }`}>
                    {event.status}
                  </span>
                </td>
                <td className="p-4 text-right space-x-1">
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground">
                    <Pencil className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-destructive" onClick={() => deleteEvent(event.id)}>
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export { AdminLogin, AdminPanel };
