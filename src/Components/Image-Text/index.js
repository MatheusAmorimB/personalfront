import { Container, ImageAbout } from './styles';

const ImageText = ({ imageSrc, altText, listItem, titleItem }) => {
    return(
        <Container>
        <ImageAbout src={imageSrc} alt={altText} />
            {titleItem.map((title, index) => (
                <h2 key={index}> {title} </h2>
            ))}

            <ul>
                {listItem.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            
        </Container>
    )
}

export default ImageText;