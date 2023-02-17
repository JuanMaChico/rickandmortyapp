import styled, { css } from 'styled-components';

export const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 380px;
	height: 150px;
	border-radius: 12px;
	margin: 12px;
	background-color: #202329eb;

	border-style: solid;
	border-color: #202329eb;

	${(props) =>
		props.selected &&
		css`
			border-color: red;
		`}

`;
export const SubContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 250px;
	height: 150px;
`;

export const Avatar = styled.img`
	width: 150px;
	height: 150px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 10px 0px 0px 10px;
`;

export const Name = styled.h2`
	color: #cfcfcf;
`;

export const Label = styled.div`
	display: flex;
	align-items: center;
	flex-direction: row;
	justify-content: space-evenly;
	color: #cfcfcf;
`;

export const Status = styled.div`
	width: 12px;
	height: 12px;
	margin-right: 12px;
	border-radius: 20px;
	${(props) =>
		props.status === 'Alive' &&
		css`
			background-color: #29f300;
		`}
	${(props) =>
		props.status === 'Dead' &&
		css`
			background-color: #ee1414;
		`}
	${(props) =>
		props.status === 'unknown' &&
		css`
			background-color: #6d6d6d;
		`}
`;
