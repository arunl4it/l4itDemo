import Footer from "../_componets/footer/Footer";
import Hero from "../_componets/HomePage/herosection/Hero";
import NewsSection from "../_componets/HomePage/homeblog/HomeBlog";
import Navbar3 from "../_componets/HomePage/navbar2/navbar3/NavBar3";
import OurClients from "../_componets/HomePage/ourclients/page";
import OurPeopleSection from "../_componets/HomePage/ourteam/OurTeam";
import ClientsPartners from "../_componets/HomePage/tech&clientpartners/ClientsPartners";
 
export default function SecondPage() {
  return (
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
