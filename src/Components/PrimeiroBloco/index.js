import ImagemMulher from '../../assets/images/Lipe.jpeg';
import { Container, TextAbout, Image, TextSide } from './styles';

const PrimeiroBloco = () => {
    return(
      <Container>
        <TextAbout>Por que fazer <strong>atividade fisica</strong> é importante para seu <strong>corpo</strong> ?</TextAbout>
        <Image>
          <img src={ImagemMulher} alt="Descrição_da_imagem" />
          <TextSide>“Os exercícios de resistência, como o levantamento de pesos, promovem a saúde dos ossos, prevenindo a perda de densidade óssea. Além disso, contribuem para o desenvolvimento e manutenção da massa muscular.”</TextSide>
        </Image>
      </Container>
    )
}

export default PrimeiroBloco;