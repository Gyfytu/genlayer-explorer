import { useState } from "react";
import { Loader2, RefreshCw } from "lucide-react";

const ELI5Section = () => {
  const [state, setState] = useState<"idle" | "loading" | "done">("idle");

  const handleClick = () => {
    setState("loading");
    setTimeout(() => setState("done"), 2000);
  };

  const handleReset = () => setState("idle");

  return (
    <div className="space-y-6">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
        <span className="bg-gradient-to-r from-neon-purple to-neon-blue bg-clip-text text-transparent">
          Explain Genlayer like I'm 5
        </span>
      </h1>
      <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
        Click the button below to have our Genlayer Intelligent Contract break down how it works in simple terms.
      </p>

      {state === "idle" && (
        <div className="flex justify-center pt-4 animate-fade-in">
          <button
            onClick={handleClick}
            className="px-10 py-5 text-xl md:text-2xl font-bold rounded-2xl bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow-[0_0_30px_hsl(260_80%_60%/0.4),0_0_60px_hsl(230_80%_60%/0.2)] hover:shadow-[0_0_40px_hsl(260_80%_60%/0.6),0_0_80px_hsl(230_80%_60%/0.3)] hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            🤖 Explain it to me!
          </button>
        </div>
      )}

      {state === "loading" && (
        <div className="flex flex-col items-center gap-3 py-12 animate-fade-in">
          <Loader2 className="w-10 h-10 text-neon-purple animate-spin" />
          <p className="text-muted-foreground font-mono text-sm">
            Connecting to Genlayer AI consensus...
          </p>
        </div>
      )}

      {state === "done" && (
        <div className="space-y-6 animate-fade-in">
          <div className="glass-card p-6 md:p-8 backdrop-blur-xl border border-white/10 shadow-[0_0_30px_hsl(260_80%_60%/0.15)]">
            <div className="space-y-4 text-base md:text-lg text-foreground leading-relaxed">
              <p>
                Imagine you and your friends share a magic notebook to keep track of things. Normally, a magic notebook can only do simple math (like traditional blockchains). But GenLayer's notebook has a super-smart robot brain built into it!
              </p>
              <p>
                Instead of standard smart contracts, GenLayer uses{" "}
                <span className="font-bold text-[hsl(var(--neon-blue))] drop-shadow-[0_0_8px_hsl(var(--neon-blue)/0.6)]">
                  Intelligent Contracts
                </span>{" "}
                written in Python. These contracts can natively search the internet, understand human language, and make subjective decisions without needing external oracles.
              </p>
              <p>
                To ensure the AI is always fair and accurate, the network uses a unique consensus mechanism called{" "}
                <span className="font-bold text-[hsl(var(--neon-purple))] drop-shadow-[0_0_8px_hsl(var(--neon-purple)/0.6)]">
                  Optimistic Democracy
                </span>
                . Multiple AI-connected validators check the work and vote on the correct outcome. It is the first blockchain that can actually think!
              </p>
            </div>

            <div className="flex flex-wrap gap-3 mt-6">
              <a
                href="https://docs.genlayer.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-lg bg-[hsl(var(--neon-purple)/0.25)] text-foreground border border-[hsl(var(--neon-purple)/0.4)] hover:bg-[hsl(var(--neon-purple)/0.4)] transition-all duration-200"
              >
                📖 Read the Docs
              </a>
              <a
                href="https://www.genlayer.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-lg bg-transparent text-foreground border border-[hsl(var(--neon-blue)/0.5)] hover:shadow-[0_0_15px_hsl(var(--neon-blue)/0.4)] hover:border-[hsl(var(--neon-blue))] transition-all duration-200"
              >
                🌐 Visit GenLayer.com
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <button
              onClick={handleReset}
              className="flex items-center gap-2 px-4 py-2 text-sm text-muted-foreground hover:text-foreground border border-border/50 rounded-lg hover:border-border transition-colors duration-200"
            >
              <RefreshCw className="w-4 h-4" />
              Regenerate another explanation
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ELI5Section;
