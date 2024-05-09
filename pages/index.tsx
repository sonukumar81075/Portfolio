import { useEffect, useState } from "react";
import About from "@/components/About";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import NavMobile from "@/components/NavMobile";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Project from "@/components/Project";
import Price from "@/components/Price";
import Reviews from "@/components/Reviews";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const HomePage = () => {
  const [shownav, setShownav] = useState(false);
  const shownavhandler = () => setShownav(true);
  const closenavhandler = () => setShownav(false);

  // animation setup;
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease",
      once: true,
      anchorPlacement: "top-bottom",
    })
  }, []);

  return (
    <>
      <div className="overflow-hidden ">
        <NavMobile shownav={shownav} closenav={closenavhandler} />
        <Nav opennav={shownavhandler} />
        <Hero />
        <About />
        <Services />
        <Skills />
        <Project />
        <Price />
        <Reviews />
        <Blog />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
