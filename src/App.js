import './App.css';
import React from 'react';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Login';
import Signin from './Signin';
import Home from './Home';

function App() {
  return (
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<Signin />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/home' element={<Home />}></Route>
     </Routes>
     </BrowserRouter>
  );
}

export default App;

