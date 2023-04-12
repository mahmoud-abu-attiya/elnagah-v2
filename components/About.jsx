import { useState } from "react";
import BtnArrow from "./BtnArrow";
import Image from "next/image";

const About = ({ data }) => {
   const [active, setActive] = useState(2);

   return (
      <section className="py-16 lg:py-24 relative bg-no-repeat bg-cover bg-center">
         {data.map((img, i) => {
            return (
               <Image key={i} src={img.image} fill alt={img.subtitle}
                  className={`${active === i ? "opacity-100" : "opacity-0"
                     } z-0 w-full h-full bg-cover bg-center absolute top-1/2 left-1/2 object-cover`}
               />
            );
         })}
         <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-20">
            <span className="sr-only">overlay</span>
         </div>
         <div className="container flex flex-col text-white relative z-30">
            <h2
               data-aos="fade-down"
               className="text-2xl md:text-3xl lg:text-5xl leading-8 lg:leading-normal w-fit mx-auto mb-16"
            >
               عن وسام النجاح
            </h2>
            <div className="flex flex-col items-center gap-6 lg:gap-14">
               <div className="flex max-w-2xl justify-around w-full lg:text-2xl relative">
                  {data.map((tab, i) => {
                     return (
                        <button
                           key={i}
                           onClick={() => setActive(i)}
                           className={`${active === i ? "text-white" : "text-white/50"
                              } py-3 px-4 md:py-6 md:px-10 relative z-20 text-sm md:text-xl`}
                        >
                           {tab.title}
                        </button>
                     );
                  })}
                  <div
                     className={`transition-all absolute h-full w-1/3 backdrop-blur rounded-full bg-[rgba(255,255,255,.1)] ${active === 2 ? "left-0" : ""
                        }${active === 1 ? "left-1/2 -translate-x-1/2" : ""}${active === 0 ? "left-full -translate-x-full" : ""
                        }`}
                  ><span className="sr-only">text</span></div>
               </div>
               <div className="grid grid-col-1 md:grid-cols-2 gap-8 mt-60 lg:mt-72 xl:mb-32">
                  <div data-aos="fade-right" className="max-w-xl">
                     <h3 className="text-xl md:text-2xl lg:text-5xl leading-8 lg:leading-normal">
                        {data[active].subtitle}
                     </h3>
                  </div>
                  <div
                     data-aos="fade-left"
                     className="max-w-xl flex flex-col gap-6 justify-between"
                  >
                     <p className="text-sm lg:text-lg text-gray-100">
                        {data[active].content}
                     </p>
                     <BtnArrow title={data[active].title} href={active.btnHref} />
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default About;
