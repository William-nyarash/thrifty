import CTA from "./components/CallToAction";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/hero";
import Offer from "./components/Offer";
import ValueProp from "./components/ValueProp";

const App =() => {
   return (
    <>
      <Header />
      <Hero />
      <ValueProp/>
      <CTA />
      <Offer />
      <Footer />
    </>
   )
}
export default App;