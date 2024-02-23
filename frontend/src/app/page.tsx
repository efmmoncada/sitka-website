import Banner from "@/components/Banner";
import InfoBar from "@/components/InfoBar";
import OurServices from "@/components/OurServices";
import fetchFromPayload from "@/utils/fetchFromPayload";
import { Divider } from '@nextui-org/react';
import { BusinessInfo, Service } from "@payload-types/payload-types";
import dynamic from "next/dynamic";
const Contact = dynamic(() => import("@/components/Contact"), { ssr: false });

export default async function Home() {
  const businessInfo = await fetchFromPayload<BusinessInfo>(
    "/api/globals/business_info",
  );

  const {
    businessName,
    email,
    phoneNumber,
    licenseNumber,
    aboutContent,
    aboutImage,
    facebookUrl,
  } = businessInfo;

  const services = await fetchFromPayload<{ docs: Service[] }>("/api/services");

  return (
    <>
      <Banner text={businessName} />
      <InfoBar
        phoneNumber={phoneNumber}
        email={email}
        licenseNumber={licenseNumber}
      />
      <OurServices services={services.docs} />
      <Divider />
      <Contact />
      {/* // TODO: unhide this once the about data is recv'd */ }
      {/* <About
        aboutContent={aboutContent}
        aboutImage={aboutImage}
        facebookUrl={facebookUrl}
      /> */}
    </>
  );
}
