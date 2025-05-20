import portadaJpg from '../../assets/pero gris-01.jpg'
//import heartPng from '../../assets/medical-heart.png'
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
import doctorJpg from '../../assets/doctorprueba.jpg'
import smallerDogJpg from '../../assets/smaller-dog.jpg'
import doctorPng from '../../assets/doctor.png'
import phonePng from '../../assets/phone.png'
import mailPng from '../../assets/email.png'
import formPng from '../../assets/form.png'

const Home = () => {
    return(
        <>
        <div className='home'>
            {/*<div className='relative'>
                <div className='absolute w-[700px] top-50 left-50'>
                    <p className='text-4xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint in id aliquid. Nam earum fugit itaque quisquam similique repudiandae velit, dolores quos tenetur fuga magnam dolorem sunt eaque quia ex!</p>
                </div>
                <img className='w-screen' src={portadaJpg} alt=""></img>
            </div>*/ }
            <div className='port-cover relative flex items-center'>
                <div className='port-text left-20 absolute w-[620px]'>
                    <h2>Bienvenidos a MyL Veterinaria:</h2>
                    <p className='text-6xl left-20 mt-3 mb-9'>Cuidamos a tu mejor amigo, las 24 horas, todos los días</p><br></br>
                    <a className='text-4xl pt-4 pb-4 pl-8 pr-8 mt-9 rounded-xl' href="https://wa.me/5492612053343">¡Agenda tu cita ahora!</a>
                </div>
                <img className='w-screen' src={portadaJpg} alt=""></img>
            </div>
            <div>
                <div className='servicios-container text-center p-12'>
                    <h2>
                        Servicios
                    </h2>
                    <div className='servicios mx-auto flex flex-wrap justify-between items-center w-[80vw]'>
                        <div className='w-[260px] mt-10 mx-auto'>
                            <img className='mx-auto' src={ambulancePng} alt=""></img><br></br>
                            <p className='text-2xl'>Atencion a domicilio</p>
                        </div>
                        <div  className='w-[260px] mt-10 mx-auto'>
                            <img className='mx-auto' src={consultPng} alt=""></img><br></br>
                            <p className='text-2xl'>Consultas</p>
                        </div>
                        <div className='w-[260px] mt-10 mx-auto' >
                            <img className='mx-auto' src={surgeryPng} alt=""></img><br></br>
                            <p className='text-2xl'>Cirugías</p>
                        </div>
                        <div  className='w-[260px] mt-10 mx-auto'>
                            <img className='mx-auto' src={vacunationPng} alt=""></img><br></br>
                            <p className='text-2xl'>Vacunacion</p>
                        </div>
                        <div className='w-[260px] mt-10 mx-auto'>
                            <img className='mx-auto' src={intensivePng} alt=""></img><br></br>
                            <p className='text-2xl'>Cuidados Intensivos</p>
                        </div>
                        <div className='w-[260px] mt-10 mx-auto'>
                            <img className='mx-auto' src={smallpetPng} alt=""></img><br></br>
                            <p className='text-2xl'>Clínica de pequeños animales</p>
                        </div>
                        <div  className='w-[260px] mt-10 mx-auto'>
                            <img className='mx-auto' src={bigpetPng} alt=""></img><br></br>
                            <p className='text-2xl'>Clínica de Grandes animales</p>
                        </div>
                        <div className='w-[260px] mt-10 mx-auto' >
                            <img className='mx-auto' src={qualityPng} alt=""></img><br></br>
                            <p className='text-2xl'>Certificado AIE</p>
                        </div>
                        <div  className='w-[260px] mt-10 mx-auto'>
                            <img className='mx-auto' src={rehabilitationPng} alt=""></img><br></br>
                            <p className='text-2xl'>Fisioterapia y Rehabilitación</p>
                        </div>
                        <div className='w-[260px] mt-10 mx-auto'>
                            <img className='mx-auto' src={flyerPng} alt=""></img><br></br>
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
                            <p className='text-2xl underline'>Martin Miguel Abalos Martinez</p><br></br>
                            <p className='text-xl'>Me presento, soy Martin y soy médico Veterinario. Clinica de pequeños y Grandes animales, Sanidad Equina, Emergencias y cuidados intensivos. Cirugías.</p>
                        </div>
                        <img className='doctorPng w-[128px] h-[128px] mx-auto' src={doctorPng} alt=""></img>
                        <div className='w-[600px] text-center'>
                            <img className='mx-auto w-[250px] rounded-3xl' src={doctorJpg} alt=""></img><br></br>
                            <p className='text-2xl underline'>Ludmila Gesto</p><br></br>
                            <p className='text-xl'>Me presento, soy Ludmila y soy médica Veterinaria. Clínica de pequeños animales. Fisiatria y rehabilitación animal de caninos y equinos, Emergencias y cuidados intensivos.</p>
                        </div>
                    </div>
                    <div className='link-nosotros text-center mx-auto'>
                        <a className="p-3 pl-6 pr-6" href="/Nosotros">Saber mas</a>
                    </div>
                </div>
                <div>
                    <div className='text-center mt-20'>
                        <h2>
                            Galería
                        </h2>
                    </div>
                    <div className='pet-home flex flex-wrap mx-auto mt-3'>
                        <div className='w-[320px] mx-auto mt-6'>
                            <img className='rounded-2xl w-[320px]' src={catJpg} alt=""></img>
                        </div>
                        <div className='w-[320px] mx-auto mt-6'>
                            <img className='rounded-2xl w-[320px]' src={cowJpg} alt=""></img>
                        </div>
                        <div className='w-[320px] mx-auto mt-6'>
                            <img className='rounded-2xl w-[320px]' src={dogJpg} alt=""></img>
                        </div>
                        <div className='w-[320px] mx-auto mt-6'>
                            <img className='rounded-2xl w-[320px]' src={horseJpg} alt=""></img>
                        </div>
                        <div className='w-[320px] mx-auto mt-6'>
                            <img className='rounded-2xl w-[320px]' src={goatJpg} alt=""></img>
                        </div>
                    </div>
                </div>
                <div className='mb-20'>
                    <div className='text-center mt-20'>
                        <h2>
                            Contacto
                        </h2>
                    </div>
                    <div className='contacto flex flex-wrap justify-between mx-auto mt-6 mb-10'>
                        <div className='w-[600px] text-center'>
                            <p className='text-3xl'>Puedes contactarnos por:</p><br></br>
                            <div className='flex items-center'>
                                <img src={phonePng} alt=""></img>
                                <p className='text-xl ml-5'>Whatsapp: +542612053343</p>
                            </div>
                            <div className='flex items-center mt-8'>
                                <img src={mailPng} alt=""></img>
                                <p className='text-xl ml-5'>Mail: elnogalargentina@gmail.com</p>
                            </div>
                            <div className='flex items-center mt-8'>
                                <img src={formPng} alt=""></img>
                                <p className='text-xl ml-5'>Contactanos aqui: <a href="/Contact">Contactar</a></p>
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