export const FooterNewsletter = () => {
  return (
    <div className="border-b-neutral-500 border-t-neutral-500 box-border caret-transparent border-x-white/80 border-b border-t border-solid">
      <div className="box-border caret-transparent w-full mx-auto px-4 md:px-10">
        <div className="box-border caret-transparent flex flex-wrap -mx-3">
          <div className="box-border caret-transparent shrink-0 col-start-12 max-w-full w-full px-3 md:w-[66.6667%]">
            <div className="box-border caret-transparent flex flex-col h-full justify-center w-full pt-6 pb-0 border-r-0 border-white/80 md:border-r-neutral-500 md:py-8 md:border-r">
              <h2 className="text-white text-2xl box-border caret-transparent tracking-[-0.72px] leading-9 break-words md:text-[32px] md:tracking-[-0.96px] md:leading-[48px]">
                Sign up to stay in the loop for updates and specials
              </h2>
            </div>
          </div>
          <div className="box-border caret-transparent shrink-0 col-start-12 max-w-full w-full px-3 md:w-[33.3333%]">
            <div className="box-border caret-transparent flex flex-col h-full justify-center w-full py-2 md:py-4">
              <div className="box-border caret-transparent block">
                <form className="box-border caret-transparent">
                  <div className="box-border caret-transparent">
                    <div className="items-center box-border caret-transparent flex justify-between py-4 rounded-xl">
                      <input
                        type="email"
                        name="contact[email]"
                        placeholder="example@provider.com"
                        className="bg-transparent box-border caret-transparent block basis-[0%] grow p-0"
                      />
                      <button
                        type="submit"
                        name="commit"
                        aria-label="Subscribe"
                        className="relative text-neutral-800 items-center bg-stone-200 caret-transparent flex justify-center leading-[normal] max-h-12 max-w-12 min-h-12 min-w-12 opacity-50 text-center p-0 rounded-[9999.01px]"
                      >
                        <img
                          src="https://c.animaapp.com/mlzh4mmjaX4oGl/assets/icon-25.svg"
                          alt="Icon"
                          className="box-border caret-transparent w-[15px]"
                        />
                      </button>
                    </div>
                    <div
                      role="status"
                      className="text-base box-border caret-transparent tracking-[-0.48px] leading-6"
                    >
                      <p className="box-border caret-transparent hidden break-words"></p>
                      <p className="box-border caret-transparent hidden break-words">
                        When you sign up for our emails you will receive
                        marketing ads. Learn more about it on our privacy
                        policy.
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
