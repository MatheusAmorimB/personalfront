import React, {useState} from "react";
import { Container, Form, SubcontainerSign } from './styles'
import InputLogin from "../../Components/Input";
import BotaoLogin from "../../Components/ButtonPageLogin";
import { validarEmail, validarSenha, validarNome, validarConfirmarSenha } from "../../Utils/Validadores";
import UserServices from "../../Services/UserService";
import { NavLink, useNavigate } from "react-router-dom";
import ImageRegister from "../../Components/Image-Register";
import BackButton from "../../Components/BackPage";

const userService = new UserServices();

const Cadastro = () => {

    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState([]);
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            setLoading(true)
            const { data } = await userService.cadastrar({
              nome: form.nome,
              telefone: form.telefone,
              email: form.email,
              password: form.password,
            })
            if (data) {
              const responseLogin = await userService.login({
                email: form.email,
                password: form.password
              })
              if (responseLogin === true) {
                alert('usuário Cadastrado com Sucesso')
                navigate('/login')
              }
          }
        }
        catch (err) {
            alert('Algo deu errado com o seu Cadastro' + err)
        } finally {
            setLoading(false)
        }
        
    }

    const handleChange = (event) => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const validadorInput = () => {
        return validarEmail(form.email) 
        && validarSenha(form.password)
        && validarConfirmarSenha(form.password, form.confirmarPassword)
        && validarNome(form.nome)
      }

    console.log('O form está valido ?', validadorInput());

    return (
        <Container>
            <NavLink to="/login">
                <BackButton styles={{ color: 'white' }}/>
            </NavLink>
                <ImageRegister />
            <Form>
                <h1>Faça o seu Cadastro</h1>
                
                <InputLogin
                    name='username'
                    placeholder='Digite o seu username'
                    onChange={handleChange}
                    type='text' 
                />
                <InputLogin
                    name='nome'
                    placeholder='Digite o seu nome completo'
                    onChange={handleChange}
                    type='text' 
                />
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
                <InputLogin
                    name='confirmarPassword'
                    placeholder='Digite sua senha novamente'
                    onChange={handleChange}
                    type='password' 
                />
                <BotaoLogin
                    type='submit'
                    text='Efetuar Cadastro'
                    onClick={handleSubmit}
                    disabled={loading === true || !validadorInput()} 
                />

                <SubcontainerSign>
                    <p>Já possui uma conta?</p>
                    <NavLink to="/login">Login</NavLink>
                </SubcontainerSign>
                
            </Form>
        </Container>
    )
}

export default Cadastro;