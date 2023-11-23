import { PropTypes } from "prop-types";
import wordsJSON from '../words.json'

function Word ({ word, isListView }) {
    const { sounds, meaning, file } = word; 
    const baseSounds = wordsJSON.baseSounds;

    const getSoundTip = (sound) => {
        const soundData = baseSounds.find((item) => item.sound === sound);
        return soundData ? soundData.tip : '';
    };
      
    return (
      <div className={isListView ? 'word-list' : 'word-card'}>
        <audio controls>
          <source src={file} type="audio/mpeg" />
        </audio>
        <h3>Word: {sounds.map((sound, index) => <span key={index} title={getSoundTip(sound)}>{sound}</span>)}</h3>
        <p>Meaning: {meaning}</p>
      </div>
    );
}

// propTypes based on eslint recommendation and GPT-Assisted code
Word.propTypes = {
    word: PropTypes.shape({
      sounds: PropTypes.arrayOf(
        PropTypes.shape({
          sound: PropTypes.string.isRequired,
          file: PropTypes.string.isRequired,
        })
      ).isRequired,
      meaning: PropTypes.string.isRequired,
      file: PropTypes.string.isRequired,
    }).isRequired,
    isListView: PropTypes.bool.isRequired,
  };

export default Word;
