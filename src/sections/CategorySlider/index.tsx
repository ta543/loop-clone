import { CategoryCard } from "@/sections/CategorySlider/components/CategoryCard";

export const CategorySlider = () => {
  return (
    <section className="box-border caret-transparent">
      <div className="box-border caret-transparent w-full overflow-hidden mx-auto px-4 py-6 md:px-10 md:py-12">
        <div className="relative box-border caret-transparent block list-none w-[calc(100%_+_32px)] z-[1] overflow-hidden -ml-4 mr-auto md:w-full md:overflow-visible md:ml-0">
          <div className="relative box-border caret-transparent gap-x-4 flex h-full gap-y-4 w-full z-[1] overflow-auto px-4 scroll-pl-4 scroll-pr-[auto] scroll-py-[auto] md:px-0 md:scroll-p-0">
            <CategoryCard
              ariaLabel="1 / 6"
              href="https://www.loopearplugs.com/products/dream"
              imageUrl="https://www.loopearplugs.com/cdn/shop/files/20240910_LoopDream_Male_InBed_Lila-14_1_fe11f0d2-515c-432b-aba1-202ccf131a57.png?v=1764144813&width=884"
              imageAlt=""
              badgeText="Best for sleep"
              headingText="Restful nights with"
              productName="Loop Dream"
              iconUrl="https://c.animaapp.com/mlzh4mmjaX4oGl/assets/icon-18.svg"
              iconAlt="Icon"
            />
            <CategoryCard
              ariaLabel="2 / 6"
              href="https://www.loopearplugs.com/products/experience"
              imageUrl="https://www.loopearplugs.com/cdn/shop/files/DSC04836_1.png?v=1764144813&width=884"
              imageAlt=""
              badgeText="Best for events"
              headingText="Safer, crisper music with"
              productName="Experience 2"
              iconUrl="https://c.animaapp.com/mlzh4mmjaX4oGl/assets/icon-18.svg"
              iconAlt="Icon"
            />
            <CategoryCard
              ariaLabel="3 / 6"
              href="https://www.loopearplugs.com/products/engage"
              imageUrl="https://www.loopearplugs.com/cdn/shop/files/Stocksy_comp_362248_Engage_2_Dusk_1.png?v=1764144813&width=884"
              imageAlt=""
              badgeText="Best for parents"
              headingText="Present moments with"
              productName="Engage 2"
              iconUrl="https://c.animaapp.com/mlzh4mmjaX4oGl/assets/icon-18.svg"
              iconAlt="Icon"
            />
            <CategoryCard
              ariaLabel="4 / 6"
              href="https://www.loopearplugs.com/products/quiet"
              imageUrl="https://www.loopearplugs.com/cdn/shop/files/InfluencerTrip_BA-1647_Pepe_1.png?v=1764144812&width=884"
              imageAlt=""
              badgeText="Best for travel"
              headingText="Stress-free trips with"
              productName="Quiet 2"
              iconUrl="https://c.animaapp.com/mlzh4mmjaX4oGl/assets/icon-18.svg"
              iconAlt="Icon"
            />
            <CategoryCard
              ariaLabel="5 / 6"
              href="https://www.loopearplugs.com/products/switch"
              imageUrl="https://www.loopearplugs.com/cdn/shop/files/InfluencerTrip_BA-1084_Karen_Switch_Silver51_1.png?v=1764144813&width=884"
              imageAlt=""
              badgeText="Best for all day"
              headingText="Three modes in one with"
              productName="Switch 2"
              iconUrl="https://c.animaapp.com/mlzh4mmjaX4oGl/assets/icon-18.svg"
              iconAlt="Icon"
            />
            <CategoryCard
              ariaLabel="6 / 6"
              href="https://www.loopearplugs.com/products/engage-kids"
              imageUrl="https://www.loopearplugs.com/cdn/shop/files/myles-tan-WNAO036c6FM-unsplash_1.png?v=1764144812&width=884"
              imageAlt=""
              badgeText="Best for school"
              headingText="Calm concentration with"
              productName="Engage Kids"
              iconUrl="https://c.animaapp.com/mlzh4mmjaX4oGl/assets/icon-18.svg"
              iconAlt="Icon"
            />
          </div>
          <div className="items-center box-border caret-transparent gap-x-2 flex justify-center gap-y-2 pt-[17px] md:gap-x-4 md:gap-y-4">
            <button
              aria-label="Next slide"
              className="static text-neutral-900/80 [align-items:normal] bg-transparent shadow-none caret-transparent hidden h-auto justify-normal text-center transform-none w-auto z-auto p-0 rounded-none -right-6 top-auto md:absolute md:appearance-none md:text-neutral-800 md:items-center md:bg-white md:shadow-[rgba(0,0,0,0.05)_0px_0px_10px_0px] md:flex md:h-12 md:justify-center md:translate-y-[-50.0%] md:w-12 md:z-[4] md:rounded-[9999.01px] md:top-2/4"
            >
              <img
                src="https://c.animaapp.com/mlzh4mmjaX4oGl/assets/icon-14.svg"
                alt="Icon"
                className="text-neutral-900/80 box-border caret-transparent h-auto w-[15px] md:text-neutral-800 md:h-4 md:w-[18px]"
              />
            </button>
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
      </div>
    </section>
  );
};
