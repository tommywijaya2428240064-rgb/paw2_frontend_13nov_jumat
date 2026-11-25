import React from 'react'
import { Outlet } from 'react-router'
import ThemeSwap from '../components/ThemeSwap'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const PublicLayout = () => {
  return (
    <div className='min-h-screen flex flex-col'>
        <Navbar/>
        <ThemeSwap/>
        <main className= 'flex-1'>
          <Outlet/>
        </main>
        <Footer/>
    </div>
  )
}

export default PublicLayout