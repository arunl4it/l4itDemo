import ContactSection from "./contact/Contact";
import HeroSection from "./navbar/NavBar";
import ProductsFeatures from "./ProductDetails/ProductDetails";
import Sample from "./sample/Sample";
import { motion } from "framer-motion";
import Services from "./services/Services";

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <ProductsFeatures />
      <ContactSection />
       <Services/>
      <Sample />
    </div>
  );
}
