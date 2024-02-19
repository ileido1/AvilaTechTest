import './App.css'
import { Cta } from './Components/Cta'
import { Features } from './Components/Features'
import { Footer } from './Components/Footer'
import { FreeTrial } from './Components/FreeTrial'
import  Hero  from './Components/Hero'
import  Integrations  from './Components/Integrations'
import Navbar from './Components/Navbar'
import { Questions } from './Components/Questions'
import { Testimonial } from './Components/Testimonial'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Integrations/>
      <Cta/>
      <Features></Features>
      <FreeTrial></FreeTrial>
      <Questions />
      <Testimonial />
      <Footer />
    </>
  )
}

export default App
