import Head from 'next/head';
import Link from 'next/link';
import Ad from "../../public/ad.jpg"
import Image from 'next/image';

export default function Index() {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 min-h-screen justify-center items-center bg-violeta pb-24 pt-16 xl:pt-24 lg:grid-cols-5 md:px-2' id="Inicio">
            <div className='flex flex-col  lg:col-span-3 justify-center items-center'>
                <div className='text-center'>
                    <h1 className='text-5xl xl:text-8xl text-white xs:mx-2 lg:mx-0  mt-5 lg:text-left'>
                        Aires de <span className='text-verde lg:text-left'>Pausa</span>
                    </h1>
                    <h3 className='text-xl xl:text-2xl text-white mt-2 mx-2 lg:mx-0 max-w-xl lg:text-left'> Te brindo herramientas para despertar la conciencia y potenciar tu bienestar a través del movimiento y las terapias holísticas</h3>
                    <div className='mb-5 mt-5 lg:text-left'>
                        <button className="px-8 py-3 bg-verde text-white rounded-lg font-bold transform hover:-translate-y-1 transition duration-400 inline-block">
                            Contactame
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center lg:col-span-2">
                <div className="border-5 border-gray-200 rounded-xl overflow-hidden shadow-xl w-[20rem] lg:w-[30rem] ">
                    <Image src={Ad} alt="Foto" />
                </div>
            </div>
        </div>
    );
};
