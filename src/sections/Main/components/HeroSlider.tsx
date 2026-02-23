import { HeroSlide } from "@/sections/Main/components/HeroSlide";

export const HeroSlider = () => {
  return (
    <div className="box-border caret-transparent w-full overflow-hidden mb-6 md:mb-12">
      <div className="box-border caret-transparent w-full mx-auto px-4 md:px-10">
        <div
          aria-label="Featured content"
          role="region"
          className="relative box-border caret-transparent block list-none z-[1] overflow-hidden mx-auto md:overflow-visible"
        >
          <div className="relative caret-transparent flex h-full translate-x-0 w-full z-[1]">
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
            className="static text-neutral-900/80 [align-items:normal] bg-transparent shadow-none caret-transparent hidden h-auto justify-normal text-center transform-none w-auto z-auto p-0 rounded-none -left-6 top-auto md:absolute md:appearance-none md:text-neutral-800 md:items-center md:bg-white md:shadow-[rgba(0,0,0,0.05)_0px_0px_10px_0px] md:flex md:h-16 md:justify-center md:translate-y-[-50.0%] md:w-16 md:z-[4] md:rounded-[9999.01px] md:-left-8 md:top-2/4"
          >
            <img
              src="https://c.animaapp.com/mlzh4mmjaX4oGl/assets/icon-13.svg"
              alt="Icon"
              className="text-neutral-900/80 box-border caret-transparent h-auto transform-none w-[15px] md:text-neutral-800 md:h-4 md:w-[18px] md:-scale-100"
            />
          </button>
          <div className="items-center box-border caret-transparent gap-x-2 flex justify-center gap-y-2 pt-[17px] md:gap-x-4 md:gap-y-4 md:pt-[22px]">
            <div className="relative items-center box-border caret-transparent gap-x-0 flex h-[41px] justify-center gap-y-0 w-max z-10 md:gap-x-2 md:h-[46px] md:gap-y-2">
              <span
                role="button"
                aria-label="Go to slide 1"
                className="relative text-xl items-center box-border caret-transparent flex h-6 justify-center leading-[30px] opacity-100 w-6 md:text-[21px] md:leading-6 md:opacity-75 before:accent-auto before:bg-neutral-800 before:box-border before:caret-transparent before:text-neutral-900/80 before:block before:text-xl before:not-italic before:normal-nums before:font-medium before:h-2.5 before:tracking-[-0.6px] before:leading-[30px] before:list-outside before:list-none before:min-h-[auto] before:min-w-[auto] before:opacity-50 before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:w-2.5 before:rounded-[50%] before:border-separate before:font-avantt before:md:hidden before:md:text-[21px] before:md:h-5 before:md:leading-6 before:md:min-h-0 before:md:min-w-0 before:md:w-5 after:md:accent-auto after:md:box-border after:md:caret-transparent after:md:text-neutral-900/80 after:md:block after:md:text-[21px] after:md:not-italic after:md:normal-nums after:md:font-medium after:md:tracking-[-0.6px] after:md:leading-6 after:md:list-outside after:md:list-none after:md:min-h-[auto] after:md:min-w-[auto] after:md:pointer-events-auto after:md:text-start after:md:no-underline after:md:indent-[0px] after:md:normal-case after:md:visible after:md:border-separate after:md:font-avantt"
              >
                <div className="absolute text-xl bg-zinc-400 box-border caret-transparent h-0.5 leading-[30px] translate-y-[-50.0%] w-0 z-[1] overflow-hidden left-[calc(100%_+_8px)] top-2/4 md:text-[21px] md:leading-6 after:accent-auto after:bg-neutral-800 after:box-border after:caret-transparent after:text-neutral-900/80 after:block after:blur-[6px] after:text-xl after:not-italic after:normal-nums after:font-medium after:h-2.5 after:tracking-[-0.6px] after:leading-[30px] after:list-outside after:list-none after:pointer-events-auto after:absolute after:text-start after:indent-[0px] after:normal-case after:translate-y-[-5px] after:visible after:w-[0%] after:border-separate after:left-0 after:top-2/4 after:font-avantt after:md:text-[21px] after:md:leading-6"></div>
              </span>
              <span
                role="button"
                aria-label="Go to slide 2"
                className="relative text-neutral-900/80 text-xl items-center box-border caret-transparent flex h-6 justify-center leading-[30px] w-6 mr-0 md:text-neutral-800 md:text-[21px] md:leading-6 md:mr-[88px] after:md:accent-auto after:md:box-border after:md:caret-transparent after:md:text-neutral-800 after:md:block after:md:text-[21px] after:md:not-italic after:md:normal-nums after:md:font-medium after:md:tracking-[-0.6px] after:md:leading-6 after:md:list-outside after:md:list-none after:md:min-h-[auto] after:md:min-w-[auto] after:md:pointer-events-auto after:md:text-start after:md:no-underline after:md:indent-[0px] after:md:normal-case after:md:visible after:md:border-separate after:md:font-avantt"
              >
                <div className="absolute text-neutral-900/80 text-xl bg-zinc-400 box-border caret-transparent h-0.5 leading-[30px] translate-y-[-50.0%] w-0 z-[1] overflow-hidden left-[calc(100%_+_8px)] top-2/4 md:text-neutral-800 md:text-[21px] md:leading-6 md:w-20 after:accent-auto after:bg-neutral-800 after:box-border after:caret-transparent after:text-neutral-900/80 after:block after:blur-[6px] after:text-xl after:not-italic after:normal-nums after:font-medium after:h-2.5 after:tracking-[-0.6px] after:leading-[30px] after:list-outside after:list-none after:pointer-events-auto after:absolute after:text-start after:indent-[0px] after:normal-case after:translate-y-[-5px] after:visible after:w-[0%] after:border-separate after:left-0 after:top-2/4 after:font-avantt after:md:text-neutral-800 after:md:text-[21px] after:md:leading-6"></div>
              </span>
            </div>
            <button
              aria-label="Stop slide rotation"
              className="items-center bg-neutral-800 caret-transparent flex h-6 justify-center opacity-50 text-center w-6 p-0 rounded-[9999.01px]"
            >
              <img
                src="https://c.animaapp.com/mlzh4mmjaX4oGl/assets/icon-2.svg"
                alt="Icon"
                className="box-border caret-transparent w-[15px]"
              />
              <img
                src="https://c.animaapp.com/mlzh4mmjaX4oGl/assets/icon-3.svg"
                alt="Icon"
                className="box-border caret-transparent hidden w-1.5"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
