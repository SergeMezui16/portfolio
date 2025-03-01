import { MetadataRoute } from "next";
import { getScopedI18n } from "@/locales/server";

export default async function manifest(): Promise<MetadataRoute.Manifest> {
  const t = await getScopedI18n("manifest");

  return {
    name: t("name"),
    short_name: t("name"),
    description: t("description"),
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
