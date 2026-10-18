
import { NavLink } from "react-router-dom";

type NavItemProps = {
  label: string;
  to: string;
};

export function NavItem({ label, to }: NavItemProps) {
  return (
    <NavLink
      to={to}
      className="relative flex h-[60px] min-w-[110px] shrink-0 items-center justify-center rounded-[12px] bg-surface px-3 text-center text-xs font-normal text-brand-text lg:min-w-0 lg:flex-1"
    >
      {({ isActive }) => (
        <>
          <span>{label}</span>

          {isActive && (
            <span className="absolute bottom-3 h-1 w-1 rounded-full bg-black" />
          )}
        </>
      )}
    </NavLink>
  );
}
