const shopProducts = [
  {
    name: "Loop Switch 2",
    tag: "All-day coverage",
    description:
      "Three noise relief modes in one convenient earplug for ultimate in-the-moment control",
    image:
      "https://images.loopearplugs.com/loop-switch-2-teal.png",
    href: "https://www.loopearplugs.com/products/loop-switch-2",
  },
  {
    name: "Loop Experience 2 Plus",
    tag: "At events",
    description:
      "An upgrade to Experience 2, with Loop Mute included for extra noise reduction on demand.",
    image:
      "https://images.loopearplugs.com/loop-experience-2-plus-gold.png",
    href: "https://www.loopearplugs.com/products/loop-experience-2-plus",
  },
  {
    name: "Loop Dream",
    tag: "For sleep",
    description:
      "Designed for side-sleeping comfort and powerful noise reduction. A dreamy night's sleep awaits.",
    image:
      "https://images.loopearplugs.com/loop-dream-purple.png",
    href: "https://www.loopearplugs.com/products/loop-dream",
  },
  {
    name: "Loop Engage 2",
    tag: "In groups",
    description:
      "Noise-filtering earplugs for clear conversations when parenting, socializing and beyond.",
    image:
      "https://images.loopearplugs.com/loop-engage-2-clear.png",
    href: "https://www.loopearplugs.com/products/loop-engage-2",
  },
  {
    name: "Loop Quiet 2",
    tag: "Alone time",
    description:
      "Ultra-comfy earplugs for deep focus, travel, sleep and getting in your quiet bubble.",
    image:
      "https://images.loopearplugs.com/loop-quiet-2-white.png",
    href: "https://www.loopearplugs.com/products/loop-quiet-2",
  },
  {
    name: "Loop Engage 2 Plus",
    tag: "In groups",
    description:
      "An upgrade to Engage 2, with Loop Mute included for extra noise reduction on demand.",
    image:
      "https://images.loopearplugs.com/loop-engage-2-plus-clear.png",
    href: "https://www.loopearplugs.com/products/loop-engage-2-plus",
  },
  {
    name: "Loop Experience 2",
    tag: "At events",
    description:
      "Certified hearing protection for crisp, clear sound during concerts, live music and events.",
    image:
      "https://images.loopearplugs.com/loop-experience-2-silver.png",
    href: "https://www.loopearplugs.com/products/loop-experience-2",
  },
  {
    name: "Loop Engage Kids 2",
    tag: "School & playtime",
    description:
      "Noise-filtering earplugs for learning, playing and growing (ages 6-12).",
    image:
      "https://images.loopearplugs.com/loop-engage-kids-2.png",
    href: "https://www.loopearplugs.com/products/loop-engage-kids-2",
  },
];

const shopQuickLinks = [
  {
    label: "All products",
    image:
      "https://images.loopearplugs.com/shop-all-products.png",
    href: "https://www.loopearplugs.com/collections/all",
  },
  {
    label: "Build your own bundle",
    image:
      "https://images.loopearplugs.com/build-your-own-bundle.png",
    href: "https://www.loopearplugs.com/pages/build-your-own-bundle",
  },
  {
    label: "Bundle & Save",
    image:
      "https://images.loopearplugs.com/bundle-and-save.png",
    href: "https://www.loopearplugs.com/collections/bundles",
  },
  {
    label: "Accessories",
    image:
      "https://images.loopearplugs.com/accessories.png",
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
          <button type="button" className="text-neutral-900 items-center bg-transparent caret-transparent flex text-center underline-offset-[3px] hover:underline p-3">
            Shop
          </button>

          <div className="pointer-events-none invisible absolute left-0 top-full z-30 w-screen border-t border-[#ececec] bg-[#f7f7f7] opacity-0 shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition duration-150 group-hover:pointer-events-auto group-hover:visible group-hover:opacity-100">
            <div className="mx-auto grid w-full max-w-[1320px] grid-cols-[minmax(0,1fr)_410px] gap-10 px-10 py-6">
              <div className="grid grid-cols-2 gap-x-10 gap-y-6">
                {shopProducts.map((product) => (
                  <a
                    key={product.name}
                    href={product.href}
                    className="grid grid-cols-[84px_minmax(0,1fr)] items-start gap-4 rounded-xl p-2 transition hover:bg-white"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-[84px] w-[84px] object-contain"
                    />

                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[42px] leading-tight text-[#2d2d2d]">
                          {product.name}
                        </span>
                        <span className="rounded bg-[#ececec] px-2 py-1 text-xl text-[#666]">
                          {product.tag}
                        </span>
                      </div>

                      <p className="mt-1 text-[32px] leading-snug text-[#666]">
                        {product.description}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="space-y-4">
                {shopQuickLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="flex items-center justify-between rounded-2xl bg-[#ececec] px-5 py-4 transition hover:bg-[#e5e5e5]"
                  >
                    <div className="flex items-center gap-4">
                      <img
                        src={link.image}
                        alt={link.label}
                        className="h-[68px] w-[68px] rounded-lg object-cover"
                      />
                      <span className="text-[42px] leading-tight text-[#2d2d2d]">
                        {link.label}
                      </span>
                    </div>

                    <span
                      aria-hidden="true"
                      className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#f7f7f7] text-3xl text-[#2d2d2d]"
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
