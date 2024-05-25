"use client"

import React, { useRef, useEffect } from "react";
import Slider from "react-slick";
import Image from "next/image";
import Foto1 from "../../public/aromasrecorte.jpg";
import Foto2 from "../../public/calendula2.jpeg";
import Foto3 from "../../public/recortearomas.jpg";
import Foto4 from "../../public/manzanillas.jpeg";
import Foto5 from "../../public/rosas.jpeg";
import Foto6 from "../../public/sahumar.jpeg";
import Foto7 from "../../public/grupoencuentros.jpeg";
import Foto8 from "../../public/taller.jpeg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

export default function Fotos() {
  const sliderRef = useRef<Slider | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      sliderRef.current?.slickNext();
    }, 5000); // Cambia la velocidad del carrusel aquí (5000 = 5 segundos)

    return () => clearInterval(interval);
  }, []);

  const settings = {
    dots: false,
    arrows: false, // Desactiva las flechas predeterminadas
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="min-h-screen bg-violeta py-24 flex justify-center items-center relative"> {/* Añade relative para posicionamiento relativo */}
      <div className="w-full md:w-3/4 xl:w-1/2 relative"> {/* Define el ancho del carrusel */}
        <h2 className="text-bold text-5xl text-white text-center mb-5">Galería</h2>
        <Slider ref={sliderRef} {...settings} className="w-full rounded-xl relative">
          <div className="carousel-item relative">
            <Image src={Foto1} className="w-full h-full rounded-xl object-cover" alt="..." />
            <FaAngleLeft className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white text-3xl cursor-pointer hover:text-gray-300" onClick={() => sliderRef.current?.slickPrev()} />
            <FaAngleRight className="absolute top-1/2 right-0 transform -translate-y-1/2 text-white text-3xl cursor-pointer hover:text-gray-300" onClick={() => sliderRef.current?.slickNext()} />
          </div>
          <div className="carousel-item relative">
            <Image src={Foto2} className="w-full h-full rounded-xl object-cover" alt="..." />
            <FaAngleLeft className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white text-3xl cursor-pointer hover:text-gray-300" onClick={() => sliderRef.current?.slickPrev()} />
            <FaAngleRight className="absolute top-1/2 right-0 transform -translate-y-1/2 text-white text-3xl cursor-pointer hover:text-gray-300" onClick={() => sliderRef.current?.slickNext()} />
          </div>
          <div className="carousel-item relative">
            <Image src={Foto3} className="w-full h-full rounded-xl object-cover" alt="..." />
            <FaAngleLeft className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white text-3xl cursor-pointer hover:text-gray-300" onClick={() => sliderRef.current?.slickPrev()} />
            <FaAngleRight className="absolute top-1/2 right-0 transform -translate-y-1/2 text-white text-3xl cursor-pointer hover:text-gray-300" onClick={() => sliderRef.current?.slickNext()} />
          </div>
          <div className="carousel-item relative">
            <Image src={Foto4} className="w-full h-full rounded-xl object-cover" alt="..." />
            <FaAngleLeft className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white text-3xl cursor-pointer hover:text-gray-300" onClick={() => sliderRef.current?.slickPrev()} />
            <FaAngleRight className="absolute top-1/2 right-0 transform -translate-y-1/2 text-white text-3xl cursor-pointer hover:text-gray-300" onClick={() => sliderRef.current?.slickNext()} />
          </div>
          <div className="carousel-item relative">
            <Image src={Foto5} className="w-full h-full rounded-xl object-cover" alt="..." />
            <FaAngleLeft className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white text-3xl cursor-pointer hover:text-gray-300" onClick={() => sliderRef.current?.slickPrev()} />
            <FaAngleRight className="absolute top-1/2 right-0 transform -translate-y-1/2 text-white text-3xl cursor-pointer hover:text-gray-300" onClick={() => sliderRef.current?.slickNext()} />
          </div>
          <div className="carousel-item relative">
            <Image src={Foto6} className="w-full h-full rounded-xl object-cover" alt="..." />
            <FaAngleLeft className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white text-3xl cursor-pointer hover:text-gray-300" onClick={() => sliderRef.current?.slickPrev()} />
            <FaAngleRight className="absolute top-1/2 right-0 transform -translate-y-1/2 text-white text-3xl cursor-pointer hover:text-gray-300" onClick={() => sliderRef.current?.slickNext()} />
          </div>
          <div className="carousel-item relative">
            <Image src={Foto7} className="w-full h-full rounded-xl object-cover" alt="..." />
            <FaAngleLeft className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white text-3xl cursor-pointer hover:text-gray-300" onClick={() => sliderRef.current?.slickPrev()} />
            <FaAngleRight className="absolute top-1/2 right-0 transform -translate-y-1/2 text-white text-3xl cursor-pointer hover:text-gray-300" onClick={() => sliderRef.current?.slickNext()} />
          </div>
          <div className="carousel-item relative">
            <Image src={Foto8} className="w-full h-full rounded-xl object-cover" alt="..." />
            <FaAngleLeft className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white text-3xl cursor-pointer hover:text-gray-300" onClick={() => sliderRef.current?.slickPrev()} />
            <FaAngleRight className="absolute top-1/2 right-0 transform -translate-y-1/2 text-white text-3xl cursor-pointer hover:text-gray-300" onClick={() => sliderRef.current?.slickNext()} />
          </div>
          
          
        </Slider>
      </div>
    </div>
  );
}
