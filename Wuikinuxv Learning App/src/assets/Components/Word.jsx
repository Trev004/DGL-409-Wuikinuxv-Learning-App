import { PropTypes } from "prop-types";

function Word ({ word, isListView }) {
    const { sounds, meaning, file } = word; 
    
    return (
      <div className={isListView ? 'word-list' : 'word-card'}>
        <audio controls>
          <source src={file} type="audio/mpeg" />
        </audio>
        <h3>Word: {sounds.map((sound, index) => <span key={index}>{sound}</span>)}</h3>
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
