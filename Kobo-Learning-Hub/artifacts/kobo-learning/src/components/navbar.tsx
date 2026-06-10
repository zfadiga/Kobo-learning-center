import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "wouter";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollTo("home")}>
            <div className="w-8 h-8 rounded bg-primary flex items-center justify-center text-white font-bold text-xl">
              K
            </div>
            <span className={`font-serif font-bold text-xl tracking-tight ${isScrolled ? "text-foreground" : "text-foreground sm:text-white"}`}>
              Kobo Learning Center
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollTo("objectifs")} className={`text-sm font-medium transition-colors hover:text-primary ${isScrolled ? "text-muted-foreground" : "text-white/90"}`}>
              Objectifs
            </button>
            <Link
              href="/programme"
              className={`text-sm font-medium transition-colors hover:text-primary ${isScrolled ? "text-muted-foreground" : "text-white/90"}`}
              data-testid="link-programme-desktop"
            >
              Programme
            </Link>
            <button onClick={() => scrollTo("apropos")} className={`text-sm font-medium transition-colors hover:text-primary ${isScrolled ? "text-muted-foreground" : "text-white/90"}`}>
              À propos
            </button>

            <a
              href="https://ee.kobotoolbox.org/x/4TOdIZKM"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="link-inscrire-desktop"
              className={`px-5 py-2.5 rounded-md text-sm font-semibold transition-all ${
                isScrolled
                  ? "bg-primary text-white hover:bg-primary/90"
                  : "bg-white text-primary hover:bg-white/90"
              }`}
            >
              S'inscrire
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 ${isScrolled ? "text-foreground" : "text-foreground"}`}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-border shadow-lg p-4 flex flex-col space-y-4">
          <button onClick={() => scrollTo("objectifs")} className="text-left text-foreground font-medium p-2 hover:bg-muted rounded-md">
            Objectifs
          </button>
          <Link
            href="/programme"
            className="text-left text-foreground font-medium p-2 hover:bg-muted rounded-md block"
            data-testid="link-programme-mobile"
          >
            Programme
          </Link>
          <button onClick={() => scrollTo("apropos")} className="text-left text-foreground font-medium p-2 hover:bg-muted rounded-md">
            À propos
          </button>

          <a
            href="https://ee.kobotoolbox.org/x/4TOdIZKM"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="link-inscrire-mobile"
            className="bg-primary text-white font-semibold p-3 rounded-md mt-2 block text-center"
          >
            S'inscrire à la formation
          </a>
        </div>
      )}
    </nav>
  );
}
