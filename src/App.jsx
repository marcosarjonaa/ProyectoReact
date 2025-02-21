import { useEffect, useState } from 'react';
import Header from './Components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import {AuthProvider} from './Context/AuthContext'
import Listado from './Pages/Listado';
import Login from './Pages/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  
  return (<>
    <AuthProvider>
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path='/listado' element={<Listado />} /> 
          <Route path='/' element={<Login />} /> 
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </>)
}

export default App
