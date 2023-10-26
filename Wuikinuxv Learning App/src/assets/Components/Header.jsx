import App from '../Pages/App'
import Flashcard from '../Pages/Flashcard'
import './Header.css'
import { Link, Outlet, Route, Routes } from 'react-router-dom'
function Header() {
    return (
    <>
      <header>
          <nav>
            <h1>Wuikinuxv Language App</h1>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to={"/flashcards"}>Flashcards</Link></li>
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

export default Header