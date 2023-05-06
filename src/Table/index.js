import "./style.css"

const Table = ({tableTitle}) => (
    <div class="table__container">
    <table class="table">
        <caption class="table__caption">{tableTitle}</caption>
        <tr>
          <th scope="col" class="table__cell table__cell--red">Waluta</th>
          <th scope="col" class="table__cell table__cell--red">Wartość</th>
          <th scope="col" class="table__cell table__cell--red">Wartość (złoty)</th>
        </tr>
        <tr>
          <th scope="row" class="table__cell table__cell--fairy">
            <span class="material-symbols-outlined">
              euro
            </span>
          </th>
          <td class="table__cell">1</td>
          <td class="table__cell">4,69</td>
        </tr>
        <tr>
          <th scope="row" class="table__cell table__cell--fairy">
            <span class="material-symbols-outlined">
              attach_money
            </span>
          </th>
          <td class="table__cell">1</td>
          <td class="table__cell">4,41</td>
        </tr>
        <tr>
          <th scope="row" class="table__cell table__cell--fairy">
            <span class="material-symbols-outlined">
              currency_pound
            </span>
          </th>
          <td class="table__cell">1</td>
          <td class="table__cell">5,39</td>
        </tr>
      </table>
    </div>
)
export default Table;