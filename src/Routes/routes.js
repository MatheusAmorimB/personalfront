import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProtectedRoutes from './ProtectedRoutes';
import Home from '../Pages/Home/index';
import Login from '../Pages/Login/index';
import Cadastro from '../Pages/Cadastro/index';
import Protocolo from '../Pages/Protocolo';
import Treinos from '../Pages/Treino';

const Routering = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/cadastrar' element={<Cadastro />} />
                <Route path='/Protocolo' element={<Protocolo />} />
                <Route path='/sistema' element={
                    <ProtectedRoutes>
                        <h1>Seja bem-vindo ao sistema </h1>
                    </ProtectedRoutes>
                } />
                <Route path="/protocolo/*" element={<Protocolo />} />
                <Route path="/treinos" element={<Treinos/> } />
            </Routes>
        </Router>
    );
}

export default Routering;

