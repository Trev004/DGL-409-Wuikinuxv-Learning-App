import App from './assets/Pages/App'
import Flashcard from './assets/Pages/Flashcard'
import './MainRouter.css'
import { NavLink, Outlet, Route, Routes } from 'react-router-dom'
function MainRouter() {
    return (
    <>
      <header>
          <nav>
            <h1>Wuikinuxv Language App</h1>
            <ul>
              <li><NavLink to="/">Wordlist</NavLink></li>
              <li><NavLink to={"/flashcards"}>Flashcards</NavLink></li>
            </ul>
          </nav>
      </header>
      <div id="content">
        <Outlet />
      </div>
      <Routes>
        <Route path='/' element={ <App /> }/>
        <Route path='/flashcards' element={ <Flashcard /> }/>
      </Routes>
    </>
    )
}

export default MainRouter