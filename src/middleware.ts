import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Supported locales
const locales = ["en", "hu"];
const defaultLocale = "hu";

// Get the preferred locale from Accept-Language header
function getLocale(request: NextRequest): string {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some(
    locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    return pathname.split("/")[1];
  }

  // Check for stored locale in cookie
  const localeCookie = request.cookies.get("NEXT_LOCALE");
  if (localeCookie && locales.includes(localeCookie.value)) {
    return localeCookie.value;
  }

  // Parse Accept-Language header
  const acceptLanguage = request.headers.get("Accept-Language");
  if (acceptLanguage) {
    const preferredLocale = acceptLanguage
      .split(",")
      .map(lang => lang.split(";")[0].trim())
      .find(lang => {
        // Check exact match
        if (locales.includes(lang)) return lang;
        // Check language part only (e.g., 'en' from 'en-US')
        const langPart = lang.split("-")[0];
        return locales.includes(langPart) ? langPart : null;
      });

    if (preferredLocale) {
      return preferredLocale.split("-")[0];
    }
  }

  return defaultLocale;
}

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if there is any supported locale in the pathname
  const pathnameHasLocale = locales.some(
    locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  // Redirect if there is no locale
  if (!pathnameHasLocale) {
    const locale = getLocale(request);

    const base = request?.url ?? request?.nextUrl?.href ?? "http://localhost";
    const newUrl = new URL(`/${locale}${pathname}`, base);

    const response = NextResponse.redirect(newUrl);
    // Set locale cookie for future visits
    response.cookies.set("NEXT_LOCALE", locale, {
      maxAge: 60 * 60 * 24 * 365, // 1 year
      path: "/",
    });

    return response;
  }
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|site.webmanifest|img/|.*\\.[^/]+$).*)",
  ],
};
