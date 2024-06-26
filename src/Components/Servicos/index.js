import ImageText from "../Image-Text";
import { Container, BlockImage } from "./styles";
import BoyRunning from '../../assets/images/boy-running.jpg'
import mantraining from '../../assets/images/homem-levantando-peso.webp'


const Servicos = () => {

    const TitleLeft = [
        "Basic Fitness"
    ]

    const Titleright = [
        "Medium Fitness"
    ]

    const Listleft = [
        "Consultoria online",
        "Protocolo para iniciantes",
        "Protocolo para atletas",
    ]

    const Listright = [
        "Protocolo personalizado",
        "envio por e-mail",
        "em pdf",
    ]

    return (
        <Container>
            <h1>NOSSOS <strong>SERVIÇOS</strong>:</h1>
            <BlockImage>
                <ImageText imageSrc={BoyRunning} altText="homem correndo" titleItem={TitleLeft} listItem={Listleft} />
                <ImageText imageSrc={mantraining} altText="homem levantando peso" titleItem={Titleright} listItem={Listright} />
            </BlockImage>
        </Container>
    )
}

export default Servicos;