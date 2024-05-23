"use client"
import React, { useRef, useEffect } from "react";
import Slider from "react-slick";
import Image from "next/image";
import Foto1 from "../../public/aromas.jpg";
import Foto2 from "../../public/aromas2.jpg";
import Foto3 from "../../public/aromas3.jpg";
import Foto4 from "../../public/aromas4.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Fotos() {
  const sliderRef = useRef<Slider | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      sliderRef.current?.slickNext();
    }, 2000); // Cambia la velocidad del carrusel aquí (3000 = 3 segundos)
    
    return () => clearInterval(interval);
  }, []);

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="min-h-screen bg-violeta py-24 flex justify-center items-center"> 
      <div className="w-full md:w-3/4 xl:w-1/2"> {/* Define el ancho del carrusel */}
        <h2 className="text-bold text-5xl text-white text-center mb-5">Carrousel</h2>
        <Slider ref={sliderRef} {...settings} className="w-full rounded-xl">
          <div className="carousel-item active">
            <Image src={Foto1} className="w-full h-auto rounded-xl border-0" alt="..." /> 
          </div>
          <div className="carousel-item">
            <Image src={Foto2} className="w-full h-auto rounded-xl border-0" alt="..." />
          </div>
          <div className="carousel-item">
            <Image src={Foto3} className="w-full h-auto rounded-xl border-0" alt="..." />
          </div>
        </Slider>
      </div>
    </div>
  );
}

