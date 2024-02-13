import { html } from 'lit';
import type { CellContent } from './TableCell';
import { TableHeaderCells } from './TableHeaderCell';
import '../../TableHeaderRow';

export default function TableHeaderRow(cells: CellContent[]) {
	return html`<wt-header-row>${ TableHeaderCells(cells) }</wt-header-row>`;
}
