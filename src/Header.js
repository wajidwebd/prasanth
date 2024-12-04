import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export const Header = () => {
  return (
    <div>
        <Link to='/'>Home</Link>
        <Link to='/product'>Product</Link>
        <Link to='/ak'>Cart</Link>
        <Outlet></Outlet>
    </div>
  )
}
