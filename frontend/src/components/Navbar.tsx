"use client";
import Image from "next/image";

import logo from "../../public/logo.png";
import { FaBars } from "react-icons/fa6";
import { useRef, useState } from "react";
import useScreeSize from "@/hooks/useScreenSize";
import { BusinessInfo } from "@payload-types/payload-types";

type Props = Pick<BusinessInfo, "businessName">;

export default function Navbar({ businessName }: Props) {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const navRef = useRef<HTMLElement>(document.createElement("nav"));
  const { width } = useScreeSize();

  function toggleMobileMenu() {
    setShowMobileMenu((prev) => !prev);
  }

  return (
    <nav
      ref={navRef}
      className="sticky top-0 z-10 flex items-center justify-between bg-white py-4 font-serif text-2xl"
    >
      <div className="flex items-center text-lg sm:text-2xl lg:text-3xl">
        <a href="/">
          <Image className="w-36" src={logo} alt="logo" />
        </a>
        <a href="/">{businessName}</a>
      </div>
      <div className="text-center text-xl">
        {width > 680 ? (
          <NavStructure ulClassNames="flex" liClassNames="mx-6" />
        ) : (
          <button onClick={toggleMobileMenu} className="mr-3">
            <FaBars />
            <div className={`absolute bg-white`}></div>
          </button>
        )}
      </div>
      {showMobileMenu && (
        <NavStructure
          ulClassNames={`absolute bg-white w-full pb-4 `}
          liClassNames="text-lg pl-4 text-center"
          offset={navRef.current.offsetHeight}
        />
      )}
    </nav>
  );
}

function NavStructure({
  ulClassNames,
  liClassNames,
  offset = 0,
}: {
  ulClassNames: string;
  liClassNames: string;
  offset?: number;
}) {
  return (
    <ul
      className={ulClassNames}
      style={{
        top: `${offset}px`,
      }}
    >
      <li className={liClassNames}>
        <a href="/showcase">Showcase</a>
      </li>
      <li className={liClassNames}>
        <a href="/#contact">Contact Us</a>
      </li>
    </ul>
  );
}
