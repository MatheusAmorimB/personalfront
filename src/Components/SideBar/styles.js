import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    width: 550px;
    margin-top: 6.5em;
`

export const List = styled.ul`
    font-size: 46px;
    font-family: var(--fonte);
    list-style-type: none;
`

export const SidebarButton = styled(Link)`
  display: block;
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  text-align: left;
  text-decoration: none;
  color: var(--branco);
  background-color: var(--azul);
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;