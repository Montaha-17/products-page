
import { Link } from "react-router-dom";
import diamondIcon from "@/assets/icons/diamond.svg";
import cartIcon from "@/assets/icons/shopping-cart.svg";

import { NavItem } from "@/components/layout/NavItem";
import { SearchInput } from "@/components/common/SearchInput";
import { Button } from "@/components/ui/button";

type NavbarProps = {
  search: string;
  onSearchChange: (value: string) => void;
};

export function Navbar({ search, onSearchChange }: NavbarProps) {
  return (
    <nav className="grid grid-cols-2 gap-3 p-3 font-brand sm:grid-cols-[1fr_auto] lg:flex lg:items-center lg:gap-3 lg:px-6 lg:pt-6">

      {/* Logo */}
      <Link
        to="/products"
        className="flex h-[60px] w-full items-center gap-2 rounded-[12px] bg-surface px-6 sm:w-[200px] lg:shrink-0"
      >
        <img
          src={diamondIcon}
          alt=""
          className="h-6 w-6 shrink-0"
        />

        <span className="text-[20px] font-bold leading-none">
          crystal.
        </span>
      </Link>

      {/* Navigation links */}
      <div className="order-3 col-span-2 flex min-w-0 overflow-x-auto rounded-[12px] lg:order-none lg:col-span-1 lg:flex-1 lg:overflow-visible">
        <NavItem label="SHOP" to="/products" />
        <NavItem label="COLLECTIONS" to="/collections" />
        <NavItem label="CONTACT" to="/contact" />
        <NavItem label="ABOUT" to="/about" />
      </div>

      {/* Search */}
      <div className="order-2 col-span-2 min-w-0 sm:order-4 lg:order-none lg:col-span-1 lg:w-[356px] lg:flex-none">
        <SearchInput
          value={search}
          onChange={onSearchChange}
        />
      </div>

      {/* Cart */}
      <Button
        type="button"
        className="order-1 ml-auto flex h-[60px] w-full items-center justify-center gap-2 rounded-[12px] bg-brand-green px-4 font-brand text-sm font-medium text-white hover:bg-brand-green/90 sm:w-[165px] lg:order-none lg:ml-0 lg:shrink-0"
      >
        <img
          src={cartIcon}
          alt=""
          className="h-6 w-6 shrink-0 brightness-0 invert"
        />

        <span>VIEW CART</span>
      </Button>
    </nav>
  );
}
