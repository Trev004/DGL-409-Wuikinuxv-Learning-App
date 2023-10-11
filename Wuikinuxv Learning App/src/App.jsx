import { useState } from 'react'
import ding from './assets/audio/Ding.mp3'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <nav>
          <h1>Wuikinuxv Language App</h1>
        </nav>
      </header>
      <div style={{ marginTop: '3em' }}>
        <h2>Basics</h2>
        <p>First things first, you&apos;ll want to be familiar with some symbols that may appear on or around words, you may have an easier time if you listen carefully to the word audio</p>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        <audio src={ding} controls></audio>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
