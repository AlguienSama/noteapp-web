import React from "react";
import './App.css';

import {
  BrowserRouter,
  Navigate,
  Routes,
  Route
} from 'react-router-dom'

import Home from './pages/Home';
import NotFound from "./pages/404";
import { Navbar } from './components/Navbar';
import Login from "./pages/Login";
import Register from "./pages/Register";

const isLogged = (comp: JSX.Element) => {
  const user = localStorage.getItem("user");
  return user ? comp : <Navigate to={'/Login'} />;
}

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
      <Navbar></Navbar>
        <Routes>
          <Route path='/' element={isLogged(<Home />)}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='*' element={<NotFound /> }></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
