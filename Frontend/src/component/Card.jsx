import React from "react";

function Card({ book }) {
  return (
    <>
      <div className="mt-5 mb-10">
        <div className="card bg-base-100 w-90 shadow-lg hover:shadow-pink-400 m-2 hover:scale-105 duration-300">
          <figure>
            <img
              src={book.image}
              alt="Shoes"
              className="rounded-b-none w-full"
            />
          </figure>
          <div className="card-body rounded-xl rounded-t-none border-2 border-t-0">
            <h2 className="card-title">
              {book.name}
              <div className="badge badge-secondary">{book.category}</div>
            </h2>
            <p>{book.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">${book.price}</div>
              <div className="rounded-full border-[2px] hover:bg-pink-400 hover:text-black duration-300 cursor-pointer px-2 py-1">
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
