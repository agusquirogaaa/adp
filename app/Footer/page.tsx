import Image from 'next/image';
import Logo from "@/public/hblanco.png";
import { FaWhatsapp, FaInstagram , FaFacebookSquare} from 'react-icons/fa';
import { CiMail } from "react-icons/ci";


export default function Footer() {
  return (
    <footer className="bg-violetaoscuro text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col xl:flex-row items-center justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <Image src={Logo} alt="Logo" className="h-12 w-auto" />
            <span className="text-xl ml-2">Aires de Pausa </span>
          </div>
          <nav className="flex flex-col md:flex-row justify-center md:justify-end items-center text-center md:text-left">
            <a href="#Inicio" className="text-white text-decoration-none py-2 px-4 md:px-2 md:ml-4 md:mr-0 hover:text-gray-300">Inicio</a>
            <a href="#Servicios" className="text-white text-decoration-none py-2 px-4 md:px-2 md:ml-4 md:mr-0 hover:text-gray-300">Servicios</a>
            <a href="#Reflexiones" className="text-white text-decoration-none py-2 px-4 md:px-2 md:ml-4 md:mr-0 hover:text-gray-300">Reflexiones</a>
            <a href="#Recursos" className="text-white text-decoration-none py-2 px-4 md:px-2 md:ml-4 md:mr-0 hover:text-gray-300">Recursos</a>
            <a href="#Galeria" className="text-white text-decoration-none py-2 px-4 md:px-2 md:ml-4 md:mr-0 hover:text-gray-300">Galería</a>
            <a href="#Info" className="text-white text-decoration-none py-2 px-4 md:px-2 md:ml-4 md:mr-0 hover:text-gray-300">Quien Soy</a>
            
            </nav>

        </div>
        <div className="text-center mt-4">
          <p>&copy; {new Date().getFullYear()} Skyward Digital Solutions. Todos los derechos reservados.</p>
        </div>
        <div className="flex items-center justify-center mt-12 gap-4">
            <a href="https://wa.me/+5491134087446?text=Hola%20Andrea,%20quiero%20iniciar%20el%20camino%20hacia%20el%20bienestar" target="_blank" rel="noopener noreferrer" className="mx-2 text-white hover:text-violeta">
              <FaWhatsapp size={28} />
            </a>
            <a href="https://www.instagram.com/airesdepausa.af" target="_blank" rel="noopener noreferrer" className="mx-2 text-white hover:text-violeta">
              <FaInstagram size={28} />
            </a>
            <a href="https://www.facebook.com/airesdepausa.af" target="_blank" rel="noopener noreferrer" className="mx-2 text-white hover:text-violeta">
              <FaFacebookSquare size={28} />
            </a>
            <a href="mailto:airesdepausa.af@gmail.com?subject=Despertar%20la%20conciencia" target="_blank" rel="noopener noreferrer" className="mx-2 text-white hover:text-violeta">
              <CiMail size={28} />
            </a>
          </div>
      </div>
    </footer>
  );
}
