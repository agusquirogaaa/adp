import Head from 'next/head';
import Link from 'next/link';
import Ad from "../../public/ad.jpg"
import Image from 'next/image';
export default function Index() {
    return (
    <div className='grid grid-cols-1 lg:grid-cols-2 bg-violeta pb-24 pt-24'>
          <div className='flex flex-col text-center'>
                <h1 className='text-5xl text-white mt-5'>
                  Aires de <span className='text-verde'>Pausa</span>
                </h1>
                 <h3 className='text-xl text-white mt-2 mx-2'> Te brindamos herramientas para despertar la conciencia y potenciar tu bienestar a través del movimiento y las terapias holisticas</h3>
                <div className='mb-5 mt-5'>
                    <button className="px-8 py-3 bg-verde text-white rounded-lg font-bold transform hover:-translate-y-1 transition duration-400 inline-block">
                        Contactame
                    </button>
                </div>

          </div>
          <div className="flex items-center justify-center">
                <div className="border-5 border-gray-200 rounded-xl overflow-hidden shadow-xl w-80">
                 <Image src={Ad} alt="Foto" />
                </div>
          </div>


    </div>
    
    );
};
