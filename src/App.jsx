import { useEffect, useState } from 'react';
import Header from './Components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import {AuthProvider} from './Context/AuthContext'
import Listado from './Pages/Listado';
import Login from './Pages/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './Pages/Register';
import Home from './Pages/Home';
import Perfil from './Pages/Perfil';
import Add from './Pages/Add';


function App() {
  
  return (<>
    <AuthProvider>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/listado' element={<Listado />} /> 
          <Route path='/' element={<Login />} />
          <Route path='/home' element={<Home />} /> 
          <Route path='/register' element={<Register />} /> 
          <Route path='/perfil' element={<Perfil />}/>
          <Route path='/listado/add' element={<Add />}/>
          <Route path='*' element={<Login />}/>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </>)
}

export default App
