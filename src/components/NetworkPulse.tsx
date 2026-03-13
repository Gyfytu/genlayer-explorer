import { useState, useEffect } from "react";

const NetworkPulse = () => {
  const [stats, setStats] = useState({
    validators: 42,
    contracts: 12404,
    consensusTime: 1.2,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setStats((prev) => ({
        ...prev,
        contracts: prev.contracts + Math.floor(Math.random() * 5) + 1,
      }));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-[hsl(var(--neon-blue))/0.3] bg-[hsl(var(--background))/0.8] backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-evenly gap-6 font-mono text-xs text-muted-foreground">
        <span className="flex items-center gap-2">
          🧠 <span className="text-foreground font-semibold">{stats.validators}</span> AI Validators Online
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[hsl(var(--neon-green))] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[hsl(var(--neon-green))]" />
          </span>
        </span>
        <span className="flex items-center gap-2">
          ⚡ <span className="text-foreground font-semibold">{stats.contracts.toLocaleString()}</span> Intelligent Contracts Executed
        </span>
        <span className="flex items-center gap-2">
          ✅ AI Consensus in <span className="text-foreground font-semibold">{stats.consensusTime}s</span>
        </span>
      </div>
    </div>
  );
};

export default NetworkPulse;
