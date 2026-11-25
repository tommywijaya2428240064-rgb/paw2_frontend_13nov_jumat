import React from 'react'
import ThemeSwap from './ThemeSwap'
import { BotMessageSquare, Pointer, Wifi } from 'lucide-react'
import { NavLink } from 'react-router'

const Navbar = () => {
  return (
    <div className="max-lg:collapse bg-base-200 lg:mb-48 shadow-sm w-full rounded-md">
  <input id="navbar-1-toggle" className="peer hidden" type="checkbox" />
  <label htmlFor="navbar-1-toggle" className="fixed inset-0 hidden max-lg:peer-checked:block"></label>
  <div className="collapse-title navbar">
    <div className="navbar-start">
      <label htmlFor="navbar-1-toggle" className="btn btn-ghost lg:hidden">
        <Wifi/>
        <Pointer/>
        <BotMessageSquare/>
      </label>
      <button className="btn btn-ghost text-xl">Ko AliongTzy</button>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
        <li><button>Item 1</button></li>
        <li>
          <details>
            <summary>Parent</summary>
            <ul className="p-2 bg-base-100 w-40 z-1">
              <li>
                <NavLink to = "/">Homepage</NavLink>
              </li>
              <li>
                <NavLink to = "/About">About</NavLink>
              </li>
            </ul>
          </details>
        </li>
        <li><button>Item 3</button></li>
      </ul>
    </div>
    <div className="navbar-end">
      <input type="text" placeholder="Search" className="input w-64 lg:w-auto" />
       <ThemeSwap/>
    </div>
  </div>

  <div className="collapse-content lg:hidden z-1">
    <ul className="menu">
      <li><button>Item 1</button></li>
      <li>
        <button>Parent</button>
        <ul>
          <li><button>Submenu 1</button></li>
          <li><button>Submenu 2</button></li>
        </ul>
      </li>
      <li><button>Item 3</button></li>
    </ul>
  </div>
</div>
  )
}

export default Navbar