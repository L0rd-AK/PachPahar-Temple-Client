import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import { Scrollbar } from "swiper/modules";
import Marquee from "react-fast-marquee";

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
const Galary = () => {
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

  return (
    <>
      <div className="max-w-7xl mx-10 md:mx-auto my-10">
        <Marquee>
          <div>
            <img
              className="h-[300px] md:h-[600px] w-full rounded-lg object-cover object-top lg:object-center"
              src={images[4]}
              alt="gallery-photo"
            />
          </div>

          <div>
            <img
              className="h-[300px] md:h-[600px] w-full rounded-lg object-cover object-top lg:object-center"
              src={images[8]}
              alt="gallery-photo"
            />
          </div>

          <div>
            <img
              className="h-[300px] md:h-[600px] w-full rounded-lg object-cover object-top lg:object-center"
              src={images[9]}
              alt="gallery-photo"
            />
          </div>

          <div>
            <img
              className="h-[300px] md:h-[600px] w-full rounded-lg object-cover object-top lg:object-center"
              src={images[6]}
              alt="gallery-photo"
            />
          </div>

          <div>
            <img
              className="h-[300px] md:h-[600px] w-full rounded-lg object-cover object-top lg:object-center"
              src={images[14]}
              alt="gallery-photo"
            />
          </div>
        </Marquee>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 mt-16">
          <div className="grid gap-4">
            <div>
              <img
                className="h-[300px] w-[256px] rounded-lg object-cover object-center"
                src={images[13]}
                alt="gallery-photo"
              />
            </div>
            <div>
              <img
                className="h-[300px] w-[256px] rounded-lg object-cover object-center "
                src={images[1]}
                alt="gallery-photo"
              />
            </div>
            <div>
              <img
                className="h-[300px] w-[256px] rounded-lg object-cover object-center"
                src={images[2]}
                alt="gallery-photo"
              />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <img
                className="h-[300px] w-[256px] rounded-lg object-cover object-center"
                src={images[3]}
                alt="gallery-photo"
              />
            </div>
            <div>
              <img
                className="h-[300px] w-[256px] rounded-lg object-cover object-center"
                src={images[4]}
                alt="gallery-photo"
              />
            </div>
            <div>
              <img
                className="h-[300px] w-[256px] rounded-lg object-cover object-center "
                src={images[7]}
                alt="gallery-photo"
              />
            </div>
          </div>
          <div className="hidden md:grid gap-4">
            <div>
              <img
                className="h-[300px] w-[256px] rounded-lg object-cover object-center"
                src={images[8]}
                alt="gallery-photo"
              />
            </div>
            <div>
              <img
                className="h-[300px] w-[256px] rounded-lg object-cover object-center "
                src={images[9]}
                alt="gallery-photo"
              />
            </div>
            <div>
              <img
                className="h-[300px] w-[256px] rounded-lg object-cover object-center"
                src={images[10]}
                alt="gallery-photo"
              />
            </div>
          </div>
          <div className="hidden md:grid gap-4">
            <div>
              <img
                className="h-[300px] w-[256px] rounded-lg object-cover object-center"
                src={images[11]}
                alt="gallery-photo"
              />
            </div>
            <div>
              <img
                className="h-[300px] w-[256px] rounded-lg object-cover object-center"
                src={images[12]}
                alt="gallery-photo"
              />
            </div>
            <div>
              <img
                className="h-[300px] w-[256px] rounded-lg object-cover object-center"
                src={images[0]}
                alt="gallery-photo"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Galary;
