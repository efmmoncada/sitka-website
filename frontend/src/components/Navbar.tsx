"use client";
import Image from "next/image";
import { useState } from "react";
import { BusinessInfo } from "@payload-types/payload-types";
import {
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import logo from "../../public/logo.png";

type Props = Pick<BusinessInfo, "businessName">;

export default function Nav({ businessName }: Props) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const MenuItems = [
    { title: "Showcase", href: "/showcase" },
    { title: "Contact Us", href: "#contact" },
  ];

  return (
    <Navbar
      classNames={{
        wrapper: "justify-end",
        brand: "justify-self-start",
        menu: "!h-min p-3",
      }}
      onMenuOpenChange={setIsMobileMenuOpen}
      maxWidth="2xl"
      isBordered={true}
      isMenuOpen={isMobileMenuOpen}
    >
      <NavbarContent>
        <NavbarBrand>
          <a href="/" className="inline text-xl sm:text-2xl">
            <Image className="inline w-36" src={logo} alt="logo" />
          </a>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent justify="center">
        <a href="/" className="inline text-xl sm:text-2xl">
          {businessName}
        </a>
      </NavbarContent>
      <NavbarContent justify="end" className="hidden sm:flex">
        <NavbarItem>
          <Link className="text-black text-xl" href="/showcase">
            Showcase
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-black text-xl" href="#contact">
            Contact Us
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end" className="sm:hidden">
        <NavbarMenuToggle
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>
      <NavbarMenu>
        {MenuItems.map(({ title, href }, i) => (
          <NavbarMenuItem key={i}>
            <Link className="text-black text-lg" href={href}>
              {title}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
