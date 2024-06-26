import styled from "styled-components";

export const Container = styled.section`
    background-color: black;
    margin-top: 3em;
    padding: 4em 0 2em 0;
    display: flex;
    flex-direction: column;
    align-items: center;

`

export const Cadastro = styled.div`
    background-color: var(--amarelo);
    width: 40%;
    border-radius: 20px;
    padding: 1em;

    input {
        width: 90%;
        padding: 1em;
        margin: 1em;
        border-radius: 20px;
        border: none;
    }

    input::placeholder {
        font-family: var(--fonte);
        font-size: 15px;
        color: black;
    }

`

export const Contatos = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--branco);
    width: 42%;
    font-family: var(--fonte);
    font-size: 16px;

`

export const Icone = styled.div`
    display: flex;
    aling-items: center;

`