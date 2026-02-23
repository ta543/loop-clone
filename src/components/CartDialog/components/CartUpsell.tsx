import { ChevronLeft, ChevronRight } from "lucide-react";
import { UpsellProduct } from "@/components/CartDialog/components/UpsellProduct";

export const CartUpsell = () => {
  return (
    <div className="bg-[#ececec]">
      <div className="flex items-center justify-between px-4 pb-4 pt-5">
        <h3 className="text-[16px] font-medium tracking-[-0.32px] text-neutral-900">
          You may also like
        </h3>
        <div className="flex items-center gap-2 text-neutral-800">
          <button
            type="button"
            aria-label="Scroll to previous items"
            className="inline-flex h-6 w-6 items-center justify-center rounded-full text-neutral-400"
          >
            <ChevronLeft className="h-5 w-5 stroke-[1.8]" />
          </button>
          <button
            type="button"
            aria-label="Scroll to next items"
            className="inline-flex h-6 w-6 items-center justify-center rounded-full"
          >
            <ChevronRight className="h-5 w-5 stroke-[1.8]" />
          </button>
        </div>
      </div>
      <div className="px-4">
        <ul
          role="list"
          aria-label="You may also like"
          className="grid auto-cols-[calc(86%-4px)] grid-flow-col gap-2 overflow-x-auto overflow-y-hidden overscroll-x-contain pb-5 scroll-p-4"
        >
          <UpsellProduct
            productName="Loop Switch 2"
            productUrl="https://www.loopearplugs.com/products/switch"
            mainImageUrl="https://www.loopearplugs.com/cdn/shop/files/PDP_SWITCH_EMERALD_1-371454.png?v=1729670651&width=180"
            mainImageAlt="Emerald"
            selectedColorName="Emerald"
            colorOptions={[
              {
                name: "Emerald",
                imageUrl:
                  "https://www.loopearplugs.com/cdn/shop/files/Screenshot_2024-10-18_at_15.59.32.png?v=1729260028&width=100",
                bgColorClass: "bg-slate-600",
                isSelected: true,
              },
              {
                name: "Midnight Black",
                imageUrl:
                  "https://www.loopearplugs.com/cdn/shop/files/midnight-black_256x256_2cdb6157-2a68-486f-8d2f-2e16f6d92f76.png?v=1665753138&width=100",
                bgColorClass: "bg-black",
                isSelected: false,
              },
              {
                name: "Gold",
                imageUrl:
                  "https://www.loopearplugs.com/cdn/shop/files/Gold_e3c3a8be-9324-4c6c-9658-5f5c6ad09100.jpg?v=1696778661&width=100",
                bgColorClass: "bg-yellow-200",
                isSelected: false,
              },
              {
                name: "Silver",
                imageUrl:
                  "https://www.loopearplugs.com/cdn/shop/files/Silver_f8a06811-ff75-477f-997e-a68b849c918a.jpg?v=1696778709&width=100",
                bgColorClass: "bg-stone-300",
                isSelected: false,
              },
            ]}
            price="€54.95"
            addToCartAriaLabel="Add to cart: Loop Switch 2 - Emerald"
          />
          <UpsellProduct
            productName="Loop Dream"
            productUrl="https://www.loopearplugs.com/products/dream"
            mainImageUrl="https://www.loopearplugs.com/cdn/shop/files/PDP_DREAM_BLACK_1-917582.png?v=1756884316&width=180"
            mainImageAlt="Black"
            selectedColorName="Black"
            colorOptions={[
              {
                name: "Black",
                imageUrl:
                  "https://www.loopearplugs.com/cdn/shop/files/midnight-black_256x256_2cdb6157-2a68-486f-8d2f-2e16f6d92f76.png?v=1665753138&width=100",
                bgColorClass: "bg-black",
                isSelected: true,
              },
              {
                name: "Blue",
                imageUrl:
                  "https://www.loopearplugs.com/cdn/shop/files/Blue.png?v=1696765944&width=100",
                bgColorClass: "bg-slate-400",
                isSelected: false,
              },
              {
                name: "Violet",
                imageUrl:
                  "https://www.loopearplugs.com/cdn/shop/files/Screenshot_2024-10-07_at_13.33.01.png?v=1728300810&width=100",
                bgColorClass: "bg-violet-300",
                isSelected: false,
              },
              {
                name: "Orange",
                imageUrl:
                  "https://www.loopearplugs.com/cdn/shop/files/Screenshot_2024-10-07_at_13.34.05.png?v=1728300861&width=100",
                bgColorClass: "bg-orange-300",
                isSelected: false,
              },
            ]}
            price="€44.95"
            addToCartAriaLabel="Add to cart: Loop Dream - Black"
          />
        </ul>
      </div>
      <div className="px-4 pb-5">
        <div className="h-1 rounded-full bg-[#cecece]">
          <div className="h-full w-[19%] rounded-full bg-[#23242a]" />
        </div>
      </div>
    </div>
  );
};
