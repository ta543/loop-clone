import { FooterNewsletter } from "@/sections/Footer/components/FooterNewsletter";
import { FooterLinks } from "@/sections/Footer/components/FooterLinks";

export const Footer = () => {
  return (
    <div className="box-border caret-transparent">
      <footer className="text-white/80 bg-fixed bg-neutral-800 box-border caret-transparent">
        <FooterNewsletter />
        <FooterLinks />
        <div className="border-t-neutral-500 box-border caret-transparent border-b-white/80 border-x-white/80 border-t border-solid">
          <div className="box-border caret-transparent w-full mx-auto px-4 md:px-10">
            <div className="items-center box-border caret-transparent flex flex-col flex-wrap justify-center py-6 md:flex-row md:justify-between">
              <div className="text-zinc-400 box-border caret-transparent">
                <ul
                  role="list"
                  className="items-center box-border caret-transparent flex justify-start list-none pl-0"
                >
                  <li className="box-border caret-transparent">
                    <a
                      href="https://www.facebook.com/loopearplugs"
                      className="text-sm box-border caret-transparent inline-block underline underline-offset-[3px] pr-3"
                    >
                      <img
                        src="https://c.animaapp.com/mlzh4mmjaX4oGl/assets/icon-39.svg"
                        alt="Icon"
                        className="box-border caret-transparent h-[18px] w-[18px]"
                      />
                    </a>
                  </li>
                  <li className="box-border caret-transparent">
                    <a
                      href="https://www.linkedin.com/company/loopearplugs"
                      className="text-sm box-border caret-transparent inline-block underline underline-offset-[3px] px-3"
                    >
                      <img
                        src="https://c.animaapp.com/mlzh4mmjaX4oGl/assets/icon-40.svg"
                        alt="Icon"
                        className="box-border caret-transparent h-[18px] w-[18px]"
                      />
                    </a>
                  </li>
                  <li className="box-border caret-transparent">
                    <a
                      href="https://www.reddit.com/r/LoopEarplugs/"
                      className="text-sm box-border caret-transparent inline-block underline underline-offset-[3px] px-3"
                    >
                      <img
                        src="https://c.animaapp.com/mlzh4mmjaX4oGl/assets/icon-41.svg"
                        alt="Icon"
                        className="box-border caret-transparent h-[18px] w-[18px]"
                      />
                    </a>
                  </li>
                  <li className="box-border caret-transparent">
                    <a
                      href="https://www.pinterest.com/loopearplugs/"
                      className="text-sm box-border caret-transparent inline-block underline underline-offset-[3px] px-3"
                    >
                      <img
                        src="https://c.animaapp.com/mlzh4mmjaX4oGl/assets/icon-42.svg"
                        alt="Icon"
                        className="box-border caret-transparent h-[18px] w-[18px]"
                      />
                    </a>
                  </li>
                  <li className="box-border caret-transparent">
                    <a
                      href="https://www.instagram.com/loopearplugs/"
                      className="text-sm box-border caret-transparent inline-block underline underline-offset-[3px] px-3"
                    >
                      <img
                        src="https://c.animaapp.com/mlzh4mmjaX4oGl/assets/icon-43.svg"
                        alt="Icon"
                        className="box-border caret-transparent h-[18px] w-[18px]"
                      />
                    </a>
                  </li>
                  <li className="box-border caret-transparent">
                    <a
                      href="https://www.tiktok.com/@loopearplugs"
                      className="text-sm box-border caret-transparent inline-block underline underline-offset-[3px] pl-3"
                    >
                      <img
                        src="https://c.animaapp.com/mlzh4mmjaX4oGl/assets/icon-44.svg"
                        alt="Icon"
                        className="box-border caret-transparent h-[18px] w-[18px]"
                      />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="text-zinc-400 box-border caret-transparent">
                <div className="box-border caret-transparent">
                  <small className="text-base box-border caret-transparent tracking-[-0.48px] leading-6 md:text-xl md:tracking-[-0.6px] md:leading-[26px]">
                    Copyright© Loop BV 2026
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
