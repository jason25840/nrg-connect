import React from "react";
import Header from "./Header";
import ModalWithForm from "./ModalWithForm";
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
      <div className="flex items-center justify-center gap-20 mb-40">
        <ModalWithForm />
        <ModalWithForm />
      </div>
    </div>
  );
}

export default HomePage;
