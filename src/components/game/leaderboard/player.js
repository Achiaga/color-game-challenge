import { useState, useEffect } from 'react';
import { Leader } from './styled-components';
import PlayerInfo from './player-info';
import PlayerBar from './player-bar';
import { checkIsUser } from './utils';

const Player = ({ index, score, name, maxScore, handleUpdateLeaderBoard }) => {
	const [playerName, setPlayerName] = useState(name);

	useEffect(() => {
		setPlayerName(name);
	}, [name]);

	const handleUsernameInput = (e) => {
		handleUpdateLeaderBoard(e.target.value);
		setPlayerName(e.target.value);
	};

	return (
		<Leader isUser={checkIsUser(name)}>
			<PlayerInfo
				index={index}
				playerName={playerName}
				score={score}
				handleUsernameInput={handleUsernameInput}
			/>
			<PlayerBar index={index} score={score} maxScore={maxScore} />
		</Leader>
	);
};

export default Player;
