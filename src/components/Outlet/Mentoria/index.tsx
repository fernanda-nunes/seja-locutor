import VideoApresentacao from "../../../assets/videos/guilherme.mp4";
import posterGuilherme from "../../../assets/images/capa-guilherme.webp";

export const Mentoria = () => {
    const beneficios = [
        {
            icone: "🎙️",
            titulo: "Você no Radar",
            texto: "É uma ótima oportunidade de você mostrar a sua voz e ser apresentado a produtores que solicitam indicações de talentos.",
        },
        {
            icone: "🌎",
            titulo: "Mercado internacional",
            texto: "Você irá aprender a entrar no mercado internacional, gravando da sua cidade, em português, mas recebendo em dólar e euro.",
        },
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
            <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
                {/* COLUNA ESQUERDA */}
                <div className="relative mx-auto flex w-full flex-col lg:mx-0">
                    {/* DECORAÇÃO */}
                    <div className="pointer-events-none absolute -left-10 -top-10 h-32 w-32 rounded-full bg-violet-200/40 blur-2xl" />

                    <div className="relative space-y-7">
                        {/* APRESENTAÇÃO */}
                        <div className="space-y-4">
                            <p className="text-base leading-relaxed text-neutral-600">
                                Opcionalmente, depois que acaba o curso, você poderá fazer uma aula única de mentoria, por videochamada.
                            </p>

                            <div>
                                <p className="text-lg font-semibold text-violet-700">
                                    Como funciona a mentoria?
                                </p>

                                <p className="mt-2.5 text-base leading-relaxed text-neutral-600">
                                    É aula particular, cobrada à parte, onde fazemos exercícios ao vivo e você recebe dicas extras valiosas.
                                </p>
                            </div>
                        </div>

                        {/* BENEFÍCIOS COM BACKGROUND ESTILIZADO */}
                        <div>
                            <div className="mb-4">
                                <p className="text-sm leading-relaxed text-neutral-500">
                                    Descubra as oportunidades que a mentoria pode proporcionar.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                {beneficios.map((beneficio) => (
                                    <div
                                        key={beneficio.titulo}
                                        className="group relative overflow-hidden rounded-2xl border border-violet-200/80 bg-gradient-to-br from-violet-100/80 via-violet-50/70 to-purple-100/75 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/70 hover:shadow-lg hover:shadow-violet-200/50"
                                    >
                                        <div className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full bg-violet-300/25 blur-xl transition-transform duration-300 group-hover:scale-125" />

                                        <span className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-violet-200/80 bg-white/90 text-2xl shadow-xs">
                                            {beneficio.icone}
                                        </span>

                                        <h4 className="relative mt-4 text-base font-bold text-neutral-900">
                                            {beneficio.titulo}
                                        </h4>

                                        <p className="relative mt-2 text-sm leading-relaxed text-neutral-600">
                                            {beneficio.texto}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* DIFERENCIAL COM BACKGROUND ESTILIZADO */}
                        <div className="relative overflow-hidden rounded-2xl border border-violet-200/90 border-l-4 border-l-violet-600 bg-gradient-to-br from-purple-100/85 via-violet-50 to-violet-100/70 p-5 shadow-sm sm:p-6">
                            <div className="pointer-events-none absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-violet-400/15 blur-2xl" />

                            {/* ÍCONE E TÍTULOS */}
                            <div className="relative flex items-center gap-4">
                                {/* ÍCONE WHATSAPP */}
                                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-green-200 bg-green-100 text-green-600 shadow-xs">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="h-6 w-6"
                                        aria-hidden="true"
                                    >
                                        <path d="M12.04 2a9.87 9.87 0 0 0-8.48 14.92L2 22l5.25-1.38A9.94 9.94 0 1 0 12.04 2Zm0 18.2a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.12.82.83-3.04-.2-.32a8.2 8.2 0 1 1 6.97 3.86Zm4.5-6.14c-.25-.13-1.48-.73-1.71-.81-.23-.09-.4-.13-.57.13-.17.25-.65.81-.8.98-.15.17-.3.19-.55.06-.25-.13-1.06-.39-2.02-1.24-.75-.67-1.25-1.5-1.4-1.75-.14-.25-.01-.39.11-.51.11-.11.25-.3.38-.45.12-.15.16-.25.25-.42.08-.17.04-.32-.02-.45-.06-.13-.57-1.37-.78-1.88-.2-.49-.41-.42-.57-.43h-.49c-.17 0-.45.06-.68.32-.23.25-.88.86-.88 2.1s.9 2.44 1.03 2.61c.13.17 1.77 2.7 4.29 3.79.6.26 1.15.16 1.58.1.48-.07 1.48-.61 1.69-1.2.21-.59.21-1.1.15-1.2-.06-.11-.23-.17-.48-.3Z" />
                                    </svg>
                                </span>

                                {/* TÍTULOS EM COLUNA */}
                                <div className="flex min-w-0 flex-col gap-1">
                                    <h3 className="text-lg font-bold leading-tight text-violet-900 sm:text-xl">
                                        Nosso diferencial
                                    </h3>

                                    <span className="inline-flex w-fit items-center rounded-full border border-violet-300/70 bg-white/80 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-violet-700">
                                        Grupo de WhatsApp exclusivo
                                    </span>
                                </div>
                            </div>

                            {/* DESCRIÇÃO */}
                            <p className="relative mt-4 text-sm leading-relaxed text-neutral-700 sm:text-base">
                                Quem passa pela mentoria, no mesmo dia pode entrar para o grupo de WhatsApp, composto por locutores de norte a sul do país, onde compartilhamos experiências e divulgamos testes.
                            </p>
                        </div>
                    </div>
                </div>

                {/* COLUNA DIREITA */}
                <div className="relative">
                    <div className="pointer-events-none absolute -right-8 -top-6 h-32 w-28 rounded-full bg-violet-200/40 blur-2xl" />

                    <div className="relative space-y-5">
                        {/* CARD DO VÍDEO (MAIS FINO + BACKGROUND ESTILIZADO) */}
                        <div className="relative w-full overflow-hidden rounded-3xl border border-violet-200/80 bg-gradient-to-b from-violet-100/80 via-violet-50/75 to-purple-100/70 p-4 shadow-sm transition-all duration-300 hover:border-violet-300 hover:shadow-lg hover:shadow-violet-200/40 sm:p-5">
                            <div className="pointer-events-none absolute inset-x-8 top-0 h-20 rounded-full bg-violet-300/20 blur-2xl" />

                            <div className="relative flex flex-col items-center gap-4">
                                <div className="px-1 text-center">
                                    <div className="inline-flex items-center gap-2 rounded-full border border-violet-200/80 bg-white/80 px-2.5 py-0.5">
                                        <span className="h-1.5 w-1.5 rounded-full bg-violet-600" />
                                        <span className="text-[11px] font-semibold uppercase tracking-wider text-violet-700">
                                            Depoimento real
                                        </span>
                                    </div>

                                    <h3 className="mt-2 text-base font-bold tracking-tight text-neutral-900 sm:text-lg">
                                        O que diz um de nossos mentorados
                                    </h3>

                                    <p className="mx-auto mt-1 max-w-md text-xs leading-relaxed text-neutral-600 sm:text-sm">
                                        Conheça a experiência de quem já passou pela mentoria e está conquistando novas oportunidades no mercado da locução.
                                    </p>
                                </div>

                                <div className="w-full max-w-[200px] overflow-hidden rounded-2xl bg-neutral-900 shadow-md shadow-violet-200/60 ring-1 ring-violet-300/70">
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
                        </div>

                        {/* EMPRESAS (MAIS FINO + BACKGROUND ESTILIZADO) */}
                        <div className="relative overflow-hidden rounded-3xl border border-violet-200/80 bg-gradient-to-br from-purple-100/80 via-violet-50/85 to-violet-100/75 p-4 shadow-sm sm:p-6">
                            <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-violet-300/25 blur-2xl" />

                            <div className="relative">
                                <div className="text-center">
                                    <span className="inline-block rounded-full border border-violet-200/80 bg-white/80 px-3 py-0.5 text-[11px] font-bold uppercase tracking-widest text-violet-700">
                                        Resultados na prática
                                    </span>

                                    <h3 className="mt-2 text-lg font-bold tracking-tight text-neutral-900 sm:text-xl">
                                        Empresas que já contrataram nossos mentorados
                                    </h3>

                                    <p className="mx-auto mt-1.5 max-w-md text-xs leading-relaxed text-neutral-600 sm:text-sm">
                                        Nossos mentorados já tiveram oportunidades em grandes marcas do mercado.
                                    </p>
                                </div>

                                {/* BALÕES DAS EMPRESAS (MAIS FINOS) */}
                                <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
                                    {empresas.map((empresa) => (
                                        <span
                                            key={empresa}
                                            className="inline-flex items-center rounded-full border border-violet-200/90 bg-white/90 px-3.5 py-1.5 text-xs font-semibold text-neutral-700 shadow-2xs transition-all duration-200 hover:-translate-y-0.5 hover:border-violet-400 hover:bg-violet-100 hover:text-violet-900 sm:text-sm"
                                        >
                                            {empresa}
                                        </span>
                                    ))}
                                </div>

                                {/* RODAPÉ */}
                                <div className="mt-4 flex items-center justify-center gap-2 border-t border-violet-200/80 pt-3.5">
                                    <span className="text-sm text-violet-600">✦</span>

                                    <p className="text-center text-xs font-medium text-neutral-600">
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
                    <strong className="text-neutral-800">Nota:</strong> A venda da Mentoria só está disponível para quem concluiu 100% do curso, informações adicionais após a emissão do certificado.
                </p>
            </div>
        </section>
    );
};