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
      <h2 className="pt-14 text-center text-4xl font-bold">Previous Work</h2>

      {previousWorks.map(project => (
        <ShowcaseBlock key={project.id} images={project.media.map(i => i.image as Media)} />
      ))}
    </>
  );
}
