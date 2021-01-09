import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import { UserInfoContext } from "./UserInfoContext";
import GlobalStyles from "./GlobalStyles";
import MainButton from "./components/buttons/mainButton";
import styled from "styled-components";
import LogoImg from "./components/logo";
import AvatarImg from "./assets/avatar.png";

function App() {
  const { test } = React.useContext(UserInfoContext);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Landing>
            <LogoImg />
            <AvatarSideImg src={AvatarImg} />
            <MainButton>LET'S START !</MainButton>
          </Landing>
        </Route>
        <Route path="/page2">
          <div>page 2</div>
        </Route>
      </Switch>
      <GlobalStyles />
    </Router>
  );
}

const Landing = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

const AvatarSideImg = styled.img`
  padding: 5px 5px 25px 5px;
  height: 400px;
`;

export default App;
