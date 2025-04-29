import { useLayoutEffect, useState } from 'react'
import pata from '../../assets/pawprint.png'
import menuPng from '../../assets/menu.png'

const NavBar = () => {
    const [mobileNav, setMobileNav] = useState(null)

    useLayoutEffect(() => {
        /* const handleResize = () => {
             setWidth(window.innerWidth);
           };
         
           handleResize(); // Llamamos esto al principio para obtener el valor inicial
           window.addEventListener("resize", handleResize);
         
           return () => window.removeEventListener("resize", handleResize);*/
         
           const mediaQuery = window.matchMedia("(min-width: 1060px)");
           const handleResize = () => {
            setMobileNav(mediaQuery.matches ? 1060 : 1059);
           };
         
           handleResize(); // valor inicial
           mediaQuery.addEventListener("change", handleResize);
           return () => mediaQuery.removeEventListener("change", handleResize);
        }, []);
        console.log(mobileNav)
        
    return(
            <nav className="nav fixed w-screen flex fixed top-0 justify-center items-center h-[100px]">
                <a className='absolute left-6' href='/'><img  src={pata} alt=""></img></a>
                <h1>
                    MyL Veterinaria
                </h1>
                {mobileNav >= 1060 ? <div className="absolute flex right-6 justify-between w-[550px]">
                    <a href="/" className="p-3 text-2xl"><p className="text-xl">Inicio</p></a>
                    <a href="/Servicios" className="p-3 text-2xl"><p className="text-xl">Servicios</p></a>
                    <a href="/Blogs" className="p-3 text-2xl"><p className="text-xl">Blogs</p></a>
                    <a href="/Nosotros" className="p-3 text-2xl"><p className="text-xl">Nosotros</p></a>
                    <a href="/Contacto" className="p-3 text-2xl"><p className="text-xl">Contactanos</p></a>
                </div> :
                <div className="absolute right-6 ">
                  <button><img src={menuPng} alt=""></img></button>
                </div>  }
            </nav>
       
    )
}

export default NavBar