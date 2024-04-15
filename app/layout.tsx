import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TopBar from "@/components/top-bar";
import { Toaster } from "sonner";
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
      <body
        className={`${inter.className} bg-background-body overflow-x-hidden`}
      >
        <TopBar />
        <main className="pt-[50px] max-w-[480px] px-[10px] mx-auto ">
          {children}
        </main>
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
