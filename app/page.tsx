import Image from "next/image";
import { Navbar } from "./Navbar";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <div className="row mt-14"></div>
      <div>
        <h1 className="text-[48px] flex text-center justify-center">Miljøby</h1>
        <p className="justify-center flex">Velkommen til Miljøby</p>
        <div className="fill flex justify-center">
          <img src="/miljoby.jpg" alt="Miljøby" />
        </div>
      </div>
    </main>
  );
}
