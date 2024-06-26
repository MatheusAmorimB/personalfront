import imgTerra from '../../assets/images/boy.png';
import { ImageText, TextAbout } from './styles';

const SegundoBloco = () => {
    return (
        <section id='servicos'>
            <ImageText>
                <img src={imgTerra} alt='um_homem_fazendo_levantamento_de_peso' />
                <TextAbout>
                    <h2>Seu <strong>corpo pode fazer</strong> isso</h2>
                    <h2>É hora de <strong>convencer sua mente</strong></h2>
                </TextAbout>
            </ImageText>
        </section>
    )
}

export default SegundoBloco;