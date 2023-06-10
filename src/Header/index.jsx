import React from "react";
import { HeaderWrapper, Title, Timer } from "./styled.js";
import { useCurrentDate } from "../useCurrentDate.js";

const Header = ({ title }) => {
  const { formattedDate } = useCurrentDate();

  return (
    <HeaderWrapper>
      <Timer>Dzisiaj jest: {formattedDate}</Timer>
      <Title>{title}</Title>
    </HeaderWrapper>
  );
};

export default Header;
