import Image from 'next/image';
import FotoPilates from '../../public/pilates.jpg';
import NavBar from '../NavBar/page';
import Link from 'next/link';
import FotoFondo from "../../public/fondopilates.avif"

export default function Pilates() {
    return (
        <>
            <NavBar />
            <div className='bg-gray-100 h-screen'>
                <div className="pt-32 ml-5">
                    <h2 className="mb-4 text-4xl md:text-5xl lg:text-6xl font-bold text-left text-violeta">Pilates y Gimnasia Postural</h2>
                    <h3 className="mb-4 text-verde text-xl">Clases presenciales y online. Grupales e individuales</h3>
                    <h4 className='mb-10 text-verde text-lg'> El ejercicio como hábito de vida, aprender cómo adoptar posturas y realizar movimientos de la vida cotidiana de la forma más adecuada, corregir posturas viciadas y erróneas, a través de ejercicios preventivos y ergonómicos para evitar consecuencias como fatiga, dolores musculares, lesiones. Y proyectar una vida saludable e independiente.</h4>
                </div>
                <div className='grid gap-20'>
                  <div className="grid grid-cols-1 lg:grid-cols-2 mx-10 bg-verde rounded-md p-5">
                      <div>
                          <h2 className="text-2xl lg:text-4xl font-bold mb-4">Pilates Mat</h2>
                          <p className="mb-4 text-xl">El método Pilates Mat aporta control, fluidez y precisión de los movimientos. Fortalece el núcleo, mejora la fuerza y la elongación. La respiración consciente ayuda a regular el estrés y a conectar cuerpo y mente.</p>
                      </div>
                      <div className="flex justify-center">
                          <Image src={FotoPilates} alt="Pilates Mat" width={500} height={300} className="rounded-lg" />
                      </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 mx-10 bg-verde rounded-md p-5">
                    <div className="flex justify-center">
                          <Image src={FotoPilates} alt="Pilates Mat" width={500} height={300} className="rounded-lg" />
                      </div>
                      <div>
                          <h2 className="text-2xl lg:text-5xl font-bold mb-4">Pilates Mat</h2>
                          <p className="mb-4 text-2xl">El método Pilates Mat aporta control, fluidez y precisión de los movimientos. Fortalece el núcleo, mejora la fuerza y la elongación. La respiración consciente ayuda a regular el estrés y a conectar cuerpo y mente.</p>
                      </div>
                  </div>
                </div>
            </div>


            
        </>
    );
}
