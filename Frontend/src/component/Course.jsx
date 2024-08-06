import React, { useEffect } from "react";
import list from "../../public/list.json";
import Card from "./Card";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

function Course() {
  console.log(list);
  useEffect(() => {
    AOS.init({
      duration: 1500,
      easing: "ease-in-out",
      mirror: true,
    });
  }, []);

  return (
    <>
      <div>
        <div className="mt-28 dark:mt-16 dark:pt-12 justify-center items-center text-center dark:bg-white">
          <h1 className="text-xl md:text-4xl">
            We're Delighted to Have You{" "}
            <span className="text-pink-400">Here! :)</span>
          </h1>
          <p className="mt-5">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis animi iusto saepe neque excepturi quia pariatur libero
            ex velit dolorum, facilis incidunt nostrum recusandae. Eaque enim
            voluptate maiores illo tenetur sunt voluptates dolor officiis ipsa
            doloribus quae ipsum excepturi earum illum deleniti, quis, commodi
            error sit reiciendis expedita impedit dolores?
          </p>
          <Link to="/">
            <button className="bg-pink-400 hover:bg-pink-500 hover:text-black text-white px-4 py-2 rounded-md duration-500 mt-6">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-3">
          {list.map((book) => (
            <div className="m-0" data-aos="slide-up">
              <Card key={book.id} book={book} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
