import React from "react";
import { Vortex } from "./ui/Vortex";

const HomeContent = () => {
  return (
    <div className="relative flex items-center justify-center h-screen bg-sky-950 text-white">
      {/* Background Vortex */}
      <div className="absolute inset-0 z-0">
        <Vortex particleCount={1000} />
      </div>

      {/* Foreground Content */}
      <h1 className="relative z-10 text-4xl font-bold">Welcome Home</h1>
    </div>
  );
};

export default HomeContent;
