import { BotaoBlackFridayAula } from "../../Button/blackfridayaula";
import CapaAulaAvulsa from "../../../assets/images/capa-aula-avulsa.webp";
import VideoAulaAvulsa from "../../../assets/videos/aulaavulsa.mp4";

export const AulaAvulsa = () => {
  return (
    <section className="aula-avulsa mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      {/* CABEÇALHO DA SEÇÃO */}
      <div className="mb-12 text-center lg:text-left">
        <div className="mx-auto lg:mx-0 mb-3 h-1.5 w-14 rounded-full bg-violet-600" />
        <span className="inline-block rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-violet-700 mb-3">
          Oportunidade única, por tempo limitado
        </span>
        <h2 className="text-3xl font-bold tracking-tight text-violet-700 sm:text-4xl lg:text-5xl">
          Aula Avulsa
        </h2>
      </div>

      {/* GRID PRINCIPAL */}
      <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-12">
        {/* COLUNA ESQUERDA — TEXTO E BOTÃO */}
        <div className="flex flex-col w-full max-w-xl mx-auto lg:mx-0">
          <p className="font-semibold text-black text-lg text-center sm:text-left">
            Aprenda locução de vinhetas e chamadas
          </p>

          <p className="mt-4 text-base leading-relaxed text-neutral-600 text-center sm:text-left">
            Esta <strong className="text-neutral-900">Aula Avulsa</strong> foi extraída do curso de Locução Publicitária/Comercial
            criado por  <strong className="text-neutral-900">Rita Mirone</strong>, e é destinada a quem deseja dominar a intonação, o ritmo e interpretação de <strong className="text-neutral-900"> vinhetas e chamadas</strong>.
          </p>

          <p className="mt-4 text-base leading-relaxed text-neutral-600 text-center sm:text-left">  
          É também uma oportunidade de conhecer um pouco da metodologia de ensino de <strong className="text-neutral-900">Rita Mirone</strong>, tanto para quem já atua como locutor de rádio quanto para quem deseja experimentar esse universo e descobrir novas possibilidades através da própria voz.</p>

          <div className="mt-8">
            <BotaoBlackFridayAula />
          </div>
        </div>

        {/* COLUNA DIREITA — VÍDEO */}
        <div className="relative w-full overflow-hidden rounded-3xl border border-violet-200/80 bg-gradient-to-b from-violet-100/80 via-violet-50/75 to-purple-100/70 p-4 shadow-sm transition-all duration-300 hover:border-violet-300 hover:shadow-lg hover:shadow-violet-200/40 sm:p-5">
          <div className="pointer-events-none absolute inset-x-8 top-0 h-20 rounded-full bg-violet-300/20 blur-2xl" />

          <div className="relative flex flex-col items-center gap-4">
            <div className="px-1 text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-violet-200/80 bg-white/80 px-2.5 py-0.5">
                <span className="h-1.5 w-1.5 rounded-full bg-violet-600" />
                <span className="text-[11px] font-semibold uppercase tracking-wider text-violet-700">
                  Aula real
                </span>
              </div>

              <h3 className="mx-auto mt-1 max-w-md text-xs leading-relaxed text-neutral-600 sm:text-sm">
                Veja um trecho da aula e descubra como dominar a locução de vinhetas e chamadas.
              </h3>

            </div>

            <div className="w-full overflow-hidden rounded-2xl bg-neutral-900 shadow-md shadow-violet-200/60 ring-1 ring-violet-300/70">
              <video
                src={VideoAulaAvulsa}
                poster={CapaAulaAvulsa}
                controls
                playsInline
                preload="none"
                className="block h-auto w-full"
              >
                Seu navegador não suporta a reprodução de vídeos.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};