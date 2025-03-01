import { ImageResponse } from "next/og";
import Image from "next/image";
import frCv from "@/assets/img/fr-cv.png";
import enCv from "@/assets/img/en-cv.png";

export const contentType = "image/png";
export const alt = "Serge Mezui CV";

export const size = {
  width: 989,
  height: 889,
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
