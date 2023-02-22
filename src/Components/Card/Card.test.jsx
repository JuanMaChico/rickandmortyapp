import { beforeEach, describe, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Card from './Card';

const Character = {
	name: 'Rick Sanchez',
	status: 'Alive',
	species: 'Human',
	image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
};

describe('Cards', () => {
	beforeEach(() => {
		render(<Card handler={() => {}} select={true} key={1} payload={Character} />);
	});

	test('should render name in Card', () => {
		expect(screen.getByText(Character.name)).toBeDefined();
	});

	test('should render status in Card', () => {
		expect(screen.getByText(/Alive/i)).toBeDefined();
	});

	test('should render species in Card', () => {
		expect(screen.getByText(/Human/i)).toBeDefined();
	});
});
