import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

function NavbarLink({children, url, title}) {


  return (
    <NavLink className={`'flex items-center space-x-[20px] py-[15px]'`} to={url}>
        {children}
        <span className='font-normal text-[18px] block '>{title}</span>
    </NavLink>
  )
}

export default NavbarLink