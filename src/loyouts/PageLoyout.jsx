import React from 'react'
import { useRef } from 'react'

import { Outlet } from 'react-router'
import Header from '../components/Header'
import Footer from '../components/Footer'


const PageLoyout = () => {
  const aboutRef = useRef(null)
  return (
    <>
      <Header aboutRef={aboutRef} />
      <main  className=' overflow-hidden'>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default PageLoyout
