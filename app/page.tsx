import Image from "next/image";
import { Navbar } from "./Navbar";
import Hero from "./Hero";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Hero />
    </main>
  );
}
