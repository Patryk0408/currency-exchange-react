import "./style.css"

const Table = ({ tableTitle, euroValue, dollarValue, funtValue }) => (
  <div className="table__container">
    <table className="table">
      <caption className="table__caption">{tableTitle}</caption>
      <tr>
        <th scope="col" className="table__cell table__cell--red">Waluta</th>
        <th scope="col" className="table__cell table__cell--red">Wartość</th>
        <th scope="col" className="table__cell table__cell--red">Wartość (złoty)</th>
      </tr>
      <tr>
        <th scope="row" className="table__cell table__cell--fairy">
          <span className="material-symbols-outlined">
            euro
          </span>
        </th>
        <td className="table__cell">1</td>
        <td className="table__cell">{euroValue}</td>
      </tr>
      <tr>
        <th scope="row" className="table__cell table__cell--fairy">
          <span className="material-symbols-outlined">
            attach_money
          </span>
        </th>
        <td className="table__cell">1</td>
        <td className="table__cell">{dollarValue}</td>
      </tr>
      <tr>
        <th scope="row" className="table__cell table__cell--fairy">
          <span className="material-symbols-outlined">
            currency_pound
          </span>
        </th>
        <td className="table__cell">1</td>
        <td className="table__cell">{funtValue}</td>
      </tr>
    </table>
  </div>
)
export default Table;