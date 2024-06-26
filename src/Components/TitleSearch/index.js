import SearchBar from "../InputSearch";
import { Container } from "./styles";

const TitleSearch = ({ title }) => {

    const handleSearch = (term) => {
        console.log('Termo de pesquisa:', term);
    };

    return(
        <Container>
            <h1>{title}</h1>
            <SearchBar onSearch={handleSearch} />
        </Container>
    )
}

export default TitleSearch;