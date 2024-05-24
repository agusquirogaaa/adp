import Footer from "../Footer/page";
import NavBar from "../NavBar/page";
import Image from "next/image";
import Foto1 from "../../public/aromas.jpg"

export default function Productos () {
    return (
        <>
            <NavBar />
            <div className="min-h-screen bg-violeta pb-24">
                <h2 className='text-5xl md:text-5xl xl:text-8xl font-bold text-white text-center pt-24 mb-4 xl:mb-12'>Productos naturales</h2>
                <p className="text-white text-lg xl:text-2xl mx-2 text-center pb-2 xl:pb-16"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem nulla doloremque blanditiis quod corrupti. Voluptatibus nam labore id doloribus sapiente? Quidem cumque voluptate ea? Debitis porro dolorem recusandae alias commodi!</p>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mx-5 justify-center items-center">
                    <div> <Image src={Foto1} alt="foto1" className="rounded-xl w-1/2" /> </div>
                    <div> <Image src={Foto1} alt="foto1" className="rounded-xl w-1/2" /> </div>
                    <div> <Image src={Foto1} alt="foto1" className="rounded-xl w-1/2" /> </div>
                    <div> <Image src={Foto1} alt="foto1" className="rounded-xl w-1/2" /> </div>
                </div>
            </div>
            <Footer />
        </>
    );
}