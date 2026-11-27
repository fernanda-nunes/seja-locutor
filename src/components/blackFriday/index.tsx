import { useState, useEffect } from "react";
import { X, Sparkles } from "lucide-react";

import Logo from "../../assets/images/logo.png";

interface BlackFridayOverlayProps {
  delayMs?: number;
  className?: string;
}

export const BlackFridayOverlay = ({
  delayMs = 1000,
  className = "",
}: BlackFridayOverlayProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delayMs);

    return () => clearTimeout(timer);
  }, [delayMs]);

  if (!isVisible) return null;

  return (
    <aside
      aria-label="Destaque Black Friday"
      className={`w-[calc(100%-3.5rem)] max-w-xs rounded-2xl border border-yellow-400/50 bg-zinc-950/90 backdrop-blur-md p-4 text-center shadow-2xl transition-all duration-300 ${className}`}
      style={{
        backgroundImage:
          "radial-gradient(circle at top, rgba(124, 58, 237, 0.28) 0%, rgba(9, 9, 11, 0.94) 72%)",
      }}
    >
      {/* Botão Fechar (X) */}
      <button
        type="button"
        onClick={() => setIsVisible(false)}
        className="absolute top-2.5 right-2.5 p-1 rounded-full bg-white/5 text-zinc-400 hover:text-white hover:bg-white/15 transition-colors cursor-pointer"
        aria-label="Fechar aviso"
      >
        <X className="w-3.5 h-3.5" />
      </button>

      {/* Badge */}
      <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-violet-950/90 border border-violet-500/40 text-violet-200 text-[11px] font-semibold uppercase tracking-wider mb-2.5">
        <Sparkles className="w-3 h-3 text-yellow-400 shrink-0" />
        Black Friday
      </div>

      {/* Logo / Microfone */}
      <div className="mx-auto mb-2 w-11 h-11 rounded-full border border-yellow-400/50 flex items-center justify-center shadow-md bg-zinc-900/60">
        <img
          src={Logo}
          alt="Microfone do curso Seja Locutor"
          className="h-8 w-auto object-contain"
        />
      </div>

      <h2 className="text-lg font-light text-white leading-tight">
        Seja Locutor
      </h2>

      <p className="text-yellow-400 text-xs font-semibold mt-2">
        Condição especial por tempo limitado
      </p>

      <p className="text-zinc-300 text-xs mt-1.5 leading-relaxed">
        Confira o desconto exclusivo e transforme sua voz em oportunidade.
      </p>
    </aside>
  );
};