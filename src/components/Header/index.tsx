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
      Hello Word
      <Switch
        onChange={toggleTheme}
        checked={title === "dark"}
        checkedIcon={false}
        uncheckedIcon={false}
        height={20}
        width={40}
        handleDiameter={20}
        offColor="#605e5c"
        onColor="#20345b"
      />
    </Container>
  );
};

export default Header;
