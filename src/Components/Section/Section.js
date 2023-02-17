import React from 'react';
import Card from '../Card/Card';
import { Container } from './Section.styles';

const Section = ({ payload }) => {
	return (
		<Container>
			{payload.results && payload.results.map((item) => <Card payload={item} />)}
		</Container>
	);
};

export default Section;
