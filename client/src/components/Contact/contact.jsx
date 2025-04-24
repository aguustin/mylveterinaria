import { useState } from "react"
import patasPng from '../../assets/footprints.png'

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
            <div className="w-screen">
            {envioExitoso && 
                <div>
                    <p>El envio fue exitoso!</p>
                    <p>Pronto nos comunicaremos con vos!</p>
                    <a href="/Home">Cerrar</a>
                </div>
            }
                <form className="contact-form mx-auto w-[600px] p-9 mt-30 mb-15" onSubmit={(e) => enviarCorreo(e)}>
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
        </>
    )
}

export default Contact