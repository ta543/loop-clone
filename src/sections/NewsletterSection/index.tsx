export const NewsletterSection = () => {
  return (
    <div className="box-border caret-transparent">
      <div className="box-border caret-transparent w-full mx-auto px-4 py-6 md:px-10 md:py-12">
        <div className="text-black/80 bg-zinc-100 box-border caret-transparent flex flex-col overflow-hidden rounded-2xl md:flex-row">
          <div className="box-border caret-transparent w-auto pt-12 pb-6 px-4 md:w-3/5 md:pl-20 md:pr-0 md:py-16">
            <h2 className="text-neutral-800 text-5xl box-border caret-transparent tracking-[-1.44px] leading-[48px] break-words">
              Stay in the Loop
            </h2>
            <div className="text-neutral-800 box-border caret-transparent leading-[26px] mt-4 mb-6">
              Unlock your first-order discount, early sale access, and exclusive
              drops.
            </div>
            <div className="box-border caret-transparent flex flex-col">
              <p className="text-neutral-800 text-base box-border caret-transparent leading-5 break-words my-2">
                Email address
              </p>
              <div className="box-border caret-transparent block">
                <form className="box-border caret-transparent">
                  <div className="box-border caret-transparent">
                    <div className="box-border caret-transparent gap-x-4 flex flex-col justify-normal gap-y-4 md:gap-x-6 md:flex-row md:justify-between md:gap-y-6">
                      <div className="items-center box-border caret-transparent flex justify-between max-h-14 w-full border border-neutral-600 px-6 py-4 rounded-xl border-solid">
                        <input
                          type="email"
                          name="contact[email]"
                          placeholder="example@provider.com"
                          className="text-base bg-transparent box-border caret-transparent block basis-[0%] grow p-0"
                        />
                      </div>
                      <button
                        type="submit"
                        name="commit"
                        aria-label="Subscribe"
                        className="relative text-stone-50 items-center bg-stone-200 caret-transparent flex justify-center leading-[normal] max-h-[52px] min-h-12 min-w-fit opacity-50 text-center px-10 py-0 rounded-[9999.01px]"
                      >
                        Sign up
                      </button>
                    </div>
                    <div
                      role="status"
                      className="text-base box-border caret-transparent tracking-[-0.48px] leading-6"
                    >
                      <p className="box-border caret-transparent hidden break-words"></p>
                      <p className="text-neutral-600 box-border caret-transparent leading-[22px] max-w-[500px] break-words mt-2">
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
          <img
            src="https://www.loopearplugs.com/cdn/shop/files/Engage_2_Plus_360b8e3f-c010-4cc1-926d-88f5451e22f4.png?v=1764251850&width=718"
            alt=""
            className="self-center aspect-[auto_718_/_386] box-border caret-transparent hidden h-[386px] max-w-full min-h-0 min-w-0 object-cover w-[718px] md:block md:min-h-[auto] md:min-w-[auto] md:w-2/5"
          />
          <img
            src="https://www.loopearplugs.com/cdn/shop/files/Engage_2_Plus_8a219687-4d64-4f62-8802-ca01d3d16343.png?v=1764252010&width=1074"
            alt=""
            className="self-center aspect-[auto_1074_/_1304] box-border caret-transparent block h-[386px] max-w-full min-h-[auto] min-w-[auto] object-cover w-[1074px] md:hidden md:min-h-0 md:min-w-0 md:w-2/5"
          />
        </div>
      </div>
    </div>
  );
};
