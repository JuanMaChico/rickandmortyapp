import { beforeEach, describe, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import List from './List';

const Character = {
	name: 'Rick Sanchez',
	status: 'Alive',
	species: 'Human',
	image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
	episode: [
		'https://rickandmortyapi.com/api/episode/1',
		'https://rickandmortyapi.com/api/episode/2',
	],
};

describe('List Episodes', () => {
	beforeEach(() => {
		render(<List title={'Character #1 - Only Episodes'} payload={Character} />);
	});

	test('should render section', () => {
		expect(screen.getByText('Character #1 - Only Episodes')).toBeDefined();
	});

	test('should render section', () => {
		expect(screen.getByText('Seleccione un personaje')).toBeDefined();
	});
});
