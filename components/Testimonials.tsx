"use client";

import { Star, Sparkles, Quote, CheckCircle2 } from "lucide-react";

const REVIEWS = [
  {
    name: "Mariana Silveira",
    role: "Advogada • 38 anos",
    condition: "Hérnia de Disco Lombar (L4-L5)",
    rating: 5,
    text: "Cheguei na Vitalità praticamente sem conseguir ficar sentada devido a uma crise aguda na coluna. A Dra. Cláudia foi extremamente humana, fez uma avaliação detalhada e, em 3 semanas de tratamento focado, a dor crônica sumiu. Evitei a cirurgia indicada por outro médico!",
  },
  {
    name: "Rodrigo F. Meneses",
    role: "Corredor Amador • 34 anos",
    condition: "Lesão de Menisco & Condromalácia",
    rating: 5,
    text: "O Dr. Lucas é um profissional de outro nível. O trabalho de reabilitação esportiva e análise da minha passada foi decisivo. Em 2 meses voltei a treinar e recentemente completei minha meia maratona sem nenhuma queixa no joelho.",
  },
  {
    name: "Carlos Eduardo Dias",
    role: "Empresário • 47 anos",
    condition: "Dores Cervicais & Tensão Postural",
    rating: 5,
    text: "O atendimento 1 a 1 é um diferencial gigante. Não suportava mais clínicas de convênio onde o fisioterapeuta atende 5 pessoas ao mesmo tempo. Aqui a atenção é total, a estrutura é impecável e ainda emitem tudo certinho para reembolso do meu convênio.",
  },
  {
    name: "Beatriz Ramos",
    role: "Arquiteta • 29 anos",
    condition: "Postura & Dores de Cabeça Tensionais",
    rating: 5,
    text: "Faço o Pilates Clínico e RPG há 6 meses. Além da melhora visível na minha postura e respiração, as dores de cabeça frequentes que eu tinha no final do dia de trabalho simplesmente desapareceram. Super recomendo!",
  },
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs sm:text-sm font-semibold mb-4">
            <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
            <span>Avaliações Reais de Pacientes</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Histórias de quem recuperou a liberdade de viver sem dor
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Mais de 5.000 vidas transformadas. Veja a experiência de quem confiou na nossa equipe.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {REVIEWS.map((review, index) => (
            <div
              key={index}
              className="p-8 rounded-3xl bg-slate-50 border border-slate-200/80 hover:border-teal-300 hover:shadow-lg transition-all duration-300 flex flex-col justify-between relative"
            >
              <div>
                {/* Header with stars & condition */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-bold text-teal-800 bg-teal-100/70 px-2.5 py-0.5 rounded-full">
                    {review.condition}
                  </span>
                </div>

                <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6 italic">
                  &ldquo;{review.text}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-200/60">
                <div>
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                    {review.name}
                  </h4>
                  <p className="text-xs text-slate-500">{review.role}</p>
                </div>
                <div className="flex items-center gap-1 text-emerald-600 text-xs font-semibold">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Paciente Verificado</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google Score Banner */}
        <div className="mt-12 bg-gradient-to-r from-teal-900 to-slate-900 rounded-2xl p-6 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-amber-400 shrink-0">
              <Star className="w-8 h-8 fill-amber-400" />
            </div>
            <div>
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <span className="text-2xl font-extrabold text-white">4.9 de 5.0</span>
                <span className="text-xs bg-amber-400/20 text-amber-300 font-bold px-2 py-0.5 rounded-full">
                  Excepcional
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300">
                Classificação média baseada em mais de 480 avaliações no Google Meu Negócio
              </p>
            </div>
          </div>

          <a
            href="#agendamento"
            className="px-6 py-3 rounded-full bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-sm transition-all shadow-md shrink-0 cursor-pointer"
          >
            Quero Agendar Minha Avaliação
          </a>
        </div>
      </div>
    </section>
  );
}
