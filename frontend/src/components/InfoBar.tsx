import { BusinessInfo } from "../../../types/payload-types";

function formatPhoneNumber(phoneNum: string): string {
  const countryCode = phoneNum.slice(0, phoneNum.length - 10);
  const actualPhone = phoneNum.slice(phoneNum.length - 10);

  let formattedPhoneNum = "";
  if (countryCode) formattedPhoneNum += "+" + countryCode + " ";
  if (actualPhone)
    formattedPhoneNum += `(${actualPhone.slice(0, 3)}) ${actualPhone.slice(
      3,
      6
    )}-${actualPhone.slice(6)}`;

  return formattedPhoneNum;
}

type Props = Pick<BusinessInfo, "phoneNumber" | "licenseNumber" | "email">;

export default function InfoBar({ phoneNumber, email, licenseNumber }: Props) {
  return (
    <div className="flex flex-col items-center gap-1 bg-[#d51d25] py-7 text-xl text-white md:flex-row md:justify-between md:px-14 lg:px-20">
      <span>
        <a href={`tel:${phoneNumber}`}>
          <h4 className="inline text-2xl">{formatPhoneNumber(phoneNumber)}</h4>
        </a>
      </span>
      <span>
        <a href={`mailto:${email}`}>
          <h4 className="inline text-2xl">{email}</h4>
        </a>
      </span>
      <span>
        <h4 className="inline text-2xl">CCB #{licenseNumber}</h4>
      </span>
    </div>
  );
}
