import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const INSCRIPTION_URL = "https://ee.kobotoolbox.org/x/4TOdIZKM";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-secondary/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-sm font-bold tracking-wider text-primary uppercase mb-3">Inscription</h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Rejoignez la formation
          </h3>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10">
            Cliquez sur le bouton ci-dessous pour accéder au formulaire d'inscription et réserver votre place.
          </p>

          <motion.a
            href={INSCRIPTION_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="button-reserver-accueil"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 bg-primary text-white font-bold text-lg px-10 py-5 rounded-2xl shadow-lg hover:bg-primary/90 transition-colors"
          >
            <ExternalLink size={20} />
            Je réserve ma place
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
