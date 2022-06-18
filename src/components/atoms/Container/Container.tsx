import { FC } from 'react';

const Container: FC = ({ children }) => {
	return (
		<div className="mx-auto w-full px-4 lg:mx-20 md:max-w-5xl">{children}</div>
	);
};

export { Container };
