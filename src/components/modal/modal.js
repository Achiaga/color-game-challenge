import styled, { keyframes } from 'styled-components';

const Wrapper = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	height: 100vh;
	width: 100vw;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #00000094;
	z-index: 999;
`;

const revealLeaders = keyframes`
  from{
      transform: scale(0.5);
      opacity: 0;
  }
  to{
      transform: none;
      transform: scale(1);
      opacity: 1;
  }
`;

const BoxModal = styled.div`
	width: 50%;
	max-height: 70%;
	background-color: white;
	border-radius: 8px;
	animation-name: ${revealLeaders};
	animation-duration: 0.3s;
	animation-fill-mode: both;
	animation-timing-function: ease-in-out;
	overflow: scroll;
	max-width: 560px;
	@media only screen and (max-width: 550px) {
		width: 90%;
		height: 85%;
	}
`;

const Modal = ({ children }) => {
	return (
		<Wrapper>
			<BoxModal>{children}</BoxModal>
		</Wrapper>
	);
};

export default Modal;
