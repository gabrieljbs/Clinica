"use client";

import { useState } from "react";
import { 
  Calendar, 
  Clock, 
  Send, 
  CheckCircle, 
  Sparkles, 
  MessageCircle, 
  MapPin, 
  ShieldCheck,
  User,
  Phone
} from "lucide-react";

export default function BookingSection() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("Coluna & Lombar");
  const [period, setPeriod] = useState("Manhã (07h às 12h)");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    // Formatted WhatsApp message
    const msg = `Olá! Gostaria de agendar uma avaliação na Clínica Vitalità.
*Nome:* ${name}
*Telefone:* ${phone}
*Especialidade:* ${service}
*Período de preferência:* ${period}
${notes ? `*Observações:* ${notes}` : ""}`;

    const whatsappUrl = `https://wa.me/5511999998888?text=${encodeURIComponent(msg)}`;
    window.open(whatsappUrl, "_blank");
    setSubmitted(true);
  };

  return (
    <section id="agendamento" className="py-24 bg-white relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-teal-100 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Context & Guarantees */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs sm:text-sm font-semibold mb-4">
                <Sparkles className="w-4 h-4 text-teal-600" />
                <span>Agendamento Rápido & Sem Burocracia</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
                Dê o primeiro passo para viver sem dores
              </h2>
              <p className="text-slate-600 text-base leading-relaxed mb-8">
                Preencha o formulário e receba opções de horários disponíveis diretamente pelo WhatsApp com nossa equipe de acolhimento.
              </p>

              {/* Guarantees Box */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Resposta em até 10 minutos</h4>
                    <p className="text-xs text-slate-500">
                      Durante o horário comercial, nosso time responde de forma ágil e humanizada.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Sigilo & Privacidade Total</h4>
                    <p className="text-xs text-slate-500">
                      Seus dados de contato e informações de saúde são estritamente confidenciais.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-cyan-100 text-cyan-800 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Localização Privilegiada</h4>
                    <p className="text-xs text-slate-500">
                      Próximo ao metrô Trianon-Masp, com serviço de manobrista no local.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Pill */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-center justify-between">
              <span>Prefere agendar ligando diretamente?</span>
              <a
                href="tel:+5511999998888"
                className="font-bold text-teal-700 hover:text-teal-800 transition-colors"
              >
                (11) 99999-8888
              </a>
            </div>
          </div>

          {/* Right Column: High Conversion Booking Form */}
          <div className="lg:col-span-7">
            <div className="bg-gradient-to-b from-white to-slate-50 rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-2xl shadow-slate-200/80">
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-100">
                <div>
                  <h3 className="text-2xl font-extrabold text-slate-900">Solicitar Horário de Consulta</h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Sem compromisso • Atendimento 100% individual
                  </p>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-teal-600 text-white flex items-center justify-center shadow-md shadow-teal-600/30 shrink-0">
                  <Calendar className="w-6 h-6" />
                </div>
              </div>

              {submitted ? (
                <div className="p-8 text-center bg-teal-50 rounded-2xl border border-teal-200 animate-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-full bg-teal-600 text-white flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-bold text-teal-950 mb-2">Mensagem Enviada com Sucesso!</h4>
                  <p className="text-sm text-teal-800 max-w-md mx-auto mb-6">
                    A janela do WhatsApp foi aberta com todos os seus dados. Nossa equipe responderá em instantes com as melhores opções de horários!
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-xl bg-white border border-teal-300 text-teal-800 font-bold text-sm hover:bg-teal-100 transition-all cursor-pointer"
                  >
                    Fazer Novo Agendamento
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Seu Nome Completo *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                          <User className="w-4 h-4" />
                        </div>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Ex: João da Silva"
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        WhatsApp com DDD *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                          <Phone className="w-4 h-4" />
                        </div>
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="(11) 99999-9999"
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Specialty Selection & Preferred Period */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Especialidade / Tratamento
                      </label>
                      <select
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                      >
                        <option value="Coluna & Lombar">Coluna & Lombar (Hérnia / Ciático)</option>
                        <option value="Fisioterapia Esportiva">Fisioterapia Esportiva & Lesões</option>
                        <option value="Pilates Clínico">Pilates Clínico & Reabilitação</option>
                        <option value="RPG Postural">RPG (Reeducação Postural)</option>
                        <option value="Reabilitação Pós-Operatória">Reabilitação Pós-Operatória</option>
                        <option value="Avaliação Geral da Dor">Primeira Avaliação Geral da Dor</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Melhor Período para Atendimento
                      </label>
                      <select
                        value={period}
                        onChange={(e) => setPeriod(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                      >
                        <option value="Manhã (07h às 12h)">Manhã (07h às 12h)</option>
                        <option value="Tarde (12h às 17h)">Tarde (12h às 17h)</option>
                        <option value="Noite (17h às 20h)">Noite (17h às 20h)</option>
                        <option value="Sábado de Manhã (08h às 13h)">Sábado (08h às 13h)</option>
                      </select>
                    </div>
                  </div>

                  {/* Notes / Symptom details */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Descreva brevemente o que você está sentindo (Opcional)
                    </label>
                    <textarea
                      rows={3}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Ex: Sinto dor na lombar há 2 semanas que piora ao sentar..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all resize-none"
                    ></textarea>
                  </div>

                  {/* Submit CTA */}
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-3 py-4 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-base shadow-xl shadow-teal-600/30 active:scale-95 transition-all cursor-pointer"
                  >
                    <MessageCircle className="w-5 h-5 fill-white" />
                    <span>Confirmar e Enviar pelo WhatsApp</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
