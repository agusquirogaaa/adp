import NavBar from "../NavBar/page";
import Image from "next/image";
import FotoPostural from "../../public/gimpostural.avif"
import { GrUpgrade } from "react-icons/gr";
import { GiStrong } from "react-icons/gi";
import { MdDoNotStep } from "react-icons/md";

export default function Desarrollo() {
    return (
        <>
        <NavBar/>
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
        </>
    );
}