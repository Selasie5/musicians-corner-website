"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Links {
  name: string;
  path: string;
}

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const Links: Links[] = [
    {
      name: "Home",
      path: "/#home",
    },
    {
      name: "About",
      path: "/#about",
    },
    {
      name: "Events",
      path: "/#events",
    },
    {
      name: "Gallery",
      path: "/#gallery",
    },
    {
      name: "Contact",
      path: "/#contact",
    },
  ];

  return (
    <section className="bg-black w-full px-6 py-4">
      <nav className="flex justify-between items-center">
        {/* Logo */}
        <div>
          <Image
            src="/mc_logo.png"
            alt="musicians-corner-logo"
            width={100}
            height={100}
          />
        </div>

        {/* Menu Icon for Mobile */}
        <div className="lg:hidden">
          <button
            className="text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? "✖" : "☰"}
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`flex-col lg:flex lg:flex-row lg:gap-10 absolute lg:static left-0 top-0 lg:top-auto w-full lg:w-auto bg-black lg:bg-transparent transition-transform duration-300 ${
            isMenuOpen ? "flex bg-opacity-95 h-screen py-20 z-20" : "hidden"
          }`}
        >
          {Links.map((link, index) => (
            <Link
              href={link.path}
              key={index}
              className="text-white hover:text-orange-500 block lg:inline-block text-center py-4 lg:py-0"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <button className="bg-orange-500 text-black text-sm px-5 py-2 uppercase flex justify-center items-center gap-4">
            <hr className="bg-black h-[0.1rem] border-0 w-10" /> Partner With Us
          </button>
        </div>
      </nav>

      {/* Overlay background for mobile menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-95 z-10"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </section>
  );
};

export default Navbar;
