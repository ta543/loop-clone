export type CategoryCardProps = {
  ariaLabel: string;
  href: string;
  imageUrl: string;
  imageAlt: string;
  badgeText: string;
  headingText: string;
  productName: string;
  iconUrl: string;
  iconAlt: string;
};

export const CategoryCard = (props: CategoryCardProps) => {
  return (
    <div
      role="group"
      aria-label={props.ariaLabel}
      className="relative box-border caret-transparent basis-[calc(95.2381%_-_0.761905px)] shrink-0 snap-start w-full md:basis-[calc(32.2581%_-_10.8387px)]"
    >
      <a href={props.href} className="box-border caret-transparent">
        <img
          src={props.imageUrl}
          alt={props.imageAlt}
          className="aspect-[auto_884_/_1120] box-border caret-transparent h-[438px] max-w-full object-cover w-[884px] rounded-xl md:h-[560px]"
        />
        <div className="absolute box-border caret-transparent flex flex-col h-full justify-between w-full left-0 top-0">
          <span className="text-neutral-800 text-[12.5008px] self-start bg-stone-50 box-border caret-transparent block tracking-[-0.375024px] leading-[17.2px] text-nowrap align-super m-3 px-3 py-2 rounded-lg md:text-base md:tracking-[-0.48px] md:leading-[22px] md:m-4">
            {props.badgeText}
          </span>
          <div className="box-border caret-transparent gap-x-[5px] flex justify-between max-w-[442px] gap-y-[5px] w-full px-3 py-6 md:px-4 md:py-8">
            <div className="text-white text-2xl box-border caret-transparent tracking-[-0.9296px] leading-[29.7008px] md:text-[31px] md:leading-[38px]">
              <h3 className="text-2xl box-border caret-transparent tracking-[-0.72px] leading-9 break-words md:text-[32px] md:tracking-[-0.96px] md:leading-[48px]">
                {props.headingText}
              </h3>
              <p className="text-2xl italic box-border caret-transparent leading-[29.7008px] break-words md:text-[31px] md:leading-[38px]">
                {props.productName}
              </p>
            </div>
            <img
              src={props.iconUrl}
              alt={props.iconAlt}
              className="self-center box-border caret-transparent h-[37.5008px] w-[37.5008px] md:h-12 md:w-12"
            />
          </div>
        </div>
      </a>
    </div>
  );
};
