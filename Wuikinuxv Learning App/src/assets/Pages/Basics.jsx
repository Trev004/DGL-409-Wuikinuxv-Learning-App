import './Basics.css'
import wordsJSON from '../words.json'
function Basics () {
    const baseSounds = (wordsJSON.baseSounds).filter((soundData) => soundData.file !== undefined);

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
                <div className="word-soundlist">
                    <h2>Sound List</h2>
                    <p>Below you&apos;ll find a list of sounds in the language along with tips for pronouncing them.
                        <br /> If an example is available, you&apos;ll also see an example word along with audio.
                    </p>
                    {baseSounds.map((soundData, index) => (
                      <div className="word-section-sound" key={index}>
                        <div className="word-section-sound-intro">
                          <h3>{soundData.sound}</h3>
                          <p>{soundData.tip}</p>
                          <audio controls src={soundData.file}></audio>
                        </div>
                        {soundData.example && soundData.exampleFile && (
                            <div className="word-section-sound-example">
                                <h3><i>Example:</i> {soundData.example}</h3>
                                <audio controls src={soundData.exampleFile}></audio>
                            </div>
                        )}
                      </div>
                    ))}
                </div>
            </div>
        </>
    );
}
export default Basics