import { client } from 'apollo-client';
import format from 'date-fns/format';
import { gql } from '@apollo/client';
import { IBlogPost } from '@types';
import Markdown from 'react-markdown';
import { NextPage } from 'next';

import { AnimatePage } from 'Atoms/AnimatePage';
import { Container } from 'Atoms/Container';
import { SeoHead } from 'Atoms/SeoHead';

import { mdxComponents } from 'utils/mdxComponents';

interface IProps {
	data: any;
}

const PostPage: NextPage<IProps> = ({ data }) => {
	const numOfWords = data.blogs[0].content.split(' ').length;
	const readTime = Math.ceil(numOfWords / 250);

	return (
		<>
			<AnimatePage>
				<SeoHead
					title={`${data.blogs[0].title} - Jacob Herper's Blog`}
					description={data.blogs[0].seoDescription}
				/>
				<Container>
					<h1 className="headline text-3xl md:text-4xl lg:text-5xl mt-8">
						{data.blogs[0].title}
					</h1>
					<p className="my-8 flex justify-between text-sm md:text-md">
						<em>~{readTime} minute read</em>
						<span>
							Written on{' '}
							{format(new Date(data.blogs[0].publishedDate), 'do MMM yyyy')}
						</span>
					</p>
					<Markdown components={mdxComponents}>
						{data.blogs[0].content}
					</Markdown>
				</Container>
			</AnimatePage>
		</>
	);
};

export async function getStaticPaths() {
	const { data } = await client.query({
		query: gql`
			query PostsQuery {
				blogs {
					slug
					title
				}
			}
		`,
	});

	return {
		paths: data.blogs.map(({ slug }: IBlogPost) => ({
			params: { slug },
		})),
		fallback: false,
	};
}

type Params = {
	params: { slug: IBlogPost['slug'] };
};

export async function getStaticProps({ params }: Params) {
	const { data } = await client.query({
		query: gql`
			query PostPageQuery($slug: String!) {
				blogs(where: { slug: $slug }) {
					content
					seoDescription
					publishedDate
					slug
					title
				}
			}
		`,
		variables: { slug: params.slug },
	});

	return {
		props: {
			data: { ...data },
		},
	};
}

export default PostPage;
