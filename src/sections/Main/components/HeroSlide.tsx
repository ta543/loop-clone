export type HeroSlideProps = {
  ariaLabel: string;
  variant: string;
  hasVideo?: boolean;
  videoSources?: Array<{
    src: string;
    type: string;
  }>;
  mobileVideoSources?: Array<{
    src: string;
    type: string;
  }>;
  hasImage?: boolean;
  imageUrl?: string;
  imageAlt?: string;
  productImageUrl?: string;
  productImageAlt?: string;
  starRating: number;
  customerCount: string;
  heading: string;
  description: string;
  ctaText?: string;
  ctaUrl?: string;
  showNavigationButtons?: boolean;
};

export const HeroSlide = (props: HeroSlideProps) => {
  return (
    <div
      role="group"
      aria-label={props.ariaLabel}
      className="relative box-border caret-transparent shrink-0 w-[1360px] mr-8 mt-4 md:mt-6"
    >
      <div className="relative box-border caret-transparent flex flex-col h-full min-h-[700px] w-full px-4 md:flex-row md:min-h-[620px] md:pl-16">
        <div
          className={`absolute box-border caret-transparent h-full w-full overflow-hidden rounded-xl left-0 top-0 md:rounded-2xl ${props.variant === "video" ? "bg-black opacity-100 md:opacity-50" : "bg-stone-50"}`}
        >
          {props.hasVideo && props.showNavigationButtons && (
            <>
              <div className="box-border caret-transparent hidden -right-11 top-0.5">
                <button className="bg-transparent caret-transparent text-center p-0">
                  &gt;&gt;
                </button>
                <button className="bg-transparent caret-transparent text-center p-0">
                  1.00
                </button>
                <button className="bg-transparent caret-transparent text-center p-0">
                  &lt;&lt;
                </button>
                <button className="bg-transparent caret-transparent text-center p-0"></button>
              </div>
              <div className="box-border caret-transparent hidden -right-11 top-0.5">
                <button className="bg-transparent caret-transparent text-center p-0">
                  &gt;&gt;
                </button>
                <button className="bg-transparent caret-transparent text-center p-0">
                  1.00
                </button>
                <button className="bg-transparent caret-transparent text-center p-0">
                  &lt;&lt;
                </button>
                <button className="bg-transparent caret-transparent text-center p-0"></button>
              </div>
            </>
          )}
          {props.hasVideo && (
            <div className="absolute box-border caret-transparent h-full w-full overflow-hidden left-0 top-0">
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="absolute box-border caret-transparent hidden h-full max-w-full object-cover object-[0%_45%] w-full left-0 top-0 md:block md:object-[50%_50%]"
              >
                {props.videoSources?.map((source, index) => (
                  <source
                    key={index}
                    src={source.src}
                    type={source.type}
                    className="text-black text-base font-normal box-border caret-transparent tracking-[normal] leading-[normal] list-disc font-times_new_roman"
                  />
                ))}
              </video>
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="absolute box-border caret-transparent block h-full max-w-full object-cover object-[0%_45%] w-full left-0 top-0 md:hidden md:object-[50%_50%]"
              >
                {props.mobileVideoSources?.map((source, index) => (
                  <source
                    key={index}
                    src={source.src}
                    type={source.type}
                    className="text-black text-base font-normal box-border caret-transparent tracking-[normal] leading-[normal] list-disc font-times_new_roman"
                  />
                ))}
              </video>
            </div>
          )}
          {props.hasImage && (
            <div className="box-border caret-transparent absolute h-[120%] left-[-10%] top-[-10%] w-[120%] overflow-hidden">
              <picture className="box-border caret-transparent h-full object-cover w-full">
                <img
                  src={props.imageUrl}
                  alt={props.imageAlt}
                  className="aspect-[auto_800_/_1765] box-border caret-transparent h-full max-w-full object-cover w-full md:aspect-[auto_2720_/_1408]"
                />
              </picture>
            </div>
          )}
        </div>
        {props.productImageUrl && (
          <div className="box-border caret-transparent w-auto md:w-6/12 order-none -mt-4 mb-0 md:order-1 md:-mt-6 md:mb-4">
            <picture className="box-border caret-transparent">
              <img
                src={props.productImageUrl}
                alt={props.productImageAlt}
                className="aspect-[auto_347_/_340] box-border caret-transparent max-w-full w-[347px] mx-auto md:aspect-[auto_1484_/_1456] md:w-[1484px]"
              />
            </picture>
          </div>
        )}
        <div
          className={`box-border caret-transparent w-auto md:w-6/12 ${props.variant === "video" ? "relative text-white items-center flex flex-col h-full justify-end text-center py-4 md:items-start md:justify-center md:text-left md:py-16" : "relative items-center box-border caret-transparent flex flex-col h-full justify-end text-center w-auto py-4 md:items-start md:justify-center md:text-left md:w-6/12 md:py-16"}`}
        >
          <div className="box-border caret-transparent text-center md:text-left">
            <div
              className={
                props.variant === "video"
                  ? "text-base items-center bg-clip-text bg-[linear-gradient(120deg,rgb(255,255,255)_0%,rgb(255,255,255)_30%,rgba(255,255,255,0)_50%,rgba(255,255,255,0)_100%)] bg-size-[400%] box-border caret-transparent gap-x-3 flex justify-center min-h-5 gap-y-3 text-center bg-[position:90%_50%] mb-4 md:text-lg md:justify-start md:text-left md:mb-[35px]"
                  : "text-base items-center bg-clip-text bg-[linear-gradient(120deg,rgb(0,0,0)_0%,rgb(0,0,0)_30%,rgba(0,0,0,0)_50%,rgba(0,0,0,0)_100%)] bg-size-[400%] box-border caret-transparent gap-x-3 flex justify-center min-h-5 gap-y-3 text-center bg-[position:left_50%] mb-4 md:text-lg md:justify-start md:text-left md:mb-[35px]"
              }
            >
              <div className="text-base box-border caret-transparent gap-x-0.5 flex gap-y-0.5 text-center md:text-lg md:text-left">
                {Array.from({ length: props.starRating }).map((_, index) => (
                  <span
                    key={index}
                    className="text-base box-border caret-transparent block text-center md:text-lg md:text-left"
                  >
                    ★
                  </span>
                ))}
              </div>
              <span className="text-base box-border caret-transparent block text-center md:text-lg md:text-left">
                {props.customerCount}
              </span>
            </div>
            <h2
              className={
                props.variant === "video"
                  ? "text-5xl bg-clip-text bg-[linear-gradient(120deg,rgb(255,255,255)_0%,rgb(255,255,255)_30%,rgba(255,255,255,0)_50%,rgba(255,255,255,0)_100%)] bg-size-[400%] box-border caret-transparent tracking-[-2.4px] leading-[48px] break-words text-center bg-[position:90%_50%] mb-2 md:text-8xl md:tracking-[-4.8px] md:leading-[96px] md:text-left md:mb-6"
                  : "text-neutral-900 text-5xl bg-clip-text bg-[linear-gradient(120deg,rgb(0,0,0)_0%,rgb(0,0,0)_30%,rgba(0,0,0,0)_50%,rgba(0,0,0,0)_100%)] bg-size-[400%] box-border caret-transparent tracking-[-2.4px] leading-[48px] break-words text-center bg-[position:left_50%] mb-2 md:text-8xl md:tracking-[-4.8px] md:leading-[96px] md:text-left md:mb-6"
              }
            >
              {props.heading}
            </h2>
            <p
              className={
                props.variant === "video"
                  ? "text-xl bg-clip-text bg-[linear-gradient(120deg,rgb(255,255,255)_0%,rgb(255,255,255)_30%,rgba(255,255,255,0)_50%,rgba(255,255,255,0)_100%)] bg-size-[400%] box-border caret-transparent tracking-[-0.6px] leading-7 max-w-none break-words text-center bg-[position:90%_50%] mb-4 md:text-2xl md:tracking-[-0.72px] md:leading-[33.6px] md:max-w-[570px] md:text-left md:mb-8"
                  : "text-neutral-900 text-xl bg-clip-text bg-[linear-gradient(120deg,rgb(0,0,0)_0%,rgb(0,0,0)_30%,rgba(0,0,0,0)_50%,rgba(0,0,0,0)_100%)] bg-size-[400%] box-border caret-transparent tracking-[-0.6px] leading-7 max-w-none break-words text-center bg-[position:left_50%] mb-4 md:text-2xl md:tracking-[-0.72px] md:leading-[33.6px] md:max-w-[570px] md:text-left md:mb-8"
              }
            >
              {props.description}
            </p>
          </div>
          {props.ctaText && props.ctaUrl && (
            <div className="box-border caret-transparent gap-x-2 flex flex-col justify-center gap-y-2 text-center md:gap-x-4 md:flex-row md:gap-y-4 md:text-left">
              <a
                href={props.ctaUrl}
                className="relative appearance-none text-white text-[20px] font-medium font-avantt items-center bg-[rgb(37,36,39)] box-border caret-transparent flex h-16 min-h-16 min-w-[122px] justify-center tracking-[-0.6px] leading-normal text-left px-10 py-0 rounded-[9999.01px] transition-shadow duration-100 ease-in"
              >
                {props.ctaText}
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
