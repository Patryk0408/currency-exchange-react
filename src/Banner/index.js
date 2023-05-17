import "./style.css";

const Banner = ({ firstTitle, secondTitle }) => (
  <h2 className="main__title">
    {firstTitle}<br />
    <span className="main__title--red">{secondTitle}</span>
  </h2>
)

export default Banner;