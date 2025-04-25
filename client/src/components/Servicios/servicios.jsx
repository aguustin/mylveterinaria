/**Atención a domicilio
*Consultas 
*Clínica de pequeños animales
*Clínica de Grandes animales
*Vacunación 
*Fisioterapia y Rehabilitación 
*Cirugías 
*Certificado AIE
*Libreta Sanitaria Equina
*Servicio de Terapia Intensiva 
64px
#4D4542 
#FEFCEC*/

import homeBPng from '../../assets/servicios/homeB.png'
import consultPng from '../../assets/servicios/consult.png'
import smallAnimalPng from '../../assets/servicios/smallAnimal.png'
import bigAnimalPng from '../../assets/servicios/bigAnimal.png'
import syringePng from '../../assets/servicios/syringe.png'
import rehabilitationPng from '../../assets/servicios/rehabilitation.png'
import surgeryPng from '../../assets/servicios/surgery.png'
import horsePng from '../../assets/servicios/horse.png'
import horseSanitaryPng from '../../assets/servicios/horseSanitary.png'
import intensivePng from '../../assets/servicios/intensive.png'

const Servicios = () => {
    return(
        <div className="mt-[90px] mx-auto w-screen">
            <div className='mx-auto w-[70vw]'>
            <div className='text-center pt-10'>
                <h2 >Nuestros Servicios</h2>
                <p className='text-2xl mt-3'>En MyL Veterinaria, nos especializamos en brindar atencion integral para todo tipo de mascotas, garantizando su bienestar y calidad de vida. Con un equipo profesional y equipamiento de ultima tecnologia, ofrecemos los siguientes servicios:</p>
            </div>
            <div className='flex flex-wrap mt-4 mb-16'>
                <div className="servicio-individual relative w-[45%] rounded-xl mx-[20px] p-6 mt-6">
                    <div className='servicio-individual-border absolute top-0 right-0 w-[70px] h-[70px]'> </div>
                    <img src={homeBPng} alt=""></img>
                    <h3>Atención a Domicilio</h3>
                    <p className='text-lg'>Servicio personalizado para quienes prefieren la comodidad de su hogar. Realizamos consultas generales, aplicación de medicamentos e inciciones en casa</p>
                </div>
                <div className="servicio-individual relative w-[45%] rounded-xl mx-[20px] p-6 mt-6">
                <a href='/Contacto'>
                    <div className='servicio-individual-border absolute top-0 right-0 w-[70px] h-[70px]'></div>
                    <img src={consultPng} alt=""></img>
                    <h3>Consultas</h3>
                    <p className='text-lg'>Servicio personalizado para quienes prefieren la comodidad de su hogar. Realizamos consultas generales, aplicación de medicamentos e inciciones en casa</p>
                </a>
                </div>
                <div className="servicio-individual relative w-[45%] rounded-xl mx-[20px] p-6 mt-6">
                    <div className='servicio-individual-border absolute top-0 right-0 w-[70px] h-[70px]'> </div>
                    <img src={smallAnimalPng} alt=""></img>
                    <h3>Clínica animales pequeños</h3>
                    <p className='text-lg'>Servicio personalizado para quienes prefieren la comodidad de su hogar. Realizamos consultas generales, aplicación de medicamentos e inciciones en casa</p>
                </div>
                <div className="servicio-individual relative w-[45%] rounded-xl mx-[20px] p-6 mt-6">
                    <div className='servicio-individual-border absolute top-0 right-0 w-[70px] h-[70px]'> </div>
                    <img src={bigAnimalPng} alt=""></img>
                    <h3>Clínica Grandes animales</h3>
                    <p className='text-lg'>Servicio personalizado para quienes prefieren la comodidad de su hogar. Realizamos consultas generales, aplicación de medicamentos e inciciones en casa</p>
                </div>
                <div className="servicio-individual relative w-[45%] rounded-xl mx-[20px] p-6 mt-6">
                    <div className='servicio-individual-border absolute top-0 right-0 w-[70px] h-[70px]'> </div>
                    <img src={syringePng} alt=""></img>
                    <h3>Vacunación</h3>
                    <p className='text-lg'>Servicio personalizado para quienes prefieren la comodidad de su hogar. Realizamos consultas generales, aplicación de medicamentos e inciciones en casa</p>
                </div>
                <div className="servicio-individual relative w-[45%] rounded-xl mx-[20px] p-6 mt-6">
                    <div className='servicio-individual-border absolute top-0 right-0 w-[70px] h-[70px]'> </div>
                    <img src={rehabilitationPng} alt=""></img>
                    <h3>Fisioterapia y Rehabilitación</h3>
                    <p className='text-lg'>Servicio personalizado para quienes prefieren la comodidad de su hogar. Realizamos consultas generales, aplicación de medicamentos e inciciones en casa</p>
                </div>
                <div className="servicio-individual relative w-[45%] rounded-xl mx-[20px] p-6 mt-6">
                    <div className='servicio-individual-border absolute top-0 right-0 w-[70px] h-[70px]'> </div>
                    <img src={surgeryPng} alt=""></img>
                    <h3>Cirugías</h3>
                    <p className='text-lg'>Servicio personalizado para quienes prefieren la comodidad de su hogar. Realizamos consultas generales, aplicación de medicamentos e inciciones en casa</p>
                </div>
                <div className="servicio-individual relative w-[45%] rounded-xl mx-[20px] p-6 mt-6">
                    <div className='servicio-individual-border absolute top-0 right-0 w-[70px] h-[70px]'> </div>
                    <img src={horsePng} alt=""></img>
                    <h3>Certificado AIE</h3>
                    <p className='text-lg'>Servicio personalizado para quienes prefieren la comodidad de su hogar. Realizamos consultas generales, aplicación de medicamentos e inciciones en casa</p>
                </div>
                <div className="servicio-individual relative w-[45%] rounded-xl mx-[20px] p-6 mt-6">
                    <div className='servicio-individual-border absolute top-0 right-0 w-[70px] h-[70px]'> </div>
                    <img src={horseSanitaryPng} alt=""></img>
                    <h3>Libreta Sanitaria Equina</h3>
                    <p className='text-lg'>Servicio personalizado para quienes prefieren la comodidad de su hogar. Realizamos consultas generales, aplicación de medicamentos e inciciones en casa</p>
                </div>
                <div className="servicio-individual relative w-[45%] rounded-xl mx-[20px] p-6 mt-6">
                    <div className='servicio-individual-border absolute top-0 right-0 w-[70px] h-[70px]'> </div>
                    <img src={intensivePng} alt=""></img>
                    <h3>Servicio de Terapia Intensiva</h3>
                    <p className='text-lg'>Servicio personalizado para quienes prefieren la comodidad de su hogar. Realizamos consultas generales, aplicación de medicamentos e inciciones en casa</p>
                </div>
            </div>

            </div>
        </div>
    )
}

export default Servicios