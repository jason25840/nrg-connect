import React from "react";

function Navigation() {
  return (
    <div className="flex items-center gap-10">
      <button className=" text-customDark bg-gradient-to-r from-customBlue to-customYellow py-2 px-2 border-solid border-2 rounded-full hover:border-x-customDark">
        Our Mission
      </button>
      <button className=" text-customDark bg-gradient-to-r from-customBlue to-customYellow py-2 px-2 border-solid border-2 rounded-full hover:border-x-customDark">
        Reach Us
      </button>
      <button className=" text-customDark bg-gradient-to-r from-customBlue to-customYellow py-2 px-2 border-solid border-2 rounded-full hover:border-x-customDark">
        Advertise
      </button>
    </div>
  );
}

export default Navigation;
