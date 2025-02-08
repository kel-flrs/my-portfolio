import { NavItem } from "./NavBar";
import { ReactElement } from "react";

interface NavLinkProps extends NavItem {
  className?: string;
  mobile?: boolean;
}

export default function NavLink({ href = "", label = "", className = "", mobile = false }): ReactElement<NavLinkProps> {
  return (
    <a
      href={href}
      className={`${className} ${
        mobile ? "block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium hover:bg-white hover:border-white" : "hover:text-white"
      } text-white hover:text-darkPurple transition-all delay-75 ease-in-out`}
    >
      {label}
    </a>
  );
}
