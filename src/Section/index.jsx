import { Wrapper, StylingElement } from './styled.js'

const Section = ({ children }) => (
	<Wrapper>
		<StylingElement>{children}</StylingElement>
	</Wrapper>
)

export default Section
