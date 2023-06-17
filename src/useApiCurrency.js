import axios from 'axios'
import { useState, useEffect } from 'react'

export const useApiCurrency = currencyCode => {
	const [currencyValue, setCurrencyValue] = useState(null)

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get('https://api.exchangerate.host/latest?base=PLN')

				setCurrencyValue(response.data)
			} catch (error) {
				console.error('Something went wrong')
			}
		}

		fetchData()
	}, [currencyCode])

	return currencyValue
}
