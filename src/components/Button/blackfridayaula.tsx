
export const BotaoBlackFridayAula = () => {
  return (

    <section >

   {/* DIV TEMPORÁRIA — BLACK FRIDAY */}
          <div className="mt-8  rounded-2xl border border-violet-500/40 bg-neutral-950 p-4 sm:p-5 text-white shadow-xl shadow-violet-950/30">
            {/* Tag de urgência */}
            <div className="mb-3 flex flex-wrap items-center justify-between gap-2"> 
              <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-400/15 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-amber-300 ring-1 ring-amber-400/40">
                <span className="h-2 w-2 rounded-full bg-amber-400 animate-ping" />
                Black Friday • Tempo Limitado
              </span>
             
            </div>

            {/* Botão principal */}
            <button
              type="button"
              onClick={() =>
                window.open("https://pay.kiwify.com.br/UHv1Mn4", "_blank")
              }
              className="group relative flex items-center justify-between gap-3 overflow-hidden rounded-xl bg-gradient-to-r from-violet-600 via-yellow-600 to-fuchsia-600 px-6 py-4 text-left font-semibold text-white shadow-lg shadow-violet-600/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-fuchsia-600/40 cursor-pointer"
            >
              {/* Brilho sutil passando ao passar o mouse */}
              <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

              <span className="relative flex flex-col">
                
                <span className="text-base sm:text-lg font-bold leading-snug">
                  Quero comprar aula avulsa
                </span>
              </span>

              <span className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15 text-xl transition-transform duration-300 group-hover:translate-x-1 group-hover:bg-white/25">
                →
              </span>
            </button>

           
          </div>
    
</section>
  )
}
