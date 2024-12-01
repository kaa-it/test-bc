import type { Meta, StoryObj } from '@storybook/react';

import { Text } from '../ui/Text';

const meta: Meta<typeof Text> = {
	title: 'Design System/Text',
	tags: ['autodocs'],
	component: Text,
};

export default meta;

type Story = StoryObj<typeof Text>;

export const TextStory: Story = {
	argTypes: {
		size: {
			options: [12, 18, 22, 25, 31, 45],
			control: { type: 'select' },
		},
		weight: {
			options: [400, 800],
			control: { type: 'select' },
		},
		as: {
			options: ['h1', 'h2', 'div', 'span'],
			control: { type: 'select' },
		},
		align: {
			options: ['center', 'left'],
			control: { type: 'select' },
		},
		uppercase: {
			control: { type: 'boolean' },
		},
		dynamic: {
			control: { type: 'boolean' },
		},
		fontStyle: {
			options: ['italic', 'normal'],
			control: { type: 'select' },
		},
		family: {
			options: [
				'open-sans',
				'ubuntu',
				'cormorant-garamond',
				'days-one',
				'merriweather',
			],
			control: { type: 'select' },
		},
	},
	render: (args) => {
		const loremText =
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id arcu aliquet, elementum nisi quis, condimentum nibh.';
		const title = args.as === 'h1' ? 'Sample Heading' : 'Sample Text';

		return (
			<>
				<Text {...args}>{title}</Text>
				<Text {...args}>{loremText}</Text>
			</>
		);
	},
};
