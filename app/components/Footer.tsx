"use client";

import Image from "next/image";
import { JSX } from "react";
import logo from "@/public/logo-2.svg";

// import Link from "next/link";

// import logoSavy from "@/public/savy.svg";

export default function Footer(): JSX.Element {
  return (
    <footer className="max-w-screen py-40 bg-white rounded-t-4xl text-black">
      <div
        className="max-w-[1440px] mx-auto flex flex-col
 items-center"
      >
        <Image
          src={logo}
          alt="Logo"
          priority
          style={{
            width: "205px",
            height: "auto",
          }}
        />
        <div className="w-[80vw] py-12 flex flex-col gap-2 border-b border-[#81914E] text-center">
          <p className="font-light">
            We&apos;re currently working on our website, and it will be live
            soon.
          </p>
          <p className="font-bold">Stay tuned for updates!</p>
        </div>
      </div>
    </footer>
  );
}
