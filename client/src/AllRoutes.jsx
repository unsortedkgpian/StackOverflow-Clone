import React from 'react'

import {Routes, Route} from 'react-router-dom'

import Home from './pages/Home/Home'
import Auth from './pages/Auth/Auth'



const AllRoutes = () => {
  return (
    <Routes>
        {/* <Route exact path = '/' component={Home} /> */}
        <Route exact path = '/' element={<Home />} />
        {/* <Route path = '/Auth' component={Auth} /> */}
        <Route path = '/Auth' element={<Auth />} />

    </Routes>
  )
}

export default AllRoutes