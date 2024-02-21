import { ProjectGrid } from "@/components/ProjectGrid";
import fetchFromPayload from "@/utils/fetchFromPayload";
import { PreviousWork } from "@payload-types/payload-types";

export default async function Showcase() {
  const previousWorks = await fetchFromPayload<{ docs: PreviousWork[] }>(
    "/api/previousWorks",
  );

  if (!(previousWorks && previousWorks.docs && previousWorks.docs.length > 0)) {
    return null;
  }

  return <ProjectGrid projects={previousWorks.docs} />;
}
