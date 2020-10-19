import React from 'react'
import Header from '../components/Header'
import Searcher from '../components/Searcher'

import '../assets/styles/App.scss'
const App = () =>{
  return(
    <div className="App">
      <Header></Header>
      <Searcher></Searcher>
    </div>

  )
}

export default App