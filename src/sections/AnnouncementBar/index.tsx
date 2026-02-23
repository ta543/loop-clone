export const AnnouncementBar = () => {
  return (
    <div className="sticky box-border caret-transparent z-[12] top-0">
      <div
        aria-label="Announcement"
        role="region"
        className="relative text-white/80 bg-fixed bg-neutral-900 box-border caret-transparent block list-none z-[1] overflow-hidden mx-auto"
      >
        <div className="relative caret-transparent flex h-full translate-x-[-3052px] w-full z-[1]">
          <div
            role="group"
            aria-label="3 / 3"
            className="relative text-white text-sm font-semibold items-center box-border caret-transparent gap-x-2 flex shrink-0 justify-center tracking-[-0.28px] leading-5 gap-y-2 text-center w-[1526px] p-2"
          >
            <p className="box-border caret-transparent break-words">
              Save up to 20% on Bundles:{" "}
              <a
                href="https://www.loopearplugs.com/collections/bundles"
                title="Bundles"
                className="box-border caret-transparent break-words text-nowrap"
              >
                Shop &amp; Save
              </a>
            </p>
            <button
              aria-label="Stop slide rotation"
              className="items-center bg-transparent caret-transparent flex shrink-0 h-6 justify-center w-6 border p-0 rounded-[9999.01px] border-solid border-white"
            >
              <img
                src="https://c.animaapp.com/mlzh4mmjaX4oGl/assets/icon-2.svg"
                alt="Icon"
                className="box-border caret-transparent w-[15px]"
              />
              <img
                src="https://c.animaapp.com/mlzh4mmjaX4oGl/assets/icon-3.svg"
                alt="Icon"
                className="box-border caret-transparent hidden w-1.5"
              />
            </button>
          </div>
          <div
            role="group"
            aria-label="1 / 3"
            className="relative text-white text-sm font-semibold items-center box-border caret-transparent gap-x-2 flex shrink-0 justify-center tracking-[-0.28px] leading-5 gap-y-2 text-center w-[1526px] p-2"
          >
            <p className="box-border caret-transparent break-words">
              Free shipping over 
              <span className="box-border caret-transparent break-words">
                39 EUR
              </span>
            </p>
            <button
              aria-label="Stop slide rotation"
              className="items-center bg-transparent caret-transparent flex shrink-0 h-6 justify-center w-6 border p-0 rounded-[9999.01px] border-solid border-white"
            >
              <img
                src="https://c.animaapp.com/mlzh4mmjaX4oGl/assets/icon-2.svg"
                alt="Icon"
                className="box-border caret-transparent w-[15px]"
              />
              <img
                src="https://c.animaapp.com/mlzh4mmjaX4oGl/assets/icon-3.svg"
                alt="Icon"
                className="box-border caret-transparent hidden w-1.5"
              />
            </button>
          </div>
          <div
            role="group"
            aria-label="2 / 3"
            className="relative text-white text-sm font-semibold items-center box-border caret-transparent gap-x-2 flex shrink-0 justify-center tracking-[-0.28px] leading-5 gap-y-2 text-center w-[1526px] p-2"
          >
            <p className="box-border caret-transparent break-words">
              Unlock better sleep - with ultra comfy{" "}
              <a
                href="https://www.loopearplugs.com/products/dream"
                title="Dream"
                className="box-border caret-transparent break-words text-nowrap"
              >
                Loop Dream
              </a>
            </p>
            <button
              aria-label="Stop slide rotation"
              className="items-center bg-transparent caret-transparent flex shrink-0 h-6 justify-center w-6 border p-0 rounded-[9999.01px] border-solid border-white"
            >
              <img
                src="https://c.animaapp.com/mlzh4mmjaX4oGl/assets/icon-2.svg"
                alt="Icon"
                className="box-border caret-transparent w-[15px]"
              />
              <img
                src="https://c.animaapp.com/mlzh4mmjaX4oGl/assets/icon-3.svg"
                alt="Icon"
                className="box-border caret-transparent hidden w-1.5"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
