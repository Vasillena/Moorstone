/* eslint-disable @typescript-eslint/no-explicit-any */

import { JSX } from "react";

export default function FooterForm(): JSX.Element {
  async function handleSubmit(e: any) {
    e.preventDefault();
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "24c702b7-d47b-4e0a-91de-83216deae17c",
        name: e.target.name.value,
        email: e.target.email.value,
        message: e.target.message.value,
        apikey: "24c702b7-d47b-4e0a-91de-83216deae17c",
        redirect: "https://moorstone.vercel.app/thank-you",
      }),
    });
    const result = await response.json();
    if (result.success) {
      window.location.href = "https://moorstone.vercel.app/thank-you";
      console.log(result);
    } else {
      console.error("Form submission failed:", result);
      window.location.href = "https://moorstone.vercel.app/form-failed";
    }
  }

  return (
    <div className="mt-3 flex flex-col items-center lg:items-start">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5">
          <div className="relative">
            <input
              type="text"
              id="name"
              name="name"
              aria-label="Full Name"
              required
              className="block px-2.5 pb-1.5 pt-3 w-[340px] md:w-[740px] bg-[#004225] rounded-full appearance-none focus:outline-none focus:ring-0 peer"
              placeholder=""
            />
            <label
              htmlFor="name"
              className="absolute text-#81914E duration-300 transform -translate-y-5 sm:-translate-y-4 scale-75 top-2 z-10 origin-[0] bg-transparent px-2 peer-focus:px-2 peer-focus:text-[#edf8ca] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-5 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
            >
              Name
            </label>
          </div>
          <div className="relative">
            <input
              type="email"
              id="email"
              name="email"
              aria-label="Email"
              required
              className="block px-2.5 pb-1.5 pt-3 w-[340px] md:w-[740px] bg-[#004225] rounded-full appearance-none focus:outline-none focus:ring-0 peer"
              placeholder=""
            />
            <label
              htmlFor="name"
              className="absolute text-#81914E duration-300 transform -translate-y-5 sm:-translate-y-4 scale-75 top-2 z-10 origin-[0] bg-transparent px-2 peer-focus:px-2 peer-focus:text-[#edf8ca] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-5 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
            >
              Email address
            </label>
          </div>

          <div className="relative">
            <textarea
              id="message"
              name="message"
              aria-label="Message"
              cols={50}
              rows={4}
              placeholder=""
              required
              className="block px-2.5 pb-1.5 pt-3 w-[340px] md:w-[740px] bg-[#004225] rounded-2xl  appearance-none focus:outline-none focus:ring-0 peer resize-none"
            />
            <label
              htmlFor="message"
              className="absolute duration-300 transform -translate-y-5 sm:-translate-y-4 scale-75 top-2 z-10 origin-[0] bg-transparent px-2 peer-focus:px-2 peer-focus:text-[#edf8ca] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-6 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-5 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
            >
              Your project description
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="checkbox"
              name="checkbox"
              type="checkbox"
              aria-label="Terms and Conditions"
              required
              className="w-4 h-4 bg-[#00140b] border-[#C4DD80] rounded accent-[#F2EEE9] "
            />
            <label htmlFor="link-checkbox" className="ms-2">
              I agree to the processing of personal data.
            </label>
          </div>
          <div>
            <button
              type="submit"
              className="w-[340px] md:w-[740px] px-11 py-3 bg-[#C4DD80] text-black font-medium rounded-full relative flex   items-center justify-center overflow-hidden  transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-[#004225]  before:duration-500 before:ease-out hover:shadow-2xl hover:shadow-[#004225] hover:text-[#F2EEE9]  hover:before:h-56 hover:before:w-[740px]"
            >
              <span className="relative z-10"> Send message</span>
            </button>
          </div>

          <div>
            <label htmlFor="email" />
            <input
              type="hidden"
              name="apikey"
              value="24c702b7-d47b-4e0a-91de-83216deae17c"
            />
            <input
              type="hidden"
              name="redirect"
              value="https://moorstone.vercel.app/thank-you"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
