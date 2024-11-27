import React from "react";
import Image from "next/image";
import Button from "./ui/Button";

function Header() {
  return (
    <div className="flex flex-row justify-between h-400 w-full bg-transparent border-b-2 border-white px-20">
      <Image
        src="/assets/images/NRGLogo.svg"
        alt="Site Logo"
        width={100}
        height={100}
        style={{ objectFit: "contain" }}
      />
      <Button />
    </div>
  );
}

export default Header;
