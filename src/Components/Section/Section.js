import React from 'react';
import Card from '../Card/Card';
import { Container, Title } from './Section.styles';

const Section = ({ title, payload, setCharacter, character }) => {
	return (
		<Container>
			<Title>{title}</Title>
			{payload &&
				payload.map((item, key) => (
					<Card handler={setCharacter} select={character} key={key} payload={item} />
				))}
		</Container>
	);
};

export default Section;
