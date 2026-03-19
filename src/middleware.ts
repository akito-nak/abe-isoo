import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const locales = ['en', 'ja'];
const defaultLocale = 'en';

// Get the preferred locale, similar to the above or using a library
function getLocale(request: NextRequest): string {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return pathname.split('/')[1];

  // Check Accept-Language header
  const acceptLanguage = request.headers.get('accept-language');
  if (acceptLanguage) {
    const preferredLocale = acceptLanguage
      .split(',')[0]
      .split('-')[0]
      .toLowerCase();
    
    if (preferredLocale === 'ja') return 'ja';
  }

  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Handle root path specifically
  if (pathname === '/') {
    const locale = getLocale(request);
    const newUrl = new URL(`/${locale}`, request.url);
    return NextResponse.redirect(newUrl);
  }
  
  // Check if there is any supported locale in the pathname
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Redirect if there is no locale
  const locale = getLocale(request);
  const newUrl = new URL(`/${locale}${pathname}`, request.url);
  
  return NextResponse.redirect(newUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next), api routes, static files, and specific files
    '/((?!_next|api|favicon.ico|admin|robots.txt|sitemap.xml|.*\\..*).*)',
  ],
};