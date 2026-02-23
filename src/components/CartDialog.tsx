import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { CartUpsell } from "@/components/CartDialog/components/CartUpsell";

type CartDialogProps = {
  isOpen: boolean;
  onClose: () => void;
};

const ANIMATION_MS = 420;

export const CartDialog = ({ isOpen, onClose }: CartDialogProps) => {
  const [shouldRender, setShouldRender] = useState(isOpen);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      requestAnimationFrame(() => setIsVisible(true));
      return;
    }

    setIsVisible(false);
    const timer = window.setTimeout(() => setShouldRender(false), ANIMATION_MS);
    return () => window.clearTimeout(timer);
  }, [isOpen]);

  if (!shouldRender) {
    return null;
  }

  return (
    <aside
      aria-label="Cart drawer"
      className={`fixed inset-0 z-50 flex justify-end bg-black/30 transition-opacity duration-300 ease-out ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      onClick={onClose}
    >
      <section
        className={`font-avantt font-medium flex h-full w-full max-w-[460px] flex-col overflow-hidden bg-[#f6f6f6] text-neutral-800 shadow-xl transition-all duration-[420ms] [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] ${
          isVisible
            ? "translate-x-0 scale-100 opacity-100"
            : "translate-x-[110%] scale-[0.985] opacity-90"
        }`}
        onClick={(event) => event.stopPropagation()}
      >
        <header className="flex items-center justify-between px-8 pb-7 pt-8">
          <h2 className="text-[20px] tracking-[-0.6px] leading-none">Your cart</h2>
          <button
            type="button"
            aria-label="Close cart"
            onClick={onClose}
            className="inline-flex h-8 w-8 items-center justify-center rounded-full text-neutral-700 transition hover:bg-black/5"
          >
            <X className="h-7 w-7 stroke-[1.5]" />
          </button>
        </header>

        <main className="flex min-h-0 flex-1 flex-col">
          <div className="px-8 pb-5">
            <div className="rounded-xl bg-[#d9edf0] px-8 py-6">
              <div className="mb-5 flex items-center justify-between">
                <p className="block text-[14px] font-medium leading-[16.1px] tracking-normal text-[#252427] [font-family:Avantt,sans-serif]">
                  Free shipping over €39
                </p>
                <p className="block text-[14px] font-medium leading-[16.1px] tracking-normal text-[#252427] [font-family:Avantt,sans-serif]">
                  €39.00 left
                </p>
              </div>
              <div className="h-1 w-full rounded-full bg-[#e4dede]" />
            </div>
          </div>

          <div className="flex flex-1 flex-col justify-between overflow-y-auto">
            <div className="px-8 pt-16 text-center">
              <h3 className="text-[30px] tracking-[-0.9px] leading-[1.05] text-[#202129]">
                Your cart is empty
              </h3>
              <p className="mt-8 text-[18px] tracking-[-0.36px] leading-none text-neutral-500">
                Need help choosing?
              </p>
              <a
                href="https://www.loopearplugs.com/pages/quiz"
                className="mx-auto mt-8 inline-flex min-h-12 min-w-[260px] items-center justify-center rounded-full bg-[#202129] px-10 text-[20px] tracking-[-0.4px] leading-none text-white"
              >
                Take the quiz (1min)
              </a>
            </div>

            <CartUpsell />
          </div>
        </main>
      </section>
    </aside>
  );
};
