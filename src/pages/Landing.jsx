import React, { useEffect, useState } from 'react';
import {
    Shield,
    Zap,
    Lock,
    Activity,
    Cpu,
    Terminal,
    Globe,
    ShieldCheck,
    Search,
    BrainCircuit,
    Server,
    Monitor,
    Book
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Landing = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const features = [
        {
            icon: <Shield className="w-8 h-8 text-cyan-400" />,
            title: "AV-Shield Engine",
            description: "Notre moteur antivirus haute performance écrit en C, offrant une détection rapide et efficace des menaces."
        },
        {
            icon: <Activity className="w-8 h-8 text-purple-400" />,
            title: "Moniteur Temps Réel",
            description: "Surveillance continue du système de fichiers pour bloquer les menaces au moment même où elles apparaissent."
        },
        {
            icon: <BrainCircuit className="w-8 h-8 text-pink-400" />,
            title: "Analyse IA",
            description: "Utilisation du Machine Learning pour analyser les comportements suspects et identifier les malwares inconnus."
        },
        {
            icon: <Lock className="w-8 h-8 text-blue-400" />,
            title: "Coffre-fort Sécurisé",
            description: "Chiffrement AES-GCM 256 bits pour vos fichiers les plus sensibles, géré directement depuis l'interface."
        },
        {
            icon: <Terminal className="w-8 h-8 text-green-400" />,
            title: "Gestion SSH",
            description: "Connectez-vous et gérez vos serveurs distants avec une couche de sécurité supplémentaire."
        },
        {
            icon: <Zap className="w-8 h-8 text-yellow-400" />,
            title: "Scan Ultra-Rapide",
            description: "Optimisation multi-threadée permettant de scanner des milliers de fichiers en quelques secondes."
        }
    ];

    const handleDownload = async (platform) => {
        try {
            const api_url = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8081';
            const response = await fetch(`${api_url}/signe`);
            const data = await response.json();
            if (data.url) {
                window.location.href = data.url;
            } else {
                console.error("Failed to get signed URL");
            }
        } catch (error) {
            console.error("Error during download:", error);
        }
    };

    return (
        <div className="landing-root">
            {/* Navigation */}
            <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'py-4 bg-slate-900/80 backdrop-blur-md border-b border-white/10' : 'py-6 bg-transparent'}`}>
                <div className="container flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <Shield className="w-8 h-8 text-primary" />
                        <span className="text-2xl font-bold font-heading tracking-tighter">CRYPTON</span>
                    </div>
                    <div className="hidden md:flex gap-8 items-center text-sm font-medium">
                        <a href="#features" className="hover:text-primary transition-colors">Fonctionnalités</a>
                        <a href="#tech" className="hover:text-primary transition-colors">Technologies</a>
                        <a href="#security" className="hover:text-primary transition-colors">Sécurité</a>
                        <Link to="/documentation" className="btn btn-primary text-sm px-6">Documentation</Link>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/20 blur-[120px] rounded-full -z-10 opacity-30"></div>
                <div className="container grid lg:grid-cols-2 gap-12 items-center">
                    <div className="animate-fade-in">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-primary mb-6">
                            <Zap className="w-3 h-3" />
                            <span>STÉROÏDES POUR VOTRE SÉCURITÉ</span>
                        </div>
                        <h1 className="leading-none mb-6">
                            Protection <span className="gradient-text">Infrangible</span> Pour Votre Écosystème Digital.
                        </h1>
                        <p className="text-lg text-text-muted mb-10 max-w-lg">
                            Crypton combine la puissance brute d'un moteur C, la modernité de FastAPI et l'élégance de .NET pour offrir une défense impénétrable.
                        </p>
                        <div className="flex flex-col gap-4">
                            <div className="flex flex-wrap gap-4">
                                <button 
                                    onClick={() => handleDownload('linux')}
                                    className="btn btn-primary flex gap-2"
                                >
                                    <ShieldCheck className="w-5 h-5" />
                                    Télécharger (Linux)
                                </button>
                                <button 
                                    disabled
                                    className="btn btn-outline flex gap-2 opacity-60 cursor-not-allowed"
                                >
                                    <Monitor className="w-5 h-5" />
                                    Télécharger (Windows)
                                </button>

                                <a href="#features" className="btn btn-outline flex gap-2 border-none">
                                    <Terminal className="w-4 h-4" />
                                    Détails de l'App
                                </a>
                            </div>
                            <p className="text-[10px] text-text-muted italic">
                                * Inclut l'API, le Dashboard et le script d'installation.
                            </p>
                        </div>
                    </div>
                    <div className="relative lg:block hidden animate-float">
                        <div className="glass-panel p-2 rotate-2 scale-105">
                            <img
                                src="hero.png"
                                alt="Crypton Security Dashboard"
                                className="rounded-xl w-full shadow-2xl"
                            />
                        </div>
                        {/* Floating elements */}
                        <div className="absolute -top-6 -right-6 glass-panel p-4 animate-float delay-700">
                            <ShieldCheck className="w-8 h-8 text-primary" />
                        </div>
                        <div className="absolute -bottom-10 -left-10 glass-panel p-6 animate-float delay-1000">
                            <div className="flex flex-col gap-2">
                                <div className="text-[10px] text-text-muted">SCAN STATUS</div>
                                <div className="text-sm font-bold text-green-400">99.9% SECURE</div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Stats Section */}
            <section className="border-y border-white/5 bg-white/[0.02]">
                <div className="container grid grid-cols-2 md:grid-cols-4 gap-8">
                    {[
                        { label: "Scans/Jour", value: "2.4M+" },
                        { label: "Menaces Bloquées", value: "450K" },
                        { label: "Temps de Réponse", value: "<15ms" },
                        { label: "Utilisateurs", value: "85K" }
                    ].map((stat, i) => (
                        <div key={i} className="text-center">
                            <div className="text-3xl font-bold font-heading mb-1">{stat.value}</div>
                            <div className="text-xs text-text-muted tracking-widest uppercase">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Features Grid */}
            <section id="features">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl mb-4">Fonctionnalités Clés</h2>
                        <p className="text-text-muted max-w-2xl mx-auto">
                            Une suite complète d'outils de sécurité conçus pour les environnements modernes multi-plateformes.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.map((feature, i) => (
                            <div key={i} className="glass-panel p-8 group">
                                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl mb-3">{feature.title}</h3>
                                <p className="text-sm text-text-muted">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Security Section */}
            <section id="security" className="relative">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl mb-4">Sécurité sans Compromis</h2>
                        <p className="text-text-muted max-w-2xl mx-auto">
                            Crypton utilise les protocoles de sécurité les plus robustes pour garantir que vos données restent privées et protégées.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            {[
                                {
                                    title: "Chiffrement de Bout en Bout",
                                    desc: "Chiffrement AES-256 GCM pour tous les fichiers stockés dans le coffre.",
                                    icon: <Lock className="w-6 h-6 text-primary" />
                                },
                                {
                                    title: "Infrastructure Zero-Knowledge",
                                    desc: "Nous ne stockons jamais vos mots de passe ou vos clés de chiffrement.",
                                    icon: <Shield className="w-6 h-6 text-primary" />
                                },
                                {
                                    title: "Logs d'Audit Détaillés",
                                    desc: "Gardez une trace de chaque action de sécurité effectuée sur votre système.",
                                    icon: <Search className="w-6 h-6 text-primary" />
                                }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-6 items-start">
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-xl mb-2">{item.title}</h4>
                                        <p className="text-text-muted">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="glass-panel p-10 bg-gradient-to-br from-primary/5 to-purple-600/5">
                            <h4 className="text-2xl mb-6">Protocole de Défense</h4>
                            <div className="space-y-4">
                                {[
                                    "Protection contre les Ransomwares",
                                    "Analyse Heuristique Avancée",
                                    "Isolation des Menaces (Quarantaine)",
                                    "Signature Numérique des Fichiers",
                                    "Contrôle d'Intégrité en Temps Réel"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <ShieldCheck className="w-5 h-5 text-green-400" />
                                        <span className="text-sm">{item}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-10 p-6 rounded-xl bg-black/40 border border-white/5">
                                <div className="flex justify-between items-center mb-4">
                                    <span className="text-xs font-bold text-primary">SCAN ENGINE v1.2</span>
                                    <span className="text-[10px] text-green-400 uppercase">Active</span>
                                </div>
                                <div className="text-xs font-mono text-text-muted line-clamp-2">
                                    $ tail -f /var/log/crypton/defense.log <br />
                                    [INFO] Monitoring filesystem for changes...
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Technology Stack */}
            <section id="tech" className="relative overflow-hidden">
                <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/10 blur-[100px] rounded-full -z-10"></div>
                <div className="container">
                    <div className="glass-panel p-12 lg:p-20 overflow-hidden relative">
                        <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
                            <div>
                                <h2 className="text-4xl mb-6">Architecture <span className="text-primary">Hybride</span></h2>
                                <p className="text-text-muted mb-8 text-lg">
                                    Crypton repose sur un backend FastAPI robuste synchronisé avec un client lourd .NET pour une expérience utilisateur sans compromis sur la performance.
                                </p>
                                <div className="space-y-6">
                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                                            <Server className="w-6 h-6 text-primary" />
                                        </div>
                                        <div>
                                            <h4 className="text-lg">Backend FastAPI</h4>
                                            <p className="text-sm text-text-muted">Orchestrateur asynchrone pour les tâches de scan intensives.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                                            <Monitor className="w-6 h-6 text-purple-400" />
                                        </div>
                                        <div>
                                            <h4 className="text-lg">Desktop .NET Avalonia</h4>
                                            <p className="text-sm text-text-muted">Interface fluide et native fonctionnant sur Windows, Linux et macOS.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="relative">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-4">
                                        <div className="glass-panel p-6 bg-primary/5 border-primary/20">
                                            <div className="text-sm font-bold mb-2">PERFORMANCE</div>
                                            <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                                                <div className="h-full w-[95%] bg-primary"></div>
                                            </div>
                                        </div>
                                        <div className="glass-panel p-6">
                                            <div className="text-sm font-bold mb-2">LATENCY</div>
                                            <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                                                <div className="h-full w-[5%] bg-purple-400"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pt-8">
                                        <div className="glass-panel p-6 h-full flex flex-col justify-center items-center text-center">
                                            <Cpu className="w-10 h-10 mb-4 text-pink-400" />
                                            <div className="font-bold">LOW OH</div>
                                            <div className="text-[10px] text-text-muted uppercase">Resource Usage</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 border-t border-white/5">
                <div className="container">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                        <div className="flex items-center gap-2">
                            <Shield className="w-6 h-6 text-primary" />
                            <span className="text-xl font-bold font-heading">CRYPTON</span>
                        </div>
                        <div className="flex gap-8 text-sm text-text-muted">
                            <a href="#" className="hover:text-white transition-colors">Mentions Légales</a>
                            <a href="#" className="hover:text-white transition-colors">Confidentialité</a>
                            <a href="#" className="hover:text-white transition-colors">Open Source</a>
                        </div>
                        <div className="text-xs text-text-muted">
                            © 2026 Crypton Security. Propulsé par FastAPI & .NET.
                        </div>
                    </div>
                </div>
            </footer>

            {/* Bottom Bar Gradient */}
            <div className="h-1 w-full bg-gradient-to-r from-primary via-purple-500 to-pink-500"></div>
        </div>
    );
};

export default Landing;