import { createI18nMiddleware } from "next-international/middleware";
import { NextRequest } from "next/server";

const i18nMiddleware = createI18nMiddleware({
  locales: ["en", "fr"],
  defaultLocale: "en",
});

export function middleware(request: NextRequest) {
  return i18nMiddleware(request);
}

export const config = {
  matcher: ["/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)"],
};
