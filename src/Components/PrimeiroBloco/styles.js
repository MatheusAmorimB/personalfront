import styled from "styled-components";

export const Container = styled.div`
    display: block;
    padding: 6em 0 3em 0;
    text-align: left;

`

export const TextAbout = styled.div`
    text-align: center;
    margin-bottom: 1em;
    margin-left: 4.6em;
    width: 20em;
    font-size: 30px;
    color: var(--branco);
    font-family: var(--fonte);
    text-shadow: 2px 2px 4px black;

    strong {
        color: var(--amarelo);
    }

`

export const Image = styled.div`
    display: flex;
    align-items: center;

    img {
        object-fit: cover;
        width: 30vw;
        height: 25vw;
        margin-left: 8.5em;
        border: 3px solid var(--amarelo);
        border-radius: 40px;
    }
`

export const TextSide = styled.div`
    margin: 0em 0em 1em 2.5em;
    font-size: 30px;
    font-family: var(--fonte);
    width: 40%;
    color: var(--branco);
    text-shadow: 2px 2px 4px black;
`