import React, { useState } from "react";
import Marquee from "react-fast-marquee";
import "swiper/css";
import "swiper/css/scrollbar";
import './Galary.css'
import img1 from "../../../public/galaey/img1.jpg";
import img2 from "../../../public/galaey/img2.jpg";
import img3 from "../../../public/galaey/img3.jpg";
import img4 from "../../../public/galaey/img4.jpg";
import img5 from "../../../public/galaey/img5.jpg";
import img6 from "../../../public/galaey/img6.jpg";
import img7 from "../../../public/galaey/img7.jpg";
import img8 from "../../../public/galaey/img8.jpg";
import img9 from "../../../public/galaey/img9.jpg";
import img10 from "../../../public/galaey/img10.jpg";
import img11 from "../../../public/galaey/img11.jpg";
import img12 from "../../../public/galaey/img12.jpg";
import img13 from "../../../public/galaey/img13.jpg";
import img14 from "../../../public/galaey/img14.jpg";
import img15 from "../../../public/galaey/img15.jpg";

const Gallery = () => {
  const [modalImage, setModalImage] = useState(null);

  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
  ];

  const openModal = (image) => setModalImage(image);
  const closeModal = () => setModalImage(null);

  return (
    <div className="max-w-7xl mx-auto my-10 px-4">
      {/* Marquee Section */}
      <Marquee className="mb-10" gradient={false} speed={40}>
        {images.slice(4, 9).map((image, index) => (
          <div
            key={index}
            className="cursor-pointer"
            onClick={() => openModal(image)}
          >
            <img
              className="h-[250px] md:h-[400px] w-auto object-cover object-center shadow-md rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg"
              src={image}
              alt={`Highlight photo ${index + 1}`}
              title="Click to view full size"
            />
          </div>
        ))}
      </Marquee>

      {/* Title Section */}
      <div className="w-full h-1 bg-gray-200 rounded-full my-2"></div>
      <h1 className="text-4xl font-extrabold text-center text-white my-10">
        আমাদের কালীপুজোর সুন্দর কিছু মুহূর্ত
      </h1>
      <div className="w-full h-1 bg-gray-200 rounded-full my-2"></div>
      {/* Polaroid Photo Wall */}
      <div className="my-10 relative">
        <h2 className="text-3xl font-semibold text-center text-gray-700 mb-6">
        ফটো ওয়াল
        </h2>
        <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className={`relative p-4 transform ${
                index % 2 === 0 ? "rotate-3" : "-rotate-3"
              } shadow-lg hover:rotate-0 hover:shadow-xl transition-all duration-300 bg-white rounded-lg`}
              onClick={() => openModal(image)}
            >
              <div className="relative bg-gray-200 rounded-lg overflow-hidden">
                <img
                  className="h-[250px] w-full object-cover"
                  src={image}
                  alt={`Polaroid photo ${index + 1}`}
                />
                <p className="absolute bottom-0 bg-white bg-opacity-80 text-center text-sm font-medium p-2 w-full">
                  Moment #{index + 1}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Parallax Scrolling Gallery */}
      <div className="relative overflow-hidden">
        <div
          className="flex space-x-6 overflow-x-auto scroll-smooth snap-x snap-mandatory"
          style={{ perspective: "1000px" }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="snap-center flex-shrink-0 transition-transform duration-500"
              style={{
                transform: `translateZ(${Math.random() * -150}px) rotateY(${
                  index % 2 === 0 ? "-10deg" : "10deg"
                })`,
              }}
            >
              <img
                className="h-[300px] md:h-[400px] w-[300px] object-cover rounded-lg shadow-lg"
                src={image}
                alt={`Depth photo ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Image Viewing */}
      {modalImage && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-75 flex items-center justify-center"
          onClick={closeModal}
        >
          <div className="relative">
            <button
              className="absolute top-2 right-2 text-white text-2xl"
              onClick={closeModal}
            >
              &times;
            </button>
            <img
              className="max-w-[90vw] max-h-[90vh] rounded-lg shadow-lg"
              src={modalImage}
              alt="Full view"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
