import Image from 'next/image';
import Logo from "@/public/hblanco.png";

export default function Footer() {
  return (
    <footer className="bg-violetaoscuro text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <Image src={Logo} alt="Logo" className="h-12 w-auto" />
            <span className="text-xl ml-2">Aires de Pausa </span>
          </div>
          <nav className="flex flex-col md:flex-row justify-center md:justify-end items-center text-center md:text-left">
            <a href="#" className="text-white text-decoration-none py-2 px-4 md:px-2 md:ml-4 md:mr-0 hover:text-gray-300">Inicio</a>
            <a href="#servicios" className="text-white text-decoration-none py-2 px-4 md:px-2 md:ml-4 md:mr-0 hover:text-gray-300">Servicios</a>
            <a href="#" className="text-white text-decoration-none py-2 px-4 md:px-2 md:ml-4 md:mr-0 hover:text-gray-300">Reflexiones</a>
            <a href="#" className="text-white text-decoration-none py-2 px-4 md:px-2 md:ml-4 md:mr-0 hover:text-gray-300">Quien Soy</a>
            <a href="#" className="text-white text-decoration-none py-2 px-4 md:px-2 md:ml-4 md:mr-0 hover:text-gray-300">Contacto</a>
            </nav>

        </div>
        <div className="text-center mt-4">
          <p>&copy; {new Date().getFullYear()} Tu Compañía. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
