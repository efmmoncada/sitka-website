import ShowcaseBlock from "@/components/ShowcaseBlock";
import { Media, PreviousWork } from "../../../../types/payload-types";
import fetchFromPayload from "@/utils/fetchFromPayload";

export default async function Showcase() {
  const previousWorks = await fetchFromPayload<{ docs: PreviousWork[] }>(
    "/api/previousWorks"
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
