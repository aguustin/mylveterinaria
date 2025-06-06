import doctorJpg from '../../assets/doctorprueba.jpg'
import fondoNosotrosPng from '../../assets/fondoNosotros.png'
import huellasAPng from '../../assets/huellasA.png'
import catCleaningPng from '../../assets/catcleaning.png'
import horsePng from '../../assets/horse.png'
import horseshoePng from '../../assets/horseshoe.png'
import perfilBG from '../../assets/perfilA/perfilBGB.jpeg'
import perfilBK from '../../assets/perfilA/perfilBK.jpeg'

const Nosotros = () => {
    return(
        <>
        <div className='nosotros-component relative mx-auto w-screen overflow-x-hidden'>
            <div className='titulos w-[80vw] mx-auto text-center p-10'>
                <h2 className='tit'>NOSOTROS</h2>
                <p className='mt-3 text-2xl'>Somos veterinarios profesionales y experimentados dedicados al cuidado de pequeños y grandes animales. Nuestro equipo combina la pasión por los animales con años de experiencia clínica para ofrecer atención personalizada y de calidad.</p><br></br>
                <p className='valores text-xl'>Nuestos valores se identifican con la
seriedad y compromiso, empatía, difundir el bienestar animal, <b className='underline text-black'>atendemos los pacientes a domicilio</b> y acompañamos
al tutor en los diferentes procesos. Asesorar y educar en relación a cuidados y tenencia
responsable. Trabajo en equipo.</p>
            </div>
            <div className='myl w-[80vw] mx-auto mt-10'>
                <div className="flex">
                    <div className='relative'>
                        <img loading="lazy" className='profiles  h-[490px] min-w-[330px] object-cover rounded-lg' src={perfilBG} alt=""></img>
                    </div>
                    <div className='relative left-10'>
                        <h3>Martin Miguel Abalos Martinez</h3>
                        <h4>Medico Veterinario. Clinica de pequeños y Grandes animales, Sanidad Equina, Emergencias y cuidados intensivos. Cirugías.</h4>
                        <p className='mt-3'>Formación o experiencia: Recibido en UNRC Ejerce en medicina equina Habilidado por SENASA para realizar sanidad equina .Trabaja en medicina de pequeños animales .Capacitacion en ecografía. Experiencia en urgencias y cuidados intensivos.</p><br></br>
                        <p className='myl-phrase'> “Triunfar en la vida es levantarse y volver a empezar, cada vez q la vida nos golpea.”</p>
                        <div className='flex justify-between w-[80%] items-center mx-auto mt-9'>
                            <img loading="lazy" src={horsePng} alt=""></img>
                            <img loading="lazy" src={horseshoePng} alt=""></img>
                        </div>
                    </div>
                </div>
                <div className="invert-profile flex mt-20">
                    <div className='relative right-10'>
                        <h3>Ludmila Gesto</h3>
                        <h4>Médica Veterinaria. Clínica de pequeños animales. Fisiatria y rehabilitación animal de caninos y equinos, Emergencias y cuidados intensivos. </h4>
                        <p className='mt-3'>Formación o experiencia: Recibida en UNRC, Experiencia en reproducción equina y clínica de equinos. Capacitación en fislatria y rehabilitación animal, fototerapia, kinesiotaping, ozonoterapia. Experiencia en emergencias y cuidados intensivos. </p><br></br>
                        <p className='myl-phrase'>“Es mejor prevenir que curar.”</p>
                        <div className='flex justify-between w-[80%] items-center mx-auto mt-9'>
                            <img loading="lazy" src={huellasAPng} alt=""></img>
                            <img loading="lazy" src={catCleaningPng} alt=""></img>
                        </div>
                    </div>
                    <div>
                        <img loading="lazy" className='profiles h-[490px] min-w-[330px] object-cover rounded-lg' src={perfilBK} alt=""></img>
                    </div>
                </div>
            </div>
            <div className="nuestra-mision w-[80vw] items-center mx-auto mt-10">
                <div className='text-center'>
                    <h3 className='underline'>Nuestra Misión</h3>
                    <p className='mt-3'>Nuestro objetivo es poder brindar un servicio de calidad y personalizado pensando en el bienestar del paciente y la comodidad del tutor.</p>
                    <p className='mt-3'>"Nos diferencia el trabajo en equipo, no solo entre nosotros sino también con una gran cantidad de colegas especialistas en diferente áreas, en los cuales nos apoyamos para lograr mejores diagnosticos y tratamientos mas efectivos, como ecografístas, radiológos, cirujanos traumatológicos, etólogos, análisis clínicos y mas"</p>
                </div>
            </div>
                <div className='nuestra-historia-container mx-auto w-[80vw] mt-10 mb-20'>
                    <div className='nuestra-historia text-center'>
                        <h3 className='underline'>Nuestra Historia</h3>
                        <p className='mt-3'>Nos recibimos en el año 2016 en Rio Cuarto y en 2017 nos vinimos a mendoza, desde ese momento comenzamos a ejercer la medicina veterinaria en diferentes lugares y nos dimos cuenta de la necesidad que tenia la gente de la atención a domicilio. </p><br></br>
                    </div>
                    <div className='nuestra-historia text-center'>
                        <h3 className='underline'>Visión</h3>
                        <p className='mt-3'>Poder lograr un amplio equipo de trabajo con colegas que quieran sumarse a <b className='text-2xl text-black'>MyL</b> para poder expandir las zonas de cobertura.</p><br></br>
                    </div>
                    {/*<div className='evolucion'>
                        <div className='flex justify-center'>
                            <h5 className='mt-6 text-xl'>2012 - Fundacion A:</h5>
                            <p className='mt-6 ml-3 w-[80%] text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam molestiae debitis, aliquid distinctio reprehenderit, molestias blanditiis dolorum nostrum aperiam excepturi saepe cum laboriosam sed, est necessitatibus id sapiente minus accusamus.</p>
                        </div>
                        <div className='flex justify-center'>
                            <h5 className='mt-6 text-xl'>2014 - Accion B:</h5>
                            <p className='mt-6 ml-3 w-[80%] text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam molestiae debitis, aliquid distinctio reprehenderit, molestias blanditiis dolorum nostrum aperiam excepturi saepe cum laboriosam sed, est necessitatibus id sapiente minus accusamus.</p>
                        </div>
                        <div className='flex justify-center'>
                            <h5 className='mt-6 text-xl'>2016 - Accion C:</h5>
                            <p className='mt-6 ml-3 w-[80%] text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam molestiae debitis, aliquid distinctio reprehenderit, molestias blanditiis dolorum nostrum aperiam excepturi saepe cum laboriosam sed, est necessitatibus id sapiente minus accusamus.</p>
                        </div>
                    </div> */}
                </div>
                {/*<div className='maps w-[80vw] text-center mx-auto mb-16'>
                    <h3>Puedes encontrarnos en:</h3>
                    <div><iframe width="100%" height="300" src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=F%C3%A9lix%20Bogado%20326+(Go%20Market)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe></div>
                </div> */}
        </div>
        </>
    )
}

export default Nosotros