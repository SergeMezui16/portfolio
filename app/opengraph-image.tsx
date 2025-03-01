import { openGraph } from "@/lib/opengraph";

export const contentType = "image/png";
export const alt = "Serge Mezui";

export const size = {
  width: 673,
  height: 214,
};

type Params = {
  params?: {
    locale?: "fr" | "en";
  };
}

export default async function OpenGraphImage({ params }: Params) {
  return openGraph({
    type: "main",
    alt,
    locale: params?.locale,
    size,
  });
}
