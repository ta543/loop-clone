import { MomentCard } from "@/sections/MomentsSection/components/MomentCard";

export const MomentsSection = () => {
  return (
    <section className="box-border caret-transparent">
      <div className="box-border caret-transparent max-w-none w-full overflow-hidden mx-auto px-4 py-6 md:max-w-[1140px] md:px-10 md:py-12">
        <div className="box-border caret-transparent gap-x-4 flex flex-col gap-y-4">
          <h3 className="text-neutral-900 text-5xl box-border caret-transparent tracking-[-1.44px] leading-[46.08px] max-w-screen-sm break-words mb-6 md:text-[64px] md:tracking-[-1.92px] md:leading-[61.44px] md:mb-12">
            Explore more Loop moments
          </h3>
        </div>
        <div className="relative box-border caret-transparent block list-none w-[calc(100%_+_32px)] z-[1] overflow-hidden -ml-4 mr-auto md:w-full md:overflow-visible md:ml-0">
          <div
            role="list"
            className="relative box-border caret-transparent gap-x-4 flex flex-row grid-cols-none h-full gap-y-4 w-full z-[1] overflow-auto px-4 scroll-pl-4 md:box-content md:grid md:flex-col md:grid-cols-[repeat(3,minmax(0px,1fr))] md:px-0 md:scroll-pl-[auto]"
          >
            <MomentCard
              ariaLabel="1 / 6"
              href="https://www.loopearplugs.com/pages/earplugs-for-sleeping"
              imageUrl="https://www.loopearplugs.com/cdn/shop/files/AI_generated_Images_for_Use_Cases.png?v=1764159756&width=441"
              imageAlt=""
              title="Earplugs for Sleeping"
              iconUrl="https://c.animaapp.com/mlzh4mmjaX4oGl/assets/icon-22.svg"
              iconAlt="Icon"
            />
            <MomentCard
              ariaLabel="2 / 6"
              href="https://www.loopearplugs.com/pages/earplugs-for-concerts"
              imageUrl="https://www.loopearplugs.com/cdn/shop/files/Cards_5_79fbd42b-8665-4190-ab8c-a768855ca5b8.png?v=1764159765&width=441"
              imageAlt=""
              title="Earplugs for Concerts"
              iconUrl="https://c.animaapp.com/mlzh4mmjaX4oGl/assets/icon-22.svg"
              iconAlt="Icon"
            />
            <MomentCard
              ariaLabel="3 / 6"
              href="https://www.loopearplugs.com/pages/earplugs-for-festivals"
              imageUrl="https://www.loopearplugs.com/cdn/shop/files/Cards_4_c765dbf4-2b24-4768-ba31-5dae6e9493c2.png?v=1764159644&width=441"
              imageAlt=""
              title="Earplugs for Music Festivals"
              iconUrl="https://c.animaapp.com/mlzh4mmjaX4oGl/assets/icon-22.svg"
              iconAlt="Icon"
            />
            <MomentCard
              ariaLabel="4 / 6"
              href="https://www.loopearplugs.com/pages/earplugs-for-musicians"
              imageUrl="https://www.loopearplugs.com/cdn/shop/files/Cards_3_435a2161-77f7-4d3d-9814-73952e42ba12.png?v=1764159596&width=441"
              imageAlt=""
              title="Earplugs for Musicians"
              iconUrl="https://c.animaapp.com/mlzh4mmjaX4oGl/assets/icon-22.svg"
              iconAlt="Icon"
            />
            <MomentCard
              ariaLabel="5 / 6"
              href="https://www.loopearplugs.com/pages/earplugs-for-tinnitus"
              imageUrl="https://www.loopearplugs.com/cdn/shop/files/Container_3.png?v=1764159596&width=441"
              imageAlt=""
              title="Earplugs for Tinnitus"
              iconUrl="https://c.animaapp.com/mlzh4mmjaX4oGl/assets/icon-22.svg"
              iconAlt="Icon"
            />
            <MomentCard
              ariaLabel="6 / 6"
              href="https://www.loopearplugs.com/pages/earplugs-for-autism"
              imageUrl="https://www.loopearplugs.com/cdn/shop/files/Container_4.png?v=1764159597&width=441"
              imageAlt=""
              title="Earplugs for Autism"
              iconUrl="https://c.animaapp.com/mlzh4mmjaX4oGl/assets/icon-22.svg"
              iconAlt="Icon"
            />
          </div>
          <div className="relative items-center box-border caret-transparent gap-x-0 flex h-[41px] justify-center gap-y-0 w-full z-10 md:hidden">
            <span
              role="button"
              aria-label="Go to slide 1"
              className="relative items-center box-border caret-transparent flex h-6 justify-center min-h-[auto] min-w-[auto] w-6 md:min-h-0 md:min-w-0 before:accent-auto before:bg-neutral-800 before:box-border before:caret-transparent before:text-neutral-900/80 before:block before:text-xl before:not-italic before:normal-nums before:font-medium before:h-2.5 before:tracking-[-0.6px] before:leading-[30px] before:list-outside before:list-none before:min-h-[auto] before:min-w-[auto] before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:w-2.5 before:rounded-[50%] before:border-separate before:font-avantt before:md:min-h-0 before:md:min-w-0"
            ></span>
            <span
              role="button"
              aria-label="Go to slide 2"
              className="relative items-center box-border caret-transparent flex h-6 justify-center min-h-[auto] min-w-[auto] w-6 md:min-h-0 md:min-w-0 before:accent-auto before:bg-neutral-800 before:box-border before:caret-transparent before:text-neutral-900/80 before:block before:text-xl before:not-italic before:normal-nums before:font-medium before:h-2.5 before:tracking-[-0.6px] before:leading-[30px] before:list-outside before:list-none before:min-h-[auto] before:min-w-[auto] before:opacity-50 before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:w-2.5 before:rounded-[50%] before:border-separate before:font-avantt before:md:min-h-0 before:md:min-w-0"
            ></span>
            <span
              role="button"
              aria-label="Go to slide 3"
              className="relative items-center box-border caret-transparent flex h-6 justify-center min-h-[auto] min-w-[auto] w-6 md:min-h-0 md:min-w-0 before:accent-auto before:bg-neutral-800 before:box-border before:caret-transparent before:text-neutral-900/80 before:block before:text-xl before:not-italic before:normal-nums before:font-medium before:h-2.5 before:tracking-[-0.6px] before:leading-[30px] before:list-outside before:list-none before:min-h-[auto] before:min-w-[auto] before:opacity-50 before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:w-2.5 before:rounded-[50%] before:border-separate before:font-avantt before:md:min-h-0 before:md:min-w-0"
            ></span>
            <span
              role="button"
              aria-label="Go to slide 4"
              className="relative items-center box-border caret-transparent flex h-6 justify-center min-h-[auto] min-w-[auto] w-6 md:min-h-0 md:min-w-0 before:accent-auto before:bg-neutral-800 before:box-border before:caret-transparent before:text-neutral-900/80 before:block before:text-xl before:not-italic before:normal-nums before:font-medium before:h-2.5 before:tracking-[-0.6px] before:leading-[30px] before:list-outside before:list-none before:min-h-[auto] before:min-w-[auto] before:opacity-50 before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:w-2.5 before:rounded-[50%] before:border-separate before:font-avantt before:md:min-h-0 before:md:min-w-0"
            ></span>
          </div>
        </div>
      </div>
    </section>
  );
};
