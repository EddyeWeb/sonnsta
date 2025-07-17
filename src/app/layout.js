import "./globals.css";
import "./lib/i18n.client.js";

export const metadata = {
  title: "Sonnsta",
  description: "Hiszed, ha látod.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="hu">
      <body>
        {children}
      </body>
    </html>
  );
}
