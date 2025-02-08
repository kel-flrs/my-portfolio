import React, { useState, useEffect } from "react";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import MobileMenuButton from "./MobileMenuButton";
import NavLink from "./NavLink";
import Image from "next/image";
import Logo from "../../../public/logo.png";

export interface NavItem {
  href: string;
  label: string;
}

export const NAV_ITEMS: NavItem[] = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Work Experience"},
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
];

export default function NavBar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const handleScroll = () => {
    const position = window.scrollY;
    if (position === 0) {
      setIsScrolled(false);
    }
    if (position > 80) {
      setIsScrolled(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log("toggle called...");
  };

  return (
    <nav className={`fixed z-50 bg-darkGray h-16 w-full mx-auto transition-all delay-75 ease-linear ${isScrolled ? "shadow-md" : "shadow-none"}`}>
      {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> */}
      <div className={`flex justify-between items-center h-full transition-all delay-75 ease-linear p-7 ${isScrolled ? "md:px-7 md:py-8" : "md:px-14 md:py-10"}`}>
        {/* Logo Section */}
        <Link href="#home" className="text-lg font-semibold text-white hover:text-white/80 transition-colors">
          <Image src={Logo} alt="logo" className="transition-all delay-75 ease-linear" width={isScrolled ? 100 : 120} />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden sm:flex sm:space-x-8 sm:items-center">
          {NAV_ITEMS.map((item) => (
            <NavLink key={item.href} {...item} />
          ))}
        </div>

        {/* Mobile Menu Button */}
        <MobileMenuButton isOpen={isOpen} toggle={toggleMenu} />
      </div>
      {/* </div> */}

      {/* Mobile Navigation */}
      <MobileMenu isOpen={isOpen} toggle={toggleMenu} />
    </nav>
  );
}
