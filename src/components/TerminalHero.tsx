import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const fullText = "WELCOME TO GENLAYER SPECIAL EVENT HUB";

const TerminalHero = () => {
  const [displayed, setDisplayed] = useState("");
  const [typingDone, setTypingDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayed(fullText.slice(0, i));
      if (i >= fullText.length) {
        clearInterval(interval);
        setTimeout(() => setTypingDone(true), 300);
      }
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mb-8">
      <p className="text-3xl md:text-5xl text-neon-green tracking-wider uppercase font-bold" style={{ fontFamily: "'Space Mono', monospace" }}>
        {displayed}
        <span className="inline-block w-3 h-8 md:h-12 ml-1 bg-neon-green align-middle animate-pulse" />
      </p>
    </div>
  );
};

export default TerminalHero;
