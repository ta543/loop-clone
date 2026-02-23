export const CampaignSection = () => {
  return (
    <section className="box-border caret-transparent">
      <div className="box-border caret-transparent w-full overflow-hidden mx-auto pt-12 pb-6 px-4 md:pt-20 md:pb-12 md:px-10">
        <div className="relative box-border caret-transparent block list-none w-[calc(100%_+_32px)] z-[1] overflow-hidden -ml-4 mr-auto md:w-full md:overflow-visible md:ml-0">
          <div className="relative box-border caret-transparent gap-x-4 flex h-full gap-y-4 w-full z-[1] overflow-auto px-4 scroll-pl-4 scroll-pr-[auto] scroll-py-[auto] md:px-0 md:scroll-p-0">
            <div
              role="group"
              aria-label="1 / 1"
              className="relative box-border caret-transparent shrink-0 h-full snap-start w-full"
            >
              <div className="box-border caret-transparent flex flex-col w-full overflow-hidden rounded-2xl md:flex-row">
                <div className="bg-transparent box-border caret-transparent flex flex-col justify-normal w-auto pl-0 pt-8 pb-6 md:bg-zinc-100 md:justify-center md:w-6/12 md:pl-10">
                  <div className="box-border caret-transparent max-w-none my-0 md:max-w-[530px] md:my-4">
                    <div className="text-neutral-600 font-semibold box-border caret-transparent leading-6">
                      LIMITED EDITION
                    </div>
                    <h2 className="text-neutral-800 text-5xl font-semibold box-border caret-transparent tracking-[-1.44px] leading-[48px] break-words pt-4 pb-6 md:pt-6">
                      McLaren F1 Team x Loop Switch™ 2 
                    </h2>
                    <div className="text-neutral-600 font-semibold box-border caret-transparent leading-7 pb-0 md:pb-12">
                      Tune out the noise and accelerate your productivity with
                      the first official earplugs of McLaren F1 Team.
                    </div>
                    <a
                      href="https://www.loopearplugs.com/products/mclaren"
                      className="relative text-neutral-800 items-center bg-zinc-100 box-border caret-transparent hidden justify-center leading-[normal] min-h-16 min-w-[122px] border border-neutral-800 px-10 rounded-[9999.01px] border-solid md:inline-flex"
                    >
                      <span className="box-border caret-transparent inline min-h-0 min-w-0 md:block md:min-h-[auto] md:min-w-[auto]">
                        Shop now
                      </span>
                    </a>
                  </div>
                </div>
                <div className="relative box-border caret-transparent flex flex-col w-auto md:w-6/12">
                  <img
                    src="https://www.loopearplugs.com/cdn/shop/files/BTF_McLaren.jpg?v=1742558050&width=702"
                    alt="McLaren F1 Team x Loop Switch 2"
                    className="aspect-[auto_702_/_702] box-border caret-transparent h-full max-w-full object-cover w-full rounded-[6.83px] md:rounded-none"
                  />
                </div>
                <a
                  href="https://www.loopearplugs.com/products/mclaren"
                  className="relative text-neutral-800 items-center bg-white box-border caret-transparent flex justify-center leading-[normal] min-h-16 min-w-[122px] w-full border border-neutral-800 my-6 px-10 rounded-[9999.01px] border-solid md:hidden"
                >
                  <span className="box-border caret-transparent block min-h-[auto] min-w-[auto] md:inline md:min-h-0 md:min-w-0">
                    Shop now
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
