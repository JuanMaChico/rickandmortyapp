/*
 * List.jsx
 *
 * Created on 20 febrero de 2023
 * Copyright (c)
 * Juan Manuel Chico <b>juanmanuelchico@hotmail.com</b>
 *
 */
//Dependencias
import React, { useEffect, useState } from 'react';
import { getEpisodes } from '../../Services/CharacterServices';
import Spinner from '../Spinner/Spinner';
import { Container, Title } from './List.styles';

/**
 * @description List the episodes
 * @param { string } title
 * @param { array } payload
 * */
const List = ({ title, payload }) => {
	//Lista de Episodios
	const [episodesList, setEpisodesList] = useState(false);

	//Id de los episodios
	const [episodes, setEpisodes] = useState(false);

	//Crear la petición de episodios
	const searchEpisodes = (data) => {
		if (data.episode) {
			return formatterIdEpisodes(data.episode);
		}
		if (data.characterOne && data.characterTwo) {
			if (formatterIdEpisodes(searchSharedEpisodes(data)) === '') {
				setEpisodesList(false);
				return false;
			}
			return formatterIdEpisodes(searchSharedEpisodes(data));
		}
	};

	// Formateo y me quedo con los números de episodios
	const formatterIdEpisodes = (data) => {
		let info = '';
		data.forEach((item) => {
			info = info + ',' + item.slice(item.lastIndexOf('/') + 1);
		});
		return info;
	};

	//Macheo episodios compartidos entre characters
	const searchSharedEpisodes = (data) => {
		let info = data.characterOne.episode.filter(
			(x) => data.characterTwo.episode.indexOf(x) !== -1,
		);
		return info;
	};

	useEffect(() => {
		if (episodes) {
			getEpisodes(episodes, setEpisodesList);
		} else {
			setEpisodesList(false);
		}
		setEpisodes(searchEpisodes(payload));
	}, [payload, episodes]);

	return (
		<Container>
			<Title>{title}</Title>
			<ul>
				{episodesList ? (
					Array.isArray(episodesList) ? (
						episodesList.map((item, key) => (
							<li key={key}>{`${item.id} - ${item.name} - ${item.air_date}`}</li>
						))
					) : (
						<Spinner />
					)
				) : (
					<li>
						{episodesList ? (
							`${episodesList.id} - ${episodesList.name} - ${episodesList.air_date}`
						) : (
							<p>Seleccione un personaje</p>
						)}
					</li>
				)}
			</ul>
		</Container>
	);
};

export default List;
