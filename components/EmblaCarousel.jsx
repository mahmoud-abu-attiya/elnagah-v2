import React from 'react'
import 'keen-slider/keen-slider.min.css'
import FlipCard from './FlipCard'
import { useKeenSlider } from 'keen-slider/react' // import from 'keen-slider/react.es' for to get an ES module

export default function EmblaCarousel({ slides, options }) {
  const [sliderRef] = useKeenSlider({
    loop: false,
    mode: "snap",
    rtl: false,
    slides: { perView: "auto" },
  })

  return (
    <div ref={sliderRef} className="keen-slider">
      {slides.map((slide, index) => (
        <div key={index} className="keen-slider__slide">
          <FlipCard country={slide} />
        </div>
      ))}
    </div>
  )
}