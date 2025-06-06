"use client";

import { JSX, useCallback, useEffect, useRef, useState } from "react";

import Image from "next/image";
import logo from "@/public/logo.svg";
import { usePathname } from "next/navigation";

// import Link from "next/link";

// import { motion } from "framer-motion";

// import close from "@/public/close.svg";

// import menu from "@/public/menu.svg";

// import MainNav from "./MainNav";

export default function Navbar(): JSX.Element {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  const closeMenu = useCallback(() => {
    setOpen(false);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        closeMenu();
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [closeMenu, open]);

  useEffect(() => {
    closeMenu();
  }, [closeMenu, pathname]);

  return (
    <div className="max-w-screen">
      <div className="max-w-screen fixed top-0 left-0 right-0 mx-auto z-50 bg-[#00140b] border-b border-[#F0EDEE]">
        <div className="max-w-[1024px] px-4 xl:px-0 mx-auto flex py-3 justify-center items-center">
          {/* <MainNav>
            <Link href="/" className="ml-4 flex lg:ml-0 lg:mr-6 px-5">
              <Image
                src={logo}
                alt="Logo"
                priority
                className="w-10 h-auto"
                style={{
                  filter:
                    theme === "dark" ? "invert(1) brightness(2)" : undefined,
                }}
              />
            </Link>
          </MainNav> */}
          <Image src={logo} alt="Logo" priority className="w-40 h-auto" />
        </div>
      </div>
    </div>
  );
}
