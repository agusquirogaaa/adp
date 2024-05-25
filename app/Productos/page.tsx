import Footer from "../Footer/page";
import NavBar from "../NavBar/page";
import Image from "next/image";
import Foto1 from "../../public/productos.webp"
import Foto2 from "../../public/lavandas.webp"
import Foto3 from "../../public/kit.webp"
import Foto4 from "../../public/tallerdearomaterapia.webp"
import Aromas1 from "../../public/ar1.webp"
import Aromas2 from "../../public/ar2.webp"
import Aromas3 from "../../public/ar3.webp"
import Lav1 from "../../public/lav1.webp"
import Lav2 from "../../public/lav2.webp"
import Lav3 from "../../public/lav3.webp"
import Link from "next/link";


export default function Productos () {
    return (
        <>
            <NavBar />
            <div className="min-h-screen bg-gray-100 pb-24">
                <h2 className='text-5xl md:text-5xl xl:text-8xl font-bold text-violeta text-center pt-32 mb-4 xl:mb-12'>Productos naturales</h2>
                <p className="text-violeta text-lg xl:text-2xl mx-2 text-center pb-12 xl:pb-24"> Aromaterapia emocional y cosmética natural con aceites escenciales, vegetales, tinturas madre 100% naturales <br/> Blends y hierbas para blendear tu té, tisana, y mate </p>
                <div className="flex flex-col gap-12">
                    <div className="bg-white xs:p-2 xl:p-0 flex flex-col lg:flex-row justify-center items-center pb-10">
                            <div className="w-full xl:w-1/2">
                            <Image src={Foto1} className="w-full h-full rounded-lg xl:rounded-none" alt="Imagen de producto" />
                            </div>
                            <div className="xl:w-1/2 mx-2 xl:mx-0 xs:ml-0 xl:ml-4 flex flex-col justify-center items-center">
                            <h2 className="text-2xl xl:text-5xl font-semibold text-center text-violeta mt-5 mb-10 xl:mt-0">Aromaterapia con aceites esenciales naturales</h2>
                            <p className="text-gray-600 text-center mt-2 xl:mt-0"> A base de alcohol de cereal, aceites vegetales,  Brumas de hogar, Bruma corporal., Perfume emocional roll on <br/>
Cremas naturales, con aceites vegetales, esenciales y tinturas madres.</p>
                            <div className="mt-4 flex">
                                <Image  src={Aromas1} className="w-14 h-14 rounded-full mr-2  object-cover" alt="Imagen circular 1" />
                                <Image  src={Aromas2} className="w-14 h-14 rounded-full mr-2" alt="Imagen circular 2" />
                                <Image  src={Aromas3} className="w-14 h-14 rounded-full" alt="Imagen circular 3" />
                            </div>
                            <Link href="https://wa.me/1134087446?text=Hola%20Andrea,%20quiero%20iniciar%20el%20camino%20hacia%20el%20bienestar"  target='_blank' rel="noopener noreferrer"> 
                                <button className="my-10 bg-violeta text-white px-4 py-2 rounded hover:bg-verde">Contactame</button>
                            </Link>
                            </div>
                    </div>
                    <div className="bg-violeta xs:p-2 xl:p-0 flex flex-col lg:flex-row justify-center items-center pb-10">
                            <div className="w-full xl:w-1/2">
                            <Image src={Foto2} className="w-full h-full rounded-lg xl:rounded-none" alt="Imagen de producto" />
                            </div>
                            <div className="xl:w-1/2 mx-2 xl:mx-0 xs:ml-0 xl:ml-4 flex flex-col justify-center items-center">
                            <h2 className="text-2xl xl:text-5xl font-semibold text-center text-white mt-5 mb-10 xl:mt-0">Flores y Hierbas patagónicas 100% naturales</h2>
                            <p className="text-white text-center mt-2 xl:mt-0"> Se utiliza para Infusiones, Tisanas, para blendear y crear tus tés y agregar al mate. Para sahumar, Souvenirs, Decoracion, velas. Para utilizar en cosmética natural.</p>
                           <div className="mt-4 flex">
                                <Image  src={Lav1} className="w-14 h-14 rounded-full mr-2" alt="Imagen circular 1" />
                                <Image  src={Lav2} className="w-14 h-14 rounded-full mr-2" alt="Imagen circular 2" />
                                <Image  src={Lav3} className="w-14 h-14 rounded-full" alt="Imagen circular 3" />
                            </div>
                            <Link href="https://wa.me/1134087446?text=Hola%20Andrea,%20quiero%20iniciar%20el%20camino%20hacia%20el%20bienestar"  target='_blank' rel="noopener noreferrer"> 
                                 <button className="my-10 bg-verde text-white px-4 py-2 rounded hover:bg-gray-600 ">Contactame</button>
                            </Link>
                            </div>
                    </div>
                    <div className="bg-white xs:p-2 xl:p-0 flex flex-col lg:flex-row justify-center items-center pb-10">
                            <div className="w-full xl:w-1/2">
                            <Image src={Foto3} className="w-full h-full rounded-lg xl:rounded-none" alt="Imagen de producto" />
                            </div>
                            <div className="xl:w-1/2 mx-2 xl:mx-0 xs:ml-0 xl:ml-4 flex flex-col justify-center items-center">
                            <h2 className="text-2xl xl:text-5xl font-semibold text-center text-violeta mt-5 mb-10 xl:mt-0">Kit Sahumar</h2>
                            <p className="text-gray-600 text-center mt-2 xl:mt-0"> Incluye 1 Cuenco de cerámica, 2 carboncitos, bolsitas con 1 Resina para abrir, 1 HIERBA para limpiar, Flores para el plano emocional, 1 Corteza para enraizar propósitos.
Presentación en caja de cartón.
Consulta nuestros Kits, Ceremonia del Té, </p>
                        
                            <Link href="https://wa.me/1134087446?text=Hola%20Andrea,%20quiero%20iniciar%20el%20camino%20hacia%20el%20bienestar"  target='_blank' rel="noopener noreferrer"> 
                                <button className="my-10 bg-violeta text-white px-4 py-2 rounded hover:bg-verde">Contactame</button>
                            </Link>
                            </div>
                    </div>
                    <div className="bg-violeta xs:p-2 xl:p-0 flex flex-col lg:flex-row justify-center items-center pb-10">
                            <div className="w-full xl:w-1/2">
                            <Image src={Foto4} className="w-full h-full rounded-lg xl:rounded-none" alt="Imagen de producto" />
                            </div>
                            <div className="xl:w-1/2 mx-2 xl:mx-0 xs:ml-0 xl:ml-4 flex flex-col justify-center items-center">
                            <h2 className="text-2xl xl:text-5xl font-semibold text-center text-white mt-5 mb-10 xl:mt-0">Taller de Aromaterapia</h2>
                            <p className="text-white text-center mt-2 xl:mt-0"> Proximamente</p>
                            <Link href="https://wa.me/1134087446?text=Hola%20Andrea,%20quiero%20iniciar%20el%20camino%20hacia%20el%20bienestar"  target='_blank' rel="noopener noreferrer"> 
                                 <button className="my-10 bg-verde text-white px-4 py-2 rounded hover:bg-gray-600 ">Contactame</button>
                            </Link>
                            </div>
                    </div>

                </div>
            </div>
            <Footer />
        </>
    );
}

{/*
<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mx-5 justify-center items-center">
                    <div className="flex flex-col justify-center items-center gap-5"> 
                        <Image src={Foto1} alt="foto1" className="rounded-xl w-full xl:w-1/2" />
                        <p className="text-white text-lg text-center"> Aromaterapia con aceites esenciales naturales, a base de alcohol de cereal, aceites vegetales, <br/>
 Brumas de hogar, Bruma corporal., Perfume emocional roll on <br/>
Cremas naturales, con aceites vegetales, esenciales y tinturas madres.</p>
                     </div>
                    <div className="flex flex-col justify-center items-center gap-5">
                         <Image src={Foto2} alt="foto1" className="rounded-xl w-full xl:w-1/2" /> 
                         <p className="text-white text-lg text-center">Flores y Hierbas patagónicas 100% naturales, <br />
Usos.. Para Infusiones, Tisanas, para blendear y crear tus tés y agregar al mate. Para sahumar, Souvenirs, Decoracion, velas. Para utilizar en cosmética natural.
</p>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-5">
                         <Image src={Foto3} alt="foto1" className="rounded-xl w-full xl:w-1/2" /> 
                         <p className="text-white text-lg text-center"> Incluye 1 Cuenco de cerámica, 2 carboncitos, bolsitas con 1 Resina para abrir, 1 HIERBA para limpiar, Flores para el plano emocional, 1 Corteza para enraizar propósitos.<br />Presentación en caja de cartón. <br/> Consulta nuestros Kits, Ceremonia del Té, </p>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-5">
                         <Image src={Foto4} alt="foto1" className="rounded-xl w-full xl:w-1/2" />
                        <p className="text-white text-lg text-center"> Taller de Aromaterapia <br/>PROXIMAMENTE</p>
                    </div>
                </div>*/}