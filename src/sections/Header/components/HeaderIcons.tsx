export const HeaderIcons = () => {
  return (
    <div className="box-border caret-transparent flex col-end-[icons] col-start-[icons] row-end-[icons] row-start-[icons] justify-self-end">
      <button className="items-center bg-transparent caret-transparent flex text-center w-7 mx-2.5 p-0">
        <img
          src="https://flagsapi.com/NL/flat/64.png"
          alt="NL Flag"
          className="aspect-[auto_64_/_64] box-border caret-transparent max-w-full w-full"
        />
      </button>
      <a
        href="https://www.loopearplugs.com/account/login"
        className="text-neutral-900 items-center box-border caret-transparent hidden min-h-0 min-w-0 underline-offset-[3px] p-3 md:flex md:min-h-[auto] md:min-w-[auto]"
      >
        <span className="box-border caret-transparent inline min-h-0 min-w-0 underline-offset-[3px] md:block md:min-h-[auto] md:min-w-[auto]">
          Account
        </span>
      </a>
      <a
        href="https://www.loopearplugs.com/cart"
        role="button"
        className="relative text-neutral-900 items-center box-border caret-transparent flex underline-offset-[3px] p-3"
      >
        <img
          src="https://c.animaapp.com/mlzh4mmjaX4oGl/assets/icon-12.svg"
          alt="Icon"
          className="box-border caret-transparent h-8 w-8"
        />
        <span className="absolute text-white text-sm items-center bg-rose-700 box-border caret-transparent flex h-[19px] justify-center left-[calc(100%_-_20px)] leading-[19px] min-w-[15px] text-center underline-offset-[3px] w-[19px] rounded-[25px] top-[8.5008px]">
          0
        </span>
      </a>
    </div>
  );
};
