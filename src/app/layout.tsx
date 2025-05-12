import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
import { ThemeProvider } from "@/components/theme-provider";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";

const tx02 = localFont({
  src: [
    {
      path: "../../public/font/TX-02/TX-02-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/font/TX-02/TX-02-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/font/TX-02/TX-02-Oblique.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/font/TX-02/TX-02-Bold-Oblique.woff2",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-tx02",
});

export const metadata: Metadata = {
  title: {
    default: "Jonah Seguin",
    template: "%s | Jonah Seguin",
  },
  description: "Full-stack Software Developer in Montréal",
  applicationName: "jonahseguin.com",
  referrer: "origin-when-cross-origin",
  keywords: [
    "jonah seguin",
    "jonah",
    "seguin",
    "software engineer",
    "canada",
    "edmonton",
    "montréal",
  ],
  authors: [{ name: "Jonah Seguin", url: "https://jonahseguin.com" }],
  creator: "Jonah Seguin",
  publisher: "Jonah Seguin",
  openGraph: {
    title: "Jonah Seguin",
    description: "Full-stack Software Developer in Montréal",
    url: "https://jonahseguin.com",
    siteName: "Jonah Seguin",
    images: [
      {
        url: "https://jonahseguin.com/og.jpg", // Must be an absolute URL
        width: 410,
        height: 410,
        alt: "Jonah Seguin",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Jonah Seguin - Software Developer",
    description: "Full-stack Software Developer in Montréal",
    images: [
      {
        url: "https://jonahseguin.com/og.jpg",
        width: 410,
        height: 410,
        alt: "Jonah Seguin",
      },
    ],
    creator: "@jonahseguin",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${tx02.variable} ${GeistSans.variable} min-h-dvh md:h-dvh h-full font-sans antialiased bg-background text-foreground`}
      >
        <ThemeProvider attribute="data-theme" forcedTheme="dark">
          <div className="w-dvw min-h-dvh md:h-dvh h-full flex flex-col gap-y-3 mx-auto px-6">
            <Nav />
            <div className="flex-1 md:border w-full h-full md:p-3">
              {children}
            </div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
