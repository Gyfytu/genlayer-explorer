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
    <div className="mb-8 space-y-4">
      <p className="font-mono text-sm md:text-base text-neon-green tracking-wide">
        {displayed}
        <span className="inline-block w-2 h-5 ml-0.5 bg-neon-green align-middle animate-pulse" />
      </p>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={typingDone ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
        style={{ opacity: typingDone ? undefined : 0 }}
      >
        <span className="bg-gradient-to-r from-neon-purple to-neon-blue bg-clip-text text-transparent">
          Explain Genlayer like I'm 5
        </span>
      </motion.h1>
    </div>
  );
};

export default TerminalHero;
