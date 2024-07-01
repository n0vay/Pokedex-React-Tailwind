import React, { useRef, useState } from "react";
import backgroundImage from "../assets/images/hero.png";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleFormButton = () => {};

  return (
    <div className="-z-20">
      <div className="absolute inset-0 ">
        <img
          className="h-screen w-screen object-cover"
          src={backgroundImage}
          alt="background-img"
        />
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="w-11/12 md:w-4/12 p-12 bg-black absolute mt-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 mt-4 w-full bg-gray-700 rounded-md"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Adress"
          className="p-4 mt-4 w-full bg-gray-700 rounded-md"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password "
          className="p-4 mt-4 w-full bg-gray-700 rounded-md"
        />
        <div className="mt-4 text-red-600 font-bold">{errorMessage}</div>
        <button
          className="p-4 mt-6 bg-yellow-400 w-full font-bold rounded-md text-blue-800"
          onClick={handleFormButton}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <div className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {" "}
          {isSignInForm
            ? "New to PokeBloke? Sign Up Now"
            : "Already a member? Sign In Now"}
        </div>
      </form>
    </div>
  );
};

export default Login;
