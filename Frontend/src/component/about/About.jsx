import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../Navbar";
import Footer from "../Footer";

function About() {
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

      <div className="dark:bg-white dark:mt-16 dark:pt-16 bg-base-100 min-h-screen p-6 mt-32">
        <div
          className="container mx-auto max-w-4xl rounded-lg shadow-md shadow-pink-400 hover:shadow-xl hover:shadow-pink-300 duration-500"
          data-aos="fade-up "
        >
          <header className="bg-slate-300 shadow-md rounded-lg p-4 mb-10">
            <h1 className="text-3xl font-bold text-center text-zinc-900">
              About Our Learn Coding
            </h1>
          </header>
        </div>

        <section
          className="container mx-auto max-w-4xl bg-slate-300 p-6 rounded-lg shadow-md shadow-pink-400 mb-10 hover:shadow-xl hover:shadow-pink-300 duration-500"
          data-aos="zoom-in"
        >
          <h2 className="text-3xl font-semibold mb-4 text-zinc-900">
            Our Story
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Welcome to Learn Coding, where every book tells a story and every
            reader finds a new adventure. Our journey began with a passion for
            books and a vision to create a haven for readers of all genres. We
            believe in the magic of storytelling and the joy of discovering new
            worlds through the pages of a book.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Our bookstore is more than just a place to buy books; it's a
            community hub where book lovers can come together, attend events,
            and explore a carefully curated selection of titles. From
            bestsellers to hidden gems, we strive to offer a diverse range of
            books that cater to every taste.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Join us in celebrating the love of reading and discover your next
            great read at Learn Coding.
          </p>
        </section>

        <section
          className="container mx-auto max-w-4xl bg-slate-300 p-8 rounded-lg shadow-md mb-10 shadow-pink-400 hover:shadow-xl hover:shadow-pink-300 duration-500"
          data-aos="zoom-in"
        >
          <h2 className="text-2xl font-semibold mb-4 text-zinc-900">
            Meet the Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Team Member 1 */}
            <div className="bg-zinc-500 p-6 rounded-lg shadow-md text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto mb-4 border-2 border-zinc-900"
              />
              <h3 className="text-xl font-semibold mb-2 text-zinc-800">
                Dal Najir
              </h3>
              <p className="text-gray-300">Owner & Founder</p>
            </div>

            {/* Team Member 2 */}
            <div className="bg-zinc-500 p-6 rounded-lg shadow-md text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto mb-4 border-2 border-zinc-900"
              />
              <h3 className="text-xl font-semibold mb-2 text-zinc-800">
                Bhagvani Ruvaifa
              </h3>
              <p className="text-gray-300">Store Manager</p>
            </div>

            {/* Team Member 3 */}
            <div className="bg-zinc-500 p-6 rounded-lg shadow-md text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto mb-4 border-2 border-zinc-900"
              />
              <h3 className="text-xl font-semibold mb-2 text-zinc-800">
                Shivam
              </h3>
              <p className="text-gray-300">Book Curator</p>
            </div>
          </div>
        </section>

        <section
          className="container mx-auto max-w-4xl bg-slate-300 p-8 rounded-lg shadow-md shadow-pink-400 hover:shadow-xl hover:shadow-pink-300 duration-500"
          data-aos="zoom-in"
        >
          <h2 className="text-2xl font-semibold mb-4 text-zinc-900">
            Contact Us
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We would love to hear from you! Whether you have a question about a
            book, need assistance, or just want to say hello, feel free to reach
            out to us.
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>
              <strong>Email:</strong> dalnajir123@gmail.com
            </li>
            <li>
              <strong>Phone:</strong> +1 (234) 567-8900
            </li>
            <li>
              <strong>Address:</strong> 123 Book Lane, Reading City, Ahmedabad
            </li>
          </ul>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default About;
