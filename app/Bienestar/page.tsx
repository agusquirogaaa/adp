import NavBar from "../NavBar/page";
import Image from "next/image";
import { GrUpgrade } from "react-icons/gr";
import { GiStrong } from "react-icons/gi";
import { MdDoNotStep } from "react-icons/md";
import FotoBienestar from "../../public/sesiones.jpg"

export default function Bienestar() {
    return (
        <>
             <NavBar />
            <div className='relative h-screen bg-black'>
                <div className='absolute inset-0 overflow-hidden'>
                    <Image src={FotoBienestar} alt="Foto de Pilates" layout="fill" objectFit="cover" className='opacity-20 mt-16' />
                </div>
                
                <div className='absolute inset-0 '>
                    <div className='h-full grid grid-rows-5'>
                        <div className='pt-32 ml-5 row-span-4'>
                        <div className='flex flex-col md:flex-row justify-between items-end mb-20'>
                            <h2 className='text-4xl md:text-5xl lg:text-8xl font-bold text-violeta'>Taller de Bienestar</h2>
                            <h3 className='text-white text-lg mr-5 md:text-base lg:text-lg xl:text-xl'> Una visión holística sobre como acercarnos al Bienestar.            </h3>
                        </div>

                            <h4 className='mb-10 text-white text-5xl mr-48 '>Un ciclo de Encuentros en los que vamos reconociendo que cosas nos generan estrés, como interpretamos la realidad según nuestros pensamientos, y como ello nos afecta a nivel físico, mental y emocional. Desde la toma de conciencia, del poder de asumirnos creadores y responsables de nuestra realidad.</h4>
                        </div>
                       
                        <div className='flex   row-span-1'>
                            <ul className="steps w-screen steps-vertical lg:steps-horizontal">
                                <li className="step step-primary violeta text-white">
                                    <div> 
                                        <h5>Charla consciente </h5> 
                                        <h6>fdsafds</h6> 
                                    </div> 
                                </li>
                                <li className="step step-primary text-white"> 
                                    <div> 
                                        <h5>Movimientos y respiración consciente </h5> 
                                        <h6>fdsafds</h6> 
                                    </div>
                                </li>
                                <li className="step text-white">
                                    <div> 
                                        <h5>Aromas naturales </h5> 
                                        <h6>fdsafds</h6> 
                                    </div>
                                </li>
                                <li className="step text-white"> 
                                    <div> 
                                        <h5>Relajación con Cuenco sonoro.  </h5> 
                                        <h6>fdsafds</h6> 
                                    </div>
                                </li>
                            </ul>
                           
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}