import { useState } from 'react'
import wordlist from '../words.json'
import './App.css'

function App() {
  const words = wordlist.words
  const [isListView, setIsListView] = useState(true)

  const viewChanger = () => {
    setIsListView(!isListView)
  }

  const currentContainerView =  `${isListView ? 'wordarea-list' : 'wordarea-card'}`;
  const currentWordView = `${isListView ? 'word-list' : 'word-card'}`;

  return (
    <>
      <div style={{ marginTop: '3em' }}>
        <div className="intro">
          <img src="Thumbnail_Uikala_LOGO.png" alt="Wuikinuxv nation logo"/>
          <h2>Word List</h2>
        </div>
        <p>Below, you can see a list of ’Uik̓ala words, paired with their english translations and an audio file for you to listen to.</p>
      </div>
      <button onClick={viewChanger}>{isListView ? 'Toggle to Card View' : 'Toggle to List View'}</button>
      <div className={currentContainerView}>
        {words.map((word, index) => (
          <div key={index} className={currentWordView}>
            <audio controls>
              <source src={word.file} type="audio/mpeg" />
            </audio>
            <h3>Word: {word.word}</h3>
            <p>Meaning: {word.meaning}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default App
