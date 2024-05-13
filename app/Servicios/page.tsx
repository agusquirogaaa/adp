import Image from "next/image";
import Foto from "../../public/fondoscroll.jpg";
import FotoFondo from "../../public/fondomobile.jpg"
import FotoProductos from "../../public/productos.jpeg"
import FotoTallerBienestar from "../../public/cuenco.jpg"
import FotoPilates from "../../public/pilates.jpg"
import FotoTallerDesarrollo from "../../public/manoscadena.png"
import SH from "../../public/sesiones.jpg"
export default function Servicios() {
  return ( 
    <div className="bg-gray-100 pb-24"   style={{ minHeight: "100vh" }}>

        
      {/* Imagen de fondo */}
    
      
      {/* Contenido */}
      <div className="flex flex-col justify-center items-center relative z-10">
        <h2 className="text-bold text-5xl text-violetaoscuro mt-12 mb-5" > Servicios</h2>
        <div className="flex flex-col gap-20">   
            <div className="card w-96 bg-base-100 shadow-xl flex">
                <figure className="relative w-full h-72">
                    <Image 
                    src={FotoPilates} 
                    alt="Pilates y Gimnasia Postural" 
                    layout="fill"
                    objectFit="cover"
                    />
                </figure>
                <div className="card-body ">
                    <h2 className="card-title">Pilates y Gimnasia Postural </h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                    <button className="px-4 py-2 rounded-md border border-neutral-300 bg-violeta text-white text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md">
                        Ver más
                    </button>        
                    </div>
                </div>
            </div>

            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="relative w-full h-72">
                    <Image 
                    src={FotoTallerBienestar} 
                    alt="Shoes" 
                    layout="fill" 
                   
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Taller de Bienestar </h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                    <button className="px-4 py-2 rounded-md border border-neutral-300 bg-violeta text-white text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md">
                        Ver más
                    </button>        
                    </div>
                </div>
            </div>


            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="relative w-full h-72">
                    <Image 
                    src={FotoTallerDesarrollo} 
                    alt="Shoes" 
                    layout="fill" 
                    
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Taller de Desarrollo Personal </h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                    <button className="px-4 py-2 rounded-md border border-neutral-300 bg-violeta text-white text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md">
                        Ver más
                    </button>        
                    </div>
                </div>
            </div>

            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="relative w-full h-72">
                    <Image 
                    src={SH} 
                    alt="Shoes" 
                    layout="fill" 
                    
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Sesiones Holisticas </h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                    <button className="px-4 py-2 rounded-md border border-neutral-300 bg-violeta text-white text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md">
                        Ver más
                    </button>        
                    </div>
                </div>
            </div>
            
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="relative w-full h-72">
                    <Image 
                    src={FotoProductos} 
                    alt="Shoes" 
                    layout="fill" 
                    
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Productos </h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                    <button className="px-4 py-2 rounded-md border border-neutral-300 bg-violeta text-white text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md">
                        Ver más
                    </button>        
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>               
  );
}






 {/* ESTO ES PARA PC  

                <div className="card lg:card-side bg-base-100 shadow-xl">
  <figure><img src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg" alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title">New album is released!</h2>
    <p>Click the button to listen on Spotiwhy app.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Listen</button>
    </div>
  </div>
</div>
            
            */}