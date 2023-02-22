/*
 * Spinner.styles.jsx
 *
 * Created on 20 febrero de 2023
 * Copyright (c)
 * Juan Manuel Chico <b>juanmanuelchico@hotmail.com</b>
 *
 */

//Dependencias
import styled from 'styled-components';

export const SpinnerContainer = styled.div`
	border: 4px solid rgb(255, 0, 0);
	border-left-color: transparent;
	border-bottom-color: transparent;
	width: 36px;
	height: 36px;
	border-radius: 22px;

	animation: spin 1s linear infinite;

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}

		100% {
			transform: rotate(360deg);
		}
	}
`;
