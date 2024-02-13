import { html } from 'lit';
import type { CellContent } from './TableCell';
import '../../TableHeaderCell';

export default function TableHeaderCell(cell: CellContent) {
	return html`<wt-header-cell>${ cell }</wt-header-cell>`;
}

export const TableHeaderCells = (cells: CellContent[]) => cells.map(cell => TableHeaderCell(cell));
