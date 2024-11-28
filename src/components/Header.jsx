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
      <div className="flex flex-row gap-x-5 items-center">
        <Button
          type="submit"
          className="flex justify-center gap-2 items-center mx-auto shadow-xl text-lg bg-gradient-to-r from-blue-500 to-green-500 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-emerald-500 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group"
          onClick={() => alert("Sign in Button Clicked!")}
        >
          Sign In
        </Button>
        <Button
          type="submit"
          className="flex justify-center gap-2 items-center mx-auto shadow-xl text-lg bg-gradient-to-r from-blue-500 to-green-500 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-emerald-500 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group"
          onClick={() => alert("Sign up Button Clicked!")}
        >
          Sign Up
        </Button>
      </div>
    </div>
  );
}

export default Header;
