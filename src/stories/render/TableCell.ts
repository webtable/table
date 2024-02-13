import { html, type TemplateResult } from 'lit';
import '../../TableCell';

export type CellContent = number | string | TemplateResult;

export default function TableCell(cell: CellContent) {
	return html`<wt-cell>${ cell }</wt-cell>`;
}

export const TableCells = (cells: CellContent[]) => cells.map(cell => TableCell(cell));
