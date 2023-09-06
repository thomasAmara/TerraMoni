import React, { Suspense, lazy } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
const Login = lazy(() => import('./pages/Login'));
const Register = lazy(() => import('./pages/Register'));
const Agent = lazy(() => import('./pages/AgentRegister'));
const Home = lazy(() => import('./pages/Home'));
const Coporate = lazy(() => import('./pages/Coporate'));

function App() {
  return (
    <div className='App'>
      <Router>
        <Suspense fallback={null}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/agent' element={<Agent />} />
            <Route path='/coporate' element={<Coporate />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
