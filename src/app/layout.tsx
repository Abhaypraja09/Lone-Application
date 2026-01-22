import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Catalyst Financial Services | Trusted Loans & Insurance in Udaipur",
  description: "Udaipur's premier financial consultancy. Specialized in Home Loans, Business Loans, and Life Insurance. Empowering your financial future with expert guidance.",
  keywords: ["Catalyst Financial Services", "Home Loan Udaipur", "Business Loan Udaipur", "Mortgages Udaipur", "Personal Loan Udaipur", "Financial Consultant Udaipur", "Life Insurance Udaipur", "Investment Planning", "Nirmal Purbia Finance"],
  authors: [{ name: "Catalyst Financial Services" }],
  openGraph: {
    title: "Catalyst Financial Services | Expert Loan Solutions",
    description: "Empowering your growth through specialized financial planning and loan solutions in Udaipur.",
    url: "https://catalystfinance.in",
    siteName: "Catalyst Financial Services",
    images: [
      {
        url: "/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Catalyst Financial Services logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Catalyst Financial Services | Udaipur's Finance Partner",
    description: "Expert loan and insurance solutions for your personal and business needs.",
    images: ["/images/logo.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://catalystfinance.in",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} antialiased bg-white text-gray-900 font-sans`}
      >
        <Navbar />
        <main className="min-h-screen pt-5">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
