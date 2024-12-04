import React from "react";
import Image from "next/image";
import Navigation from "./Navigation";

function Header() {
  return (
    <div className="flex flex-row justify-between h-400 w-full bg-transparent px-20">
      <Image
        src="/assets/images/NRGLogo.svg"
        alt="Site Logo"
        width={100}
        height={100}
        style={{ objectFit: "contain" }}
      />
      <Navigation />
    </div>
  );
}

export default Header;
