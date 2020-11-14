import styled from 'styled-components';

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 28px;
`;

const Header = () => {
	return (
		<Wrapper>
			<h1>RGB Game</h1>
		</Wrapper>
	);
};
export default Header;
