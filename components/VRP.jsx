import React, { useRef, useState, useEffect, useCallback } from "react";
import Link from "next/link";
import FlipCard from "./FlipCard";
import EmblaCarousel from "./EmblaCarousel";

export default function VRPSwiper({ data }) {
  const OPTIONS = {
    loop: true,
  }
  return (
    <section
      id="vrp"
      className="vrp text-white py-14 md:py-20 lg:py-24 overflow-hidden relative"
    >
      <div className="lg:grid lg:grid-cols-12 gap-20">
        <div className="lg:col-span-4 px-8 text-center lg:text-start lg:pr-20 flex flex-col justify-between ">
          <h2
            className="text-2xl md:text-4xl max-w-sm mx-auto lg:mx-0 lg:text-5xl leading-8 lg:leading-normal"
            data-aos="fade-right"
          >
            أحدث
            خصومات
            البرامج
            السياحية
          </h2>
          <div className="hidden lg:flex gap-10 text-gray-400">
            {/* <FractionArrows
              color={"#fff"}
              handleNext={handleNext}
              handlePrev={handlePrev}
            /> */}FractionArrows
          </div>
          <Link
            href={"#"}
            className="border-b text-white w-fit border-white text-xs hidden lg:block pb-2"
          >
            VIEW ALL PROGRAMS
          </Link>
        </div>
        <div className="pa-swiper lg:col-span-8">
          {/* <EmblaCarousel slides={data} options={OPTIONS} /> */}
        </div>
        <div className="flex lg:hidden col-span-12 flex-col gap-8 items-center">
          <div className="flex gap-10 text-gray-400 items-center">
            {/* <FractionArrows
              color={"#fff"}
              handleNext={handleNext}
              handlePrev={handlePrev}
              fraction={true}
              currentSlide={currentSlide}
              totalSlides={totalSlides}
            /> */}FractionArrows
          </div>
          <Link
            href={"#"}
            className="border-b text-white sm:my-16 w-fit mx-auto border-white text-xs block lg:hidden pb-2 md:absolute md:left-6 md:bottom-6 z-20 lg:static"
          >
            View More Programs
          </Link>
        </div>
      </div>
    </section>
  );
}