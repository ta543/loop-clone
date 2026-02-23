import { UpsellProduct } from "@/components/CartDialog/components/UpsellProduct";

export const CartUpsell = () => {
  return (
    <div className="bg-zinc-100 box-border caret-transparent">
      <div className="items-center box-border caret-transparent flex justify-between pt-6 pb-4 px-4">
        <h3 className="text-neutral-900 box-border caret-transparent tracking-[normal] leading-5 break-words">
          You may also like
        </h3>
        <div className="box-border caret-transparent gap-x-2 flex gap-y-2">
          <button
            type="button"
            aria-label="Scroll to previous items"
            className="text-neutral-800 items-center bg-transparent caret-transparent hidden h-6 justify-center opacity-30 text-center w-6 z-auto p-0 left-auto top-auto md:left-[-15px] md:z-10 md:top-2/4"
          >
            <img
              src="https://c.animaapp.com/mlzh4mmjaX4oGl/assets/icon-46.svg"
              alt="Icon"
              className="box-border caret-transparent h-3.5 w-2"
            />
          </button>
          <button
            type="button"
            aria-label="Scroll to next items"
            className="text-neutral-800 items-center bg-transparent caret-transparent hidden h-6 justify-center opacity-30 text-center w-6 z-auto p-0 right-auto top-auto md:right-[-15px] md:z-10 md:top-2/4"
          >
            <img
              src="https://c.animaapp.com/mlzh4mmjaX4oGl/assets/icon-46.svg"
              alt="Icon"
              className="box-border caret-transparent h-3.5 w-2"
            />
          </button>
        </div>
      </div>
      <div className="relative box-border caret-transparent">
        <ul
          role="list"
          aria-label="You may also like"
          className="box-border caret-transparent gap-x-2 grid auto-cols-[calc(86.9565%_-_1.04348px)] grid-flow-col list-none overflow-x-auto overflow-y-hidden overscroll-x-contain gap-y-2 px-4 scroll-p-4 md:auto-cols-[calc(68.9655%_-_2.48276px)]"
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
          <UpsellProduct
            productName="Loop Quiet 2"
            productUrl="https://www.loopearplugs.com/products/quiet"
            mainImageUrl="https://www.loopearplugs.com/cdn/shop/files/PDP_QUIET_WHITE_01-805740.png?v=1725976815&width=180"
            mainImageAlt="White"
            selectedColorName="White"
            colorOptions={[
              {
                name: "White",
                imageUrl:
                  "https://www.loopearplugs.com/cdn/shop/files/White.png?v=1728381585&width=100",
                bgColorClass: "bg-gray-200",
                isSelected: true,
              },
              {
                name: "Violet",
                imageUrl:
                  "https://www.loopearplugs.com/cdn/shop/files/Violet.jpg?v=1696760713&width=100",
                bgColorClass: "bg-slate-300",
                isSelected: false,
              },
              {
                name: "Black",
                imageUrl:
                  "https://www.loopearplugs.com/cdn/shop/files/midnight-black_256x256_2cdb6157-2a68-486f-8d2f-2e16f6d92f76.png?v=1665753138&width=100",
                bgColorClass: "bg-black",
                isSelected: false,
              },
              {
                name: "Mint",
                imageUrl:
                  "https://www.loopearplugs.com/cdn/shop/files/Mint.jpg?v=1696761178&width=100",
                bgColorClass: "bg-slate-300",
                isSelected: false,
              },
            ]}
            price="€19.95"
            addToCartAriaLabel="Add to cart: Loop Quiet 2 - White"
          />
          <UpsellProduct
            productName="Loop Engage 2"
            productUrl="https://www.loopearplugs.com/products/engage"
            mainImageUrl="https://www.loopearplugs.com/cdn/shop/files/PDP_ENGAGE2_CLEAR_01-917223.png?v=1715087473&width=180"
            mainImageAlt="Clear"
            selectedColorName="Clear"
            colorOptions={[
              {
                name: "Clear",
                imageUrl:
                  "https://www.loopearplugs.com/cdn/shop/files/Clear.jpg?v=1696767432&width=100",
                bgColorClass: "bg-gray-200",
                isSelected: true,
              },
              {
                name: "Dusk",
                imageUrl:
                  "https://www.loopearplugs.com/cdn/shop/files/Dusk.jpg?v=1696767483&width=100",
                bgColorClass: "bg-black",
                isSelected: false,
              },
              {
                name: "Green",
                imageUrl:
                  "https://www.loopearplugs.com/cdn/shop/files/Green.jpg?v=1696767525&width=100",
                bgColorClass: "bg-green-300",
                isSelected: false,
              },
              {
                name: "Rose",
                imageUrl:
                  "https://www.loopearplugs.com/cdn/shop/files/Rose.jpg?v=1696767565&width=100",
                bgColorClass: "bg-red-300",
                isSelected: false,
              },
            ]}
            price="€29.95"
            addToCartAriaLabel="Add to cart: Loop Engage 2 - Clear"
          />
          <UpsellProduct
            productName="Loop Engage 2 Plus"
            productUrl="https://www.loopearplugs.com/products/engage-plus"
            mainImageUrl="https://www.loopearplugs.com/cdn/shop/files/PDP_ENGAGE2PLUS_CLEAR_01-244449.png?v=1715087473&width=180"
            mainImageAlt="Clear"
            selectedColorName="Clear"
            colorOptions={[
              {
                name: "Clear",
                imageUrl:
                  "https://www.loopearplugs.com/cdn/shop/files/Clear.jpg?v=1696767432&width=100",
                bgColorClass: "bg-gray-200",
                isSelected: true,
              },
              {
                name: "Dusk",
                imageUrl:
                  "https://www.loopearplugs.com/cdn/shop/files/Dusk.jpg?v=1696767483&width=100",
                bgColorClass: "bg-black",
                isSelected: false,
              },
              {
                name: "Green",
                imageUrl:
                  "https://www.loopearplugs.com/cdn/shop/files/Green.jpg?v=1696767525&width=100",
                bgColorClass: "bg-green-300",
                isSelected: false,
              },
              {
                name: "Rose",
                imageUrl:
                  "https://www.loopearplugs.com/cdn/shop/files/Rose.jpg?v=1696767565&width=100",
                bgColorClass: "bg-red-300",
                isSelected: false,
              },
            ]}
            price="€39.95"
            addToCartAriaLabel="Add to cart: Loop Engage 2 Plus - Clear"
          />
          <UpsellProduct
            productName="Loop Experience 2"
            productUrl="https://www.loopearplugs.com/products/experience"
            mainImageUrl="https://www.loopearplugs.com/cdn/shop/files/PDP_EXPERIENCE2_SILVER_01.png?v=1770983744&width=180"
            mainImageAlt="Silver"
            selectedColorName="Silver"
            colorOptions={[
              {
                name: "Silver",
                imageUrl:
                  "https://www.loopearplugs.com/cdn/shop/files/Silver_f8a06811-ff75-477f-997e-a68b849c918a.jpg?v=1696778709&width=100",
                bgColorClass: "bg-stone-300",
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
                name: "Rose Gold",
                imageUrl:
                  "https://www.loopearplugs.com/cdn/shop/files/rose-gold.png?v=1700741481&width=100",
                bgColorClass: "bg-red-400",
                isSelected: false,
              },
            ]}
            price="€29.95"
            addToCartAriaLabel="Add to cart: Loop Experience 2 - Silver"
          />
          <UpsellProduct
            productName="Loop Experience 2 Plus"
            productUrl="https://www.loopearplugs.com/products/experience-plus"
            mainImageUrl="https://www.loopearplugs.com/cdn/shop/files/PDP_EXPERIENCE2PLUS_GOLD_01-374433.png?v=1715750475&width=180"
            mainImageAlt="Gold"
            selectedColorName="Gold"
            colorOptions={[
              {
                name: "Gold",
                imageUrl:
                  "https://www.loopearplugs.com/cdn/shop/files/Gold_e3c3a8be-9324-4c6c-9658-5f5c6ad09100.jpg?v=1696778661&width=100",
                bgColorClass: "bg-yellow-200",
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
                name: "Silver",
                imageUrl:
                  "https://www.loopearplugs.com/cdn/shop/files/Silver_f8a06811-ff75-477f-997e-a68b849c918a.jpg?v=1696778709&width=100",
                bgColorClass: "bg-stone-300",
                isSelected: false,
              },
              {
                name: "Rose Gold",
                imageUrl:
                  "https://www.loopearplugs.com/cdn/shop/files/rose-gold.png?v=1700741481&width=100",
                bgColorClass: "bg-red-400",
                isSelected: false,
              },
            ]}
            price="€39.95"
            addToCartAriaLabel="Add to cart: Loop Experience 2 Plus - Gold"
          />
          <UpsellProduct
            productName="Loop Engage Kids 2"
            productUrl="https://www.loopearplugs.com/products/engage-kids"
            mainImageUrl="https://www.loopearplugs.com/cdn/shop/files/PDP_ENGAGE_KIDS_2_BERRY_BLUE_01.png?v=1759828353&width=180"
            mainImageAlt="Berry Blue"
            selectedColorName="Berry Blue"
            colorOptions={[
              {
                name: "Berry Blue",
                imageUrl:
                  "https://www.loopearplugs.com/cdn/shop/files/Berry_Blue.jpg?v=1692812585&width=100",
                bgColorClass: "bg-blue-300",
                isSelected: true,
              },
              {
                name: "Watermelon Red",
                imageUrl:
                  "https://www.loopearplugs.com/cdn/shop/files/Watermelon_Red.jpg?v=1692812727&width=100",
                bgColorClass: "bg-rose-300",
                isSelected: false,
              },
              {
                name: "Ocean Orange",
                imageUrl:
                  "https://www.loopearplugs.com/cdn/shop/files/Ocean_Orange.jpg?v=1692812740&width=100",
                bgColorClass: "bg-orange-400",
                isSelected: false,
              },
            ]}
            price="€29.95"
            addToCartAriaLabel="Add to cart: Loop Engage Kids 2 - Berry Blue"
          />
        </ul>
        <div className="items-center box-border caret-transparent gap-x-[5px] hidden gap-y-[5px] py-5">
          <div className="box-border caret-transparent basis-[0%] grow px-4">
            <span className="relative bg-neutral-800/20 box-border caret-transparent block h-0.5 w-full overflow-hidden rounded-bl rounded-br rounded-tl rounded-tr">
              <span className="absolute bg-neutral-800 box-border caret-transparent block h-full w-full rounded-bl rounded-br rounded-tl rounded-tr left-[0%] top-0"></span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
