import { PropTypes } from "prop-types";
import wordsJSON from '../words.json'
import './Word.css'
import { useEffect, useState } from "react";

function Word ({ word, isListView }) {
    const { sounds, meaning, file } = word; 
    const baseSounds = wordsJSON.baseSounds;
    const [activeSpan, setActiveSpan] = useState(null);

    const getSoundTip = (sound) => {
        const soundData = baseSounds.find(
            //check for certain special characters, ensuring they display properly
            (item) => item.sound === sound || item.sound === sound.replace('̀', '')
        );
        return soundData ? soundData.tip : '';
    };

    const handleSpanClick = (index) => {
      setActiveSpan(index);
    };

    // GPT-Assisted, This checks if the user clicked the span, displaying the title if they did
    // while removing it if they click anywhere else on the page
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (activeSpan !== null && !event.target.closest('.word-part-active')) {
          setActiveSpan(null);
        }
      };
        document.addEventListener('click', handleClickOutside);
        return () => {
        document.removeEventListener('click', handleClickOutside);
      };
    }, [activeSpan]);
      
    return (
      <div className={isListView ? 'word-list' : 'word-card'}>
        <h3>Word: {sounds.map((sound, index) => <span key={index} className={`word-part${index === activeSpan ? ' word-part-active' : ''}`} title={getSoundTip(sound)} onClick={() => handleSpanClick(index)}>{sound}</span>)}</h3>
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
  };

export default Word;
