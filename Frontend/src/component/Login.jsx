import React, { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { gsap } from "gsap";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const formRef = useRef(null);

  useEffect(() => {
    gsap.to(formRef.current, {
      x: 0,
      duration: 3,
      rotate: 720,
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    // Basic validation
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    // Here you can add logic for form submission, such as calling an API
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    // min-h-screen
    <>
      <Navbar />
      <div className="mt-48 mb-24 md:mt-32 flex items-center justify-center bg-base-100">
        <div
          ref={formRef}
          className="bg-slate-300 p-8 rounded-lg w-full max-w-md shadow-md shadow-pink-400 hover:shadow-xl hover:shadow-pink-300 duration-500"
        >
          <h2 className="text-3xl font-bold mb-6 text-center text-zinc-900">
            Login
          </h2>
          {error && <div className="text-red-600 mb-4">{error}</div>}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 rounded mt-1 focus:outline-none focus:ring focus:ring-pink-400 bg-zinc-800 hover:bg-zinc-700 duration-500"
                required
                placeholder="Enter Your Email"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2  rounded mt-1 focus:outline-none focus:ring focus:ring-pink-400 bg-zinc-800 hover:bg-zinc-700 duration-500"
                required
                placeholder="Enter Your Password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-pink-400 hover:bg-pink-500 text-zinc-800 font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-zinc-400 duration-500"
            >
              Log In
            </button>
          </form>
          <div className="mt-4 text-center">
            <a href="#" className="text-zinc-900 hover:underline">
              Forgot your password?
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
