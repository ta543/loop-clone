export const FoundersSection = () => {
  return (
    <section className="box-border caret-transparent">
      <div className="box-border caret-transparent gap-x-2 flex flex-col max-w-[352px] gap-y-2 w-full mx-auto px-4 py-6 md:gap-x-[246px] md:flex-row md:max-w-[1140px] md:gap-y-[246px] md:px-10 md:py-12">
        <h3 className="text-neutral-600 box-border caret-transparent leading-[26px] max-w-none break-words uppercase md:max-w-[213px]">
          meet our Founders
        </h3>
        <div className="box-border caret-transparent flex flex-col max-w-none w-full md:max-w-2xl">
          <h2 className="text-neutral-800 text-5xl box-border caret-transparent tracking-[-1.4px] leading-[46px] break-words md:text-6xl md:tracking-[-1.8px] md:leading-[64px]">
            Two friends. One big idea.
          </h2>
          <img
            src="https://www.loopearplugs.com/cdn/shop/files/Standard_ratios.png?v=1769434922&width=2016"
            alt="Loop Earplugs co-founders Dimitri O and Maarten Bodewes"
            className="aspect-[auto_2016_/_1344] box-border caret-transparent max-w-full object-cover w-full pt-6 pb-10 rounded-xl md:pt-10"
          />
          <p className="text-neutral-800 box-border caret-transparent leading-[26px] break-words">
            Where it all began
          </p>
          <div className="text-neutral-500 box-border caret-transparent leading-[26px] mt-3 mb-12">
            <p className="box-border caret-transparent break-words">
              Our co-founders Dimitri O and Maarten Bodewes started Loop back in
              2016. From studying engineering, to a shared love of music and
              nightlife, the pair had a lot in common to bond over. Including
              tinnitus. 
            </p>
          </div>
          <a
            href="https://www.loopearplugs.com/blogs/blog/the-founders-story"
            className="relative text-white items-center bg-neutral-800 box-border caret-transparent flex h-16 justify-center leading-[normal] min-h-[47px] min-w-[122px] w-full px-[30px] rounded-[9999.01px] md:w-fit"
          >
            <span className="box-border caret-transparent block">
              Read their story
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};
