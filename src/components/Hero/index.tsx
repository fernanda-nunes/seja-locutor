import Banner from "../../assets/images/hero.jpg";
import Arrow from "../../assets/images/seta.png";
import { Overlay } from "../Overlay";

export const Hero = () => {
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
    </div>
  );
};