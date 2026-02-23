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
        <li className="items-center box-border caret-transparent flex min-h-0 min-w-0 py-0 md:min-h-[auto] md:min-w-[auto] md:py-2">
          <div
            role="dialog"
            aria-label="Submenu for Shop"
            className="box-border caret-transparent block min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]"
          >
            <button className="text-neutral-900 items-center bg-transparent caret-transparent flex text-center underline-offset-[3px] p-3">
              Shop
            </button>
          </div>
        </li>
        <li className="items-center box-border caret-transparent flex min-h-0 min-w-0 py-0 md:min-h-[auto] md:min-w-[auto] md:py-2">
          <a
            href="https://www.loopearplugs.com/collections/bundles"
            className="text-black items-center box-border caret-transparent flex min-h-0 min-w-0 underline-offset-[3px] p-3 md:min-h-[auto] md:min-w-[auto]"
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
            <button className="text-neutral-900 items-center bg-transparent caret-transparent flex text-center underline-offset-[3px] p-3">
              Help me choose
            </button>
          </div>
        </li>
        <li className="items-center box-border caret-transparent flex min-h-0 min-w-0 py-0 md:min-h-[auto] md:min-w-[auto] md:py-2">
          <a
            href="https://www.loopearplugs.com/pages/contact"
            className="text-black items-center box-border caret-transparent flex min-h-0 min-w-0 underline-offset-[3px] p-3 md:min-h-[auto] md:min-w-[auto]"
          >
            <span className="box-border caret-transparent block min-h-0 min-w-0 underline-offset-[3px] md:min-h-[auto] md:min-w-[auto]">
              FAQ
            </span>
          </a>
        </li>
        <li className="items-center box-border caret-transparent flex min-h-0 min-w-0 py-0 md:min-h-[auto] md:min-w-[auto] md:py-2">
          <a
            href="https://www.loopearplugs.com/pages/careers"
            className="text-black items-center box-border caret-transparent flex min-h-0 min-w-0 underline-offset-[3px] p-3 md:min-h-[auto] md:min-w-[auto]"
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
