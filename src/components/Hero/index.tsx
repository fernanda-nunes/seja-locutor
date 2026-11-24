import { useState, useEffect } from "react";
import { X, Sparkles, ArrowRight } from "lucide-react";

import Banner from "../../assets/images/hero.jpg";
import Arrow from "../../assets/images/seta.png";
import Logo from "../../assets/images/logo.png";
import { Overlay } from "../Overlay";

export const Hero = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="container relative">
      <section className="relative h-200 rounded-[20px] mb-5 overflow-hidden md:h-240">
        {/* Imagem de Fundo Original */}
        <img
          src={Banner}
          alt="Rita Mirone com um microfone"
          className="w-full h-full object-cover rounded-[20px]"
        />

        {/* Overlay Original (Texto) */}
        <Overlay
          title="seja locutor"
          subtitle="transformando vozes em oportunidades"
          className="absolute bottom-20 left-0 right-0 px-7 pb-20 justify-center 
                     min-[1400px]:bottom-120 min-[1400px]:right-120 min-[1400px]:left-auto min-[1400px]:justify-start 
                     transition-all duration-300 z-10"
        >
          <div className="flex items-center gap-3"></div>
        </Overlay>

        {/* Seta Branca Animada Original */}
        <img
          src={Arrow}
          alt="Rolar para baixo"
          className="absolute bottom-5 left-1/2 -translate-x-1/2
                     w-14 h-14 object-contain z-20
                     brightness-0 invert animate-bounce"
        />
      </section>

      {/* POP-UP MODAL COMPACTO DE BLACK FRIDAY */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div
            className="relative w-full max-w-md rounded-2xl border border-yellow-400/50 bg-zinc-950 p-6 text-center shadow-2xl"
            style={{
              backgroundImage:
                "radial-gradient(circle at top, rgba(124, 58, 237, 0.22) 0%, #09090b 70%)",
            }}
          >
            {/* Botão Fechar (X) */}
            <button
              type="button"
              onClick={handleCloseModal}
              className="absolute top-3.5 right-3.5 p-1.5 rounded-full bg-white/5 text-zinc-400 hover:text-white hover:bg-white/15 transition-colors cursor-pointer"
              aria-label="Fechar modal"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-950/90 border border-violet-500/40 text-violet-200 text-2xl font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="w-5 h-3.5 text-yellow-400" />
              Black Friday
            </div>

            {/* Logo / Microfone igual ao do Header */}
            <div className="mx-auto mb-3 w-16 h-16 rounded-full border border-yellow-400/50 flex items-center justify-center shadow-md">
              <img
                src={Logo}
                alt="Microfone do curso Seja Locutor"
                className="h-13 w-auto object-contain"
              />
            </div>

            <h2
              id="modal-title"
              className="text-3xl font-extralight text-white leading-tight"
            >
              Seja Locutor
            </h2>

            <p className="text-yellow-400 text-sm font-semibold mt-1">
              Condição especial por tempo limitado
            </p>

            <p className="text-zinc-300 text-sm mt-3 leading-relaxed">
              Garanta sua vaga com desconto exclusivo e transforme sua voz em
              oportunidades reais na locução.
            </p>

            {/* Botão CTA */}
            <a
              href="#checkout"
              onClick={handleCloseModal}
              className="mt-5 inline-flex items-center justify-center gap-2 px-5 py-3 bg-yellow-500 hover:bg-yellow-400 text-zinc-950 rounded-xl font-bold text-sm transition-all shadow-lg shadow-yellow-500/20"
            >
              Comprar com desconto
              <ArrowRight className="w-4 h-4" />
            </a>

            <p className="text-zinc-500 text-xs mt-3">
              Válido enquanto durar a promoção.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};