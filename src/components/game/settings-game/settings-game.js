import styled from 'styled-components';
import { HeartSvg } from '../../../assets/svg';

const Wrapper = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	h1 {
		font-weight: 400;
		width: 170px;
		text-align: center;
	}
	@media only screen and (max-width: 550px) {
		h1 {
			font-size: 27px;
			font-weight: 400;
			width: 120px;
		}
	}
`;

const LivesWrapper = styled.div`
	width: 170px;
	display: flex;
	flex-direction: row-reverse;
	svg {
		padding-right: 10px;
	}
	@media only screen and (max-width: 550px) {
		width: 120px;
	}
	transition: all 2s ease-in-out;
`;

const SettingsGame = ({ rounds, lives }) => {
	return (
		<Wrapper>
			<h1 data-testid='rounds-id'>Round {rounds}</h1>
			<LivesWrapper data-testid='heart-id'>
				{[...Array(lives)].map((e, i) => (
					<HeartSvg key={lives - i} />
				))}
			</LivesWrapper>
		</Wrapper>
	);
};
export default SettingsGame;
