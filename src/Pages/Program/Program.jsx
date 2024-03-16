import React, { lazy } from 'react'
const Navbar = lazy(()=>import('../../Components/Navbar/Navbar.jsx'));
import HundredDays from '../../Components/HundredDays/HundredDays'

const Program = () => {
  return (
    <div>
      <Navbar/>
      <HundredDays/>
    </div>
  )
}

export default Program
