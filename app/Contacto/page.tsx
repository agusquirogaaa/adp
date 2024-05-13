import React from 'react';
import { FaWhatsapp, FaInstagram , FaFacebookSquare} from 'react-icons/fa';
import { CiMail } from "react-icons/ci";

export default function Contacto () {
    return (
        <>
    <h1 className='font-bold text-violetaoscuro text-2xl text-center mt-24'> Seguinos en nuestras redes</h1>
    <div className="flex items-center justify-center mt-12 gap-4">
      <a href="https://twitter.com/tucuenta" target="_blank" rel="noopener noreferrer" className="mx-2 text-violeta hover:text-blue-500">
        <FaWhatsapp size={34} />
      </a>
      <a href="https://www.instagram.com/tucuenta" target="_blank" rel="noopener noreferrer" className="mx-2 text-violeta hover:text-red-500">
        <FaInstagram size={34} />
      </a>
      <a href="https://www.linkedin.com/in/tucuenta" target="_blank" rel="noopener noreferrer" className="mx-2 text-violeta hover:text-blue-700">
        <FaFacebookSquare size={34} />
      </a>
      <a href="https://github.com/tucuenta" target="_blank" rel="noopener noreferrer" className="mx-2 text-violeta hover:text-gray-800">
        <CiMail size={34} />
      </a>
    </div>
        </>
    );
}