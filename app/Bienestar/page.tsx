"use client"

import NavBar from "../NavBar/page";
import Image from "next/image";
import FotoBienestar from "../../public/cuenco.jpg"
import { useState, useRef, useEffect } from 'react';
import { TfiThought } from "react-icons/tfi";
import { GiAwareness } from "react-icons/gi";
import { FaLeaf } from "react-icons/fa";
import { TbBowlFilled, TbDogBowl } from "react-icons/tb";
import { IoClose } from "react-icons/io5";

export default function Bienestar() {
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
            <div className='bg-violeta min-h-screen  flex flex-col xl:flex-row  relative  gap-5 pt-24 xl:pt-0  xl:pl-5' id="Bienestar">
                <div className={` xl:max-w-1/2 xl:pt-36 text-center ${isOpen ? 'darken' : ''}`}>
                    <h2 className='text-5xl md:text-5xl xl:text-8xl font-bold text-white xl:text-left '>Taller de Bienestar</h2>
                    <h3 className='text-lg md:text-lg lg:text-xl font-bold text-white xl:text-left mb-4 xl:mb-18'>Una visión holística sobre como acercarnos al Bienestar.   </h3>
                    <p className='text-white text-lg xl:text-2xl mx-2 xl:text-left pb-4 xl:pb-16'>Un ciclo de Encuentros en los que vamos reconociendo que situaciones nos generan estrés, como interpretamos la realidad según nuestros pensamientos, y como ello nos afecta a nivel físico, mental y emocional. Desde la toma de conciencia, del poder de asumirnos creadores y responsables de nuestra vida.</p>
                    <div className='xl:text-left'>
                        <button className="px-6 py-2 bg-white text-violeta xl:text-2xl rounded-lg font-bold transform hover:-translate-y-1 transition duration-400" onClick={toggleDrawer}>
                        Momentos
                        </button>
                    </div>
                </div>
                <div className="xl:mx-auto max-w-2xl xl:h-screen mb-12 xl:mb-0 ">
                    <Image src={FotoBienestar} alt="pilates" className=" h-full object-cover rounded-xl xl:rounded-none"/>
                </div>

            </div>
           




            {isOpen && (
    <div className="fixed inset-0 flex justify-center items-center z-20">
    <div className="fixed inset-0 bg-black bg-opacity-50" onClick={closeDrawer}></div>
    <div ref={drawerRef} className={`fixed inset-x-0 bottom-0 w-full bg-white rounded-t-2xl overflow-hidden transition-transform duration-500 ease-in-out transform ${isOpen ? 'translate-y-0' : 'translate-y-full'}`} onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
        <div className="p-2">
            <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl lg:text-2xl font-bold text-violeta mt-2">Momentos</h3>
                <button className="text-violeta" onClick={closeDrawer}><IoClose size={24} /></button>
            </div>
            <div className="text-violeta text-center grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-4">
                <div className="p-2 md:p-4 flex flex-col justify-center items-center gap-1">
                    <TfiThought className="text-violeta" size={32} />
                    <h4 className='text-sm lg:text-lg'>Pensamientos y emociones</h4>
                    <h5 className="text-sm xl:text-md text-verde">Auto observación. Identificar pensamientos y creencias limitantes. Reconocer y gestionar emociones.</h5>
                </div>
                <div className="p-2 md:p-4 flex flex-col justify-center items-center gap-1">
                    <GiAwareness className="text-violeta" size={32} />
                    <h4 className='text-sm lg:text-lg'>Movimientos y respiración consciente</h4>
                    <h5 className="text-sm xl:text-md text-verde">Reconocer sensaciones y liberar tensiones. Conectar con el cuerpo. Explorar, escuchando sus mensajes.</h5>
                </div>
                <div className="p-2 md:p-4 flex flex-col justify-center items-center gap-1">
                    <FaLeaf className="text-violeta" size={32} />
                    <h4 className='text-sm lg:text-lg'>Aromas naturales</h4> 
                    <h5 className="text-sm xl:text-md text-verde">Acompañan al equilibrio emocional, a cambiar estados de ánimo.</h5>
                </div>
                <div className="p-2 md:p-4 flex flex-col justify-center items-center gap-1">
                    <TbDogBowl className="text-violeta" size={32} />
                    <h4 className='text-sm lg:text-lg'>Relajación con Cuenco sonoro</h4>
                    <h5 className="text-sm xl:text-md text-verde">Induce a la relajación profunda. Regula ansiedad, el estrés. Aporta claridad mental, da sensación de paz y bienestar.</h5>
                </div>
            </div>
        </div>
    </div>
</div>

)}



        </>
    );
}



