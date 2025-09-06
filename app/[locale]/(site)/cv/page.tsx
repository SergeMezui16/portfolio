import { redirect } from "next/navigation";
import { getResumeUrl } from "@/lib/utils";

export default async function Page({ params }: { params?: Promise<{ locale?: "fr" | "en" }> }) {
  const resolved = params ? await params : { locale: "en" as const };
  const locale = resolved.locale ?? "en";
  redirect(getResumeUrl(locale));
}
