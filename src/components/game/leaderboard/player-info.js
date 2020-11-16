import {
	LeaderWrap,
	PodiumSvgWrapper,
	LeaderScore,
	LeaderScoreTitle,
	Name,
	UserInfoWrapper,
	UserInput,
	UserWrapper,
} from './styled-components';
import { CrownSvg, ScoreSvg } from '../../../assets/svg';
import { getColor, checkIsUser } from './utils';

const getUserName = (index, name) => {
	return `${index + 1}. ${name}`;
};

const isPodium = (index) => index < 3;

const PodiumCrown = ({ index }) => {
	if (!isPodium(index)) return null;
	return (
		<PodiumSvgWrapper userColor={getColor(index)}>
			<CrownSvg />
		</PodiumSvgWrapper>
	);
};

const UserLeadboard = ({ index, name, handleUsernameInput }) => {
	if (!checkIsUser(name)) return <Name>{getUserName(index, name)}</Name>;

	return (
		<UserWrapper>
			<h4>{index + 1}. </h4>
			<UserInput
				onBlur={handleUsernameInput}
				autoFocus
				placeholder='Write your Username'
			/>
		</UserWrapper>
	);
};

const PalyerInfo = ({ index, playerName, score, handleUsernameInput }) => {
	return (
		<LeaderWrap>
			<PodiumCrown index={index} />
			<UserInfoWrapper>
				<UserLeadboard
					index={index}
					name={playerName}
					handleUsernameInput={handleUsernameInput}
				/>
				<LeaderScore>
					<ScoreSvg />
					<LeaderScoreTitle>{score}</LeaderScoreTitle>
				</LeaderScore>
			</UserInfoWrapper>
		</LeaderWrap>
	);
};
export default PalyerInfo;
