import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Auréliane G. | Portfolio",
  description: "Portfolio personnel d'Auréliane Gagliardi",
  icons: {
    icon: [
      {
        url: '/images/favicon.ico',
        href: '/images/favicon.ico',
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
