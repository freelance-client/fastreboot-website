import {React, lazy} from 'react'
import './App.css'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const Program = lazy(()=>import('./Pages/Program/Program'));
const Login = lazy(() => import('./Pages/Login/Login'));
const Home = lazy(() => import('./Pages/Home/Home'));
const About = lazy(() => import('./Pages/About/About'));

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/program' element={<Program/>}/>
        </Routes>
      </Router>
      
    </>
    
  )
}

export default App
