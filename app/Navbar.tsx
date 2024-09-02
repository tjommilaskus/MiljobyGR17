"use client";

import Link from "next/link";

export function Navbar() {
  return (
    <nav className="bg-gray-500 p-0 fixed w-full top-0 z-30">
      <div className="container mx-auto flex justify-between">
        <div className="flex space-x-4">
          <Link href="/">
            <p className="text-white">Hjem</p>
          </Link>
          <Link href="/om">
            <p className="text-white">Om</p>
          </Link>
          <Link href="/kontakt">
            <p className="text-white">Kontakt</p>
          </Link>
        </div>
        <div className="flex space-x-4">
          <Link href="/login">
            <p className="text-white">Logg inn</p>
          </Link>
          <Link href="/signup">
            <p className="text-white">Registrer</p>
          </Link>
        </div>
      </div>
    </nav>
  );
}
