import wordlist from '../words.json'
import { useEffect, useState } from 'react';
import './Flashcard.css'
function Flashcard () {
    const words = wordlist.words
    const [randomWord, setRandomWord] = useState(0);
    const [oldRandom, setOldRandom] = useState();
    const [wrongWords, setWrongWords] = useState([]);
    const [userCorrect, setUserCorrect] = useState(null)
    const [userSelections, setUserSelections] = useState({});

    useEffect(() => {
        newRandomWord();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Generates new randoms, repeats the loop if previous number is generated
    const newRandomWord = () =>{
        let newRandom;
        setUserCorrect(null);
        setUserSelections({});
        do {
            newRandom = Math.floor(Math.random() * words.length);
        } while (newRandom === oldRandom);
        setRandomWord(newRandom);
        setOldRandom(newRandom);

        // Generate 3 random indices for incorrect meanings (Generates the 3 other flashcard choices)
        // GPT-Assisted
        const incorrectIndices = [];
        while (incorrectIndices.length < 3) {
            const index = Math.floor(Math.random() * words.length);
            if (index !== newRandom && !incorrectIndices.includes(index)) {
                incorrectIndices.push(index);
            }
        }

        const correctWord = words[newRandom].meaning;
        const incorrectWords = incorrectIndices.map(index => words[index].meaning);
        
        // adds the correct word and incorrect words together, then shuffles so the location on the page is randomized 
        const allWords = [correctWord, ...incorrectWords];
        shuffleWords(allWords);
        setWrongWords(allWords);
    }
    // Array "shuffle" function from:
    // https://www.freecodecamp.org/news/how-to-shuffle-an-array-of-items-using-javascript-or-typescript/
    const shuffleWords = (arr) =>{
        return arr.sort(() => Math.random() - 0.5);
    }

    const answerHandler = (meaning, index) => {
        const isCorrect = meaning === words[randomWord].meaning;
        if(isCorrect){
            setUserCorrect(true);
            setTimeout(() => {
                newRandomWord();
            }, 2000);
        }else{setUserCorrect(false);}
        setUserSelections((prevSelections) => ({
          ...prevSelections,
          [index]: isCorrect ? 'flashcard-correct' : 'flashcard-incorrect',
        }));
      }
    return(
        <>
            <h2 className='flashcard-intro'>Flashcards</h2>
            <p>Click on the correct meaning of the word displayed</p>
            <button onClick={newRandomWord}>New Random</button>
            <p>Word: {words[randomWord].word}</p>
            <div className="flashcard-meanings">
                {wrongWords.map((meaning, index) => (
                    <button
                        key={index}
                        onClick={() => answerHandler(meaning, index)}
                        className={`flashcard-response ${userSelections[index] || ''} ${userCorrect ? 'flashcard-unclickable': ''}`}
                        >{meaning}</button>
                ))}
            </div>
            {userCorrect === true && <p>Correct!</p>}
            {userCorrect === false && <p>Incorrect. Try again.</p>}
        </>
    );
}
export default Flashcard