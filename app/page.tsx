import Image from "next/image";
import Index from "./Index/page";
import NavBar from "./NavBar/page";
import Reflexion from "./Reflexion/page";
import Servicios from "./Servicios/page";
import Info from "./Info/page";
import Footer from "./Footer/page";
import { Contact }from "./components/ui/contacto-btn"
export default function Home() {
  return (
    <>
      <NavBar/>
      <Index/>
      <Servicios/>
      <Reflexion />
      <Info />
      <Footer />
      <Contact />
      
    </>
  );
}
