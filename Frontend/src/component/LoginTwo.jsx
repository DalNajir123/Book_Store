import React from "react";
import { Link } from "react-router-dom";
import { ReactTyped } from "react-typed"; // Importing ReactTyped
import { useForm } from "react-hook-form";

function LoginTwo() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box dark:bg-pink-50 shadow-md shadow-pink-400 hover:shadow-lg hover:shadow-pink-300 duration-500">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* Close Button for the Modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>

            <h3 className="font-bold text-lg">Login</h3>

            {/* Email Input with ReactTyped */}
            <div className="mt-4 space-y-1">
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
                  className="dark:bg-stone-50 w-80 mt-2 px-3 py-1 border border-gray-300 rounded-md outline-none
                  focus:ring-2 focus:ring-pink-400 bg-zinc-800 hover:bg-zinc-700 duration-500"
                  {...register("email", { required: "Email is required" })}
                />
              </ReactTyped>
              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}
            </div>

            {/* Password Input with ReactTyped */}
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
                  className="dark:bg-stone-50 w-80 mt-2 px-3 py-1 border border-gray-300 rounded-md outline-none
                  focus:ring-2 focus:ring-pink-400 bg-zinc-800 hover:bg-zinc-700 duration-500"
                  {...register("password", {
                    required: "Password is required",
                  })}
                />
              </ReactTyped>
              {errors.password && (
                <p className="text-red-500">{errors.password.message}</p>
              )}
            </div>

            {/* Login Button and Link to Signup */}
            <div className="md:flex md:justify-between mt-4">
              <button
                type="submit"
                className="bg-pink-400 text-white px-4 py-2 rounded-md hover:bg-pink-500 hover:scale-95 duration-200"
              >
                Login
              </button>
              <p className="px-4 py-2">
                You don't have an account?{" "}
                <Link
                  to="/signup"
                  className="underline text-blue-500 cursor-pointer"
                >
                  Sign up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default LoginTwo;
