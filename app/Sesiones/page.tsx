"use client"

import Image from 'next/image';
import FotoPilates from '../../public/pilates.jpg';
import NavBar from '../NavBar/page';
import { GrUpgrade } from "react-icons/gr";
import { GiStrong } from "react-icons/gi";
import { FaPersonCircleCheck } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import Footer from '../Footer/page';
import { useState, useRef, useEffect } from 'react';
import { FaBrain } from "react-icons/fa";
import { FaLungs } from "react-icons/fa";
import { IoIosBody } from "react-icons/io";
import { GiLeafSwirl } from "react-icons/gi";
import { TbFocus2 } from "react-icons/tb";
import { MdOutlineCenterFocusWeak } from "react-icons/md";



export default function Sesiones() {
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
            <div className='bg-violeta min-h-screen  flex flex-col xl:flex-row  relative  gap-5 pt-24 xl:pt-0  xl:pl-5' id="Pilates">
                <div className={` xl:max-w-1/2 xl:pt-36 text-center ${isOpen ? 'darken' : ''}`}>
                    <h2 className='text-5xl md:text-5xl xl:text-8xl font-bold text-white xl:text-left mb-4 xl:mb-12'>Pilates con elementos</h2>
                    <p className='text-white text-lg xl:text-2xl mx-2 xl:text-left pb-2 xl:pb-16'> El método proporciona una experiencia completa de bienestar físico y mental, que favorece la postura adecuada, la conciencia corporal, la flexibilidad, la coordinación y el fortalecimiento muscular. A través de la práctica, logramos alcanzar una correcta alineación, prevenir dolores de espalda, fortalecer el núcleo y los músculos, mejorar la circulación sanguínea, reducir el estrés y favorecer la relajación. Conlleva al equilibrio óptimo entre cuerpo y mente, promoviendo una vida saludable y plena.</p>
                    <div className='xl:text-left'>
                        <button className="px-6 py-2 bg-white text-violeta xl:text-2xl rounded-lg font-bold transform hover:-translate-y-1 transition duration-400" onClick={toggleDrawer}>
                        Principios del método
                        </button>
                    </div>
                </div>
                <div className=" mx-2 xl:mx-auto max-w-2xl xl:h-screen mb-12 xl:mb-0 ">
                    <Image src={FotoPilates} alt="pilates" className=" h-full object-cover rounded-xl xl:rounded-none"/>
                </div>

            </div>
            <Footer />

            {isOpen && (
    <div className="fixed inset-0 flex justify-center items-center z-20">
        <div className="fixed inset-0 bg-black bg-opacity-50" onClick={closeDrawer}></div>
        <div ref={drawerRef} className={`fixed inset-x-0 bottom-0 w-full bg-white rounded-t-2xl overflow-hidden transition-transform duration-500 ease-in-out transform ${isOpen ? 'translate-y-0' : 'translate-y-full'}`} onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
            <div className="p-4">
                <div className="flex items-center justify-between mb-4"> {/* Contenedor flex para alinear elementos */}
                    <h3 className="text-2xl lg:text-5xl font-bold text-violeta mt-4">Principios del método pilates</h3>
                    <button className="text-violeta" onClick={closeDrawer}><IoClose size={30} /></button>
                </div>
                <div className="text-violeta text-center  grid grid-cols-3 gap-4">
                    <div className="p-4 flex flex-col justify-center items-center gap-2">
                        < FaBrain className="text-violeta" size={40} />
                        <h4 className='text-sm lg:text-lg'>Concentración</h4>
                    </div>
                    <div className="p-4 flex flex-col justify-center items-center gap-2">
                        <FaLungs className="text-violeta" size={40} />
                        <h4 className='text-sm lg:text-lg'> Respiración</h4>
                    </div>
                    <div className="p-4 flex flex-col justify-center items-center gap-2">
                        < IoIosBody className="text-violeta" size={40} />
                        <h4 className='text-sm lg:text-lg'>Control</h4>
                    </div>
                    <div className="p-4 flex flex-col justify-center items-center gap-2">
                        <GiLeafSwirl className="text-violeta" size={40} />
                        <h4 className='text-sm lg:text-lg'>Fluidez</h4>
                    </div>
                    <div className="p-4 flex flex-col justify-center items-center gap-2">
                        <TbFocus2 className="text-violeta" size={40} />
                        <h4 className='text-sm lg:text-lg'>Precisión</h4>
                    </div>
                    <div className="p-4 flex flex-col justify-center items-center gap-2">
                        <MdOutlineCenterFocusWeak className="text-violeta" size={40} />
                        <h4 className='text-sm lg:text-lg'>Centralización</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
)}



        </>
    );
}
