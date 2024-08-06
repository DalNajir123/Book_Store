import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

function Contact() {
  return (
    <>
      <Navbar />
      <div className="dark:bg-white dark:mt-16 dark:pt-20 dark:mb-10 flex items-center justify-center mt-40 md:mt-32 bg-base-100">
        <div className="dark:bg-pink-100 w-full max-w-md bg-slate-300 rounded-lg shadow-md shadow-pink-400 p-6 hover:shadow-xl hover:shadow-pink-400 duration-500">
          <h2 className="text-2xl font-bold mb-4 text-center text-zinc-800">
            Contact Us
          </h2>
          <form>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 font-bold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="dark:bg-stone-50 dark:outline-none w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400 bg-zinc-800 hover:bg-zinc-700 duration-500"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-bold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="dark:bg-stone-50 dark:outline-none w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400 bg-zinc-800 hover:bg-zinc-700 duration-500"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-gray-700 font-bold mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="dark:bg-stone-50 dark:outline-none w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400 bg-zinc-800 hover:bg-zinc-700 duration-500"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-pink-400 hover:bg-pink-500 text-zinc-800 font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-zinc-400 duration-500 dark:bg-stone-50 shadow-md dark:hover:bg-pink-400"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
