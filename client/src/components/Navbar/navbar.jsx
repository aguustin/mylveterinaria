import { useLayoutEffect, useState } from 'react'
import pata from '../../assets/pawprint.png'
import menuPng from '../../assets/menu.png'
import iconoAPng from '../../assets/perfilA/iconoA.png'

const NavBar = () => {
    const [mobileNav, setMobileNav] = useState(null)
    const [changeNavButton, setChangeNavButton] = useState(false)
    
    const openNav = () => {
        setChangeNavButton(true)
        document.getElementById('a').style.top = "-400px"
        document.getElementById('a').style.transition = "all .5s"
    }
    useLayoutEffect(() => {
           const mediaQuery = window.matchMedia("(min-width: 1150px)");
           const handleResize = () => {
            setMobileNav(mediaQuery.matches ? 1150 : 1049);
           };
           closeNav()
           handleResize(); // valor inicial
           mediaQuery.addEventListener("change", handleResize);
           return () => mediaQuery.removeEventListener("change", handleResize);
    }, []);

        const closeNav = () => {
            setChangeNavButton(false)
            document.getElementById('a').style.top = "-1000px"
            document.getElementById('a').style.transition = "all .5s"
        }
        
    return(
            <nav className="nav fixed w-screen flex fixed top-0 justify-center items-center h-[100px]">
                <div className='title w-[500px] flex absolute left-6 items-center'>
                    <a href='/'><img className='w-[100px]' src={iconoAPng} alt=""></img></a>
                    <h1 className='ml-3'>MyL Veterinaria</h1>
                </div>
                {mobileNav >= 1060 
                    ? 
                    <div className="absolute flex right-6 justify-between w-[550px]">
                        <a href="/" className="p-3 text-2xl"><p className="text-xl">Inicio</p></a>
                        <a href="/Servicios" className="p-3 text-2xl"><p className="text-xl">Servicios</p></a>
                        <a href="/Blogs" className="p-3 text-2xl"><p className="text-xl">Blogs</p></a>
                        <a href="/Nosotros" className="p-3 text-2xl"><p className="text-xl">Nosotros</p></a>
                        <a href="/Contacto" className="p-3 text-2xl"><p className="text-xl">Contactanos</p></a>
                    </div> 
                    :
                    <>
                        <div className="navBut absolute right-6">
                            {changeNavButton ? <button onClick={() => closeNav()}><img src={menuPng} alt=""></img></button> : <button onClick={() => openNav()}><img src={menuPng} alt=""></img></button> }
                        </div>
                        <div id="a" className='mobileNav fixed right-0 w-full text-center'>
                            <div className='aa flex items-center border-t-2 border-b-2 h-[80px]'><a href="/" className="h-[100%] flex items-center justify-center w-[100vw] w-[100vw] border-indigo-600"><p className='text-lg'>Inicio</p></a></div>
                            <div className='aa flex items-center border-b-2 h-[80px]'><a href="/Servicios" className="h-[100%] flex items-center justify-center w-[100vw]"><p className='text-lg'>Servicios</p></a></div>
                            <div className='aa flex items-center border-b-2 h-[80px]'><a href="/Blogs" className="h-[100%] flex items-center justify-center w-[100vw] w-[100vw]"><p className='text-lg'>Blogs</p></a></div>
                            <div className='aa flex items-center border-b-2 h-[80px]'><a href="/Nosotros" className="h-[100%] flex items-center justify-center w-[100vw] w-[100vw]"><p className='text-lg'>Nosotros</p></a></div>
                            <div className='aa flex items-center border-b-2 h-[80px]'><a href="/Contacto" className="h-[100%] flex items-center justify-center w-[100vw] w-[100vw]"><p className='text-lg'>Contactanos</p></a></div>
                        </div>
                    </>
                }
            </nav>
       
    )
}

export default NavBar