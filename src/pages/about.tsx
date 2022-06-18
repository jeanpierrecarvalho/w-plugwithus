import { IEducation, IJob, IPodcast } from '@types';

import { client } from 'apollo-client';
import { gql } from '@apollo/client';
import { mapEducation } from 'utils/mappings/mapEducation';
import { mapJobs } from 'utils/mappings/mapJobs';
import { mapPodcasts } from 'utils/mappings/mapPodcasts';
import { NextPage } from 'next';

import { AnimatePage } from 'Atoms/AnimatePage';
import { Button } from 'Atoms/Button';
import { Container } from 'Atoms/Container';
import { Education } from 'Organisms/Education';
import { Icon } from 'Atoms/Icon';
import { PodcastList } from 'Molecules/PodcastList';
import { SeoHead } from 'Atoms/SeoHead';
import { WorkExperience } from 'Organisms/WorkExperience';

interface IProps {
	podcasts: IPodcast[];
	jobs: IJob[];
	education: IEducation[];
}

const AboutPage: NextPage<IProps> = ({ podcasts, jobs, education }) => {
	console.log(jobs);
	return (
		<AnimatePage>
			<SeoHead
				title="About Jean-Pierre, a Software Architect and Senior Fullstack Developer and Consultant in Portugal"
				description="As a passionate Software Architect and Senior Fullstack Developer, specialised in fullstack development, I create amazing websites and web apps to make the internet a better place."
			/>
			<Container>
				<h1 className="headline text-3xl md:text-5xl lg:text-6xl mt-8">
					Hey, I&apos;m Jean-Pierre Carvalho
				</h1>
				<h2 className="font-bold text-xl md:text-2xl mt-2">
					Software Architect and Senior Fullstack Developer from Portugal
				</h2>
				<p className="mt-8">
					As a passionate Software Architect and Senior Fullstack Developer, I
					create amazing websites and web apps to make the internet a better
					place. I am an advocate for web performance and accessibility as well
					as a JAMstack enthusiast with experience in serverless technologies.
				</p>
				<p className="my-4">
					I am 29 years old and have been a web developer for as long as I can
					think. The technologies I work with are JavaScript, HTML and CSS with
					a focus on the frameworks NodeJs, React.js, NextJs and Express. I use
					code not only to do my day-to-day job, but also to solve everyday
					problems I come across.
				</p>
				<p>
					When I am not writing code I love to spend time with my girlfriend and
					my dog at home in Porto, Portugal or travelling around the world.
					Furthermore I enjoy cooking fresh food when I come home after a long
					day at the office.
				</p>
				<h2 className="headline mt-12 mb-4 text-4xl">Podcasts I enjoy</h2>

				{/* <PodcastList podcasts={podcasts} /> */}

				<h2 className="headline mt-12 mb-4 text-4xl">Experience</h2>

				<WorkExperience jobs={jobs} />

				<h2 className="headline mt-12 mb-4 text-4xl">Education</h2>
				<p className="mb-6">
					I am mostly self-taught, but here are some of the most relevant
					certifications I have achieved:
				</p>

				{/* <Education education={education} /> */}

				<div className="flex justify-center mt-8">
					<Button
						// href="/cv-2021.pdf"
						download={true}
						className="group flex gap-2 whitespace-nowrap"
					>
						<div className="w-6 text-blue-500 group-hover:text-off-white dark:text-purple-500">
							<Icon icon="DOWNLOAD" />
						</div>
						<div className="block headline group-hover:text-off-white">
							Download my CV
						</div>
					</Button>
				</div>
			</Container>
		</AnimatePage>
	);
};

export async function getStaticProps() {
	// const { data } = await client.query({
	// 	query: gql`
	// 		query AboutPageQuery {
	// 			podcasts(orderBy: position_ASC) {
	// 				id
	// 				name
	// 				url
	// 				logo {
	// 					url
	// 				}
	// 			}
	// 			jobs(orderBy: fromDate_DESC) {
	// 				id
	// 				jobTitle
	// 				fromDate
	// 				toDate
	// 				description {
	// 					markdown
	// 				}
	// 				company {
	// 					name
	// 					url
	// 					logo {
	// 						url
	// 					}
	// 				}
	// 				skills {
	// 					skill
	// 				}
	// 			}
	// 			educations(orderBy: date_DESC) {
	// 				id
	// 				course
	// 				date
	// 				courseContents {
	// 					skill
	// 				}
	// 				institute {
	// 					name
	// 					url
	// 					logo {
	// 						url
	// 					}
	// 				}
	// 			}
	// 		}
	// 	`,
	// });

	const { data } = await client.query({
		query: gql`
			query AboutPageQuery {
				jobs(orderBy: fromDate_DESC) {
					id
					jobTitle
					fromDate
					toDate
					description
					company {
						name
						url
						logo
					}
					technologies
				}
			}
		`,
	});

	return {
		props: {
			podcasts: [], //mapPodcasts(data.podcasts),
			education: [], //mapEducation(data.educations),
			jobs: mapJobs(data.jobs),
		},
	};
}

export default AboutPage;
