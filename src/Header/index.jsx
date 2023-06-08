import { useState, useEffect } from "react";
import { HeaderWrapper, Title, Timer } from "./styled.js";

const showingNowDate = (time) =>
  time.toLocaleDateString(undefined, {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

const Header = ({ title }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <HeaderWrapper>
      <Timer>Dzisiaj jest: {showingNowDate(time)}</Timer>
      <Title>{title}</Title>
    </HeaderWrapper>
  );
};

export default Header;
