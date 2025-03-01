import { redirect } from "next/navigation";
import { getResumeUrl } from "@/lib/utils";

type Params = {
  params: {
    locale: "fr" | "en";
  };
};

export default function Page({ params }: Params) {
  redirect(getResumeUrl(params.locale));
}
