import { CAPABILITIES } from "./capabilities"


function App() {
  return (
    <main>
      <section>
        <h1>Carol Pedersen - Portfolio</h1>
        <p>(developer · product thinker · educator)</p>
      </section>

    <section>
      <p>Connecting development, data, product, and writing</p>
    </section>

      <section>
        <h2>Capabilities</h2>
      <ul>
        {CAPABILITIES.map(ability => (
          <li key={ability.id}>
            <strong>{ability.title}</strong> - {ability.blurb}
          </li>
        ))}
      </ul>
      </section>
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
