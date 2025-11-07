import { Capabilities } from "./components/capabilities/Capabilities"
import { Contact } from "./components/Contact"
import { Hero } from "./components/hero/Hero"
import { Projects } from "./components/Projects"


function App() {
  return (
    <main>
      <Hero/>
      <Capabilities/>
      <Projects/>
      <Contact/>
    </main>
  )
}

export default App
