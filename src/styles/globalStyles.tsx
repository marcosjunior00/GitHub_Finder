import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    color: #fff;
    font-family: "Poppins", sans-serif;
  }

  body {
    background-color: #0e1227;
    padding: 5rem;
  }

  p {
    text-align: center;
  }

  a {
    text-decoration: none;
  }
`;

export const Title = styled.h2``;

export const UserContainer = styled.div`
  display: flex;
  justify-content: center;
`;
