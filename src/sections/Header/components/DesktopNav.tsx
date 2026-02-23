const shopProducts = [
  {
    name: "Loop Switch 2",
    tag: "All-day coverage",
    description:
      "Three noise relief modes in one convenient earplug for ultimate in-the-moment control",
    image:
      "https://www.loopearplugs.com/cdn/shop/files/PDP_SWITCH_EMERALD_1-371454.png?v=1729670651&width=196",
    href: "https://www.loopearplugs.com/products/switch",
  },
  {
    name: "Loop Experience 2 Plus",
    tag: "At events",
    description:
      "An upgrade to Experience 2, with Loop Mute included for extra noise reduction on demand.",
    image:
      "https://www.loopearplugs.com/cdn/shop/files/PDP_EXPERIENCE2PLUS_GOLD_01-374433.png?v=1715750475&width=196",
    href: "https://www.loopearplugs.com/products/experience-plus",
  },
  {
    name: "Loop Dream",
    tag: "For sleep",
    description:
      "Designed for side-sleeping comfort and powerful noise reduction. A dreamy night's sleep awaits.",
    image:
      "https://www.loopearplugs.com/cdn/shop/files/PDP_DREAM_LILAC_1-270685.png?v=1728593375&width=196",
    href: "https://www.loopearplugs.com/products/dream",
  },
  {
    name: "Loop Engage 2",
    tag: "In groups",
    description:
      "Noise-filtering earplugs for clear conversations when parenting, socializing and beyond.",
    image:
      "https://www.loopearplugs.com/cdn/shop/files/PDP_ENGAGE2_CLEAR_01-917223.png?v=1715087473&width=196",
    href: "https://www.loopearplugs.com/products/engage",
  },
  {
    name: "Loop Quiet 2",
    tag: "Alone time",
    description:
      "Ultra-comfy earplugs for deep focus, travel, sleep and getting in your quiet bubble.",
    image:
      "https://www.loopearplugs.com/cdn/shop/files/PDP_QUIET_WHITE_01-805740.png?v=1725976815&width=196",
    href: "https://www.loopearplugs.com/products/quiet",
  },
  {
    name: "Loop Engage 2 Plus",
    tag: "In groups",
    description:
      "An upgrade to Engage 2, with Loop Mute included for extra noise reduction on demand.",
    image:
      "https://www.loopearplugs.com/cdn/shop/files/PDP_ENGAGE2PLUS_CLEAR_01-244449.png?v=1715087473&width=196",
    href: "https://www.loopearplugs.com/products/engage-plus",
  },
  {
    name: "Loop Experience 2",
    tag: "At events",
    description:
      "Certified hearing protection for crisp, clear sound during concerts, live music and events.",
    image:
      "https://www.loopearplugs.com/cdn/shop/files/PDP_EXPERIENCE2_SILVER_01.png?v=1770983744&width=196",
    href: "https://www.loopearplugs.com/products/experience",
  },
  {
    name: "Loop Engage Kids 2",
    tag: "School & playtime",
    description:
      "Noise-filtering earplugs for learning, playing and growing (ages 6-12).",
    image:
      "https://www.loopearplugs.com/cdn/shop/files/PDP_ENGAGE_KIDS_2_BERRY_BLUE_01.png?v=1759828353&width=196",
    href: "https://www.loopearplugs.com/products/engage-kids",
  },
];

const shopQuickLinks = [
  {
    label: "All products",
    image:
      "https://www.loopearplugs.com/cdn/shop/files/Loop_Earplugs_mega-menu_all_products_92bb9540-29e1-43ca-82d7-92277a2aecf7.png?v=1764655979&width=196",
    href: "https://www.loopearplugs.com/collections/all",
  },
  {
    label: "Build your own bundle",
    image:
      "https://www.loopearplugs.com/cdn/shop/files/Image_4_c3742dd9-96af-49ee-93db-3e2402af0e15.png?v=1767704377&width=196",
    href: "https://www.loopearplugs.com/products/build-your-bundle",
  },
  {
    label: "Bundle & Save",
    image:
      "https://www.loopearplugs.com/cdn/shop/files/Loop_Earplugs_mega-menu_bundles.png?v=1707500513&width=196",
    href: "https://www.loopearplugs.com/collections/bundles",
  },
  {
    label: "Accessories",
    image:
      "https://www.loopearplugs.com/cdn/shop/files/Experience_2_Carry_Case-removebg-preview.png?v=1721719771&width=196",
    href: "https://www.loopearplugs.com/collections/accessories",
  },
];

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
        <li className="group static items-center box-border caret-transparent flex min-h-0 min-w-0 py-0 md:min-h-[auto] md:min-w-[auto] md:py-2">
          <button
            type="button"
            className="text-neutral-900 items-center bg-transparent caret-transparent flex text-center underline underline-offset-[3px] p-3"
          >
            Shop
          </button>

          <div className="pointer-events-none invisible absolute left-0 top-full z-30 w-screen border-t border-[#ececec] bg-[#f7f7f7] opacity-0 shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition duration-150 group-hover:pointer-events-auto group-hover:visible group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:visible group-focus-within:opacity-100">
            <div className="mx-auto grid w-full max-w-[1320px] grid-cols-[minmax(0,1fr)_420px] gap-8 px-8 py-5">
              <div className="grid grid-cols-2 gap-x-8 gap-y-5">
                {shopProducts.map((product) => (
                  <a
                    key={product.name}
                    href={product.href}
                    className="grid grid-cols-[84px_minmax(0,1fr)] items-start gap-4 rounded-xl px-2 py-1 transition hover:bg-white"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-[72px] w-[72px] object-contain"
                    />

                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[16px] leading-[1.2] font-medium text-[#2d2d2d]">
                          {product.name}
                        </span>
                        <span className="rounded bg-[#ececec] px-2 py-[2px] text-[11px] leading-none text-[#666]">
                          {product.tag}
                        </span>
                      </div>

                      <p className="mt-2 text-[13px] leading-[1.45] text-[#666]">
                        {product.description}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="space-y-3">
                {shopQuickLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="flex min-h-[104px] items-center justify-between rounded-2xl bg-[#ececec] px-4 py-3 transition hover:bg-[#e5e5e5]"
                  >
                    <div className="flex items-center gap-4">
                      <img
                        src={link.image}
                        alt={link.label}
                        className="h-[70px] w-[70px] rounded-lg object-cover"
                      />
                      <span className="text-[16px] leading-[1.2] font-medium text-[#2d2d2d]">
                        {link.label}
                      </span>
                    </div>

                    <span
                      aria-hidden="true"
                      className="inline-flex h-[44px] w-[44px] items-center justify-center rounded-full bg-[#f7f7f7] text-[20px] text-[#2d2d2d]"
                    >
                      →
                    </span>
                  </a>
                ))}
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
          <button type="button" className="text-neutral-900 items-center bg-transparent caret-transparent flex text-center underline-offset-[3px] hover:underline p-3">
            Help me choose
          </button>
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
