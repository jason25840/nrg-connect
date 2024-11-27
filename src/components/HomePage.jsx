import React from "react";
import Header from "./Header";
//import HomeContent from "./HomeContent";

function HomePage() {
  return (
    <div
      className="flex flex-col justify-between w-full h-screen"
      style={{
        backgroundImage: "url(./assets/images/NRG_Bridge.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Header />
      {/*<HomeContent />*/}
    </div>
  );
}

export default HomePage;
