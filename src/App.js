import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Login from './Pages/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Profile from './Pages/Profile';

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route index element={<Login/>}></Route>
      <Route element={<Profile/>} path='/profile'></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App;
