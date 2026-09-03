"use client";

import { 
  UserCheck, 
  Scan, 
  GraduationCap, 
  Target, 
  Building2, 
  Receipt,
  Sparkles
} from "lucide-react";

const DIFFERENTIALS = [
  {
    icon: UserCheck,
    title: "100% Individualizado (1 a 1)",
    description: "Cada minuto da sua sessão é dedicado exclusivamente a você. Não realizamos atendimentos simultâneos nem deixamos pacientes desassistidos.",
    highlight: "Atenção Exclusiva",
  },
  {
    icon: Scan,
    title: "Diagnóstico Biomecânico Preciso",
    description: "Avaliamos sua postura, testes de força muscular e amplitude de movimento para descobrir a verdadeira causa da dor e não apenas mascarar os sintomas.",
    highlight: "Causa Raiz",
  },
  {
    icon: GraduationCap,
    title: "Corpo Clínico Pós-Graduado",
    description: "Fisioterapeutas especialistas com registro ativo no CREFITO e constante atualização nas mais recentes diretrizes clínicas internacionais.",
    highlight: "Padrão Ouro",
  },
  {
    icon: Target,
    title: "Foco em Alta Terapêutica Rápida",
    description: "Nosso objetivo é devolver sua autonomia e independência no menor tempo necessário. Não prescrevemos sessões infinitas ou desnecessárias.",
    highlight: "Sem Enrolação",
  },
  {
    icon: Receipt,
    title: "Facilidade de Reembolso",
    description: "Emitimos relatórios detalhados com CID, evolução clínica e notas fiscais para você solicitar o reembolso integral ou parcial no seu plano de saúde.",
    highlight: "Reembolso Fácil",
  },
  {
    icon: Building2,
    title: "Estrutura de Alto Padrão",
    description: "Ambientes climatizados, equipamentos modernos com certificação ANVISA, estacionamento próprio e acessibilidade para pessoas com mobilidade reduzida.",
    highlight: "Conforto Total",
  },
];

export default function Differentials() {
  return (
    <section id="diferenciais" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs sm:text-sm font-semibold mb-4">
            <Sparkles className="w-4 h-4 text-teal-600" />
            <span>Por que escolher a Vitalità?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            A excelência que a sua saúde e o seu corpo merecem
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Diga adeus à fisioterapia convencional e impessoal. Criamos uma metodologia focada em conforto, atenção humana e resultados rápidos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DIFFERENTIALS.map((diff, index) => {
            const Icon = diff.icon;
            return (
              <div
                key={index}
                className="p-8 rounded-3xl bg-slate-50 border border-slate-200/80 hover:border-teal-400 hover:bg-teal-50/20 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-teal-600/10 text-teal-700 flex items-center justify-center group-hover:bg-teal-600 group-hover:text-white transition-all duration-300">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-xs font-bold text-teal-700 bg-teal-100/60 px-3 py-1 rounded-full">
                      {diff.highlight}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-teal-800 transition-colors">
                    {diff.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {diff.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
