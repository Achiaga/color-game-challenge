import styled from 'styled-components';

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 28px;
	text-align: center;
	padding-top: 20px;
	h1 {
		margin: 10px 0;
	}
`;

const TileLetter = styled.span`
	border-radius: 5px;
	display: inline-block;
	width: 50px;
	text-align: center;
	background-color: ${({ bg }) => bg};
	color: ${({ color }) => (color ? color : 'white')};
	padding: 0 5px;
	margin: 0 2px;
	box-shadow: 0 6px 12px -2px rgba(50, 50, 93, 0.25),
		0 3px 7px -3px rgba(0, 0, 0, 0.3);
	@media only screen and (max-width: 550px) {
		width: 30px;
		font-size: 45px;
	}
`;
const TileWord = styled(TileLetter)`
	width: 180px;
	@media only screen and (max-width: 550px) {
		width: 140px;
	}
`;

const Header = () => {
	return (
		<Wrapper>
			<h1>
				<TileLetter bg='#ff3333'>R</TileLetter>
				<TileLetter bg='#37d437'>G</TileLetter>
				<TileLetter bg='#1bdefd'>B</TileLetter>
				<TileWord bg='white' color='black'>
					GAME
				</TileWord>
			</h1>
		</Wrapper>
	);
};
export default Header;
