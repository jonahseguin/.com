import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
import { ThemeProvider } from "@/components/theme-provider";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "jonah seguin",
  description: "full-stack software developer from canada",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} w-screen h-screen container font-sans p-8 antialiased gap-y-1.5 flex flex-col items-center justify-center bg-background text-foreground`}
      >
        <ThemeProvider
          defaultTheme="system"
          forcedTheme="system"
          attribute="class"
        >
          <Nav />
          <div className="flex flex-col border w-full aspect-square h-auto">
            {children}
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
