import { ImageResponse } from "next/og";
import Image from "next/image";
import frCv from "@/assets/img/fr-opengraph.png";
import enCv from "@/assets/img/en-opengraph.png";

export const contentType = "image/png";
export const alt = "Serge Mezui";

export const size = {
  width: 673,
  height: 214,
};

type Params = {
  params: {
    locale: "fr" | "en";
  };
}

export default async function OpenGraphImage({ params }: Params) {
  return new ImageResponse(
    <Image
      src={params.locale === "fr" ? frCv : enCv}
      alt={alt}
    />,
    size,
  );
}
