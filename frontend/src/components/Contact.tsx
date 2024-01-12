"use client";

import { FormEvent, MouseEvent, useRef, useState } from "react";

import SectionTitle from "./SectionTitle";
import emailjs from "@emailjs/browser";
import { FaCircleCheck } from "react-icons/fa6";

export default function Contact() {
  const form = useRef<HTMLFormElement>(document.createElement("form"));
  const [submitted, setSubmitted] = useState(false);

  function handleClear(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    form.current?.reset();
  }

  async function sendEmail(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      if (!form.current) throw new Error("Form is not defined");
      if (
        !(
          process.env.NEXT_PUBLIC_SERVICE_ID &&
          process.env.NEXT_PUBLIC_TEMPLATE_ID &&
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
        )
      )
        throw new Error("emailjs env vars not defined");

      const res = await emailjs.sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );
      console.log("Email sent successfully!", res.status, res.text);
      form.current.reset();
      setSubmitted(true);
    } catch (e: unknown) {
      console.error(e);
    }
  }

  return (
    <div id="contact" className="scroll-mt-28">
      <SectionTitle>Contact Us</SectionTitle>
      {submitted ? (
        <EmailSendSuccess />
      ) : (
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col items-center"
        >
          <div className="mx-auto flex flex-col px-4 font-serif">
            <label>
              Your Name
              <input
                className="my-4 block w-full border-2"
                type="text"
                autoComplete="name"
                required
                name="name"
              />
            </label>
            <label>
              Email
              <input
                className="my-4 block w-full border-2"
                type="email"
                autoComplete="email"
                required
                name="email"
              />
            </label>
            <label>
              Phone Number
              <input
                className="my-4 block w-full border-2"
                type="tel"
                autoComplete="tel"
                name="phoneNumber"
              />
            </label>
            <label>
              Description of the work you&apos;re interested in having done
              <textarea
                className="my-4 block w-full border-2"
                rows={8}
                name="description"
              />
            </label>
          </div>

          <div className="flex flex-row gap-4">
            <button
              onClick={handleClear}
              className="w-20 bg-black p-2 text-white hover:scale-105 hover:shadow-md"
            >
              Clear
            </button>
            <button
              className="w-20 bg-[#d51d25] p-2 text-white hover:scale-105 hover:shadow-md"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

function EmailSendSuccess() {
  return (
    <div className="grid min-w-full place-items-center gap-7 py-6">
      <FaCircleCheck size={56} />
      <h4 className="text-xl">
        Thank you, your message has been sent successfully, we will be reaching
        out soon!
      </h4>
    </div>
  );
}
