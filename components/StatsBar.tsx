"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Award, Users, HeartPulse, Sparkles } from "lucide-react";

export default function StatsBar() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".stat-item", {
        scrollTrigger: {
          trigger: barRef.current,
          start: "top 85%",
        },
        opacity: 0,
        y: 20,
        duration: 0.6,
        stagger: 0.15,
        ease: "power2.out",
      });
    }, barRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    {
      icon: Award,
      value: "+12 Anos",
      label: "De Experiência Clínica",
      sub: "Referência em coluna e esportes",
    },
    {
      icon: Users,
      value: "+5.000",
      label: "Vidas Transformadas",
      sub: "Pacientes reabilitados",
    },
    {
      icon: HeartPulse,
      value: "98%",
      label: "Taxa de Sucesso",
      sub: "Alívio expressivo da dor",
    },
    {
      icon: Sparkles,
      value: "100%",
      label: "Individualizado",
      sub: "1 paciente por horário",
    },
  ];

  return (
    <div ref={barRef} className="relative z-20 -mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl shadow-slate-900/5 border border-slate-200/80">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y lg:divide-y-0 lg:divide-x divide-slate-100">
          {stats.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={`stat-item flex items-center gap-4 ${
                  index > 0 ? "pt-4 lg:pt-0 lg:pl-6" : ""
                }`}
              >
                <div className="w-12 h-12 rounded-2xl bg-teal-50 border border-teal-100 text-teal-700 flex items-center justify-center shrink-0">
                  <Icon className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight block">
                    {item.value}
                  </span>
                  <p className="text-xs sm:text-sm font-bold text-slate-800 leading-tight">
                    {item.label}
                  </p>
                  <p className="text-[11px] text-slate-500 font-medium">
                    {item.sub}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
