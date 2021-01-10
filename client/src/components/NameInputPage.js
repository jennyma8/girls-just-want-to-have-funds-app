import React from "react";
import styled from "styled-components";
import MainButton from "./buttons/mainButton";
import Logo from "./logo";
import SubHeader from "./SubHeader";
import { UserInfoContext } from "../UserInfoContext";
import { useHistory } from "react-router-dom";
import ButtonWrapper from "./buttonWrapper";

const NameInputPage = () => {
  const { userName, setUserName } = React.useContext(UserInfoContext);
  const history = useHistory();
  return (
    <Wrapper>
      <Logo />
      <SubHeader>WHAT IS YOUR NAME ?</SubHeader>
      <Input
        onChange={(ev) => {
          setUserName(ev.target.value);
        }}
        value={userName}
        placeholder="Enter your name"
      ></Input>
      <ButtonWrapper nextLink="/avatar" />
    </Wrapper>
  );
};

export default NameInputPage;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 60px;
  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const Input = styled.input`
  width: 365px;
  border: none;
  border-radius: 8px;
  height: 30px;
  margin: 45px 0;
  padding: 20px;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  @media (max-width: 768px) {
    width: 300px;
  }
`;
