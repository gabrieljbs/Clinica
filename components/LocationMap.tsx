"use client";

import { MapPin, Clock, Phone, Mail, Car, Navigation, Sparkles } from "lucide-react";

export default function LocationMap() {
  return (
    <section id="contato" className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-100/70 border border-teal-200 text-teal-800 text-xs sm:text-sm font-semibold mb-4">
            <MapPin className="w-4 h-4 text-teal-600" />
            <span>Fácil Acesso</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Onde Estamos Localizados
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Uma estrutura moderna e confortável no coração de São Paulo, projetada para a sua comodidade e segurança.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Contact & Facility Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            {/* Address */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-700 flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-teal-600" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-base mb-1">Endereço da Clínica</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Av. Paulista, 1500 • Conjunto 804 (Edifício Metropolitan)
                  <br />
                  Bela Vista — São Paulo, SP • CEP 01310-200
                </p>
                <div className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-teal-700 bg-teal-50 px-2.5 py-1 rounded-md">
                  <Navigation className="w-3.5 h-3.5" />
                  A 150m da Estação Trianon-MASP do Metrô
                </div>
              </div>
            </div>

            {/* Parking & Accessibility */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                <Car className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-base mb-1">Estacionamento & Acessibilidade</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Serviço de manobrista no local com convênio. Edifício 100% acessível com rampas, elevadores amplos e piso tátil.
                </p>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-cyan-50 text-cyan-700 flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6 text-cyan-600" />
              </div>
              <div className="w-full">
                <h4 className="font-bold text-slate-900 text-base mb-2">Horários de Atendimento</h4>
                <div className="space-y-1 text-xs sm:text-sm text-slate-600">
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="font-medium">Segunda a Sexta-feira</span>
                    <span className="font-bold text-slate-900">07h00 às 20h00</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="font-medium">Sábados</span>
                    <span className="font-bold text-slate-900">08h00 às 13h00</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="font-medium text-slate-400">Domingos e Feriados</span>
                    <span className="font-medium text-slate-400">Fechado</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Map Embed */}
          <div className="lg:col-span-7 bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-xl min-h-[380px] relative">
            <iframe
              title="Localização da Clínica Vitalità no Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.197576208643!2d-46.65651582375836!3d-23.56134956157833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%201500%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "380px" }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            ></iframe>
            <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-4 py-2 rounded-xl text-xs font-bold text-slate-800 shadow-md border border-slate-100 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
              Metrô Trianon-Masp
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
