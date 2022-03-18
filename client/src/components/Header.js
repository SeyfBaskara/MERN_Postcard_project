import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()
  return (
    <header className='header'>
      <h1 className='header__title' onClick={() => navigate('/')}>Postcard</h1>
      <nav className='header__nav'>
        <Link className='header__link' to='/'>Home</Link>
        <Link className='header__link' to='/createcard'>Card</Link>
        <Link className='header__link' to='/collection'>Collection</Link>
        <Link className='header__link' to='/pricing'>Pricing</Link>
        <Link className='header__link' to='/delivery'>Delivery</Link>
      </nav>
    </header>
  )
}

export default Header