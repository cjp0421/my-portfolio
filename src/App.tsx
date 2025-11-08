import { Capabilities } from "./components/capabilities/Capabilities"
import { Contact } from "./components/contact/Contact"
import { Hero } from "./components/hero/Hero"
import NavBar from "./components/NavBar"
import { Projects } from "./components/projects/Projects"




function App() {
  return (
    <main>
      <NavBar/>
      <Hero/>
      <Capabilities/>
      <Projects/>
      <Contact/>
    </main>
  )
}

export default App
