import React, { useState } from "react";
import { Container, Form, SubcontainerSign } from './styles'
import InputLogin from "../../Components/Input";
import BotaoLogin from "../../Components/ButtonPageLogin";
import { validarEmail, validarSenha } from "../../Utils/Validadores";
import { NavLink, useNavigate } from "react-router-dom";
import ImageLogin from "../../Components/Image-Login/index";
import BackButton from "../../Components/BackPage";
import axios from "axios";

const Login = () => {

    const [loading, setLoading] = useState();
    const [form, setForm] = useState([]);
    const navigate = useNavigate();

    const handleLoginError = (error) => {
        console.log(JSON.stringify(error));
        alert('Algo deu errado com o seu Login');
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            setLoading(true);
            const response = await axios.post('https://anotadin-api.herokuapp.com/api', form, { withCredentials: true });
            console.log('response do login', response);
            if (response === true) {
                alert('usuário logado com sucesso');
                navigate('/sistema');
            }
        } catch (err) {
            handleLoginError(err);
        } finally {
            setLoading(false);
        }
    }

    const handleChange = (event) => {
        setForm({ ...form, [event.currentTarget.name]: event.currentTarget.value });
    }

    const validadorInput = () => {
        return validarEmail(form.email) && validarSenha(form.password);
    }

    console.log('O form está valido ?', validadorInput());

    return (
        <Container>
            <NavLink to="/">
                <BackButton />
            </NavLink>
            <ImageLogin />
            <Form onSubmit={handleSubmit}>
                <h1>Acesse sua conta</h1>
                <InputLogin
                    name='email'
                    placeholder='Digite seu e-mail'
                    onChange={handleChange}
                    type='email'
                />
                <InputLogin
                    name='password'
                    placeholder='Digite sua senha'
                    onChange={handleChange}
                    type='password'
                />
                <BotaoLogin
                    type='submit'
                    text='Entrar'
                    disabled={loading === true || !validadorInput()}
                />

                <SubcontainerSign>
                    <p>Ainda não possui uma conta?</p>
                    <NavLink to="/cadastrar">Cadastre-se</NavLink>
                </SubcontainerSign>

            </Form>
        </Container>
    )
}

export default Login;
