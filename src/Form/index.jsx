import { useState, useEffect } from 'react'
import Loader from '../Loader'
import Error from '../Error'
import {
	Header,
	FormWrapper,
	CurrencyContainer,
	Button,
	Result,
	Paragraph,
	ValuePLNInput,
	CurrencySelect,
	Span,
	ParagraphWrapper,
} from './styled.js'
import { useApiCurrency } from '../useApiCurrency.js'

const Form = ({ headerTitle }) => {
	const [cashValue, setCashValue] = useState('')
	const [plnValue, setPlnValue] = useState('')
	const [result, setResult] = useState(0)
	const [options, setOptions] = useState([])
	const [date, setDate] = useState('')
	const [isLoading, setIsLoading] = useState(true)
	const [error, setError] = useState(false)

	const currencyValue = useApiCurrency('PLN')

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			setIsLoading(false)
		}, 3000)

		return () => {
			clearTimeout(timeoutId)
		}
	}, [])

	useEffect(() => {
		if (!isLoading && currencyValue) {
			const rates = currencyValue.rates
			const newOptions = Object.keys(rates).map(currency => ({
				value: rates[currency],
				content: currency,
			}))
			setOptions(newOptions)
			setCashValue(newOptions[0]?.value || '')

			const currentDate = currencyValue.date
			setDate(currentDate)
		} else if (!isLoading && !currencyValue) {
			setError(true)
		}
	}, [isLoading, currencyValue])

	const handleCashValueChange = event => {
		setCashValue(event.target.value)
	}

	const handlePlnValueChange = event => {
		setPlnValue(event.target.value)
	}

	const handleSubmit = event => {
		event.preventDefault()
		const calculatedResult = cashValue * plnValue
		setResult(calculatedResult)
	}

	return (
		<article>
			{isLoading ? (
				<Loader />
			) : (
				<>
					{error ? ( // Wyświetlanie informacji o błędzie
						<Error />
					) : (
						<>
							<Header>{headerTitle}</Header>

							<FormWrapper className='js-form' onSubmit={handleSubmit}>
								<CurrencyContainer>
									<ParagraphWrapper>
										<p>
											<label>
												<Span>Podaj ilość PLN:</Span>
												<ValuePLNInput
													className='js-plnValue'
													type='number'
													name='PLN'
													min='0'
													step='0.01'
													required
													value={plnValue}
													onChange={handlePlnValueChange}
												/>
											</label>
										</p>
										<p>
											<label>
												<Span>Wybierz walutę:</Span>
												<CurrencySelect
													className='js-cashValue'
													name='currencyExchange'
													value={cashValue}
													onChange={handleCashValueChange}>
													{options.map(item => (
														<option key={item.content} value={item.value}>
															{item.content}
														</option>
													))}
												</CurrencySelect>
											</label>
										</p>
									</ParagraphWrapper>
									<Button>
										<i className='material-icons multiple_stop'>&#xf1b9;</i>
									</Button>

									<p>
										Twoja wartość po wymianie:
										<Result className='js-result'>{result !== 0.0 ? result.toFixed(2) + ' ' : 'N/A'}</Result>
									</p>
								</CurrencyContainer>
							</FormWrapper>

							<Paragraph>Takie ceny tylko u nas!</Paragraph>
							<Paragraph>Ceny z dnia: {date}</Paragraph>
						</>
					)}
				</>
			)}
		</article>
	)
}

export default Form
