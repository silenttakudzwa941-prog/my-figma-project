"use client";

import Link from "next/link";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "About", href: "#" },
  { name: "Services", href: "#" },
  { name: "Contact", href: "#" },
];

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-sm sticky top-0 z-50">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">
    <div className="flex justify-between items-center h-16">
      <div className="text-xl font-bold">POCAMDE INV</div>
      <div className="hidden md:flex items-center gap-8">
        <a className="text-sm text-gray-600 hover:text-black">Home</a>
        <a className="text-sm text-gray-600 hover:text-black">About</a>
        <a className="text-sm text-gray-600 hover:text-black">Services</a>
        <a className="text-sm text-gray-600 hover:text-black">Contact</a>
      </div>
      <button className="bg-[#D2FD9C] text-[#192625] rounded-[2px] px-11 py-14 text-sm font-semibold flex items-center gap-10 h-33">
  Get Started
</button>
    </div>
  </div>
</nav>
  );
}