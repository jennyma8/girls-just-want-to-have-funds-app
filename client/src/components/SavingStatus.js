import React from "react";
import styled from "styled-components";
import MainButton from "./buttons/mainButton";
import Logo from "./logo";
import SubHeader from "./SubHeader";
import { UserInfoContext } from "../UserInfoContext";
import { useHistory } from "react-router-dom";
import dayjs from "dayjs";
import PiggyImg from "../assets/piggybank.png";
import { FcOk } from "react-icons/fc";

const SavingStatusPage = () => {
  const {
    userName,
    setUserName,
    allowance,
    setAllowance,
    amountToSave,
    setAmountToSave,
    goal,
    setGoal,
    amountsaved,
    setAmountSaved,
    ledger,
    setLedger,
  } = React.useContext(UserInfoContext);
  const [depositAmount, setDepositAmount] = React.useState("");
  const [withdrawAmount, setWithdrawAmount] = React.useState("");
  console.log("amountsaved", amountsaved);
  console.log("depositAmount", depositAmount);
  const history = useHistory();
  console.log(dayjs().format("YYYY/MM/DD HH:mm"));

  return (
    <Wrapper>
      <Logo />
      <SubHeader>{userName.toUpperCase()}'S SAVING STATUS</SubHeader>
      <PiggyWrapper>
        <Piggy src={PiggyImg} />
      </PiggyWrapper>{" "}
      <ProgressBar
        value={(amountsaved / amountToSave) * 100}
        max="100"
      ></ProgressBar>
      {(amountsaved / amountToSave) * 100 >= 100 && (
        <h2>
          GOAL COMPLETED! <FcOk size={23} />
        </h2>
      )}
      <HowMuchDiv>
        <HowMuchDivLeft>
          HOW MUCH YOU'VE SAVED<AmountDiv>${amountsaved}</AmountDiv>
        </HowMuchDivLeft>
        <HowMuchDivRight>
          HOW MUCH IS REMAINING
          <AmountDiv>
            ${amountToSave - amountsaved >= 0 ? amountToSave - amountsaved : 0}
          </AmountDiv>
        </HowMuchDivRight>
      </HowMuchDiv>
      <ButtonsDiv>
        <DepositButton
          onClick={() => {
            const numberSaved = amountsaved === "" ? 0 : parseInt(amountsaved);
            const depositSaved =
              depositAmount === "" ? 0 : parseInt(depositAmount);
            const total = depositSaved + numberSaved;

            setAmountSaved(total);

            const object = {
              date: dayjs().format("YYYY/MM/DD HH:mm"),
              total: total,
              deposit: depositAmount,
              withdraw: "none",
            };
            const array = [...ledger, object];
            setLedger(array);
          }}
        >
          +
          <DepositInput
            type="number"
            placeholder="$0"
            onClick={(e) => {
              e.stopPropagation();
            }}
            value={depositAmount}
            onChange={(e) => {
              setDepositAmount(e.target.value);
            }}
          />
          DEPOSIT
        </DepositButton>
        <WithdrawButton
          onClick={() => {
            const numberSaved = amountsaved === "" ? 0 : parseInt(amountsaved);
            const withdrawSaved =
              withdrawAmount === "" ? 0 : parseInt(withdrawAmount);
            const total = numberSaved - withdrawSaved;
            setAmountSaved(total);

            const object = {
              date: dayjs().format("YYYY/MM/DD HH:mm"),
              total: total,
              deposit: "none",
              withdraw: withdrawAmount,
            };
            const array = [...ledger, object];
            setLedger(array);
          }}
        >
          -
          <WithdrawInput
            type="number"
            placeholder="$0"
            onClick={(e) => {
              e.stopPropagation();
            }}
            value={withdrawAmount}
            onChange={(e) => {
              setWithdrawAmount(e.target.value);
            }}
          />
          WITHDRAW
        </WithdrawButton>
      </ButtonsDiv>
      <TableDiv>
        <Table>
          <TableRow>
            <TableHeader>DATE</TableHeader>
            <TableHeader>DEPOSITS</TableHeader>
            <TableHeader>WITHDRAWALS</TableHeader>
            <TableHeader>TOTAL</TableHeader>
          </TableRow>
          {ledger
            .map((entrie) => {
              return (
                <TableRow>
                  <Td>{entrie.date}</Td>
                  <Td>{entrie.deposit}</Td>
                  <Td>{entrie.withdraw}</Td>
                  <Td>{entrie.total}</Td>
                </TableRow>
              );
            })
            .reverse()}
          <TableRow>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </TableRow>
        </Table>
      </TableDiv>
      <MainButton>BACK</MainButton>
    </Wrapper>
  );
};

export default SavingStatusPage;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 60px;
`;

const HowMuchDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 30px 60px;
  font-weight: 700;
  font-size: 18px;
`;

const HowMuchDivLeft = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0 60px;
`;

const HowMuchDivRight = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0 60px;
`;

const AmountDiv = styled.div`
  background-color: white;
  height: 30px;
  width: 200px;
  margin: 5px;
  text-align: center;
  padding: 5px;
`;

const ButtonsDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

const DepositInput = styled.input`
  background-color: white;
  border-radius: 5px;
  border: none;
  font-weight: 700;
  font-size: 18px;
  width: 100px;
  padding: 5px;
  margin: 0 10px;
`;

const WithdrawInput = styled.input`
  background-color: white;
  border-radius: 5px;
  border: none;
  font-weight: 700;
  font-size: 18px;
  width: 100px;
  padding: 5px;
  margin: 0 10px;
`;

const DepositButton = styled.button`
  background-color: #6ced8c;
  border-radius: 10px;
  border: none;
  font-weight: 700;
  font-size: 18px;
  width: 150px;
  padding: 5px;
  opacity: 0.8;
  margin: 0 10px;
`;

const WithdrawButton = styled.button`
  background-color: red;
  border-radius: 10px;
  border: none;
  font-weight: 700;
  font-size: 18px;
  width: 150px;
  padding: 5px;
  opacity: 0.8;
  margin: 0 10px;
`;

const TableDiv = styled.div`
  background-color: white;
  width: 600px;
  margin: 30px 0;
`;

const Table = styled.table`
  border: 2px solid #febdc6;
  width: 100%;
  font-size: 18px;
`;

const TableRow = styled.tr`
  padding: 10px;
`;

const TableHeader = styled.th`
  padding: 10px;
`;

const Td = styled.td`
  text-align: center;
`;

const PiggyWrapper = styled.div`
  position: relative;
  width: 100px;
`;
const Piggy = styled.img`
  width: 100px;
  position: absolute;
  top: -60px;
  right: -300px;
`;

const ProgressBar = styled.progress`
  width: 500px;
  height: 50px;
`;
