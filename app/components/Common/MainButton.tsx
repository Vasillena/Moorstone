import { JSX } from "react";
import Link from "next/link";

interface MainButtonProps {
  href: string;
  text: string;
}

export default function MainButton({
  href,
  text,
}: MainButtonProps): JSX.Element {
  return (
    <Link
      href={href}
      className=" px-16 py-3 bg-[#C4DD80] text-black font-medium rounded-full relative flex   items-center justify-center overflow-hidden  transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-[#004225]  before:duration-500 before:ease-out hover:shadow-2xl hover:shadow-[#004225] hover:text-[#F2EEE9]  hover:before:h-56 hover:before:w-[420px]"
    >
      <span className="z-10">{text}</span>
    </Link>
  );
}
