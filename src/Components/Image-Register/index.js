import ImgRegister from "../../assets/images/Image-Register.jpg"
import { ImageContainer, Image} from "./styles";

const ImageRegister = () => {
    return(
        <ImageContainer>
            <Image src={ImgRegister}
                   alt="image-background"
            />
        </ImageContainer>
    )
}

export default ImageRegister;