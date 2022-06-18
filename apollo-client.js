import { ApolloClient, InMemoryCache } from '@apollo/client';

const GRAPHCMS_CDN_API_URL = 'https://api-eu-central-1.graphcms.com';
const GRAPHCMS_VERSION = 'v2';
const GRAPHCMS_PROJECT_ID = 'cl196maxfk3rn01z01hthgzxm';
const GRAPHCMS_ENV = 'master';

const defaultOptions = {
	watchQuery: {
		fetchPolicy: 'no-cache',
	},
	query: {
		fetchPolicy: 'no-cache',
	},
};

export const client = new ApolloClient({
	uri: `${GRAPHCMS_CDN_API_URL}/${GRAPHCMS_VERSION}/${GRAPHCMS_PROJECT_ID}/${GRAPHCMS_ENV}`,
	cache: new InMemoryCache(),
	defaultOptions: defaultOptions,
});
