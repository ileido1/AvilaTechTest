import './App.css'
import { Cta } from './Components/Cta'
import { Features } from './Components/Features'
import { FreeTrial } from './Components/FreeTrial'
import  Hero  from './Components/Hero'
import  Integrations  from './Components/Integrations'
import Navbar from './Components/Navbar'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Integrations/>
      <Cta/>
      <Features></Features>
      <FreeTrial></FreeTrial>
    </>
  )
}

export default App
