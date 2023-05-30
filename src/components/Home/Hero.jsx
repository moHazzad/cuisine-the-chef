import React from 'react'
import { FaClock } from 'react-icons/fa'
import bgVideo from '../../assets/Banner.mp4'
import bgImage from '../../assets/bgImageBanner.jpg'

function Hero() {
  return (
    <div className={`hero h-[calc(100% - 50px)]`} style={{backgroundImage:`url(${bgImage})`}}>
        {/* <img className='block md:hidden' src={bgImage} alt="" /> */}
    <video className='hidden md:block'
      src={bgVideo}
      autoPlay
      loop
      muted
      style={{ objectFit: "cover", width: "100%", height: "100%" }}
    ></video>
    <div className="hero-overlay bg-opacity-60"></div>
    <div className="hero-content text-center text-neutral-content">
      <div className="max-w-md">
        <h1 className="mb-5 md:text-7xl text-5xl">
          <span className="welIta">Welcome</span> to
        </h1>
        <p className="mb-5 md:text-7xl text-5xl font-semibold">
          <span className="text-orange-500 headline p-3">PatioTime</span>
          <span>Bar</span>
        </p>
        <p className="mb-5 text-2xl font-bold">DRINK . MUSIC . PLAY</p>
        <p className="flex items-center gap-10 justify-center mt-48">
          <span>
            <FaClock />
          </span>{" "}
          Opening Hours: 18:00 - 02:00
        </p>
      </div>
    </div>
  </div>
  )
}

export default Hero