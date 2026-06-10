import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, BookOpen, ChevronRight, ExternalLink } from "lucide-react";

const INSCRIPTION_URL = "https://ee.kobotoolbox.org/x/4TOdIZKM";

const modules = [
  {
    number: "01",
    title: "Introduction à KoBoToolbox et à la collecte numérique de données",
    points: [
      "Comprendre les enjeux de la collecte de données numériques",
      "Différence entre collecte papier et collecte digitale",
      "Présentation de KoBoToolbox et ses cas d'utilisation",
      "Découverte de l'interface de KoBoToolbox",
      "Vue d'ensemble du cycle de gestion des données",
    ],
  },
  {
    number: "02",
    title: "Création et prise en main d'un compte KoBoToolbox",
    points: [
      "Création d'un compte KoBoToolbox",
      "Paramétrage du profil utilisateur",
      "Découverte du tableau de bord",
      "Création d'un projet",
      "Organisation des formulaires et bonnes pratiques",
    ],
  },
  {
    number: "03",
    title: "Créer son premier formulaire avec le Form Builder",
    points: [
      "Introduction au Form Builder",
      "Comprendre la structure d'un formulaire",
      "Création des premières questions",
      "Configuration des libellés, descriptions et options",
      "Prévisualisation et sauvegarde du formulaire",
    ],
  },
  {
    number: "04",
    title: "Les types de questions (Question Types)",
    points: [
      "Questions texte et numériques",
      "Questions date, heure et géolocalisation",
      "Questions à choix unique et multiple",
      "Questions image, audio, vidéo et signature",
      "Paramétrage des validations et restrictions",
    ],
  },
  {
    number: "05",
    title: "Concevoir un formulaire professionnel avec Form Builder",
    points: [
      "Structurer un formulaire efficacement",
      "Créer des groupes et sections",
      "Ajouter des contraintes et champs obligatoires",
      "Gestion de la logique simple",
      "Bonnes pratiques UX pour améliorer la collecte",
    ],
  },
  {
    number: "06",
    title: "Questions avancées et logique conditionnelle",
    points: [
      "Comprendre les questions avancées",
      "Utilisation du skip logic (affichage conditionnel)",
      "Calculs automatiques simples",
      "Variables et expressions conditionnelles",
      "Cas pratiques de formulaires intelligents",
    ],
  },
  {
    number: "07",
    title: "Maîtriser XLSForm pour créer des formulaires avancés",
    points: [
      "Introduction à XLSForm",
      "Comprendre la structure des feuilles survey, choices et settings",
      "Création d'un formulaire dans Excel",
      "Conditions, calculs et validations dans XLSForm",
      "Importation et correction d'erreurs",
    ],
  },
  {
    number: "08",
    title: "Déploiement terrain avec KoBoCollect",
    points: [
      "Installation et configuration de KoBoCollect",
      "Connexion à un serveur KoBoToolbox",
      "Télécharger un formulaire sur mobile",
      "Collecte de données en ligne et hors connexion",
      "Synchronisation des données collectées",
    ],
  },
  {
    number: "09",
    title: "Gestion, nettoyage et exploitation des données",
    points: [
      "Visualiser les soumissions",
      "Contrôler la qualité des données",
      "Modifier, valider et exporter les données",
      "Exportation vers Excel et CSV",
      "Introduction au nettoyage et à l'analyse des données",
    ],
  },
  {
    number: "10",
    title: "Automatisation et intégration avec l'API KoBoToolbox",
    points: [
      "Comprendre le fonctionnement des APIs",
      "Introduction à l'API KoBoToolbox",
      "Récupérer automatiquement des données via API",
      "Connecter KoBoToolbox à Excel, Power BI ou d'autres outils",
      "Projet pratique : automatiser un flux simple de données",
    ],
  },
  {
    number: "11",
    title: "Projet pratique complet de A à Z",
    points: [
      "Concevoir un formulaire professionnel complet",
      "Déployer une collecte simulée ou réelle",
      "Collecter des données avec KoBoCollect",
      "Exporter, nettoyer et analyser les données",
      "Réaliser un mini projet terrain prêt à l'emploi",
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.07 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default function Programme() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <div className="bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl py-16 pt-24">
          <Link
            href="/"
            data-testid="link-back-home"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm font-medium mb-8 transition-colors"
          >
            <ArrowLeft size={16} />
            Retour à l'accueil
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
              <BookOpen size={20} className="text-white" />
            </div>
            <span className="text-white/70 text-sm font-semibold uppercase tracking-wider">
              Programme de formation
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold leading-tight mb-4">
            Formation KoBoToolbox
          </h1>
          <p className="text-white/80 text-lg max-w-2xl">
            11 modules progressifs pour maîtriser la collecte de données
            numériques de A à Z — du formulaire simple au projet terrain
            complet.
          </p>

          <div className="flex flex-wrap gap-6 mt-8 text-sm text-white/70">
            <span className="flex items-center gap-1.5">
              <ChevronRight size={14} className="text-white/50" />
              11 modules
            </span>
            <span className="flex items-center gap-1.5">
              <ChevronRight size={14} className="text-white/50" />
              Formation 100% virtuelle
            </span>
            <span className="flex items-center gap-1.5">
              <ChevronRight size={14} className="text-white/50" />
              Pratique et orientée terrain
            </span>
          </div>
        </div>
      </div>

      {/* Modules list */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl py-16">
        <motion.div
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {modules.map((mod) => (
            <motion.div
              key={mod.number}
              variants={itemVariants}
              data-testid={`card-module-${mod.number}`}
              className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col sm:flex-row">
                {/* Module number sidebar */}
                <div className="sm:w-20 bg-primary/5 border-b sm:border-b-0 sm:border-r border-border flex items-center justify-center py-4 sm:py-0">
                  <span className="text-2xl font-serif font-bold text-primary/40">
                    {mod.number}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 p-6 sm:p-8">
                  <h2 className="text-lg sm:text-xl font-serif font-bold text-foreground mb-4">
                    Module {mod.number} — {mod.title}
                  </h2>
                  <ul className="space-y-2">
                    {mod.points.map((point, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2.5 text-muted-foreground text-sm leading-relaxed"
                      >
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/50 shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-16 bg-primary rounded-2xl p-8 md:p-12 text-center text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <h3 className="text-2xl md:text-3xl font-serif font-bold mb-3">
            Prêt à vous lancer ?
          </h3>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Accédez au formulaire d'inscription en ligne et réservez votre place dès maintenant.
          </p>
          <a
            href={INSCRIPTION_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="button-reserver-programme"
            className="w-full sm:w-auto px-8 py-4 rounded-lg bg-white text-primary font-bold text-lg hover:bg-gray-50 transition-colors shadow-lg shadow-black/10 inline-flex items-center justify-center gap-2"
          >
            Je réserve ma place
            <ExternalLink size={20} />
          </a>
        </motion.div>
      </div>
    </div>
  );
}
