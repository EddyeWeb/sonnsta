import "./globals.css";
import { getDictionary } from "./lib/dictionaries";
import { DictionaryProvider } from "./providers/DictionaryProvider";

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "hu" }];
}

export async function generateMetadata({ params }) {
  const { locale } = params;
  const dict = await getDictionary(locale);
  return {
    title: dict.main_sections.brand_name,
    description: dict.tagline_short,
  };
}

export default async function RootLayout({ children, params }) {
  const { locale } = params;
  const dict = await getDictionary(locale);

  return (
    <html lang={locale === "hu" ? "hu-HU" : "en-US"}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Karla:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" type="image/x-icon" href="./favicon.ico"></link>
      </head>
      <body className="font-karla">
        <DictionaryProvider dict={dict} locale={locale}>
          {children}
        </DictionaryProvider>
      </body>
    </html>
  );
}
