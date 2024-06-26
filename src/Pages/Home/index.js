import './styles.css';
import ScrollButton from '../../Components/BackTop';
import Banner from '../../Components/Banner';
import Cabecalho from '../../Components/Cabecalho';
import PrimeiroBloco from '../../Components/PrimeiroBloco';
import SegundoBloco from '../../Components/SegundoBloco';
import Servicos from '../../Components/Servicos';
import Footer from '../../Components/Footer';

function Home() {
  return (
    <div className="App">
        <Cabecalho />
        <section id="home"><Banner /></section>
        <section id="sobre"><PrimeiroBloco /></section>
        <SegundoBloco />
        <section id="servicos"><Servicos /></section>
        <section id="contatos"><Footer /></section>
        <ScrollButton/>
    </div>
  );
}

export default Home;
