import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Geist, Geist_Mono, Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const robotoFont = Roboto_Mono({ 
  subsets: ['latin'],
  weight: ['400','700'],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Go Shop",
  description: "Bienvenue sur GoShop, votre destination ultime pour un shopping en ligne fluide ! Découvrez une vaste sélection de produits essentiels pour la maison et profitez du plaisir d'un shopping en ligne sans tracas. Commencez à explorer dès aujourd'hui !",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${robotoFont.variable}  antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
       

      </body>
    </html>
  );
}
