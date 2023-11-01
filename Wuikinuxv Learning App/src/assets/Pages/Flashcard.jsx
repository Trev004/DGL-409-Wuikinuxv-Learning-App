import wordlist from '../words.json'
import { useState } from 'react';
import './Flashcard.css'
function Flashcard () {
    const words = wordlist.words
    const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * words.length));
    const [oldRandom, setOldRandom] = useState();
    const [wrongWords, setWrongWords] = useState([]);
    const [userAnswer, setUserAnswer] = useState(null)

    // Generates new randoms, repeats the loop if previous number is generated
    const newRandomNumber = () =>{
        let newRandom;
        setUserAnswer(null);
        do {
            newRandom = Math.floor(Math.random() * words.length);
        } while (newRandom === oldRandom);
        setRandomNumber(newRandom);
        setOldRandom(newRandom);

        // Generate 3 random indices for incorrect meanings
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

        const allWords = [correctWord, ...incorrectWords];
        shuffleWords(allWords);
        setWrongWords(allWords);
    }
    // Array "shuffle" function from:
    // https://www.freecodecamp.org/news/how-to-shuffle-an-array-of-items-using-javascript-or-typescript/
    const shuffleWords = (arr) =>{
        return arr.sort(() => Math.random() - 0.5);
    }

    const answerHandler = (meaning) => {
        if (meaning === words[randomNumber].meaning) {
            setUserAnswer(true);
        } else {
            setUserAnswer(false);
        }
    }
    return(
        <>
            <h2 className='flashcard-intro'>Flashcards</h2>
            <p>Click on the correct meaning of the word displayed</p>
            <button onClick={newRandomNumber}>New Random</button>
            <p>Word: {words[randomNumber].word}</p>
            <div className="flashcard-meanings">
                {wrongWords.map((meaning, index) => (
                    <button
                        key={index} onClick={() => answerHandler(meaning)} className={userAnswer !== null ? (meaning === words[randomNumber].meaning ? 'flashcard-correct' : 'flashcard-incorrect') : ''}
                        >{meaning}</button>
                ))}
            </div>
            {userAnswer === true && <p>Correct!</p>}
            {userAnswer === false && <p>Incorrect. Try again.</p>}
        </>
    );
}
export default Flashcard