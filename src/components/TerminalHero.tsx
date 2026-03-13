import { useState, useEffect, useRef } from "react";

const fullText = "WELCOME TO GENLAYER SPECIAL EVENTS/CHALLENGES HUB";

const TerminalHero = () => {
  const [displayed, setDisplayed] = useState("");
  const [typingDone, setTypingDone] = useState(false);
  const indexRef = useRef(0);

  useEffect(() => {
    indexRef.current = 0;
    setDisplayed("");
    setTypingDone(false);

    const interval = setInterval(() => {
      indexRef.current += 1;
      const next = fullText.slice(0, indexRef.current);
      setDisplayed(next);
      if (indexRef.current >= fullText.length) {
        clearInterval(interval);
        setTimeout(() => setTypingDone(true), 300);
      }
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mb-8">
      <p className="text-3xl md:text-5xl text-neon-green tracking-wider uppercase font-bold" style={{ fontFamily: "'Space Mono', monospace", textShadow: '0 0 10px hsl(142 76% 50% / 0.6), 0 0 30px hsl(142 76% 50% / 0.3), 0 0 60px hsl(142 76% 50% / 0.15)' }}>
        {displayed}
        <span className="inline-block w-3 h-8 md:h-12 ml-1 bg-neon-green align-middle animate-pulse" />
      </p>
    </div>
  );
};

export default TerminalHero;
