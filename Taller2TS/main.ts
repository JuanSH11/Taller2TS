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
    
}