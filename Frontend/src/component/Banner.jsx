import React, { useEffect, useRef } from "react";
import banner from "../../public/banner.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { ReactTyped } from "react-typed";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import wheel1 from "../../public/wheel1.png";

gsap.registerPlugin(ScrollTrigger);

function Banner() {
  const wheelRef = useRef(null);

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 2000,
      easing: "ease-in-out",
      mirror: true,
    });

    // Define responsive animations using GSAP's matchMedia
    const mm = gsap.matchMedia();

    mm.add("(min-width: 430px)", () => {
      // Animation for screens wider than 430px
      gsap.to(wheelRef.current, {
        x: 300,
        rotate: 720,
        scrollTrigger: {
          trigger: wheelRef.current,
          start: "top 80%",
          end: "bottom 20%",
          scrub: true,
        },
      });
    });

    mm.add("(min-width: 1200px)", () => {
      // Animation for screens wider than 1200px
      gsap.to(wheelRef.current, {
        x: 1200,
        rotate: 720,
        scrollTrigger: {
          trigger: wheelRef.current,
          start: "top 80%",
          end: "bottom 20%",
          scrub: true,
        },
      });
    });

    // Clean up matchMedia listeners
    return () => mm.revert();
  }, []);

  return (
    <>
      <div className="flex flex-col md:flex-row gap-5 my-10">
        <div className="w-full md:w-1/2 mt-12 md:mt-32 md:order-1 order-2">
          <div className="space-y-12">
            <h1 className="text-4xl font-bold">
              Hello, Welcome Here To Learn Something New{" "}
              <span className="text-4xl font-bold bg-gradient-to-r from-pink-500 to-violet-400 bg-clip-text text-transparent">
                <ReactTyped
                  strings={[
                    "Every-Day . . .",
                    "Any-Time . . .",
                    "Any-Place . . .",
                  ]}
                  typeSpeed={70}
                  backSpeed={40}
                  loop
                />
              </span>
            </h1>
            <p className="text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              illo totam quidem animi hic nobis dicta quaerat voluptatum rerum
              at ab maiores perspiciatis ex voluptate, repellat amet saepe earum
              corporis?
            </p>
            <label className="dark:bg-white dark:border-2 dark:border-black input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow" placeholder="Email" />
            </label>
          </div>
          <button className="mt-8 btn btn-secondary">Subscribe</button>
        </div>
        <div className="w-full md:w-1/2 mt-12 md:mt-28 order-1">
          <img
            src={banner}
            className="w-90 h-90 mix-blend-plus-darker rounded-2xl hover:shadow-xl hover:shadow-pink-300 duration-500"
            alt=""
            data-aos="zoom-in"
          />
        </div>
      </div>

      <div>
        <div
          ref={wheelRef}
          className="dark:opacity-70 rounded-full duration-1000 text-slate-600 inline-block opacity-40 shadow-md shadow-pink-400 hover:shadow-2xl"
        >
          <img src={wheel1} alt="" className="w-20 h-20 md:w-48 md:h-48" />
        </div>
      </div>
    </>
  );
}

export default Banner;
