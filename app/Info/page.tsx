import Image from "next/image";
import Ad from "../../public/ad.jpg"
import Taller from "../../public/taller.jpeg"
import Contacto from "../Contacto/page";
import { FaUniversity } from "react-icons/fa";
import { PiStudentBold } from "react-icons/pi";
import { PiFlowerFill } from "react-icons/pi";
export default function Info() {
    return (
        <>
     <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 flex justify-center " id="Info">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-7xl lg:col-span-2">
            <div className="md:flex">
              <div className="md:flex-shrink-0 md:">
                  <Image className="h-96  object-cover md:w-96 rounded-xl" src={Taller} alt="Foto de la persona" />
              </div>
              <div className="p-8">
                  <div className="block mt-1 text-2xl leading-tight font-semibold text-violetaoscuro">Andrea</div>
                  <p className="mt-2 text-gray-600">Te inspiro en el camino hacia el bienestar, a desarrollar hábitos saludables, generar una vida consciente, con propósito, en coherencia, para conectar con tu esencia y despertar tu potencial uniendo el movimiento con el autoconocimiento, hasta alcanzar la transformación personal.</p>
                  <p className="text-gray-600"> Mi trabajo es guiarte brindándote herramientas de: </p>
                  <div className="text-gray-600 space-y-4">
                    <div className="mb-4 flex">
                      <div className="w-4 h-4 flex-shrink-0 mt-1 mr-2">
                        <PiFlowerFill className="w-full h-full" />
                      </div>
                      Desarrollo personal y técnicas de movimiento consciente, a través de clases, sesiones y talleres, para que conectes con tu cuerpo, gestiones emociones, observes tus pensamientos, regules tu energía vital y liberes tu poder interior. Logrando armonía y equilibrio físico, mental, emocional y espiritual.
                    </div>
                    <div className="mb-4 flex ">
                      <div className="w-4 h-4 flex-shrink-0 mt-1 mr-2">
                        <PiFlowerFill className="w-full h-full" />
                      </div>
                      Habitando tu cuerpo, tomando conciencia de tus hábitos posturales, de tus emociones, de tus pensamientos. Reconociendo bloqueos, incomodidades, dolores, limitaciones y aprendiendo a autorregularte y a liberar tensiones.
                    </div>
                    <div className="mb-4 flex ">
                      <div className="w-4 h-4 flex-shrink-0 mt-1 mr-2">
                        <PiFlowerFill className="w-full h-full" />
                      </div>
                      Cultivar el amor propio, el Autocuidado, para dejar de vivir en piloto automático y ser creador/a de tu realidad.
                    </div>
                    <div className="mb-4 flex">
                      <div className="w-4 h-4 flex-shrink-0 mt-1 mr-2">
                        <PiFlowerFill className="w-full h-full" />
                      </div>
                      Crear balance en tu vida, ser protagonista, asumirte responsable, cuestionando, identificando tus condicionamientos, creencias limitantes, y reprogramando tu mente para obtener los resultados esperados.
                    </div>
                  </div>
              </div>
            </div>
            <div className="text-gray-600  mt-2 px-8 pb-8 leading-[2rem]"> 
              <p> Me formé como Profesora de Educación Física en los años ´90, me encantan los deportes, el movimiento, la naturaleza y la vida saludable.   <br/>                                                                                   
                  Comencé el recorrido del mundo holístico iniciándome en Reiki, lo cual fue el primer eslabón hacia el comienzo de mi “Despertar de consciencia”. Desde allí me sumergí en un intenso viaje de autodescubrimiento y transformación personal. <br />
                  En el 2009 cree mi marca de AROMATERAPIA “Aromas Terrenales, volver a lo natural”. <br/> 
                  Soy Terapeuta Holística abordando mi trabajo desde la Aromaterapia, Cosmética natural, Psico bioenergía, Neurociencias y Liderazgo, Flores de Bach, Coaching, Biodescodificación, Tapping, Feng Shui y Decoración ambiental, Armonización con Cuencos Sonoros, Tea Blender y Anfitriona del Té. <br/> 
                  Desde lo corporal, me formé como Instructora de Pilates, Gimnasia Postural, Stretching y Elongación Postural Global, Complementando con Cursos de Gimnasia para adultos mayores, Terapia Postural Holística, Elongación asistida con rolos y rodillos, entre otros. <br/> 
                  Me voy nutriendo de información de libros, videos, conferencias de autores y personas que me inspiran, algunos como Joe Dispenza, Enric Corbera, Deepak Chopra, Bruce Lipton, Eckhart Tolle, Gregg Braden, Mario Alonso Puig, Estanislao Bachrach, Marian Rojas Estapé y Pilar Sordo. <br/> 
                  Desde mi experiencia, integro y transmito herramientas de las diferentes técnicas, fusionando el Movimiento y las terapias holísticas, naciendo así, mi Espacio y Método de Bienestar, ”Aires De Pausa”. <br/> 
                  Bienvenidos/as a Ser la mejor versión de ti mismo/a. <br/> 
                  CREE EN TI, confía en tu autenticidad, tu verdad, reconoce tu potencial y gran poder interior desbloqueando tus patrones limitantes para vivir una vida plena, coherente y consciente. <br/> 
                  <br/> <br/> <br /> <br />
                  Andrea. “Aires de Pausa, bienestar”.</p>
            </div>
        </div>
        

        <ul className="timeline timeline-vertical mt-24 lg:col-span-1 bg-gray-100 ">
            <li>
              <div className="timeline-start timeline-box bg-white text-violetaoscuro border-none text-xs text-center">Profesorado de Educación Física</div>
              <div className="timeline-middle ">
                <PiStudentBold className="w-5 h-5 text-violetaoscuro" />
              </div>
              <hr/>
            </li>
            <li>
              <hr/>
              <div className="timeline-middle">
                  <PiStudentBold className="w-5 h-5 text-violetaoscuro" />  
              </div>
              <div className="timeline-end timeline-box bg-white text-violetaoscuro border-none text-xs text-center">Reiki</div>
              <hr/>
            </li>
            <li>
              <hr/>
              <div className="timeline-start timeline-box bg-white text-violetaoscuro border-none text-xs text-center">Aromaterapia</div>
              <div className="timeline-middle">
                  <PiStudentBold className="w-5 h-5 text-violetaoscuro" />   
              </div>
              <hr/>
            </li>
            <li>
              <hr/>
              <div className="timeline-middle">
                  < PiStudentBold  className="w-5 h-5 text-violetaoscuro" />    
              </div>
              <div className="timeline-end timeline-box bg-white text-violetaoscuro border-none text-xs text-center">Terapia Holística</div>
              <hr/>
            </li>
            <li>
              <hr/>
              <div className="timeline-start timeline-box bg-white text-violetaoscuro border-none text-xs text-center">Instructora</div>
              <div className="timeline-middle">
                  < PiStudentBold  className="w-5 h-5 text-violetaoscuro" /> 
              </div>
            </li>
          </ul>      
    </div>
    <Contacto/>  
        
      
        </>
    );
}