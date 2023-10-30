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
    <div className="my-16 grid place-items-center bg-white pt-8">
      <SectionTitle>About Us</SectionTitle>
      <div className="flex gap-20 px-40 font-serif">
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
