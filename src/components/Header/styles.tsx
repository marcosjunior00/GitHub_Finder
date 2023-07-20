import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  padding: 10px 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  background-color: #0a0b1a;
`;

export const Icon = styled.i`
  font-size: 40px;
`;

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 70%;
  border: 1px solid #fff;
  border-radius: 10px;
  padding: 8px;
`;

export const Input = styled.input`
  width: 90%;
  border: none;
  background: none;
  border-bottom: 1px solid #fff;
  outline: none;
  padding: 2px;
`;

export const SearchBtn = styled.button`
  width: 8%;
  margin-top: 2px;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
`;
