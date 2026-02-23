import { Navbar } from "@/sections/Header/components/Navbar";

type HeaderProps = {
  onOpenCart: () => void;
};

export const Header = ({ onOpenCart }: HeaderProps) => {
  return (
    <div className="box-border caret-transparent z-[12]">
      <img
        src="https://c.animaapp.com/mlzh4mmjaX4oGl/assets/icon-4.svg"
        alt="Icon"
        className="box-border caret-transparent hidden"
      />
      <div className="relative bg-fixed bg-white box-border caret-transparent block">
        <Navbar onOpenCart={onOpenCart} />
      </div>
    </div>
  );
};
