import Image from 'next/image';
import FotoPilates from '../../public/fondopilates2.avif';
import NavBar from '../NavBar/page';
import Link from 'next/link';
import { GrUpgrade } from "react-icons/gr";
import { GiStrong } from "react-icons/gi";
import { FaPersonCircleCheck } from "react-icons/fa6";

export default function Pilates() {
    return (
        <>
            <NavBar />
            <div className='relative h-screen bg-black'>
                <div className='absolute inset-0 overflow-hidden'>
                    <Image src={FotoPilates} alt="Foto de Pilates" layout="fill" objectFit="cover" className='opacity-20 mt-16' />
                </div>
                
                <div className='absolute inset-0 '>
                    <div className='h-full grid grid-rows-5'>
                        <div className='pt-32 ml-5 row-span-3'>
                        <div className='flex flex-col md:flex-row justify-between items-end mb-20'>
                            <h2 className='text-4xl md:text-5xl lg:text-8xl font-bold text-violeta'>Pilates</h2>
                            <h3 className='text-white text-lg mr-5 md:text-base lg:text-lg xl:text-xl'>Clases presenciales y online. Grupales e individuales</h3>
                        </div>

                            <h4 className='mb-10 text-white text-5xl mr-48 '>El ejercicio como hábito de vida, aprender cómo adoptar posturas y realizar movimientos de la vida cotidiana de la forma más adecuada, corregir posturas viciadas y erróneas, a través de ejercicios preventivos y ergonómicos para evitar consecuencias como fatiga, dolores musculares, lesiones. Y proyectar una vida saludable e independiente.</h4>
                        </div>
                       
                        <div className='flex  ml-5 gap-20 row-span-2'>
                            <div className='flex items-center gap-4'>
                                <GrUpgrade className='text-white ' size={50} />
                                <h4 className='text-xl text-white'>Aporta Control, fluidez, precisión de los movimientos</h4> 
                            </div>
                            <div className='flex items-center gap-4'>
                                <GiStrong className='text-white ' size={50} />
                                <h4 className='text-xl text-white'>Fortalece el núcleo, el centro, mejora la Fuerza, y la elongación</h4>
                            </div>
                            <div className='flex items-center gap-4'>
                                <FaPersonCircleCheck className='text-white  ' size={50} />
                                <h4 className='text-xl text-white'>Respiración consciente para regular el estrés </h4>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
