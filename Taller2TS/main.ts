import { serie } from './serie.js';

import { series } from './dataseries.js';

const seriesTbody: HTMLElement = document.getElementById('infoTabla')!;



crearSeries(series);

function crearSeries(series: serie[]): void {
    series.forEach(c => {
        let trElement = document.createElement("tr");
        trElement.innerHTML = `<th scope="row">${c.id}</th>
                               <td>${c.name}</td>
                               <td>${c.channel}</td>
                               <td>${c.seasons}</td>`;
        seriesTbody.appendChild(trElement);
    })
    let trAverage = document.createElement("tr");
    trAverage.innerHTML = `<td> Seasons Average: ${calcularAVG(series)}</td>`;
    seriesTbody.appendChild(trAverage);
}

function calcularAVG(series: serie[]): number {
    let n: number = 0;
    let totalSeasons: number = 0;
    series.forEach(c => {
        n = n + 1;
        totalSeasons = totalSeasons + c.seasons;
    });
    return totalSeasons/n;
}