import React from 'react'
import Header from './commun/Header'
import Footer from './commun/Footer'

function Home() {
  return (
    <div>
      <Header/>
     <main>
      
     <section className="section-1">
                 <div className="hero d-flex align-items-center">
                    <div className="container-fluid">
                        <div className="text-center">
                            <span> welcome Amazing Constructions</span>
                            <h1>Crafting dreams with <br /> precision and excellence .</h1>
                            <p>we excel at transforming visions into reality through outstanding craftsmanship and precise <br /> attenton to detail . with years of experience and a dedication to quality </p>
                               <div className="mt-3">
                                  <button className="btn btn-primary">Contact Now</button> &
                                  <button className="btn btn-secondary">View projets</button>
                               </div>

                        </div>
                    </div>
                 </div>
              </section>

     </main>


      <Footer/>
    </div>
  )
}

export default Home

