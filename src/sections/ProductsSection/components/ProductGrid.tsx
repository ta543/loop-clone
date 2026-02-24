import { useEffect, useRef, useState } from "react";
import { ProductCard } from "@/components/ProductCard";

export const ProductGrid = () => {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const updateScrollState = () => {
    if (!carouselRef.current) {
      return;
    }

    const { scrollLeft, clientWidth, scrollWidth } = carouselRef.current;

    setCanScrollPrev(scrollLeft > 4);
    setCanScrollNext(scrollLeft + clientWidth < scrollWidth - 4);
  };

  useEffect(() => {
    updateScrollState();

    const handleResize = () => updateScrollState();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const scrollCarousel = (direction: "prev" | "next") => {
    if (!carouselRef.current) {
      return;
    }

    const firstCard = carouselRef.current.querySelector("[role='group']");
    const cardWidth = firstCard ? (firstCard as HTMLElement).offsetWidth : 0;
    const gap = 16;
    const amount = cardWidth + gap;

    carouselRef.current.scrollBy({
      left: direction === "next" ? amount : -amount,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative box-border caret-transparent block list-none w-[calc(100%_+_32px)] z-[1] overflow-hidden -ml-4 mr-auto md:w-full md:ml-0">
      <div
        ref={carouselRef}
        onScroll={updateScrollState}
        className="relative box-border caret-transparent gap-x-4 flex h-full gap-y-4 w-full z-[1] overflow-x-auto overflow-y-hidden px-4 scroll-pl-4 scroll-pr-[auto] scroll-py-[auto] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:px-0 md:scroll-p-0"
      >
        <ProductCard
          ariaLabel="1 / 7"
          productUrl="https://www.loopearplugs.com/products/switch?variant=49728323584335"
          productImageUrl="https://www.loopearplugs.com/cdn/shop/files/PDP_SWITCH_EMERALD_1-371454.png?v=1729670651&width=1066"
          productImageAlt="#color_emerald"
          productImageClassName="aspect-[auto_2160_/_2160]"
          hasAwardBadge={true}
          awardBadgeUrl="https://www.loopearplugs.com/cdn/shop/files/PD2025_RD_t.png?v=1753878246&width=416"
          awardBadgeAlt="Red Dot Award logo with 'winner 2025'"
          categoryLabel="Noise sensitivity "
          selectedColor="Emerald"
          colorOptions={[
            {
              colorName: "Emerald",
              backgroundImageUrl:
                "https://www.loopearplugs.com/cdn/shop/files/Screenshot_2024-10-18_at_15.59.32.png?v=1729260028&width=50",
              isSelected: true,
            },
            {
              colorName: "Midnight Black",
              backgroundImageUrl:
                "https://www.loopearplugs.com/cdn/shop/files/midnight-black_256x256_2cdb6157-2a68-486f-8d2f-2e16f6d92f76.png?v=1665753138&width=50",
              isSelected: false,
            },
            {
              colorName: "Gold",
              backgroundImageUrl:
                "https://www.loopearplugs.com/cdn/shop/files/Gold_e3c3a8be-9324-4c6c-9658-5f5c6ad09100.jpg?v=1696778661&width=50",
              isSelected: false,
            },
            {
              colorName: "Silver",
              backgroundImageUrl:
                "https://www.loopearplugs.com/cdn/shop/files/Silver_f8a06811-ff75-477f-997e-a68b849c918a.jpg?v=1696778709&width=50",
              isSelected: false,
            },
          ]}
          productTitle="Loop Switch 2"
          rating={4.3}
          reviewCount={6251}
          price="€54.95"
          hasDiscount={false}
          description="Adjustable noise relief with three volume modes for total control in any setting"
        />
        <ProductCard
          ariaLabel="2 / 7"
          productUrl="https://www.loopearplugs.com/products/dream?variant=49607655424335"
          productImageUrl="https://www.loopearplugs.com/cdn/shop/files/PDP_DREAM_BLACK_1-917582.png?v=1756884316&width=1066"
          productImageAlt="#color_black"
          productImageClassName="aspect-[auto_1080_/_1080]"
          hasAwardBadge={true}
          awardBadgeUrl="https://www.loopearplugs.com/cdn/shop/files/SleepTech2024Winner.png?height=416&v=1730816235"
          awardBadgeAlt="Loop dream Winner of SleepTech 2024 Award"
          categoryLabel="Sleep"
          selectedColor="Black"
          colorOptions={[
            {
              colorName: "Black",
              backgroundImageUrl:
                "https://www.loopearplugs.com/cdn/shop/files/midnight-black_256x256_2cdb6157-2a68-486f-8d2f-2e16f6d92f76.png?v=1665753138&width=50",
              isSelected: true,
            },
            {
              colorName: "Blue",
              backgroundImageUrl:
                "https://www.loopearplugs.com/cdn/shop/files/Blue.png?v=1696765944&width=50",
              isSelected: false,
            },
            {
              colorName: "Screenshot 1",
              backgroundImageUrl:
                "https://www.loopearplugs.com/cdn/shop/files/Screenshot_2024-10-07_at_13.33.01.png?v=1728300810&width=50",
              isSelected: false,
            },
            {
              colorName: "Screenshot 2",
              backgroundImageUrl:
                "https://www.loopearplugs.com/cdn/shop/files/Screenshot_2024-10-07_at_13.34.05.png?v=1728300861&width=50",
              isSelected: false,
            },
          ]}
          productTitle="Loop Dream"
          rating={3.7}
          reviewCount={11665}
          price="€44.95"
          hasDiscount={false}
          description="Unlock better sleep and wake up refreshed with our ultra-comfy sleep earplugs."
        />
        <ProductCard
          ariaLabel="3 / 7"
          productUrl="https://www.loopearplugs.com/products/experience?variant=48379533558095"
          productImageUrl="https://www.loopearplugs.com/cdn/shop/files/PDP_EXPERIENCE2_SILVER_01.png?v=1770983744&width=1066"
          productImageAlt="#color_silver"
          productImageClassName="aspect-[auto_2160_/_2160]"
          hasAwardBadge={false}
          categoryLabel="Events"
          selectedColor="Silver"
          colorOptions={[
            {
              colorName: "Silver",
              backgroundImageUrl:
                "https://www.loopearplugs.com/cdn/shop/files/Silver_f8a06811-ff75-477f-997e-a68b849c918a.jpg?v=1696778709&width=50",
              isSelected: true,
            },
            {
              colorName: "Midnight Black",
              backgroundImageUrl:
                "https://www.loopearplugs.com/cdn/shop/files/midnight-black_256x256_2cdb6157-2a68-486f-8d2f-2e16f6d92f76.png?v=1665753138&width=50",
              isSelected: false,
            },
            {
              colorName: "Gold",
              backgroundImageUrl:
                "https://www.loopearplugs.com/cdn/shop/files/Gold_e3c3a8be-9324-4c6c-9658-5f5c6ad09100.jpg?v=1696778661&width=50",
              isSelected: false,
            },
            {
              colorName: "Rose Gold",
              backgroundImageUrl:
                "https://www.loopearplugs.com/cdn/shop/files/rose-gold.png?v=1700741481&width=50",
              isSelected: false,
            },
          ]}
          productTitle="Loop Experience 2"
          rating={4.6}
          reviewCount={7500}
          price="€29.95"
          hasDiscount={false}
          description="Best for concerts and festivals, live entertainment and sporting events"
        />
        <ProductCard
          ariaLabel="4 / 7"
          productUrl="https://www.loopearplugs.com/products/quiet?variant=48262905528655"
          productImageUrl="https://www.loopearplugs.com/cdn/shop/files/PDP_QUIET_WHITE_01-805740.png?v=1725976815&width=1066"
          productImageAlt="#color_white"
          productImageClassName="aspect-[auto_2160_/_2160]"
          hasAwardBadge={false}
          categoryLabel="Focus"
          selectedColor="White"
          colorOptions={[
            {
              colorName: "White",
              backgroundImageUrl:
                "https://www.loopearplugs.com/cdn/shop/files/White.png?v=1728381585&width=50",
              isSelected: true,
            },
            {
              colorName: "Violet",
              backgroundImageUrl:
                "https://www.loopearplugs.com/cdn/shop/files/Violet.jpg?v=1696760713&width=50",
              isSelected: false,
            },
            {
              colorName: "Midnight Black",
              backgroundImageUrl:
                "https://www.loopearplugs.com/cdn/shop/files/midnight-black_256x256_2cdb6157-2a68-486f-8d2f-2e16f6d92f76.png?v=1665753138&width=50",
              isSelected: false,
            },
            {
              colorName: "Mint",
              backgroundImageUrl:
                "https://www.loopearplugs.com/cdn/shop/files/Mint.jpg?v=1696761178&width=50",
              isSelected: false,
            },
          ]}
          productTitle="Loop Quiet 2"
          rating={4.2}
          reviewCount={12691}
          price="€19.95"
          hasDiscount={false}
          description="Best for deep focus, travel, commutes and sleep"
        />
        <ProductCard
          ariaLabel="5 / 7"
          productUrl="https://www.loopearplugs.com/products/engage?variant=48379456749903"
          productImageUrl="https://www.loopearplugs.com/cdn/shop/files/PDP_ENGAGE2_CLEAR_01-917223.png?v=1715087473&width=1066"
          productImageAlt="#color_clear"
          productImageClassName="aspect-[auto_2160_/_2160]"
          hasAwardBadge={true}
          awardBadgeUrl="https://www.loopearplugs.com/cdn/shop/files/PD2023_RD-removebg-preview.png?v=1751871210&width=416"
          awardBadgeAlt="Red Dot Award  Winner 2023"
          categoryLabel="Parenting"
          selectedColor="Clear"
          colorOptions={[
            {
              colorName: "Clear",
              backgroundImageUrl:
                "https://www.loopearplugs.com/cdn/shop/files/Clear.jpg?v=1696767432&width=50",
              isSelected: true,
            },
            {
              colorName: "Dusk",
              backgroundImageUrl:
                "https://www.loopearplugs.com/cdn/shop/files/Dusk.jpg?v=1696767483&width=50",
              isSelected: false,
            },
            {
              colorName: "Green",
              backgroundImageUrl:
                "https://www.loopearplugs.com/cdn/shop/files/Green.jpg?v=1696767525&width=50",
              isSelected: false,
            },
            {
              colorName: "Rose",
              backgroundImageUrl:
                "https://www.loopearplugs.com/cdn/shop/files/Rose.jpg?v=1696767565&width=50",
              isSelected: false,
            },
          ]}
          productTitle="Loop Engage 2"
          rating={4.5}
          reviewCount={4959}
          price="€29.95"
          hasDiscount={false}
          description="Best for conversations, social gatherings, parenting and noise sensitivity"
        />
        <ProductCard
          ariaLabel="6 / 7"
          productUrl="https://www.loopearplugs.com/products/experience-plus?variant=48379544174927"
          productImageUrl="https://www.loopearplugs.com/cdn/shop/files/PDP_EXPERIENCE2PLUS_GOLD_01-374433.png?v=1715750475&width=1066"
          productImageAlt="#color_gold"
          productImageClassName="aspect-[auto_2160_/_2160]"
          hasAwardBadge={false}
          categoryLabel="Events"
          selectedColor="Gold"
          colorOptions={[
            {
              colorName: "Gold",
              backgroundImageUrl:
                "https://www.loopearplugs.com/cdn/shop/files/Gold_e3c3a8be-9324-4c6c-9658-5f5c6ad09100.jpg?v=1696778661&width=50",
              isSelected: true,
            },
            {
              colorName: "Midnight Black",
              backgroundImageUrl:
                "https://www.loopearplugs.com/cdn/shop/files/midnight-black_256x256_2cdb6157-2a68-486f-8d2f-2e16f6d92f76.png?v=1665753138&width=50",
              isSelected: false,
            },
            {
              colorName: "Silver",
              backgroundImageUrl:
                "https://www.loopearplugs.com/cdn/shop/files/Silver_f8a06811-ff75-477f-997e-a68b849c918a.jpg?v=1696778709&width=50",
              isSelected: false,
            },
            {
              colorName: "Rose Gold",
              backgroundImageUrl:
                "https://www.loopearplugs.com/cdn/shop/files/rose-gold.png?v=1700741481&width=50",
              isSelected: false,
            },
          ]}
          productTitle="Loop Experience 2 Plus"
          rating={4.6}
          reviewCount={3350}
          price="€39.95"
          hasDiscount={false}
          description="An upgrade to Experience 2, with extra noise reduction on demand"
        />
        <ProductCard
          ariaLabel="7 / 7"
          productUrl="https://www.loopearplugs.com/products/engage-plus?variant=48379513635151"
          productImageUrl="https://www.loopearplugs.com/cdn/shop/files/PDP_ENGAGE2PLUS_CLEAR_01-244449.png?v=1715087473&width=1066"
          productImageAlt="#color_clear"
          productImageClassName="aspect-[auto_2160_/_2160]"
          hasAwardBadge={true}
          awardBadgeUrl="https://www.loopearplugs.com/cdn/shop/files/PD2023_RD-removebg-preview.png?v=1751871210&width=416"
          awardBadgeAlt="Red Dot Award  Winner 2023"
          categoryLabel="Parenting"
          selectedColor="Clear"
          colorOptions={[
            {
              colorName: "Clear",
              backgroundImageUrl:
                "https://www.loopearplugs.com/cdn/shop/files/Clear.jpg?v=1696767432&width=50",
              isSelected: true,
            },
            {
              colorName: "Dusk",
              backgroundImageUrl:
                "https://www.loopearplugs.com/cdn/shop/files/Dusk.jpg?v=1696767483&width=50",
              isSelected: false,
            },
            {
              colorName: "Green",
              backgroundImageUrl:
                "https://www.loopearplugs.com/cdn/shop/files/Green.jpg?v=1696767525&width=50",
              isSelected: false,
            },
            {
              colorName: "Rose",
              backgroundImageUrl:
                "https://www.loopearplugs.com/cdn/shop/files/Rose.jpg?v=1696767565&width=50",
              isSelected: false,
            },
          ]}
          productTitle="Loop Engage 2 Plus"
          rating={4.4}
          reviewCount={3938}
          price="€39.95"
          hasDiscount={false}
          description="An upgrade to Engage 2, with extra noise reduction on demand"
        />
      </div>
      <button
        type="button"
        aria-label="Previous slide"
        onClick={() => scrollCarousel("prev")}
        className={`absolute text-neutral-800 items-center bg-white shadow-[rgba(0,0,0,0.05)_0px_0px_10px_0px] flex h-12 justify-center -translate-y-1/2 w-12 z-[4] rounded-[9999.01px] left-2 top-2/4 md:left-[-24px] ${canScrollPrev ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      >
        <img
          src="https://c.animaapp.com/mlzh4mmjaX4oGl/assets/icon-14.svg"
          alt="Icon"
          className="h-4 w-[18px] rotate-180"
        />
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={() => scrollCarousel("next")}
        className={`absolute text-neutral-800 items-center bg-white shadow-[rgba(0,0,0,0.05)_0px_0px_10px_0px] flex h-12 justify-center -translate-y-1/2 w-12 z-[4] rounded-[9999.01px] right-2 top-2/4 md:right-[-24px] ${canScrollNext ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      >
        <img
          src="https://c.animaapp.com/mlzh4mmjaX4oGl/assets/icon-14.svg"
          alt="Icon"
          className="h-4 w-[18px]"
        />
      </button>

      <div className="items-center box-border caret-transparent gap-x-2 flex justify-center gap-y-2 pt-[17px] md:gap-x-4 md:gap-y-4">
        <div className="relative items-center box-border caret-transparent gap-x-0 flex h-[41px] justify-center gap-y-0 w-max z-10">
          <span
            role="button"
            aria-label="Go to slide 1"
            className="relative items-center box-border caret-transparent flex h-6 justify-center w-6 before:accent-auto before:bg-neutral-800 before:box-border before:caret-transparent before:text-neutral-900/80 before:block before:text-xl before:not-italic before:normal-nums before:font-medium before:h-2.5 before:tracking-[-0.6px] before:leading-[30px] before:list-outside before:list-none before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:w-2.5 before:rounded-[50%] before:border-separate before:font-avantt"
          ></span>
          <span
            role="button"
            aria-label="Go to slide 2"
            className="relative items-center box-border caret-transparent flex h-6 justify-center w-6 before:accent-auto before:bg-neutral-800 before:box-border before:caret-transparent before:text-neutral-900/80 before:block before:text-xl before:not-italic before:normal-nums before:font-medium before:h-2.5 before:tracking-[-0.6px] before:leading-[30px] before:list-outside before:list-none before:opacity-50 before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:w-2.5 before:rounded-[50%] before:border-separate before:font-avantt"
          ></span>
          <span
            role="button"
            aria-label="Go to slide 3"
            className="relative items-center box-border caret-transparent flex h-6 justify-center w-6 before:accent-auto before:bg-neutral-800 before:box-border before:caret-transparent before:text-neutral-900/80 before:block before:text-xl before:not-italic before:normal-nums before:font-medium before:h-2.5 before:tracking-[-0.6px] before:leading-[30px] before:list-outside before:list-none before:opacity-50 before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:w-2.5 before:rounded-[50%] before:border-separate before:font-avantt"
          ></span>
          <span
            role="button"
            aria-label="Go to slide 4"
            className="relative items-center box-border caret-transparent flex h-6 justify-center w-6 before:accent-auto before:bg-neutral-800 before:box-border before:caret-transparent before:text-neutral-900/80 before:block before:text-xl before:not-italic before:normal-nums before:font-medium before:h-2.5 before:tracking-[-0.6px] before:leading-[30px] before:list-outside before:list-none before:opacity-50 before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:w-2.5 before:rounded-[50%] before:border-separate before:font-avantt"
          ></span>
        </div>
      </div>
    </div>
  );
};
