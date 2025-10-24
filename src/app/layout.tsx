import Navbar from "@/commons/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import Footer from "@/commons/Footer";

export const metadata: Metadata = {
  title: "ZeroDrop - The Ultimate Car Care Solution",
  description: "Experience the best in car care with ZeroDrop. Our innovative products and services ensure your vehicle stays in top condition, providing unmatched protection and shine. Discover the future of car maintenance with ZeroDrop today!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="pt-16">
          {children} 
        </div>
        <Footer />
      </body>
    </html>
  );
}
