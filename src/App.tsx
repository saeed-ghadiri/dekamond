import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'

function App() {

  return (
    <>
          <div>
      <nav className="bg-blue-600 text-white p-4 flex gap-4">
        <Link to="/">Home1</Link>
        <Link to="/home">Home</Link>
      </nav>

      <Routes>
        <Route path="/" element={<h1 className="p-6 text-xl">Welcome to Home Page</h1>} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
    </>
  )
}

export default App
