/*
 * Card.jsx
 *
 * Created on 20 febrero de 2023
 * Copyright (c)
 * Juan Manuel Chico <b>juanmanuelchico@hotmail.com</b>
 *
 */
//Dependencias
import React from 'react';
import { Container, Name, Avatar, SubContainer, Label, Status } from './Card.styles.jsx';

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
