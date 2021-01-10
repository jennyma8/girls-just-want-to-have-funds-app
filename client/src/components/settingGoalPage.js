import React from "react";
import styled from "styled-components";
import MainButton from "./buttons/mainButton";
import Logo from "./logo";
import SubHeader from "./SubHeader";
import ButtonWrapper from "./buttonWrapper";
import { UserInfoContext } from "../UserInfoContext";
import { useHistory } from "react-router-dom";

const SettingGoalPage = () => {
  const {
    userName,
    setUserName,
    allowance,
    setAllowance,
    amountToSave,
    setAmountToSave,
    goal,
    setGoal,
    avatarUrl,
  } = React.useContext(UserInfoContext);
  const history = useHistory();
  return (
    <Wrapper>
      <Logo />
      <SubHeader>SET A SAVINGS GOAL</SubHeader>
      <Questions>HOW MUCH CAN YOU SAVE EVERY WEEK?</Questions>
      <Input
        type="number"
        placeholder="ex: 15"
        value={allowance}
        onChange={(e) => {
          setAllowance(e.target.value);
        }}
      ></Input>
      <Questions>HOW MUCH DO YOU WANT TO SAVE?</Questions>
      <Input
        type="number"
        placeholder="ex: 80"
        value={amountToSave}
        onChange={(e) => {
          setAmountToSave(e.target.value);
        }}
      ></Input>
      <Questions>WHAT ARE YOU SAVING FOR?</Questions>
      <Input
        placeholder="ex: A Video Game"
        value={goal}
        onChange={(e) => {
          setGoal(e.target.value);
        }}
      ></Input>
      <ButtonWrapper nextLink="/aboutgoal" />
    </Wrapper>
  );
};

export default SettingGoalPage;

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
  width: 300px;
  border: none;
  border-radius: 8px;
  height: 30px;
  margin-bottom: 15px;
  padding: 20px;
  font-size: 20px;
  font-weight: bold;
  text-align: center;

  ::placeholder {
    color: pink;
  }
  @media (max-width: 768px) {
    font-size: 14px;
    width: 200px;
  }
`;

const Questions = styled.div`
  padding: 25px 0 10px 0;
  font-size: 18px;
  font-weight: 700;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
