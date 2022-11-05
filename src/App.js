import React from 'react'
import './App.css'
import {Hero, Header , Container ,Footer } from './components/index'
const App = () => {
  return (
    <> 
     <Header />   
     <Container>
      <Hero />
     </Container>
     <Footer />
     </>
  )
}

export default App