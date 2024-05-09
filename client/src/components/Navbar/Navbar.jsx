import React from 'react'
import { Link } from 'react-router-dom'
// import logo from 'https://stackoverflow.design/assets/img/logos/so/logo-stackoverflow.png'
import logo from '../../assets/logo-stackoverflow.svg'
import search from '../../assets/search.svg'

import './Navbar.css'



// After log in it have to some pic
import Avatar from '../../components/Avatar/Avatar'
import Button from '../../components/Button/Button'

const Navbar = () => {

  var User = null;





  return (
    <nav>
      <div className="navbar">

        <Link to='/' className='nav-item nav-logo'>
          <img src={ logo } alt="logo" style={{width:'150px'}}  />
        </Link>
        <Link to='/' className='nav-item nav-btn' >About</Link>
        <Link to='/' className='nav-item nav-btn' >Products</Link>
        <Link to='/' className='nav-item nav-btn' >For Teams</Link>

        <form action="">
          <input type="text" placeholder='Search...' name="" id="" />
          <img src={search} alt="ixon"  width="18" className='search-icon' />
        </form>
        
        {User === null ?
          <Link to='/Auth' className='nav-item nav-links'>Log in</Link> :
          <>
            <Link to='./'  ><Avatar>A</Avatar></Link>
            <Button>Log out</Button>
          </>
      }

      </div>
    </nav>
  )
}

export default Navbar