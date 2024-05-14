import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
// import logo from 'https://stackoverflow.design/assets/img/logos/so/logo-stackoverflow.png'
import logo from '../../assets/logo-stackoverflow.svg'
import search from '../../assets/search.svg'

import './Navbar.css'


import { useSelector,useDispatch } from 'react-redux'



// After log in it have to some pic
import Avatar from '../../components/Avatar/Avatar'
import { setCurrentUser } from '../../actions/currentUser'
// import Button from '../../components/Button/Button'

const Navbar = () => {


    const dispatch = useDispatch();

    var User = useSelector((state) => (state.currentUserReducer));
    // var User = JSON.parse(localStorage.getItem('Profile'));
    // var User = 'yditya';

    

    useEffect(() => {
        dispatch(setCurrentUser( JSON.parse(localStorage.getItem('Profile'))))
    }, [dispatch])




  return (
    <nav className='main-nav'>
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
            <Avatar backgroundColor='#009dff' px="10px" py="7px" borderRadius="50%" color='white' ><Link to='./User' style={{color:'white', textDecoration:'none'}} >{User.result.name.charAt(0).toUpperCase()}</Link></Avatar>
            <button  className='nav-item nav-link' >Log out</button>
          </>
      }

      </div>
    </nav>
  )
}

export default Navbar