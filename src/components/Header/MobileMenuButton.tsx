import Image from "next/image";
import Sharingan from '../../../public/sharingan.png'

export default function MobileMenuButton({ isOpen, toggle }: { isOpen: boolean; toggle: () => void }) {
  return (
    <div className="flex md:hidden">
      <button
        onClick={toggle}
        type="button"
        className="inline-flex items-center justify-center rounded-full text-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
        aria-expanded={isOpen}
        aria-label="Toggle navigation"
      >
        {isOpen ? (
          <Image src={Sharingan} className="bg-darkPurple rounded-full transition-transform duration-0 animate-spin" alt="mobile-button" width={30} height={30}/>
        ) : (
          <Image src={Sharingan} className="bg-darkPurple rounded-full" alt="mobile-button" width={30} height={30}/>
        )}
      </button>
    </div>
  );
}
