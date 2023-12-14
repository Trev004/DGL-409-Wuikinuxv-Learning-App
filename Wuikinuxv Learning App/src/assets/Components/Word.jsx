import { PropTypes } from "prop-types";
import wordsJSON from '../words.json'
import './Word.css'
import { useEffect } from "react";

function Word({ word, isListView, displayingTip, activeSpan, onSpanClick, resetActiveSpan }) {
    const { sounds, meaning, file } = word; 
    const baseSounds = wordsJSON.baseSounds;

    const getSoundTip = (sound) => {
        const soundData = baseSounds.find(
            //check for certain special characters, ensuring they display properly
            (item) => item.sound === sound || item.sound === sound.replace('̀', '')
        );
        return soundData ? soundData.tip : '';
    };

    const handleSpanClick = (index) => {
      onSpanClick(index);
    };

    // GPT-Assisted, This checks if the user clicked the span, displaying the title if they did
    // while removing it if they click anywhere else on the page
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (activeSpan !== null && !event.target.closest('.word-part-active')) {
          resetActiveSpan();
        }
      };
        document.addEventListener('click', handleClickOutside);
        return () => {
        document.removeEventListener('click', handleClickOutside);
      };
    }, [activeSpan, resetActiveSpan]);
      
    return (
      <div className={isListView ? 'word-list' : 'word-card'}>
        <h3>Word: {sounds.map((sound, index) => <span key={index} className={`word-part${index === activeSpan && displayingTip ? ' word-part-active' : ''}`} title={getSoundTip(sound)} onClick={() => handleSpanClick(index)}>{sound}</span>)}</h3>
        <p><i>Meaning:</i> {meaning}</p>
        <audio controls>
          <source src={file} type="audio/mpeg" />
        </audio>
      </div>
    );
}

// propTypes based on eslint recommendation and GPT-Assisted code
Word.propTypes = {
    word: PropTypes.shape({
        sounds: PropTypes.arrayOf(PropTypes.string).isRequired,
        meaning: PropTypes.string.isRequired,
        file: PropTypes.string.isRequired,
    }).isRequired,
    isListView: PropTypes.bool.isRequired,
    displayingTip: PropTypes.bool,
    activeSpan: PropTypes.number,
    onSpanClick: PropTypes.func,
    resetActiveSpan: PropTypes.func
  };

export default Word;
