'use client';

import { MouseEvent } from 'react';

import SectionTitle from './SectionTitle';

export default function Contact() {
  function handleClear(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
  }

  return (
    <div id="contact">
      <SectionTitle>Contact Us</SectionTitle>

      <form action="/api/contact" method="post" className="flex flex-col items-center">
        <div className="mx-auto flex w-1/4 flex-col font-serif">
          <label>
            Your Name
            <input
              className="my-4 block w-full border-2"
              type="text"
              autoComplete="name"
              required
            />
          </label>
          <label>
            Email
            <input
              className="my-4 block w-full border-2"
              type="email"
              autoComplete="email"
              required
            />
          </label>
          <label>
            Phone Number
            <input className="my-4 block w-full border-2" type="tel" autoComplete="tel" />
          </label>
          <label>
            Description of the work you're interested in having done
            <textarea className="my-4 block w-full border-2" rows={8} />
          </label>
        </div>

        <div className="flex flex-row">
          <button
            onClick={handleClear}
            className="w-20 mr-2 border-2 border-black bg-white p-2 inline hover:scale-105 hover:shadow-md"
          >
            Clear
          </button>
          <button className="w-20 ml-2 bg-black p-2 text-white inline hover:scale-105 hover:shadow-md" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
