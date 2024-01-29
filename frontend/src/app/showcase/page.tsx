import ShowcaseBlock from "@/components/ShowcaseBlock";
import fetchFromPayload from "@/utils/fetchFromPayload";
import { Media, PreviousWork } from "@payload-types/payload-types";

export default async function Showcase() {
  const previousWorks = await fetchFromPayload<{ docs: PreviousWork[] }>(
    "/api/previousWorks",
  );

  return (
    <>
      <h2 className="pt-14 text-center text-4xl font-bold">Previous Work</h2>

      {previousWorks.docs.map((project) => (
        <ShowcaseBlock
          key={project.id}
          images={project.media?.map((i) => i.image as Media)}
        />
      ))}
    </>
  );
}
