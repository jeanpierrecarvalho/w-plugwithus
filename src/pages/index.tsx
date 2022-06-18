import { AnimatePage } from 'Atoms/AnimatePage';
import { Container } from 'Atoms/Container';
import { SeoHead } from 'Atoms/SeoHead';
import Typed from 'react-typed';

const IndexPage = () => {
	const talkAbout = [
		'React',
		'JavaScript',
		'TypeScript',
		'GraphQL',
		'NodeJS',
		'Jamstack',
		'Next.js',
		'RESTful APIs',
		'HTML',
		'CSS',
	];

	return (
		<AnimatePage>
			<SeoHead
				title="Software Architect & Senior Software Engineer & Consultant – Jean-Pierre Carvalho"
				description="A Front-End Software Engineer with a focus on JavaScript and React. I have more than 10 years experience working in software engineering and consulting."
				keywords={[
					'Software Engineer',
					'Jean-Pierre Carvalho',
					'Software Consulting',
					'Front-End',
					'Full-Stack',
					'React',
					'TypeScript',
					'JavaScript',
					'GraphQL',
					'CSS',
					'Tailwind',
				]}
			/>
			<Container>
				<h1 className="headline mt-4 md:mt-20 text-3xl md:text-5xl lg:text-6xl">
					Hey, I&apos;m Jean-Pierre Carvalho 👋
				</h1>
				<p className="my-8 text-lg">
					I am a passionate Software Architect and Software Engineer,
					specialised in fullstack development using React, NextJS, TypeScript
					and NodeJS. As an advocate for web performance and accessibility and
					an evangelist for the Jamstack, I create amazing web applications to
					make the internet a better place.
				</p>
				<p className="my-8 text-lg">
					You can talk to me about{' '}
					<Typed
						loop
						typeSpeed={80}
						backSpeed={20}
						strings={talkAbout}
						smartBackspace
						backDelay={1000}
						loopCount={0}
						showCursor
						cursorChar="|"
					/>
					.
				</p>
				<p className="hidden md:block">
					P.S. I specialize in creating software for clients ranging from
					individuals and small-businesses all the way to large enterprise
					corporations. What would you do if you had a software expert available
					at your fingertips?
				</p>
			</Container>
		</AnimatePage>
	);
};

export default IndexPage;
