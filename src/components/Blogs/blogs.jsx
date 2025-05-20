import { useState } from 'react'
import smallerDogJpg from '../../assets/smaller-dog.jpg'
import crossPng from '../../assets/cross.png'
import blogAJpg from '../../assets/blogs/blogA.jpg'
import blogBJpg from '../../assets/blogs/blogB.jpg'

const Blogs = () => {

    const [openBlog, setOpenBlog] = useState(0)

    return(
        <>
        {openBlog === 0 ? '' : <div className='abcd fixed bg-slate-800'></div>}
        <div className='w-screen mt-[90px]'>
            <div className='blogs-container w-[80vw] mx-auto'>
                <div className='text-center pl-10 pt-10 pr-10'>
                    <h2 className='text-black'>CONSEJOS PARA EL CUIDADO DE TUS ANIMALES</h2><br></br>
                    <p className='text-2xl'>Lea nuestros articulos con consejos y recomendaciones para el cuidado de tu mascota.Estos consejos te ayudaran a darle loo mejor para tu mascota.</p>
                </div>
                <div className="flex justify-around flex-wrap mb-13 ml-13 mr-13">
                    <div onClick={() => setOpenBlog(1)} className="blog-card w-[300px] rounded-xl mt-6">
                        <div>
                            <img src={blogAJpg} alt=""></img>
                        </div>
                        <div className='p-4'>
                            <h2>Cómo preparar a tu mascota para una visita al veterinario</h2>
                            <p className='text-xl mt-3'>Qué hacer antes, durante y después de la consulta.</p>
                        </div>
                    </div>
                    <div onClick={() => setOpenBlog(2)} className="blog-card w-[300px] rounded-xl  mt-6">
                        <div>
                            <img className='h-[226px] object-fill' src={blogBJpg} alt=""></img>
                        </div>
                        <div className='p-4'>
                            <h2>Alimentación saludable según la edad y especie</h2>
                            <p className='text-xl mt-3'>Diferencias entre cachorros, adultos y animales senior.</p>
                        </div>
                    </div>
                    <div onClick={() => setOpenBlog(3)}  className="blog-card w-[300px] rounded-xl  mt-6">
                        <div>
                            <img src={smallerDogJpg} alt=""></img>
                        </div>
                        <div className='p-4'>
                            <h2 className='text-'>Vacunas esenciales para perros y gatos</h2>
                            <p className='text-xl mt-3'>Calendario de vacunación y por qué es importante cumplirlo.</p>
                        </div>
                    </div>
                    <div onClick={() => setOpenBlog(4)}  className="blog-card w-[300px] rounded-xl  mt-6">
                        <div>
                            <img src={smallerDogJpg} alt=""></img>
                        </div>
                        <div className='p-4'>
                            <h2>Consejos para el cuidado dental de tu mascota</h2>
                            <p className='text-xl mt-3'>Señales de problemas dentales y productos recomendados.</p>
                        </div>
                    </div>
                    <div onClick={() => setOpenBlog(5)} className="blog-card w-[300px] rounded-xl mt-6">
                        <div>
                            <img src={smallerDogJpg} alt=""></img>
                        </div>
                        <div className='p-4'>
                            <h2>Mantener a tu mascota activa y mentalmente estimulada</h2>
                            <p className='text-xl mt-3'>Juegos caseros y rutinas de ejercicio, enriquecimiento ambiental.</p>
                        </div>
                    </div>
                    <div onClick={() => setOpenBlog(6)} className="blog-card w-[300px] rounded-xl  mt-6">
                        <div>
                            <img src={smallerDogJpg} alt=""></img>
                        </div>
                        <div className='p-4'>
                            <h2>Prevención de parásitos: pulgas, garrapatas y desparasitación</h2>
                            <p className='text-xl mt-3'>Productos preventivos y señales de alerta.</p>
                        </div>
                    </div>
                    <div onClick={() => setOpenBlog(7)}  className="blog-card w-[300px] rounded-xl  mt-6">
                        <div>
                            <img src={smallerDogJpg} alt=""></img>
                        </div>
                        <div className='p-4'>
                            <h2>Cómo reconocer signos de enfermedad en tu mascota</h2>
                            <p className='text-xl mt-3'>Cambios de comportamiento, apetito o energía.</p>
                        </div>
                    </div>
                    <div onClick={() => setOpenBlog(8)}  className="blog-card w-[300px] rounded-xl mt-6">
                        <div>
                            <img src={smallerDogJpg} alt=""></img>
                        </div>
                        <div className='p-4'>
                            <h2>Consejos para cuidar a tu mascota en climas extremos</h2>
                            <p className='text-xl mt-3'>Precauciones en verano e invierno, Hidratación, refugio y paseos seguros.</p>
                        </div>
                    </div>
                </div>
                {openBlog === 1 && <div className='open-blog fixed w-[900px] flex rounded-xl'>
                    <div>
                        <div className='blog-number flex items-center justify-center h-full w-[230px]'><p>1</p></div>
                        {/*<img className='h-full object-cover w-[2400px]' src={blogAJpg} alt=""></img>*/ }
                    </div>
                    <div>
                        <div className='open-blog-title relative flex'>
                            <button className='absolute' onClick={() => setOpenBlog(0)}><img src={crossPng} alt=""></img></button>
                            <h2 className='ml-3'>Cómo preparar a tu mascota para una visita al veterinario</h2><br></br>
                        </div>
                        <div className='p-6'>
                            <p className='text-xl open-blog-text'>Llevar a tu mascota al veterinario no tiene por qué ser una experiencia estresante. Acostúmbrala desde temprana edad a los transportines y al contacto físico. Evita llegar apurado, mantén una actitud calmada y lleva premios para reforzar su buen comportamiento. También es importante que uses una correa segura o una jaula adecuada para su transporte.</p>
                        </div>
                    </div>
                </div> }
                {openBlog === 2 && <div className='open-blog fixed w-[900px] flex rounded-xl'>
                    <div>
                        <div className='blog-number flex items-center justify-center h-full w-[230px]'><p>2</p></div>
                        {/*<img className='h-full object-cover w-[2400px]' src={blogBJpg} alt=""></img> */ }
                    </div>
                    <div>
                        <div className='open-blog-title relative flex'>
                            <button className='absolute' onClick={() => setOpenBlog(0)}><img src={crossPng} alt=""></img></button>
                            <h2 className='ml-3'>Alimentación saludable según la edad y especie</h2><br></br>
                        </div>
                        <div className='p-6'>
                            <p className='text-xl open-blog-text'>La dieta de tu mascota debe adaptarse a su especie, tamaño, edad y nivel de actividad. Los cachorros y gatitos necesitan alimentos ricos en proteínas y calcio, mientras que los adultos requieren mantenimiento calórico equilibrado. Los animales mayores, en cambio, se benefician de dietas bajas en grasa y con suplementos para las articulaciones. Siempre consulta con tu veterinario antes de cambiar su alimentación.</p>
                        </div>
                    </div>
                </div> }
                {openBlog === 3 && <div className='open-blog fixed w-[900px] flex rounded-xl'>
                    <div>
                        <div className='blog-number flex items-center justify-center h-full w-[230px]'><p>3</p></div>
                        {/*<img className='h-full object-cover w-[2400px]' src={smallerDogJpg} alt=""></img> */ }
                    </div>
                    <div>
                        <div className='open-blog-title relative flex'>
                            <button className='absolute' onClick={() => setOpenBlog(0)}><img src={crossPng} alt=""></img></button>
                            <h2 className='ml-3'>Vacunas esenciales para perros y gatos</h2><br></br>
                        </div>
                        <div className='p-6'>
                            <p className='text-xl open-blog-text'>Las vacunas son clave para proteger a tus mascotas contra enfermedades graves como la rabia, moquillo, parvovirus o leucemia felina. Establecer un calendario de vacunación desde los primeros meses de vida ayuda a garantizar una vida larga y saludable. Además, las vacunas no solo cuidan a tu mascota, sino que también ayudan a proteger a otras.</p>
                        </div>
                    </div>
                </div> }
                {openBlog === 4 && <div className='open-blog fixed w-[900px] flex rounded-xl'>
                    <div>
                        <div className='blog-number flex items-center justify-center h-full w-[230px]'><p>4</p></div>
                        {/*<img className='h-full object-cover w-[2400px]' src={smallerDogJpg} alt=""></img> */ }
                    </div>
                    <div>
                        <div className='open-blog-title relative flex'>
                            <button className='absolute' onClick={() => setOpenBlog(0)}><img src={crossPng} alt=""></img></button>
                            <h2 className='ml-3'>Consejos para el cuidado dental de tu mascota</h2><br></br>
                        </div>
                        <div className='p-6'>
                            <p className='text-xl open-blog-text'>El mal aliento puede ser el primer signo de problemas dentales. Cepillar los dientes de tu mascota regularmente, ofrecer juguetes masticables y revisar su boca con frecuencia es esencial para prevenir enfermedades como la gingivitis. Existen pastas especiales y cepillos adecuados para cada especie. Consulta al veterinario sobre limpiezas dentales profesionales.</p>
                        </div>
                    </div>
                </div> }
                {openBlog === 5 && <div className='open-blog fixed w-[900px] flex rounded-xl'>
                    <div>
                        <div className='blog-number flex items-center justify-center h-full w-[230px]'><p>5</p></div>
                        {/*<img className='h-full object-cover w-[2400px]' src={smallerDogJpg} alt=""></img> */ }
                    </div>
                    <div>
                        <div className='open-blog-title relative flex'>
                            <button className='absolute' onClick={() => setOpenBlog(0)}><img src={crossPng} alt=""></img></button>
                            <h2 className='ml-3'>Cómo mantener a tu mascota activa y mentalmente estimulada</h2><br></br>
                        </div>
                        <div className='p-6'>
                            <p className='text-xl open-blog-text'>El ejercicio no solo es físico, también debe estimular la mente. Los paseos diarios, juguetes interactivos, juegos de olfato y retos como encontrar premios escondidos mejoran la salud general. Las mascotas aburridas tienden a desarrollar conductas destructivas, por lo que mantenerlas activas es una forma efectiva de prevenirlo.</p>
                        </div>
                    </div>
                </div> }
                {openBlog === 6 && <div className='open-blog fixed w-[900px] flex rounded-xl'>
                    <div>
                        <div className='blog-number flex items-center justify-center h-full w-[230px]'><p>6</p></div>
                        {/*<img className='h-full object-cover w-[2400px]' src={smallerDogJpg} alt=""></img> */ }
                    </div>
                    <div>
                        <div className='open-blog-title relative flex'>
                            <button className='absolute' onClick={() => setOpenBlog(0)}><img src={crossPng} alt=""></img></button>
                            <h2 className='ml-3'>Prevención de parásitos: pulgas, garrapatas y desparasitación</h2><br></br>
                        </div>
                        <div className='p-6'>
                            <p className='text-xl open-blog-text'>Pulgas y garrapatas pueden transmitir enfermedades graves. Usa productos preventivos como pipetas, collares o pastillas recomendadas por tu veterinario. La desparasitación interna también es vital: hazla cada 3 o 4 meses, dependiendo del estilo de vida de tu mascota. Revisa su piel y pelaje con frecuencia, especialmente después de paseos.</p>
                        </div>
                    </div>
                </div> }
                {openBlog === 7 && <div className='open-blog fixed w-[900px] flex rounded-xl'>
                    <div>
                        <div className='blog-number flex items-center justify-center h-full w-[230px]'><p>7</p></div>
                        {/*<img className='h-full object-cover w-[2400px]' src={smallerDogJpg} alt=""></img> */ }
                    </div>
                    <div>
                        <div className='open-blog-title relative flex'>
                            <button className='absolute' onClick={() => setOpenBlog(0)}><img src={crossPng} alt=""></img></button>
                            <h2 className='ml-3'>Cómo reconocer signos de enfermedad en tu mascota</h2><br></br>
                        </div>
                        <div className='p-6'>
                            <p className='text-xl open-blog-text'>Tu mascota no puede hablar, pero su cuerpo sí da señales. Cambios de apetito, letargo, vómitos, diarrea, jadeo excesivo o comportamientos extraños pueden indicar que algo no anda bien. Si notas algo fuera de lo común, no esperes. Llevarla al veterinario a tiempo puede marcar la diferencia en su recuperación.</p>
                        </div>
                    </div>
                </div> }
                {openBlog === 8 && <div className='open-blog fixed w-[900px] flex rounded-xl'>
                    <div>
                        <div className='blog-number flex items-center justify-center h-full w-[230px]'><p>8</p></div>
                        {/*<img className='h-full object-cover w-[2400px]' src={smallerDogJpg} alt=""></img> */ }
                    </div>
                    <div>
                        <div className='open-blog-title relative flex'>
                            <button className='absolute' onClick={() => setOpenBlog(0)}><img src={crossPng} alt=""></img></button>
                            <h2 className='ml-3'>Consejos para cuidar a tu mascota en climas extremos</h2><br></br>
                        </div>
                        <div className='p-6'>
                            <p className='text-xl open-blog-text'>Durante el verano, evita paseos en horas de mucho calor, proporciona agua fresca y sombra. En invierno, reduce las salidas al exterior, protege a tu mascota del frío con ropa adecuada (si lo necesita) y asegúrate de que su cama esté en un lugar cálido. Recuerda que tanto el calor como el frío extremos pueden afectar seriamente su salud.</p>
                        </div>
                    </div>
                </div> }
            </div>
        </div>
        </>
    )
}

export default Blogs