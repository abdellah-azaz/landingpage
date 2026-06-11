import React from 'react';
import { 
  ArrowLeft, 
  Book, 
  Code, 
  Terminal, 
  Shield, 
  Server, 
  Monitor,
  CheckCircle2
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Documentation = () => {
  const sections = [
    {
      title: "Introduction",
      icon: <Book className="w-5 h-5" />,
      content: "Crypton est une solution de sécurité hybride combinant la puissance du C pour l'analyse antivirale, FastAPI pour l'orchestration backend, et Avalonia .NET pour l'interface utilisateur multi-plateforme."
    },
    {
      title: "Backend (FastAPI)",
      icon: <Server className="w-5 h-5" />,
      content: "Le backend gère les scans asynchrones, la gestion des utilisateurs via JWT, et l'interface avec le moteur AV-Shield. Il propose une API REST complète documentée via Swagger."
    },
    {
      title: "Moteur AV-Shield",
      icon: <Shield className="w-5 h-5" />,
      content: "Développé en C, ce moteur effectue des analyses statiques et heuristiques sur les fichiers. Il gère la quarantaine et génère des rapports JSON détaillés."
    },
    {
      title: "Frontend (.NET)",
      icon: <Monitor className="w-5 h-5" />,
      content: "L'application desktop utilise Avalonia pour une interface fluide sous Windows, Linux et macOS. Elle communique avec le backend via HTTPS pour l'affichage de l'état de sécurité."
    }
  ];

  return (
    <div className="min-h-screen bg-bg-dark py-20">
      <div className="container max-w-4xl">
        <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-white transition-colors mb-12">
          <ArrowLeft className="w-4 h-4" />
          Retour à l'accueil
        </Link>

        <header className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <Book className="w-8 h-8 text-primary" />
            <h1 className="text-4xl">Documentation Technique</h1>
          </div>
          <p className="text-text-muted text-lg">
            Guide complet pour comprendre l'architecture et l'utilisation de la suite de sécurité Crypton.
          </p>
        </header>

        <div className="space-y-12">
          {sections.map((section, i) => (
            <div key={i} className="glass-panel p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                  {section.icon}
                </div>
                <h2 className="text-2xl">{section.title}</h2>
              </div>
              <p className="text-text-muted mb-6 leading-relaxed">
                {section.content}
              </p>
              
              <div className="bg-black/40 rounded-xl p-4 font-mono text-sm border border-white/5">
                <div className="flex items-center gap-2 text-xs text-primary mb-2">
                  <Terminal className="w-3 h-3" />
                  <span>DÉPLOIEMENT RAPIDE</span>
                </div>
                <div className="text-text-muted">
                  {i === 0 ? "git clone https://github.com/crypton/security" : 
                   i === 1 ? "uvicorn main:app --reload" :
                   i === 2 ? "make build-engine" :
                   "dotnet run --project MonAppMain"}
                </div>
              </div>
            </div>
          ))}
        </div>

        <footer className="mt-20 pt-12 border-t border-white/5 text-center">
          <p className="text-sm text-text-muted">
            Besoin d'aide supplémentaire ? <br/>
            <a href="mailto:support@crypton.sec" className="text-primary hover:underline">Contactez l'équipe de développement</a>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Documentation;
