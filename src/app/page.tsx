import React, { Fragment } from 'react';

import About from './_components/About';
import Contact from './_components/Contact';
import OurServices from './_components/OurServices';
import Banner from './_components/Banner';
import InfoBar from './_components/InfoBar';

export default async function Home() {
  return (
    <Fragment>
      {/* @ts-expect-error Server Component */}
      <Banner />
      {/* @ts-expect-error Server Component */}
      <InfoBar />
      {/* @ts-expect-error Server Component */}
      <OurServices />
      <Contact />
      {/* @ts-expect-error Server Component */}
      <About />
    </Fragment>
  );
}
