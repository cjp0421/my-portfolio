import { Capabilities } from "./components/Capabilities"
import { Hero } from "./components/Hero"
import { Projects } from "./components/Projects"


function App() {
  return (
    <main>
      <Hero/>
      <Capabilities/>
      <Projects/>
      <section>
        <h2>Contact Me</h2>
        <p>Let's talk about thoughtful systems, learning, or product design.</p>
        <ul>
          <li>
            <a href="" target="_blank">GitHub</a>
          </li>
          <li>
            <a href="" target="_blank">LinkedIn</a>
          </li>
          <li>
            <a href="" target="_blank">Email</a>
          </li>
        </ul>
      </section>
    </main>
  )
}

export default App
