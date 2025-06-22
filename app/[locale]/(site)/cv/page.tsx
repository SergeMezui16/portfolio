import { redirect } from "next/navigation";
import { getResumeUrl } from "@/lib/utils";

export default async function Page({ params }: {
  params: Promise<{ locale: "fr" | "en" }>
}) {
  const { locale } = await params;
  redirect(getResumeUrl(locale));
}
