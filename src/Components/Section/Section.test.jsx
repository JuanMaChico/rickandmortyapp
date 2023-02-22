import { beforeEach, describe, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Section from './Section';

const Character = {
	name: 'Rick Sanchez',
	status: 'Alive',
	species: 'Human',
	image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
};

const List = [
	'https://rickandmortyapi.com/api/episode/1',
	'https://rickandmortyapi.com/api/episode/2',
	'https://rickandmortyapi.com/api/episode/3',
	'https://rickandmortyapi.com/api/episode/4',
	'https://rickandmortyapi.com/api/episode/5',
	'https://rickandmortyapi.com/api/episode/6',
	'https://rickandmortyapi.com/api/episode/7',
];

describe('Section', () => {
	beforeEach(() => {
		render(
			<Section
				title={'Character #1'}
				payload={List}
				character={Character}
				setCharacter={() => {}}
			/>,
		);
	});

	test('should render section', () => {
		expect(
			render(
				<Section
					title={'Character #1'}
					payload={List}
					character={Character}
					setCharacter={() => {}}
				/>,
			),
		);
	});

	test('should render title in section', () => {
		expect(screen.getByText('Character #1')).toBeDefined();
	});
});
