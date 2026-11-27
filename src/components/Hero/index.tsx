import Banner from "../../assets/images/hero.webp";
import Arrow from "../../assets/images/seta.png";
import { Overlay } from "../Overlay";

export const Hero = () => {
  return (
    <div className="container relative">
      <section className="relative mb-5 h-[92svh] min-h-135 max-h-230 w-full overflow-hidden rounded-[20px]">
        {/* Imagem de Fundo */}
        <img
          src={Banner}
          alt="Rita Mirone com um microfone"
          className="h-full w-full rounded-[20px] object-cover object-top"
        />

        {/* Overlay (Texto) */}
        <Overlay
          title="seja locutor"
          subtitle="transformando vozes em oportunidades"
          className="absolute bottom-50 right-117 left-auto z-10 justify-start transition-all duration-300 max-[1389px]:right-100 max-[1246px]:right-80 max-[1100px]:inset-x-0 max-[1100px]:bottom-20 max-[1100px]:right-0 max-[1100px]:justify-center max-[1100px]:px-7 max-[1100px]:pb-20"
        >
          <div className="flex items-center gap-3"></div>
        </Overlay>

        {/* Seta Branca Animada */}
        <a
          href="#curso"
          aria-label="Rolar para baixo"
          className="absolute bottom-5 left-1/2 z-20 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full bg-black/35 backdrop-blur-xs transition hover:bg-black/55 sm:bottom-7 sm:h-14 sm:w-14"
        >
          <img
            src={Arrow}
            alt="Rolar para baixo"
            className="h-8 w-8 object-contain brightness-0 invert animate-bounce sm:h-9 sm:w-9"
          />
        </a>
      </section>
    </div>
  );
};