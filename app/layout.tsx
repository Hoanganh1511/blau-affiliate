import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TopBar from "@/components/top-bar";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Affiliate for Tiktoker",
  description: "Blau for Affiliate Website",
  metadataBase: new URL(process.env.LIVE_URL!),
  openGraph: {
    title: "Next.js Blau Affiliate | BLAU",
    description: "Blau for Affiliate Website",
    images: "/opengraph-image.jpg",
  },
  generator: "Next.js",
  applicationName: "Next.js",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-background-body`}>
        <TopBar />
        <main className="pt-[50px] max-w-[460px] mx-auto ">{children}</main>
      </body>
    </html>
  );
}
