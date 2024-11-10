// page.jsx
import React from "react";

export default function Home() {
  return (
    <div className="container p-4 mx-auto bg-gray-100">
      <div className="bg-white p-4 rounded shadow">
        <h1 className="text-2xl font-bold">
          Welcome to the Container Query Example
        </h1>

        {/* Component with container query breakpoints */}
        <div className="container">
          <div className="bg-blue-500 p-4 text-white sm:bg-green-500 md:bg-red-500 lg:bg-purple-500">
            This box changes color based on its container size.
          </div>
        </div>
      </div>
    </div>
  );
}
