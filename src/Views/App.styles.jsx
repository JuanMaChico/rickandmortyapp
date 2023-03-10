import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	max-width: 100%;
	max-height: 50%;
`;

export const SubContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	@media (min-width: 830px) {
		flex-wrap: nowrap;
	}
`;

export const SubContainerList = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	@media (min-width: 1700px) {
		flex-wrap: nowrap;
	}
`;

export const Plus = styled.img`
	cursor: pointer;
	margin: 12px;
	&:hover {
		transform: scale(1.4);
	}
`;
