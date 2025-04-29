import portadaJpg from '../../assets/portada.jpg'
import heartPng from '../../assets/medical-heart.png'
import doctorJpg from '../../assets/doctorprueba.jpg'
import smallerDogJpg from '../../assets/smaller-dog.jpg'
import doctorPng from '../../assets/doctor.png'
import phonePng from '../../assets/phone.png'
import mailPng from '../../assets/email.png'
import formPng from '../../assets/form.png'

const Home = () => {
    return(
        <>
        <div>
          <img className='w-screen' src={portadaJpg} alt=""></img>
            <div>
                <div className='servicios-container text-center p-12'>
                    <h2>
                        Servicios
                    </h2>
                    <div className='servicios mx-auto flex flex-wrap justify-between items-center w-[80vw]'>
                        <div className='w-[260px] mt-10 mx-auto'>
                            <img className='mx-auto' src={heartPng} alt=""></img><br></br>
                            <p className='text-2xl'>Atencion a domicilio</p>
                        </div>
                        <div  className='w-[260px] mt-10 mx-auto'>
                            <img className='mx-auto' src={heartPng} alt=""></img><br></br>
                            <p className='text-2xl'>Consultas</p>
                        </div>
                        <div className='w-[260px] mt-10 mx-auto' >
                            <img className='mx-auto' src={heartPng} alt=""></img><br></br>
                            <p className='text-2xl'>Cirugías</p>
                        </div>
                        <div  className='w-[260px] mt-10 mx-auto'>
                            <img className='mx-auto' src={heartPng} alt=""></img><br></br>
                            <p className='text-2xl'>Vacunacion</p>
                        </div>
                        <div className='w-[260px] mt-10 mx-auto'>
                            <img className='mx-auto' src={heartPng} alt=""></img><br></br>
                            <p className='text-2xl'>Cuidados Intensivos</p>
                        </div>
                        <div className='w-[260px] mt-10 mx-auto'>
                            <img className='mx-auto' src={heartPng} alt=""></img><br></br>
                            <p className='text-2xl'>Clínica de pequeños animales</p>
                        </div>
                        <div  className='w-[260px] mt-10 mx-auto'>
                            <img className='mx-auto' src={heartPng} alt=""></img><br></br>
                            <p className='text-2xl'>Clínica de Grandes animales</p>
                        </div>
                        <div className='w-[260px] mt-10 mx-auto' >
                            <img className='mx-auto' src={heartPng} alt=""></img><br></br>
                            <p className='text-2xl'>Certificado AIE</p>
                        </div>
                        <div  className='w-[260px] mt-10 mx-auto'>
                            <img className='mx-auto' src={heartPng} alt=""></img><br></br>
                            <p className='text-2xl'>Fisioterapia y Rehabilitación</p>
                        </div>
                        <div className='w-[260px] mt-10 mx-auto'>
                            <img className='mx-auto' src={heartPng} alt=""></img><br></br>
                            <p className='text-2xl'>Libreta Sanitaria Equina</p>
                        </div>
                    </div>
                        <div className='link-nosotros text-center mx-auto mt-16'>
                            <a className="p-3 pl-6 pr-6" href="/Servicios">Saber mas</a>
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
                            <img className='mx-auto w-[250px] rounded-3xl' src={doctorJpg} alt=""></img><br></br>
                            <p className='text-xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam aliquid laudantium consequuntur in ut esse! Minima ab cum consequatur reprehenderit corporis molestiae debitis consequuntur, cumque, omnis deserunt repudiandae. Aspernatur, magnam.</p>
                        </div>
                        <img className='doctorPng w-[128px] h-[128px] mx-auto' src={doctorPng} alt=""></img>
                        <div className='w-[600px] text-center'>
                            <img className='mx-auto w-[250px] rounded-3xl' src={doctorJpg} alt=""></img><br></br>
                            <p className='text-xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam aliquid laudantium consequuntur in ut esse! Minima ab cum consequatur reprehenderit corporis molestiae debitis consequuntur, cumque, omnis deserunt repudiandae. Aspernatur, magnam.</p>
                        </div>
                    </div>
                    <div className='link-nosotros text-center mx-auto'>
                        <a className="p-3 pl-6 pr-6" href="/Nosotros">Saber mas</a>
                    </div>
                </div>
                <div>
                    <div className='text-center mt-16'>
                        <h2>
                            Galería
                        </h2>
                    </div>
                    <div className='flex flex-wrap mx-auto mt-3'>
                        <div className='w-[320px] mx-auto mt-6'>
                            <img className='rounded-2xl' src={smallerDogJpg} alt=""></img>
                        </div>
                        <div className='w-[320px] mx-auto mt-6'>
                            <img className='rounded-2xl' src={smallerDogJpg} alt=""></img>
                        </div>
                        <div className='w-[320px] mx-auto mt-6'>
                            <img className='rounded-2xl' src={smallerDogJpg} alt=""></img>
                        </div>
                        <div className='w-[320px] mx-auto mt-6'>
                            <img className='rounded-2xl' src={smallerDogJpg} alt=""></img>
                        </div>
                        <div className='w-[320px] mx-auto mt-6'>
                            <img className='rounded-2xl' src={smallerDogJpg} alt=""></img>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='text-center mt-9'>
                        <h2>
                            Contacto
                        </h2>
                    </div>
                    <div className='contacto flex flex-wrap justify-between mx-auto mt-6 mb-10'>
                        <div className='w-[600px] text-center'>
                            <p className='text-3xl'>Puedes contactarnos por:</p><br></br>
                            <div className='flex items-center'>
                                <img src={phonePng} alt=""></img>
                                <p className='text-xl ml-5'>Whatsapp: +5492618889991</p>
                            </div>
                            <div className='flex items-center mt-8'>
                                <img src={mailPng} alt=""></img>
                                <p className='text-xl ml-5'>Mail: MyLVeterinaria@gmail.com</p>
                            </div>
                            <div className='flex items-center mt-8'>
                                <img src={formPng} alt=""></img>
                                <p className='text-xl ml-5'>Contactanos por aca: <a href="/Contact">Contactar</a></p>
                            </div>
                        </div>
                        <div className='maps w-[600px] text-center'>
                            <div><iframe width="100%" height="300" src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=F%C3%A9lix%20Bogado%20326+(Go%20Market)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe></div>
                        </div>
                    </div>
                </div>
            </div>   
          </div>       
        </>
    )
}

export default Home