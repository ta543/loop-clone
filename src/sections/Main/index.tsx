import { HeroSlider } from "@/sections/Main/components/HeroSlider";
import { ProductsSection } from "@/sections/ProductsSection";
import { ResearchSection } from "@/sections/ResearchSection";
import { CategorySlider } from "@/sections/CategorySlider";
import { StatsSection } from "@/sections/StatsSection";
import { CampaignSection } from "@/sections/CampaignSection";
import { FoundersSection } from "@/sections/FoundersSection";
import { UGCSection } from "@/sections/UGCSection";
import { MomentsSection } from "@/sections/MomentsSection";
import { NewsletterSection } from "@/sections/NewsletterSection";

export const Main = () => {
  return (
    <main role="main" className="box-border caret-transparent">
      <HeroSlider />
      <ProductsSection />
      <ResearchSection />
      <CategorySlider />
      <StatsSection />
      <CampaignSection />
      <FoundersSection />
      <UGCSection />
      <MomentsSection />
      <NewsletterSection />
      <section className="box-border caret-transparent">
        <div className="text-white/80 bg-neutral-800 box-border caret-transparent mt-8 md:mt-16">
          <div className="box-border caret-transparent w-full mx-auto">
            <p className="static text-white text-[112px] box-border caret-transparent h-auto tracking-[normal] leading-[95.984px] break-words uppercase text-wrap w-auto overflow-visible m-0 px-3 py-6 font-fkscreamer md:absolute md:h-px md:text-nowrap md:w-px md:overflow-hidden md:-m-px md:p-0">
              Your life, your volume
            </p>
            <img
              src="https://c.animaapp.com/mlzh4mmjaX4oGl/assets/icon-24.svg"
              alt="Icon"
              className="box-border caret-transparent hidden w-full md:block"
            />
          </div>
        </div>
      </section>
    </main>
  );
};
