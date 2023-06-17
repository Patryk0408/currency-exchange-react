import styled from 'styled-components'

export const Header = styled.h2`
	text-align: center;
	color: ${({ theme }) => theme.color.crimson};
	text-decoration: underline;
`

export const FormWrapper = styled.form`
	max-width: 700px;
	margin: 0 auto 20px;
	text-align: center;
`

export const CurrencyContainer = styled.div`
	padding: 20px;
	background-color: ${({ theme }) => theme.color.white};
	max-width: 800px;
	border-radius: 20px;
	box-shadow: 0px 0px 20px 0px ${({ theme }) => theme.color.silver};
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 10px;

	@media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
		display: grid;
		justify-content: center;
	}
`

export const Button = styled.button`
	background-color: ${({ theme }) => theme.color.crimson};
	color: ${({ theme }) => theme.color.white};
	padding: 5px 10px;
	border: none;
	height: fit-content;
	width: fit-content;
	display: flex;
	align-items: center;
	margin: 0 auto;
`

export const Result = styled.span`
	font-weight: bold;
	font-size: 20px;
	text-decoration: underline;
	color: ${({ theme }) => theme.color.sanFelix};
	padding-left: 5px;
`

export const Paragraph = styled.p`
	text-align: center;
	padding: 0 0 20px;
	font-weight: bold;
	margin-top: 0;
`

export const ValuePLNInput = styled.input`
	width: 120px;
	text-align: center;
`

export const CurrencySelect = styled.select`
	width: 120px;
	text-align: center;
`

export const Span = styled.span`
	padding-bottom: 10px;
	display: block;
	font-size: 1.3em;
	font-weight: 600;
`

export const ParagraphWrapper = styled.div`
	display: flex;
	gap: 10px;
`
