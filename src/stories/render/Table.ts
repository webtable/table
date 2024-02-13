import { html, nothing } from 'lit';
import { TableRows } from './TableRow';
import TableHeaderRow from './TableHeaderRow';
import type { CellContent } from './TableCell';
import '../../Table';

export interface TableOptions {
	bordered?: boolean;
	borderless?: boolean;
	caption?: 'top' | 'bottom';
	compact?: boolean;
	hover?: boolean;
	striped?: boolean;
	stripedColumns?: boolean;
}

export interface TableContent {
	title?: string;
	header?: CellContent[];
	rows: Array<CellContent[]>;
}

export interface TableArgs extends TableContent, TableOptions {}

export default function Table(args: TableArgs) {
	const { title, header, rows, ...variants } = args;
	const { bordered, borderless, compact, hover, striped, stripedColumns } = variants;

	return html`
		<wt-table
			?bordered="${ bordered }"
			?borderless="${ borderless }"
			?compact="${ compact }"
			?hover="${ hover }"
			?striped="${ striped }"
			?striped-columns="${ stripedColumns }"
		>
			${ header ? TableHeaderRow(header) : nothing }
			${ TableRows(rows) }
			<p slot="caption">${ title ?? '' }</p>
		</wt-table>
	`;
}
