import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "iPhone 15 Pro & iPhone 15 Pro Max - Apple (UK)",
  description:
    "A recreation of the iPhone 15 showcase website using Next.js, React, TailwindCSS and GSAP.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
