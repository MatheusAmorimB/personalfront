import styled from "styled-components";

export const Container = styled.div`
  margin-top: 1.5em;
`

export const SearchBarContainer = styled.div`
  display: flex;
  background-color: #f2f2f2;
  padding: 15px 5px;
  border-radius: 16px;
  width: 90%;
`

export const SearchInput = styled.input`
  border: none;
  outline: none;
  background: transparent;
  margin-left: 10px;
  width: 300px;
  font-size: 16px;
  font-family: var(--fonte);
`

export const SearchButton = styled.button`
  border: none;
  outline: none;
  background: transparent;
  cursor: pointer;
`