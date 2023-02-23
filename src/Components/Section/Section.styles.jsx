/*
 * Section.styles.jsx
 *
 * Created on 20 febrero de 2023
 * Copyright (c)
 * Juan Manuel Chico <b>juanmanuelchico@hotmail.com</b>
 *
 */

//Dependencias
import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-wrap: wrap;
	flex-direction: row;
	justify-content: center;
	text-align: center;
	margin: 12px 0px 12px 0px;
	height: 70vh;
	overflow-y: auto;
`;

export const Title = styled.h1`
	font-size: 24px;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 50px;
	margin: 12px;
`;
