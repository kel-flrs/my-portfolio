import { NAV_ITEMS } from "./NavBar";
import NavLink from "./NavLink";

export default function MobileMenu({ isOpen, toggle }: { isOpen: boolean; toggle: () => void }) {
  return (
    <button className="w-full bg-darkGray" onClick={toggle}>
      <div className={`bg-darkGray ${isOpen ? "block" : "hidden"} sm:hidden`}>
        <div className="pt-2 pb-4 space-y-1">
          {NAV_ITEMS.map((item) => (
            <NavLink key={item.href} mobile {...item} className="hover:bg-white/10" />
          ))}
        </div>
      </div>
    </button>
  );
}
