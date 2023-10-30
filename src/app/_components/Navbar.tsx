import Image from 'next/image';
import { type } from 'os';

import logo from '../../../public/logo.png';

type Props = {
  businessName: string;
};

export default async function Navbar({ businessName }: Props) {
  return (
    <nav className="sticky top-0 flex items-center justify-between bg-white py-4 font-serif text-2xl z-10">
      <div className="flex items-center">
        <a href="/">
          <Image className="w-36" src={logo} alt="logo" />
        </a>
        <a href="/">{businessName}</a>
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
