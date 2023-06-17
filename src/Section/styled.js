import styled from 'styled-components'

export const Wrapper = styled.section`
	max-width: 1000px;
	min-height: 500px;
	margin: 50px auto 0;
	background-color: ${({ theme }) => theme.color.beige};
	border-radius: 10px;
	box-shadow: inset 0px 0px 20px 0px ${({ theme }) => theme.color.silverChalice};
`

export const StylingElement = styled.div`
	padding: 10px;
`
