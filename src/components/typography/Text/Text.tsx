import classNames from 'classnames';
import { FC } from 'react';

type Text = {
	type:
		| 'Display'
		| 'Heading1'
		| 'Heading2'
		| 'Heading3'
		| 'Heading4'
		| 'Heading5'
		| 'Heading6'
		| 'BodyText'
		| 'BodySmallText'
		| 'BodyExtraSmallText';

	color: string;

	className?: string;
};

export type HeadingProps = Text;

const Text: FC<HeadingProps> = (props) => {
	const classes = '';

	console.log(props);
	const textColor = props.color ? `text-${props.color}` : '';

	const displayClass = `text-[36px] ${textColor}`;
	const heading1Class = `text-[32px] ${textColor}`;
	const heading2Class = `text-[28px] ${textColor}`;
	const heading3Class = `text-[26px] ${textColor}`;
	const heading4Class = `text-[22px] ${textColor}`;
	const heading5Class = `text-[20px] ${textColor}`;
	const heading6Class = `text-[18px] ${textColor}`;
	const bodyTextClass = `text-[16px] ${textColor}`;
	const bodySmallTextClass = `text-[14px] ${textColor}`;
	const bodyExtraSmallTextClass = `text-[12px] ${textColor}`;

	const { className, children } = props;

	switch (props.type) {
		case 'Display':
			return (
				<span className={classNames(displayClass, className)}>{children}</span>
			);
		case 'Heading1':
			return (
				<h1 className={classNames(heading1Class, className)}>{children}</h1>
			);
		case 'Heading2':
			return (
				<h2 className={classNames(heading2Class, className)}>{children}</h2>
			);
		case 'Heading3':
			return (
				<h3 className={classNames(heading3Class, className)}>{children}</h3>
			);
		case 'Heading4':
			return (
				<h4 className={classNames(heading4Class, className)}>{children}</h4>
			);
		case 'Heading5':
			return (
				<h5 className={classNames(heading5Class, className)}>{children}</h5>
			);
		case 'Heading6':
			return (
				<h6 className={classNames(heading6Class, className)}>{children}</h6>
			);
		case 'BodyText':
			return (
				<span className={classNames(bodyTextClass, className)}>{children}</span>
			);
		case 'BodySmallText':
			return (
				<span className={classNames(bodySmallTextClass, className)}>
					{children}
				</span>
			);
		case 'BodyExtraSmallText':
			return (
				<span className={classNames(bodyExtraSmallTextClass, className)}>
					{children}
				</span>
			);
		default:
			return <span className={classNames(classes, className)}>{children}</span>;
	}
};

export { Text };
