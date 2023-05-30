import React from 'react'
import aboutFirst from '../../assets/about1.jpg'
import aboutSecond from '../../assets/about2.jpg'

function About() {
  return (
    <div className='h-full  flex items-center text-center '>
        <div className='w-96 hidden md:block'>
            <img className=' w-full' src={aboutFirst} alt="" />
        </div>
        <div className='p-6  w-full md:w-96  '>
            <p className='text-orange-500 font-bold'>PATIO BAR'S STORY</p>
            <h1 className=' md:text-7xl text-5xl font-semibold py-5 '>About us</h1>
            <p className=''>A relaxing and pleasant atmosphere, good jazz, dinner and cocktails. The PatioTime Bar opens in the centre of Florence. The only bar inspired by the 1960s, it will give you a cocktail experience that you’ll have a hard time forgetting.</p>
            
        </div>
        <div className='w-96 hidden md:block' >
            <img className=' w-full' src={aboutSecond} alt="" />
        </div>
    </div>
  )
}

export default About