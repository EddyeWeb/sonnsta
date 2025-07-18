import "./globals.css";
import { Karla } from 'next/font/google'

export const metadata = {
  title: "Sonnsta",
  description: "Hiszed, ha látod.",
};

const karla = Karla({
  subsets: ['latin'],
  variable: '--font-karla',
})

export default function RootLayout({ children }) {
  return (
    <html lang="hu" className={karla.className}>
      <body>
        {children}
      </body>
    </html>
  );
}
