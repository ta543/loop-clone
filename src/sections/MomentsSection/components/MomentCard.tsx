export type MomentCardProps = {
  ariaLabel: string;
  href: string;
  imageUrl: string;
  imageAlt: string;
  title: string;
  iconUrl: string;
  iconAlt: string;
};

export const MomentCard = (props: MomentCardProps) => {
  return (
    <div
      role="group"
      aria-label={props.ariaLabel}
      className="relative box-border caret-transparent gap-x-[normal] block basis-full flex-row shrink-0 h-auto min-w-0 gap-y-[normal] snap-start w-full md:gap-x-4 md:flex md:basis-auto md:flex-col md:h-full md:min-w-[auto] md:gap-y-4"
    >
      <a
        href={props.href}
        className="relative box-border caret-transparent gap-x-2 flex flex-col min-h-0 min-w-0 gap-y-2 md:min-h-[auto] md:min-w-[auto]"
      >
        <img
          src={props.imageUrl}
          alt={props.imageAlt}
          className="aspect-[auto_441_/_238] box-border caret-transparent h-full max-w-full object-cover w-full rounded-lg"
        />
        <div className="items-center bg-white box-border caret-transparent gap-x-1 flex justify-between gap-y-1 w-full py-1">
          <h4 className="text-neutral-900 box-border caret-transparent tracking-[-1.2px] leading-6 break-words">
            {props.title}
          </h4>
          <div className="box-border caret-transparent flex h-10">
            <img
              src={props.iconUrl}
              alt={props.iconAlt}
              className="self-center box-border caret-transparent h-3 w-3.5 mx-4"
            />
          </div>
        </div>
      </a>
    </div>
  );
};
