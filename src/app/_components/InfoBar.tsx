import { getPayload } from '../../getPayload';

function formatPhoneNumber(phoneNum: string): string {
  const countryCode = phoneNum.slice(0, phoneNum.length - 10);
  const actualPhone = phoneNum.slice(phoneNum.length - 10);

  let formattedPhoneNum = '';
  if (countryCode) formattedPhoneNum += '+' + countryCode + ' ';
  if (actualPhone)
    formattedPhoneNum += `(${actualPhone.slice(0, 3)}) ${actualPhone.slice(
      3,
      6,
    )}-${actualPhone.slice(6)}`;

  return formattedPhoneNum;
}

export default async function InfoBar() {
  const payload = await getPayload();
  const { phoneNumber, email, licenseNumber } = await payload.findGlobal({
    slug: 'info',
  });

  return (
    <div className="bg-[#d51d25] flex text-white text-xl px-72 py-7 justify-between">
      <span>
        <a href={`tel:${phoneNumber}`}>
          <h4 className="pb-6 inline px-9 text-2xl underline underline-offset-2">
            {formatPhoneNumber(phoneNumber)}
          </h4>
        </a>
      </span>
      <span>
        <a href={`mailto:${email}`}>
          <h4 className="pb-6 inline px-9 text-2xl underline underline-offset-2">{email}</h4>
        </a>
      </span>
      <span>CCB #{licenseNumber}</span>
    </div>
  );
}
