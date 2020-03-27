import React from "react";
import { ThemeProvider, DefaultTheme } from "styled-components";
import usePersistedState from "./utils/usePersistedState";

import light from "./styles/themes/light";
import dark from "./styles/themes/dark";

import GlobalStyle from "./styles/global";
import Header from "./components/Header";

import { Content, Plasma, Label, Check, Saber, Side } from "./styles";

const App = () => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>("theme", light);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <div>
        <GlobalStyle />
        <Header toggleTheme={toggleTheme} />
        <Content>
          <Side>
            <Saber>
              <Label />
              <Check type="checkbox" checked={theme.title !== "light"} />
              <Plasma color="dark" />
            </Saber>
          </Side>
          <Side>
            <Saber>
              <Label />
              <Check type="checkbox" checked={theme.title === "light"} />
              <Plasma color="light" />
            </Saber>
          </Side>
        </Content>
      </div>
    </ThemeProvider>
  );
};

export default App;
