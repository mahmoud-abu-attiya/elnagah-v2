/* eslint-disable @next/next/no-img-element */
import React from "react";
import BtnArrow from "./BtnArrow";
import Image from "next/image";
// import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const FlipCard = ({ country }) => {
   // const settings = useSelector((state) => state.settings.value);
   return (
      <div className="flip-card rounded-3xl my-14">
         <div className="flip-card-inner rounded-3xl">
            <div className="flip-card-front rounded-3xl overflow-hidden p-4 flex">
               <span className="absolute block top-0 left-0 w-full h-full bg-black/25" ></span>
               <div className="w-full h-full object-cover absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <Image src={country.image}
                     alt={country.country.name}fill className="object-cover" quality={50}/>
               </div>
               <div className="flex w-full gap-8 justify-between items-center mt-auto">
                  <h3 className="title md:text-xl lg:text-2xl text-white font-bold mb-4">
                     {country.country.name}
                  </h3>
                  <span className="text-primary min-w-[3rem] w-12 h-12 border border-primary rounded-full flex justify-center items-center">
                     <span className="rotate-[225deg]">
                        <FontAwesomeIcon icon={faArrowRight} />
                     </span>
                  </span>
               </div>
            </div>
            <div className="flip-card-back rounded-3xl overflow-hidden bg-white text-secondary p-4 sm:p-6 flex flex-col gap-2 sm:gap-4 md:gap-6 items-start">
                  {/* <div className="logo">
                     <Image src={settings.logo || "https://backend.elnagahtravels.com/storage/settings/didgFvtLgGWlYchHOs3wNipuUlotvxd12JWpC6W9.png"} alt={`programs logo ${country.name}`} width={102}
                        height={70} quality={50} />
                  </div> */}
               <h3 className="md:text-xl lg:text-2xl font-bold">{country.country.name} </h3>
               <p>
                  <span>
                     {/* <BsFillCircleFill /> */}
                     {country.category.name}
                  </span>
               </p>
               <p>
                  <span>
                     {/* <BsFillCircleFill /> */}
                     سعر البرنامج
                  </span>
                  <span> {country.price_after_discount}</span> ريال سعودي
               </p>
               <p
                  style={{
                     display: 'flex',
                     justifyContent: ' flex-start',
                     alignItems: 'center',
                  }}
               >
                  <span>
                     {/* <BsFillCircleFill /> */}
                     بدلا من
                  </span>
                  <span style={{ textDecoration: 'line-through' }}>
                     {country.price}
                  </span>
               </p>
               <p>
                  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'>
                     <path d='m30.718 13.042.002-9.522a2.243 2.243 0 0 0-2.24-2.24l-9.52.002-.402-.002c-.83 0-1.62.048-2.19.618L1.822 16.442a1.83 1.83 0 0 0-.542 1.308c0 .495.192.96.542 1.308l11.12 11.12c.348.35.813.542 1.308.542.492 0 .96-.192 1.308-.542l14.544-14.546c.626-.622.62-1.52.618-2.384l-.002-.206zM24.96 8.96a1.92 1.92 0 1 1 .001-3.841 1.92 1.92 0 0 1-.001 3.841z'></path>
                  </svg>
                  وفر:
                  <span>{country.price - country.price_after_discount}</span>
                  ريال سعودي
               </p>
               <BtnArrow
                  title={"تفاصيل البرنامج"}
                  classes="self-end mt-auto text-primary mx-unset"
                  href={`/sales/${country.country.id}/${country.category.id}`}
               />
            </div>
         </div>
      </div>
   );
};

export default FlipCard;
