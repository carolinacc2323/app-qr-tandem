// import Header from './components/Header'
// import './App.css'
// import React from 'react'


// function App() {
  
//   return (
//     <>
//     <Header/>
//     <section>
//       <p>Aqui va el section</p>
//     </section>
//     <Footer/>

//     </>
//   )
// }

// export default App

import './App.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer'
import Icono from './components/Icon'
import { GoSingleSelect } from 'react-icons/go'
import Pooter from './components/Pruebafooter'
function App() {
  return (
    <>
    <div className="App">
    <Navbar/>     
    </div>
    <section>
      <p>holi perre vergue</p>
      <Icono />
    </section>
    <Footer/>
    <Pooter/>
    </>
  )
}

export default App