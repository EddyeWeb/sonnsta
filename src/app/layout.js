import "./globals.css";

export const metadata = {
  title: "Sonnsta",
  description: "Hiszed, ha látod.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="hu">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Karla:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" type="image/x-icon" href="./favicon.ico"></link>
      </head>
      <body className="font-karla">
        {children}
      </body>
    </html>
  );
}
