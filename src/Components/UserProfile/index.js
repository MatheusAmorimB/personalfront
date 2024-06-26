import Avatar from "../../assets/images/avatar.png";
import { Container } from "./styles";


const UserProfile = () => {
    return (
    <Container>
        <img src={Avatar} alt="foto-de-perfil" />
        <h1>Bem-vindo! <strong>Diego Nobrega</strong> </h1>  
    </Container>
    )
}

export default UserProfile;