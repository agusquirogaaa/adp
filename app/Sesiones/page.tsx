"use client"

import Image from 'next/image';
import FotoSesiones from '../../public/sesiones.webp';
import NavBar from '../NavBar/page';
import { GrUpgrade } from "react-icons/gr";
import { GiMeditation, GiStrong } from "react-icons/gi";
import { FaPersonCircleCheck } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import Footer from '../Footer/page';
import { useState, useRef, useEffect } from 'react';
import { FaBrain, FaEyeDropper } from "react-icons/fa";
import { TbBowlFilled, TbFocus2, TbHandFinger } from "react-icons/tb";
import { MdOutlineCenterFocusWeak, MdOutlineEnergySavingsLeaf, MdOutlineSupportAgent } from "react-icons/md";
import { PiFlowerFill, PiHeadCircuitFill } from 'react-icons/pi';



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
                    <h2 className='text-5xl md:text-5xl xl:text-8xl font-bold text-white xl:text-left mb-4 xl:mb-12'> Sesiones Holísticas</h2>
                    <p className='text-white text-lg xl:text-2xl mx-2 xl:text-left pb-2 xl:pb-16'> Cada resultado en la vida, es consecuencia de un estado mental, de tus pensamientos.
<br />
El mundo es ... según tus proyecciones e interpretaciones, tus creencias, tus programas.
<br />
Si hay un conflicto, hay estrés.Si no tomas conciencia y gestionas las emociones, el malestar persiste, y el síntoma,tu cuerpo, lo expresará por ti.  
<br />
Te propongo un espacio para auto observarte,  reconocer tus patrones limitantes, transformarte, y desde una nueva mirada, comenzar a accionar y  desplegar tu potencial.
<br />
Sesiones individuales o Encuentros grupales.</p>
                    <div className='xl:text-left'>
                        <button className="px-6 py-2 bg-white text-violeta xl:text-2xl rounded-lg font-bold transform hover:-translate-y-1 transition duration-400" onClick={toggleDrawer}>
                        Abordaje Integral   
                        </button>
                    </div>
                </div>
                <div className="xl:mx-auto max-w-2xl xl:h-screen mb-12 xl:mb-0 ">
                    <Image src={FotoSesiones} alt="pilates" className=" h-full object-cover rounded-xl xl:rounded-none"/>
                </div>

            </div>
            <Footer />

            {isOpen && (
    <div className="fixed inset-0 flex justify-center items-center z-20">
        <div className="fixed inset-0 bg-black bg-opacity-50" onClick={closeDrawer}></div>
        <div ref={drawerRef} className={`fixed inset-x-0 bottom-0 w-full bg-white rounded-t-2xl overflow-hidden transition-transform duration-500 ease-in-out transform ${isOpen ? 'translate-y-0' : 'translate-y-full'}`} onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
            <div className="p-4">
                <div className="flex items-center justify-between mb-4"> {/* Contenedor flex para alinear elementos */}
                    <h3 className="text-2xl lg:text-5xl font-bold text-violeta mt-4">Abordaje integral</h3>
                    <button className="text-violeta" onClick={closeDrawer}><IoClose size={30} /></button>
                </div>
                <div className="text-violeta text-center  grid grid-cols-3 ">
                    <div className="p-4 flex flex-col justify-center items-center gap-2">
                        < FaBrain className="text-violeta" size={40} />
                        <h4 className='text-sm lg:text-lg'>Neurociencias</h4>
                    </div>
                    <div className="p-4 flex flex-col justify-center items-center gap-2">
                        <MdOutlineSupportAgent className="text-violeta" size={40} />
                        <h4 className='text-sm lg:text-lg'> Coaching</h4>
                    </div>
                    <div className="p-4 flex flex-col justify-center items-center gap-2">
                        < PiHeadCircuitFill className="text-violeta" size={40} />
                        <h4 className='text-sm lg:text-lg'>Biodecodificación</h4>
                    </div>
                    <div className="p-4 flex flex-col justify-center items-center gap-2">
                        <TbHandFinger className="text-violeta" size={40} />
                        <h4 className='text-sm lg:text-lg'>Tapping</h4>
                    </div>
                    <div className="p-4 flex flex-col justify-center items-center gap-2">
                        <FaEyeDropper className="text-violeta" size={40} />
                        <h4 className='text-sm lg:text-lg'>Flores de Bach</h4>
                    </div>
                    <div className="p-4 flex flex-col justify-center items-center gap-2">
                        <PiFlowerFill className="text-violeta" size={40} />
                        <h4 className='text-sm lg:text-lg'>Aromaterapia</h4>
                    </div>
                    <div className="p-4 flex flex-col justify-center items-center gap-2">
                        <MdOutlineEnergySavingsLeaf className="text-violeta" size={40} />
                        <h4 className='text-sm lg:text-lg'>Psicobioenergía</h4>
                    </div>
                    <div className="p-4 flex flex-col justify-center items-center gap-2">
                        <GiMeditation   className="text-violeta" size={40} />
                        <h4 className='text-sm lg:text-lg'>Reiki</h4>
                    </div>
                    <div className="p-4 flex flex-col justify-center items-center gap-2">
                        <TbBowlFilled className="text-violeta" size={40} />
                        <h4 className='text-sm lg:text-lg'>Cuencos Sonoros</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
)}



        </>
    );
}
