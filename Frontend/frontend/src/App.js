import React from 'react';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import { isAuthenticated } from './utils/auth';

function RequireAuth({ children }) {
  return isAuthenticated() ? children : <Navigate to='/login' replace />;
}

export default function App(){
  return (
    <div style={{padding:20}}>
      <nav>
        <Link to='/'>Home</Link> | <Link to='/login'>Login</Link> | <Link to='/register'>Register</Link> | <Link to='/dashboard'>Dashboard</Link>
      </nav>
      <Routes>
        <Route path='/' element={<h2>Welcome — React + DRF demo</h2>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/dashboard' element={<RequireAuth><Dashboard/></RequireAuth>} />
      </Routes>
    </div>
  );
}
