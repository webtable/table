import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import '../index';

export interface TableArgs {
	bordered?: boolean;
	borderless?: boolean;
	captionSide?: 'top' | 'bottom';
	compact?: boolean;
	dividers?: boolean;
	hover?: boolean;
	striped?: boolean;
	stripedColumns?: boolean;
}

const areas = new Map<string, number>([
	['pacific', 168723000],
	['atlantic', 85133000],
	['indian', 70560000],
	['antarctic', 21960000],
	['arctic', 15558000],
]);
const volumes = new Map([
	['pacific', 669880000],
	['atlantic', 310410900],
	['indian', 264000000],
	['antarctic', 71800000],
	['arctic', 18750000],
]);
const totalArea = [...areas.values()].reduce((total, area) => total + area, 0);
const totalVolume = [...volumes.values()].reduce((total, volume) => total + volume, 0);

const intl = new Intl.NumberFormat(navigator.language);

export default function Table(args: TableArgs) {
	const { bordered, borderless, captionSide, compact, dividers, hover, striped, stripedColumns } = args;

	return html`
		<style>
			wt-table > *:not(p) > :nth-last-child(-n + 2), wt-footer-row {
				text-align: right;
			}
		</style>
		<wt-table
			?bordered="${ bordered }"
			?borderless="${ borderless }"
			caption-side="${ ifDefined(captionSide) }"
			?compact="${ compact }"
			?dividers="${ dividers }"
			?hover="${ hover }"
			?striped="${ striped }"
			?striped-columns="${ stripedColumns }"
		>
			<p slot="caption">Earth's Oceans</p>
			<wt-header-row>
				<wt-header-cell>#</wt-header-cell>
				<wt-header-cell>Ocean</wt-header-cell>
				<wt-header-cell>Area (km<sup>2</sup>)</wt-header-cell>
				<wt-header-cell>Volume (km<sup>3</sup>)</wt-header-cell>
			</wt-header-row>
			<wt-row>
				<wt-cell>1</wt-cell>
				<wt-cell>Pacific Ocean</wt-cell>
				<wt-cell>${ intl.format(areas.get('pacific') as number) }</wt-cell>
				<wt-cell>${ intl.format(volumes.get('pacific') as number) }</wt-cell>
			</wt-row>
			<wt-row>
				<wt-cell>2</wt-cell>
				<wt-cell>Atlantic Ocean</wt-cell>
				<wt-cell>${ intl.format(areas.get('atlantic') as number) }</wt-cell>
				<wt-cell>${ intl.format(volumes.get('atlantic') as number) }</wt-cell>
			</wt-row>
			<wt-row>
				<wt-cell>3</wt-cell>
				<wt-cell>Indian Ocean</wt-cell>
				<wt-cell>${ intl.format(areas.get('indian') as number) }</wt-cell>
				<wt-cell>${ intl.format(volumes.get('indian') as number) }</wt-cell>
			</wt-row>
			<wt-row>
				<wt-cell>4</wt-cell>
				<wt-cell>Antarctic/Southern Ocean</wt-cell>
				<wt-cell>${ intl.format(areas.get('antarctic') as number) }</wt-cell>
				<wt-cell>${ intl.format(volumes.get('antarctic') as number) }</wt-cell>
			</wt-row>
			<wt-row>
				<wt-cell>5</wt-cell>
				<wt-cell>Artic Ocean</wt-cell>
				<wt-cell>${ intl.format(areas.get('arctic') as number) }</wt-cell>
				<wt-cell>${ intl.format(volumes.get('arctic') as number) }</wt-cell>
			</wt-row>
			<wt-footer-row>
				<wt-cell></wt-cell>
				<wt-header-cell>Total:</wt-header-cell>
				<wt-cell>${ intl.format(totalArea) }</wt-cell>
				<wt-cell>${ intl.format(totalVolume) }</wt-cell>
			</wt-footer-row>
		</wt-table>
	`;
}
