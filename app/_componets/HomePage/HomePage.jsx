import ContactSection from "./contact/Contact";
import HeroSection from "./navbar/NavBar";
import ProductsFeatures from "./ProductDetails/ProductDetails";
import Sample from "./sample/Sample";
import { motion } from "framer-motion";
import Services from "./services/Services";
import Navbar from "./navbar2/Navbar2";
import Navbar2 from "./navbar2/Navbar2";
import Navbar3 from "./navbar2/navbar3/NavBar3";
import Hero from "./herosection/Hero";
import OurClients from "./ourclients/page";
import OurPeopleSection from "./ourteam/OurTeam";
import NewsSection from "./homeblog/HomeBlog";
import ClientsPartners from "./tech&clientpartners/ClientsPartners";
import Footer from "../footer/Footer";

export default function HomePage() {
  return (
    // <div>
    //   <HeroSection />
    //   <ProductsFeatures />
    //   <ContactSection />
    //   <Services />
    //   <Sample />
    //   {/* <Navbar2/> */}
    //   <Navbar3 />
    //   <Hero/>
    //    <Sample />
   
    // </div>
    <div >

    <div className="bg-gradient-to-r from-red-800 via-zinc-300 to-slate-900">
      
      <Hero />
    </div>
    <OurClients/>
    <OurPeopleSection/>
    <NewsSection/>
    <ClientsPartners/>
    <Footer/>

    </div>

  );
}
