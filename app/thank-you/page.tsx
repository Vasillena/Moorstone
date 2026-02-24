import { JSX } from "react";
import MainButton from "../components/Common/MainButton";

export const metadata = {
  title: "Thank You | moorstone.uk",
  description: "Thank You",
};

export default async function ThankYouPage(): Promise<JSX.Element> {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <div className="flex flex-col gap-[32px] row-start-2 items-center">
        <h1 className="text-xl sm:text-7xl">Thank you!</h1>
        <h2 className="text-lg sm:text-2xl font-bold text-center mt-16">
          Your message has been sent successfully. We will contact you as soon as
          possible. Thank you for contacting us!
        </h2>
        <div className="my-16">
          <MainButton href={"/"} text={"Home page"} />
        </div>
      </div>
    </div>
  );
}
