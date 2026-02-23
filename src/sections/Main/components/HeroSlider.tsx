import { useEffect, useMemo, useState } from "react";

import { HeroSlide } from "@/sections/Main/components/HeroSlide";

const SLIDE_INTERVAL_MS = 5000;
const SLIDE_OFFSET_PX = 1392;

export const HeroSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [progressMs, setProgressMs] = useState(0);

  const slidesCount = 2;

  useEffect(() => {
    if (!isAutoPlay) return;

    const intervalId = window.setInterval(() => {
      setProgressMs((previousProgress) => {
        const nextProgress = previousProgress + 100;

        if (nextProgress >= SLIDE_INTERVAL_MS) {
          setActiveSlide((previousSlide) => (previousSlide + 1) % slidesCount);
          return 0;
        }

        return nextProgress;
      });
    }, 100);

    return () => window.clearInterval(intervalId);
  }, [isAutoPlay, slidesCount]);

  const trackTransform = useMemo(
    () => `translateX(-${activeSlide * SLIDE_OFFSET_PX}px)`,
    [activeSlide],
  );


  const goToSlide = (slideIndex: number) => {
    setActiveSlide(slideIndex);
    setProgressMs(0);
  };

  return (
    <div className="box-border caret-transparent w-full overflow-hidden mb-6 md:mb-12">
      <div className="box-border caret-transparent w-full mx-auto px-4 md:px-10">
        <div
          aria-label="Featured content"
          role="region"
          className="relative box-border caret-transparent block list-none z-[1] overflow-hidden mx-auto md:overflow-visible"
        >
          <div
            className="relative caret-transparent flex h-full w-full z-[1] transition-transform duration-700 ease-in-out"
            style={{ transform: trackTransform }}
          >
            <HeroSlide
              ariaLabel="1 / 2"
              variant="video"
              hasVideo={true}
              videoSources={[
                {
                  src: "https://www.loopearplugs.com/cdn/shop/videos/c/vp/518eff125df743da8f853fa4fc3ab38a/518eff125df743da8f853fa4fc3ab38a.m3u8?v=0",
                  type: "video/mp4",
                },
                {
                  src: "https://www.loopearplugs.com/cdn/shop/videos/c/vp/518eff125df743da8f853fa4fc3ab38a/518eff125df743da8f853fa4fc3ab38a.HD-720p-4.5Mbps-64532748.mp4?v=0",
                  type: "video/webm",
                },
              ]}
              mobileVideoSources={[
                {
                  src: "https://www.loopearplugs.com/cdn/shop/videos/c/vp/6b72875db9014d3fbffad771f957c156/6b72875db9014d3fbffad771f957c156.m3u8?v=0",
                  type: "video/mp4",
                },
                {
                  src: "https://www.loopearplugs.com/cdn/shop/videos/c/vp/6b72875db9014d3fbffad771f957c156/6b72875db9014d3fbffad771f957c156.HD-1080p-7.2Mbps-64532993.mp4?v=0",
                  type: "video/webm",
                },
              ]}
              starRating={5}
              customerCount="Loved by 14M customers"
              heading="Your life your volume"
              description="Lean into everything you love that's loud."
              ctaText="Find my match (1 min quiz)"
              ctaUrl="https://www.loopearplugs.com/pages/product-quiz"
              secondaryCtaText="Discover all earplugs"
              secondaryCtaUrl="https://www.loopearplugs.com/collections/all"
              showNavigationButtons={true}
            />
            <HeroSlide
              ariaLabel="2 / 2"
              variant=""
              hasVideo={false}
              hasImage={true}
              imageUrl="https://www.loopearplugs.com/cdn/shop/files/3D_Scenes_-_Extended_df333c86-7a07-4d34-887c-fb745946d788.png?v=1760426477&width=2720"
              imageAlt=""
              productImageUrl="https://c.animaapp.com/mlzh4mmjaX4oGl/assets/1.webp"
              productImageAlt="#color_blue"
              starRating={5}
              customerCount="Loved by 11 million customers"
              heading="Wake up well rested"
              description="Sleep well with Loop Dream™ — comfy earplugs for your best rest."
              ctaText="Shop Loop Dream"
              ctaUrl="https://www.loopearplugs.com/products/dream"
              showNavigationButtons={false}
            />
          </div>

          <button
            aria-label="Previous slide"
            onClick={() => goToSlide((activeSlide + slidesCount - 1) % slidesCount)}
            className="hidden md:absolute md:appearance-none md:text-neutral-800 md:items-center md:bg-white md:shadow-[rgba(0,0,0,0.05)_0px_0px_10px_0px] md:flex md:h-16 md:justify-center md:translate-y-[-50%] md:w-16 md:z-[4] md:rounded-[9999.01px] md:-left-8 md:top-2/4"
          >
            <span className="text-[26px] leading-none">←</span>
          </button>
          <button
            aria-label="Next slide"
            onClick={() => goToSlide((activeSlide + 1) % slidesCount)}
            className="hidden md:absolute md:appearance-none md:text-neutral-800 md:items-center md:bg-white md:shadow-[rgba(0,0,0,0.05)_0px_0px_10px_0px] md:flex md:h-16 md:justify-center md:translate-y-[-50%] md:w-16 md:z-[4] md:rounded-[9999.01px] md:-right-8 md:top-2/4"
          >
            <span className="text-[26px] leading-none">→</span>
          </button>

          <div className="items-center box-border caret-transparent flex justify-center gap-4 pt-[17px] md:pt-[22px]">
            <button
              onClick={() => goToSlide(0)}
              aria-label="Go to slide 1"
              className={`font-avantt text-[53px] leading-none md:text-[21px] ${activeSlide === 0 ? "text-neutral-900" : "text-neutral-500"}`}
            >
              01
            </button>
            {activeSlide === 0 && <div className="h-0.5 w-40 bg-neutral-400"></div>}
            <button
              onClick={() => goToSlide(1)}
              aria-label="Go to slide 2"
              className={`font-avantt text-[53px] leading-none md:text-[21px] ${activeSlide === 1 ? "text-neutral-900" : "text-neutral-500"}`}
            >
              02
            </button>
            {activeSlide === 1 && <div className="h-0.5 w-40 bg-neutral-400"></div>}
            <button
              aria-label={isAutoPlay ? "Stop slide rotation" : "Start slide rotation"}
              onClick={() => setIsAutoPlay((previousValue) => !previousValue)}
              className="items-center bg-neutral-400 text-white caret-transparent flex h-12 justify-center text-center w-12 p-0 rounded-[9999.01px] md:h-8 md:w-8"
            >
              <span className="text-[18px] leading-none md:text-xs">{isAutoPlay ? "❚❚" : "▶"}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
