import Image from "next/image";
import Ad from "../../public/ad.jpg"
import Contacto from "../Contacto/page";
import { FaUniversity } from "react-icons/fa";
import { PiStudentBold } from "react-icons/pi";
export default function Info() {
    return (
        <>
     <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div className="md:flex">
            <div className="md:flex-shrink-0">
                <Image className="h-80 w-full object-cover md:w-48" src={Ad} alt="Foto de la persona" />
            </div>
            <div className="p-8">
                <div className="block mt-1 text-2xl leading-tight font-semibold text-violetaoscuro">Andrea</div>
                <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis unde consectetur enim adipisci sunt ipsum beatae ratione quod quis doloremque illum dolores rem numquam nisi assumenda, vero aliquid! Distinctio, expedita.</p>
            </div>
            </div>
        </div>
        
        <ul className="timeline timeline-vertical mt-24">
  <li>
    <div className="timeline-start timeline-box">Curso</div>
    <div className="timeline-middle">
      <FaUniversity className="w-5 h-5 text-violetaoscuro" />
    </div>
    <hr/>
  </li>
  <li>
    <hr/>
    <div className="timeline-middle">
        <FaUniversity className="w-5 h-5 text-violetaoscuro" />  
    </div>
    <div className="timeline-end timeline-box">Curso</div>
    <hr/>
  </li>
  <li>
    <hr/>
    <div className="timeline-start timeline-box">Curso</div>
    <div className="timeline-middle">
         <FaUniversity className="w-5 h-5 text-violetaoscuro" />   
    </div>
    <hr/>
  </li>
  <li>
    <hr/>
    <div className="timeline-middle">
        < PiStudentBold  className="w-5 h-5 text-violetaoscuro" />    
    </div>
    <div className="timeline-end timeline-box">Curso</div>
    <hr/>
  </li>
  <li>
    <hr/>
    <div className="timeline-start timeline-box">Curso</div>
    <div className="timeline-middle">
        < PiStudentBold  className="w-5 h-5 text-violetaoscuro" /> 
    </div>
  </li>
</ul>
<Contacto/>        
        
    </div>
        
      
        </>
    );
}