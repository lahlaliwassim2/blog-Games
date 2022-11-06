import React from 'react'
import './App.css'
import { Container } from './components/index'
import {Hero, Header  ,Footer } from './sections/index'
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