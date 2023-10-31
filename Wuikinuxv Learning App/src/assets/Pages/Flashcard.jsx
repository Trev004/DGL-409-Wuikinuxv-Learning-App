import wordlist from '../words.json'
import { useState } from 'react';
import './Flashcard.css'
function Flashcard () {
    const words = wordlist.words
    const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * words.length));
    const [oldRandom, setOldRandom] = useState();

    // Generates new randoms, repeats the loop if previous number is generated
    const newRandomNumber = () =>{
        let newRandom;
        do {
            newRandom = Math.floor(Math.random() * words.length);
        } while (newRandom == oldRandom);
        setRandomNumber(newRandom);
        setOldRandom(randomNumber);
    }
    return(
        <>
            <h2 className='flashcard-intro'>Flashcards</h2>
            <p>Click on the correct meaning of the word displayed</p>
            <button onClick={newRandomNumber}>New Random</button>
            <p>Word: {words[randomNumber].word} Meaning: {words[randomNumber].meaning}</p>
        </>
    );
}
export default Flashcard