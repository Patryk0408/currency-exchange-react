import { useState } from "react";
import {
  Header,
  FormWrapper,
  FormFieldset,
  Button,
  Result,
  Paragraph,
} from "./styled.js";

const values = [
  { id: 1, content: "Euro", value: 4.69 },
  { id: 2, content: "Dolar amerykański", value: 4.41 },
  { id: 3, content: "Funt", value: 5.39 },
];

const Form = ({ headerTitle }) => {
  const [cashValue, setCashValue] = useState(values[0].value);
  const [plnValue, setPlnValue] = useState("");
  const [result, setResult] = useState(0);

  const handleCashValueChange = (event) => {
    setCashValue(event.target.value);
  };

  const handlePlnValueChange = (event) => {
    setPlnValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const calculatedResult = cashValue * plnValue;
    setResult(calculatedResult);
  };

  return (
    <article>
      <Header>{headerTitle}</Header>
      <FormWrapper className="js-form" onSubmit={handleSubmit}>
        <FormFieldset>
          <legend>Kalkulator walut</legend>
          <p>
            <label>
              Wybierz walutę:&nbsp;
              <select
                className="js-cashValue"
                name="currencyExchange"
                value={cashValue}
                onChange={handleCashValueChange}
              >
                {values.map((item) => (
                  <option key={item.id} value={item.value}>
                    {item.content}
                  </option>
                ))}
              </select>
            </label>
          </p>
          <p>
            <label>
              Podaj kwotę:&nbsp;
              <input
                className="js-plnValue"
                type="number"
                name="PLN"
                min="0"
                step="0.01"
                required
                value={plnValue}
                onChange={handlePlnValueChange}
              />
            </label>
          </p>

          <Button>Przelicz!</Button>

          <p>
            Twoja wartość po wymianie:{" "}
            <Result className="js-result">
              {result !== 0.0 ? result.toFixed(2) + " zł." : "N/A"}
            </Result>
          </p>
        </FormFieldset>
      </FormWrapper>
      <Paragraph>Takie ceny tylko u nas!</Paragraph>
    </article>
  );
};

export default Form;
