import React from "react";
import Slider from "react-slick";

// Importa los estilos de slick-carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Carrousel() {
  // Configuración del carrousel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    <div className="h-screen bg-violeta py-24" id="Fotos">
      <h2 className="text-bold text-5xl text-white text-center pt-12 mb-5">Carrousel</h2>
      <Slider {...settings}>
        <div>
          <img src="https://via.placeholder.com/1200x600" alt="Slide 1" />
        </div>
        <div>
          <img src="https://via.placeholder.com/1200x600" alt="Slide 2" />
        </div>
        <div>
          <img src="https://via.placeholder.com/1200x600" alt="Slide 3" />
        </div>
        {/* Agrega más slides según sea necesario */}
      </Slider>
    </div>
  );
}
