import React from "react";
import styled from "styled-components";

const MainButton = ({ children, onClick }) => {
  return <Wrapper onClick={onClick}>{children}</Wrapper>;
};

const Wrapper = styled.button`
  background: #6ced8c;
  width: 230px;
  font-size: 25px;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  padding: 13px 0px;
  letter-spacing: 2px;
  cursor: pointer;
  transform: scale(1);
  transition: transform 300ms;
  margin: 0 20px;

  :hover {
    transform: scale(1.1);
  }
  @media (max-width: 768px) {
    width: 200px;
    font-size: 18px;
    padding: 10px;
    border-radius: 5px;
    margin: 10px 0;
  }
`;

export default MainButton;
