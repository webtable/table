import { html } from 'lit';
import { TableCells, type CellContent } from './TableCell';
import '../../TableRow';

export default function TableRow(cells: CellContent[]) {
	return html`<wt-row>${ TableCells(cells) }</wt-row>`;
}

export const TableRows = (rows: Array<CellContent[]>) => rows.map(cells => TableRow(cells));
