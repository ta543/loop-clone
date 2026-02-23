export type VideoCardProps = {
  imageUrl: string;
  imageAlt: string;
  imageVariant: string;
  playIconUrl: string;
  playIconAlt: string;
  linkUrl: string;
  linkText: string;
  arrowIconUrl: string;
  arrowIconAlt: string;
};

export const VideoCard = (props: VideoCardProps) => {
  return (
    <div
      role="group"
      className="box-border caret-transparent flex flex-col grow shrink-0 justify-between max-w-full snap-start w-[297px] md:max-w-fit md:w-auto"
    >
      <div className="relative box-border caret-transparent h-max max-w-[297px] min-h-full w-full overflow-hidden">
        <div className="aspect-[10_/_18] box-border caret-transparent">
          <img
            src={props.imageUrl}
            alt={props.imageAlt}
            className={`box-border caret-transparent h-[calc(100%_+_2px)] max-w-full object-cover w-[calc(100%_+_2px)] -m-px rounded-xl ${props.imageVariant}`}
          />
        </div>
        <button
          aria-label="Play video"
          className="absolute items-center aspect-[10_/_18] bg-transparent caret-transparent flex justify-center text-center p-0 inset-0"
        >
          <img
            src={props.playIconUrl}
            alt={props.playIconAlt}
            className="box-border caret-transparent h-[66px] w-16"
          />
        </button>
        <a
          href={props.linkUrl}
          className="relative text-neutral-800 items-center self-start box-border caret-transparent inline-flex justify-center leading-[normal] min-h-[47px] min-w-[122px] border-neutral-800 py-px border-b"
        >
          <span className="box-border caret-transparent block">
            {props.linkText}
          </span>
          <img
            src={props.arrowIconUrl}
            alt={props.arrowIconAlt}
            className="box-border caret-transparent h-3 w-3.5"
          />
        </a>
      </div>
    </div>
  );
};
