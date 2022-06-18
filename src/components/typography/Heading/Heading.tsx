import classNames from 'classnames';
import { FC } from 'react';

type Heading = {
	className?: string;
};

export type HeadingProps = Heading;

const classes = 'text-white';

const Heading: FC<HeadingProps> = (props) => {
	const { className, children } = props;

	return <h1 className={classNames(classes, className)}>{children}</h1>;
};

export { Heading };
