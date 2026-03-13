import { Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="glass-card border-t-0 border-x-0 rounded-none px-6 py-4 flex items-center justify-between sticky top-0 z-50">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-neon-blue to-neon-purple flex items-center justify-center">
          <span className="font-mono font-bold text-sm text-primary-foreground">GL</span>
        </div>
        <span className="text-lg font-bold tracking-tight text-foreground">
          Genlayer <span className="gradient-text">Hub</span>
        </span>
      </div>
      <Button variant="outline" className="neon-border bg-transparent text-foreground gap-2">
        <Wallet className="w-4 h-4" />
        Connect Wallet
      </Button>
    </header>
  );
};

export default Header;
