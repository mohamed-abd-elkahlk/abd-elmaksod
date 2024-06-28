import Hero from "@/components/shared/Hero";
import Footer from "@/layouts/Footer";
import Nav from "@/layouts/Nav";
import Image from "next/image";

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto my-auto border-2 border-teal-400 p-3 rounded-md mt-12 ">
      <Nav />
      <Hero />
      <Footer />
    </main>
  );
}
