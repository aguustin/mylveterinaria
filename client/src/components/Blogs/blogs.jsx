import { useState } from 'react'
import smallerDogJpg from '../../assets/smaller-dog.jpg'
import crossPng from '../../assets/cross.png'
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
                            <img src={smallerDogJpg} alt=""></img>
                        </div>
                        <div className='p-4'>
                            <h2 className='text-'>Como entrenar a tu cachorro</h2>
                            <p className='text-xl mt-3'>resumen de la descripcion del blog</p>
                        </div>
                    </div>
                    <div onClick={() => setOpenBlog(2)} className="blog-card w-[300px] rounded-xl  mt-6">
                        <div>
                            <img src={smallerDogJpg} alt=""></img>
                        </div>
                        <div className='p-4'>
                            <h2 className='text-'>Como entrenar a tu cachorro</h2>
                            <p className='text-xl mt-3'>resumen de la descripcion del blog</p>
                        </div>
                    </div>
                    <div onClick={() => setOpenBlog(3)}  className="blog-card w-[300px] rounded-xl  mt-6">
                        <div>
                            <img src={smallerDogJpg} alt=""></img>
                        </div>
                        <div className='p-4'>
                            <h2 className='text-'>Como entrenar a tu cachorro</h2>
                            <p className='text-xl mt-3'>resumen de la descripcion del blog</p>
                        </div>
                    </div>
                    <div onClick={() => setOpenBlog(4)}  className="blog-card w-[300px] rounded-xl  mt-6">
                        <div>
                            <img src={smallerDogJpg} alt=""></img>
                        </div>
                        <div className='p-4'>
                            <h2 className='text-'>Como entrenar a tu cachorro</h2>
                            <p className='text-xl mt-3'>resumen de la descripcion del blog</p>
                        </div>
                    </div>
                    <div onClick={() => setOpenBlog(5)} className="blog-card w-[300px] rounded-xl mt-6">
                        <div>
                            <img src={smallerDogJpg} alt=""></img>
                        </div>
                        <div className='p-4'>
                            <h2 className='text-'>Como entrenar a tu cachorro</h2>
                            <p className='text-xl mt-3'>resumen de la descripcion del blog</p>
                        </div>
                    </div>
                    <div onClick={() => setOpenBlog(6)} className="blog-card w-[300px] rounded-xl  mt-6">
                        <div>
                            <img src={smallerDogJpg} alt=""></img>
                        </div>
                        <div className='p-4'>
                            <h2 className='text-'>Como entrenar a tu cachorro</h2>
                            <p className='text-xl mt-3'>resumen de la descripcion del blog</p>
                        </div>
                    </div>
                    <div onClick={() => setOpenBlog(7)}  className="blog-card w-[300px] rounded-xl  mt-6">
                        <div>
                            <img src={smallerDogJpg} alt=""></img>
                        </div>
                        <div className='p-4'>
                            <h2 className='text-'>Como entrenar a tu cachorro</h2>
                            <p className='text-xl mt-3'>resumen de la descripcion del blog</p>
                        </div>
                    </div>
                    <div onClick={() => setOpenBlog(8)}  className="blog-card w-[300px] rounded-xl mt-6">
                        <div>
                            <img src={smallerDogJpg} alt=""></img>
                        </div>
                        <div className='p-4'>
                            <h2 className='text-'>Como entrenar a tu cachorro</h2>
                            <p className='text-xl mt-3'>resumen de la descripcion del blog</p>
                        </div>
                    </div>
                </div>
                {openBlog === 1 && <div className='open-blog fixed w-[900px] flex rounded-xl'>
                    <div>
                        <img className='h-full object-cover w-[2400px]' src={smallerDogJpg} alt=""></img>
                    </div>
                    <div>
                        <div className='open-blog-title relative flex'>
                            <button className='absolute' onClick={() => setOpenBlog(0)}><img src={crossPng} alt=""></img></button>
                            <h2 className='ml-3'>Como entrenar a tu cachorro</h2><br></br>
                        </div>
                        <div className='p-8'>
                            <p className='text-xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non illum molestias dolorum pariatur asperiores impedit dolore mollitia maiores, fugiat sint saepe assumenda delectus, voluptate perferendis sit? Quasi inventore at praesentium? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor doloribus, earum aspernatur, atque ut eveniet rerum sit, voluptate est veritatis odio culpa officiis possimus ipsum debitis ducimus quia suscipit a.</p>
                        </div>
                    </div>
                </div> }
                {openBlog === 2 && <div className='open-blog fixed w-[900px] flex rounded-xl'>
                    <div>
                        <img className='h-full object-cover w-[2400px]' src={smallerDogJpg} alt=""></img>
                    </div>
                    <div>
                        <div className='open-blog-title relative flex'>
                            <button className='absolute' onClick={() => setOpenBlog(0)}><img src={crossPng} alt=""></img></button>
                            <h2 className='ml-3'>Como entrenar a tu cachorro</h2><br></br>
                        </div>
                        <div className='p-8'>
                            <p className='text-xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non illum molestias dolorum pariatur asperiores impedit dolore mollitia maiores, fugiat sint saepe assumenda delectus, voluptate perferendis sit? Quasi inventore at praesentium? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor doloribus, earum aspernatur, atque ut eveniet rerum sit, voluptate est veritatis odio culpa officiis possimus ipsum debitis ducimus quia suscipit a.</p>
                        </div>
                    </div>
                </div> }
                {openBlog === 3 && <div className='open-blog fixed w-[900px] flex rounded-xl'>
                    <div>
                        <img className='h-full object-cover w-[2400px]' src={smallerDogJpg} alt=""></img>
                    </div>
                    <div>
                        <div className='open-blog-title relative flex'>
                            <button className='absolute' onClick={() => setOpenBlog(0)}><img src={crossPng} alt=""></img></button>
                            <h2 className='ml-3'>Como entrenar a tu cachorro</h2><br></br>
                        </div>
                        <div className='p-8'>
                            <p className='text-xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non illum molestias dolorum pariatur asperiores impedit dolore mollitia maiores, fugiat sint saepe assumenda delectus, voluptate perferendis sit? Quasi inventore at praesentium? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor doloribus, earum aspernatur, atque ut eveniet rerum sit, voluptate est veritatis odio culpa officiis possimus ipsum debitis ducimus quia suscipit a.</p>
                        </div>
                    </div>
                </div> }
                {openBlog === 4 && <div className='open-blog fixed w-[900px] flex rounded-xl'>
                    <div>
                        <img className='h-full object-cover w-[2400px]' src={smallerDogJpg} alt=""></img>
                    </div>
                    <div>
                        <div className='open-blog-title relative flex'>
                            <button className='absolute' onClick={() => setOpenBlog(0)}><img src={crossPng} alt=""></img></button>
                            <h2 className='ml-3'>Como entrenar a tu cachorro</h2><br></br>
                        </div>
                        <div className='p-8'>
                            <p className='text-xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non illum molestias dolorum pariatur asperiores impedit dolore mollitia maiores, fugiat sint saepe assumenda delectus, voluptate perferendis sit? Quasi inventore at praesentium? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor doloribus, earum aspernatur, atque ut eveniet rerum sit, voluptate est veritatis odio culpa officiis possimus ipsum debitis ducimus quia suscipit a.</p>
                        </div>
                    </div>
                </div> }
                {openBlog === 5 && <div className='open-blog fixed w-[900px] flex rounded-xl'>
                    <div>
                        <img className='h-full object-cover w-[2400px]' src={smallerDogJpg} alt=""></img>
                    </div>
                    <div>
                        <div className='open-blog-title relative flex'>
                            <button className='absolute' onClick={() => setOpenBlog(0)}><img src={crossPng} alt=""></img></button>
                            <h2 className='ml-3'>Como entrenar a tu cachorro</h2><br></br>
                        </div>
                        <div className='p-8'>
                            <p className='text-xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non illum molestias dolorum pariatur asperiores impedit dolore mollitia maiores, fugiat sint saepe assumenda delectus, voluptate perferendis sit? Quasi inventore at praesentium? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor doloribus, earum aspernatur, atque ut eveniet rerum sit, voluptate est veritatis odio culpa officiis possimus ipsum debitis ducimus quia suscipit a.</p>
                        </div>
                    </div>
                </div> }
                {openBlog === 6 && <div className='open-blog fixed w-[900px] flex rounded-xl'>
                    <div>
                        <img className='h-full object-cover w-[2400px]' src={smallerDogJpg} alt=""></img>
                    </div>
                    <div>
                        <div className='open-blog-title relative flex'>
                            <button className='absolute' onClick={() => setOpenBlog(0)}><img src={crossPng} alt=""></img></button>
                            <h2 className='ml-3'>Como entrenar a tu cachorro</h2><br></br>
                        </div>
                        <div className='p-8'>
                            <p className='text-xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non illum molestias dolorum pariatur asperiores impedit dolore mollitia maiores, fugiat sint saepe assumenda delectus, voluptate perferendis sit? Quasi inventore at praesentium? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor doloribus, earum aspernatur, atque ut eveniet rerum sit, voluptate est veritatis odio culpa officiis possimus ipsum debitis ducimus quia suscipit a.</p>
                        </div>
                    </div>
                </div> }
                {openBlog === 7 && <div className='open-blog fixed w-[900px] flex rounded-xl'>
                    <div>
                        <img className='h-full object-cover w-[2400px]' src={smallerDogJpg} alt=""></img>
                    </div>
                    <div>
                        <div className='open-blog-title relative flex'>
                            <button className='absolute' onClick={() => setOpenBlog(0)}><img src={crossPng} alt=""></img></button>
                            <h2 className='ml-3'>Como entrenar a tu cachorro</h2><br></br>
                        </div>
                        <div className='p-8'>
                            <p className='text-xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non illum molestias dolorum pariatur asperiores impedit dolore mollitia maiores, fugiat sint saepe assumenda delectus, voluptate perferendis sit? Quasi inventore at praesentium? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor doloribus, earum aspernatur, atque ut eveniet rerum sit, voluptate est veritatis odio culpa officiis possimus ipsum debitis ducimus quia suscipit a.</p>
                        </div>
                    </div>
                </div> }
                {openBlog === 8 && <div className='open-blog fixed w-[900px] flex rounded-xl'>
                    <div>
                        <img className='h-full object-cover w-[2400px]' src={smallerDogJpg} alt=""></img>
                    </div>
                    <div>
                        <div className='open-blog-title relative flex'>
                            <button className='absolute' onClick={() => setOpenBlog(0)}><img src={crossPng} alt=""></img></button>
                            <h2 className='ml-3'>Como entrenar a tu cachorro</h2><br></br>
                        </div>
                        <div className='p-8'>
                            <p className='text-xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non illum molestias dolorum pariatur asperiores impedit dolore mollitia maiores, fugiat sint saepe assumenda delectus, voluptate perferendis sit? Quasi inventore at praesentium? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor doloribus, earum aspernatur, atque ut eveniet rerum sit, voluptate est veritatis odio culpa officiis possimus ipsum debitis ducimus quia suscipit a.</p>
                        </div>
                    </div>
                </div> }
            </div>
        </div>
        </>
    )
}

export default Blogs