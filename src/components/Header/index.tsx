import React, { useContext } from "react";
import Switch from "react-switch";
import { ThemeContext } from "styled-components";

import { Container } from "./styles";

interface Props {
  toggleTheme(): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);

  return (
    <Container>
      {title === "dark" ? "Dark Side" : "Light Side"}
      <Switch
        onChange={toggleTheme}
        checked={title === "dark"}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        offColor={colors.background}
        onColor={colors.background}
      />
    </Container>
  );
};

export default Header;
