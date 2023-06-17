import React from 'react'
import { HeaderWrapper, Title, Timer } from './styled.js'
import { useCurrentDate } from '../useCurrentDate.js'

const Header = ({ title }) => {
	const { time } = useCurrentDate()

	const showingNowDate = time =>
		time.toLocaleDateString(undefined, {
			weekday: 'long',
			day: 'numeric',
			month: 'long',
			year: 'numeric',
			hour: '2-digit',
			minute: '2-digit',
			second: '2-digit',
		})

	return (
		<HeaderWrapper>
			<Timer>Dzisiaj jest: {showingNowDate(time)}</Timer>
			<Title>{title}</Title>
		</HeaderWrapper>
	)
}

export default Header
