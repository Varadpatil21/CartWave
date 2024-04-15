import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar'
import './components/Navbar.css'
import { Shop } from './pages/shop/shop'
import { Cart } from './pages/cart/cart'
import { Shop_Context } from './Context/Shop_Context'
import { Signup } from './components/SignUp/Signup'
import { AuthProvider } from './Context/AuthContext'

function App() {
  return (

    <div className='App'>
      


  <Shop_Context>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Shop />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </Router>
      </Shop_Context> 
    </div>
  )
}

export default App
