
import VideoApresentacao from "../../../assets/videos/guilherme.mp4";
import posterGuilherme from "../../../assets/images/capa-guilherme.webp";

export const Mentoria = () => {

    const beneficios = [
        {
            icone: "🎙️",
            titulo: "Você no Radar",
            texto: "É uma ótima oportunidade de você mostrar a sua voz e ser apresentado a produtores que solicitam indicações de talentos."
        },
        {
            icone: "🌎",
            titulo: "Mercado internacional",
            texto: "Você irá aprender a entrar no mercado internacional, gravando da sua cidade, em português, mas recebendo em dólar e euro."
        }
    ];

    const empresas = [
        "Bradesco",
        "O Boticário",
        "Amazon",
        "Santander",
        "IFood",
        "Lego",
        "Omo",
        "Coca-Cola",
        "Multishow",
        "Itaú",
        "Nescau",
        "Mercedes",
        "Unimed",
        "Arcelormittal",
        "McDonald's",
    ];

    return (
        <section className="about mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">

            {/* CABEÇALHO */}
            <div className="mb-10 text-center lg:text-left">

                <div className="mx-auto mb-3 h-1.5 w-14 rounded-full bg-violet-600 lg:mx-0" />

                <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
                    Mentoria
                </h2>

            </div>

            {/* GRID PRINCIPAL */}
            <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">

                {/* COLUNA ESQUERDA */}
                <div className="relative mx-auto flex w-full flex-col lg:mx-0">

                    {/* DECORAÇÃO */}
                    <div className="pointer-events-none absolute -left-10 -top-10 h-32 w-32 rounded-full bg-violet-200/40 blur-2xl" />

                    <div className="relative space-y-8">

                        {/* APRESENTAÇÃO */}
                        <div className="space-y-4">

                            <p className="text-base leading-relaxed text-neutral-600">
                                Opcionalmente, depois que acaba o curso, você poderá fazer uma aula única de mentoria, por videochamada.
                            </p>

                            <div>
                                <p className="text-lg font-semibold text-violet-700">
                                    Como funciona a mentoria?
                                </p>

                                <p className="mt-3 text-base leading-relaxed text-neutral-600">
                                    É aula particular, cobrada à parte, onde fazemos exercícios ao vivo e você recebe dicas extras valiosas.
                                </p>
                            </div>

                        </div>

                        {/* BENEFÍCIOS */}
                        <div>

                            <div className="mb-5">

                                <h3 className="text-xl font-bold tracking-tight text-neutral-900 sm:text-2xl">
                                    Benefícios
                                </h3>

                                <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                                    Descubra as oportunidades que a mentoria pode proporcionar.
                                </p>

                            </div>

                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

                                {beneficios.map((beneficio) => (

                                    <div
                                        key={beneficio.titulo}
                                        className="group flex flex-col rounded-2xl border border-violet-100 bg-violet-50/40 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-violet-300 hover:shadow-lg hover:shadow-violet-100/60"
                                    >

                                        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-100 text-2xl">
                                            {beneficio.icone}
                                        </span>

                                        <h4 className="mt-5 text-base font-bold text-neutral-900">
                                            {beneficio.titulo}
                                        </h4>

                                        <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                                            {beneficio.texto}
                                        </p>

                                    </div>

                                ))}

                            </div>

                        </div>

                        {/* DIFERENCIAL */}
                        <div className="rounded-2xl border border-violet-100 border-l-4 border-l-violet-600 bg-violet-50/60 p-5 shadow-sm sm:p-6">

                            {/* ÍCONE E TÍTULOS */}
                            <div className="flex items-center gap-4">

                                {/* ÍCONE WHATSAPP */}
                                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-600">

                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="h-7 w-7"
                                        aria-hidden="true"
                                    >
                                        <path d="M12.04 2a9.87 9.87 0 0 0-8.48 14.92L2 22l5.25-1.38A9.94 9.94 0 1 0 12.04 2Zm0 18.2a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.12.82.83-3.04-.2-.32a8.2 8.2 0 1 1 6.97 3.86Zm4.5-6.14c-.25-.13-1.48-.73-1.71-.81-.23-.09-.4-.13-.57.13-.17.25-.65.81-.8.98-.15.17-.3.19-.55.06-.25-.13-1.06-.39-2.02-1.24-.75-.67-1.25-1.5-1.4-1.75-.14-.25-.01-.39.11-.51.11-.11.25-.3.38-.45.12-.15.16-.25.25-.42.08-.17.04-.32-.02-.45-.06-.13-.57-1.37-.78-1.88-.2-.49-.41-.42-.57-.43h-.49c-.17 0-.45.06-.68.32-.23.25-.88.86-.88 2.1s.9 2.44 1.03 2.61c.13.17 1.77 2.7 4.29 3.79.6.26 1.15.16 1.58.1.48-.07 1.48-.61 1.69-1.2.21-.59.21-1.1.15-1.2-.06-.11-.23-.17-.48-.3Z" />
                                    </svg>

                                </span>

                                {/* TÍTULOS EM COLUNA */}
                                <div className="flex min-w-0 flex-col gap-1">

                                    <h3 className="text-lg font-bold leading-tight text-violet-800 sm:text-xl">
                                        Nosso diferencial
                                    </h3>

                                

                                <div className="flex min-w-0 flex-col gap-1">

                                    <h4 className="text-xs font-bold uppercase tracking-widest text-violet-600">
                                        Grupo de WhatsApp exclusivo
                                    </h4>

                                </div>
                                </div>

                            </div>

                            {/* DESCRIÇÃO */}
                            <p className="mt-4 text-sm leading-relaxed text-neutral-600 sm:text-base">
                                Quem passa pela mentoria, no mesmo dia pode entrar para o grupo de WhatsApp, composto por locutores de norte a sul do país, onde compartilhamos experiências e divulgamos testes.
                            </p>

                        </div>

                    </div>

                </div>

                {/* COLUNA DIREITA */}
                <div className="relative ">

                    <div className="pointer-events-none absolute -right-8 -top-6 h-32 w-25 rounded-full bg-violet-200/40 blur-2xl" />

                    <div className="relative space-y-6">

                        {/* CARD DO VÍDEO */}
                        <div className="w-full overflow-hidden rounded-3xl border border-violet-100 bg-violet-50/60 p-4 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-violet-100/50 sm:p-6">

                        {/* DESCRIÇÃO */}
                            <div className="px-2 pb-2 pt-5 text-center">

                                <div className="flex items-center justify-center gap-2">

                                    <span className="h-2 w-2 rounded-full bg-violet-600" />

                                    <span className="text-xs font-semibold uppercase tracking-wider text-violet-700">
                                        Depoimento real
                                    </span>

                                </div>

                                <h3 className="mt-2 text-lg font-bold tracking-tight text-neutral-900 sm:text-xl">
                                    O que diz um de nossos mentorados
                                </h3>

                                <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                                    Conheça a experiência de quem já passou pela mentoria e está conquistando novas oportunidades no mercado da locução.
                                </p>

                            </div>

                            <div className="mx-auto w-full max-w-[220px] overflow-hidden rounded-2xl bg-neutral-900 shadow-lg shadow-violet-100/60 ring-1 ring-violet-100/80">

                                <video
                                    src={VideoApresentacao}
                                    poster={posterGuilherme}
                                    controls
                                    playsInline
                                    preload="none"
                                    className="block h-auto w-full"
                                >
                                    Seu navegador não suporta a reprodução de vídeos.
                                </video>

                            </div>

                            

                        </div>

                        {/* EMPRESAS */}
                        <div className="relative overflow-hidden rounded-3xl border border-violet-100 bg-violet-50/60 p-6 shadow-sm sm:p-8">

                            <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-violet-200/40 blur-2xl" />

                            <div className="relative">

                                <div className="text-center">

                                    <span className="text-xs font-bold uppercase tracking-widest text-violet-600">
                                        Resultados na prática
                                    </span>

                                    <h3 className="mt-2 text-xl font-bold tracking-tight text-neutral-900 sm:text-2xl">
                                        Empresas que já contrataram nossos mentorados
                                    </h3>

                                    <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-neutral-600">
                                        Nossos mentorados já tiveram oportunidades em grandes marcas do mercado.
                                    </p>

                                </div>

                                {/* BALÕES DAS EMPRESAS */}
                                <div className="mt-6 flex flex-wrap items-center justify-center gap-3">

                                    {empresas.map((empresa) => (

                                        <span
                                            key={empresa}
                                            className="inline-flex items-center rounded-full border border-violet-200 bg-white px-5 py-3 text-sm font-bold text-neutral-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-violet-400 hover:bg-violet-100 hover:text-violet-800 hover:shadow-md"
                                        >
                                            {empresa}
                                        </span>

                                    ))}

                                </div>

                                {/* RODAPÉ */}
                                <div className="mt-6 flex items-center justify-center gap-2 border-t border-violet-200/60 pt-5">

                                    <span className="text-lg text-violet-600">
                                        ✦
                                    </span>

                                    <p className="text-center text-xs font-medium text-neutral-500 sm:text-sm">
                                        Sua voz também pode chegar a grandes oportunidades.
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

            {/* OBSERVAÇÃO */}
            <div className="mt-8 border-t border-violet-200/60 pt-6 text-center lg:text-left">

                <p className="text-xs font-medium text-neutral-600 sm:text-sm">
                    <strong className="text-neutral-800">Observação:</strong> A venda da Mentoria só está disponível para quem concluiu 100% do curso, informações adicionais após a emissão do certificado.
                </p>

            </div>

        </section>
    );
};
