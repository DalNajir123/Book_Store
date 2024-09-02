import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import Footer from "./Footer";
import Navbar from "./Navbar";
import LoginTwo from "./LoginTwo";
import AOS from "aos";
import "aos/dist/aos.css";
import { ReactTyped } from "react-typed";

function Signup() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      easing: "ease-in-out",
      mirror: true,
    });
  }, []);
  return (
    <>
      <Navbar />
      <div className="flex h-screen items-center justify-center">
        <div className="rounded-lg shadow-md shadow-pink-400 hover:shadow-xl hover:shadow-pink-300 duration-500">
          <div
            id="my_modal_3"
            className="dark:bg-pink-50 border rounded-lg p-4 "
            data-aos="zoom-in"
          >
            <div className="">
              <div className="flex justify-end">
                <Link to="/">
                  <button className="text-xl hover:bg-slate-400 hover:bg-opacity-25 rounded-full p-1 duration-300">
                    <RxCross2 className="hover:scale-105 duration-300" />
                  </button>
                </Link>
              </div>
              <h3 className="font-bold text-lg">Sing up</h3>
              <div className="mt-4 space-y-2">
                <span>Name</span>
                <br />
                <ReactTyped
                  strings={["Enter Your Name..."]}
                  typeSpeed={70}
                  backSpeed={40}
                  attr="placeholder"
                  loop
                >
                  <input
                    type="text"
                    required
                    className="dark:bg-stone-50 w-80 px-3 py-1 border border-gray-300 rounded-md outline-none
                    focus:ring-2 focus:ring-pink-400 bg-zinc-800 hover:bg-zinc-700 duration-500"
                  />
                </ReactTyped>
              </div>
              <div className="mt-4 space-y-2">
                <span>Email</span>
                <br />
                <ReactTyped
                  strings={["Enter Your Email..."]}
                  typeSpeed={70}
                  backSpeed={40}
                  attr="placeholder"
                  loop
                >
                  <input
                    type="email"
                    required
                    className="dark:bg-stone-50 w-80 px-3 py-1 border border-gray-300 rounded-md outline-none
                focus:ring-2 focus:ring-pink-400 bg-zinc-800 hover:bg-zinc-700 duration-500"
                  />
                </ReactTyped>
              </div>
              <div className="mt-4 space-y-2">
                <span>Password</span>
                <br />
                <ReactTyped
                  strings={["Enter Your Password..."]}
                  typeSpeed={70}
                  backSpeed={40}
                  attr="placeholder"
                  loop
                >
                  <input
                    type="password"
                    required
                    className="dark:bg-stone-50 w-80 px-3 py-1 border border-gray-300 rounded-md outline-none
                focus:ring-2 focus:ring-pink-400 bg-zinc-800 hover:bg-zinc-700 duration-500"
                  />
                </ReactTyped>
              </div>
              <div className="flex justify-between mt-4">
                <button className="bg-pink-400 text-white px-4 py-2 rounded-md hover:bg-pink-500 hover:scale-95 duration-200">
                  Sing up
                </button>
                <p className="px-4 py-2">
                  Already have an account ?{" "}
                  <button
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                    className="underline text-blue-500 cursor-pointer"
                  >
                    Login
                  </button>{" "}
                  <LoginTwo />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Signup;
