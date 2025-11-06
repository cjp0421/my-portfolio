import { Capabilities } from "./components/Capabilities"
import { Hero } from "./components/Hero"


function App() {
  return (
    <main>
      <Hero/>
      <Capabilities/>
      <section>
        <h2>Projects</h2>
        <ul>
          <li>Project Name</li>
              <ul>
               <li>Project Summary</li>
               <li>stack badges</li>
               <li><a href="#" target="_blank">github/demo link</a></li>
              </ul>
        </ul>
      </section>
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
