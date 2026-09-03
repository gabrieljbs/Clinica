"use client";

import Image from "next/image";
import { Sparkles, Award, ShieldCheck, GraduationCap, Calendar, CheckCircle } from "lucide-react";

const TEAM = [
  {
    name: "Dra. Cláudia Mendes",
    role: "Fisioterapeuta Responsável Técnica & Especialista em Coluna",
    crefito: "CREFITO-3 / 148.920-F",
    image: "/images/doctor-claudia.jpg",
    bio: "Mais de 12 anos de experiência clínica dedicada à descompressão discal, tratamento não-cirúrgico de hérnias e Reeducação Postural Global (RPG Método Souchard).",
    specialties: [
      "Especialização em Fisioterapia Traumato-Ortopédica (USP)",
      "Formação Internacional em RPG Souchard (França)",
      "Instrutora Certificada em Pilates Clínico Avançado",
    ],
  },
  {
    name: "Dr. Lucas Andrade",
    role: "Fisioterapeuta Esportivo & Reabilitação Funcional",
    crefito: "CREFITO-3 / 162.430-F",
    image: "/images/doctor-lucas.jpg",
    bio: "Especialista no atendimento de atletas profissionais e amadores, reabilitação pós-operatória de joelho/ombro e retorno seguro ao esporte de alto rendimento.",
    specialties: [
      "Pós-Graduação em Fisioterapia Esportiva (UNIFESP)",
      "Certificação em Dry Needling & Terapia Manual Miofascial",
      "Especialista em Avaliação Biomecânica da Corrida",
    ],
  },
];

export default function Specialists() {
  return (
    <section id="especialistas" className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-100/80 border border-teal-200 text-teal-800 text-xs sm:text-sm font-semibold mb-4">
            <Sparkles className="w-4 h-4 text-teal-600" />
            <span>Corpo Clínico Qualificado</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Conheça os fisioterapeutas que vão cuidar da sua saúde
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Profissionais apaixonados pela profissão, com vasta experiência em casos complexos e formação nas melhores instituições do Brasil e do exterior.
          </p>
        </div>

        {/* Specialists Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {TEAM.map((doctor, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-xl shadow-slate-200/60 flex flex-col justify-between hover:-translate-y-1 transition-all duration-300"
            >
              <div className="p-8 pb-4">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-6">
                  {/* Doctor Avatar */}
                  <div className="relative w-32 h-32 rounded-2xl overflow-hidden shadow-md shrink-0 border-2 border-teal-500/30">
                    <Image
                      src={doctor.image}
                      alt={doctor.name}
                      fill
                      sizes="128px"
                      className="object-cover"
                    />
                  </div>

                  {/* Doctor Info */}
                  <div className="text-center sm:text-left">
                    <div className="inline-block px-2.5 py-0.5 rounded-md bg-teal-50 text-teal-700 text-xs font-bold border border-teal-200 mb-2">
                      {doctor.crefito}
                    </div>
                    <h3 className="text-2xl font-extrabold text-slate-900 leading-tight mb-1">
                      {doctor.name}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-teal-700">
                      {doctor.role}
                    </p>
                  </div>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {doctor.bio}
                </p>

                {/* Credentials & Certifications */}
                <div className="space-y-2 pt-4 border-t border-slate-100">
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <GraduationCap className="w-4 h-4 text-teal-600" />
                    Formação & Especializações:
                  </h4>
                  {doctor.specialties.map((spec, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-600 font-medium">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 bg-slate-50 border-t border-slate-100 mt-6">
                <a
                  href={`https://wa.me/5511999998888?text=${encodeURIComponent(
                    `Olá! Gostaria de agendar uma consulta diretamente com ${doctor.name}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-teal-600 text-white hover:bg-teal-700 font-bold text-sm shadow-md shadow-teal-600/20 transition-all cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Agendar com {doctor.name.split(" ")[0]}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
