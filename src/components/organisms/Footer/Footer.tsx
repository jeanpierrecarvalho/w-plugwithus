import { SocialIcons } from 'Molecules/SocialIcons';

const Footer = () => {
	return (
		<footer className="flex justify-between mb-32 lg:mb-8 px-4 lg:mx-20 py-8">
			<span>&copy; {new Date().getFullYear()} Jean-Pierre Carvalho</span>
			<SocialIcons
				profiles={[
					{
						name: 'Github',
						url: 'https://github.com/jeanpierrecarvalho',
						icon: 'GITHUB',
					},
					{
						name: 'LinkedIn',
						url: 'https://www.linkedin.com/in/jean-pierre-carvalho-b3a78b8b',
						icon: 'LINKEDIN',
					},
					{
						name: 'Twitter',
						url: 'https://twitter.com/jeanpierrecarv',
						icon: 'TWITTER',
					},
				]}
			/>
		</footer>
	);
};

export { Footer };
