"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, Calendar, Menu, X, Sparkles, MapPin, Clock } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Início", href: "#inicio" },
    { name: "Triagem de Dores", href: "#triagem" },
    { name: "Tratamentos", href: "#tratamentos" },
    { name: "Diferenciais", href: "#diferenciais" },
    { name: "Especialistas", href: "#especialistas" },
    { name: "Depoimentos", href: "#depoimentos" },
    { name: "Dúvidas", href: "#faq" },
    { name: "Contato", href: "#contato" },
  ];

  return (
    <>
      {/* Top Notification Bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-teal-400 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Atendimento 100% Individualizado (1 Paciente por horário)
            </span>
            <span className="hidden md:flex items-center gap-1 text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-teal-400" />
              Av. Paulista, 1500 - Sala 804 • SP
            </span>
          </div>
          <div className="flex items-center gap-4 text-slate-300">
            <span className="hidden sm:flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-teal-400" />
              Seg - Sex: 07h às 20h • Sáb: 08h às 13h
            </span>
            <a
              href="tel:+5511999999999"
              className="flex items-center gap-1 text-teal-400 hover:text-teal-300 transition-colors font-semibold"
            >
              <Phone className="w-3.5 h-3.5" />
              (11) 99999-8888
            </a>
          </div>
        </div>
      </div>

      {/* Main Glass Navbar */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100 py-3"
            : "bg-white/80 backdrop-blur-sm py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="#inicio" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-teal-700 via-teal-600 to-emerald-500 flex items-center justify-center text-white shadow-md shadow-teal-700/20 group-hover:scale-105 transition-transform duration-300">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6"
              >
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                <path d="M19 12a7 7 0 0 0-7-7" stroke="#34d399" />
              </svg>
            </div>
            <div>
              <span className="text-xl font-extrabold tracking-tight text-slate-900 block leading-tight">
                Vitalità
                <span className="text-teal-600 font-bold ml-1 text-xs uppercase tracking-widest px-2 py-0.5 rounded-full bg-teal-50 border border-teal-200">
                  Clínica
                </span>
              </span>
              <span className="text-[11px] font-medium text-slate-500 uppercase tracking-wider block">
                Fisioterapia Avançada
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-teal-700 transition-colors duration-200 relative group py-1"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#agendamento"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-teal-600 text-white font-semibold text-sm shadow-md shadow-teal-600/25 hover:bg-teal-700 hover:shadow-lg hover:shadow-teal-600/30 transition-all duration-200 active:scale-95 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Agendar Avaliação</span>
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-5 shadow-xl animate-in slide-in-from-top duration-300">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-slate-700 hover:text-teal-700 py-2 border-b border-slate-50 flex items-center justify-between"
                >
                  {link.name}
                  <span className="text-teal-500 text-xs">→</span>
                </a>
              ))}
              <div className="pt-3">
                <a
                  href="#agendamento"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-teal-600 text-white font-semibold text-base shadow-md shadow-teal-600/25 active:scale-95 transition-all"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Agendar Avaliação Agora</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
