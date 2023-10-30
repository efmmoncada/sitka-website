import SectionTitle from './SectionTitle';
import { FaSquareFacebook, FaInstagram } from 'react-icons/fa6';
import SocialIcon from './SocialIcon';
import { getPayload } from '../../getPayload';

export default async function About() {
  const payload = await getPayload();
  const { facebookUrl, instagramUrl } = await payload.findGlobal({
    slug: 'info',
  });

  return (
    <div className="py-16 grid place-items-center bg-white">
      <SectionTitle>About Us</SectionTitle>
      <div className="flex gap-20 p-4 lg:p-10 xl:p-12 2xl:px-16 font-serif">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero autem soluta ducimus cum
          alias deleniti eius aperiam repellat animi consectetur illo itaque harum, tempore sequi
          vitae unde expedita blanditiis esse?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum cum laboriosam quaerat ipsam
          illo nulla rerum, a eaque. Cupiditate provident deserunt non. Sed omnis asperiores harum
          optio vel autem excepturi.
        </p>
      </div>
      <div className="flex gap-3 py-9">
        <SocialIcon url={facebookUrl}>
          <FaSquareFacebook size={30} />
        </SocialIcon>
        <SocialIcon url={instagramUrl}>
          <FaInstagram size={30} />
        </SocialIcon>
      </div>
    </div>
  );
}
