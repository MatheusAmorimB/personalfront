import styled from "styled-components";

export const Container = styled.div`
    position: relative;
`

export const Image = styled.img`
    width: 100%;
`

export const TextAbout = styled.div`
    position: absolute;
    top: 70%;
    left: 38%;
    transform: translate(-50%, -50%);
    text-align: left;
    color: var(--branco);

    h1 {
        position: relative;
        max-width: 60%;
        font-size: 2em;
        font-family: var(--fonte);
        text-shadow: 2px 2px 4px black;

    }

    strong {
        color: var(--amarelo)
    }

`