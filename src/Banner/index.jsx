import { TitleMain, RedText } from "./styled.js";

const Banner = ({ firstTitle, secondTitle }) => (
  <TitleMain>
    {firstTitle}<br />
    <RedText>{secondTitle}</RedText>
  </TitleMain>
)

export default Banner;