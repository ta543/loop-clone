import { CartUpsell } from "@/components/CartDialog/components/CartUpsell";

export const CartDialog = () => {
  return (
    <div className="box-border caret-transparent">
      <div className="text-neutral-800 text-base box-border caret-transparent tracking-[-0.32px] leading-6">
        <dialog className="fixed text-black box-border caret-transparent h-[1000px] max-h-[1000px] max-w-full w-full z-[9] ml-0 mt-auto mb-0 p-0 rounded-t-2xl inset-y-0 md:w-[460px] md:ml-auto md:mb-auto md:rounded-t-none">
          <div
            role="document"
            className="box-border caret-transparent flex flex-col h-[1000px] max-h-[1000px]"
          >
            <header className="items-center box-border caret-transparent flex w-full px-4 py-6">
              <div className="box-border caret-transparent hidden shrink-0 h-4 w-4"></div>
              <div className="box-border caret-transparent basis-[0%] grow text-left">
                <h2 className="text-neutral-800 text-xl font-semibold box-border caret-transparent tracking-[-0.6px] leading-[19.2px] break-words">
                  Your cart
                </h2>
              </div>
              <div className="box-border caret-transparent shrink-0 h-4 w-4">
                <button
                  type="button"
                  aria-label="Close"
                  className="text-neutral-800 items-center bg-transparent caret-transparent flex h-4 justify-center text-center w-4 p-0 rounded-bl rounded-br rounded-tl rounded-tr"
                >
                  <img
                    src="https://c.animaapp.com/mlzh4mmjaX4oGl/assets/icon-45.svg"
                    alt="Icon"
                    className="box-border caret-transparent h-4 w-4"
                  />
                </button>
              </div>
            </header>
            <main className="box-border caret-transparent flex flex-col grow w-full overflow-hidden">
              <div className="box-border caret-transparent shrink-0">
                <div className="bg-sky-100 box-border caret-transparent gap-x-4 flex flex-col gap-y-4 mx-4 p-4 rounded-bl rounded-br rounded-tl rounded-tr">
                  <div className="box-border caret-transparent contents"></div>
                  <div className="items-center box-border caret-transparent flex justify-between">
                    <div className="text-neutral-800 text-sm box-border caret-transparent tracking-[normal] leading-[16.1px]">
                      Free shipping over €39
                    </div>
                    <div className="text-neutral-800 text-sm box-border caret-transparent tracking-[normal] leading-[16.1px]">
                      €39.00 left
                    </div>
                  </div>
                  <div className="relative box-border caret-transparent w-full">
                    <div className="relative bg-stone-200 box-border caret-transparent h-0.5 w-full overflow-hidden rounded-[9999.01px]">
                      <div
                        role="progressbar"
                        aria-label="Free shipping progress"
                        className="absolute bg-neutral-800 box-border caret-transparent h-full w-[0%] rounded-[9999.01px] left-0 top-0"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="box-border caret-transparent flex basis-[0%] flex-col grow justify-between overflow-x-hidden overflow-y-auto">
                <div className="box-border caret-transparent">
                  <div className="items-center box-border caret-transparent flex flex-col justify-center p-8">
                    <h3 className="text-neutral-800 text-2xl box-border caret-transparent tracking-[-0.72px] leading-9 break-words mb-4 md:text-[32px] md:tracking-[-0.96px] md:leading-[48px]">
                      Your cart is empty
                    </h3>
                    <p className="text-neutral-500 text-xl box-border caret-transparent tracking-[-0.4px] leading-7 break-words mb-4">
                      Need help choosing?
                    </p>
                    <a
                      href="https://www.loopearplugs.com/pages/quiz"
                      className="relative text-white text-xl items-center bg-neutral-800 box-border caret-transparent flex justify-center tracking-[-0.6px] leading-[normal] min-h-12 min-w-[122px] px-10 rounded-[9999.01px]"
                    >
                      <span className="box-border caret-transparent block">
                        Take the quiz (1min)
                      </span>
                    </a>
                  </div>
                </div>
                <div className="box-border caret-transparent">
                  <CartUpsell />
                </div>
              </div>
            </main>
            <footer className="border-t-zinc-100 box-border caret-transparent gap-x-0 flex flex-col shrink-0 gap-y-0 border-t border-solid">
              <div className="box-border caret-transparent hidden p-4">
                <div className="text-xl items-center box-border caret-transparent flex justify-between tracking-[normal] pb-4">
                  <div className="box-border caret-transparent">
                    Subtotal
                    <span className="box-border caret-transparent">0</span>
                  </div>
                  <div className="box-border caret-transparent">
                    <div className="items-center box-border caret-transparent flex flex-wrap">
                      <div className="box-border caret-transparent mr-1">
                        <div className="box-border caret-transparent">
                          <span className="text-neutral-800 font-semibold box-border caret-transparent inline-block">
                            €0.00
                          </span>
                        </div>
                        <div className="box-border caret-transparent hidden">
                          <s className="text-neutral-600 font-semibold box-border caret-transparent inline-block line-through mr-1">
                            €0.00
                          </s>
                          <span className="text-rose-700 font-semibold box-border caret-transparent inline-block">
                            €0.00
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="box-border caret-transparent">
                  <form className="box-border caret-transparent">
                    <button
                      type="submit"
                      name="checkout"
                      className="relative text-white text-xl items-center bg-stone-200 caret-transparent inline-flex justify-center tracking-[-0.6px] leading-[normal] min-h-16 min-w-[122px] opacity-50 text-center w-full px-10 py-0 rounded-[9999.01px] md:min-h-20"
                    >
                      <span className="box-border caret-transparent block">
                        {" "}
                        Continue to Checkout{" "}
                      </span>
                      <span className="box-border caret-transparent hidden w-[18px]">
                        <img
                          src="https://c.animaapp.com/mlzh4mmjaX4oGl/assets/icon-15.svg"
                          alt="Icon"
                          className="box-border caret-transparent"
                        />
                      </span>
                    </button>
                  </form>
                </div>
              </div>
              <div className="box-border caret-transparent hidden">
                <div className="box-border caret-transparent">
                  <div className="box-border caret-transparent">
                    <div>
                      <h2>Express checkout</h2>
                      <div>
                        <div>
                          <div>
                            <div name="button-ShopPay"></div>
                          </div>
                        </div>
                        <div>
                          <div>
                            <div name="button-PayPal"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="box-border caret-transparent">
                      <div>
                        <button>
                          <div></div>
                        </button>
                        <div>
                          <img
                            src="https://c.animaapp.com/mlzh4mmjaX4oGl/assets/icon-47.svg"
                            alt="Icon"
                            className="inline-block align-top"
                          />
                        </div>
                      </div>
                       
                    </div>
                    <div className="box-border caret-transparent">
                      <div>
                        <div name="shadow-slot-uid_863a7628e0_mtc6mzu6ndu"></div>
                      </div>
                      <div className="box-border caret-transparent">
                        <div className="relative text-[0px] box-border caret-transparent inline-block h-0 min-h-[25px] min-w-[150px] w-full">
                          <iframe
                            title="PayPal-paypal"
                            className="absolute box-border caret-transparent h-full w-full left-0 top-0"
                          ></iframe>
                          <div className="absolute box-border caret-transparent w-full z-[300] left-0 top-0"></div>
                          <div className="box-border caret-transparent"></div>
                          <iframe
                            name="__detect_close_uid_3dbe119861_mtc6mzu6ndu__"
                            className="absolute box-border caret-transparent hidden h-full w-full left-0 top-0"
                          ></iframe>
                        </div>
                      </div>
                    </div>
                  </div>
                  <small className="text-[12.8px] box-border caret-transparent hidden w-full mt-[12.8px]">
                    {" "}
                    One or more of the items in your cart is a recurring or
                    deferred purchase. By continuing, I agree to the{" "}
                    <span className="box-border caret-transparent underline">
                      cancellation policy
                    </span>
                    and authorize you to charge my payment method at the prices,
                    frequency and dates listed on this page until my order is
                    fulfilled or I cancel, if permitted.{" "}
                  </small>
                </div>
              </div>
            </footer>
          </div>
        </dialog>
      </div>
    </div>
  );
};
