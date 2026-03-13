import { useState } from "react";
import { Send, Loader2, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const ELI5Section = () => {
  const [text, setText] = useState("");
  const [state, setState] = useState<"idle" | "loading" | "done">("idle");

  const handleSubmit = () => {
    if (!text.trim()) return;
    setState("loading");
    setTimeout(() => setState("done"), 3000);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl md:text-4xl font-bold gradient-text leading-tight">
          Explain Genlayer Like I'm 5
        </h1>
        <p className="mt-3 text-muted-foreground text-sm md:text-base leading-relaxed">
          Our Intelligent Contract will evaluate your explanation based on accuracy and simplicity.
        </p>
      </div>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Genlayer is like a group of really smart robots that all work together to make sure everyone agrees on the same answer..."
        className="w-full h-40 glass-card p-4 text-sm text-foreground placeholder:text-muted-foreground resize-none focus:outline-none focus:border-neon-blue/50 focus:shadow-neon-blue transition-all duration-300"
        disabled={state === "loading"}
      />

      <Button
        onClick={handleSubmit}
        disabled={state === "loading" || !text.trim()}
        className="w-full bg-gradient-to-r from-neon-blue to-neon-purple text-primary-foreground font-semibold gap-2 h-12 text-base hover:opacity-90 transition-opacity disabled:opacity-40"
      >
        {state === "loading" ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Genlayer AI is evaluating consensus...
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            Submit to Genlayer AI
          </>
        )}
      </Button>

      {state === "done" && (
        <div className="glass-card p-6 animate-scale-in">
          <div className="flex items-center gap-3 mb-4">
            <CheckCircle2 className="w-6 h-6 text-neon-green" />
            <h3 className="font-semibold text-foreground">Consensus Reached</h3>
          </div>
          <div className="flex items-end gap-2 mb-3">
            <span className="text-5xl font-bold gradient-text">85</span>
            <span className="text-xl text-muted-foreground mb-1">/100</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Great job! Your explanation accurately captures Genlayer's core concepts with clear, simple language. The AI validators reached consensus on your score.
          </p>
        </div>
      )}
    </div>
  );
};

export default ELI5Section;
