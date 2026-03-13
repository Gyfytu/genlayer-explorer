import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const fullText = "Welcome to Genlayer special events hub";

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
      <p className="font-mono text-sm md:text-base text-neon-green tracking-wide">
        {displayed}
        <span className="inline-block w-2 h-5 ml-0.5 bg-neon-green align-middle animate-pulse" />
      </p>
    </div>
  );
};

export default TerminalHero;
