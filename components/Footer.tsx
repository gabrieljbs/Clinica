"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, ArrowUp, Heart } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-slate-800/80">
          {/* Brand Info */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-teal-600 to-emerald-400 flex items-center justify-center text-white font-bold shadow-md shadow-teal-500/20">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  <path d="M19 12a7 7 0 0 0-7-7" stroke="#34d399" />
                </svg>
              </div>
              <span className="text-xl font-extrabold text-white tracking-tight">
                Vitalità{" "}
                <span className="text-teal-400 text-xs font-semibold uppercase tracking-widest px-2 py-0.5 rounded-full bg-teal-950 border border-teal-800">
                  Fisioterapia
                </span>
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              Excelência e cuidado humanizado em fisioterapia avançada, alívio de dores na coluna, reabilitação ortopédica e recuperação esportiva com atendimento 100% individualizado.
            </p>
            <div className="text-xs text-slate-400 p-3 rounded-xl bg-slate-900 border border-slate-800">
              <strong className="text-slate-200 block mb-0.5">Responsável Técnica:</strong>
              Dra. Cláudia Mendes • CREFITO-3 / 148.920-F
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <a href="#inicio" className="hover:text-teal-400 transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#triagem" className="hover:text-teal-400 transition-colors">
                  Triagem de Dores
                </a>
              </li>
              <li>
                <a href="#tratamentos" className="hover:text-teal-400 transition-colors">
                  Tratamentos
                </a>
              </li>
              <li>
                <a href="#diferenciais" className="hover:text-teal-400 transition-colors">
                  Diferenciais
                </a>
              </li>
              <li>
                <a href="#especialistas" className="hover:text-teal-400 transition-colors">
                  Corpo Clínico
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-teal-400 transition-colors">
                  Dúvidas Frequentes
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Especialidades
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>Fisioterapia da Coluna & Hérnia</li>
              <li>Fisioterapia Esportiva de Alta Performance</li>
              <li>Pilates Clínico em Aparelhos</li>
              <li>RPG (Reeducação Postural Global)</li>
              <li>Reabilitação Pós-Operatória Ortopédica</li>
              <li>Osteopatia & Liberação Miofascial</li>
            </ul>
          </div>

          {/* Contact Summary */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Contato & Localização
            </h4>
            <div className="space-y-3 text-sm text-slate-400">
              <p className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-1" />
                <span>Av. Paulista, 1500 - Conj. 804 • Bela Vista, São Paulo - SP</span>
              </p>
              <p className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                <span>(11) 99999-8888 / (11) 3333-2222</span>
              </p>
              <p className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-teal-400 shrink-0" />
                <span>contato@vitalitafisioterapia.com.br</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} Clínica Vitalità Fisioterapia Avançada. Todos os direitos reservados.
          </p>

          <div className="flex items-center gap-6">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-teal-400 hover:text-teal-300 transition-colors cursor-pointer"
            >
              <span>Voltar ao Topo</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-slate-900 text-[11px] text-slate-400 text-center leading-relaxed">
          Aviso Legal: As informações presentes neste site possuem caráter estritamente educativo e informativo sobre a prática da fisioterapia e saúde física, não substituindo o diagnóstico e prescrição em consulta presencial realizada por profissional habilitado.
        </div>
      </div>
    </footer>
  );
}
