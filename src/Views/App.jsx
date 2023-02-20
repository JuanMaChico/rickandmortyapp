import Section from '../Components/Section/Section';
import { Container, SubContainer, Plus } from './App.styles';
import { useEffect, useState } from 'react';
import plusIMG from '../Assets/Plus.png';
import List from '../Components/List/List';

function App() {
	const [characterListOne, setCharacterListOne] = useState('');
	const [characterListTwo, setCharacterListTwo] = useState('');

	const [characterOne, setCharacterOne] = useState(false);
	const [characterTwo, setCharacterTwo] = useState(false);

	const [page, setPage] = useState(1);

	useEffect(() => {
		fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
			.then((response) => response.json())
			.then((json) => {
				setCharacterListOne(json.results.slice(0, 10));
				setCharacterListTwo(json.results.slice(10, 20));
			});
	}, [page]);

	return (
		<Container>
			<Plus
				src={plusIMG}
				alt="Plus"
				width={40}
				height={40}
				onClick={() => {
					setPage(page + 1);
					setCharacterOne(false);
					setCharacterTwo(false);
				}}
			/>
			<SubContainer>
				<Section
					title={'Character #1'}
					payload={characterListOne}
					character={characterOne}
					setCharacter={setCharacterOne}
				/>
				<Section
					title={'Character #2'}
					payload={characterListTwo}
					character={characterTwo}
					setCharacter={setCharacterTwo}
				/>
			</SubContainer>
			<SubContainer>
				<List payload={characterOne} title={'Character #1 - Only Episodes'} />
				<List
					payload={{ characterOne, characterTwo }}
					title={'Character #1 & #2 - Shared Episodes'}
				/>
				<List payload={characterTwo} title={'Character #2 - Only Episodes'} />
			</SubContainer>
		</Container>
	);
}

export default App;
