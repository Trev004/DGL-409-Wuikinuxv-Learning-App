import wordlist from '../words.json'

function Flashcard () {
    console.log(wordlist)
    return(
        <>
            <h1>Test Content for now!</h1>
            <p>{wordlist.words[1].word}</p>
        </>
    );
}
export default Flashcard