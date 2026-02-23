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
      className={
        props.hasExtraClass
          ? "relative text-neutral-500 text-xs content-center bg-white box-border caret-transparent gap-x-4 flex tracking-[normal] leading-[16.8px] gap-y-4 snap-start px-4 py-6 rounded-xl border-b-zinc-100 border-l-neutral-500 border-r-neutral-500 border-t-neutral-500 border-b"
          : "relative text-neutral-500 text-xs content-center bg-white box-border caret-transparent gap-x-4 flex tracking-[normal] leading-[16.8px] gap-y-4 snap-start px-4 py-6 rounded-xl"
      }
    >
      <div className="box-border caret-transparent gap-x-2 flex flex-col gap-y-2 w-full">
        <div className="box-border caret-transparent gap-x-4 flex gap-y-4">
          <a
            href={props.productUrl}
            className="bg-zinc-100 box-border caret-transparent block shrink-0 h-[90px] w-[90px] overflow-hidden rounded-lg"
          >
            <img
              src={props.mainImageUrl}
              alt={props.mainImageAlt}
              className="aspect-[auto_90_/_90] box-border caret-transparent max-w-full w-[90px]"
            />
          </a>
          <div className="box-border caret-transparent flex basis-[0%] flex-col grow">
            <div className="box-border caret-transparent flex basis-[0%] flex-col grow">
              <h4 className="text-neutral-800 text-base box-border caret-transparent tracking-[-0.32px] leading-4 break-words py-1">
                <a
                  href={props.productUrl}
                  aria-label={`Link to ${props.productName}`}
                  className="box-border caret-transparent break-words"
                >
                  {props.productName}
                </a>
              </h4>
              <div className="box-border caret-transparent block">
                <fieldset
                  aria-label="Color"
                  className="box-border caret-transparent gap-x-3 flex flex-wrap gap-y-2 p-0"
                >
                  <div className="box-border caret-transparent gap-x-0.5 flex gap-y-0.5 w-full">
                    <legend className="text-neutral-800 box-border caret-transparent px-0">
                      Color:
                    </legend>
                    <span className="box-border caret-transparent block">
                      {props.selectedColorName}
                    </span>
                  </div>
                  {props.colorOptions.map((color, index) => (
                    <label
                      key={index}
                      className={
                        color.isSelected
                          ? "relative box-border caret-transparent block after:accent-auto after:box-border after:caret-transparent after:text-neutral-500 after:block after:text-xs after:not-italic after:normal-nums after:font-medium after:h-8 after:tracking-[normal] after:leading-[16.8px] after:list-outside after:list-none after:pointer-events-auto after:absolute after:text-start after:indent-[0px] after:normal-case after:visible after:w-8 after:border after:border-neutral-800 after:rounded-[9999.01px] after:border-separate after:border-solid after:-left-1 after:-top-1 after:font-avantt"
                          : "relative box-border caret-transparent block"
                      }
                    >
                      <span
                        className={`relative ${color.bgColorClass} bg-[url('${color.imageUrl}')] bg-cover box-border caret-transparent block h-6 w-6 border border-stone-200 bg-center rounded-[9999.01px] border-solid before:accent-auto before:shadow-[rgba(0,0,0,0.5)_0px_0px_1px_1px_inset] before:box-border before:caret-transparent before:text-neutral-500 before:block before:text-xs before:not-italic before:normal-nums before:font-medium before:tracking-[normal] before:leading-[16.8px] before:list-outside before:list-none before:pointer-events-auto before:absolute before:text-start before:indent-[0px] before:normal-case before:visible before:z-[2] before:border before:rounded-[9999.01px] before:border-separate before:border-solid before:border-white before:-inset-px before:font-avantt`}
                      ></span>
                    </label>
                  ))}
                </fieldset>
              </div>
            </div>
          </div>
        </div>
        <div className="items-center box-border caret-transparent gap-x-4 flex justify-between gap-y-4">
          <div className="box-border caret-transparent grow shrink-[2] justify-end pt-1">
            <div className="items-center box-border caret-transparent flex justify-end">
              <div className="box-border caret-transparent mr-1">
                <div className="box-border caret-transparent">
                  <span className="text-neutral-800 text-base box-border caret-transparent inline-block leading-5">
                    + {props.price}
                  </span>
                </div>
                <div className="box-border caret-transparent hidden justify-end">
                  <span className="text-rose-700 text-base box-border caret-transparent inline-block leading-5 mr-1">
                    + {props.price}
                  </span>
                  <s className="text-neutral-600 text-base box-border caret-transparent inline-block leading-5 line-through"></s>
                </div>
              </div>
            </div>
          </div>
          <div className="box-border caret-transparent block">
            <form className="box-border caret-transparent">
              <button
                type="submit"
                name="add"
                aria-label={props.addToCartAriaLabel}
                className="relative text-white text-base items-center bg-stone-200 caret-transparent inline-flex justify-center leading-5 min-h-10 min-w-[72px] opacity-50 text-center px-4 py-1 rounded-[9999.01px]"
              >
                <span className="box-border caret-transparent block">
                  {" "}
                  Add{" "}
                </span>
                <span className="box-border caret-transparent hidden w-[18px]">
                  <img
                    src="https://c.animaapp.com/mlzh4mmjaX4oGl/assets/icon-15.svg"
                    alt="Icon"
                    className="box-border caret-transparent"
                  />
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </li>
  );
};
