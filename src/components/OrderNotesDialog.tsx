export const OrderNotesDialog = () => {
  return (
    <div className="box-border caret-transparent">
      <dialog className="fixed text-black box-border caret-transparent h-[1000px] max-h-[1000px] max-w-full w-full z-[9] ml-0 mt-auto mb-0 p-0 inset-y-0 md:w-[460px] md:ml-auto md:mb-auto">
        <div
          role="document"
          className="box-border caret-transparent flex flex-col h-auto overflow-x-hidden overflow-y-scroll md:h-full"
        >
          <header className="items-center box-border caret-transparent flex w-full p-6">
            <button
              type="button"
              aria-label="Back"
              className="text-neutral-800 items-center bg-transparent caret-transparent gap-x-2 flex h-4 justify-start gap-y-2 text-center w-full p-0 rounded-bl rounded-br rounded-tl rounded-tr"
            >
              <img
                src="https://c.animaapp.com/mlzh4mmjaX4oGl/assets/icon-48.svg"
                alt="Icon"
                className="box-border caret-transparent h-6 w-6"
              />
              Back
            </button>
          </header>
          <div className="box-border caret-transparent grow w-full">
            <div className="box-border caret-transparent gap-x-2 flex flex-col gap-y-2 px-6 py-2">
              <div className="box-border caret-transparent flex justify-between">
                <h2 className="text-neutral-900 text-2xl box-border caret-transparent tracking-[-0.72px] leading-8 break-words">
                  Add gift note
                </h2>
                <p className="text-neutral-500 text-base self-center box-border caret-transparent leading-5 break-words">
                  0/240
                </p>
              </div>
              <p className="box-border caret-transparent leading-6 break-words"></p>
            </div>
          </div>
          <div className="bg-zinc-100 box-border caret-transparent flex flex-col h-full justify-center p-6">
            <div className="box-border caret-transparent">
              <div className="relative box-border caret-transparent block h-fit list-none w-full z-[1] mx-auto">
                <div className="relative items-stretch caret-transparent flex h-full w-full z-[1]">
                  <div className="relative box-border caret-transparent flex basis-[calc(71.4286%_-_4.57143px)] flex-col shrink-0 h-fit justify-center snap-start w-full m-auto">
                    <p className="text-2xl box-border caret-transparent break-words text-center">
                      Front
                    </p>
                    <div className="shadow-[rgba(0,0,0,0.1)_0px_2px_8px_0px] box-border caret-transparent flex flex-col h-[436px] w-full my-4 p-4">
                      <textarea
                        name="order-notes-text"
                        placeholder="Dear Joe & Joanne

 Wishing you a wonderful
 Christmas & new year

 With love,
 The Khans"
                        className="text-neutral-800 text-base italic font-light bg-transparent box-border caret-transparent block h-full leading-6 text-center w-full border-stone-200 overflow-hidden p-8 rounded-bl rounded-br rounded-tl rounded-tr font-bespokeserif"
                      ></textarea>
                    </div>
                  </div>
                  <div className="relative box-border caret-transparent flex basis-[calc(71.4286%_-_4.57143px)] flex-col shrink-0 h-fit justify-center snap-start w-full m-auto">
                    <p className="text-2xl box-border caret-transparent break-words text-center">
                      Back
                    </p>
                    <div className="items-center shadow-[rgba(0,0,0,0.1)_0px_2px_8px_0px] box-border caret-transparent flex h-[436px] justify-center w-full overflow-hidden my-4">
                      <img
                        src="https://www.loopearplugs.com/cdn/shop/files/Print_Front.jpg?v=1764333213&width=2544"
                        alt="This image will be printed on the card: A snowy landscape with Christmas trees and text overlay 'Something small, From me to You'. "
                        className="aspect-[auto_2544_/_3744] box-border caret-transparent h-full max-w-full object-cover w-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-neutral-600 text-xs box-border caret-transparent leading-4 break-words text-center">
                Write your note as you&#39;d like it to appear on the card.  
                <span className="box-border caret-transparent break-words">
                  No emojis or special characters allowed.
                </span>
              </p>
            </div>
          </div>
          <footer className="border-t-zinc-100 box-border caret-transparent gap-x-4 flex flex-col gap-y-4 px-4 py-6 border-t border-solid">
            <button className="relative text-white items-center bg-stone-200 caret-transparent flex justify-center leading-[normal] min-h-16 min-w-[122px] opacity-50 text-center px-10 py-0 rounded-[9999.01px]">
              <span className="box-border caret-transparent block">
                {" "}
                Save and continue{" "}
              </span>
              <span className="box-border caret-transparent hidden w-[18px]">
                <img
                  src="https://c.animaapp.com/mlzh4mmjaX4oGl/assets/icon-15.svg"
                  alt="Icon"
                  className="box-border caret-transparent"
                />
              </span>
            </button>
          </footer>
        </div>
      </dialog>
    </div>
  );
};
