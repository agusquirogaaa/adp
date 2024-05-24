import React from 'react';
import { FaWhatsapp, FaInstagram , FaFacebookSquare} from 'react-icons/fa';
import { CiMail } from "react-icons/ci";

export default function Contacto () {
    return (
        <div className='bg-gray-100 py-24'>
          <h1 className='font-bold text-violetaoscuro text-2xl text-center'> Seguime en mis redes</h1>
          <div className="flex items-center justify-center mt-12 gap-4">
            <a href="https://twitter.com/tucuenta" target="_blank" rel="noopener noreferrer" className="mx-2 text-violeta hover:text-violetaoscuro">
              <FaWhatsapp size={34} />
            </a>
            <a href="https://www.instagram.com/tucuenta" target="_blank" rel="noopener noreferrer" className="mx-2 text-violeta hover:text-violetaoscuro ">
              <FaInstagram size={34} />
            </a>
            <a href="https://www.linkedin.com/in/tucuenta" target="_blank" rel="noopener noreferrer" className="mx-2 text-violeta hover:text-violetaoscuro">
              <FaFacebookSquare size={34} />
            </a>
            <a href="https://github.com/tucuenta" target="_blank" rel="noopener noreferrer" className="mx-2 text-violeta hover:text-violetaoscuro">
              <CiMail size={34} />
            </a>
          </div>
        </div>
    );
}