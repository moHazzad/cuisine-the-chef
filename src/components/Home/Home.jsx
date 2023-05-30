import React from "react";
// import simple from '../../assets/Banner.mp4'
// import simple from '../../assets/banner image.jpg'
import { FaClock } from "react-icons/fa";
import "./Home.css";
import About from "./About";
import Cards from "./Cards";
import Footer from "../Footer/Footer";
import Hero from "./Hero";
import Carousel from "../Carousel/Carousel";

function Home() {
  return (
    <>
      <section>
        <Hero />
      </section>
      {/* about section */}
      <section className="py-10 w-[90%] mx-auto ">

      <About />
      </section>
      {/* cards sections */}
      <section  className=" py-5 w-[90%] mx-auto ">
        <h1 className="md:text-7xl text-4xl font-semibold text-center py-2">Meet our Best Chefs</h1>
        <p></p>
      <Cards />
      </section>
      <section>
        <Carousel />
      </section>
      <section >
        <Footer />
      </section>
    </>
  );
}

export default Home;
