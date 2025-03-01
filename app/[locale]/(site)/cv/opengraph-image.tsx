import { openGraph } from "@/lib/opengraph";

export const contentType = "image/png";
export const alt = "Serge Mezui CV";

export const size = {
  width: 989,
  height: 889,
};

type Params = {
  params?: {
    locale?: "fr" | "en";
  };
}

export default async function OpenGraphImage({ params }: Params) {
  return openGraph({
    type: "cv",
    alt,
    locale: params?.locale,
    size,
  });
}
