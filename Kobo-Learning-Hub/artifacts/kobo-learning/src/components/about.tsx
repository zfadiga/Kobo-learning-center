import { motion } from "framer-motion";
import { BookOpen, Users, Globe } from "lucide-react";

export function About() {
  return (
    <section id="apropos" className="py-24 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold tracking-wider text-primary uppercase mb-3">Notre Mission</h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
              Transformer la collecte de données en Afrique francophone
            </h3>
            
            <div className="space-y-6 text-lg text-foreground/80">
              <p>
                La qualité d'une recherche, d'une évaluation ou d'un projet de développement dépend avant tout de la qualité des données collectées sur le terrain.
              </p>
              <p>
                Kobo Learning Center est né d'un constat simple : malgré la puissance d'outils comme KoboToolbox, de nombreux professionnels manquent de maîtrise technique pour en exploiter tout le potentiel, menant à des erreurs coûteuses en temps et en ressources.
              </p>
              <p>
                Notre centre propose un accompagnement sans jargon technique superflu, direct et basé sur la pratique. Nous formons les professionnels à construire des systèmes de collecte robustes, même dans les environnements les plus difficiles.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid gap-6"
          >
            <div className="bg-white p-6 rounded-xl shadow-sm border border-border flex gap-4 items-start">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-foreground mb-2">Pédagogie Pratique</h4>
                <p className="text-muted-foreground">Apprentissage par l'étude de cas réels. Chaque concept est immédiatement appliqué à la création de formulaires.</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-border flex gap-4 items-start">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-foreground mb-2">Expertise Terrain</h4>
                <p className="text-muted-foreground">Nos formateurs connaissent les réalités du terrain : zones sans connexion, enquêteurs novices, et urgence des déploiements.</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-border flex gap-4 items-start">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-foreground mb-2">Réseau Francophone</h4>
                <p className="text-muted-foreground">Rejoignez une communauté grandissante d'experts en données à travers l'Afrique de l'Ouest et Centrale.</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
