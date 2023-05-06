import "./style.css"

const Form = () => (
    <article>
        <h2 class="section__header">    </h2>
      <form class="form js-form">
        <fieldset class="form__fieldset">
          <legend>Kalkulator walut</legend>
          <p>
            <label>
              Wybierz walutę:
              <select class="js-cashValue" name="currencyExchange">
                <option value="4.69">Euro</option>
                <option value="4.41">Dolar Amerykański</option>
                <option value="5.39">Funt</option>
              </select>
            </label>
          </p>
          <p>
            <label>
              Podaj kwotę:
              <input class="js-plnValue" type="number" name="PLN" min="0" step="0.01" required/>
            </label>
          </p>

          <button class="form__button">Przelicz!</button>

          <p>
            Twoja wartość po wymianie: <span class="form__result js-result">0</span> zł.
          </p>
        </fieldset>
      </form>
      <p class="form__paragraph">
        Takie ceny tylko u nas!
      </p>
    </article>
);

export default Form;