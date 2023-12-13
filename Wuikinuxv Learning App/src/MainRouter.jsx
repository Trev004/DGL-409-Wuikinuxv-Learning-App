import App from './assets/Pages/App'
import Flashcard from './assets/Pages/Flashcard'
import Basics from './assets/Pages/Basics'
import Intro from './assets/Pages/Intro'
import './MainRouter.css'
import { NavLink, Outlet, Route, Routes } from 'react-router-dom'
import { useState } from 'react'
function MainRouter() {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
    <>
      <header>
          <nav>
            <h1>Wuikinuxv Language App</h1>
            <button className={`menu-btn ${menuOpen ? 'menu-btn-active' : ''}`} onClick={toggleMenu}>&#9776;</button>
            <ul className={menuOpen ? 'active' : ''}>
              <li onClick={() => setMenuOpen(false)} className='menu-link'><NavLink to="/basics">Basics</NavLink></li>
              <li onClick={() => setMenuOpen(false)} className='menu-link'><NavLink to="/wordlist">Word List</NavLink></li>
              <li onClick={() => setMenuOpen(false)} className='menu-link'><NavLink to={"/flashcards"}>Flashcards</NavLink></li>
            </ul>
          </nav>
      </header>
      <div id="content">
        <Outlet />
      </div>
      <Routes>
        <Route path='/' element={<Intro />}/>
        <Route path='/basics' element={<Basics />}/>
        <Route path='/wordlist' element={ <App /> }/>
        <Route path='/flashcards' element={ <Flashcard /> }/>
      </Routes>
    </>
    )
}

export default MainRouter