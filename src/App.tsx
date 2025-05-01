import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import {Home, Product, About} from './pages'


function App() {

  return (
    <>
          <div>
      <nav className="bg-blue-600 text-white p-4 flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/product">Product</Link>
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<h1 className="p-6 text-xl">Welcome to Home Page</h1>} />
        <Route path="/product" element={<Product />}  />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
    </>
  )
}

export default App
