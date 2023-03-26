import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import AuthContext from '../contexts/AuthContext';

const MainRoutes = () => {
    return (
      <Routes>
        <Route path='/' element={<AuthContext><HomePage/></AuthContext>}/>
        <Route path='/login' element={<LoginPage/>}/>
      </Routes>
    );
};

export default MainRoutes;