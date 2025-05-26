import instagramPng from '../../assets/instagram.png' 
import facebookPng from '../../assets/facebook.png' 
import whatsappPng from '../../assets/whatsapp.png' 

const Footer = () => {
    return(
        <div className="footer pt-10 pb-10">
            <div className='text-center'>
                <p className='text-2xl'>"Cuidamos a tus mascotas como parte de nuestra familia, con amor, experiencia y dedicación."</p>
                <div className='flex items-center justify-center'>
                    <a className='mx-3' href="https://www.instagram.com/myl.veterinarios/" ><img loading="lazy" className='w-[40px] mt-6 mb-6' src={instagramPng} alt=""></img></a>
                    {/*<a className='mx-3' href="" ><img loading="lazy" className='w-[40px] mt-6 mb-6' src={facebookPng} alt=""></img></a>*/}
                    <a className='mx-3' href="https://wa.me/5492612053343" ><img loading="lazy" className='w-[40px] mt-6 mb-6' src={whatsappPng} alt=""></img></a>
                </div>
                <p>Copyright MyL Veterinarios© – Todo los derechos reservados</p>
            </div>
        </div>
    )
}

export default Footer