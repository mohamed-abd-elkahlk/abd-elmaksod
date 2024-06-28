import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/layouts/Nav";
import Footer from "@/layouts/Footer";

const inter = Inter({ subsets: ["latin"] });
export async function generateStaticParams() {
  return ["/", "/schedule"];
}
export const metadata: Metadata = {
  title: "Mr. Abdulrahman",
  description: `Enthusiastic math educator passionate about making math fun and accessible for all learners. Skilled in using creative methods and fostering a growth mindset to unlock student potential. This portfolio showcases my dedication to differentiation, collaboration, and continuous improvement - all to ignite the mathematician within each student.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="max-w-6xl mx-auto my-auto  p-3 rounded-md mt-12 ">
          <Nav />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
