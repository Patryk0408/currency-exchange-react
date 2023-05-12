import React, { useState } from "react";
import "./style.css"

const Form = ({euroValue, dollarValue, funtValue, headerTitle}) => (
    <article>
        <h2 className="section__header">{headerTitle}</h2>
      <form className="form js-form">
        <fieldset className="form__fieldset">
          <legend>Kalkulator walut</legend>
          <p>
            <label>
              Wybierz walutę:
              <select className="js-cashValue" name="currencyExchange">
                <option value={euroValue}>Euro</option>
                <option value={dollarValue}>Dolar Amerykański</option>
                <option value={funtValue}>Funt</option>
              </select>
            </label>
          </p>
          <p>
            <label>
              Podaj kwotę:
              <input className="js-plnValue" type="number" name="PLN" min="0" step="0.01" required/>
            </label>
          </p>

          <button className="form__button">Przelicz!</button>

          <p>
            Twoja wartość po wymianie: <span className="form__result js-result">0</span> zł.
          </p>
        </fieldset>
      </form>
      <p className="form__paragraph">
        Takie ceny tylko u nas!
      </p>
    </article>
);


export default Form;