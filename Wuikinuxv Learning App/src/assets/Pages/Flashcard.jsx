import wordlist from '../words.json'
import { useState } from 'react';
function Flashcard () {
    const words = wordlist.words
    const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * words.length));
    const newRandomNumber = () =>{
        setRandomNumber(Math.floor(Math.random() * words.length));
    }
    return(
        <>
            <h1>Test Content for now!</h1>
            <p>n is {randomNumber}</p>
            <button onClick={newRandomNumber}>New Random</button>
            <p>Word: {words[randomNumber].word} Meaning: {words[randomNumber].meaning}</p>
        </>
    );
}
export default Flashcard