import Section from '../Components/Section/Section';
import { Container, SubContainer, Plus } from '../Views/App.styles';
import { useEffect, useState } from 'react';
import plusIMG from '../Assets/Plus.png';

function App() {
	const [data, setData] = useState('');
	const [data1, setData1] = useState('');

	useEffect(() => {
		fetch('https://rickandmortyapi.com/api/character?page=1')
			.then((response) => response.json())
			.then((json) => setData(json));

		fetch('https://rickandmortyapi.com/api/character?page=2')
			.then((response) => response.json())
			.then((json) => setData1(json));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Container>
			<Plus
				src={plusIMG}
				alt="Plus"
				width={40}
				height={40}
				onClick={() => {
					alert('hola');
				}}
			/>
			<SubContainer>
				<Section payload={data} />
				<Section payload={data1} />
			</SubContainer>
		</Container>
	);
}

export default App;
