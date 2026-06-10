import { motion } from "framer-motion";
import { CheckCircle, Database, Smartphone, ShieldAlert, BarChart3, Target, ArrowRight } from "lucide-react";
import { Link } from "wouter";

const objectives = [
  {
    icon: <Database className="w-6 h-6 text-primary" />,
    title: "Créer des formulaires professionnels avec XLSForm",
    description: "Apprenez à concevoir des questionnaires complexes, incluant la logique de saut, les contraintes et les calculs automatiques."
  },
  {
    icon: <Smartphone className="w-6 h-6 text-primary" />,
    title: "Utiliser KoBoCollect sur Android",
    description: "Maîtrisez l'application mobile pour la collecte hors ligne, la gestion des médias et le déploiement sur le terrain."
  },
  {
    icon: <ShieldAlert className="w-6 h-6 text-primary" />,
    title: "Éviter les erreurs fréquentes dans les enquêtes terrain",
    description: "Anticipez et prévenez les problèmes classiques de collecte de données grâce à de bonnes pratiques éprouvées."
  },
  {
    icon: <CheckCircle className="w-6 h-6 text-primary" />,
    title: "Nettoyer et analyser les données efficacement",
    description: "Méthodes et outils pour l'apurement des données brutes et la préparation à l'analyse statistique."
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-primary" />,
    title: "Automatiser certains traitements avec Excel et Power BI",
    description: "Connectez KoboToolbox directement à vos outils d'analyse pour des tableaux de bord mis à jour en temps réel."
  },
  {
    icon: <Target className="w-6 h-6 text-primary" />,
    title: "Concevoir des projets de collecte adaptés aux réalités du terrain",
    description: "Stratégies d'échantillonnage, formation des enquêteurs et gestion de projet de collecte en Afrique francophone."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export function Features() {
  return (
    <section id="objectifs" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-wider text-primary uppercase mb-3">Le Programme</h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
            Ce que vous apprendrez
          </h3>
          <p className="text-lg text-muted-foreground">
            Une formation intensive et pratique orientée vers les besoins réels des professionnels sur le terrain.
          </p>
        </div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {objectives.map((obj, i) => (
            <motion.div 
              key={i} 
              variants={itemVariants}
              className="bg-card p-8 rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                {obj.icon}
              </div>
              
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                {obj.icon}
              </div>
              
              <h4 className="text-xl font-bold text-foreground mb-3 font-serif">
                {obj.title}
              </h4>
              
              <p className="text-muted-foreground leading-relaxed">
                {obj.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link
            href="/programme"
            data-testid="link-programme-detail"
            className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-8 py-4 rounded-xl hover:bg-primary/90 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            Voir le programme détaillé
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
