"use client";

import FooterForm from "./components/FooterForm";
import Image from "next/image";
import hero from "@/public/hero.png";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center">
        <Image
          src={hero}
          alt="Hero"
          priority
          style={{
            width: "1040px",
            height: "auto",
          }}
        />
        <h1 className="text-5xl">Get In Touch</h1>
        <FooterForm />
      </main>
    </div>
  );
}
