import React, { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import list from "../../public/list.json";
import Card from "./Card";
import AOS from "aos";
import "aos/dist/aos.css";

function Freebook() {
  const freebook = list.filter((book) => book.category === "Free");
  var settings = {
    dots: true,
    infinite: false,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  useEffect(() => {
    AOS.init({
      duration: 2000,
      easing: "ease-in-out",
      mirror: true,
    });
  }, []);
  return (
    <>
      <div className="mt-10">
        <h1 className="text-xl font-semibold pb-2">Free Offered Books</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
          dignissimos rerum eos hic illo accusamus magni dolore eveniet quas
          veniam distinctio non architecto consequatur consectetur, eligendi,
          eum, deleniti qui deserunt.
        </p>
      </div>
      <div className="">
        <Slider {...settings}>
          {freebook.map((book) => (
            <div className="mb-8" data-aos="zoom-in">
              <Card book={book} key={book.id} />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}

export default Freebook;
