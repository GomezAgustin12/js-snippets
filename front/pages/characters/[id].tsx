import { Character } from '../../types/character';
import Image from 'next/image';
import imageLoader from '../../utils';
import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';
import Layout from '../../components/Layout';

const CharacterPage = ({ character }: { character: Character }) => {
	const router = useRouter();
	return (
		<div>
			<h1>{character.name}</h1>);
			<Image
				src={character.image}
				alt={character.image}
				width='200'
				height='200'
				loader={imageLoader}
				unoptimized
			/>
		</div>
	);
};

CharacterPage.getLayout = (page: typeof CharacterPage) => {
	return <Layout>{page}</Layout>;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
	const res = await fetch(`https://rickandmortyapi.com/api/character/${context.query.id}`);
	const character = await res.json();
	return { props: { character } };
};

export default CharacterPage;
