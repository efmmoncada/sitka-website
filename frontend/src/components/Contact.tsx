"use client";

import { FormEvent, MouseEvent, useMemo, useRef, useState } from "react";

import emailjs from "@emailjs/browser";
import { Button, Input, Textarea, Tooltip } from "@nextui-org/react";
import { FaCircleCheck } from "react-icons/fa6";
import SectionTitle from "./SectionTitle";

export default function Contact() {
  const form = useRef<HTMLFormElement>(document.createElement("form"));
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [submitted, setSubmitted] = useState(false);

  const validateEmail = (value: string) =>
    value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

  const isEmailInvalid = useMemo(() => {
    if (email === "") return false;
    return validateEmail(email) ? false : true;
  }, [email]);

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

      const info = new FormData(form.current).entries();
      console.log(
        new Date().toLocaleString("en-US", { timeZone: "America/Los_Angeles" }),
      );
      console.log("Info collected:", ...info);

      const res = await emailjs.sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      );
      console.log("Email sent successfully!", res.status, res.text);
      form.current.reset();
      setSubmitted(true);
    } catch (e: unknown) {
      console.error(e);
    }
  }

  return (
    <div id="contact" className="scroll-mt-28 px-4 py-10 sm:px-0">
      <SectionTitle>Contact Us</SectionTitle>
      {submitted ? (
        <EmailSendSuccess />
      ) : (
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col items-center gap-4"
        >
          <Input
            name="name"
            type="text"
            label="Your Name"
            variant="bordered"
            value={name}
            onValueChange={setName}
            required
            isRequired
            // errorMessage="Please enter a valid email"
            className="max-w-sm"
          />
          <Input
            name="email"
            type="email"
            label="Your Email"
            autoComplete="email"
            variant="bordered"
            required
            isRequired
            isInvalid={isEmailInvalid}
            errorMessage={isEmailInvalid && "Please enter a valid email"}
            validationBehavior="native"
            onValueChange={setEmail}
            className="max-w-sm"
          />
          <Input
            name="phoneNumber"
            type="tel"
            autoComplete="tel"
            variant="bordered"
            label="Phone Number"
            className="max-w-sm"
          />
          <Textarea
            name="description"
            variant="bordered"
            label="Description of the work you are interested in having done"
            rows={8}
            className="max-w-sm"
          />
          <div className="flex flex-row gap-4">
            <Button onClick={handleClear}>Clear</Button>
            <Tooltip
              isDisabled={name !== "" && email !== ""}
              content="Please fill out all required fields"
            >
              <Button
                isDisabled={name === "" || email === ""}
                color="primary"
                type="submit"
              >
                Submit
              </Button>
            </Tooltip>
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
