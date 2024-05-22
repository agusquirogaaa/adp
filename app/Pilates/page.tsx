"use client"

import Image from 'next/image';
import FotoPilates from '../../public/fondopilates2.avif';
import NavBar from '../NavBar/page';
import { GrUpgrade } from "react-icons/gr";
import { GiStrong } from "react-icons/gi";
import { FaPersonCircleCheck } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import Footer from '../Footer/page';
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
            <div className='bg-violeta min-h-screen flex flex-col gap-10 relative'>
                <div className={`pt-24 mx-auto max-w-3xl text-center ${isOpen ? 'darken' : ''}`}>
                    <h2 className='text-6xl md:text-5xl lg:text-8xl font-bold text-white mb-10'>Pilates</h2>
                    <p className='text-white text-xl mx-1'>El ejercicio como hábito de vida, aprender cómo adoptar posturas y realizar movimientos de la vida cotidiana de la forma más adecuada, corregir posturas viciadas y erróneas, a través de ejercicios preventivos y ergonómicos para evitar consecuencias como fatiga, dolores musculares, lesiones. Y proyectar una vida saludable e independiente.</p>
                    <div>
                        <button className="bg-white text-violeta px-6 py-2 rounded-md font-bold mt-8" onClick={toggleDrawer}>Beneficios</button>
                    </div>
                </div>
                <div className="mx-auto max-w-3xl">
                    <Image src={FotoPilates} alt="pilates" className='rounded-xl'/>
                </div>
            </div>
            <Footer />
            {isOpen && (
    <div className="fixed inset-0 flex justify-center items-center z-20">
        <div className="fixed inset-0 bg-black bg-opacity-50" onClick={closeDrawer}></div>
        <div ref={drawerRef} className={`fixed inset-x-0 bottom-0 w-full bg-white rounded-t-2xl overflow-hidden transition-transform duration-500 ease-in-out transform ${isOpen ? 'translate-y-0' : 'translate-y-full'}`} onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
            <div className="p-4">
                <div className="flex items-center justify-between mb-4"> {/* Contenedor flex para alinear elementos */}
                    <h3 className="text-2xl lg:text-5xl font-bold text-violeta mt-4">Beneficios del Pilates</h3>
                    <button className="text-violeta" onClick={closeDrawer}><IoClose size={30} /></button>
                </div>
                <div className="text-violeta text-center lg:text-left grid lg:grid-cols-3 gap-4">
                    <div className="p-4 flex flex-col justify-center items-center gap-2">
                        <GrUpgrade className="text-violeta" size={50} />
                        <h4 className='text-xl'>Aporta control, fluidez y precisión de los movimientos</h4>
                    </div>
                    <div className="p-4 flex flex-col justify-center items-center gap-2">
                        <GiStrong className="text-violeta" size={50} />
                        <h4 className='text-xl'> Fortalece el núcleo, el centro, mejora la fuerza y la elongación</h4>
                    </div>
                    <div className="p-4 flex flex-col justify-center items-center gap-2">
                        <FaPersonCircleCheck className="text-violeta" size={50} />
                        <h4 className='text-xl'>Respiración consciente para regular el estrés</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
)}



        </>
    );
}
