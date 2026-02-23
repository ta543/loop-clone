export type ProductCardProps = {
  ariaLabel: string;
  productUrl: string;
  productImageUrl: string;
  productImageAlt: string;
  productImageClassName: string;
  hasAwardBadge: boolean;
  awardBadgeUrl?: string;
  awardBadgeAlt?: string;
  categoryLabel: string;
  selectedColor: string;
  colorOptions: Array<{
    colorName: string;
    backgroundImageUrl: string;
    isSelected: boolean;
  }>;
  productTitle: string;
  rating: number;
  reviewCount: number;
  price: string;
  hasDiscount: boolean;
  discountPrice?: string;
  originalPrice?: string;
  description: string;
};

export const ProductCard = (props: ProductCardProps) => {
  const fullStars = Math.floor(props.rating);
  const hasPartialStar = props.rating % 1 !== 0;
  const partialStarWidth = `${(props.rating % 1) * 100}%`;
  const emptyStars = 5 - Math.ceil(props.rating);

  return (
    <div
      role="group"
      aria-label={props.ariaLabel}
      className="relative box-border caret-transparent basis-[calc(83.3333%_-_2.66667px)] shrink-0 snap-start w-full md:basis-[calc(25%_-_12px)]"
    >
      <div className="relative bg-stone-50 box-border caret-transparent h-full overflow-hidden rounded-2xl">
        <div className="box-border caret-transparent flex flex-col h-full text-left">
          <div className="relative items-stretch box-border caret-transparent flex w-full before:accent-auto before:box-border before:caret-transparent before:text-neutral-900/80 before:block before:text-xl before:not-italic before:normal-nums before:font-medium before:h-0 before:tracking-[-0.6px] before:leading-[30px] before:list-outside before:list-none before:pointer-events-auto before:text-left before:indent-[0px] before:normal-case before:visible before:w-0 before:pb-[100%] before:border-separate before:font-avantt after:accent-auto after:box-border after:caret-transparent after:text-neutral-900/80 after:block after:text-xl after:not-italic after:normal-nums after:font-medium after:h-full after:tracking-[-0.6px] after:leading-[30px] after:list-outside after:list-none after:pointer-events-auto after:absolute after:text-left after:indent-[0px] after:normal-case after:visible after:w-full after:z-[-1] after:border-separate after:left-0 after:top-0 after:font-avantt">
            <a
              href={props.productUrl}
              className="box-border caret-transparent block z-[2] after:accent-auto after:box-border after:caret-transparent after:text-neutral-900/80 after:block after:text-xl after:not-italic after:normal-nums after:font-medium after:tracking-[-0.6px] after:leading-[30px] after:list-outside after:list-none after:pointer-events-auto after:absolute after:text-left after:indent-[0px] after:normal-case after:visible after:z-[1] after:rounded-2xl after:border-separate after:inset-0 after:font-avantt"
            >
              <div className="absolute box-border caret-transparent w-full z-0 overflow-hidden inset-y-0">
                <div className="absolute box-border caret-transparent w-full inset-y-0">
                  <img
                    src={props.productImageUrl}
                    alt={props.productImageAlt}
                    className={`absolute box-border caret-transparent h-full max-w-full object-cover w-full left-0 top-0 ${props.productImageClassName}`}
                  />
                </div>
                {props.hasAwardBadge && (
                  <div className="absolute items-end box-border caret-transparent flex h-full justify-start pointer-events-none w-full p-4">
                    <img
                      src={props.awardBadgeUrl}
                      alt={props.awardBadgeAlt}
                      className="aspect-[auto_96_/_96] box-border caret-transparent h-24 max-w-full object-contain object-[0%_100%] w-24"
                    />
                  </div>
                )}
              </div>
              <div className="relative box-border caret-transparent grid grow grid-rows-[minmax(0px,1fr)_max-content_minmax(0px,1fr)] w-full z-[1] p-4">
                <div className="self-start box-border caret-transparent row-start-1 justify-self-start">
                  <span className="text-neutral-800 text-base bg-stone-200 box-border caret-transparent block tracking-[-0.48px] leading-[21.28px] p-2 rounded-lg">
                    {props.categoryLabel}
                  </span>
                </div>
              </div>
            </a>
          </div>
          <div className="relative box-border caret-transparent grid grow grid-rows-[max-content_minmax(0px,1fr)_max-content_auto] w-full z-[1]">
            <div className="box-border caret-transparent flex basis-[0%] flex-col grow row-start-2 pt-4 pb-[30px] px-4 md:pb-[45px] md:px-8">
              <div className="relative box-border caret-transparent z-[2]">
                <div className="box-border caret-transparent">
                  <fieldset
                    role="radiogroup"
                    className="box-border caret-transparent gap-x-2 flex basis-full shrink-0 flex-wrap min-w-fit gap-y-2 mx-auto p-0"
                  >
                    <div className="text-sm box-border caret-transparent gap-x-0.5 flex gap-y-0.5 w-full">
                      <legend className="text-neutral-800 box-border caret-transparent px-0">
                        Color:
                      </legend>
                      <span className="text-neutral-600 box-border caret-transparent block">
                        {props.selectedColor}
                      </span>
                    </div>
                    {props.colorOptions.map((color, index) => (
                      <div
                        key={index}
                        className="box-border caret-transparent w-6 rounded-[9999.01px]"
                      >
                        <label
                          className={`relative text-black text-sm font-normal bg-[url('${color.backgroundImageUrl}')] bg-no-repeat bg-size-[100%] ${color.isSelected ? "shadow-[rgb(0,0,0)_0px_0px_0px_2px]" : ""} box-border caret-transparent inline-block h-5 tracking-[1px] leading-[14px] text-center w-5 bg-center p-2 rounded-[100px] md:p-3 before:accent-auto before:shadow-none before:box-border before:caret-transparent before:text-black before:block before:text-sm before:not-italic before:normal-nums before:font-normal before:tracking-[1px] before:leading-[14px] before:list-outside before:list-none before:pointer-events-auto before:absolute before:text-center before:indent-[0px] before:normal-case before:visible before:z-[2] before:rounded-[100px] before:border-separate before:border-2 before:border-solid before:border-white before:-inset-px before:font-avantt before:md:shadow-[rgba(0,0,0,0.5)_0px_0px_1px_1px_inset]`}
                        ></label>
                      </div>
                    ))}
                  </fieldset>
                </div>
              </div>
              <h3 className="text-neutral-900 text-2xl box-border caret-transparent tracking-[-0.72px] leading-9 break-words md:text-[32px] md:tracking-[-0.96px] md:leading-[48px]">
                <a
                  href={props.productUrl}
                  className="text-2xl items-center box-border caret-transparent inline-flex tracking-[-0.72px] leading-9 break-words md:text-[32px] md:tracking-[-0.96px] md:leading-[48px] after:accent-auto after:box-border after:caret-transparent after:text-neutral-900 after:block after:text-2xl after:not-italic after:normal-nums after:font-medium after:tracking-[-0.72px] after:leading-9 after:list-outside after:list-none after:break-words after:pointer-events-auto after:absolute after:text-left after:indent-[0px] after:normal-case after:visible after:z-[1] after:rounded-2xl after:border-separate after:inset-0 after:font-avantt after:md:text-[32px] after:md:tracking-[-0.96px] after:md:leading-[48px]"
                >
                  {props.productTitle}
                </a>
              </h3>
              <div className="box-border caret-transparent w-full">
                <div className="text-neutral-900 items-center box-border caret-transparent gap-x-[5px] flex leading-[26.1538px] gap-y-[5px] mb-[5px]">
                  <div
                    role="img"
                    aria-label={`${props.rating}/5 rating`}
                    className="text-xs items-center box-border caret-transparent gap-x-px flex leading-3 gap-y-px md:text-base md:gap-x-0.5 md:leading-4 md:gap-y-0.5"
                  >
                    {Array.from({ length: fullStars }).map((_, index) => (
                      <span
                        key={`full-${index}`}
                        className="relative text-neutral-800 text-xs box-border caret-transparent block leading-3 md:text-base md:leading-4"
                      >
                        ★
                      </span>
                    ))}
                    {hasPartialStar && (
                      <span
                        className="relative text-neutral-800 text-xs box-border caret-transparent block leading-3 md:text-base md:leading-4 before:accent-auto before:box-border before:caret-transparent before:text-neutral-800 before:block before:text-xs before:not-italic before:normal-nums before:font-medium before:tracking-[-0.6px] before:leading-3 before:list-outside before:list-none before:pointer-events-none before:absolute before:text-left before:indent-[0px] before:normal-case before:visible before:overflow-hidden before:border-separate before:inset-0 before:font-avantt before:md:text-base before:md:leading-4"
                        style={
                          {
                            "--tw-before-width": partialStarWidth,
                          } as React.CSSProperties
                        }
                      >
                        ☆
                      </span>
                    )}
                    {Array.from({ length: emptyStars }).map((_, index) => (
                      <span
                        key={`empty-${index}`}
                        className="relative text-neutral-800 text-xs box-border caret-transparent block leading-3 md:text-base md:leading-4"
                      >
                        ☆
                      </span>
                    ))}
                  </div>
                  <span className="text-neutral-600 text-[10px] box-border caret-transparent block tracking-[normal] leading-[15px] md:text-sm md:tracking-[0.42px]">
                    {props.reviewCount} Reviews
                  </span>
                </div>
                <div className="text-neutral-900 items-center box-border caret-transparent flex flex-wrap leading-[26.1538px] mb-2">
                  <div className="box-border caret-transparent mr-1">
                    <div
                      className={
                        props.hasDiscount
                          ? "box-border caret-transparent hidden"
                          : "box-border caret-transparent"
                      }
                    >
                      <span className="text-neutral-800 text-sm box-border caret-transparent inline-block leading-[18.3077px] md:text-xl md:leading-[26.1538px]">
                        {props.price}
                      </span>
                    </div>
                    <div
                      className={
                        props.hasDiscount
                          ? "box-border caret-transparent"
                          : "box-border caret-transparent hidden"
                      }
                    >
                      <span className="text-rose-700 text-sm box-border caret-transparent inline-block leading-[18.3077px] mr-1 md:text-xl md:leading-[26.1538px]">
                        {props.discountPrice}
                      </span>
                      <s className="text-neutral-600 text-sm box-border caret-transparent inline-block leading-[18.3077px] line-through mr-1 md:text-xl md:leading-[26.1538px]">
                        {props.originalPrice}
                      </s>
                    </div>
                  </div>
                  <div
                    className={`text-neutral-800 text-[10px] items-center bg-rose-200 box-border caret-transparent gap-x-1 ${props.hasDiscount ? "" : "hidden"} tracking-[normal] leading-3 gap-y-1 text-nowrap px-1 py-0.5 rounded-bl rounded-br rounded-tl rounded-tr`}
                  >
                    <span className="box-border caret-transparent inline-block text-nowrap">
                      Sale
                    </span>
                  </div>
                </div>
                <div className="text-neutral-900 text-base box-border caret-transparent tracking-[-0.48px] leading-[20.9231px] opacity-60">
                  {props.description}
                </div>
              </div>
              <div className="box-border caret-transparent mt-auto pt-4 md:pt-8">
                <div className="relative box-border caret-transparent z-[2]">
                  <div className="box-border caret-transparent">
                    <form className="box-border caret-transparent">
                      <button
                        type="button"
                        className="relative text-white items-center bg-stone-200 caret-transparent hidden justify-center leading-[normal] min-h-12 min-w-[122px] opacity-50 text-center px-10 py-0 rounded-[9999.01px]"
                      >
                        Email when available
                      </button>
                      <button
                        type="submit"
                        name="add"
                        className="relative text-white items-center bg-stone-200 caret-transparent inline-flex justify-center leading-[normal] min-h-12 min-w-[122px] opacity-50 text-center w-full px-10 py-0 rounded-[9999.01px] md:w-auto"
                      >
                        <span className="box-border caret-transparent block">
                          Add to cart
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
