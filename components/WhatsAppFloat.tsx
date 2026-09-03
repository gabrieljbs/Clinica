"use client";

import { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";

export default function WhatsAppFloat() {
  const [showNotification, setShowNotification] = useState(false);
  const [closed, setClosed] = useState(false);

  useEffect(() => {
    // Show teaser after 3 seconds on page
    const timer = setTimeout(() => {
      setShowNotification(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-auto">
      {/* Floating Teaser Balloon */}
      {showNotification && !closed && (
        <div className="bg-white rounded-2xl p-4 shadow-2xl border border-slate-200 max-w-xs animate-in slide-in-from-bottom-5 duration-300 relative group">
          <button
            onClick={() => setClosed(true)}
            className="absolute -top-2 -left-2 w-6 h-6 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 flex items-center justify-center text-xs shadow-sm transition-colors"
            aria-label="Fechar mensagem"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center text-xs font-bold shrink-0">
              VT
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900">Recepção Vitalità</p>
              <p className="text-[10px] text-emerald-600 font-medium flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                Online agora
              </p>
            </div>
          </div>
          <p className="text-xs text-slate-600 leading-snug">
            Olá! Sentindo dor ou desconforto? Podemos ajudar você a agendar sua avaliação hoje mesmo. 👋
          </p>
          <a
            href="https://wa.me/5511999998888?text=Ol%C3%A1!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20as%20consultas%20de%20fisioterapia."
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 block text-center py-2 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-colors shadow-sm"
          >
            Conversar no WhatsApp
          </a>
        </div>
      )}

      {/* Main Floating Button */}
      <a
        href="https://wa.me/5511999998888?text=Ol%C3%A1!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20as%20consultas%20de%20fisioterapia."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Conversar no WhatsApp"
        className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-2xl shadow-emerald-600/50 hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer relative group"
      >
        <MessageCircle className="w-7 h-7 fill-white" />
        <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-500 border-2 border-white flex items-center justify-center text-[9px] font-bold text-white">
          1
        </span>
      </a>
    </div>
  );
}
