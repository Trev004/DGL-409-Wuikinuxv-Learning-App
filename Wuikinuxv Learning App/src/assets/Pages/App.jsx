import { useEffect, useState } from 'react'
import Word from '../Components/Word'
import wordlist from '../words.json'
import './App.css'

function App() {
  const words = wordlist.words;
  const userListPref = localStorage.getItem('prefersListView');//checks for the localStorage preference
  const [isListView, setIsListView] = useState(userListPref === 'true' || userListPref === null);
  const [activeSpan, setActiveSpan] = useState(null);
  const [currentWordIndex, setCurrentWordIndex] = useState(null);
  const [displayingTip, setDisplayingTip] = useState(false);

  const viewChanger = () => {
    setIsListView(!isListView);
  }
  //updates the localStorage preference
  useEffect(() => {
    if (isListView){
      localStorage.setItem('prefersListView', 'true');
    }else{
      localStorage.setItem('prefersListView', 'false');
    }
  }, [isListView]);
  
  // This is what handles the user clicking on a span for tooltip
  // GPT-Assisted
  const handleSpanClick = (wordIndex, spanIndex) => {
    // This is what checks to make sure the span the user clicked on is in the same Word 
    if (currentWordIndex !== wordIndex) {
      setActiveSpan(null);
      setCurrentWordIndex(wordIndex);
    }
    setActiveSpan(spanIndex);
    setDisplayingTip(true);
  };

  const resetActiveSpan = () => {
    setActiveSpan(null);
    setCurrentWordIndex(null);
    setDisplayingTip(false);
  };

  const currentContainerView =  `${isListView ? 'wordarea-list' : 'wordarea-card'}`;
  return (
    <>
      <div id="app">
        <div style={{ marginTop: '3em' }}>
          <div className="intro">
            <img src="Thumbnail_Uikala_LOGO.png" alt="Wuikinuxv nation logo"/>
            <h2>Word List</h2>
          </div>
          <p className='intro-text'>Below, you can see a list of ’Uik̓ala words, paired with their english translations and an audio file for you to listen to.</p>
          <p className='intro-text'>Hover over &#40;or tap on mobile&#41; parts of the word to see a tip for pronunciation</p>
        </div>
        <button onClick={viewChanger}>{isListView ? 'Toggle to Card View' : 'Toggle to List View'}</button>
        <div className={currentContainerView}>
        {words.map((word, index) => (
            <Word key={index} word={word} isListView={isListView} displayingTip={displayingTip} activeSpan={currentWordIndex === index ? activeSpan : null} onSpanClick={(spanIndex) => handleSpanClick(index, spanIndex)} resetActiveSpan={resetActiveSpan}/>
          ))}
        </div>
      </div>
    </>
  )
}

export default App
