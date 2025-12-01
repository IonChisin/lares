import React, { useRef } from 'react'
import Header from '../components/Header'
import Label from '../components/Label'
import Calculator from '../components/Calculator'
import Catalog from '../components/Catalog'
import About from '../components/About'
import Plus from '../components/Plus'



const Home = () => {
  const aboutRef = useRef(null)
  return (
    < >
      <Label />
      <Calculator />
      <Plus />
      <Catalog />
      <About ref={aboutRef} />
    </>
  )
}

export default Home
