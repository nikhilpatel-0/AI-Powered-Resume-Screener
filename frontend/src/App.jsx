import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Inputs from './components/inputs/Inputs'

const App = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-indigo-950'>
      <Navbar />
      <Hero />
      <Inputs />
    </div>
  )
}

export default App