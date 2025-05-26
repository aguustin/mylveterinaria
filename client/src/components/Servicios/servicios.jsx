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
            <div className='servicios-container mx-auto w-[70vw]'>
            <div className='titulos text-center pt-10'>
                <h2 className='tit'>Nuestros Servicios</h2>
                <p className='text-2xl mt-3'>En MyL Veterinarios, nos especializamos en brindar atencion integral para pequeños y grandes animales, garantizando su bienestar y calidad de vida. Con un equipo profesional y equipamiento de ultima tecnologia, ofrecemos los siguientes servicios:</p>
            </div>
            <div className='servicio-individual-container flex flex-wrap mt-4 mb-16'>
                <div className="servicio-individual relative w-[45%] rounded-xl mx-[20px] p-6 mt-6">
                    <div className='servicio-individual-border absolute top-0 right-0 w-[70px] h-[70px]'> </div>
                    <img loading="lazy" src={homeBPng} alt=""></img>
                    <h3>Atención a Domicilio</h3>
                    <p className='text-lg'>quédate en la comodidad de tu casa, evita que tu perro/gato se estrese.</p>
                </div>
                <div className="servicio-individual relative w-[45%] rounded-xl mx-[20px] p-6 mt-6">
                <a href='/contacto'>
                    <div className='servicio-individual-border absolute top-0 right-0 w-[70px] h-[70px]'></div>
                    <img loading="lazy" src={consultPng} alt=""></img>
                    <h3>Consultas</h3>
                    <p className='text-lg'>Asesoramiento en general. Examen clínico completo, toma de muestra de sangre, orina, citologías, raspados de piel o cultivos de ser necesarios</p>
                </a>
                </div>
                <div className="servicio-individual relative w-[45%] rounded-xl mx-[20px] p-6 mt-6">
                    <div className='servicio-individual-border absolute top-0 right-0 w-[70px] h-[70px]'> </div>
                    <img loading="lazy" src={smallAnimalPng} alt=""></img>
                    <h3>Clínica animales pequeños</h3>
                    <p className='text-lg'>Examen clínico general, tomas de muestra, diagnostico y tratamiento.</p>
                </div>
                <div className="servicio-individual relative w-[45%] rounded-xl mx-[20px] p-6 mt-6">
                    <div className='servicio-individual-border absolute top-0 right-0 w-[70px] h-[70px]'> </div>
                    <img loading="lazy" src={bigAnimalPng} alt=""></img>
                    <h3>Clínica Grandes animales</h3>
                    <p className='text-lg'>Examen clínico general, tomas de muestra, diagnostico y tratamiento.</p>
                </div>
                <div className="servicio-individual relative w-[45%] rounded-xl mx-[20px] p-6 mt-6">
                    <div className='servicio-individual-border absolute top-0 right-0 w-[70px] h-[70px]'> </div>
                    <img loading="lazy" src={syringePng} alt=""></img>
                    <h3>Vacunación</h3>
                    <p className='text-lg'>Plan inicial de vacunación, Refuerzos anuales, desparacitaciones.</p>
                </div>
                <div className="servicio-individual relative w-[45%] rounded-xl mx-[20px] p-6 mt-6">
                    <div className='servicio-individual-border absolute top-0 right-0 w-[70px] h-[70px]'> </div>
                    <img loading="lazy" src={rehabilitationPng} alt=""></img>
                    <h3>Fisioterapia y Rehabilitación</h3>
                    <p className='text-lg'>Sesiones de 45 minutos de duración en la comodidad de tu casa. Terapia integral y trabajo en equipo con el veterinario de cabecera que deriva al paciente.</p>
                </div>
                <div className="servicio-individual relative w-[45%] rounded-xl mx-[20px] p-6 mt-6">
                    <div className='servicio-individual-border absolute top-0 right-0 w-[70px] h-[70px]'> </div>
                    <img loading="lazy" src={surgeryPng} alt=""></img>
                    <h3>Cirugías</h3>
                    <p className='text-lg'>Cirugías en General. Contamos con servicio de traslado hasta el quirófano en caso de ser necesario.</p>
                </div>
                <div className="servicio-individual relative w-[45%] rounded-xl mx-[20px] p-6 mt-6">
                    <div className='servicio-individual-border absolute top-0 right-0 w-[70px] h-[70px]'> </div>
                    <img loading="lazy" src={horsePng} alt=""></img>
                    <h3>Certificado AIE</h3>
                    <p className='text-lg'>El certificado de AIE es OBLIGATORIO para cualquier Equino que deba ser trasladado o se presente en alguna competencia o evento ecuestre.</p>
                </div>
                <div className="servicio-individual relative w-[45%] rounded-xl mx-[20px] p-6 mt-6">
                    <div className='servicio-individual-border absolute top-0 right-0 w-[70px] h-[70px]'> </div>
                    <img loading="lazy" src={horseSanitaryPng} alt=""></img>
                    <h3>Libreta Sanitaria Equina</h3>
                    <p className='text-lg'>Registro y Vacunación inicial. Vacunaciones obligatorias.</p>
                </div>
                <div className="servicio-individual relative w-[45%] rounded-xl mx-[20px] p-6 mt-6">
                    <div className='servicio-individual-border absolute top-0 right-0 w-[70px] h-[70px]'> </div>
                    <img loading="lazy" src={intensivePng} alt=""></img>
                    <h3>Servicio de Terapia Intensiva</h3>
                    <p className='text-lg'>El servicio de terapia intensiva ofrece monitoreo y atención las 24 horas, partes médicos diarios, visitas a los pacientes, y comunicación constante con el tutor y el veterinario derivante. Dispone de oxigenoterapia, toma de muestras si es necesario y pocas plazas para garantizar atención personalizada.</p>
                </div>
            </div>

            </div>
        </div>
    )
}

export default Servicios