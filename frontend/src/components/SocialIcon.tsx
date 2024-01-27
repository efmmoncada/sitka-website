import { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  url: string;
}>;

export default function SocialIcon({ children, url }: Props) {
  return (
    <a
      href={url}
      target="_blank"
      className="absolute bottom-4 right-4 no-underline"
    >
      {children}
    </a>
  );
}
