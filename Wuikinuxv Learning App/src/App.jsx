import wordlist from './assets/words.json'
import './App.css'

function App() {
  const words = wordlist.words

  return (
    <>
      <header>
        <nav>
          <img src="Thumbnail_Uikala_LOGO.png" alt="Wuikinuxv nation logo" />
          <h1>Wuikinuxv Language App</h1>
        </nav>
      </header>
      <div style={{ marginTop: '3em' }}>
        <h2>Basics</h2>
        <p>First things first, you&apos;ll want to be familiar with some symbols that may appear on or around words, you may have an easier time if you listen carefully to the word audio</p>
        <p>The symbol a̓ or ’ appears on top of a letter or beside a letter. When it is on top of a letter it indicates a glottal catch or stoppage of breath as you pronounce the sound. If it appears beside a letter it indicates a short pause in the word.</p>
        <p>If the symbol &nbsp; ̌  appears on top of a letter it&apos;s called a back sign and indicates that the sound is pronounced further back in throat.</p>
        <p>If the letter v appears behind a letter, it indicates that you pronounce the previous symbol with a rounded mouth so for example, gv would sound like a g, but with a rounded mouth. <br/>If the stress sign appears over a vowel, as in &quot;à&quot; it means it&apos;s given more emphasis over other vowels, it&apos;s usually the first vowel of a word.</p>
      </div>
      <div className="wordarea">
        {words.map((word, index) => (
          <div key={index} className='word'>
            <audio controls>
              <source src={word.file} type="audio/mpeg" />
            </audio>
            <h3>Word: {word.word}</h3>
            <p>Meaning: {word.meaning}</p>
          </div>
        ))}
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
