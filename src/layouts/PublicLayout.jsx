import React from 'react'
import { Outlet } from 'react-router'
import ThemeSwap from '../components/ThemeSwap'

const PublicLayout = () => {
  return (
    <div>
        <h1>HEADER</h1>
        <ThemeSwap/>
        <Outlet/>
        <footer>FOOTER </footer>
    </div>
  )
}

export default PublicLayout