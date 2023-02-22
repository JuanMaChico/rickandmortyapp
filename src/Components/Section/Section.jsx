import React from 'react';
import Card from '../Card/Card.jsx';
import { Container, Title } from './Section.styles';
import Spinner from '../Spinner/Spinner';

const Section = ({ title, payload, setCharacter, character }) => {
	return (
		<Container>
			<Title>{title}</Title>
			{payload ? (
				payload.map((item, key) => (
					<Card handler={setCharacter} select={character} key={key} payload={item} />
				))
			) : (
				<Spinner />
			)}
		</Container>
	);
};

export default Section;
