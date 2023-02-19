import React from 'react';
import { Container, Name, Avatar, SubContainer, Label, Status } from './Card.styles.js';

const Card = ({ payload, handler, select }) => {
	return (
		<Container
			selected={select.id === payload.id}
			onClick={() => {
				handler(payload);
			}}
		>
			<Avatar src={payload.image} />
			<SubContainer>
				<Name>{payload.name}</Name>
				<Label>
					<Status status={payload.status} />
					{payload.status} - {payload.species}
				</Label>
			</SubContainer>
		</Container>
	);
};

export default Card;
