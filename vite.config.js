/*
 * vite.config.js
 *
 * Created on 20 febrero de 2023
 * Copyright (c)
 * Juan Manuel Chico <b>juanmanuelchico@hotmail.com</b>
 *
 */

//Dependencias
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
	plugins: [react()],
	test: {
		environment: 'jsdom',
		globals: true,
	},
});
