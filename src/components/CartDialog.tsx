import { X } from "lucide-react";
import { CartUpsell } from "@/components/CartDialog/components/CartUpsell";

export const CartDialog = () => {
  return (
    <aside
      aria-label="Cart drawer"
      className="fixed inset-0 z-50 flex justify-end bg-black/20"
    >
      <section className="flex h-full w-full max-w-[860px] flex-col overflow-hidden rounded-bl-3xl bg-[#f6f6f6] text-neutral-800">
        <header className="flex items-center justify-between px-8 pb-8 pt-7">
          <h2 className="text-[52px] font-medium tracking-[-1.56px] leading-none">
            Your cart
          </h2>
          <button
            type="button"
            aria-label="Close cart"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-neutral-700 transition hover:bg-black/5"
          >
            <X className="h-8 w-8 stroke-[1.5]" />
          </button>
        </header>

        <main className="flex min-h-0 flex-1 flex-col">
          <div className="px-8 pb-8">
            <div className="rounded-xl bg-[#d9edf0] px-8 py-7">
              <div className="mb-8 flex items-center justify-between text-[46px] font-medium tracking-[-1.38px] leading-none text-neutral-800">
                <p>Free shipping over €39</p>
                <p>€39.00 left</p>
              </div>
              <div className="h-1.5 w-full rounded-full bg-[#e4dede]" />
            </div>
          </div>

          <div className="flex flex-1 flex-col justify-between overflow-y-auto">
            <div className="px-8 pt-16 text-center">
              <h3 className="text-[84px] font-medium tracking-[-2.52px] leading-[1.03] text-[#202129]">
                Your cart is empty
              </h3>
              <p className="mt-10 text-[62px] font-medium tracking-[-1.24px] leading-none text-neutral-500">
                Need help choosing?
              </p>
              <a
                href="https://www.loopearplugs.com/pages/quiz"
                className="mx-auto mt-12 inline-flex min-h-24 min-w-[520px] items-center justify-center rounded-full bg-[#202129] px-12 text-[62px] font-medium tracking-[-1.24px] leading-none text-white"
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
