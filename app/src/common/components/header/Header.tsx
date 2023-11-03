"use client";

import Navigation from "./Navigation";
import ButtonBox from "./ButtonsBox";
import HeaderLogo from "./HeaderLogo";

export default function Header() {
  return (
    <header className="w-full h-header bg-secondary text-white fixed top-0 left-0 z-header">
      <div className="mx-auto p-res content-wrapper h-full flex items-center">
        <HeaderLogo />
        <Navigation />
        <ButtonBox />
      </div>
    </header>
  );
}
