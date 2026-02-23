export const DesktopNav = () => {
  return (
    <nav
      aria-label="Menu"
      className="box-border caret-transparent hidden col-end-[navigation] col-start-[navigation] row-end-[navigation] row-start-[navigation] min-h-0 min-w-0 -ml-3 md:block md:min-h-[auto] md:min-w-[auto] md:ml-0"
    >
      <ul
        role="list"
        className="box-border caret-transparent inline-flex flex-wrap list-none pl-0"
      >
        <li className="group relative items-center box-border caret-transparent flex min-h-0 min-w-0 py-0 md:min-h-[auto] md:min-w-[auto] md:py-2">
          <div
            role="dialog"
            aria-label="Submenu for Shop"
            className="box-border caret-transparent block min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]"
          >
            <button className="text-neutral-900 items-center bg-transparent caret-transparent flex text-center underline-offset-[3px] hover:underline p-3">
              Shop
            </button>
          </div>

          <div className="pointer-events-none invisible opacity-0 transition-opacity duration-150 group-hover:pointer-events-auto group-hover:visible group-hover:opacity-100">
            <div className="fixed inset-0 top-[72px] bg-black/15" />

            <div className="absolute left-1/2 top-full z-20 w-[1100px] max-w-[92vw] -translate-x-1/2 rounded-3xl bg-[#dbe7f8]/95 p-8 text-[#374151] shadow-2xl backdrop-blur-sm">
              <div className="grid grid-cols-[1.2fr_1fr] gap-6">
                <div className="rounded-2xl bg-white/30 p-6">
                  <h3 className="text-[64px] font-medium leading-[0.95] text-black/45">
                    Wake up
                    <br />
                    well rested
                  </h3>
                  <p className="mt-6 max-w-xl text-3xl leading-tight text-black/50">
                    Sleep with Loop Dream™ — comfy earplugs for your best rest
                  </p>
                  <a
                    href="https://www.loopearplugs.com/products/loop-dream"
                    className="mt-8 inline-flex rounded-full bg-black/35 px-8 py-3 text-3xl text-white"
                  >
                    Shop Loop Dream
                  </a>
                </div>

                <div className="space-y-4">
                  {[
                    "All products",
                    "Build your own bundle",
                    "Bundle & Save",
                    "Accessories",
                  ].map((item) => (
                    <a
                      key={item}
                      href="https://www.loopearplugs.com/collections/all"
                      className="flex items-center justify-between rounded-2xl bg-white/25 px-6 py-5 text-3xl text-black/60 transition hover:bg-white/40"
                    >
                      {item}
                      <span aria-hidden="true" className="text-4xl leading-none">
                        →
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </li>
        <li className="items-center box-border caret-transparent flex min-h-0 min-w-0 py-0 md:min-h-[auto] md:min-w-[auto] md:py-2">
          <a
            href="https://www.loopearplugs.com/collections/bundles"
            className="text-black items-center box-border caret-transparent flex min-h-0 min-w-0 underline-offset-[3px] hover:underline p-3 md:min-h-[auto] md:min-w-[auto]"
          >
            <span className="box-border caret-transparent block min-h-0 min-w-0 underline-offset-[3px] md:min-h-[auto] md:min-w-[auto]">
              Bundles
            </span>
          </a>
        </li>
        <li className="items-center box-border caret-transparent flex min-h-0 min-w-0 py-0 md:min-h-[auto] md:min-w-[auto] md:py-2">
          <div
            role="dialog"
            aria-label="Submenu for Help me choose"
            className="box-border caret-transparent block min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]"
          >
            <button className="text-neutral-900 items-center bg-transparent caret-transparent flex text-center underline-offset-[3px] hover:underline p-3">
              Help me choose
            </button>
          </div>
        </li>
        <li className="items-center box-border caret-transparent flex min-h-0 min-w-0 py-0 md:min-h-[auto] md:min-w-[auto] md:py-2">
          <a
            href="https://www.loopearplugs.com/pages/contact"
            className="text-black items-center box-border caret-transparent flex min-h-0 min-w-0 underline-offset-[3px] hover:underline p-3 md:min-h-[auto] md:min-w-[auto]"
          >
            <span className="box-border caret-transparent block min-h-0 min-w-0 underline-offset-[3px] md:min-h-[auto] md:min-w-[auto]">
              FAQ
            </span>
          </a>
        </li>
        <li className="items-center box-border caret-transparent flex min-h-0 min-w-0 py-0 md:min-h-[auto] md:min-w-[auto] md:py-2">
          <a
            href="https://www.loopearplugs.com/pages/careers"
            className="text-black items-center box-border caret-transparent flex min-h-0 min-w-0 underline-offset-[3px] hover:underline p-3 md:min-h-[auto] md:min-w-[auto]"
          >
            <span className="box-border caret-transparent block min-h-0 min-w-0 underline-offset-[3px] md:min-h-[auto] md:min-w-[auto]">
              We&#39;re Hiring
            </span>
          </a>
        </li>
      </ul>
    </nav>
  );
};
