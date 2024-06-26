import styled from "styled-components";

export const ImageText = styled.div`
    margin-top: 5em;
    position: relative;

    img {
        width: 100%;
        height: 500px;
    }

`

export const TextAbout = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: var(--branco);
    font-family: 'Bebas Neue', sans-serif;
    text-shadow: 1px 1px 2px white;
    font-size: 45px;

    strong {
        color: var(--amarelo);
    }
`