import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Inputs from './components/inputs/Inputs'
import Result from './components/result/Result'


const App = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-indigo-950'>
      <Navbar />
      <Hero />
      <Inputs />
      <Result />
    </div>
  )
}

export default App