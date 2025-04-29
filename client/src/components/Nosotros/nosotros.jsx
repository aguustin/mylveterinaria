import doctorJpg from '../../assets/doctorprueba.jpg'
import fondoNosotrosPng from '../../assets/fondoNosotros.png'
import huellasAPng from '../../assets/huellasA.png'
import catCleaningPng from '../../assets/catcleaning.png'
import horsePng from '../../assets/horse.png'
import horseshoePng from '../../assets/horseshoe.png'

const Nosotros = () => {
    return(
        <>
        <div className='nosotros-component relative mx-auto w-screen overflow-x-hidden'>
            <div className='titulos w-[80vw] mx-auto text-center p-10'>
                <h2>NOSOTROS</h2>
                <p className='mt-3 text-2xl'>Somos veterinarios profesionales y experimentados dedicados al cuidado de mascotas de todo tipo. Nuestro equipo combina la pasión por los animales con años de experiencia clínica para ofrecer atención personalizada y de calidad.</p>
            </div>
            <div className='myl w-[80vw] mx-auto'>
                <div className="flex">
                    <div>
                        <img className='profiles h-[490px] min-w-[330px] object-cover rounded-lg' src={doctorJpg} alt=""></img>
                    </div>
                    <div className='relative left-10'>
                        <h3>Dra. Ana Perez</h3>
                        <h4>Veterinaria especializada en animales pequeños</h4>
                        <p className='mt-3'>Con más de 10 años de experiencia, la Dra. Ana Pérez es una experta en el cuidado de perros, gatos y animales exóticos de pequeño tamaño. Su enfoque se basa en la medicina preventiva, el trato amable y la generación de confianza tanto con los dueños como con las mascotas. Ha realizado múltiples capacitaciones en etología clínica y medicina felina.</p><br></br>
                        <p className='myl-phrase'> “Me encanta poder acompañar a las familias en cada etapa de la vida de sus mascotas. Mi objetivo es que se sientan seguras, comprendidas y bien cuidadas.”</p>
                        <div className='flex justify-between w-[80%] items-center mx-auto mt-9'>
                            <img src={huellasAPng} alt=""></img>
                            <img src={catCleaningPng} alt=""></img>
                        </div>
                    </div>
                </div>
                <div className="invert-profile flex mt-20">
                    <div className='relative right-10'>
                        <h3>Dr. Juan González</h3>
                        <h4>Veterinario especializado en animales de gran tamaño</h4>
                        <p className='mt-3'>Reconocido por su trabajo con animales de gran porte como caballos, vacas y animales de granja. Su vocación por la medicina veterinaria rural lo ha llevado a trabajar en diversos entornos, desde clínicas móviles hasta campos de producción ganadera. Combina un trato cercano con gran conocimiento técnico.</p><br></br>
                        <p className='myl-phrase'>“Entender a cada especie y saber cómo ayudarlas es una responsabilidad que asumo con compromiso. La salud animal también es bienestar humano.”</p>
                        <div className='flex justify-between w-[80%] items-center mx-auto mt-9'>
                            <img src={horsePng} alt=""></img>
                            <img src={horseshoePng} alt=""></img>
                        </div>
                    </div>
                    <div>
                        <img className='profiles h-[490px] min-w-[330px] object-cover rounded-lg' src={doctorJpg} alt=""></img>
                    </div>
                </div>
            </div>
            <div className="nuestra-mision w-[80vw] items-center mx-auto mt-10">
                <div className='text-center'>
                    <h3 className='underline'>Nuestra Misión</h3>
                    <p className='mt-3'>Brindar atención veterinaria de alta calidad, personalizada y humana, garantizando el bienestar de cada animal y la tranquilidad de sus familias.</p>
                </div>
            </div>
                <div className='mx-auto w-[80vw] mt-10 mb-20'>
                    <div className='nuestra-historia text-center'>
                        <h3 className='underline'>Nuestra Historia</h3>
                        <p className='mt-3'>La clínica Vida Animal nació del sueño compartido de ofrecer una atención veterinaria integral para todas las especies. A lo largo de los años, hemos formado un equipo multidisciplinario que acompaña a nuestros pacientes desde su primer control hasta los cuidados más complejos, siempre con cariño y dedicación.</p><br></br>
                    </div>
                    <div className='evolucion'>
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
                    </div>
                </div>
                <div className='maps w-[80vw] text-center mx-auto mb-16'>
                    <h3>Puedes encontrarnos en:</h3>
                    <div><iframe width="100%" height="300" src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=F%C3%A9lix%20Bogado%20326+(Go%20Market)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe></div>
                </div>
        </div>
        </>
    )
}

export default Nosotros

/** <div className='evolucion'>
                        <div className='flex'>
                            <h5 className='mt-6 text-xl'>2012 - Fundacion A</h5>
                            <p className='mt-6 ml-6 w-[80%] text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam molestiae debitis, aliquid distinctio reprehenderit, molestias blanditiis dolorum nostrum aperiam excepturi saepe cum laboriosam sed, est necessitatibus id sapiente minus accusamus.</p>
                        </div>
                        <div className='flex'>
                            <h5 className='mt-6 text-xl'>2014 __ Accion B</h5>
                            <p className='mt-6 ml-6 w-[80%] text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam molestiae debitis, aliquid distinctio reprehenderit, molestias blanditiis dolorum nostrum aperiam excepturi saepe cum laboriosam sed, est necessitatibus id sapiente minus accusamus.</p>
                        </div>
                        <div className='flex'>
                            <h5 className='mt-6 text-xl'>2016 __ Accion C</h5>
                            <p className='mt-6 ml-6 w-[80%] text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam molestiae debitis, aliquid distinctio reprehenderit, molestias blanditiis dolorum nostrum aperiam excepturi saepe cum laboriosam sed, est necessitatibus id sapiente minus accusamus.</p>
                        </div>
                    </div> */