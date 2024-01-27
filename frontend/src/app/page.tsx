import Banner from "@/components/Banner";
import InfoBar from "@/components/InfoBar";
import { BusinessInfo, Service } from "@payload-types/payload-types";
import OurServices from "@/components/OurServices";
import About from "@/components/About";
import dynamic from "next/dynamic";
import fetchFromPayload from "@/utils/fetchFromPayload";
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
      <Contact />
      <About
        aboutContent={aboutContent}
        aboutImage={aboutImage}
        facebookUrl={facebookUrl}
      />
    </>
  );
}
