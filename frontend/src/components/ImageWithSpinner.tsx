"use client";

import { Spinner } from "@nextui-org/react";
import Image from "next/image";
import {
  ComponentProps,
  ReactEventHandler,
  useCallback,
  useState,
} from "react";

type Props = ComponentProps<typeof Image>;

export function ImageWithSpinner({alt, ...props}: Props) {
  const [hasLoaded, setHasLoaded] = useState(false);

  const onLoad: ReactEventHandler<HTMLImageElement> = useCallback(() => {
    setHasLoaded(true);
  }, []);

  return (
    <>
      <div
        className="flex h-full w-full items-center justify-center"
        style={{
          opacity: hasLoaded ? 0 : 1,
          display: hasLoaded ? "none" : "flex",
        }}
      >
        <Spinner
          size="lg"
          className="scale-110"
          classNames={{
            wrapper: "h-20 w-20 mx-auto",
          }}
        />
      </div>

      <Image
        style={{
          opacity: hasLoaded ? 1 : 0,
          visibility: hasLoaded ? "initial" : "hidden",
        }}
        alt={alt}
        onLoad={onLoad}
        {...props}
      />
    </>
  );
}
