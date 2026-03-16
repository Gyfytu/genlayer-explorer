import { useState } from "react";
import { Lock, LogIn, Plus, Pencil, Trash2, ArrowLeft, Image } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { GenlayerEvent } from "@/data/events";
import { supabase } from "@/integrations/supabase/client";

const AdminLogin = ({ onLogin }: { onLogin: () => void }) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleLogin = () => {
    if (password === "Swanky112#") {
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
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [link, setLink] = useState("");
  const [image, setImage] = useState("");
  const [imagePreview, setImagePreview] = useState("");
  const [discordLink, setDiscordLink] = useState("");
  const [twitterLink, setTwitterLink] = useState("");
  const [status, setStatus] = useState<GenlayerEvent["status"]>("upcoming");

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      const result = reader.result as string;
      setImage(result);
      setImagePreview(result);
    };
    reader.readAsDataURL(file);
  };

  const addEvent = () => {
    if (!title || !startDate) return;
    const dateStr = endDate ? `${startDate} — ${endDate}` : startDate;
    setEvents([...events, {
      id: Date.now().toString(),
      title,
      date: dateStr,
      endDate: endDate || undefined,
      status,
      link: link || undefined,
      image: image || undefined,
      discordLink: discordLink || undefined,
      twitterLink: twitterLink || undefined,
    }]);
    setTitle("");
    setStartDate("");
    setEndDate("");
    setLink("");
    setImage("");
    setImagePreview("");
    setDiscordLink("");
    setTwitterLink("");
  };

  const deleteEvent = (id: string) => setEvents(events.filter((e) => e.id !== id));

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold gradient-text">Admin Dashboard</h2>
        <Button variant="outline" onClick={onClose} className="gap-2 text-muted-foreground hover:text-foreground border-border">
          <ArrowLeft className="w-4 h-4" /> Back to Main Hub
        </Button>
      </div>

      {/* Add Event Form */}
      <div className="glass-card p-6 space-y-4">
        <h3 className="font-semibold text-foreground">Add New Event</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Input placeholder="Event title" value={title} onChange={(e) => setTitle(e.target.value)} className="bg-muted border-border text-foreground" />
          <Input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} className="bg-muted border-border text-foreground" placeholder="Start date" />
          <Input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} className="bg-muted border-border text-foreground" placeholder="End date (optional)" />
          <Input placeholder="Event link (optional)" value={link} onChange={(e) => setLink(e.target.value)} className="bg-muted border-border text-foreground" />
          <div className="flex items-center gap-2">
            <label className="flex items-center gap-2 h-10 rounded-md border border-border bg-muted px-3 text-sm text-muted-foreground cursor-pointer hover:text-foreground transition-colors flex-1">
              <Image className="w-4 h-4 shrink-0" />
              <span className="truncate">{imagePreview ? "Image selected ✓" : "Upload image (optional)"}</span>
              <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
            </label>
            {imagePreview && (
              <img src={imagePreview} alt="Preview" className="w-10 h-10 rounded object-cover border border-border" />
            )}
          </div>
          <Input placeholder="Discord link (optional)" value={discordLink} onChange={(e) => setDiscordLink(e.target.value)} className="bg-muted border-border text-foreground" />
          <Input placeholder="Twitter/X link (optional)" value={twitterLink} onChange={(e) => setTwitterLink(e.target.value)} className="bg-muted border-border text-foreground" />
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
        <Button onClick={addEvent} disabled={!title || !startDate} className="bg-gradient-to-r from-neon-blue to-neon-purple text-primary-foreground gap-2">
          <Plus className="w-4 h-4" /> Add Event
        </Button>
      </div>

      {/* Events Table */}
      <div className="glass-card overflow-hidden overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border text-muted-foreground">
              <th className="text-left p-4 font-medium">Title</th>
              <th className="text-left p-4 font-medium hidden sm:table-cell">Date</th>
              <th className="text-left p-4 font-medium hidden sm:table-cell">Image</th>
              <th className="text-left p-4 font-medium hidden md:table-cell">Links</th>
              <th className="text-left p-4 font-medium">Status</th>
              <th className="text-right p-4 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event) => (
              <tr key={event.id} className="border-b border-border/50 hover:bg-muted/30 transition-colors">
                <td className="p-4 text-foreground">{event.title}</td>
                <td className="p-4 text-muted-foreground hidden sm:table-cell">{event.date}</td>
                <td className="p-4 hidden sm:table-cell">
                  {event.image ? (
                    <img src={event.image} alt="" className="w-10 h-10 rounded object-cover" />
                  ) : (
                    <span className="text-xs text-muted-foreground">—</span>
                  )}
                </td>
                <td className="p-4 hidden md:table-cell">
                  <div className="flex flex-col gap-1">
                    {event.link && (
                      <a href={event.link} target="_blank" rel="noopener noreferrer" className="text-xs text-neon-blue hover:underline truncate max-w-[120px] inline-block">
                        🔗 Event
                      </a>
                    )}
                    {event.discordLink && (
                      <a href={event.discordLink} target="_blank" rel="noopener noreferrer" className="text-xs text-neon-purple hover:underline truncate max-w-[120px] inline-block">
                        💬 Discord
                      </a>
                    )}
                    {event.twitterLink && (
                      <a href={event.twitterLink} target="_blank" rel="noopener noreferrer" className="text-xs text-neon-blue hover:underline truncate max-w-[120px] inline-block">
                        🐦 Twitter/X
                      </a>
                    )}
                    {!event.link && !event.discordLink && !event.twitterLink && (
                      <span className="text-xs text-muted-foreground">—</span>
                    )}
                  </div>
                </td>
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
