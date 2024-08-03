import React from "react";
import list from "../../public/list.json";
import Card from "./Card";

function Course() {
  console.log(list);

  return (
    <>
      <div>
        <div className="mt-28 justify-center items-center text-center">
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
          <button className="bg-pink-400 hover:bg-pink-500 hover:text-black text-white px-4 py-2 rounded-md duration-500 mt-6">
            Back
          </button>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-5">
          {list.map((book) => (
            <Card key={book.id} book={book} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
