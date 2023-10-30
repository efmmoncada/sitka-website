'use client';

import { FormEvent, MouseEvent, useRef } from 'react';

import SectionTitle from './SectionTitle';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef<HTMLFormElement>();

  function handleClear(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    form.current.reset();
  }

  async function sendEmail(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const serviceId = 'contact_sitka';
    const templateId = 'template_m52bspz';
    const publicKey = 'hE_yJy9PhZslsoJhL';

    try {
      const res = await emailjs.sendForm(serviceId, templateId, form.current, publicKey);
      console.log('Email sent successfully!', res.status, res.text);
      form.current.reset();
    } catch (e: unknown) {
      console.log(e);
    }
  }

  return (
    <div id="contact">
      <SectionTitle>Contact Us</SectionTitle>

      <form ref={form} onSubmit={sendEmail} className="flex flex-col items-center">
        <div className="mx-auto flex w-1/4 flex-col font-serif">
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
            Description of the work you're interested in having done
            <textarea className="my-4 block w-full border-2" rows={8} name="description" />
          </label>
        </div>

        <div className="flex flex-row">
          <button
            onClick={handleClear}
            className="mr-2 inline w-20 border-2 border-black bg-white p-2 hover:scale-105 hover:shadow-md"
          >
            Clear
          </button>
          <button
            className="ml-2 inline w-20 bg-black p-2 text-white hover:scale-105 hover:shadow-md"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
