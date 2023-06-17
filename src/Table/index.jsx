import { Container, TableWrapper, Caption, Cell } from './styled.js'

const Table = ({ tableTitle, euroValue, dollarValue, funtValue }) => (
	<Container>
		<TableWrapper>
			<Caption>{tableTitle}</Caption>
			<tr>
				<Cell red scope='col'>
					Waluta
				</Cell>
				<Cell red scope='col'>
					Wartość
				</Cell>
				<Cell red scope='col'>
					Wartość (złoty)
				</Cell>
			</tr>
			<tr>
				<Cell fairy scope='row'>
					<span className='material-symbols-outlined'>euro</span>
				</Cell>
				<Cell>1</Cell>
				<Cell>{euroValue}</Cell>
			</tr>
			<tr>
				<Cell fairy scope='row'>
					<span className='material-symbols-outlined'>attach_money</span>
				</Cell>
				<Cell>1</Cell>
				<Cell>{dollarValue}</Cell>
			</tr>
			<tr>
				<Cell fairy scope='row'>
					<span className='material-symbols-outlined'>currency_pound</span>
				</Cell>
				<Cell>1</Cell>
				<Cell>{funtValue}</Cell>
			</tr>
		</TableWrapper>
	</Container>
)
export default Table
