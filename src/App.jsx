import { useState } from 'react'
import './assets/css/style.css'
import Header from './components/commun/Header'
import Footer from './components/commun/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header/>
     <Footer/>
    </>
  )
}

export default App
