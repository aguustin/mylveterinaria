import { useState } from "react"
import patasPng from '../../assets/footprints.png'
import whatsappPng from '../../assets/whastapp.png'
import emailBPng from '../../assets/emailB.png'

const Contact = () => {
    const [envioExitoso, setEnvioExitoso] = useState(false)

    const enviarCorreo = (e) => {
        e.preventDefault()
        const nombre = e.target.elements.nombre.value
        const email = e.target.elements.email.value
        const telefono = e.target.elements.telefono.value
        const mensaje = e.target.elements.mensaje.value

        setEnvioExitoso(true)
    }

    return(
        <>
            <div className="w-screen mt-[90px]">
            {envioExitoso && 
                <div>
                    <p>El envio fue exitoso!</p>
                    <p>Pronto nos comunicaremos con vos!</p>
                    <a href="/Home">Cerrar</a>
                </div>
            }
            <div className="contactos-redes pt-10 mx-auto text-center"> 
                <p className="text-2xl">Puedes contactanos via:</p>
                <div className="flex text-left mx-auto w-[300px] mt-6">
                    <img src={whatsappPng} alt=""></img>
                    <div className="ml-4">
                        <p className="text-lg">Whatsapp:</p>
                        <a className="text-lg p-1" href="https://wa.me/5492612086541" target="_blank">Chatear por WhatsApp</a>
                    </div>
                </div>
                <div className="flex text-left mx-auto w-[300px] mt-6">
                    <img src={emailBPng} alt=""></img>
                    <div className="ml-4">
                        <p className="text-lg">Correo:</p>
                        <a className="text-lg p-1" href="mailto:agustin.molee@gmail.com">Enviar correo</a>
                    </div>
                </div>
                <p className="text-xl mt-10">O completa el formulario y nosotros nos comunicaremos contigo:</p>
            </div>
            <div>
                <form className="contact-form mx-auto w-[600px] p-9 mt-6 mb-15" onSubmit={(e) => enviarCorreo(e)}>
                    <div className="flex items-center">
                        <p className="text-3xl mx-auto">Podemos ayudar a tu mascota</p>
                        <img src={patasPng} alt=""></img>
                    </div>
                    <div className="mt-3 mb-6">
                        <p>Complete el formulario y nosotros nos comunicaremos con vos</p>
                    </div>
                    <div className="bg-white p-3">
                        <div className="form-group">
                            <label>Tu nombre</label><br></br>
                            <input className="w-full p-2 rounded-lg" type="text" placeholder="..." name="nombre"></input>
                        </div>
                        <div className="form-group">
                            <label>Correo electrónico</label><br></br>
                            <input className="w-full p-2 rounded-lg" type="mail" placeholder="..." name="email"></input>
                        </div>
                        <div className="form-group">
                            <label>Teléfono</label><br></br>
                            <input className="w-full p-2 rounded-lg" type="text" placeholder="..." name="telefono"></input>
                        </div>
                        <div className="form-group">
                            <label>Mensaje</label><br></br>
                            <input className="w-full p-2 rounded-lg" type="text" placeholder="..." name="mensaje"></input>
                        </div>
                        <div>

                    </div>
                    </div>
                    <div className="text-center mt-6">
                        <button className="mx-auto" type="submit">Enviar</button>
                    </div>
                </form>
            </div>
            </div>
        </>
    )
}

export default Contact