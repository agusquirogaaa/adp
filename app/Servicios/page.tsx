import Image from "next/image";
import FotoPilates from "../../public/pilates.jpg";
import FotoTallerBienestar from "../../public/cuenco.jpg";
import FotoTallerDesarrollo from "../../public/desarrollo.jpg";
import SH from "../../public/sesiones.jpg";
import FotoProductos from "../../public/aromas2.jpg";
import GimPost from "../../public/gimpost.jpg"
import Link from "next/link";
import { FollowingPointerDemo } from "../components/FollowingPointerDemo";
export default function Servicios() {
  return ( 
    <div className="bg-gray-100 py-24" style={{ minHeight: "100vh" }} id="Servicios">
      {/* Contenido */}
      <div className="flex flex-col justify-center items-center relative z-10">
        <h2 className="text-bold text-5xl lg:text-7xl text-violetaoscuro md:mt-12 mb-5">Servicios</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-10 sm:gap-20 justify-center items-center">   

        <div className="card mx-2 sm:w-96 bg-base-100 shadow-xl">
            <figure className="relative w-full h-72">
              <Image 
                src={FotoPilates} 
                alt="Pilates" 
                layout="fill" 
                objectFit="cover"
                className="rounded-md"
              />
            </figure>
            <div className="card-body hover:shadow-xl">
              <h2 className="card-title h-[3.5rem] ">Pilates con elementos</h2>
              <p>Clases presenciales y online. Grupales e individuales.</p>
              <div className="card-actions justify-end">
                <Link href="/Detail#Pilates">
                  <button className="px-4 py-2 rounded-md border border-neutral-300 bg-violeta text-white text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md">
                    Ver más
                  </button> 
                </Link>       
              </div>
            </div>
          </div>
          

          <div className="card mx-2 sm:w-96 bg-base-100 shadow-xl">
            <figure className="relative w-full h-72">
              <Image 
                src={GimPost} 
                alt="Gim Post" 
                layout="fill" 
                objectFit="cover"
                className="rounded-md"
              />
            </figure>
            <div className="card-body hover:shadow-xl">
              <h2 className="card-title h-[3.5rem]">Gimnasia postural <br/> Elongación postural global</h2>
              <p>Clases presenciales y online. Grupales e individuales.</p>
              <div className="card-actions justify-end">
                <Link href="/Detail#Postural">
                  <button className="px-4 py-2 rounded-md border border-neutral-300 bg-violeta text-white text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md">
                    Ver más
                  </button> 
                </Link>       
              </div>
            </div>
          </div>


          

         
          <div className="card mx-2 sm:w-96 bg-base-100 shadow-xl">
            <figure className="relative w-full h-72">
              <Image 
                src={FotoTallerBienestar} 
                alt="Taller de Bienestar" 
                layout="fill" 
                objectFit="cover"
                className="rounded-md"
              />
            </figure>
            <div className="card-body hover:shadow-xl">
              <h2 className="card-title h-[3.5rem]">Taller de Bienestar </h2>
              <p> Una visión holística sobre como acercarnos al Bienestar.    </p>
              <div className="card-actions justify-end">
                <Link href="/Bienestar">
                  <button className="px-4 py-2 rounded-md border border-neutral-300 bg-violeta text-white text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md">
                    Ver más
                  </button> 
                </Link>       
              </div>
            </div>
          </div>

          <div className="card mx-2 sm:w-96 bg-base-100 shadow-xl">
            <figure className="relative w-full h-72">
              <Image 
                src={FotoTallerDesarrollo} 
                alt="Taller de Desarrollo Personal" 
                layout="fill" 
                objectFit="cover"
                className="rounded-md"
              />
            </figure>
            <div className="card-body hover:shadow-xl">
              <h2 className="card-title h-[3.5rem]">Taller de Desarrollo Personal </h2>
              <p> Un camino de autoconocimiento para Entrenar tu poder interior y descubrir tu potencial.</p>
              <div className="card-actions justify-end">
                <Link href="/Desarrollo">
                  <button className="px-4 py-2 rounded-md border border-neutral-300 bg-violeta text-white text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md">
                    Ver más
                  </button> 
                </Link>              
              </div>
            </div>
          </div>

          <div className="card mx-2 sm:w-96 bg-base-100 shadow-xl">
            <figure className="relative w-full h-72">
              <Image 
                src={SH} 
                alt="Sesiones Holisticas" 
                layout="fill" 
                objectFit="cover"
                className="rounded-md"
              />
            </figure>
            <div className="card-body hover:shadow-xl">
              <h2 className="card-title h-[3.5rem]">Sesiones Holisticas </h2>
              <p>Un espacio de abordaje integral, para equilibrar mente, las emociones y la energía vital.</p>
              <div className="card-actions justify-end">
                <Link href="/Sesiones">
                  <button className="px-4 py-2 rounded-md border border-neutral-300 bg-violeta text-white text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md">
                    Ver más
                  </button> 
                </Link>       
              </div>
            </div>
          </div>
          
          <div className="card mx-2 sm:w-96 bg-base-100 shadow-xl">
            <figure className="relative w-full h-72">
              <Image 
                src={FotoProductos} 
                alt="Productos" 
                layout="fill" 
                objectFit="cover"
                className="rounded-md"
              />
            </figure>
            <div className="card-body hover:shadow-xl">
              <h2 className="card-title h-[3.5rem]">Productos naturales </h2>
              <p> Aromaterapia emocional y cosmética natural <br/> Blends y hierbas</p>
              <div className="card-actions justify-end">
                <Link href="/Productos">
                  <button className="px-4 py-2 rounded-md border border-neutral-300 bg-violeta text-white text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md">
                    Ver más
                  </button> 
                </Link>         
              </div>
            </div>
          </div>
          
         





        </div>
      </div>
    </div>               
  );
}
