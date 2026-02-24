import { ProductGrid } from "@/sections/ProductsSection/components/ProductGrid";

export const ProductsSection = () => {
  return (
    <section className="box-border caret-transparent">
      <div className="box-border caret-transparent py-6 md:py-12">
        <div className="box-border caret-transparent w-full mx-auto px-4 md:max-w-[1360px] md:px-0">
          <h2 className="text-neutral-900 text-5xl box-border caret-transparent tracking-[-1.44px] leading-[46.08px] max-w-screen-sm break-words mb-6 md:text-[64px] md:tracking-[-1.92px] md:leading-[61.44px] md:mb-12">
            Most-loved earplugs
          </h2>
          <ProductGrid />
        </div>
      </div>
    </section>
  );
};
