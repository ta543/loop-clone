import { MobileMenuButton } from "@/sections/Header/components/MobileMenuButton";
import { Logo } from "@/components/Logo";
import { DesktopNav } from "@/sections/Header/components/DesktopNav";
import { HeaderIcons } from "@/sections/Header/components/HeaderIcons";

type NavbarProps = {
  onOpenCart: () => void;
};

export const Navbar = ({ onOpenCart }: NavbarProps) => {
  return (
    <header className="items-center box-border caret-transparent gap-x-[normal] grid [grid-template-areas:'left-icon_heading_icons'] grid-cols-[1fr_2fr_1fr] justify-normal w-full mx-auto px-4 md:max-w-[1360px] md:gap-x-0 md:flex md:justify-between md:px-0">
      <MobileMenuButton />
      <Logo />
      <DesktopNav />
      <HeaderIcons onOpenCart={onOpenCart} />
    </header>
  );
};
