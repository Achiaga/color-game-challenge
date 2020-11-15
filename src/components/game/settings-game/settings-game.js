import styled from 'styled-components';

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

const SettingsGame = ({ rounds }) => {
	return (
		<Wrapper>
			<h1>Rounds: {rounds}</h1>
		</Wrapper>
	);
};
export default SettingsGame;
