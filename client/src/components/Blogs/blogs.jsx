import { useState } from 'react'
import smallerDogJpg from '../../assets/smaller-dog.jpg'
import crossPng from '../../assets/cross.png'
import blogAJpg from '../../assets/blogs/blogA.jpg'
import blogBJpg from '../../assets/blogs/blogB.jpg'
import blogCJpg from '../../assets/blogs/blogC.jpg'
import blogDJpg from '../../assets/blogs/blogD.jpg'
import blogEJpg from '../../assets/blogs/blogE.jpg'
import blogFJpg from '../../assets/blogs/blogF.jpg'
import blogHJpg from '../../assets/blogs/blogH.jpg'
import blogIJpg from '../../assets/blogs/blogI.jpg'
import dogEatJpg from '../../assets/blogs/blogEat.jpg'

const Blogs = () => {

    const [openBlog, setOpenBlog] = useState(0)

    return(
        <>
        {openBlog === 0 ? '' : <div className='abcd fixed bg-slate-800'></div>}
        <div className='w-screen mt-[90px]'>
            <div className='blogs-container w-[80vw] mx-auto'>
                <div className='text-center pl-10 pt-10 pr-10'>
                    <h2 className='tit text-black'>CONSEJOS PARA EL CUIDADO DE TUS ANIMALES</h2><br></br>
                    <p className='text-2xl'>Lea nuestros articulos con consejos y recomendaciones para el cuidado de tu mascota.Estos consejos te ayudaran a darle loo mejor para tu mascota.</p>
                </div>
                <div className="blog-card-container flex justify-around flex-wrap mb-13 ml-13 mr-13">
                    <div onClick={() => setOpenBlog(1)} className="blog-card w-[300px] rounded-xl mt-6">
                        <div>
                            <img loading="lazy" src={blogAJpg} alt=""></img>
                        </div>
                        <div className='p-4'>
                            <h2>VACUNAS</h2>
                            <p className='text-xl mt-3'>Importancia de la vacunación.</p>
                        </div>
                    </div>
                    <div onClick={() => setOpenBlog(2)} className="blog-card w-[300px] rounded-xl  mt-6">
                        <div>
                            <img loading="lazy" className=' object-fill' src={dogEatJpg} alt=""></img>
                        </div>
                        <div className='p-4'>
                            <h2>DESPARASITACION</h2>
                            <p className='text-xl mt-3'>Como garantizar un buen calendario de desparasitación.</p>
                        </div>
                    </div>
                    <div onClick={() => setOpenBlog(3)}  className="blog-card w-[300px] rounded-xl  mt-6">
                        <div>
                            <img loading="lazy" src={blogIJpg} alt=""></img>
                        </div>
                        <div className='p-4'>
                            <h2 className='text-'>VOMITOS Y DIARREAS EN TU PERRO</h2>
                            <p className='text-xl mt-3'>Todos los posibles signos de problemas digestivos.</p>
                        </div>
                    </div>
                    <div onClick={() => setOpenBlog(4)}  className="blog-card w-[300px] rounded-xl  mt-6">
                        <div>
                            <img loading="lazy" src={blogFJpg} alt=""></img>
                        </div>
                        <div className='p-4'>
                            <h2>PULGAS Y GARRAPATAS</h2>
                            <p className='text-xl mt-3'>Posibles enfermedades y como tratarlas.</p>
                        </div>
                    </div>
                    <div onClick={() => setOpenBlog(5)} className="blog-card w-[300px] rounded-xl mt-6">
                        <div>
                            <img loading="lazy" src={blogHJpg} alt=""></img>
                        </div>
                        <div className='p-4'>
                            <h2>INTOXICACIONES</h2>
                            <p className='text-xl mt-3'>Productos y alimentos a evitar.</p>
                        </div>
                    </div>
                    <div onClick={() => setOpenBlog(6)} className="blog-card w-[300px] rounded-xl  mt-6">
                        <div>
                            <img loading="lazy" src={blogEJpg} alt=""></img>
                        </div>
                        <div className='p-4'>
                            <h2>HINCHAZÓN DE LA CARA O ANGIEDEMA</h2>
                            <p className='text-xl mt-3'>Manifestación y causas.</p>
                        </div>
                    </div>
                    <div onClick={() => setOpenBlog(7)}  className="blog-card w-[300px] rounded-xl  mt-6">
                        <div>
                            <img loading="lazy" src={blogDJpg} alt=""></img>
                        </div>
                        <div className='p-4'>
                            <h2>CÓLICO EQUINO</h2>
                            <p className='text-xl mt-3'>Factores de riesgo y sintomas</p>
                        </div>
                    </div>
                    <div onClick={() => setOpenBlog(8)}  className="blog-card w-[300px] rounded-xl mt-6">
                        <div>
                            <img loading="lazy" src={blogCJpg} alt=""></img>
                        </div>
                        <div className='p-4'>
                            <h2>LIBRETA SANITARIA EQUINA (LSE)</h2>
                            <p className='text-xl mt-3'>Aclaracion sobre el documento LSE</p>
                        </div>
                    </div>
                </div>
                {openBlog === 1 && <div className='open-blog fixed w-[900px] flex rounded-xl'>
                    <div>
                        <div className='blog-number flex items-center justify-center h-full w-[230px]'><p>1</p></div>
                        {/*<img loading="lazy" className='h-full object-cover w-[2400px]' src={blogAJpg} alt=""></img>*/ }
                    </div>
                    <div>
                        <div className='open-blog-title relative flex'>
                            <button className='absolute' onClick={() => setOpenBlog(0)}><img loading="lazy" src={crossPng} alt=""></img></button>
                            <h2 className='ml-3'>VACUNAS</h2><br></br>
                        </div>
                        <div className='p-6 blogs-text'>
                            <p className='text-xl open-blog-text'>Es importante tener en cuenta el calendario de vacunación tanto de tu gato como de tu perro ya que las mismas previenen enfermedades graves y mortales como rabia, parvovirus y moquillo (en perros) y rabia, calicivirus, leucemia felina (en gatos).
Realizar un buen plan de vacunación es fundamental para mantener saludable y proteger la vida de tu mascota. Consulta con un veterinario ya que las mismas comienzan a colocarse a los pocos meses de vida.
</p>
                        </div>
                    </div>
                </div> }
                {openBlog === 2 && <div className='open-blog fixed w-[900px] flex rounded-xl'>
                    <div>
                        <div className='blog-number flex items-center justify-center h-full w-[230px]'><p>2</p></div>
                        {/*<img loading="lazy" className='h-full object-cover w-[2400px]' src={blogBJpg} alt=""></img> */ }
                    </div>
                    <div>
                        <div className='open-blog-title relative flex'>
                            <button className='absolute' onClick={() => setOpenBlog(0)}><img loading="lazy" src={crossPng} alt=""></img></button>
                            <h2 className='ml-3'>DESPARASITACION</h2><br></br>
                        </div>
                        <div className='p-6 blogs-text'>
                            <p className='text-xl open-blog-text'>Los parásitos en cualquier especie animal pueden generar graves problemas. Los mismos no necesariamente siempre son de índole digestivo ya que muchos pueden migrar a otros órganos y así producir diversas enfermedades. Consultar con  un veterinario es muy importante ya que la desparasitación se inicia desde la vida temprana del animal y debe ser repetida con cierta frecuencia para garantizar un buen calendario de desparasitación.</p>
                        </div>
                    </div>
                </div> }
                {openBlog === 3 && <div className='open-blog fixed w-[900px] flex rounded-xl'>
                    <div>
                        <div className='blog-number flex items-center justify-center h-full w-[230px]'><p>3</p></div>
                        {/*<img loading="lazy" className='h-full object-cover w-[2400px]' src={smallerDogJpg} alt=""></img> */ }
                    </div>
                    <div>
                        <div className='open-blog-title relative flex'>
                            <button className='absolute' onClick={() => setOpenBlog(0)}><img loading="lazy" src={crossPng} alt=""></img></button>
                            <h2 className='ml-3'>VOMITOS Y DIARREAS EN TU PERRO</h2><br></br>
                        </div>
                        <div className='p-6 blogs-text'>
                            <p className='text-xl open-blog-text'>Si bien lo más común es asociar estos signos con enfermedades digestivas esto no siempre es asì ya que muchas veces son signos de otras enfermedades como problemas renales, hepáticos, reproductivos o inclusive neurológicos
En los cachorros los vómitos y las diarreas pueden deshidratarlo muy rápido por lo que es muy importante que apenas detectes estos signos consultes con un veterinario.
</p>
                        </div>
                    </div>
                </div> }
                {openBlog === 4 && <div className='open-blog fixed w-[900px] flex rounded-xl'>
                    <div>
                        <div className='blog-number flex items-center justify-center h-full w-[230px]'><p>4</p></div>
                        {/*<img loading="lazy" className='h-full object-cover w-[2400px]' src={smallerDogJpg} alt=""></img> */ }
                    </div>
                    <div>
                        <div className='open-blog-title relative flex'>
                            <button className='absolute' onClick={() => setOpenBlog(0)}><img loading="lazy" src={crossPng} alt=""></img></button>
                            <h2 className='ml-3'>PULGAS Y GARRAPATAS</h2><br></br>
                        </div>
                        <div className='p-6 blogs-text'>
                            <p className='text-xl open-blog-text'>Las pulgas y garrapatas no solo generan picazón o heridas por rascado en los animales sino que también hay que tener en cuenta que son vectores para transmitir otras enfermedades que son graves en nuestras mascotas e incluso algunas pueden transmitirse a los humanos. Es importante que utilices un  producto bueno y seguro para combatir estos ectoparásitos en tus mascotas, asi que no dudes en consultarle a un veterinario que producto es el mas recomendados para tu amigo.</p>
                        </div>
                    </div>
                </div> }
                {openBlog === 5 && <div className='open-blog fixed w-[900px] flex rounded-xl'>
                    <div>
                        <div className='blog-number flex items-center justify-center h-full w-[230px]'><p>5</p></div>
                        {/*<img loading="lazy" className='h-full object-cover w-[2400px]' src={smallerDogJpg} alt=""></img> */ }
                    </div>
                    <div>
                        <div className='open-blog-title relative flex'>
                            <button className='absolute' onClick={() => setOpenBlog(0)}><img loading="lazy" src={crossPng} alt=""></img></button>
                            <h2 className='ml-3'>INTOXICACIONES</h2><br></br>
                        </div>
                        <div className='p-6 blogs-text'>
                            <p className='text-xl open-blog-text'>En nuestros compañeros hay muchas cosas que pueden generar intoxicaciones. Algunas plantas como el laurel rosa o el jazmin paraguayo suelen generar cuadros de intoxicación severa. Algunos productos muy frecuentes de uso casero que pueden intoxicar a tu animal son los venenos para roedores, los pesticidas o herbicidas y compuestos que tienen plomo como algunas pinturas. 
No podemos dejar de nombrar que algunas cosas comestibles pueden ser muy nocivos para tu mascota, incluso hasta toxicos como las pasas de uvas y el chocolate.
Debemos saber que las intoxicaciones pueden cursar con signos como salivación, vomitos, temblores, convulsiones y muerte; asi que si ves alguno de estos signos recurri urgente a un veterinario.
</p>
                        </div>
                    </div>
                </div> }
                {openBlog === 6 && <div className='open-blog fixed w-[900px] flex rounded-xl'>
                    <div>
                        <div className='blog-number flex items-center justify-center h-full w-[230px]'><p>6</p></div>
                        {/*<img loading="lazy" className='h-full object-cover w-[2400px]' src={smallerDogJpg} alt=""></img> */ }
                    </div>
                    <div>
                        <div className='open-blog-title relative flex'>
                            <button className='absolute' onClick={() => setOpenBlog(0)}><img loading="lazy" src={crossPng} alt=""></img></button>
                            <h2 className='ml-3'>HINCHAZÓN DE LA CARA O ANGIEDEMA</h2><br></br>
                        </div>
                        <div className='p-6 blogs-text'>
                            <p className='text-xl open-blog-text'>Se trata del acumulo de líquido o edema, que afecta la parte más profunda de la piel y tejidos por debajo de ella. Es una reacción alérgica producida por múltiples causas, dentro de las cuales podemos nombrar; picaduras de insectos, algunos medicamentos, alimentos, etc.
Se manifiesta como una zona de la piel hinchada y dura al tacto, especialmente en labios y párpados, acompañado de mucho prurito (picazón). Puede haber dificultad para comer o beber y en casos graves, edema en las vías respiratorias que puede ser mortal.
Ante el menor síntoma no dudes en acudir a tu veterinario de cabecera.
</p>
                        </div>
                    </div>
                </div> }
                {openBlog === 7 && <div className='open-blog fixed w-[900px] flex rounded-xl'>
                    <div>
                        <div className='blog-number flex items-center justify-center h-full w-[230px]'><p>7</p></div>
                        {/*<img loading="lazy" className='h-full object-cover w-[2400px]' src={smallerDogJpg} alt=""></img> */ }
                    </div>
                    <div>
                        <div className='open-blog-title relative flex'>
                            <button className='absolute' onClick={() => setOpenBlog(0)}><img loading="lazy" src={crossPng} alt=""></img></button>
                            <h2 className='ml-3'>CÓLICO EQUINO</h2><br></br>
                        </div>
                        <div className='p-6 blogs-text'>
                            <p className='text-xl open-blog-text'>El cólico es cuando el animal presenta dolor abdominal agudo, originado por diferentes causas, relacionadas al sistema digestivo o no.
Los caballos y mulares son la especie que presenta en forma más frecuente cuadros de cólicos de origen digestivo.
Hay muchos factores de riesgo que predisponen la aparición del cólico, entre ellos podemos nombrar, la calidad y cantidad de la dieta, pastos de mala calidad, con mucha fibra; sobrecarga de grano; falta de agua; cambios repentinos en el tipo de heno o granos; comidas dulces como la zanahoria; parásitos; falta de ejercicio; viajes largos en trailer, etc.
Algunos signos clínicos: escarban el suelo, buscan echarse con frecuencia, “juega” con el agua, se patea la panza, sudoración profusa, etc.
El cólico puede ser mortal, si tú caballo o yegua presenta alguno de estos signos clínicos, no dudes en llamar a tu veterinario.
</p>
                        </div>
                    </div>
                </div> }
                {openBlog === 8 && <div className='open-blog fixed w-[900px] flex rounded-xl'>
                    <div>
                        <div className='blog-number flex items-center justify-center h-full w-[230px]'><p>8</p></div>
                        {/*<img loading="lazy" className='h-full object-cover w-[2400px]' src={smallerDogJpg} alt=""></img> */ }
                    </div>
                    <div>
                        <div className='open-blog-title relative flex'>
                            <button className='absolute' onClick={() => setOpenBlog(0)}><img loading="lazy" src={crossPng} alt=""></img></button>
                            <h2 className='ml-3'>LIBRETA SANITARIA EQUINA (LSE)</h2><br></br>
                        </div>
                        <div className='p-6 blogs-text'>
                            <p className='text-xl open-blog-text'>La LSE es un documento individual, que acredita sanidad, NO propiedad y que será de uso obligatorio para los equinos. Tiene validez como instrumento sanitario para el tránsito y para el ingreso y permanencia de équidos en lugares de concentración, para lo cual debe estar al día con los requisitos sanitarios vigentes.
Dichos requisitos son:
-Anemia Infecciosa Equina: test negativo, con validez diagnóstica, 60 días.
-Influenza Equina: no más de 3 meses de vacunado.
-Encefalomielitis: vigencia no mayor a 1 año.
Conserve la LSE en buen estado, es el documento identificatorio y sanitario de su caballo. Será exigido por las autoridades sanitarias municipales, provinciales o nacionales en eventos hípicos, cómo asi mismo para traslados. Es un documento público y su adulteración está penada por ley.
</p>
                        </div>
                    </div>
                </div> }
            </div>
        </div>
        </>
    )
}

export default Blogs