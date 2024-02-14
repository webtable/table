import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import Table, { type TableContent, type TableArgs } from './render/Table';

export default {
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
	args: {
		bordered: false,
		borderless: false,
		compact: false,
		hover: false,
		striped: false,
		stripedColumns: false,
	},
} satisfies Meta<TableArgs>;

type Story = StoryObj<TableArgs>;

const intl = new Intl.NumberFormat(navigator.language);

const basicContent: TableContent = {
	title: 'Earth\'s Oceans',
	header: ['#', 'Ocean', html`Area (km<sup>2</sup>)`, html`Volume (km<sup>3</sup>)`],
	rows: [
		[1, 'Pacific Ocean', intl.format(168723000), intl.format(669880000)],
		[2, 'Atlantic Ocean', intl.format(85133000), intl.format(310410900)],
		[3, 'Indian Ocean', intl.format(70560000), intl.format(264000000)],
		[4, 'Antarctic/Southern Ocean', intl.format(21960000), intl.format(71800000)],
		[5, 'Arctic Ocean', intl.format(15558000), intl.format(18750000)],
	],
};

export const Basic: Story = {
	render: (args: TableArgs) => Table({ ...args, ...basicContent }),
};
