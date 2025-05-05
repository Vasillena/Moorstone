import { JSX } from "react";
import MainButton from "../components/Common/MainButton";

export const metadata = {
  title: "Error | moorstone.uk",
  description: "Error",
};

export default async function FormFailedPage(): Promise<JSX.Element> {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <div className="flex flex-col gap-[32px] row-start-2 items-center">
        <h2 className="text-lg sm:text-2xl font-bold mt-16">
          Something went wrong, please try again!
        </h2>
        <div className="my-16">
          <MainButton href={"/"} text={"Home page"} />
        </div>
      </div>
    </div>
  );
}
