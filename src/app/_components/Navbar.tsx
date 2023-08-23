import Image from 'next/image';

import logo from '../../../public/logo.png';

export default function Navbar() {
  return (
    <nav className="sticky top-0 flex items-center justify-between bg-white py-1 text-2xl">
      <div className="flex items-center">
        <a href="/">
          <Image className="w-36" src={logo} alt="logo" />
        </a>
        <a href="/">Sitka Renovations LLC</a>
      </div>
      <div className="text-xl">
        <ul className="flex">
          <li className="mx-6">
            <a href="/showcase">Showcase</a>
          </li>
          <li className="mx-6">
            <a href="/#contact">Contact Us</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
