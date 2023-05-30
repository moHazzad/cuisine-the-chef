import React from 'react'
import imgGb from '../../assets/about1.jpg'

function Carousel() {
  return (
    <div  className=' p-20 mt-10 rounded-xl bg-slate-800'>
    <p className='text-center  font-serif md:text-7xl text-4xl font-semibold italic text-white'>Our Delicious <br /> Menu</p>
    <div className="w-64 carousel rounded-box mx-auto mt-10">
        <div className="carousel-item w-full">
            <img src="https://miraclestudio.design/html/deliciousa-html/assets/images/foodmenu/menu6/food1.jpg" className="w-full" alt="Tailwind CSS Carousel component" />
        </div>
        <div className="carousel-item w-full">
            <img src="https://miraclestudio.design/html/deliciousa-html/assets/images/foodmenu/menu6/food2.jpg" className="w-full" alt="Tailwind CSS Carousel component" />
        </div>
        <div className="carousel-item w-full">
            <img src="https://miraclestudio.design/html/deliciousa-html/assets/images/foodmenu/menu6/food3.jpg" className="w-full" alt="Tailwind CSS Carousel component" />
        </div>
        <div className="carousel-item w-full">
            <img src="https://miraclestudio.design/html/deliciousa-html/assets/images/foodmenu/menu6/food4.jpg" className="w-full" alt="Tailwind CSS Carousel component" />
        </div>
    </div>
    <div className=' md:flex items-center justify-center md:gap-10 mt-16 '>
        <div className='relative'>
            <img className='rounded-full ' src="https://miraclestudio.design/html/deliciousa-html/assets/images/foodmenu/menu6/food1.jpg" alt="" />
            <div className='hidden md:block border-dashed border-4 hover:animate-spin absolute top-[-7px] start-[-10px] right-[-10px] border-orange-500 rounded-full p-32'>

            </div>
            <div className='mt-5 text-white text-center'>
                <p className='text-2xl font-bold'>Chicken</p>
                <p>15 Recipes</p>
            </div>
        </div>
        <div className='relative'>
            <img className='rounded-full' src="https://miraclestudio.design/html/deliciousa-html/assets/images/foodmenu/menu6/food2.jpg" alt="" />
            <div className=' hidden md:block border-dashed border-4 hover:animate-spin absolute top-[-7px] start-[-10px] right-[-10px] border-orange-500 rounded-full p-32'>

            </div>
            <div className='mt-5 text-white text-center '>
                <p className='text-2xl font-bold'>Beef</p>
                <p>15 Recipes</p>
            </div>
        </div>
        <div className='relative'>
            <img className='rounded-full' src="https://miraclestudio.design/html/deliciousa-html/assets/images/foodmenu/menu6/food3.jpg" alt="" />
            <div className=' hidden md:block border-dashed border-4 hover:animate-spin absolute top-[-7px] start-[-10px] right-[-10px] border-orange-500 rounded-full p-32'>

            </div>
            <div className='mt-5 text-white text-center'>
                <p className='text-2xl font-bold'>Seafood</p>
                <p>15 Recipes</p>
            </div>
        </div>
        <div className='relative'>
            <img className='rounded-full' src="https://miraclestudio.design/html/deliciousa-html/assets/images/foodmenu/menu6/food4.jpg" alt="" />
            <div className=' hidden md:block border-dashed border-4 hover:animate-spin absolute top-[-7px] start-[-10px] right-[-10px] border-orange-500 rounded-full p-32'>

            </div>
            <div className="mt-5 text-white text-center">
                <p className='text-2xl font-bold '>Pasta</p>
                <p>15 Recipes</p>
            </div>
        </div>
    </div>
</div>
  )
}

export default Carousel