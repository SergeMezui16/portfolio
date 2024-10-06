import { AppProvider } from "@/context";
import { PropsWithChildren } from "react";

export default function Layout({children, params}: PropsWithChildren<{ params: { locale: string } }>) {
  return <AppProvider locale={params.locale}>{children}</AppProvider>;
}
