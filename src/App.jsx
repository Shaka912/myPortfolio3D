import { BrowserRouter } from "react-router-dom"
import "font-awesome/css/font-awesome.min.css"
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Stack,
  Works,
  StarsCanvas
} from "./components"

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Stack />
        <Works />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
