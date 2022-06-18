import { Text } from './Text';

export default {
	title: 'typography/Text',
	component: Text,
	argTypes: {
		color: {
			options: ['black', 'white'],
			control: { type: 'radio' },
		},
		type: {
			options: [
				'Display',
				'Heading1',
				'Heading2',
				'Heading3',
				'Heading4',
				'Heading5',
				'Heading6',
				'BodyText',
				'BodySmallText',
				'BodyExtraSmallText',
			],
			control: { type: 'select' },
		},
	},
};

const Template = ({ type, color, ...rest }: any) => {
	return (
		<Text type={type} color={color}>
			sdfs
		</Text>
	);
};

export const ExampleStory = Template.bind({ type: 'Display', color: 'black' });
