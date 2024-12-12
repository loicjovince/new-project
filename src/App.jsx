import { useState } from 'react'
import './assets/css/style.css'
import Header from './components/commun/Header'
import Footer from './components/commun/Footer'
import Home from './components/Home'
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Home/>
    </>
  )
}

export default App
