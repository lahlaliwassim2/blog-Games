import React from 'react'
import './App.css'
import { Container } from './components/index'
import {Hero, Header,MostPopulaire  ,Footer } from './sections/index'
const App = () => {
  return (
    <> 
     <Header />   
     <Container>
      <Hero />
      <MostPopulaire />
     </Container>
     <Footer />
     </>
  )
}

export default App