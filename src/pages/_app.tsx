import { AnimatePresence } from 'framer-motion';
import { ApolloProvider } from '@apollo/client';
import { AppProps } from 'next/app';
import { client } from 'apollo-client';
import { ThemeProvider } from 'next-themes';
import Script from 'next/script';

import '../styles/index.css';
import { Layout } from 'Templates/Layout';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Script
				strategy="lazyOnload"
				src={`https://www.googletagmanager.com/gtag/js?id=284758341`}
			/>
			<Script id="ga-analytics">
				{`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '284758341');
          `}
			</Script>

			<ApolloProvider client={client}>
				<ThemeProvider attribute="class">
					<Layout>
						<AnimatePresence
							exitBeforeEnter
							initial={false}
							onExitComplete={() => window.scrollTo(0, 0)}
						>
							<Component {...pageProps} />
						</AnimatePresence>
					</Layout>
				</ThemeProvider>
			</ApolloProvider>
		</>
	);
}

export default MyApp;
