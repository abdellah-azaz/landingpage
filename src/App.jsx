import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Documentation from './pages/Documentation'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/documentation" element={<Documentation />} />
      </Routes>
    </Router>
  )
}

export default App
