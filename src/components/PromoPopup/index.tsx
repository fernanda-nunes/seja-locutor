import { useEffect, useState } from "react";
import flyerImg from "../../assets/images/flyer-black-friday.webp";

interface PromoPopupProps {
  checkoutUrl?: string;
  courseSectionId?: string;
  delayMs?: number;
}

export function PromoPopup({
  checkoutUrl = "https://sejalocutor.com.br/checkout-aula-avulsa",
  courseSectionId = "curso",
  delayMs = 800,
}: PromoPopupProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsOpen(true);
    }, delayMs);

    return () => window.clearTimeout(timer);
  }, [delayMs]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const handleCloseForFullCourse = () => {
    setIsOpen(false);

    const target = document.getElementById(courseSectionId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="promo-popup-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-3 backdrop-blur-xs"
      onClick={() => setIsOpen(false)}
    >
      <div
        className="relative flex max-h-[94vh] w-full max-w-sm flex-col overflow-hidden rounded-3xl border border-violet-500/30 bg-neutral-950 text-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          aria-label="Fechar pop-up"
          className="absolute right-3 top-3 z-10 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-black/70 text-base font-bold text-white transition hover:bg-black"
        >
          ×
        </button>

        <div className="min-h-0 flex-1 bg-neutral-900">
          <img
            id="promo-popup-title"
            src={flyerImg}
            alt="Curso de Locução com Rita Mirone - Black Friday: experimente uma aula do curso de locução por apenas R$ 27"
            className="h-full w-full object-contain"
          />
        </div>

        <div className="shrink-0 space-y-2.5 p-4">
          <a
            href={checkoutUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 via-fuchsia-600 to-amber-500 px-4 py-3 text-center text-sm font-bold text-white shadow-lg transition hover:brightness-110 sm:text-base"
          >
            <span>Compre aqui</span>
            <span aria-hidden="true">→</span>
          </a>

          <p className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-center text-xs leading-snug text-neutral-300">
            <strong className="text-amber-300">Nota:</strong> Para comprar o
            curso completo,{" "}
            <button
              type="button"
              onClick={handleCloseForFullCourse}
              className="cursor-pointer font-semibold text-violet-300 underline underline-offset-2 hover:text-violet-200"
            >
              feche este pop-up
            </button>{" "}
            e acesse as opções do curso completo na página.
          </p>
        </div>
      </div>
    </div>
  );
}