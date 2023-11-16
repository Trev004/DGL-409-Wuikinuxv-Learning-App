import './Basics.css'
function Basics () {
    return(
        <>
            <div id="basics">
            <div className="basics-intro">
                <img src="Thumbnail_Uikala_LOGO.png" alt="Wuikinuxv nation logo"/>
                <h2>Basics</h2>
            </div>
            <div className="word-basics">
                <h2>First things first</h2>
                <p>You&apos;ll want to be familiar with some symbols that may appear on or around words, you may have an easier time if you listen carefully to the audio.</p>
                <h2>Basic Concepts</h2>
                <div className="word-section">
                    <h3>a̓ or ’</h3>
                    <p>The symbol a̓ or ’ appears on top of a letter or beside a letter. When it is on top of a letter it indicates a glottal catch or stoppage of breath as you pronounce the sound. If it appears beside a letter it indicates a short pause in the word.</p>
                </div>
                <div className="word-section">
                    <h3 className='unique'> ̌  </h3>
                    <p>If the symbol &nbsp; ̌  appears on top of a letter it&apos;s called a back sign and indicates that the sound is pronounced further back in throat.</p>
                </div>
                <div className="word-section">
                    <h3>v</h3>
                    <p>If the letter v appears behind a letter, it indicates that you pronounce the previous symbol with a rounded mouth. <br /> So for example, gv would sound like a g, but with a rounded mouth.</p>
                </div>
                <div className="word-section">
                    <h3>Stress Sign &quot;à&quot;</h3>
                    <p>If the stress sign appears over a vowel, as in &quot;à&quot; it means it&apos;s given more emphasis over other vowels, it&apos;s usually the first vowel of a word.</p>
                </div>
            </div>
            </div>
        </>
    );
}
export default Basics