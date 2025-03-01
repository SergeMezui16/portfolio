import frOG from "@/assets/img/fr-opengraph.png";
import enOG from "@/assets/img/en-opengraph.png";
import frCv from "@/assets/img/fr-cv.png";
import enCv from "@/assets/img/en-cv.png";
import { ImageResponse } from "next/og";

type Props = {
  locale?: "fr" | "en";
  type: "main" | "cv";
  size?: {
    width: number;
    height: number;
  };
  alt?: string;
}

const getImages = (type: Props["type"]) => {
  switch (type) {
  case "main":
    return { fr: frOG, en: enOG };
  case "cv":
    return { fr: frCv, en: enCv };
  }
};
export const openGraph = ({ locale = "fr", type, alt, size }: Props) => {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL;
  const { fr, en } = getImages(type);
  const imageUrl = locale === "fr" ? fr.src : en.src;
  const absoluteImageUrl = `${baseUrl}${imageUrl}`;

  return new ImageResponse(
    // eslint-disable-next-line @next/next/no-img-element
    (<img
      src={absoluteImageUrl}
      alt={alt}
      {...size}
      style={{
        width: "100%",
        height: "100%",
      }}
    />),
    size,
  );
};
