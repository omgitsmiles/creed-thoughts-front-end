import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav className="navHeader">
        <NavLink to={"/home"}>www.creedthoughts.gov.www\creedthoughts</NavLink>
        <NavLink to={"/newpost"}><span className="navOption">Add Post</span></NavLink>
        </nav>
    </div>
  )
}

export default Navbar