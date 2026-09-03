"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { Calendar, ArrowRight, ShieldCheck, Star, Activity, CheckCircle2 } from "lucide-react";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const imageCardRef = useRef<HTMLDivElement>(null);
  const floatCard1Ref = useRef<HTMLDivElement>(null);
  const floatCard2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        badgeRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.6 }
      )
        .fromTo(
          titleRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.3"
        )
        .fromTo(
          descRef.current,
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.7 },
          "-=0.5"
        )
        .fromTo(
          ctaRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.4"
        )
        .fromTo(
          imageCardRef.current,
          { opacity: 0, scale: 0.95, y: 30 },
          { opacity: 1, scale: 1, y: 0, duration: 1 },
          "-=0.6"
        )
        .fromTo(
          [floatCard1Ref.current, floatCard2Ref.current],
          { opacity: 0, scale: 0.8, y: 20 },
          { opacity: 1, scale: 1, y: 0, duration: 0.6, stagger: 0.2 },
          "-=0.4"
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="inicio"
      ref={heroRef}
      className="relative min-h-[90vh] flex items-center pt-8 pb-20 overflow-hidden hero-gradient"
    >
      {/* Ambient background glow elements */}
      <div className="absolute top-20 right-10 w-96 h-96 rounded-full bg-teal-300/20 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-emerald-400/15 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Top Pill Badge */}
            <div
              ref={badgeRef}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs sm:text-sm font-semibold mb-6 shadow-sm"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-teal-500 animate-pulse"></span>
              <span>Reabilitação Especializada & Alívio Imediato da Dor</span>
            </div>

            {/* Main Headline */}
            <h1
              ref={titleRef}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12] mb-6"
            >
              Recupere seus movimentos e viva{" "}
              <span className="bg-gradient-to-r from-teal-700 via-teal-600 to-emerald-500 bg-clip-text text-transparent">
                sem dor
              </span>{" "}
              com cuidado individualizado.
            </h1>

            {/* Description */}
            <p
              ref={descRef}
              className="text-lg sm:text-xl text-slate-600 mb-8 max-w-2xl leading-relaxed font-normal"
            >
              Tratamentos modernos baseados em evidências científicas para coluna, articulações e lesões esportivas. Na Vitalità você é atendido exclusivamente por fisioterapeutas pós-graduados, com 1 paciente por horário.
            </p>

            {/* CTA Buttons */}
            <div
              ref={ctaRef}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10"
            >
              <a
                href="#agendamento"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-teal-600 text-white font-bold text-base shadow-xl shadow-teal-600/30 hover:bg-teal-700 hover:shadow-2xl hover:shadow-teal-600/40 hover:-translate-y-0.5 transition-all duration-200 active:scale-95"
              >
                <Calendar className="w-5 h-5 text-teal-200" />
                <span>Agendar Avaliação Completa</span>
              </a>

              <a
                href="#triagem"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white text-slate-800 font-semibold text-base border border-slate-200 hover:border-teal-400 hover:bg-teal-50/50 hover:text-teal-700 shadow-sm transition-all duration-200"
              >
                <span>Descobrir Tratamento Ideal</span>
                <ArrowRight className="w-4 h-4 text-teal-600" />
              </a>
            </div>

            {/* Trust & Social Proof Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-6 border-t border-slate-200/80 w-full">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 shrink-0">
                  <Star className="w-5 h-5 fill-amber-500 text-amber-500" />
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <span className="font-extrabold text-slate-900 text-base">4.9 / 5.0</span>
                  </div>
                  <p className="text-xs text-slate-500 font-medium">+480 avaliações Google</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-600 shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-extrabold text-slate-900 text-base block">+5.000</span>
                  <p className="text-xs text-slate-500 font-medium">Pacientes Reabilitados</p>
                </div>
              </div>

              <div className="col-span-2 sm:col-span-1 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 shrink-0">
                  <Activity className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-extrabold text-slate-900 text-base block">100% Exclusivo</span>
                  <p className="text-xs text-slate-500 font-medium">1 Paciente por Horário</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: High Quality Image & Floating Glass Cards */}
          <div className="lg:col-span-5 relative">
            <div
              ref={imageCardRef}
              className="relative rounded-3xl overflow-hidden shadow-2xl shadow-slate-900/15 border-4 border-white bg-slate-100"
            >
              <Image
                src="/images/hero-clinic.jpg"
                alt="Clínica Vitalità Fisioterapia de Alto Padrão"
                width={800}
                height={600}
                priority
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none"></div>

              {/* In-image caption tag */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md rounded-2xl p-3 border border-white/40 shadow-lg flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="w-3 h-3 rounded-full bg-emerald-500 ring-4 ring-emerald-100"></span>
                  <p className="text-xs font-semibold text-slate-800">
                    Ambiente Climatizado, Amplo e Ergonômico
                  </p>
                </div>
                <span className="text-[11px] font-bold text-teal-700 uppercase tracking-wide">
                  São Paulo • SP
                </span>
              </div>
            </div>

            {/* Floating Glassmorphism Badge 1 (Top Left) */}
            <div
              ref={floatCard1Ref}
              className="absolute -top-6 -left-6 bg-white/95 backdrop-blur-lg border border-teal-100 shadow-xl rounded-2xl p-4 hidden sm:flex items-center gap-3 animate-float max-w-xs"
            >
              <div className="w-11 h-11 rounded-xl bg-teal-500/10 flex items-center justify-center text-teal-700 shrink-0">
                <CheckCircle2 className="w-6 h-6 text-teal-600" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900">Emissão de Recibo</p>
                <p className="text-[11px] text-slate-500 font-medium">Reembolso 100% com seu convênio</p>
              </div>
            </div>

            {/* Floating Glassmorphism Badge 2 (Bottom Right) */}
            <div
              ref={floatCard2Ref}
              className="absolute -bottom-6 -right-6 bg-white/95 backdrop-blur-lg border border-emerald-100 shadow-xl rounded-2xl p-4 hidden sm:flex items-center gap-3 max-w-xs animate-float"
              style={{ animationDelay: "1.5s" }}
            >
              <div className="w-11 h-11 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-700 shrink-0">
                <Activity className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900">98% de Eficácia</p>
                <p className="text-[11px] text-slate-500 font-medium">Alívio perceptível na 1ª sessão</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
