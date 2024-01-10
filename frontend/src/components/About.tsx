import { FaSquareFacebook } from "react-icons/fa6";
import { BusinessInfo, Media } from "../../../types/payload-types";
import SectionTitle from "./SectionTitle";
import SocialIcon from "./SocialIcon";
import Image from "next/image";

type Props = Pick<BusinessInfo, "facebookUrl" | "aboutContent" | "aboutImage">;

export default function About({
  facebookUrl,
  aboutContent,
  aboutImage,
}: Props) {
  return (
    <div className="pt-16 pb-4 grid place-items-center bg-white">
      <SectionTitle>About Us</SectionTitle>
      <div className="flex relative flex-col md:flex-row gap-20 p-4 lg:p-10 xl:p-12 2xl:px-16 font-serif">
        <Image
          src={(aboutImage as Media).url || ""}
          width={(aboutImage as Media).width || 0}
          height={(aboutImage as Media).height || 0}
          alt="About Image"
        />
        <p>{aboutContent}</p>
        {facebookUrl && (
          <SocialIcon url={facebookUrl}>
            <FaSquareFacebook size={40} />
          </SocialIcon>
        )}
      </div>
    </div>
  );
}
