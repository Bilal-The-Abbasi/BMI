import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "OwnerOS AI — The AI Operating System for Owner-Led Businesses",
    template: "%s | OwnerOS AI",
  },
  description:
    "OwnerOS AI installs a practical AI-supported operating system for owner-led businesses — organizing leads, follow-up, SOPs, tasks, and owner visibility into one cleaner way to run the business.",
  keywords: [
    "AI operating system",
    "small business operations",
    "business automation",
    "owner-led business",
    "business SOPs",
    "follow-up automation",
    "business systems",
    "AI for small business",
  ],
  authors: [{ name: "OwnerOS AI" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "OwnerOS AI",
    title: "OwnerOS AI — The AI Operating System for Owner-Led Businesses",
    description:
      "Stop running your business from your inbox. OwnerOS AI installs a practical operating system that organizes your leads, follow-up, SOPs, tasks, and reporting.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
