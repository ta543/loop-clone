export const MobileMenuButton = () => {
  return (
    <div className="box-border caret-transparent block justify-self-start min-h-[auto] min-w-[auto] -ml-3 md:hidden md:min-h-0 md:min-w-0">
      <details className="box-border caret-transparent flex">
        <summary
          aria-label="Menu"
          role="button"
          className="text-neutral-900 text-sm box-border caret-transparent h-[34px] list-none min-h-[auto] min-w-[auto] underline underline-offset-[3px] w-11 md:min-h-0 md:min-w-0"
        >
          <span className="items-center box-border caret-transparent flex h-full justify-center underline-offset-[3px]">
            <img
              src="https://c.animaapp.com/mlzh4mmjaX4oGl/assets/icon-5.svg"
              alt="Icon"
              className="absolute box-border caret-transparent h-5 w-5"
            />
          </span>
        </summary>
      </details>
    </div>
  );
};
