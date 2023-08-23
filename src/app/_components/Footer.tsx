export default function Footer() {
  return (
    <footer className="mt-8 bg-gray-100 p-6 text-center">
      <p className="my-1">
        <a className="mx-2 underline" href="/">
          Home
        </a>{' '}
        &sdot;
        <a className="mx-2 underline" href="/showcase">
          Showcase
        </a>
        &sdot;{' '}
        <a className="mx-2 underline" href="/#contact">
          Contact Us
        </a>
      </p>
      <p className="mt-6">&copy; Sitka Renovations LLC</p>
    </footer>
  );
}
