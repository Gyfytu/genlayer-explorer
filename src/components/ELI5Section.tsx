import { useState } from "react";
import { Loader2, RefreshCw } from "lucide-react";

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
