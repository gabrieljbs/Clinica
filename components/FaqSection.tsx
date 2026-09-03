"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle, Sparkles, MessageCircle } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
  tag?: string;
}

const FAQ_LIST: FaqItem[] = [
  {
    question: "A clínica atende convênios ou planos de saúde?",
    answer:
      "Trabalhamos no formato particular com sistema de Reembolso. Emitimos Nota Fiscal discriminada e Relatório Fisioterapêutico completo para que você solicite o reembolso diretamente ao seu plano de saúde (Bradesco, SulAmérica, Amil, Care Plus, Porto Seguro, Unimed, etc.). A maioria dos planos reembolsa de 70% a 100% do valor.",
    tag: "Convênios & Reembolso",
  },
  {
    question: "Preciso de pedido/encaminhamento de um médico para ser atendido?",
    answer:
      "Não é obrigatório! De acordo com a Resolução do COFFITO (Conselho Federal de Fisioterapia), o fisioterapeuta é um profissional de primeiro contato, plenamente capacitado e habilitado para avaliar, diagnosticar disfunções do movimento e prescrever o tratamento adequado.",
    tag: "Atendimento Direto",
  },
  {
    question: "Como funciona a primeira consulta de avaliação?",
    answer:
      "Na primeira consulta, realizamos uma anamnese detalhada, testes ortopédicos específicos, avaliação postural e biomecânica. Já nessa mesma sessão iniciamos intervenções terapêuticas para alívio imediato dos sintomas e traçamos o seu plano de recuperação personalizado.",
    tag: "Primeira Sessão",
  },
  {
    question: "Quantas sessões de fisioterapia serão necessárias?",
    answer:
      "O número varia de acordo com a gravidade, tipo de lesão e tempo de evolução do quadro. Em média, quadros agudos necessitam de 5 a 8 sessões, enquanto reabilitações pós-cirúrgicas ou crônicas podem necessitar de 10 a 15 sessões. Nosso compromisso é dar alta ao paciente o mais rápido possível.",
    tag: "Tempo de Tratamento",
  },
  {
    question: "O atendimento é realmente individualizado?",
    answer:
      "Sim, 100%! Reservamos um horário exclusivo na agenda para cada paciente. Você terá a atenção total e ininterrupta do seu fisioterapeuta durante toda a sessão, sem revezamento de aparelhos com outras pessoas.",
    tag: "Exclusividade",
  },
  {
    question: "Quais são as formas de pagamento aceitas?",
    answer:
      "Aceitamos PIX, cartões de débito e cartões de crédito (com possibilidade de parcelamento sem juros em protocolos de tratamento contínuo).",
    tag: "Pagamentos",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-slate-50 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-100/70 border border-teal-200 text-teal-800 text-xs sm:text-sm font-semibold mb-4">
            <HelpCircle className="w-4 h-4 text-teal-600" />
            <span>Tire Suas Dúvidas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Confira as principais dúvidas sobre nossos atendimentos, agendamentos e reembolso.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQ_LIST.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 hover:bg-slate-50/80 transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-base sm:text-lg text-slate-900">
                      {item.question}
                    </span>
                    {item.tag && (
                      <span className="hidden sm:inline-block text-[11px] font-semibold text-teal-700 bg-teal-50 px-2.5 py-0.5 rounded-full border border-teal-200/60">
                        {item.tag}
                      </span>
                    )}
                  </div>
                  <div
                    className={`w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-teal-100 text-teal-700" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100 animate-in fade-in duration-200">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions card */}
        <div className="mt-12 text-center p-8 rounded-3xl bg-teal-50 border border-teal-200 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <h4 className="text-lg font-bold text-teal-950">Ainda tem alguma dúvida específica?</h4>
            <p className="text-xs sm:text-sm text-teal-800">
              Nossa equipe de recepção está pronta para atender você e tirar dúvidas pelo WhatsApp.
            </p>
          </div>
          <a
            href="https://wa.me/5511999998888?text=Ol%C3%A1!%20Gostaria%20de%20tirar%20uma%20d%C3%BAvida%20sobre%20o%20atendimento%20na%20cl%C3%ADnica."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-teal-600 hover:bg-teal-700 text-white font-bold text-sm shadow-md transition-all shrink-0 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Falar com a Recepção</span>
          </a>
        </div>
      </div>
    </section>
  );
}
