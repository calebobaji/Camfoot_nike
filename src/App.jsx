import Nav from "./components/Nav.jsx";
import Hero from "./Sections/Hero.jsx
import Featured from "./Sections/Featured.jsx";
import Limited from "./Sections/Limited.jsx";
import Services from "./Sections/Services.jsx";
import SpecialOffer from "./Sections/SpecialOffer.jsx";
import Reviews from "./Sections/Reviews.jsx";
// import Footer from "./components/Footer.jsx";
const App = () => {
  return (
    <>
    <Nav />
    <Hero />
    <Featured/>
    <Limited/>
    <Services/>
    <SpecialOffer/>
    <Reviews/>
    </>
  )
}

export default App