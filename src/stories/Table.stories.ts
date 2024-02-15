import type { Meta, StoryObj } from '@storybook/web-components';
import Table, { type TableArgs } from './Table';

export default {
	render: Table,
	tags: ['autodocs'],
	component: 'wt-table',
	title: 'Example/Web Table',
	argTypes: {
		bordered: {
			name: 'Bordered',
			control: 'boolean',
			description: 'Adds borders to the table.',
			table: {
				defaultValue: { summary: false },
			},
		},
		borderless: {
			name: 'Borderless',
			control: 'boolean',
			description: 'Removes all borders from the table.',
			table: {
				defaultValue: { summary: false },
			},
		},
		captionSide: {
			name: 'Caption Side',
			control: 'select',
			options: ['bottom', 'top'],
			description: 'Controls the location of the table\'s caption.',
			table: {
				defaultValue: { summary: 'bottom' },
			},
		},
		compact: {
			name: 'Compact',
			control: 'boolean',
			description: 'Reduces the vertical padding of all rows.',
			table: {
				defaultValue: { summary: false },
			},
		},
		dividers: {
			name: 'Dividers',
			control: 'boolean',
			description: 'Adds a diving border between table sections.',
			table: {
				defaultValue: { summary: false },
			},
		},
		hover: {
			name: 'Hover',
			control: 'boolean',
			description: 'Adds a background to a row when the mouse hovers over it.',
			table: {
				defaultValue: { summary: false },
			},
		},
		striped: {
			name: 'Striped',
			control: 'boolean',
			description: 'Adds a striped background to the rows.',
			table: {
				defaultValue: { summary: false },
			},
		},
		stripedColumns: {
			name: 'Striped Columns',
			control: 'boolean',
			description: 'Adds a striped background to the columns.',
			table: {
				defaultValue: { summary: false },
			},
		},
	},
} satisfies Meta<TableArgs>;

type Story = StoryObj<TableArgs>;

export const Basic: Story = {
	args: {
		bordered: false,
		borderless: false,
		compact: false,
		dividers: true,
		hover: false,
		striped: false,
		stripedColumns: false,
	},
};
