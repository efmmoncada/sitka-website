"use client";

import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { Media, PreviousWork } from "@payload-types/payload-types";
import { useState } from "react";
import ImageCarousel from "./ImageCarousel";
import { ShowcaseCard } from "./ShowcaseCard";

type Props = {
  projects: PreviousWork[];
};

export function ProjectGrid({ projects }: Props) {
  const [selectedProjIndex, setSelectedProjIndex] = useState<number>(0);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleOpen = (i: number) => () => {
    setSelectedProjIndex(i);
    onOpen();
  };

  return (
    <>
      <h2 className="pt-14 text-center text-4xl font-bold">Previous Work</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-8 md:p-14 lg:p-20 gap-8 lg:gap-10">
        {projects.map((project, i) => (
          <>
            <ShowcaseCard
              key={i}
              onOpen={handleOpen(i)}
              title={project.service}
              backgroundUrl={(project.primaryImage as Media).url || ""}
            />
          </>
        ))}
      </div>

      <Modal hideCloseButton size="5xl" scrollBehavior="inside" backdrop="blur" isOpen={isOpen}>
        <ModalContent>
          <ModalHeader className='text-2xl'>{projects[selectedProjIndex].service}</ModalHeader>
          <ModalBody>
            <ImageCarousel
              images={projects[selectedProjIndex].media?.map(
                (i) => i.image as Media,
              )}
            />
          </ModalBody>
          <ModalFooter>
            <Button color='primary' onPress={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
