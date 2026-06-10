import { motion } from "framer-motion";
import { ArrowRight, FileSpreadsheet } from "lucide-react";

export function Hero() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center pt-20 pb-16 overflow-hidden">
      {/* Background with deep blue gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-primary to-blue-900 z-0"></div>
      
      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:32px_32px] z-0"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-white/90 text-sm font-medium mb-6 border border-white/20">
              <FileSpreadsheet size={16} />
              <span>Formation Pratique KoboToolbox</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-6">
              Maîtrisez la collecte de données sur le terrain.
            </h1>
            
            <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
              Le centre de formation de référence pour les chercheurs, ONG et professionnels de données en Afrique francophone. Devenez un expert KoboToolbox.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://ee.kobotoolbox.org/x/4TOdIZKM"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="button-inscrire-hero"
                className="w-full sm:w-auto px-8 py-4 rounded-lg bg-white text-primary font-bold text-lg hover:bg-gray-50 transition-colors shadow-lg shadow-black/10 flex items-center justify-center gap-2"
              >
                S'inscrire maintenant
                <ArrowRight size={20} />
              </a>
              <button 
                onClick={() => document.getElementById("objectifs")?.scrollIntoView({ behavior: "smooth" })}
                className="w-full sm:w-auto px-8 py-4 rounded-lg bg-primary/20 text-white font-medium text-lg hover:bg-primary/30 transition-colors border border-white/20"
              >
                Découvrir le programme
              </button>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative bottom wave/curve */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto text-background fill-current">
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  );
}
