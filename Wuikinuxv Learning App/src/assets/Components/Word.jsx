import { PropTypes } from "prop-types";
import wordsJSON from '../words.json'
import './Word.css'

function Word ({ word, isListView }) {
    const { sounds, meaning, file } = word; 
    const baseSounds = wordsJSON.baseSounds;

    const getSoundTip = (sound) => {
        const soundData = baseSounds.find(
            //check for certain special characters, ensuring they display properly
            (item) => item.sound === sound || item.sound === sound.replace('̀', '')
        );
        return soundData ? soundData.tip : '';
    };
      
    return (
      <div className={isListView ? 'word-list' : 'word-card'}>
        <audio controls>
          <source src={file} type="audio/mpeg" />
        </audio>
        <h3>Word: {sounds.map((sound, index) => <span key={index} className="word-part" title={getSoundTip(sound)}>{sound}</span>)}</h3>
        <p>Meaning: {meaning}</p>
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
