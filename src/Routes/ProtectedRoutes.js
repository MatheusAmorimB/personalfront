import React from 'react';
import Routering from '../Routes/routes';
import UserServices from '../Services/UserService';

const userService = new UserServices();

const ProtectedRoutes = ({children}) => {
    console.log('children', children)
    const usuarioAutenticado = userService.usuarioAutenticado()
    return usuarioAutenticado ? children: <Routering />
}

export default ProtectedRoutes;