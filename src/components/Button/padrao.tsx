
export const BotaoPadrao = () => {
  return (

    <section >

   <div className="mt-16 text-center">
          <button
            type="button"
            onClick={() => window.open("https://pay.kiwify.com.br/ZzSIGgV", "_blank")}
            className="group inline-flex items-center gap-3 rounded-full bg-violet-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-violet-200 transition-all duration-300 hover:-translate-y-1 hover:bg-violet-700 hover:shadow-xl hover:shadow-violet-300 cursor-pointer"
          >
            Quero me inscrever e transformar minha voz
            <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">→</span>
          </button>
        </div>
    
</section>
  )
}
