import smallerDogJpg from '../../assets/smaller-dog.jpg'

const Blogs = () => {
    return(
        <>
        <div>
          <h1>CONSEJOS PARA EL CUIDADO DE TUS ANIMALES</h1><br></br>
          <p>Lea nuestros articulos con consejos y recomendaciones para el cuidado de tu mascota.Estos consejos te ayudaran a darle loo mejor para tu mascota.</p>
        </div>
        <div className="flex flex-wrap">
            <div className="blog-card rounded-xl">
                <div>
                    <img src={smallerDogJpg} alt=""></img>
                </div>
                <div>
                    <h2>Como entrenar a tu cachorro</h2><br></br>
                    <p>resumen de la descripcion del blog</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Blogs