"use client";

import Image from "next/image";
import { 
  Sparkles, 
  Check, 
  ArrowRight, 
  Clock, 
  ShieldCheck, 
  Calendar 
} from "lucide-react";

interface Treatment {
  id: string;
  title: string;
  badge: string;
  description: string;
  image: string;
  duration: string;
  benefits: string[];
}

const TREATMENTS_LIST: Treatment[] = [
  {
    id: "coluna-ortopedia",
    title: "Fisioterapia Ortopédica & Coluna",
    badge: "Especialidade Principal",
    description:
      "Tratamento avançado e não invasivo para hérnia de disco, nervo ciático, lombalgias, cervicalgias e desvios articulares com foco em alívio da dor na 1ª sessão.",
    image: "/images/treatment-manual.jpg",
    duration: "50 min / sessão individual",
    benefits: [
      "Descompressão vertebral e alívio da dor aguda",
      "Restauração da mobilidade da coluna",
      "Prevenção de cirurgias desnecessárias",
      "Fortalecimento da musculatura estabilizadora",
    ],
  },
  {
    id: "esportiva",
    title: "Fisioterapia Esportiva & Performance",
    badge: "Atletas & Praticantes",
    description:
      "Protocolos específicos para retorno acelerado aos treinos e esportes, tratamento de entorses, estiramentos musculares, tendinites e reabilitação de ligamentos.",
    image: "/images/treatment-sports.jpg",
    duration: "60 min / com área funcional",
    benefits: [
      "Análise biomecânica do movimento esportivo",
      "Liberação miofascial e agulhamento a seco (Dry Needling)",
      "Recuperação muscular acelerada (Recovery)",
      "Prevenção de recidivas e novas lesões",
    ],
  },
  {
    id: "pilates",
    title: "Pilates Clínico & Reabilitação",
    badge: "Fortalecimento & Postura",
    description:
      "Aulas individuais em aparelhos clássicos (Reformer, Cadillac, Barrel) totalmente adaptadas para condições da coluna, gestantes e idosos.",
    image: "/images/treatment-pilates.jpg",
    duration: "55 min / 1 aluno por fisioterapeuta",
    benefits: [
      "Fortalecimento profundo do Core e abdômen",
      "Aumento significativo da flexibilidade e mobilidade",
      "Consciência corporal e correção da postura",
      "Exercícios de baixo impacto articular",
    ],
  },
];

export default function Treatments() {
  return (
    <section id="tratamentos" className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-100/70 border border-teal-200 text-teal-800 text-xs sm:text-sm font-semibold mb-4">
              <Sparkles className="w-4 h-4 text-teal-600" />
              <span>Cuidado Especializado</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Tratamentos com comprovação científica para a sua recuperação
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-3">
              Combinamos terapia manual, tecnologia eletromédica de ponta e cinesioterapia ativa para resultados duradouros e sem dependência de medicamentos.
            </p>
          </div>

          <a
            href="#agendamento"
            className="inline-flex items-center gap-2 text-teal-700 hover:text-teal-800 font-bold text-sm sm:text-base group shrink-0"
          >
            <span>Ver todos os protocolos</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Treatment Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {TREATMENTS_LIST.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden bg-slate-100">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-teal-800 shadow-md">
                  {item.badge}
                </div>
                <div className="absolute bottom-3 right-3 bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-medium text-white flex items-center gap-1.5">
                  <Clock className="w-3 h-3 text-teal-400" />
                  {item.duration}
                </div>
              </div>

              {/* Content Container */}
              <div className="p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-teal-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* Benefits Checklist */}
                  <div className="space-y-2.5 mb-8">
                    {item.benefits.map((b, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                        <div className="w-4 h-4 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Booking Button for Treatment */}
                <a
                  href={`https://wa.me/5511999998888?text=${encodeURIComponent(
                    `Olá! Gostaria de mais informações e agendamento sobre ${item.title}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-teal-50 text-teal-800 hover:bg-teal-600 hover:text-white font-bold text-sm transition-all duration-200 border border-teal-200 hover:border-transparent group/btn"
                >
                  <Calendar className="w-4 h-4 text-teal-600 group-hover/btn:text-white" />
                  <span>Consultar Disponibilidade</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Specialized Services Mini Grid */}
        <div className="mt-12 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
          <h4 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-teal-600" />
            Outras Especialidades & Técnicas Avançadas Disponíveis na Clínica:
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs sm:text-sm font-semibold text-slate-700">
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-teal-500"></span>
              RPG (Método Souchard)
            </div>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-teal-500"></span>
              Osteopatia & Manipulação
            </div>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-teal-500"></span>
              Dry Needling (Agulhamento)
            </div>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-teal-500"></span>
              Laserterapia de Alta Potência
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
