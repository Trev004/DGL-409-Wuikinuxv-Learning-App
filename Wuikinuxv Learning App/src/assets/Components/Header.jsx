import App from '../Pages/App'
import './Header.css'
import { Route, Routes } from 'react-router-dom'
function Header() {
    return (
    <>
      <header>
          <nav>
            <h1>Wuikinuxv Language App</h1>
          </nav>
      </header>
      <Routes>
        <Route path='/' element={ <App /> }/>
      </Routes>
    </>
    )
}

export default Header