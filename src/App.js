import { useState } from 'react'
import data from './data'

const App = () => {
  const [count, setCount] = useState(0)
  const [paragraphs, setParagraphs] = useState([])

  const formSubmit = (event) => {
    event.preventDefault()
    let amount = parseInt(count)
    setParagraphs(data.slice(0, amount))
  }

  return <article className='form-section'>
    <h1>Lorem ipsum generator</h1>
    <form onSubmit={formSubmit}>
      <input
        type='number'
        placeholder='Počet odstavců'
        onChange={(event) => setCount(event.target.value)}
        name='count'
        min={0}
        max={50}
      />
      <input
        type='submit'
        value='Vygenerovat'
      />
    </form>
    <section>
      {paragraphs.map((oneParagraph, index) => {
        return <p key={index}>{oneParagraph}</p>
      })}
    </section>
  </article>
}

export default App