import NavBar from "../NavBar/page";
import Image from "next/image";
import FotoPostural from "../../public/gimpostural.avif"
import { GrUpgrade } from "react-icons/gr";
import { GiStrong } from "react-icons/gi";
import { MdDoNotStep } from "react-icons/md";

export default function Postural() {
    return (
        <>
        <NavBar/>
        <div className='relative h-screen bg-black'>
                <div className='absolute inset-0 overflow-hidden'>
                    <Image src={FotoPostural} alt="Foto de Postural" layout="fill" objectFit="cover" className='opacity-20 mt-16' />
                </div>
                
                <div className='absolute inset-0 '>
                    <div className='h-full grid grid-rows-5'>
                        <div className='pt-32 ml-5 row-span-3'>
                        <div className='flex flex-col md:flex-row justify-between items-end mb-20'>
                            <h2 className='text-4xl md:text-5xl lg:text-7xl font-bold text-violeta'>Gimnasia Postural + <br/> Elongación Postural Global</h2>
                            <h3 className='text-white text-lg mr-5 md:text-base lg:text-lg xl:text-xl'>Clases presenciales y online. Grupales e individuales</h3>
                        </div>

                            <h4 className='mb-10 text-white text-3xl mr-48 '> Una fusión de las 2 técnicas para lograr un entrenamiento postural óptimo. Los músculos no trabajan de forma aislada, están interconectados, creando cadenas musculares. Estas redistribuyen la fuerza a través de las diferentes regiones del cuerpo, mediante el tejido fascial, ya sea para mantener una postura o realizar un gesto de manera coordinada. </h4>
                        </div>
                       
                        <div className='flex  ml-5 gap-20 row-span-2'>
                            <div className='flex items-center gap-4'>
                                <GrUpgrade className='text-white ' size={50} />
                                <h4 className='text-xl text-white'> Mejora la Flexibilidad</h4> 
                            </div>
                            <div className='flex items-center gap-4'>
                                <GiStrong className='text-white ' size={50} />
                                <h4 className='text-xl text-white'>Fortalece músculos</h4>
                            </div>
                            <div className='flex items-center gap-4'>
                                <MdDoNotStep className='text-white  ' size={50} />
                                <h4 className='text-xl text-white'> Evitar la retracción, rigidez y prevenir lesiones</h4>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}