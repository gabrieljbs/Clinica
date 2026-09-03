"use client";

import { useState } from "react";
import { 
  Activity, 
  ArrowRight, 
  CheckCircle2, 
  HelpCircle, 
  Sparkles, 
  Clock, 
  MessageCircle, 
  ShieldAlert
} from "lucide-react";

interface SymptomData {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
  commonCauses: string[];
  recommendedTreatments: string[];
  expectedBenefit: string;
  timeframe: string;
  whatsappMessage: string;
  tag: string;
}

const SYMPTOMS: SymptomData[] = [
  {
    id: "coluna",
    title: "Coluna, Lombar & Cervical",
    subtitle: "Dores ao sentar, levantar ou que irradiam para as pernas e braços.",
    iconName: "spine",
    commonCauses: [
      "Hérnia de disco e protrusão discal",
      "Dor ciática (nervo ciático inflamado)",
      "Lombalgia e rigidez matinal",
      "Bico de papagaio (osteofitose)",
    ],
    recommendedTreatments: [
      "Terapia Manual & Descompressão Articular",
      "RPG (Reeducação Postural Global)",
      "Pilates Clínico para Fortalecimento do Core",
      "Eletroterapia Analgésica Avançada",
    ],
    expectedBenefit: "Alívio significativo da dor e redução da compressão nervosa já nas primeiras sessões.",
    timeframe: "Protocolo inicial de 6 a 10 sessões",
    whatsappMessage: "Olá! Gostaria de agendar uma avaliação para dor na Coluna/Lombar.",
    tag: "Tratamento Mais Procurado",
  },
  {
    id: "ombros",
    title: "Ombros, Braços & Pescoço",
    subtitle: "Dificuldade para levantar o braço, estalos ou sensação de peso.",
    iconName: "shoulder",
    commonCauses: [
      "Tendinite do manguito rotador",
      "Bursite no ombro",
      "Tensão cervical por estresse ou tela",
      "Síndrome do túnel do carpo / DORT",
    ],
    recommendedTreatments: [
      "Liberação Miofascial Instrumental",
      "Cinesioterapia com foco em mobilidade",
      "Ultrassom e Laser Terapêutico",
      "Correção da Mecânica Escapular",
    ],
    expectedBenefit: "Restauração da amplitude dos movimentos e fim das dores ao dormir sobre o ombro.",
    timeframe: "Protocolo médio de 5 a 8 sessões",
    whatsappMessage: "Olá! Gostaria de agendar uma avaliação para dor no Ombro/Pescoço.",
    tag: "Rápida Recuperação",
  },
  {
    id: "joelhos",
    title: "Joelhos, Quadris & Tornozelos",
    subtitle: "Dor ao subir escadas, agachar, correr ou sensação de falseio.",
    iconName: "knee",
    commonCauses: [
      "Condromalácia patelar / Desgaste da cartilagem",
      "Lesões de menisco ou ligamento (LCA/LCP)",
      "Fascite plantar e esporão de calcâneo",
      "Artrose e impacto femoroacetabular",
    ],
    recommendedTreatments: [
      "Avaliação Biomecânica da Marcha",
      "Fortalecimento dos Estabilizadores de Quadril",
      "Terapia de Ondas de Choque & Crioterapia",
      "Treinamento Sensório-motor (Propriocepção)",
    ],
    expectedBenefit: "Estabilidade articular, fim dos estalos e retorno seguro a caminhadas e esportes.",
    timeframe: "Protocolo médio de 8 a 12 sessões",
    whatsappMessage: "Olá! Gostaria de agendar uma avaliação para dor no Joelho/Articulações.",
    tag: "Alta Precisão",
  },
  {
    id: "esporte",
    title: "Lesões Esportivas & Atletas",
    subtitle: "Estiramentos musculares, entorses ou dores pós-treino intenso.",
    iconName: "sports",
    commonCauses: [
      "Distensão e estiramento muscular (isquiotibiais/panturrilha)",
      "Entorse de tornozelo",
      "Canelite e periostite tibial",
      "Epicondilite lateral (cotovelo de tenista)",
    ],
    recommendedTreatments: [
      "Fisioterapia Esportiva de Alta Performance",
      "Recovery com Botas de Compressão Pneumática",
      "Dry Needling (Agulhamento a seco)",
      "Retorno Gradual ao Esporte (Return-to-Play)",
    ],
    expectedBenefit: "Recuperação acelerada sem perda de condicionamento físico com prevenção de recidivas.",
    timeframe: "Protocolo intensivo personalizado",
    whatsappMessage: "Olá! Pratico esportes e preciso de avaliação para recuperação de lesão.",
    tag: "Protocolo Esportivo",
  },
  {
    id: "postura",
    title: "Má Postura & Dores do Trabalho",
    subtitle: "Cansaço corporal ao final do dia em trabalho de escritório ou home office.",
    iconName: "posture",
    commonCauses: [
      "Postura da cabeça para frente (Tech Neck)",
      "Hipercifose torácica e ombros caídos",
      "Escoliose postural",
      "Fadiga muscular postural crônica",
    ],
    recommendedTreatments: [
      "Reeducação Postural Global (RPG Método Souchard)",
      "Pilates Clínico em Aparelhos",
      "Treinamento de Ergonomia e Consciência Corporal",
      "Alongamento de Cadeias Musculares Retraídas",
    ],
    expectedBenefit: "Alinhamento da silhueta corporal, respiração profunda e disposição para o dia a dia.",
    timeframe: "Sessões semanais contínuas",
    whatsappMessage: "Olá! Gostaria de agendar uma avaliação postural / RPG para postura e coluna.",
    tag: "Saúde & Estética Corporal",
  },
  {
    id: "posop",
    title: "Reabilitação Pós-Operatória",
    subtitle: "Recuperação de cirurgias ortopédicas de coluna, ombro, quadril ou joelho.",
    iconName: "surgery",
    commonCauses: [
      "Pós-artroplastia de quadril ou joelho (próteses)",
      "Pós-cirurgia de ligamento cruzado (LCA)",
      "Pós-artrodese ou microdiscectomia de coluna",
      "Reconstrução tendínea e suturas",
    ],
    recommendedTreatments: [
      "Drenagem Linfática Terapêutica Anti-edema",
      "Ganho seguro de Amplitude Articular",
      "Eletroestimulação Muscular (FES / Aussie)",
      "Treino de Marcha e Independência Funcional",
    ],
    expectedBenefit: "Cicatrização otimizada, prevenção de fibroses e recuperação rápida da autonomia.",
    timeframe: "Protocolo médico específico",
    whatsappMessage: "Olá! Fiz uma cirurgia ortopédica e preciso iniciar a fisioterapia pós-operatória.",
    tag: "Cuidado Supervisionado",
  },
];

export default function SymptomChecker() {
  const [selectedId, setSelectedId] = useState<string>("coluna");

  const currentSymptom = SYMPTOMS.find((s) => s.id === selectedId) || SYMPTOMS[0];

  return (
    <section id="triagem" className="py-24 bg-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-teal-50 rounded-full blur-3xl -translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs sm:text-sm font-semibold mb-4">
            <Sparkles className="w-4 h-4 text-teal-600" />
            <span>Ferramenta de Triagem Online</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Onde você está sentindo dor ou desconforto?
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Selecione a região do seu corpo abaixo para descobrir a causa provável, o tratamento ideal e como podemos ajudar você a voltar a se mover com total liberdade.
          </p>
        </div>

        {/* Symptom Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
          {SYMPTOMS.map((item) => {
            const isSelected = item.id === selectedId;
            return (
              <button
                key={item.id}
                onClick={() => setSelectedId(item.id)}
                className={`p-4 rounded-2xl text-left transition-all duration-300 border flex flex-col justify-between cursor-pointer ${
                  isSelected
                    ? "bg-teal-600 text-white border-teal-600 shadow-lg shadow-teal-600/30 scale-[1.02]"
                    : "bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-700 hover:border-teal-300"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-sm ${
                      isSelected
                        ? "bg-white/20 text-white"
                        : "bg-teal-100 text-teal-800"
                    }`}
                  >
                    <Activity className="w-5 h-5" />
                  </div>
                  {isSelected && (
                    <span className="w-2 h-2 rounded-full bg-white animate-ping"></span>
                  )}
                </div>
                <div>
                  <p className="font-bold text-sm leading-snug">{item.title.split(",")[0]}</p>
                  <p
                    className={`text-[11px] mt-1 font-medium line-clamp-1 ${
                      isSelected ? "text-teal-100" : "text-slate-500"
                    }`}
                  >
                    {item.tag}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Dynamic Detail Card */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-teal-950 text-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-slate-700 relative overflow-hidden transition-all duration-500">
          {/* Subtle glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left Info Column */}
            <div className="lg:col-span-7 flex flex-col">
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className="px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/30 text-xs font-semibold uppercase tracking-wider">
                  {currentSymptom.tag}
                </span>
                <span className="flex items-center gap-1.5 text-slate-300 text-xs font-medium">
                  <Clock className="w-3.5 h-3.5 text-teal-400" />
                  {currentSymptom.timeframe}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                {currentSymptom.title}
              </h3>
              <p className="text-slate-300 text-sm sm:text-base mb-6 leading-relaxed">
                {currentSymptom.subtitle}
              </p>

              {/* Common Causes */}
              <div className="mb-6">
                <h4 className="text-xs font-bold text-teal-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                  <ShieldAlert className="w-4 h-4" />
                  Condições Frequentes Identificadas:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {currentSymptom.commonCauses.map((cause, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 text-sm text-slate-200 bg-slate-800/60 rounded-xl px-3 py-2 border border-slate-700/50"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-400 shrink-0"></span>
                      <span>{cause}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Expected Result */}
              <div className="p-4 rounded-2xl bg-teal-900/30 border border-teal-700/40 text-sm text-teal-100 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                <p>
                  <strong className="text-white font-semibold">O que esperar: </strong>
                  {currentSymptom.expectedBenefit}
                </p>
              </div>
            </div>

            {/* Right Action Column */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full bg-slate-800/80 rounded-2xl p-6 border border-slate-700">
              <h4 className="text-base font-bold text-white mb-4 flex items-center gap-2">
                <Sparkles className="w-4.5 h-4.5 text-emerald-400" />
                Tratamentos Indicados na Vitalità:
              </h4>

              <div className="space-y-3 mb-8">
                {currentSymptom.recommendedTreatments.map((treatment, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-lg bg-teal-500/20 text-teal-300 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                      {i + 1}
                    </div>
                    <span className="text-sm font-medium text-slate-200">{treatment}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-slate-700">
                <a
                  href={`https://wa.me/5511999998888?text=${encodeURIComponent(
                    currentSymptom.whatsappMessage
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold text-base shadow-lg shadow-teal-600/30 hover:brightness-110 active:scale-95 transition-all cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5 fill-white" />
                  <span>Agendar para este Sintoma</span>
                </a>
                <p className="text-[11px] text-center text-slate-400 mt-2">
                  Resposta rápida em até 10 minutos pelo WhatsApp
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
