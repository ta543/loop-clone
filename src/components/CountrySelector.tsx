export const CountrySelector = () => {
  return (
    <div className="relative box-border caret-transparent hidden z-[10000000]">
      <div className="fixed backdrop-blur-sm box-border caret-transparent flex flex-col justify-end z-[10000000] overflow-visible inset-0 md:justify-center md:overflow-auto">
        <div
          role="dialog"
          className="items-center box-border caret-transparent flex h-[1000px] justify-center w-screen md:[align-items:normal] md:block md:h-auto md:justify-normal md:w-auto"
        >
          <div className="fixed text-black text-sm bg-white shadow-[rgba(0,0,0,0.2)_0px_26px_80px_0px] box-border caret-transparent flex flex-col h-fit max-h-[1000px] max-w-none min-h-[230px] w-[95%] m-auto bottom-auto inset-x-auto md:relative md:h-auto md:max-h-[900px] md:max-w-[490px] md:w-full md:my-8 md:bottom-0 md:inset-x-0">
            <form className="box-border caret-transparent z-[2]">
              <div className="box-border caret-transparent gap-x-0 grid-cols-[1fr_0.3fr] grid-rows-[1fr] gap-y-0">
                <div className="box-border caret-transparent col-end-2 col-start-1 row-end-2 row-start-1">
                  <div className="relative bg-no-repeat bg-cover box-border caret-transparent h-[35px] outline-black/10 -outline-offset-1 outline outline-1 w-[46.6px] overflow-clip bg-center mt-[21px] mb-auto mx-auto"></div>
                  <div className="items-start box-border caret-transparent flex shrink-0 p-3.5 md:pt-[21px] md:pb-0 md:px-[21px]">
                    <div className="box-border caret-transparent flex basis-[0%] grow break-words align-middle">
                      <span
                        role="heading"
                        className="text-xl font-normal box-border caret-transparent block leading-[35px] break-words"
                      >
                        Are you in the right place?
                      </span>
                    </div>
                    <button
                      aria-label="Close"
                      type="button"
                      className="relative self-center bg-transparent caret-transparent block text-center w-fit bg-[position:0px_0px] p-[7px] right-0 top-0 after:accent-auto after:bottom-[-0.994px] after:box-border after:caret-transparent after:text-black after:block after:text-sm after:not-italic after:normal-nums after:font-medium after:left-[-0.994px] after:tracking-[-0.6px] after:leading-[30px] after:list-outside after:list-disc after:pointer-events-none after:absolute after:right-[-0.994px] after:text-center after:indent-[0px] after:normal-case after:top-[-0.994px] after:visible after:z-[1] after:rounded-[6.594px] after:border-separate after:font-avantt"
                    >
                      <span className="text-white box-border caret-transparent block h-4 max-h-full max-w-full w-4 m-auto">
                        <span className="absolute box-border caret-transparent block h-[1.4px] text-nowrap w-[1.4px] overflow-hidden"></span>
                        <img
                          src="https://c.animaapp.com/mlzh4mmjaX4oGl/assets/icon-1.svg"
                          alt="Icon"
                          className="relative box-border caret-transparent w-full"
                        />
                      </span>
                    </button>
                  </div>
                  <div className="box-border caret-transparent flex grow overflow-x-hidden overflow-y-auto w-full">
                    <div className="box-border caret-transparent max-w-full w-full px-3.5 md:px-[21px]">
                      <p className="box-border caret-transparent max-w-full break-words w-full my-3.5">
                        Please select your shipping country.
                      </p>
                      <div className="text-xs box-border caret-transparent leading-[15px] max-w-full w-full mb-3">
                        <p className="box-border caret-transparent break-words my-3">
                          Buy from the country of your choice. Remember that we
                          can only ship your order to addresses located in the
                          chosen country.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="static box-border caret-transparent block max-w-full w-full pb-[10.5px] px-3.5 md:relative md:flex md:px-[21px]">
                    <div className="relative box-border caret-transparent basis-[140px] grow">
                      <span className="text-[10.0002px] box-border caret-transparent block">
                        Country
                      </span>
                      <button
                        type="button"
                        name="md-form__select__country__button"
                        role="combobox"
                        className="font-normal bg-transparent bg-[url(data:image/svg+xml,<svg%20width=\%2220\%22%20height=\%2220\%22%20viewBox=\%220%200%2020%2020\%22%20fill=\%22%23000000\%22%20xmlns=\%22http://www.w3.org/2000/svg\%22><path%20fill-rule=\%22evenodd\%22%20clip-rule=\%22evenodd\%22%20d=\%22M10%2014.0002C9.74401%2014.0002%209.48801%2013.9023%209.29301%2013.7073L4.29301%208.70725C3.90201%208.31625%203.90201%207.68425%204.29301%207.29325C4.68401%206.90225%205.31601%206.90225%205.70701%207.29325L10%2011.5862L14.293%207.29325C14.684%206.90225%2015.316%206.90225%2015.707%207.29325C16.098%207.68425%2016.098%208.31625%2015.707%208.70725L10.707%2013.7073C10.512%2013.9023%2010.256%2014.0002%2010%2014.0002Z\%22%20fill=\%22%23000000\%22/></svg>)] bg-no-repeat caret-transparent block h-12 text-left capitalize w-full border bg-[position:calc(100%_-_6px)_50%] pl-[10.5px] pr-[31.5px] py-[5.25px] border-solid md:h-10"
                      >
                        <div className="items-center box-border caret-transparent gap-x-[5.25px] flex">
                          <div className="box-border caret-transparent">
                            <div className="relative items-center box-border caret-transparent flex h-6 justify-center outline-black/10 -outline-offset-1 outline outline-1 w-8 overflow-clip">
                              <div className="bg-[url('https://cdn.shopify.com/static/images/flags/se.svg')] box-border caret-transparent h-full min-h-px object-cover w-full"></div>
                            </div>
                          </div>
                          <span className="box-border caret-transparent block tracking-[normal] leading-[normal] text-nowrap">
                            Sverige / Sweden (kr)
                          </span>
                          <input
                            placeholder="Country"
                            type="text"
                            aria-label="Search and Enter"
                            role="combobox"
                            className="box-border caret-transparent hidden normal-case w-full p-0"
                          />
                        </div>
                      </button>
                    </div>
                    <div className="relative box-border caret-transparent basis-[140px] grow ml-0 mt-[7px] md:ml-3.5 md:mt-0">
                      <span className="text-[10.0002px] box-border caret-transparent block">
                        Language
                      </span>
                      <button
                        type="button"
                        name="md-form__select__language__button"
                        role="combobox"
                        className="font-normal bg-transparent bg-[url(data:image/svg+xml,<svg%20width=\%2220\%22%20height=\%2220\%22%20viewBox=\%220%200%2020%2020\%22%20fill=\%22%23000000\%22%20xmlns=\%22http://www.w3.org/2000/svg\%22><path%20fill-rule=\%22evenodd\%22%20clip-rule=\%22evenodd\%22%20d=\%22M10%2014.0002C9.74401%2014.0002%209.48801%2013.9023%209.29301%2013.7073L4.29301%208.70725C3.90201%208.31625%203.90201%207.68425%204.29301%207.29325C4.68401%206.90225%205.31601%206.90225%205.70701%207.29325L10%2011.5862L14.293%207.29325C14.684%206.90225%2015.316%206.90225%2015.707%207.29325C16.098%207.68425%2016.098%208.31625%2015.707%208.70725L10.707%2013.7073C10.512%2013.9023%2010.256%2014.0002%2010%2014.0002Z\%22%20fill=\%22%23000000\%22/></svg>)] bg-no-repeat caret-transparent block h-12 text-left capitalize w-full border bg-[position:calc(100%_-_6px)_50%] pl-[10.5px] pr-[31.5px] py-[5.25px] border-solid md:h-10"
                      >
                        <div className="items-center box-border caret-transparent gap-x-[5.25px] flex">
                          <span className="box-border caret-transparent block tracking-[normal] leading-[normal]">
                            English
                          </span>
                        </div>
                      </button>
                    </div>
                  </div>
                  <div className="relative box-border caret-transparent min-h-14 w-full pt-[10.5px] pb-3.5 px-3.5 right-auto bottom-auto md:static md:pt-[17.5px] md:pb-0 md:px-[21px] md:right-0 md:bottom-0">
                    <div className="box-border caret-transparent max-w-full text-end w-full">
                      <button
                        type="submit"
                        className="relative text-white items-center bg-black caret-transparent inline-flex justify-center leading-[14px] min-h-[42px] min-w-[42px] text-center w-full px-[16.8px] py-[8.4px] rounded-[5.6px] md:w-auto"
                      >
                        Shop now
                      </button>
                    </div>
                  </div>
                </div>
                <div className="box-border caret-transparent col-end-3 col-start-2 row-end-2 row-start-1"></div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="fixed bg-black/50 box-border caret-transparent z-[9998] inset-0"></div>
    </div>
  );
};
