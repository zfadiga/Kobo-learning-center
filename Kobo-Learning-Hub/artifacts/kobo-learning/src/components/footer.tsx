import { Link } from "wouter";
import { SiWhatsapp } from "react-icons/si";
import { Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-14">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 mb-10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded bg-primary flex items-center justify-center text-white font-bold text-xl">
                K
              </div>
              <span className="font-serif font-bold text-xl tracking-tight text-white">
                Kobo Learning Center
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              L'expertise en collecte de données numériques pour les
              professionnels du terrain en Afrique francophone.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/programme"
                  className="text-sm hover:text-white transition-colors"
                  data-testid="footer-link-programme"
                >
                  Programme
                </Link>
              </li>
              <li>
                <a
                  href="#apropos"
                  className="text-sm hover:text-white transition-colors"
                  data-testid="footer-link-apropos"
                >
                  À propos
                </a>
              </li>
              <li>
                <a
                  href="/#objectifs"
                  className="text-sm hover:text-white transition-colors"
                  data-testid="footer-link-objectifs"
                >
                  Objectifs
                </a>
              </li>
              <li>
                <a
                  href="https://ee.kobotoolbox.org/x/4TOdIZKM"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:text-primary/80 font-semibold transition-colors"
                  data-testid="footer-link-inscrire"
                >
                  S'inscrire
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
              Nous contacter
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://wa.me/2250544008711"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-sm hover:text-white transition-colors group"
                  data-testid="footer-link-whatsapp"
                >
                  <SiWhatsapp className="w-4 h-4 text-[#25D366] shrink-0" />
                  +225 05 44 00 87 11
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@kobolearningcenter.com"
                  className="flex items-center gap-2.5 text-sm hover:text-white transition-colors"
                  data-testid="footer-link-email"
                >
                  <Mail className="w-4 h-4 text-primary shrink-0" />
                  contact@kobolearningcenter.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 text-sm text-center">
          <p>&copy; {currentYear} Kobo Learning Center. Tous droits réservés.</p>
          <p className="mt-2 text-xs text-slate-500">
            KoboToolbox est une marque déposée de Kobo Inc. Ce site de formation est indépendant et n'est pas affilié officiellement à Kobo Inc.
          </p>
        </div>
      </div>
    </footer>
  );
}
