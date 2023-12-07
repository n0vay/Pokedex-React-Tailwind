import React from "react";
import backgroundImage from "../assets/images/background1.png"; // Import your background image

const Hero = () => {
  return (
    <div
      className="search-bar-container h-screen w-screen"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "multiply", // Use camelCase for CSS properties
        backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust the alpha value to control the grayish background
        position: "fixed",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        overflow: "auto",
      }}
    >
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="flex flex-col items-center justify-center text-gray-200 border-gray-300 border-8 p-4 rounded-2xl shadow-2xl bg-black/30 backdrop-opacity-20">
          <h1 className="text-9xl font-black ">Welcome to Pokédex</h1>
          <h2 className="mt-4 text-7xl font-sans">
            the most comprehensive Pokémon database
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Hero;
