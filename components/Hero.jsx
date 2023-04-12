import React, { useEffect, useRef, useState, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { EffectFade, Autoplay, Pagination } from "swiper";
import BtnArrow from "./BtnArrow";
import Image from "next/image";

export default function Hero({ data }) {
   const sliderRef = useRef(null);
   const [currentPagination, setCurrentPagination] = useState(1);
   const [totalPagination, setTotalPagination] = useState(0);

   const handlePrev = useCallback(() => {
      if (!sliderRef.current) return;
      sliderRef.current.swiper.slidePrev();
   }, []);

   const handleNext = useCallback(() => {
      if (!sliderRef.current) return;
      sliderRef.current.swiper.slideNext();
   }, []);

   useEffect(() => {
      setTotalPagination(totalPagination => {
         const paginationTotal = sliderRef.current?.swiper?.pagination?.el?.querySelector('.swiper-pagination-total');
         return paginationTotal ? Number(paginationTotal.innerHTML) : totalPagination;
      });
   }, []);
   return (
      <div className="h-screen w-full">
         <Swiper
            ref={sliderRef}
            effect={"fade"}
            speed={1000}
            allowTouchMove={false}
            pagination={{
               type: "fraction",
            }}
            autoplay={{
               delay: 2500,
               disableOnInteraction: false,
            }}
            loop={true}
            modules={[EffectFade, Pagination, Autoplay]}
            className="mySwiper h-full heroSwiper"
            onSlideChange={(swiper) => {
               setCurrentPagination(swiper.realIndex + 1);
            }}
         >
            {data.map((slide, index) => {
               return (
                  <SwiperSlide key={index}>
                     <div className="absolute w-full h-full top-0 left-0 bg-black/50 z-20">
                        <span className="sr-only">overlay</span>
                     </div>
                     <div className="h-full w-full text-white flex items-center justify-center text-center container pb-20">
                        <Image src={slide.image} fill alt="one" className="object-cover" quality={80} style={{ objectPosition: index == 0 ? "70% center" : "center" }} priority />
                        <div className="content relative z-30 flex flex-col items-center">
                           {slide.title && <h1 className="text-2xl md:text-3xl lg:text-5xl max-w-3xl mb-6 lg:mb-14">
                              {slide.title}
                           </h1>}
                           <BtnArrow
                              title={slide.button_text}
                              href={slide.link}
                              classes={"mx-auto sm:mx-0"}
                           />
                        </div>
                     </div>
                  </SwiperSlide>
               )
            })}

            <div className="flex gap-10 w-fit items-center absolute justify-center left-1/2 -translate-x-1/2 bottom-6 sm:bottom-16 lg:bottom-20 z-10">
               <button
                  className="prev-arrow opacity-70 hover:opacity-100 transition hover:translate-x-4 duration-300"
                  onClick={handleNext}
               >
                  <div className="w-[3.5rem] sm:w-[3.5rem] md:w-auto">
                  <Image src={"/prev-arrow.svg"} alt="prev-arrow" width={100} height={100} />
                  </div>
               </button>
               <div style={{ color: "#fff" }} className="whitespace-nowrap w-16 text-sm text-center">
                  <span className="bold">{currentPagination}</span> /{" "}
                  <span className="opacity-60 bold">{totalPagination}</span>
               </div>
               <button
                  className="next-arrow opacity-70 hover:opacity-100 transition hover:-translate-x-4 duration-300"
                  onClick={handlePrev}
               >
                  <div className="w-[3.5rem] sm:w-[3.5rem] md:w-auto">
                  <Image src={"/next-arrow.svg"} alt="next-arrow" width={100} height={100} />
                  </div>
               </button>

            </div>
         </Swiper>
         <a href="#vrp" className="hidden lg:flex scrolDown text-xs z-10">
            حرك الفأرة لأسفل
         </a>
      </div>
   );
}