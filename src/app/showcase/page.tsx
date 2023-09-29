import { Media } from 'payload/generated-types';

import { getPayload } from '../../getPayload';
import ShowcaseBlock from '../_components/ShowcaseBlock';

export default async function Showcase() {
  const payload = await getPayload();
  const data = await payload.find({
    collection: 'previousWorks',
  });

  const previousWorks = data.docs.map(job => job);

  return (
    <>
      <h2 className="font-bold text-4xl text-center pt-14">Previous Work</h2>

      {previousWorks.map(project => (
        <ShowcaseBlock key={project.id} images={project.media.map(i => i.image as Media)} />
      ))}
    </>
  );
}
