import { VideoCard } from "@/sections/UGCSection/components/VideoCard";

export const UGCSection = () => {
  return (
    <section className="box-border caret-transparent">
      <div className="box-border caret-transparent">
        <div
          role="group"
          aria-label="Video UGC"
          className="relative box-border caret-transparent block max-w-none w-full mx-auto px-4 py-6 md:max-w-[1140px] md:px-10 md:py-12"
        >
          <div className="box-border caret-transparent flex flex-col-reverse justify-normal md:flex-row md:justify-between">
            <h2 className="text-neutral-900 text-5xl box-border caret-transparent tracking-[-1.44px] leading-[46.08px] max-w-screen-sm break-words mb-6 md:text-[64px] md:tracking-[-1.92px] md:leading-[61.44px] md:mb-12">
              Worn by you
            </h2>
            <div className="items-center box-border caret-transparent hidden justify-center mt-4 md:mt-8">
              <button
                type="button"
                name="previous"
                aria-label="Slide left"
                className="text-neutral-900 items-center bg-transparent caret-transparent flex h-5 justify-center text-center w-11 p-0 md:h-7"
              >
                <img
                  src="https://c.animaapp.com/mlzh4mmjaX4oGl/assets/icon-19.svg"
                  alt="Icon"
                  className="box-border caret-transparent h-12 w-12"
                />
              </button>
              <button
                type="button"
                name="next"
                aria-label="Slide right"
                className="text-neutral-900 items-center bg-transparent caret-transparent flex h-5 justify-center text-center w-11 p-0 md:h-7"
              >
                <img
                  src="https://c.animaapp.com/mlzh4mmjaX4oGl/assets/icon-20.svg"
                  alt="Icon"
                  className="box-border caret-transparent h-12 w-12"
                />
              </button>
            </div>
          </div>
          <div className="relative box-border caret-transparent gap-x-4 flex list-none gap-y-1 scroll-smooth overflow-auto mb-0 pb-7 md:gap-y-2 md:mb-2.5">
            <VideoCard
              imageUrl="https://www.loopearplugs.com/cdn/shop/files/SWITCH_2_HP_UGC.png?v=1729754007&width=645"
              imageAlt=""
              imageVariant="aspect-[auto_645_/_1088]"
              playIconUrl="https://c.animaapp.com/mlzh4mmjaX4oGl/assets/icon-21.svg"
              playIconAlt="Icon"
              linkUrl="https://www.loopearplugs.com/products/switch"
              linkText="Shop Loop Switch 2"
              arrowIconUrl="https://c.animaapp.com/mlzh4mmjaX4oGl/assets/icon-22.svg"
              arrowIconAlt="Icon"
            />
            <VideoCard
              imageUrl="https://www.loopearplugs.com/cdn/shop/files/DREAM_UGC_HP.png?v=1729754040&width=644"
              imageAlt=""
              imageVariant="aspect-[auto_644_/_1094]"
              playIconUrl="https://c.animaapp.com/mlzh4mmjaX4oGl/assets/icon-21.svg"
              playIconAlt="Icon"
              linkUrl="https://www.loopearplugs.com/products/dream"
              linkText="Shop Loop Dream"
              arrowIconUrl="https://c.animaapp.com/mlzh4mmjaX4oGl/assets/icon-22.svg"
              arrowIconAlt="Icon"
            />
            <VideoCard
              imageUrl="https://www.loopearplugs.com/cdn/shop/files/image_3_e320d210-4d20-4db6-a667-316308b7f165.png?v=1728566677&width=644"
              imageAlt=""
              imageVariant="aspect-[auto_644_/_1148]"
              playIconUrl="https://c.animaapp.com/mlzh4mmjaX4oGl/assets/icon-21.svg"
              playIconAlt="Icon"
              linkUrl="https://www.loopearplugs.com/products/quiet"
              linkText="Shop Loop Quiet 2"
              arrowIconUrl="https://c.animaapp.com/mlzh4mmjaX4oGl/assets/icon-22.svg"
              arrowIconAlt="Icon"
            />
            <VideoCard
              imageUrl="https://www.loopearplugs.com/cdn/shop/files/Experience_2_0743a6cd-55b7-4e5d-b340-81fb39503b04.png?v=1725865211&width=498"
              imageAlt=""
              imageVariant="aspect-[auto_498_/_832]"
              playIconUrl="https://c.animaapp.com/mlzh4mmjaX4oGl/assets/icon-21.svg"
              playIconAlt="Icon"
              linkUrl="https://www.loopearplugs.com/products/experience"
              linkText="Shop Loop Experience 2"
              arrowIconUrl="https://c.animaapp.com/mlzh4mmjaX4oGl/assets/icon-22.svg"
              arrowIconAlt="Icon"
            />
            <VideoCard
              imageUrl="https://www.loopearplugs.com/cdn/shop/files/Experience_2_Plus.png?v=1725865251&width=496"
              imageAlt=""
              imageVariant="aspect-[auto_496_/_825]"
              playIconUrl="https://c.animaapp.com/mlzh4mmjaX4oGl/assets/icon-21.svg"
              playIconAlt="Icon"
              linkUrl="https://www.loopearplugs.com/products/experience-plus"
              linkText="Shop Loop Experience 2 Plus"
              arrowIconUrl="https://c.animaapp.com/mlzh4mmjaX4oGl/assets/icon-22.svg"
              arrowIconAlt="Icon"
            />
            <VideoCard
              imageUrl="https://www.loopearplugs.com/cdn/shop/files/Experience_2_2.png?v=1725865329&width=495"
              imageAlt=""
              imageVariant="aspect-[auto_495_/_828]"
              playIconUrl="https://c.animaapp.com/mlzh4mmjaX4oGl/assets/icon-21.svg"
              playIconAlt="Icon"
              linkUrl="https://www.loopearplugs.com/products/experience"
              linkText="Shop Loop Experience 2"
              arrowIconUrl="https://c.animaapp.com/mlzh4mmjaX4oGl/assets/icon-22.svg"
              arrowIconAlt="Icon"
            />
            <VideoCard
              imageUrl="https://www.loopearplugs.com/cdn/shop/files/Engage_2_c1213a88-8803-4fd1-8314-bad6f75fd8c5.png?v=1725865377&width=497"
              imageAlt=""
              imageVariant="aspect-[auto_497_/_832]"
              playIconUrl="https://c.animaapp.com/mlzh4mmjaX4oGl/assets/icon-21.svg"
              playIconAlt="Icon"
              linkUrl="https://www.loopearplugs.com/products/engage"
              linkText="Shop Loop Engage 2"
              arrowIconUrl="https://c.animaapp.com/mlzh4mmjaX4oGl/assets/icon-22.svg"
              arrowIconAlt="Icon"
            />
          </div>
          <div className="box-border caret-transparent hidden justify-center pointer-events-none w-full my-6 md:flex">
            <button
              role="presentation"
              className="relative items-center bg-transparent caret-transparent flex h-6 justify-center min-h-0 min-w-0 text-center w-6 p-0 md:min-h-[auto] md:min-w-[auto] before:accent-auto before:bg-neutral-800 before:box-border before:caret-transparent before:text-neutral-900/80 before:block before:text-xl before:not-italic before:normal-nums before:font-medium before:h-2.5 before:tracking-[-0.6px] before:leading-[30px] before:list-outside before:list-disc before:min-h-0 before:min-w-0 before:pointer-events-none before:text-center before:indent-[0px] before:normal-case before:visible before:w-2.5 before:rounded-[9999.01px] before:border-separate before:font-avantt before:md:min-h-[auto] before:md:min-w-[auto]"
            ></button>
            <button
              role="presentation"
              className="relative items-center bg-transparent caret-transparent flex h-6 justify-center min-h-0 min-w-0 text-center w-6 p-0 md:min-h-[auto] md:min-w-[auto] before:accent-auto before:bg-neutral-800 before:box-border before:caret-transparent before:text-neutral-900/80 before:block before:text-xl before:not-italic before:normal-nums before:font-medium before:h-2.5 before:tracking-[-0.6px] before:leading-[30px] before:list-outside before:list-disc before:min-h-0 before:min-w-0 before:opacity-50 before:pointer-events-none before:text-center before:indent-[0px] before:normal-case before:visible before:w-2.5 before:rounded-[9999.01px] before:border-separate before:font-avantt before:md:min-h-[auto] before:md:min-w-[auto]"
            ></button>
            <button
              role="presentation"
              className="relative items-center bg-transparent caret-transparent flex h-6 justify-center min-h-0 min-w-0 text-center w-6 p-0 md:min-h-[auto] md:min-w-[auto] before:accent-auto before:bg-neutral-800 before:box-border before:caret-transparent before:text-neutral-900/80 before:block before:text-xl before:not-italic before:normal-nums before:font-medium before:h-2.5 before:tracking-[-0.6px] before:leading-[30px] before:list-outside before:list-disc before:min-h-0 before:min-w-0 before:opacity-50 before:pointer-events-none before:text-center before:indent-[0px] before:normal-case before:visible before:w-2.5 before:rounded-[9999.01px] before:border-separate before:font-avantt before:md:min-h-[auto] before:md:min-w-[auto]"
            ></button>
            <button
              role="presentation"
              className="relative items-center bg-transparent caret-transparent flex h-6 justify-center min-h-0 min-w-0 text-center w-6 p-0 md:min-h-[auto] md:min-w-[auto] before:accent-auto before:bg-neutral-800 before:box-border before:caret-transparent before:text-neutral-900/80 before:block before:text-xl before:not-italic before:normal-nums before:font-medium before:h-2.5 before:tracking-[-0.6px] before:leading-[30px] before:list-outside before:list-disc before:min-h-0 before:min-w-0 before:opacity-50 before:pointer-events-none before:text-center before:indent-[0px] before:normal-case before:visible before:w-2.5 before:rounded-[9999.01px] before:border-separate before:font-avantt before:md:min-h-[auto] before:md:min-w-[auto]"
            ></button>
          </div>
          <div className="box-border caret-transparent flex justify-center w-full my-6 md:hidden">
            <button
              role="presentation"
              className="relative items-center bg-transparent caret-transparent flex h-6 justify-center min-h-[auto] min-w-[auto] text-center w-6 p-0 md:min-h-0 md:min-w-0 before:accent-auto before:bg-neutral-800 before:box-border before:caret-transparent before:text-neutral-900/80 before:block before:text-xl before:not-italic before:normal-nums before:font-medium before:h-2.5 before:tracking-[-0.6px] before:leading-[30px] before:list-outside before:list-disc before:min-h-[auto] before:min-w-[auto] before:pointer-events-auto before:text-center before:indent-[0px] before:normal-case before:visible before:w-2.5 before:rounded-[9999.01px] before:border-separate before:font-avantt before:md:min-h-0 before:md:min-w-0"
            ></button>
            <button
              role="presentation"
              className="relative items-center bg-transparent caret-transparent flex h-6 justify-center min-h-[auto] min-w-[auto] text-center w-6 p-0 md:min-h-0 md:min-w-0 before:accent-auto before:bg-neutral-800 before:box-border before:caret-transparent before:text-neutral-900/80 before:block before:text-xl before:not-italic before:normal-nums before:font-medium before:h-2.5 before:tracking-[-0.6px] before:leading-[30px] before:list-outside before:list-disc before:min-h-[auto] before:min-w-[auto] before:opacity-50 before:pointer-events-auto before:text-center before:indent-[0px] before:normal-case before:visible before:w-2.5 before:rounded-[9999.01px] before:border-separate before:font-avantt before:md:min-h-0 before:md:min-w-0"
            ></button>
            <button
              role="presentation"
              className="relative items-center bg-transparent caret-transparent flex h-6 justify-center min-h-[auto] min-w-[auto] text-center w-6 p-0 md:min-h-0 md:min-w-0 before:accent-auto before:bg-neutral-800 before:box-border before:caret-transparent before:text-neutral-900/80 before:block before:text-xl before:not-italic before:normal-nums before:font-medium before:h-2.5 before:tracking-[-0.6px] before:leading-[30px] before:list-outside before:list-disc before:min-h-[auto] before:min-w-[auto] before:opacity-50 before:pointer-events-auto before:text-center before:indent-[0px] before:normal-case before:visible before:w-2.5 before:rounded-[9999.01px] before:border-separate before:font-avantt before:md:min-h-0 before:md:min-w-0"
            ></button>
            <button
              role="presentation"
              className="relative items-center bg-transparent caret-transparent flex h-6 justify-center min-h-[auto] min-w-[auto] text-center w-6 p-0 md:min-h-0 md:min-w-0 before:accent-auto before:bg-neutral-800 before:box-border before:caret-transparent before:text-neutral-900/80 before:block before:text-xl before:not-italic before:normal-nums before:font-medium before:h-2.5 before:tracking-[-0.6px] before:leading-[30px] before:list-outside before:list-disc before:min-h-[auto] before:min-w-[auto] before:opacity-50 before:pointer-events-auto before:text-center before:indent-[0px] before:normal-case before:visible before:w-2.5 before:rounded-[9999.01px] before:border-separate before:font-avantt before:md:min-h-0 before:md:min-w-0"
            ></button>
            <button
              role="presentation"
              className="relative items-center bg-transparent caret-transparent flex h-6 justify-center min-h-[auto] min-w-[auto] text-center w-6 p-0 md:min-h-0 md:min-w-0 before:accent-auto before:bg-neutral-800 before:box-border before:caret-transparent before:text-neutral-900/80 before:block before:text-xl before:not-italic before:normal-nums before:font-medium before:h-2.5 before:tracking-[-0.6px] before:leading-[30px] before:list-outside before:list-disc before:min-h-[auto] before:min-w-[auto] before:opacity-50 before:pointer-events-auto before:text-center before:indent-[0px] before:normal-case before:visible before:w-2.5 before:rounded-[9999.01px] before:border-separate before:font-avantt before:md:min-h-0 before:md:min-w-0"
            ></button>
            <button
              role="presentation"
              className="relative items-center bg-transparent caret-transparent flex h-6 justify-center min-h-[auto] min-w-[auto] text-center w-6 p-0 md:min-h-0 md:min-w-0 before:accent-auto before:bg-neutral-800 before:box-border before:caret-transparent before:text-neutral-900/80 before:block before:text-xl before:not-italic before:normal-nums before:font-medium before:h-2.5 before:tracking-[-0.6px] before:leading-[30px] before:list-outside before:list-disc before:min-h-[auto] before:min-w-[auto] before:opacity-50 before:pointer-events-auto before:text-center before:indent-[0px] before:normal-case before:visible before:w-2.5 before:rounded-[9999.01px] before:border-separate before:font-avantt before:md:min-h-0 before:md:min-w-0"
            ></button>
            <button
              role="presentation"
              className="relative items-center bg-transparent caret-transparent flex h-6 justify-center min-h-[auto] min-w-[auto] text-center w-6 p-0 md:min-h-0 md:min-w-0 before:accent-auto before:bg-neutral-800 before:box-border before:caret-transparent before:text-neutral-900/80 before:block before:text-xl before:not-italic before:normal-nums before:font-medium before:h-2.5 before:tracking-[-0.6px] before:leading-[30px] before:list-outside before:list-disc before:min-h-[auto] before:min-w-[auto] before:opacity-50 before:pointer-events-auto before:text-center before:indent-[0px] before:normal-case before:visible before:w-2.5 before:rounded-[9999.01px] before:border-separate before:font-avantt before:md:min-h-0 before:md:min-w-0"
            ></button>
          </div>
        </div>
      </div>
    </section>
  );
};
