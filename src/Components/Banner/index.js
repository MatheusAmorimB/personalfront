import Woman from "../../assets/images/woman.png";
import { Container, Image, TextAbout } from './styles';

const Banner = () => {
  return (
    <Container>
      <Image src={Woman} alt="Mulher levantando peso" />
    <TextAbout>
      <h1><strong>Transforme seu treino em uma experiência personalizada e eficaz.</strong>Vamos criar juntos um programa que se adapte aos seus objetivos e estilo de vida.</h1>
    </TextAbout>
    </Container>
    );
};

  export default Banner;