import { useEffect, useState } from 'react'
import wordlist from './assets/words.json'
import './App.css'
import Header from './assets/Components/Header.jsx'

function App() {
  const words = wordlist.words

  const [isListView, setIsListView] = useState(true)

  const viewChanger = () => {
    setIsListView(!isListView)
  }

  const currentContainerView =  `${isListView ? 'wordarea-list' : 'wordarea-cards'}`;
  const currentWordView = `${isListView ? 'word-list' : 'word-card'}`;

  const buttonHandler = () => {
    viewChanger();
  }
  // Modified from code created with the help of ChatGPT
  useEffect(() => {
    const button = document.getElementById('viewToggler');
    button.addEventListener('click', buttonHandler);
    return () => {
      button.removeEventListener('click', buttonHandler);
    };
  },);

  return (
    <>
      <Header />
      <div style={{ marginTop: '3em' }}>
        <div className="intro">
          <img src="Thumbnail_Uikala_LOGO.png" alt="Wuikinuxv nation logo"/>
          <h2>Basics</h2>
        </div>
        <p>First things first, you&apos;ll want to be familiar with some symbols that may appear on or around words, you may have an easier time if you listen carefully to the word audio</p>
        <p>The symbol a̓ or ’ appears on top of a letter or beside a letter. When it is on top of a letter it indicates a glottal catch or stoppage of breath as you pronounce the sound. If it appears beside a letter it indicates a short pause in the word.</p>
        <p>If the symbol &nbsp; ̌  appears on top of a letter it&apos;s called a back sign and indicates that the sound is pronounced further back in throat.</p>
        <p>If the letter v appears behind a letter, it indicates that you pronounce the previous symbol with a rounded mouth so for example, gv would sound like a g, but with a rounded mouth. <br/>If the stress sign appears over a vowel, as in &quot;à&quot; it means it&apos;s given more emphasis over other vowels, it&apos;s usually the first vowel of a word.</p>
      </div>
      <button id='viewToggler'>{isListView ? 'Toggle to Card View' : 'Toggle to List View'}</button>
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
