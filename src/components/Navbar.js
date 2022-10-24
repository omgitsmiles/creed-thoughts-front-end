import React from 'react'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Creed from '../assets/Creed.jpeg'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <Stack>
        <nav className="navHeader">
        <NavLink to={"/home"}>www.creedthoughts.gov.www\creedthoughts</NavLink>
        <NavLink to={"/newpost"}><span className="navOption"><Avatar alt="CB" src={Creed} /></span></NavLink>
        </nav>
        </Stack>
    </div>
  )
}

export default Navbar