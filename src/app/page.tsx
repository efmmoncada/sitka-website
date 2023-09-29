import React, { Fragment } from 'react';
import { notFound } from 'next/navigation';

import About from './_components/About';
import Contact from './_components/Contact';
import OurServices from './_components/OurServices';
import Title from './_components/Title';

export default async function Home() {
  return (
    <Fragment>
      <Title />
      <OurServices />
      <Contact />
      <About />
    </Fragment>
  );
}
