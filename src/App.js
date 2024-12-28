import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Cart from './components/Cart' // Correct path
import Details from './components/Detail'

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details" element={<Details />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  </Router>
)

export default App
