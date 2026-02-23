export type ColorOption = {
  name: string;
  imageUrl: string;
  bgColorClass: string;
  isSelected: boolean;
};

export type UpsellProductProps = {
  productName: string;
  productUrl: string;
  mainImageUrl: string;
  mainImageAlt: string;
  selectedColorName: string;
  colorOptions: ColorOption[];
  price: string;
  addToCartAriaLabel: string;
  hasExtraClass?: boolean;
};

export const UpsellProduct = (props: UpsellProductProps) => {
  return (
    <li
      aria-label={props.productName}
      className="relative snap-start rounded-[30px] bg-white px-7 py-6 text-neutral-500"
    >
      <div className="flex w-full flex-col gap-5">
        <div className="flex gap-5">
          <a
            href={props.productUrl}
            className="block h-[175px] w-[175px] shrink-0 overflow-hidden rounded-2xl bg-zinc-100"
          >
            <img
              src={props.mainImageUrl}
              alt={props.mainImageAlt}
              className="h-full w-full object-contain"
            />
          </a>
          <div className="flex flex-1 flex-col">
            <h4 className="py-1 text-[50px] font-medium tracking-[-1px] leading-none text-neutral-800">
              <a href={props.productUrl} aria-label={`Link to ${props.productName}`}>
                {props.productName}
              </a>
            </h4>
            <fieldset aria-label="Color" className="mt-2 flex flex-wrap gap-3 p-0">
              <div className="flex w-full gap-1 text-[24px] leading-none text-neutral-800">
                <legend className="px-0">Color:</legend>
                <span>{props.selectedColorName}</span>
              </div>
              {props.colorOptions.map((color, index) => (
                <label
                  key={index}
                  className={color.isSelected ? "relative block after:absolute after:-inset-1 after:rounded-full after:border after:border-neutral-800 after:content-['']" : "relative block"}
                >
                  <span
                    className={`relative block h-12 w-12 rounded-full border border-stone-200 bg-cover bg-center ${color.bgColorClass}`}
                    style={{ backgroundImage: `url(${color.imageUrl})` }}
                  />
                </label>
              ))}
            </fieldset>
          </div>
        </div>
        <div className="flex items-center justify-between gap-4">
          <span className="pt-1 text-[52px] font-medium tracking-[-1.04px] leading-none text-neutral-800">
            + {props.price}
          </span>
          <form>
            <button
              type="submit"
              name="add"
              aria-label={props.addToCartAriaLabel}
              className="inline-flex min-h-[92px] min-w-[180px] items-center justify-center rounded-full bg-[#202129] px-8 text-[56px] font-medium tracking-[-1.12px] leading-none text-white"
            >
              Add
            </button>
          </form>
        </div>
      </div>
    </li>
  );
};
