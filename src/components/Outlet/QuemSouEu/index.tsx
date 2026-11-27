import { useState, useRef } from "react";

import FotoRita from "../../../assets/images/quem-eu-sou-rita.webp";
import VideoLocucao from "../../../assets/videos/radio-locucao-rita.mp4";
import Randvi from "../../../assets/images/randvi-assassins-creed.webp";
import Slone from "../../../assets/images/slone-titanfall.webp";
import Sif from "../../../assets/images/sif-lego.webp";
import CapaVideo from "../../../assets/images/capa-locucoes-quem.webp";

interface GameHighlight {
  img: string;
  game: string;
  character: string;
  url: string;
  span?: string;
}

export const QuemSouEu = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const destaquesGames: GameHighlight[] = [
    {
      img: Randvi,
      game: "Assassin's Creed Valhalla",
      character: "Randvi",
      url: "https://www.instagram.com/tv/CSiXZ7cFaLm/?lqvp=MW5zNWR6cjRsNTVwcw==", 
    },
    {
      img: Slone,
      game: "Titanfall 2",
      character: "Slone",
      url: "https://www.instagram.com/reel/CfI7WwsFxA5/?dmpr=N3E4ZncyeGlzNzh2",
    },
    {
      img: Sif,
      game: "Lego Marvel Vingadores",
      character: "Sif",
      url: "https://www.disneyplus.com/pt-br/browse/entity-166d42c1-9757-49c1-8a65-7eec13f6817f",
      span: "sm:col-span-2 lg:col-span-1",
    },
  ];

  const toggleVideo = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <section className="quemSouEu mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      {/* CONTAINER PRINCIPAL (2 COLUNAS: BIOGRAFIA + VÍDEO) */}
      <div className="grid items-center gap-12 lg:grid-cols-2">
        {/* COLUNA ESQUERDA — BIOGRAFIA */}
        <div className="w-full max-w-xl mx-auto lg:mx-0">
          <div className="flex items-center gap-5">
            <img
              src={FotoRita}
              alt="Rita Mirone - Jornalista, Mentora e Locutora"
              loading="lazy"
              decoding="async"
              className="h-24 w-24 sm:h-28 sm:w-28 shrink-0 rounded-full object-cover shadow-md ring-4 ring-violet-200"
            />
            <div>
              <div className="h-1 w-12 rounded-full bg-violet-600 mb-2" />
              <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
                Rita Mirone
              </h2>
              <p className="font-semibold text-violet-700 text-sm sm:text-base mt-0.5">
                Mentora do curso
              </p>
            </div>
          </div>

          <div className="mt-6 space-y-4 text-base leading-relaxed text-neutral-600">
            <p>
              Com uma trajetória multifacetada na comunicação,{" "}
              <strong className="text-neutral-900">Rita Mirone</strong> é
              jornalista, atriz, locutora comercial e dubladora. Ela acumula
              vasta experiência dando voz a grandes campanhas publicitárias e
              personagens marcantes no universo dos games.
            </p>
            <p>
              Unindo sua sólida bagagem jornalística e artística, ela desenvolveu
              uma metodologia pratica e direta para ensinar você a dominar a
              própria voz, projetar autoridade e transformá-la em uma poderosa
              fonte de renda.
            </p>
          </div>
        </div>

        {/* COLUNA DIREITA — PLAYER DE VÍDEO */}
        <div className="relative overflow-hidden rounded-3xl border border-violet-100 bg-white p-5 sm:p-6 shadow-md transition-all duration-300 hover:shadow-xl hover:shadow-violet-100/50 lg:p-8">
          <div className="relative">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900">
                Locuções de Rita Mirone
              </h3>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={toggleVideo}
                  className="rounded-full bg-violet-600 px-3 py-1 text-xs font-semibold text-white hover:bg-violet-700 transition-colors cursor-pointer"
                >
                  {isPlaying ? "Pausar" : "Play"}
                </button>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl bg-black shadow-inner aspect-video">
              <video
                ref={videoRef}
                src={VideoLocucao}
                poster={CapaVideo}
                controls
                preload="none"
                playsInline
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onEnded={() => setIsPlaying(false)}
                className="h-full w-full object-cover"
              />
            </div>

            <p className="mt-4 text-center text-xs sm:text-sm text-neutral-500">
              Assista ao vídeo para conferir a versatilidade vocal e os
              comerciais gravados pela mentora.
            </p>
          </div>
        </div>
      </div>

      {/* DESTAQUES EM GAMES */}
      <div className="mt-16 border-t border-violet-100 pt-10">
        <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-violet-800/80 mb-6 text-center lg:text-left">
          Destaques em Games:
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {destaquesGames.map((item) => (
            <a
              key={item.character}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${item.character} em ${item.game} (abre em nova aba)`}
              className={`group relative overflow-hidden rounded-2xl border border-violet-100 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:border-violet-300 hover:bg-violet-50/40 ${item.span || ""}`}
            >
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-4 min-w-0">
                  <img
                    src={item.img}
                    alt={`Dublagem de Games - ${item.character}`}
                    loading="lazy"
                    decoding="async"
                    className="h-14 w-14 rounded-xl object-cover shrink-0 ring-1 ring-violet-100"
                  />
                  <div className="min-w-0">
                    <span className="block truncate text-xs font-bold text-violet-700">
                      {item.game}
                    </span>
                    <p className="text-sm font-semibold text-neutral-900 leading-snug mt-0.5 truncate">
                      {item.character}
                    </p>
                  </div>
                </div>

                <span
                  aria-hidden="true"
                  className="shrink-0 text-xs font-semibold text-violet-400 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-violet-700"
                >
                  ↗
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};