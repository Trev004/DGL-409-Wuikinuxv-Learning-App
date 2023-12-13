import './Intro.css';
import { NavLink } from 'react-router-dom';

function Intro() {
  return (
    <>
    <div className="hero-container">
      <img className="hero-image" src="FirstVoices_Wuikinuxv.jpg" alt="Banner image of Wuikinuxv"/>
      <div className="text-container">
        <p>Welcome to the Wuikinuxv Language Learning App!</p>
        <p>These pages were created to be a simple place to learn the very basics of ’Wùik̓ala, the language of the Wuikinuxv people.</p>
        <p>The Wuikinuxv people, if you&apos;re unfamiliar, are located north of Vancouver Island, in an area called Rivers Inlet.</p>
        <p>The data on this app, meaning the words, and audio files used, were gathered from <a href="https://www.firstvoices.com/wuikala/">FirstVoices</a> so if you&apos;re looking for more words to learn, be sure to check them out as well.</p>
        <p>To begin, click on either the Basics button below, or on any of the links in the navbar above.</p>
        <li><NavLink to="/basics">Basics</NavLink></li>
      </div>
    </div>
    </>
  );
}

export default Intro;
