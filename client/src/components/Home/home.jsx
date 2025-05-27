import { Carousel } from "flowbite-react";
import portadaCompJpg from '../../assets/pero gris-01-comp.jpg'
import ambulancePng from '../../assets/ambulance.png'
import consultPng from '../../assets/doctor-consultation.png'
import surgeryPng from '../../assets/surgery.png'
import vacunationPng from '../../assets/vacunation.png'
import intensivePng from '../../assets/intensive.png'
import smallpetPng from '../../assets/smallpet.png'
import bigpetPng from '../../assets/bigpet.png'
import qualityPng from '../../assets/quality.png'
import rehabilitationPng from '../../assets/rehabilitation.png'
import flyerPng from '../../assets/flyer.png'
import catJpg from '../../assets/cat.jpg'
import cowJpg from '../../assets/cow.jpg'
import dogJpg from '../../assets/dog.jpg'
import horseJpg from '../../assets/horse.jpg'
import goatJpg from '../../assets/goat.jpg'
import doctorPng from '../../assets/doctor.png'
import phonePng from '../../assets/phone.png'
import mailPng from '../../assets/email.png'
import formPng from '../../assets/form.png'
import perfilBL from '../../assets/perfilA/perfilBL.jpeg'
import perfilBH from '../../assets/perfilA/perfilAH.jpeg'
import iconoA from '../../assets/perfilA/iconoA.jpeg'
import perfilBAJpeg from '../../assets/perfilB/perfilBA.jpeg'
import perfilBBJpeg from '../../assets/perfilB/perfilBB.jpeg'
import perfilBCJpeg from '../../assets/perfilB/perfilBC.jpeg'
import perfilBDJpeg from '../../assets/perfilB/perfilBD.jpeg'
import perfilBEJpeg from '../../assets/perfilB/perfilBE.jpeg'

import perfilAAJpeg from '../../assets/perfilA/perfilAA.jpeg'
import perfilABJpeg from '../../assets/perfilA/perfilAC.jpeg'
import perfilACJpeg from '../../assets/perfilA/perfilAE.jpeg'
import perfilADJpeg from '../../assets/perfilA/perfilAF.jpeg'
import perfilAEJpeg from '../../assets/perfilA/perfilAH.jpeg'
import { useState } from "react";

const Home = () => {

    const images = [
        perfilAAJpeg,
        perfilABJpeg,
        perfilACJpeg,
        perfilADJpeg,
        perfilAEJpeg,
        perfilBAJpeg,
        perfilBBJpeg,
        perfilBCJpeg,
        perfilBDJpeg,
        perfilBEJpeg,
    ];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCount = window.innerWidth < 768 ? 1 : window.innerWidth < 1200 ? 3 : 5; // Determina cuántas imágenes se deben mostrar

  const goToPrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const goToNext = () => {
    if (currentIndex < images.length - visibleCount) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="carousel-container">
      <button className="carousel-button prev" onClick={goToPrevious} disabled={currentIndex === 0}>
        ❮
      </button>
      <div className="carousel-window">
        <div
          className="carousel-track"
          style={{
            transform: `translateX(-${(currentIndex * 100) / visibleCount}%)`,
          }}
        >
          {images.map((image, index) => (
            <div key={index} className="carousel-image-container">
              <img src={image} alt={`Slide ${index + 1}`} className="carousel-image" />
            </div>
          ))}
        </div>
      </div>
      <button
        className="carousel-button next"
        onClick={goToNext}
        disabled={currentIndex >= images.length - visibleCount}
      >
        ❯
      </button>
    </div>
  );
};

   
    return(
        <>
        <div className='home'>
            {/*<div className='relative'>
                <div className='absolute w-[700px] top-50 left-50'>
                    <p className='text-4xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint in id aliquid. Nam earum fugit itaque quisquam similique repudiandae velit, dolores quos tenetur fuga magnam dolorem sunt eaque quia ex!</p>
                </div>
                <img loading="lazy" className='w-screen' src={portadaJpg} alt=""></img>
            </div>*/ }
            <div className='port-cover relative flex items-center'>
                <div className='port-text left-20 absolute w-[620px]'>
                    <h2 >Bienvenidos a MyL Veterinarios:</h2>
                    <p className='text-6xl left-20 mt-3 mb-9'>Cuidamos a tu mejor amigo, las 24 horas, todos los días</p><br></br>
                    <a className='text-4xl pt-4 pb-4 pl-8 pr-8 mt-9 rounded-xl' href="https://wa.me/5492612053343">¡Agenda tu cita ahora!</a>
                </div>
                <img loading="lazy"  className='w-screen' src={portadaCompJpg} alt=""></img>
            </div>
            <div>
                <div className='servicios-container text-center p-12'>
                    <h2>
                        Servicios
                    </h2>
                    <div className='servicios mx-auto flex flex-wrap justify-between items-center w-[80vw]'>
                        <div className='w-[260px] mt-10 mx-auto'>
                            <img loading="lazy" className='mx-auto w-[100px]' src={ambulancePng} alt=""></img><br></br>
                            <p className='text-2xl'>Atencion a domicilio</p>
                        </div>
                        <div  className='w-[260px]  mt-10 mx-auto'>
                            <img loading="lazy" className='mx-auto w-[100px]' src={consultPng} alt=""></img><br></br>
                            <p className='text-2xl'>Consultas</p>
                        </div>
                        <div className='w-[260px] mt-10 mx-auto' >
                            <img loading="lazy" className='mx-auto' src={surgeryPng} alt=""></img><br></br>
                            <p className='text-2xl'>Cirugías</p>
                        </div>
                        <div  className='w-[260px] mt-10 mx-auto'>
                            <img loading="lazy" className='mx-auto' src={vacunationPng} alt=""></img><br></br>
                            <p className='text-2xl'>Vacunacion</p>
                        </div>
                        <div className='w-[260px] mt-10 mx-auto'>
                            <img loading="lazy" className='mx-auto' src={intensivePng} alt=""></img><br></br>
                            <p className='text-2xl'>Cuidados Intensivos</p>
                        </div>
                        <div className='w-[260px] mt-10 mx-auto'>
                            <img loading="lazy" className='mx-auto' src={smallpetPng} alt=""></img><br></br>
                            <p className='text-2xl'>Pequeños animales</p>
                        </div>
                        <div  className='w-[260px] mt-10 mx-auto'>
                            <img loading="lazy" className='mx-auto' src={bigpetPng} alt=""></img><br></br>
                            <p className='text-2xl'>Grandes animales</p>
                        </div>
                        <div className='w-[260px] mt-10 mx-auto' >
                            <img loading="lazy" className='mx-auto' src={qualityPng} alt=""></img><br></br>
                            <p className='text-2xl'>Certificado AIE</p>
                        </div>
                        <div  className='w-[260px] mt-10 mx-auto'>
                            <img loading="lazy" className='mx-auto' src={rehabilitationPng} alt=""></img><br></br>
                            <p className='text-2xl'>Fisioterapia y Rehabilitación</p>
                        </div>
                        <div className='w-[260px] mt-10 mx-auto'>
                            <img loading="lazy" className='mx-auto' src={flyerPng} alt=""></img><br></br>
                            <p className='text-2xl'>Libreta Sanitaria Equina</p>
                        </div>
                    </div>
                        <div className='link-nosotros text-center mx-auto mt-16'>
                            <a className="p-3 pl-6 pr-6" href="/servicios">Saber mas</a>
                        </div>
                </div>
                <div>
                    <div className='text-center mt-8'>
                        <h2>
                            Nosotros
                        </h2>
                    </div>
                    <div className='nosotros flex flex-wrap justify-between items-center mx-auto mt-3'>
                        <div className='w-[600px] text-center'>
                            <img loading="lazy" className='nosotros-perf mx-auto w-[250px] h-[187.5px] object-cover rounded-3xl' src={perfilBH} alt=""></img><br></br>
                            <p className='text-2xl underline'>Martin Miguel Abalos Martinez</p><br></br>
                            <p className='text-xl'>Me presento, soy Martin y soy médico Veterinario. Clinica de pequeños y Grandes animales, Sanidad Equina, Emergencias y cuidados intensivos. Cirugías.</p>
                        </div>
                        <img loading="lazy" className='doctorPng w-[128px] h-[128px] mx-auto' src={doctorPng} alt=""></img>
                        <div className='w-[600px] text-center'>
                            <img loading="lazy" className='nosotros-perf mx-auto w-[250px] rounded-3xl' src={perfilBL} alt=""></img><br></br>
                            <p className='text-2xl underline'>Ludmila Gesto</p><br></br>
                            <p className='text-xl'>Me presento, soy Ludmila y soy médica Veterinaria. Clínica de pequeños animales. Fisiatria y rehabilitación animal de caninos y equinos, Emergencias y cuidados intensivos.</p>
                        </div>
                    </div>
                    <div className='link-nosotros text-center mx-auto'>
                        <a className="p-3 pl-6 pr-6" href="/nosotros">Saber mas</a>
                    </div>
                </div>
                <div className="relative w-screen pr-6">
                    <div className='text-center mt-20 relative'>
                        <h2>
                            Galería
                        </h2>
                    </div>
                    <div className="flex flex-wrap">
                        <Carousel/>
                    </div>
                </div>
                <div className="bg-black-"></div>
                <div className='mb-20'>
                    <div className='text-center mt-8'>
                        <h2>
                            Contacto
                        </h2>
                    </div>
                    <div className='contacto flex flex-wrap justify-around mx-auto mt-6 mb-10'>
                        <div className='w-[600px] text-center'>
                            <p className='text-3xl'>Puedes contactarnos por:</p><br></br>
                            <div className='flex items-center'>
                                <img loading="lazy" src={phonePng} alt=""></img>
                                <p className='text-xl ml-5'>Whatsapp: +542612053343</p>
                            </div>
                            <div className='flex items-center mt-8'>
                                <img loading="lazy" src={mailPng} alt=""></img>
                                <p className='text-xl ml-5'>Mail: elnogalargentina@gmail.com</p>
                            </div>
                            <div className='flex items-center mt-8'>
                                <img loading="lazy" src={formPng} alt=""></img>
                                <p className='text-xl ml-5'>Contactanos aqui: <a href="/contacto">Contactar</a></p>
                            </div>
                        </div>
                        <div className='maps w-[400px] text-center'>
                            <div><img loading="lazy" src={iconoA} alt=""></img></div>
                        </div>
                    </div>
                </div>
            </div>   
          </div>       
        </>
    )
}

export default Home