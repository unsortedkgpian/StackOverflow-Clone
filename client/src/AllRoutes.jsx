import React from 'react';

import {Routes, Route} from 'react-router-dom';

import Home from './Pages/Home/Home';
import Auth from './Pages/Auth/Auth';
import Questions from './Pages/Questions/Questions';
import AskQuestion from './Pages/AskQuestion/AskQuestion';
import DisplayQuestion from './Pages/Questions/DisplayQuestion';
import Tags from './Pages/Tags/Tags';
import Users from './Pages/Users/Users';



const AllRoutes = () => {
  return (
    <Routes>
         
        <Route exact path = '/' element={<Home />} />
    
        <Route path = '/Auth' element={<Auth />} />
        <Route path = '/Questions' element={<Questions />} /> 
        <Route path = '/AskQuestion' element={<AskQuestion />} /> 
        <Route path = '/Questions/:id' element={<DisplayQuestion />} />
        <Route path = '/Tags' element={<Tags />} />
        <Route path = '/Users' element={<Users />} />

    </Routes>


  )
}

export default AllRoutes