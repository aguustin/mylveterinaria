import pata from '../../assets/pawprint.png'

const NavBar = () => {
    return(
       
            <nav className="nav fixed w-screen flex fixed top-0 justify-center items-center h-[100px]">
                <img className='absolute left-6' src={pata} alt=""></img>
                <h1>
                    MyL Veterinaria
                </h1>
                <div className="absolute flex right-6 justify-between w-[550px]">
                    <a href="/" className="p-3 text-2xl"><p className="text-xl">Inicio</p></a>
                    <a href="/Servicios" className="p-3 text-2xl"><p className="text-xl">Servicios</p></a>
                    <a href="/Blogs" className="p-3 text-2xl"><p className="text-xl">Blogs</p></a>
                    <a href="/Nosotros" className="p-3 text-2xl"><p className="text-xl">Nosotros</p></a>
                    <a href="/Contacto" className="p-3 text-2xl"><p className="text-xl">Contactanos</p></a>
                </div>
            </nav>
       
    )
}

export default NavBar