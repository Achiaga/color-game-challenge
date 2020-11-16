import { Bar, LeaderBar } from './styled-components';
import { getColor } from './utils';

const getWidth = (score, maxScore) => {
	return (score / maxScore) * 100 + '%';
};

const PlayerBar = ({ index, score, maxScore }) => {
	return (
		<LeaderBar style={{ animationDelay: `${0.4 + index * 0.2}s` }}>
			<Bar
				userColor={getColor(index)}
				style={{ width: getWidth(score, maxScore) }}
			/>
		</LeaderBar>
	);
};

export default PlayerBar;
