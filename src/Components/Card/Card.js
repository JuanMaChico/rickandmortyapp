import React from 'react';
import { Container, Name, Specie, Status, Avatar, SubContainer } from './Card.styles.js';

const Card = () => {
	return (
		<Container>
			<Avatar>Avatar</Avatar>
			<SubContainer>
				<Name>Name</Name>
				<Specie>Specie</Specie>
				<Status>Status</Status>
			</SubContainer>
		</Container>
	);
};

export default Card;
