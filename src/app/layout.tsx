import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
import { ThemeProvider } from "@/components/theme-provider";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "jonah seguin",
    template: "%s | jonah seguin",
  },
  description: "full-stack software developer in montréal",
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
    title: "jonah seguin",
    description: "full-stack software engineer in montréal",
    url: "https://jonahseguin.com",
    siteName: "jonah seguin",
    images: [
      {
        url: "https://jonahseguin.com/og.jpg", // Must be an absolute URL
        width: 410,
        height: 410,
        alt: "jonah seguin",
      },
    ],
    locale: "en_US",
    type: "website",
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
        className={`${GeistSans.variable} ${GeistMono.variable} w-dvw min-h-dvh md:h-dvh font-sans antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="system"
          enableSystem
          enableColorScheme={true}
        >
          <div className="w-dvw min-h-dvh md:h-dvh flex flex-col gap-y-1.5 mx-auto px-3">
            <Nav />
            <div className="flex-1 border w-full h-full p-3">{children}</div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
