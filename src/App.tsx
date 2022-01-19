import React from "react";
import './App.css';

import {
  BrowserRouter,
  Navigate,
  Routes,
  Route
} from 'react-router-dom'

import Home from './pages/Home';
import Index from "./pages/Index";
import NotFound from "./pages/404";
import { Navbar } from './components/Navbar';
import SignIn from "./pages/SignIn";

const isLogged = (comp: JSX.Element, redirect: JSX.Element = <Navigate to={'/login'} />) => {
  const user = localStorage.getItem("user");
  return user ? comp : redirect;
}
const notLogged = (comp: JSX.Element) => {
  const user = localStorage.getItem("user");
  return user ? <Navigate to={'/login'} /> : comp;
}

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
      <Navbar></Navbar>
        <Routes>
          <Route path='/' element={isLogged(<Home />, <Index />)}></Route>
          <Route path='/login' element={notLogged(<SignIn form="LOGIN" />)}></Route>
          <Route path='/register' element={notLogged(<SignIn form="REGISTER" />)}></Route>
          <Route path='*' element={<NotFound /> }></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
