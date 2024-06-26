import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Container, Cadastro, Icone, Contatos } from './styles';



const Footer = () => {
    return(
        <Container>
            <Cadastro>
                <label for="nome"></label>
                <input type="text" id='nome' placeholder="Digite seu nome" required></input>
                <label for="e-mail"></label>
                <input type="email" id='email' placeholder="Digite seu e-mail" required></input>
            </Cadastro>
            <Contatos>
                <p>Número de contato:(92) 99245-2675</p>
                <Icone>Me siga: <FaInstagram />, <FaXTwitter />
                    @DicoPersonal
                    </Icone>
            </Contatos>
        </Container>
    )
}

export default Footer;