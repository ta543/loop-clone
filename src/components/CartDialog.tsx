import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { CartUpsell } from "@/components/CartDialog/components/CartUpsell";

type CartDialogProps = {
  isOpen: boolean;
  onClose: () => void;
};

const ANIMATION_MS = 300;

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
      className={`fixed inset-0 z-50 flex justify-end bg-black/30 transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      onClick={onClose}
    >
      <section
        className={`flex h-full w-full max-w-[460px] flex-col overflow-hidden bg-[#f6f6f6] text-neutral-800 shadow-xl transition-transform duration-300 ease-out ${
          isVisible ? "translate-x-0" : "translate-x-full"
        }`}
        onClick={(event) => event.stopPropagation()}
      >
        <header className="flex items-center justify-between px-6 pb-6 pt-7">
          <h2 className="text-[54px] font-medium tracking-[-1.6px] leading-none">
            Your cart
          </h2>
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
          <div className="px-4 pb-4">
            <div className="rounded-xl bg-[#d9edf0] px-4 py-4">
              <div className="mb-4 flex items-center justify-between text-[15px] tracking-[-0.4px] text-neutral-800">
                <p>Free shipping over €39</p>
                <p>€39.00 left</p>
              </div>
              <div className="h-1 w-full rounded-full bg-[#e4dede]" />
            </div>
          </div>

          <div className="flex flex-1 flex-col justify-between overflow-y-auto">
            <div className="px-8 pt-12 text-center">
              <h3 className="text-[28px] font-medium tracking-[-0.8px] leading-tight text-[#202129]">
                Your cart is empty
              </h3>
              <p className="mt-5 text-[18px] tracking-[-0.36px] text-neutral-500">
                Need help choosing?
              </p>
              <a
                href="https://www.loopearplugs.com/pages/quiz"
                className="mx-auto mt-6 inline-flex min-h-12 min-w-[280px] items-center justify-center rounded-full bg-[#202129] px-8 text-[20px] font-medium tracking-[-0.4px] text-white"
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
