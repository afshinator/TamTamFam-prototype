import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useTranslation } from "react-i18next";
import tw from "twin.macro";
import styled from "styled-components";
import {StyledForm, SuccessButton} from "./styles";



function App() {
  const { t } = useTranslation();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>{t("hello", "fallback text uh oh")}</p>
        <SuccessButton />
        <StyledForm>
          <form>
            <input type="text" placeholder="Full name" />
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Password" />
            <button>Sign In</button>
          </form>
        </StyledForm>
      </header>
    </div>
  );
}

export default App;
