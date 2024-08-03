import React from "react";
import banner from "../../public/banner.jpg";

function Banner() {
  return (
    <>
      <div className="flex flex-col md:flex-row gap-5 my-10">
        <div className="w-full md:w-1/2 mt-12 md:mt-32 md:order-1 order-2">
          <div className="space-y-12">
            <h1 className="text-4xl font-bold">
              Hello, Welcome Here To Learn Something{" "}
              <span className="text-pink-400">New Every-Day!!!</span>
            </h1>
            <p className="text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              illo totam quidem animi hic nobis dicta quaerat voluptatum rerum
              at ab maiores perspiciatis ex voluptate, repellat amet saepe earum
              corporis?
            </p>
            <label className="input input-bordered flex items-center gap-2">
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
          <button className="mt-8 btn btn-secondary">Secondary</button>
        </div>
        <div className="w-full md:w-1/2 mt-12 md:mt-32 order-1">
          <img
            src={banner}
            className="w-90 h-90 mix-blend-plus-darker rounded-2xl hover:shadow-xl hover:shadow-pink-300 duration-500"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Banner;
