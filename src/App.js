import React from 'react'
import './App.css'
import { Header , Container ,Footer } from './components/index'
const App = () => {
  return (
    <> 
     <Header text="exemple props " color='yellow' />   
     <Container />
     <Footer />
     </>
  )
}

export default App