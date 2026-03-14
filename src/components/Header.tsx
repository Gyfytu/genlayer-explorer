import genlayerLogo from "@/assets/genlayer-logo.jpg";

const Header = () => {
  return (
    <header className="glass-card border-t-0 border-x-0 rounded-none px-6 py-4 flex items-center sticky top-0 z-50">
      <div className="flex items-center gap-2">
        <img src={genlayerLogo} alt="Genlayer" className="w-8 h-8 rounded-lg invert" />
        <span className="text-lg font-bold tracking-tight text-foreground">
          Genlayer <span className="gradient-text">Hub</span>
        </span>
      </div>
    </header>
  );
};

export default Header;
