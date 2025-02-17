import { NavItem } from "./NavBar";
import { ReactElement } from "react";

interface NavLinkProps extends NavItem {
  className?: string;
  mobile?: boolean;
}

export default function NavLink({ href = "", label = "", className = "" }): ReactElement<NavLinkProps> {
  return (
    <a
      href={href}
      className={`${className} rounded-md px-3 py-2 text-sm font-medium hover:text-darkPurple transition-all delay-75 ease-in-out`}
    >
      {label}
    </a>
  );
}
