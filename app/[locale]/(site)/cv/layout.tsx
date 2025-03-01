import type { Metadata, ResolvingMetadata } from "next";
import { PropsWithChildren } from "react";
import { getScopedI18n } from "@/locales/server";

export async function generateMetadata(
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const t = await getScopedI18n("cv");

  return {
    ...(await parent).metadataBase,
    title: t("title"),
    description: t("description"),
  };
}

export default function Layout({ children }: PropsWithChildren) {
  return children;
}
