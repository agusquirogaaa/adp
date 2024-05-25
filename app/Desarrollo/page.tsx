"use client"

import NavBar from "../NavBar/page";
import Image from "next/image";
import FotoBienestar from "../../public/desarrollo.jpg"
import { useState, useRef, useEffect } from 'react';
import { TfiThought } from "react-icons/tfi";
import { GiAwareness } from "react-icons/gi";
import { FaLeaf } from "react-icons/fa";
import { TbBowlFilled, TbDogBowl } from "react-icons/tb";
import { IoClose } from "react-icons/io5";
import { FaBrain } from "react-icons/fa";
import { FaLungs } from "react-icons/fa";
import { ImUnlocked } from "react-icons/im";
import Footer from "../Footer/page";

export default function Desarrollo() {
    const [isOpen, setIsOpen] = useState(false);
    const [startY, setStartY] = useState(0);
    const drawerRef = useRef<HTMLDivElement>(null);

    const toggleDrawer = () => {
        setIsOpen(!isOpen);
    };

    const closeDrawer = () => {
        setIsOpen(false);
    };

    const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
        setStartY(e.touches[0].clientY);
    };

    const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
        const currentY = e.touches[0].clientY;
        if (currentY - startY > 100) {
            setIsOpen(false);
        }
    };

    const handleClickOutside = (event:any) => {
        if (drawerRef.current && !drawerRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <>
            <NavBar />
            <div className='bg-violeta min-h-screen  flex flex-col xl:flex-row  relative  gap-5 pt-24 xl:pt-0  xl:pl-5' id="Desarrollo">
                <div className={` xl:max-w-1/2 xl:pt-36 text-center ${isOpen ? 'darken' : ''}`}>
                    <h2 className='text-5xl md:text-5xl xl:text-8xl font-bold text-white xl:text-left  '>Taller de Desarrollo Personal </h2>
                    <h3 className='text-md md:text-lg lg:text-xl font-bold text-white xl:text-left mb-4 xl:mb-12'>Transformación y Conciencia   </h3>
                    <p className='text-white text-lg xl:text-2xl mx-2 xl:text-left pb-4 xl:pb-16'>El crecimiento y desarrollo personal nos inspira y entrena en nuestro autoconocimiento profundo, para desplegar todo nuestro potencial. Empoderarte es cuestionarte todo lo que has hecho, tus creencias, tus pensamientos, tu manera de interpretar la realidad.
El autoconocimiento es el primer paso del camino hacia tu propósito. Conecta con tu pasión, vive una vida plena y consciente.

 </p>
                    <div className='xl:text-left'>
                        <button className="px-6 py-2 bg-white text-violeta xl:text-2xl rounded-lg font-bold transform hover:-translate-y-1 transition duration-400" onClick={toggleDrawer}>
                        Metas
                        </button>
                    </div>
                </div>
                <div className=" xl:mx-auto max-w-2xl xl:h-screen mb-12 xl:mb-0 ">
                    <Image src={FotoBienestar} alt="pilates" className=" h-full object-cover rounded-xl xl:rounded-none"/>
                </div>

            </div>
            <Footer />
           




            {isOpen && (
    <div className="fixed inset-0 flex justify-center items-center z-20">
        <div className="fixed inset-0 bg-black bg-opacity-50" onClick={closeDrawer}></div>
        <div ref={drawerRef} className={`fixed inset-x-0 bottom-0 w-full bg-white rounded-t-2xl overflow-hidden transition-transform duration-500 ease-in-out transform ${isOpen ? 'translate-y-0' : 'translate-y-full'}`} onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
            <div className="p-4">
                <div className="flex items-center justify-between mb-4"> {/* Contenedor flex para alinear elementos */}
                    <h3 className="text-2xl lg:text-5xl font-bold text-violeta mt-4">Metas</h3>
                    <button className="text-violeta" onClick={closeDrawer}><IoClose size={30} /></button>
                </div>
                <div className="text-violeta text-center  grid grid-cols-3 gap-4">
                    <div className="p-4 flex flex-col justify-center items-center gap-2">
                        < FaBrain className="text-violeta" size={40} />
                        <h4 className='text-sm lg:text-lg'>Poder interior</h4>
                    </div>
                    <div className="p-4 flex flex-col justify-center items-center gap-2">
                        <FaLungs className="text-violeta" size={40} />
                        <h4 className='text-sm lg:text-lg'> Creá tu realidad</h4>
                    </div>
                    <div className="p-4 flex flex-col justify-center items-center gap-2">
                        < ImUnlocked className="text-violeta" size={40} />
                        <h4 className='text-sm lg:text-lg'>Reprograma tu mente</h4>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>

)}



        </>
    );
}





{/*


        <div className='relative h-screen bg-black'>
                <div className='absolute inset-0 overflow-hidden'>
                    <Image src={FotoPostural} alt="Foto de Postural" layout="fill" objectFit="cover" className='opacity-20 mt-16' />
                </div>
                
                <div className='absolute inset-0 h-full flex '>
                    <div className=''>
                        <div className='pt-32 ml-5 '>
                            <div className='flex flex-col md:flex-row justify-between items-end mb-20'>
                                <h2 className='text-4xl md:text-5xl lg:text-7xl font-bold text-violeta'>Taller de Desarrollo Personal</h2>
                                <h3 className='text-white text-lg mr-5 md:text-base lg:text-lg xl:text-xl'>Transformación y Conciencia</h3>
                            </div>
                        </div>
                        <div className="flex">
                             <h4 className='mb-10 ml-5 text-white text-3xl mr-48 w-3/4'>El crecimiento y desarrollo personal nos inspira y entrena en nuestro autoconocimiento profundo, para desplegar todo nuestro potencial. Empoderarte es cuestionarte todo lo que has hecho, tus creencias, tus pensamientos, tu manera de interpretar la realidad. Entrena tu poder interior para regresar a tu centro. Entrena el arte de elegir como vivir, desde tu ego o desde tu verdad. Si prefieres tener razón o tener paz. El autoconocimiento es el primer paso del camino hacia tu propósito. Conecta con tu pasión, vive una vida plena y consciente.</h4>
                             <div className="w-1/4">
                             <Image src={FotoPostural} alt="foto" className="w-48" /> 
                            </div>  
                        </div>
                    
                    </div>

                </div>
            </div>
*/}