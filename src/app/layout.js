import "./globals.css";

export const metadata = {
  title: "Sonnsta",
  description: "Hiszed, ha látod.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
