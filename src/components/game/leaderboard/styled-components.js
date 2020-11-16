import styled, { keyframes } from 'styled-components';

export const Wrapper = styled.div`
	padding: 0em;
`;

export const Title = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	h1 {
		font-size: 35px;
		margin: 0;
		padding: 5px 0;
		margin-bottom: 20px;
		margin-top: 5px;
		border-bottom: 3px solid black;
	}
`;

export const LeadboardTitle = styled(Title)`
	justify-content: flex-start;
	padding: 0px 16px;
	position: relative;
	h1 {
		font-size: 30px;
		border-bottom: 2px solid black;
		margin-left: 25px;
	}
	svg {
		position: absolute;
		left: 12px;
		top: -14px;
		transform: rotate(-35deg);
	}
`;

export const GameoverTitle = styled(Title)`
	h1 {
		font-size: 40px;
		margin-bottom: 16px;
		border-bottom: 0px solid black;
	}
`;

export const Table = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding-bottom: 2em;
	padding: 0px 25px;
	height: 100%;
	@media only screen and (max-width: 550px) {
		padding: 0px 16px;
	}
`;

const barLoad = keyframes`
from{
    transform: scaleX(0);
}
to{
    transform: scaleX(1)
}
`;

export const Leader = styled.div`
	padding: 8px 0px;
	margin-bottom: 8px;
	width: 100%;
	background-color: ${({ isUser }) => isUser && 'beige'};
`;

export const LeaderWrap = styled.div`
	display: flex;
`;

export const Bar = styled.div`
	height: 4px;
	border-radius: 2px;
	background-color: ${({ userColor }) => userColor};
`;

export const PodiumSvgWrapper = styled.div`
	padding: 8px;
	margin-right: 16px;
	position: relative;
	background-color: ${({ userColor }) => userColor};
	&:after {
		content: '';
		left: 0;
		bottom: 0;
		display: block;
		height: 6px;
		position: absolute;
		border: 0px transparent solid;
		border-left-width: 20px;
		border-right-width: 20px;
		border-bottom-width: 6px;
		border-bottom-color: #fff;
		transition: border-bottom-color 0.2s ease-in-out;
	}
`;

export const LeaderScore = styled.div`
	display: flex;
	align-items: center;
	opacity: 0.6;
	padding-top: 5px;
	svg {
		display: block;
		margin-right: 4px;
	}
`;

export const LeaderScoreTitle = styled.div`
	display: flex;
	align-items: center;
	opacity: 0.6;
	svg {
		display: block;
		margin-right: 4px;
	}
`;

export const Name = styled.h4`
	margin: 0;
`;

export const UserInput = styled.input`
	margin-left: 8px;
	height: 22px;
	width: 260px;
`;

export const UserWrapper = styled.div`
	display: flex;
	align-items: center;
	h4 {
		margin: 0;
	}
`;

export const UserInfoWrapper = styled.div``;

export const LeaderBar = styled.div`
	margin-top: 8px;
	animation-name: ${barLoad};
	animation-duration: 0.4s;
	animation-fill-mode: both;
	animation-timing-function: cubic-bezier(0.6, 0.2, 0.1, 1);
	transform-origin: left;
`;

export const RestartButton = styled.button`
	position: sticky;
	bottom: -1px;
	left: 0em;
	width: 100%;
	height: 50px;
	font-size: 26px;
	background-color: black;
	color: white;
	font-weight: 900;
	cursor: pointer;
	border: 0px;
`;
