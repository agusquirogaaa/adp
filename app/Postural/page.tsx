"use client"
import NavBar from "../NavBar/page";
import Image from "next/image";
import FotoPostural from "../../public/gimpost.webp"
import { GrUpgrade } from "react-icons/gr";
import { GiStrong } from "react-icons/gi";
import { MdDoNotStep } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import Footer from "../Footer/page";
import { useState, useRef, useEffect } from 'react';


export default function Pilates() {
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
            <div className='bg-violeta min-h-screen  flex flex-col xl:flex-row justify-center items-center xl:items-start  relative  gap-5 pt-24 xl:pt-0  xl:pl-5' id="Postural">
                <div className="xl:mx-auto max-w-2xl xl:h-screen mb-12 xl:mb-0 order-2 xl:order-1 ">
                    <Image src={FotoPostural} alt="gim" className='h-full object-cover rounded-xl xl:rounded-none'/>
                </div>
                <div className={`xl:max-w-1/2 xl:pt-36 text-center  order-1 md:order-2  ${isOpen ? 'darken' : ''}`}>
                    <h2 className='text-5xl md:text-5xl xl:text-8xl font-bold text-white xl:text-left mb-4 xl:mb-12'>Gimnasia Postural <br/>Elongación Postural Global</h2>
                    <p className='text-white text-lg xl:text-2xl mx-2 xl:text-left pb-4 xl:pb-16'> Corregir posturas viciadas y erróneas, a través de ejercicios preventivos y ergonómicos para evitar consecuencias como fatiga, dolores musculares, lesiones. Y proyectar una vida saludable e independiente.
                    Una fusión de las 2 técnicas para lograr un entrenamiento postural óptimo. Los músculos no trabajan de forma aislada, están interconectados, creando cadenas musculares. Estas redistribuyen la fuerza a través de las diferentes regiones del cuerpo, mediante el tejido fascial, ya sea para mantener una postura o realizar un gesto de manera coordinada. </p>
                    <div className="xl:text-left">
                     <button className="px-6 py-2 bg-white text-violeta xl:text-2xl rounded-lg font-bold transform hover:-translate-y-1 transition duration-400" onClick={toggleDrawer}>
                        Beneficios de la actividad
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
            



            
            {isOpen && (
    <div className="fixed inset-0 flex justify-center items-center z-20">
        <div className="fixed inset-0 bg-black bg-opacity-50" onClick={closeDrawer}></div>
        <div ref={drawerRef} className={`fixed inset-x-0 bottom-0 w-full bg-white rounded-t-2xl overflow-hidden transition-transform duration-500 ease-in-out transform ${isOpen ? 'translate-y-0' : 'translate-y-full'}`} onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
            <div className="p-4">
                <div className="flex items-center justify-between mb-4"> {/* Contenedor flex para alinear elementos */}
                    <h3 className="text-2xl lg:text-5xl font-bold text-violeta mt-4">Beneficios</h3>
                    <button className="text-violeta" onClick={closeDrawer}><IoClose size={30} /></button>
                </div>
                <div className="text-violeta text-center  grid lg:grid-cols-3 gap-4">
                    <div className="p-4 flex flex-col justify-center items-center gap-2">
                        <GrUpgrade className="text-violeta" size={40} />
                        <h4 className='text-sm lg:text-lg'>Mejora la Flexibilidad</h4>
                    </div>
                    <div className="p-4 flex flex-col justify-center items-center gap-2">
                        <GiStrong className="text-violeta" size={40} />
                        <h4 className='text-sm lg:text-lg'> Fortalece músculos</h4>
                    </div>
                    <div className="p-4 flex flex-col justify-center items-center gap-2">
                        <MdDoNotStep className="text-violeta" size={40} />
                        <h4 className='text-sm lg:text-lg'>Evitar la retracción, rigidez y previene lesiones</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
)}



        </>
    );
}
