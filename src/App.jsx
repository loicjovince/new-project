import { useState } from 'react'
import './assets/css/style'
import Header from './components/commun/Hooter'
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
